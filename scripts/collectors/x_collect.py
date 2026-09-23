"""Collect via existing local sessions; export JSON or push a bounded snapshot.
Install twscrape OR twikit separately. No password entry or session creation.
"""
import argparse
import asyncio
import json
import os
from pathlib import Path
import urllib.request

QUERIES = [
    '(OpenAI OR Claude OR Gemini OR DeepSeek OR Qwen) API -filter:retweets',
    '(OpenRouter OR 中转站) (免费 OR pricing OR API OR outage OR 故障 OR 兼容) -filter:retweets',
    '(LLM OR 大模型) (tutorial OR 教程 OR workflow OR 报错 OR feature) -filter:retweets',
]

def iso(value):
    return value.isoformat() if hasattr(value, 'isoformat') else str(value)

async def collect(args):
    posts = []
    if args.provider == 'twscrape':
        from twscrape import API
        if not Path(args.session).is_file():
            raise ValueError('Provide an existing twscrape account database')
        api = API(args.session)
        for query in QUERIES:
            async for tweet in api.search(query, limit=15):
                posts.append({'url': tweet.url, 'text': tweet.rawContent, 'date': iso(tweet.date)})
    else:
        from twikit import Client
        if not Path(args.session).is_file():
            raise ValueError('Provide an existing Twikit cookies file')
        client = Client('en-US')
        client.load_cookies(args.session)
        for query in QUERIES:
            tweets = await client.search_tweet(query, 'Latest', count=15)
            for tweet in tweets[:15]:
                posts.append({'url': f'https://x.com/{tweet.user.screen_name}/status/{tweet.id}',
                              'text': tweet.text, 'created_at': tweet.created_at})
    return posts[:45]

class NoRedirect(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, req, fp, code, msg, headers, newurl):
        return None

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('provider', choices=['twscrape', 'twikit'])
    parser.add_argument('--session', required=True, help='Existing local DB/cookies path; never uploaded')
    parser.add_argument('--output', default='radar-export.json')
    parser.add_argument('--push', action='store_true', help='Push to VibeBase with RADAR_INGEST_TOKEN')
    args = parser.parse_args()
    if Path(args.output).resolve() == Path(args.session).resolve():
        raise ValueError('Output must not overwrite session')
    posts = asyncio.run(asyncio.wait_for(collect(args), timeout=180))
    payload = {'source': args.provider, 'items': posts}
    fd = os.open(args.output, os.O_WRONLY | os.O_CREAT | os.O_TRUNC, 0o600)
    with os.fdopen(fd, 'w', encoding='utf-8') as out:
        json.dump(posts, out, ensure_ascii=False)
    if args.push:
        token = os.environ.get('RADAR_INGEST_TOKEN')
        if not token:
            raise ValueError('RADAR_INGEST_TOKEN is required for push')
        request = urllib.request.Request('https://vibebase.vip/api/radar/ingest',
            data=json.dumps(payload).encode(), method='POST',
            headers={'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json'})
        with urllib.request.build_opener(NoRedirect).open(request, timeout=30) as result:
            print(result.read(1024).decode())
    print(f'Exported {len(posts)} posts. Session data stays local.')

if __name__ == '__main__':
    try:
        main()
    except Exception as exc:
        # Third-party exceptions may contain request credentials. Do not print them.
        raise SystemExit(f'Collection failed ({type(exc).__name__}); check local session and provider status.')
