export const discovery = {
  "checkedAt": "2026-09-21",
  "tasks": [
    {
      "id": "text",
      "name": "生文",
      "desc": "写作、摘要与内容生产",
      "icon": "T"
    },
    {
      "id": "code",
      "name": "编程",
      "desc": "代码、调试与开发助手",
      "icon": "</>"
    },
    {
      "id": "image",
      "name": "生图",
      "desc": "创作、编辑与商品视觉",
      "icon": "▧"
    },
    {
      "id": "video",
      "name": "生视频",
      "desc": "短片、分镜与动态内容",
      "icon": "▷"
    },
    {
      "id": "audio",
      "name": "语音",
      "desc": "配音与实时语音交互",
      "icon": "≈"
    },
    {
      "id": "knowledge",
      "name": "知识库",
      "desc": "检索、文档与引用",
      "icon": "⌘"
    }
  ],
  "models": [
    {
      "id": "flash-lite",
      "name": "Gemini 2.5 Flash-Lite",
      "tasks": [
        "text"
      ],
      "desc": "适合先做低成本文本流程验证。质量需使用自己的任务样本评估。",
      "source": "https://ai.google.dev/gemini-api/docs/pricing",
      "provider": "official-gemini",
      "checkedAt": "2026-09-21",
      "modelId": "gemini-2.5-flash-lite"
    },
    {
      "id": "flash",
      "name": "Gemini 2.5 Flash",
      "tasks": [
        "text",
        "code",
        "knowledge"
      ],
      "desc": "可作为写作、代码与文档问答的候选。检索与引用还需要应用层配合。",
      "source": "https://ai.google.dev/gemini-api/docs/pricing",
      "provider": "official-gemini",
      "checkedAt": "2026-09-21",
      "modelId": "gemini-2.5-flash"
    },
    {
      "id": "deepseek",
      "name": "DeepSeek V3.1",
      "tasks": [
        "text",
        "code"
      ],
      "desc": "通过聚合渠道接入的文本与代码候选。核对模型标识，勿与其他版本混用。",
      "source": "https://openrouter.ai/deepseek/deepseek-chat-v3.1",
      "provider": "openrouter",
      "checkedAt": "2026-09-21",
      "modelId": "deepseek/deepseek-chat-v3.1"
    },
    {
      "id": "sonnet",
      "name": "Claude Sonnet 4",
      "tasks": [
        "text",
        "code"
      ],
      "desc": "已核对渠道目录。存在长上下文阶梯计费，暂不参与固定单价排序；请按实际请求长度查价。",
      "source": "https://openrouter.ai/anthropic/claude-sonnet-4",
      "provider": "openrouter",
      "checkedAt": "2026-09-21",
      "modelId": "anthropic/claude-sonnet-4"
    },
    {
      "id": "image",
      "name": "Gemini 3.1 Flash Image",
      "tasks": [
        "image"
      ],
      "desc": "支持图像生成与编辑。先固定尺寸、参考图和质量要求，再比较报价。",
      "source": "https://ai.google.dev/gemini-api/docs/image-generation",
      "provider": "official-gemini",
      "checkedAt": "2026-09-21",
      "modelId": "gemini-3.1-flash-image"
    },
    {
      "id": "veo",
      "name": "Veo 3.1",
      "tasks": [
        "video"
      ],
      "desc": "视频生成候选。比较时固定分辨率、时长与音频规格。",
      "source": "https://ai.google.dev/gemini-api/docs/video",
      "provider": "official-gemini",
      "checkedAt": "2026-09-21",
      "modelId": "veo-3.1-generate-preview"
    },
    {
      "id": "tts",
      "name": "Gemini 2.5 Flash Preview TTS",
      "tasks": [
        "audio"
      ],
      "desc": "文本转语音候选，处于预览阶段。音频输出按 Token 计费，不直接等同于每分钟单价。",
      "source": "https://ai.google.dev/gemini-api/docs/pricing",
      "provider": "official-gemini",
      "checkedAt": "2026-09-21",
      "modelId": "gemini-2.5-flash-preview-tts"
    },
    {
      "id": "embedding",
      "name": "Gemini Embedding 2",
      "tasks": [
        "knowledge"
      ],
      "desc": "用于检索的向量表示。需要配合文档切分、索引与回答模型；不是独立问答应用。",
      "source": "https://ai.google.dev/gemini-api/docs/embeddings",
      "provider": "official-gemini",
      "checkedAt": "2026-09-21",
      "modelId": "gemini-embedding-2"
    },
    {
      "id": "qwen-coder",
      "name": "Qwen: Qwen3 Coder 480B A35B",
      "modelId": "qwen/qwen3-coder",
      "tasks": [
        "code"
      ],
      "source": "https://openrouter.ai/qwen/qwen3-coder",
      "provider": "openrouter",
      "desc": "按任务与规格选择；本页记录来源资料，不代表本站实测质量排名。",
      "checkedAt": "2026-09-21"
    },
    {
      "id": "qwen-instruct",
      "name": "Qwen: Qwen3 235B A22B Instruct 2507",
      "modelId": "qwen/qwen3-235b-a22b-2507",
      "tasks": [
        "text"
      ],
      "source": "https://openrouter.ai/qwen/qwen3-235b-a22b-2507",
      "provider": "openrouter",
      "desc": "按任务与规格选择；本页记录来源资料，不代表本站实测质量排名。",
      "checkedAt": "2026-09-21"
    },
    {
      "id": "gpt-oss",
      "name": "OpenAI: gpt-oss-120b",
      "modelId": "openai/gpt-oss-120b",
      "tasks": [
        "text",
        "code"
      ],
      "source": "https://openrouter.ai/openai/gpt-oss-120b",
      "provider": "openrouter",
      "desc": "按任务与规格选择；本页记录来源资料，不代表本站实测质量排名。",
      "checkedAt": "2026-09-21"
    },
    {
      "id": "mistral-small",
      "name": "Mistral: Mistral Small 3.2 24B",
      "modelId": "mistralai/mistral-small-3.2-24b-instruct",
      "tasks": [
        "text"
      ],
      "source": "https://openrouter.ai/mistralai/mistral-small-3.2-24b-instruct",
      "provider": "openrouter",
      "desc": "按任务与规格选择；本页记录来源资料，不代表本站实测质量排名。",
      "checkedAt": "2026-09-21"
    },
    {
      "id": "free-qwen",
      "name": "Qwen: Qwen3.8 27B (free)",
      "modelId": "qwen/qwen3.8-27b:free",
      "tasks": [
        "text"
      ],
      "source": "https://openrouter.ai/qwen/qwen3.8-27b:free",
      "provider": "openrouter",
      "desc": "目录中输入、输出单价为零。可用性与账号限额需在调用时确认。",
      "checkedAt": "2026-09-21"
    },
    {
      "id": "free-gemma",
      "name": "Google: Gemma 4 31B (free)",
      "modelId": "google/gemma-4-31b-it:free",
      "tasks": [
        "text"
      ],
      "source": "https://openrouter.ai/google/gemma-4-31b-it:free",
      "provider": "openrouter",
      "desc": "目录中输入、输出单价为零。可用性与账号限额需在调用时确认。",
      "checkedAt": "2026-09-21"
    },
    {
      "id": "free-nemotron",
      "name": "NVIDIA: Nemotron 3.5 Lightning (free)",
      "modelId": "nvidia/nemotron-3.5-lightning:free",
      "tasks": [
        "text"
      ],
      "source": "https://openrouter.ai/nvidia/nemotron-3.5-lightning:free",
      "provider": "openrouter",
      "desc": "目录中输入、输出单价为零。可用性与账号限额需在调用时确认。",
      "checkedAt": "2026-09-21"
    },
    {
      "id": "free-cohere",
      "name": "Cohere: North Mini Code (free)",
      "modelId": "cohere/north-mini-code:free",
      "tasks": [
        "code"
      ],
      "source": "https://openrouter.ai/cohere/north-mini-code:free",
      "provider": "openrouter",
      "desc": "目录中输入、输出单价为零。可用性与账号限额需在调用时确认。",
      "checkedAt": "2026-09-21"
    },
    {
      "id": "image-lite",
      "name": "Gemini 3.1 Flash Lite Image",
      "modelId": "gemini-3.1-flash-lite-image",
      "tasks": [
        "image"
      ],
      "source": "https://ai.google.dev/gemini-api/docs/pricing",
      "provider": "official-gemini",
      "desc": "按任务与规格选择；本页记录来源资料，不代表本站实测质量排名。",
      "checkedAt": "2026-09-21"
    },
    {
      "id": "flux",
      "name": "FLUX.1 schnell",
      "modelId": "fal-ai/flux/schnell",
      "tasks": [
        "image"
      ],
      "source": "https://fal.ai/models/fal-ai/flux/schnell",
      "provider": null,
      "desc": "按任务与规格选择；本页记录来源资料，不代表本站实测质量排名。",
      "checkedAt": "2026-09-21"
    },
    {
      "id": "veo-fast",
      "name": "Veo 3.1 Fast",
      "modelId": "veo-3.1-fast-generate-preview",
      "tasks": [
        "video"
      ],
      "source": "https://ai.google.dev/gemini-api/docs/pricing",
      "provider": "official-gemini",
      "desc": "按任务与规格选择；本页记录来源资料，不代表本站实测质量排名。",
      "checkedAt": "2026-09-21"
    },
    {
      "id": "veo-lite",
      "name": "Veo 3.1 Lite",
      "modelId": "veo-3.1-lite-generate-preview",
      "tasks": [
        "video"
      ],
      "source": "https://ai.google.dev/gemini-api/docs/pricing",
      "provider": "official-gemini",
      "desc": "按任务与规格选择；本页记录来源资料，不代表本站实测质量排名。",
      "checkedAt": "2026-09-21"
    },
    {
      "id": "tts-pro",
      "name": "Gemini 2.5 Pro Preview TTS",
      "modelId": "gemini-2.5-pro-preview-tts",
      "tasks": [
        "audio"
      ],
      "source": "https://ai.google.dev/gemini-api/docs/pricing",
      "provider": "official-gemini",
      "desc": "按任务与规格选择；本页记录来源资料，不代表本站实测质量排名。",
      "checkedAt": "2026-09-21"
    },
    {
      "id": "tts-31",
      "name": "Gemini 3.1 Flash TTS Preview",
      "modelId": "gemini-3.1-flash-tts-preview",
      "tasks": [
        "audio"
      ],
      "source": "https://ai.google.dev/gemini-api/docs/pricing",
      "provider": "official-gemini",
      "desc": "按任务与规格选择；本页记录来源资料，不代表本站实测质量排名。",
      "checkedAt": "2026-09-21"
    },
    {
      "id": "voyage-4-lite",
      "name": "voyage-4-lite",
      "modelId": "voyage-4-lite",
      "tasks": [
        "knowledge"
      ],
      "source": "https://docs.voyageai.com/docs/pricing",
      "provider": null,
      "desc": "按任务与规格选择；本页记录来源资料，不代表本站实测质量排名。",
      "checkedAt": "2026-09-21"
    },
    {
      "id": "voyage-4",
      "name": "voyage-4",
      "modelId": "voyage-4",
      "tasks": [
        "knowledge"
      ],
      "source": "https://docs.voyageai.com/docs/pricing",
      "provider": null,
      "desc": "按任务与规格选择；本页记录来源资料，不代表本站实测质量排名。",
      "checkedAt": "2026-09-21"
    },
    {
      "id": "voyage-4-large",
      "name": "voyage-4-large",
      "modelId": "voyage-4-large",
      "tasks": [
        "knowledge"
      ],
      "source": "https://docs.voyageai.com/docs/pricing",
      "provider": null,
      "desc": "按任务与规格选择；本页记录来源资料，不代表本站实测质量排名。",
      "checkedAt": "2026-09-21"
    }
  ],
  "quotes": [
    {
      "id": "google-lite",
      "model": "flash-lite",
      "channel": "Google 官方",
      "input": 0.1,
      "output": 0.4,
      "cache": 0.01,
      "source": "https://ai.google.dev/gemini-api/docs/pricing",
      "provider": "official-gemini",
      "currency": "USD",
      "unit": "1M tokens",
      "checkedAt": "2026-09-21",
      "note": "标准文本用量；不含缓存存储、搜索工具、税费及充值手续费。",
      "modelId": "gemini-2.5-flash-lite"
    },
    {
      "id": "router-lite",
      "model": "flash-lite",
      "channel": "OpenRouter",
      "input": 0.09999999999999999,
      "output": 0.39999999999999997,
      "cache": 0.01,
      "source": "https://openrouter.ai/api/v1/models",
      "provider": "openrouter",
      "currency": "USD",
      "unit": "1M tokens",
      "checkedAt": "2026-09-21",
      "note": "目录展示起价；实际路由供应商报价可能更高。仅标准文本，不含工具、缓存存储与渠道手续费。",
      "modelId": "google/gemini-2.5-flash-lite",
      "rawPricing": {
        "prompt": "0.0000001",
        "completion": "0.0000004",
        "image": "0.0000001",
        "audio": "0.0000003",
        "input_audio_cache": "0.00000003",
        "web_search": "0.014",
        "internal_reasoning": "0.0000004",
        "input_cache_read": "0.00000001",
        "input_cache_write": "0.0000000833333333333333"
      }
    },
    {
      "id": "google-flash",
      "model": "flash",
      "channel": "Google 官方",
      "input": 0.3,
      "output": 2.5,
      "cache": 0.03,
      "source": "https://ai.google.dev/gemini-api/docs/pricing",
      "provider": "official-gemini",
      "currency": "USD",
      "unit": "1M tokens",
      "checkedAt": "2026-09-21",
      "note": "标准文本用量；不含缓存存储、搜索工具、税费及充值手续费。",
      "modelId": "gemini-2.5-flash"
    },
    {
      "id": "router-flash",
      "model": "flash",
      "channel": "OpenRouter",
      "input": 0.3,
      "output": 2.5,
      "cache": 0.03,
      "source": "https://openrouter.ai/api/v1/models",
      "provider": "openrouter",
      "currency": "USD",
      "unit": "1M tokens",
      "checkedAt": "2026-09-21",
      "note": "目录展示起价；实际路由供应商报价可能更高。仅标准文本，不含工具、缓存存储与渠道手续费。",
      "modelId": "google/gemini-2.5-flash",
      "rawPricing": {
        "prompt": "0.0000003",
        "completion": "0.0000025",
        "image": "0.0000003",
        "audio": "0.000001",
        "input_audio_cache": "0.0000001",
        "web_search": "0.014",
        "internal_reasoning": "0.0000025",
        "input_cache_read": "0.00000003",
        "input_cache_write": "0.0000000833333333333333"
      }
    },
    {
      "id": "router-deepseek",
      "model": "deepseek",
      "channel": "OpenRouter",
      "input": 0.25,
      "output": 0.95,
      "cache": 0.13,
      "source": "https://openrouter.ai/api/v1/models",
      "provider": "openrouter",
      "currency": "USD",
      "unit": "1M tokens",
      "checkedAt": "2026-09-21",
      "note": "目录展示起价；实际路由供应商报价可能更高。仅标准文本，不含工具、缓存存储与渠道手续费。",
      "modelId": "deepseek/deepseek-chat-v3.1",
      "rawPricing": {
        "prompt": "0.00000025",
        "completion": "0.00000095",
        "input_cache_read": "0.00000013"
      }
    },
    {
      "id": "router-qwen-coder",
      "model": "qwen-coder",
      "modelId": "qwen/qwen3-coder",
      "channel": "OpenRouter",
      "input": 0.3,
      "output": 1.0,
      "source": "https://openrouter.ai/api/v1/models",
      "provider": "openrouter",
      "currency": "USD",
      "unit": "1M tokens",
      "checkedAt": "2026-09-21",
      "rawPricing": {
        "prompt": "0.0000003",
        "completion": "0.000001",
        "input_cache_read": "0.0000001"
      },
      "note": "目录展示起价；路由、缓存及附加费用需按实际账单复核。"
    },
    {
      "id": "router-qwen-instruct",
      "model": "qwen-instruct",
      "modelId": "qwen/qwen3-235b-a22b-2507",
      "channel": "OpenRouter",
      "input": 0.0875,
      "output": 0.35,
      "source": "https://openrouter.ai/api/v1/models",
      "provider": "openrouter",
      "currency": "USD",
      "unit": "1M tokens",
      "checkedAt": "2026-09-21",
      "rawPricing": {
        "prompt": "0.0000000875",
        "completion": "0.00000035",
        "input_cache_read": "0.0000000175"
      },
      "note": "目录展示起价；路由、缓存及附加费用需按实际账单复核。"
    },
    {
      "id": "router-gpt-oss",
      "model": "gpt-oss",
      "modelId": "openai/gpt-oss-120b",
      "channel": "OpenRouter",
      "input": 0.15,
      "output": 0.6,
      "source": "https://openrouter.ai/api/v1/models",
      "provider": "openrouter",
      "currency": "USD",
      "unit": "1M tokens",
      "checkedAt": "2026-09-21",
      "rawPricing": {
        "prompt": "0.00000015",
        "completion": "0.0000006",
        "input_cache_read": "0.000000075"
      },
      "note": "目录展示起价；路由、缓存及附加费用需按实际账单复核。"
    },
    {
      "id": "router-mistral-small",
      "model": "mistral-small",
      "modelId": "mistralai/mistral-small-3.2-24b-instruct",
      "channel": "OpenRouter",
      "input": 0.09375,
      "output": 0.25,
      "source": "https://openrouter.ai/api/v1/models",
      "provider": "openrouter",
      "currency": "USD",
      "unit": "1M tokens",
      "checkedAt": "2026-09-21",
      "rawPricing": {
        "prompt": "0.00000009375",
        "completion": "0.00000025"
      },
      "note": "目录展示起价；路由、缓存及附加费用需按实际账单复核。"
    }
  ],
  "offers": [
    {
      "id": "gemini-free",
      "title": "Gemini 免费层",
      "type": "free",
      "category": "周期免费额度",
      "desc": "部分模型支持免费输入与输出，额度与地区资格以控制台为准。",
      "terms": "免费层的数据使用政策与付费层不同；绑卡及项目资格请查看官方控制台。",
      "source": "https://ai.google.dev/gemini-api/docs/pricing",
      "provider": "official-gemini",
      "endsAt": null,
      "checkedAt": "2026-09-21"
    },
    {
      "id": "router-free",
      "title": "OpenRouter 免费模型",
      "type": "free",
      "category": "免费模型入口",
      "desc": "仅目录中具有 :free 版本的模型可免费使用。",
      "terms": "模型可用性与限流可能变化，不能把任意模型名加后缀当作免费模型。账户条件以官方说明为准。",
      "source": "https://openrouter.ai/docs/guides/routing/model-variants/free",
      "provider": "openrouter",
      "endsAt": null,
      "checkedAt": "2026-09-21"
    },
    {
      "id": "flash-promo",
      "title": "Gemini 3.8 Flash 阶段定价",
      "type": "promo",
      "category": "限时付费优惠",
      "desc": "标准文本输入 $0.75、输出 $3.75 / 百万 Token；2027-01-01 起官方列有新价格。",
      "terms": "这是付费报价，不是免费额度。截止日期按官方页面，未公布具体时区。",
      "source": "https://ai.google.dev/gemini-api/docs/pricing",
      "provider": "official-gemini",
      "endsAt": "2026-12-31",
      "checkedAt": "2026-09-21"
    },
    {
      "id": "pateway-credit",
      "title": "PatewayAI 邀请额度",
      "type": "reward",
      "category": "邀请奖励",
      "desc": "站方首页列出邀请奖励最高价值 $150 免费额度。",
      "terms": "需要满足邀请条件，具体门槛待账户内确认；使用额度不代表现金，不属于无条件注册福利。",
      "source": "https://pateway.ai/",
      "provider": null,
      "endsAt": null,
      "checkedAt": "2026-09-21"
    },
    {
      "id": "free-qwen",
      "title": "Qwen: Qwen3.8 27B (free)",
      "type": "free",
      "category": "免费模型",
      "desc": "qwen/qwen3.8-27b:free · 输入/输出 $0；目录核验 2026-09-21。",
      "terms": "需要 OpenRouter 账号与密钥。限流、每日额度和上游容量受账号政策影响；未执行账号内推理。",
      "source": "https://openrouter.ai/qwen/qwen3.8-27b:free",
      "model": "free-qwen",
      "endsAt": null,
      "checkedAt": "2026-09-21"
    },
    {
      "id": "free-gemma",
      "title": "Google: Gemma 4 31B (free)",
      "type": "free",
      "category": "免费模型",
      "desc": "google/gemma-4-31b-it:free · 输入/输出 $0；目录核验 2026-09-21。",
      "terms": "需要 OpenRouter 账号与密钥。限流、每日额度和上游容量受账号政策影响；未执行账号内推理。",
      "source": "https://openrouter.ai/google/gemma-4-31b-it:free",
      "model": "free-gemma",
      "endsAt": null,
      "checkedAt": "2026-09-21"
    },
    {
      "id": "free-nemotron",
      "title": "NVIDIA: Nemotron 3.5 Lightning (free)",
      "type": "free",
      "category": "免费模型",
      "desc": "nvidia/nemotron-3.5-lightning:free · 输入/输出 $0；目录核验 2026-09-21。",
      "terms": "需要 OpenRouter 账号与密钥。限流、每日额度和上游容量受账号政策影响；未执行账号内推理。",
      "source": "https://openrouter.ai/nvidia/nemotron-3.5-lightning:free",
      "model": "free-nemotron",
      "endsAt": null,
      "checkedAt": "2026-09-21"
    },
    {
      "id": "free-cohere",
      "title": "Cohere: North Mini Code (free)",
      "type": "free",
      "category": "免费模型",
      "desc": "cohere/north-mini-code:free · 输入/输出 $0；目录核验 2026-09-21。",
      "terms": "需要 OpenRouter 账号与密钥。限流、每日额度和上游容量受账号政策影响；未执行账号内推理。",
      "source": "https://openrouter.ai/cohere/north-mini-code:free",
      "model": "free-cohere",
      "endsAt": null,
      "checkedAt": "2026-09-21"
    },
    {
      "id": "voyage-free",
      "title": "Voyage 4 系列试用",
      "type": "free",
      "category": "一次性试用",
      "desc": "voyage-4 / 4-lite / 4-large：各模型价格表列出前 2 亿 Token 免费。",
      "terms": "仅适用官方列明模型与账户规则。Batch 不抵扣免费额度；不是每月恢复的免费配额。",
      "source": "https://docs.voyageai.com/docs/pricing",
      "endsAt": null,
      "checkedAt": "2026-09-21"
    },
    {
      "id": "relay-free-18",
      "relayRank": 18,
      "scope": "relay",
      "benefitKind": "trial",
      "title": "BuyToken",
      "category": "注册赠额",
      "type": "free",
      "desc": "¥1 站内体验额度",
      "terms": "邮箱注册。适用模型、有效期和限流未在本次公开页面明确，领取后以控制台为准。",
      "modelScope": "站方公开说明为 Claude / GPT API 网关，免费额度适用的具体模型名单未明确。",
      "source": "https://buytoken.work/",
      "endsAt": null,
      "checkedAt": "2026-09-21",
      "evidence": "站方公开说明已核对；未注册领取、未调用测试。"
    },
    {
      "id": "relay-free-19",
      "relayRank": 19,
      "scope": "relay",
      "benefitKind": "trial",
      "title": "OneHop",
      "category": "注册试用",
      "type": "free",
      "desc": "试用额度，金额未公布",
      "terms": "站方提供注册试用额度，但金额、有效期和适用范围未公布；请先确认到账，再发起调用。",
      "modelScope": "多模型 API 网关；不将平台全部模型自动视为免费可用。",
      "source": "https://onehop.ai/",
      "endsAt": null,
      "checkedAt": "2026-09-21",
      "evidence": "站方公开说明已核对；未注册领取、未调用测试。"
    },
    {
      "id": "relay-free-179",
      "relayRank": 179,
      "scope": "relay",
      "benefitKind": "trial",
      "title": "PatewayAI",
      "category": "注册赠额",
      "type": "free",
      "desc": "$1 站内体验额度",
      "terms": "注册赠 $1；首购赠 $3、邀请奖励属于其他活动，不计入无充值试用。有效期与限流未公布。",
      "modelScope": "Claude / Codex API 中转；试用适用分组以控制台为准。",
      "source": "https://pateway.ai/",
      "endsAt": null,
      "checkedAt": "2026-09-21",
      "evidence": "站方公开说明已核对；未注册领取、未调用测试。"
    },
    {
      "id": "relay-free-594",
      "relayRank": 594,
      "scope": "relay",
      "benefitKind": "trial",
      "title": "云马 AI",
      "category": "注册赠额",
      "type": "free",
      "desc": "$2 站内体验额度",
      "terms": "站方写明注册赠 $2、无需信用卡；具体模型分组、额度期限与限流以控制台为准。",
      "modelScope": "模型 API 网关，站方提供获取 Key 和替换接入地址的流程。",
      "source": "https://yunma.ai/",
      "endsAt": null,
      "checkedAt": "2026-09-21",
      "evidence": "站方公开说明已核对；未注册领取、未调用测试。"
    },
    {
      "id": "relay-free-711",
      "relayRank": 711,
      "scope": "relay",
      "benefitKind": "trial",
      "title": "玄枢API",
      "category": "注册赠额",
      "type": "free",
      "desc": "1 站内余额，币种未明确",
      "terms": "仅按当前首页的“注册 1 余额”记录；不将目录中的特定来源赠 $5 当作通用福利。期限与适用模型未公布。",
      "modelScope": "多模型 API 入口；站内余额不是现金，不跨站比较面值。",
      "source": "https://xuanshuapi.com/",
      "endsAt": null,
      "checkedAt": "2026-09-21",
      "evidence": "站方公开说明已核对；未注册领取、未调用测试。"
    },
    {
      "id": "relay-free-611",
      "relayRank": 611,
      "scope": "relay",
      "benefitKind": "conditional",
      "title": "HohoAI",
      "category": "邮箱验证领取",
      "type": "free",
      "desc": "¥10 站内体验额度",
      "terms": "注册并验证邮箱。首页称体验额度全模型可用；实际分组、到账与限流仍以账号为准。期限未公布。",
      "modelScope": "站方公开范围为 Claude / GPT API；未做付费推理验证。",
      "source": "https://hohocode.ai/",
      "endsAt": null,
      "checkedAt": "2026-09-21",
      "evidence": "站方公开说明已核对；未注册领取、未调用测试。"
    },
    {
      "id": "relay-free-47",
      "relayRank": 47,
      "scope": "relay",
      "benefitKind": "conditional",
      "title": "Volt",
      "category": "绑定 Telegram 领取",
      "type": "free",
      "desc": "$10 站内体验额度",
      "terms": "注册后绑定 Telegram；并非只注册就送。首页写明所有渠道可用，具体资格、有效期和限流需账号内确认。",
      "modelScope": "Claude / GPT / Gemini API；保留已确认的本站推广入口。",
      "source": "https://voltapi.ai/",
      "endsAt": null,
      "checkedAt": "2026-09-21",
      "evidence": "站方公开说明已核对；未注册领取、未调用测试。"
    },
    {
      "id": "relay-free-248",
      "relayRank": 248,
      "scope": "relay",
      "benefitKind": "conditional",
      "title": "球球Token",
      "category": "进群领取",
      "type": "free",
      "desc": "$5 站内测试额度",
      "terms": "加入官方交流群，按站方流程向管理员或机器人领取；不是自动注册到账。页面称全线模型可用，期限未公布。",
      "modelScope": "AI API 网关；先核对领取方式与账号额度，再创建 Key 使用。",
      "source": "https://qiuqiutoken.com/",
      "endsAt": null,
      "checkedAt": "2026-09-21",
      "evidence": "站方公开说明已核对；未注册领取、未调用测试。"
    }
  ],
  "news": [
    {
      "id": "agent-september",
      "title": "Antigravity Agent 更新预览版本",
      "date": "2026-09-17",
      "status": "preview",
      "label": "预览更新",
      "desc": "官方发布 09-2026 预览版；本地工具集成需检查接口变更。",
      "source": "https://ai.google.dev/gemini-api/docs/changelog",
      "checkedAt": "2026-09-21"
    },
    {
      "id": "live-ga",
      "title": "Gemini 3.8 Live 系列正式上线",
      "date": "2026-09-15",
      "status": "live",
      "label": "正式上线",
      "desc": "官方更新记录列出实时语音模型及 Extended Thinking 版本。",
      "source": "https://ai.google.dev/gemini-api/docs/changelog",
      "checkedAt": "2026-09-21"
    },
    {
      "id": "image-sunset",
      "title": "旧版 Flash Image 下线预告",
      "date": "2026-10-02",
      "status": "upcoming",
      "label": "下线预告",
      "desc": "Gemini 2.5 Flash Image 计划下线，官方建议迁移到新版图像模型。",
      "source": "https://ai.google.dev/gemini-api/docs/pricing",
      "checkedAt": "2026-09-21"
    }
  ],
  "industries": [
    {
      "id": "commerce",
      "name": "电商经营",
      "tag": "商品 → 内容 → 客服",
      "desc": "从一件商品开始，让文案、视觉和问答衔接起来。",
      "steps": [
        [
          "商品文案",
          "输入真实规格、目标人群及禁用表述；输出卖点与多版本标题。",
          "flash-lite"
        ],
        [
          "商品视觉",
          "提供有授权的商品图片与版式需求，人工核对商品一致性。",
          "image"
        ],
        [
          "售后问答",
          "整理配送、退换与产品资料，再做检索问答；明确人工转接。",
          "embedding"
        ]
      ],
      "article": "choose-model",
      "budget": "先用 20 个商品样本验证。文本成本可估算，图像成本按实际尺寸另计。"
    },
    {
      "id": "marketing",
      "name": "营销内容",
      "tag": "选题 → 创作 → 配音",
      "desc": "把一个主题拆成可以复用的多种内容。",
      "steps": [
        [
          "选题与文稿",
          "输入受众、证据和语气，生成提纲并核查事实。",
          "flash"
        ],
        [
          "配图",
          "先固定视觉风格及尺寸，再批量制作内容素材。",
          "image"
        ],
        [
          "配音",
          "先确认发音、语速和音色，再生成成片音频。",
          "tts"
        ]
      ],
      "article": "read-prices",
      "budget": "按成稿率估算成本；返工次数也应计入，不能只比较单次生成价。"
    },
    {
      "id": "development",
      "name": "产品研发",
      "tag": "需求 → 代码 → 验收",
      "desc": "围绕真实代码任务比较模型，不凭一个总分决定。",
      "steps": [
        [
          "需求拆分",
          "整理输入输出、约束和验收用例。",
          "flash"
        ],
        [
          "代码实现",
          "分别试用候选模型，检查工具兼容与上下文预算。",
          "sonnet"
        ],
        [
          "测试与复核",
          "执行测试并人工检查差异，记录失败和重试成本。",
          "deepseek"
        ]
      ],
      "article": "first-api",
      "budget": "代码上下文往往比提问更长；使用文本计算器前，估计每轮实际输入量。"
    },
    {
      "id": "knowledge",
      "name": "企业知识库",
      "tag": "资料 → 检索 → 引用",
      "desc": "先让检索找到正确材料，再让模型组织答案。",
      "steps": [
        [
          "整理资料",
          "确认文档版本、访问权限和可上传范围。",
          "embedding"
        ],
        [
          "检索索引",
          "切分文档并建立索引，用已知答案测试召回。",
          "embedding"
        ],
        [
          "带来源回答",
          "把检索片段送给回答模型，要求引用；资料不足时说明未知。",
          "flash"
        ]
      ],
      "article": "choose-model",
      "budget": "向量化、存储、检索与回答费用分开计算；本站文本计算器只覆盖回答部分。"
    }
  ],
  "articles": [
    {
      "id": "choose-model",
      "category": "选模型",
      "title": "第一次选大模型：先看任务，再看价格",
      "summary": "用同一组真实任务，对比质量、成本和可接入性。",
      "minutes": 3,
      "tasks": [
        "text",
        "code"
      ],
      "models": [
        "flash",
        "deepseek",
        "sonnet"
      ],
      "sections": [
        [
          "先写清楚要交付什么",
          "把“想找一个强模型”改成可验收的任务，例如从产品资料生成 5 个标题，或修复一个附带测试的错误。记录语言、输出格式、长度和不允许出现的内容。任务越清楚，模型之间越容易比较。"
        ],
        [
          "准备一组固定样本",
          "选 10–20 个真实但不敏感的例子，包含常见情况和困难情况。给候选模型相同的材料与要求。分别记录正确性、完整性、人工修改时间及失败次数；不要把单个漂亮答案当作稳定表现。"
        ],
        [
          "算完成任务的成本",
          "低单价不一定意味着低总成本。把重试、长上下文、工具调用和人工返工考虑进去。本站报价只覆盖标明的计费项目，正式预算还需确认供应商账单口径。"
        ],
        [
          "确认能否真正接入",
          "确认模型版本、接口协议、流式输出和工具调用是否适配现有客户端。先从小规模任务开始；有质量证据之后，再决定是否切换主要工作流。"
        ],
        [
          "动手练习：做一张自己的评分表",
          "准备 10 条商品资料，要求每个候选模型输出 5 个标题，逐条标记规格是否正确、是否满足字数、是否引入材料之外的承诺，并记录修改分钟数。固定提示和输入，不展示模型名后再评阅。只有全部必要条件通过，才比较总费用。这是建议的评估方法，不是现成测评结论。"
        ],
        [
          "交付与复查",
          "保存模型 ID、日期、提示版本和失败样本。一次胜出只对这组任务有效；换任务或模型版本时重跑样本。第一次选型可保留两个候选，以便验证客户端功能和替换成本。"
        ]
      ],
      "sources": [
        [
          "模型报价口径",
          "https://ai.google.dev/gemini-api/docs/pricing"
        ],
        [
          "聚合渠道接入",
          "https://openrouter.ai/docs/quickstart"
        ]
      ],
      "author": "CoVibe 编辑部",
      "date": "2026-09-21",
      "difficulty": "入门",
      "evidence": "官方文档核对与编辑实践建议；未执行付费推理测试。"
    },
    {
      "id": "read-prices",
      "category": "选 API",
      "title": "同一个模型，API 报价应该怎么比较？",
      "summary": "拆开输入、输出、缓存与附加费用，避免把不同版本混为一谈。",
      "minutes": 3,
      "tasks": [
        "text",
        "code"
      ],
      "models": [
        "flash",
        "flash-lite"
      ],
      "sections": [
        [
          "先对齐模型与规格",
          "相似名称可能对应不同版本或服务档位。确认完整模型 ID，再固定普通调用或批处理、上下文长度和输出要求。图像要固定尺寸和质量，视频还需固定时长、音频与分辨率。"
        ],
        [
          "分别计算输入与输出",
          "文本账单通常分为输入与输出。示例：某报价输入 $0.30、输出 $2.50 / 百万 Token；100 次调用，每次输入 2,000、输出 500 Token，则文本费用约 $0.185。此示例不包含搜索、缓存存储、税费等项目。"
        ],
        [
          "理解缓存与渠道费用",
          "缓存命中读取、缓存写入和存储可能有各自价格。充值手续费、兑换汇率、最低充值和失效余额也影响实际支出。不要把活动余额面值直接当作现金汇率。"
        ],
        [
          "保留证据后再决定",
          "查看页面核验日期，并打开来源确认是否变化。报价相同时，更应比较客户端兼容、支付方式和售后。VibeBase 的排序仅针对已收录报价，不代表全网最低。"
        ],
        [
          "动手练习：建立三列账单",
          "第一列记录模型和服务档位，第二列记录输入、输出与缓存用量，第三列记录账单金额。用 10 次小任务核对公式与平台用量是否一致。展示起价的路由渠道还应记录实际供应商，不能假定每次都走最低价格。"
        ],
        [
          "避免两个常见误判",
          "同样输入字符在不同分词器下可能产生不同 Token 数；因此跨模型价格榜只表示固定 Token 预算，不代表相同文章必定一样贵。看到最低单价时，继续核对上下文阶梯、批处理、区域和工具收费条件。"
        ]
      ],
      "sources": [
        [
          "Google 官方价格",
          "https://ai.google.dev/gemini-api/docs/pricing"
        ],
        [
          "OpenRouter 模型报价",
          "https://openrouter.ai/api/v1/models"
        ]
      ],
      "author": "CoVibe 编辑部",
      "date": "2026-09-21",
      "difficulty": "入门",
      "evidence": "官方文档核对与编辑实践建议；未执行付费推理测试。"
    },
    {
      "id": "free-credits",
      "category": "省成本",
      "title": "免费额度怎么选：先确认能领，再确认能用",
      "summary": "长期免费、一次性试用、充值赠送和邀请奖励，需要分开看。",
      "minutes": 3,
      "tasks": [
        "text",
        "image"
      ],
      "models": [
        "flash-lite",
        "flash"
      ],
      "sections": [
        [
          "先区分四种福利",
          "免费层可能按周期限额；试用余额通常只发一次；充值赠送需要先付款；邀请奖励需要他人完成指定动作。后两种不能当作无条件免费使用。"
        ],
        [
          "核对资格与期限",
          "检查账号地区、是否要求支付方式、适用模型、调用限额和到期时间。没有公开结束日期不等于永久有效；额度用完后是否自动转付费，也应在控制台确认。"
        ],
        [
          "先做最小验证",
          "用一个简短且不敏感的任务确认账号、模型和客户端都能正常工作。记录余额与用量变化。免费模型可能有独立的限流或可用性，不能假定付费版本的容量适用于免费版本。"
        ],
        [
          "优惠结束后怎么办",
          "将可迁移配置与专属模型功能区分开，留一个可替换方案。生产预算按优惠结束后的常规成本评估，而不是仅按领取当天的优惠计算。"
        ],
        [
          "动手练习：记录一次领取与调用",
          "自己建立一条记录：活动来源、领取前余额、领取后余额、到期时间、测试模型和一次调用后的用量。没有实际到账前标记为待领取；仅有官网说明时标记为来源规则已核对，而不是已领取成功。"
        ],
        [
          "免费模型的 ID 必须真实存在",
          "在 OpenRouter 当前目录中查找完整的 :free 模型 ID，确认输入与输出报价为零。不能随意给任意付费模型添加 :free 后缀。即使目录存在，账号限额、上游容量和使用条款仍需单独满足。"
        ]
      ],
      "sources": [
        [
          "Gemini 免费层",
          "https://ai.google.dev/gemini-api/docs/pricing"
        ],
        [
          "OpenRouter 免费模型规则",
          "https://openrouter.ai/docs/guides/routing/model-variants/free"
        ]
      ],
      "author": "CoVibe 编辑部",
      "date": "2026-09-21",
      "difficulty": "入门",
      "evidence": "官方文档核对与编辑实践建议；未执行付费推理测试。"
    },
    {
      "id": "first-api",
      "category": "上手教程",
      "title": "第一个 API Key：从配置到首次成功调用",
      "summary": "以 OpenAI 兼容客户端为例，检查三个字段和常见报错。",
      "minutes": 4,
      "tasks": [
        "code",
        "text"
      ],
      "models": [
        "flash",
        "deepseek"
      ],
      "sections": [
        [
          "准备三个字段",
          "从你选择的平台控制台取得 API Key、Base URL 和完整模型 ID。它们必须来自同一接入方案。不要把聊天产品订阅当作 API 余额，也不要把密钥发到公开评论或浏览器前端代码里。"
        ],
        [
          "在客户端中配置",
          "选择支持该供应商协议的客户端，填写 Base URL、API Key 与模型 ID。以 OpenRouter 为例，官方兼容地址为 https://openrouter.ai/api/v1；其他平台请使用自己的官方文档，避免重复添加 /v1。本站不会收集或测试你的密钥。"
        ],
        [
          "发送一个最小请求",
          "选择简短提示，例如“只回复连接成功”，限制输出长度。确认响应内容、模型标识和用量记录；若客户端支持流式输出，再单独验证流式行为。此教程基于接口文档，未使用你的账户执行付费调用。"
        ],
        [
          "按错误类型排查",
          "401 先检查密钥与认证方式；404 检查路径及模型 ID；429 检查限流与账户额度，并以平台返回的错误正文为准。不要在错误未查明前无限重试；必要时保存已去除密钥的错误信息联系支持。"
        ],
        [
          "可照填的配置示例",
          "供应商：OpenRouter；Base URL：https://openrouter.ai/api/v1；模型：google/gemini-2.5-flash-lite；密钥：你自己的 OpenRouter Key。若客户端填写的是完整请求地址，则使用文档中的 /chat/completions 端点，而不是再让客户端自动追加一次。首次请求可能产生小额费用，先确认自己的预算。"
        ],
        [
          "验收清单",
          "成功后记录响应内容、返回用量与账单变化，随后再测试多轮和流式。不要用模型“自称是谁”来验证上游身份；客户端能连通也不等于所有高级功能可用。确认最小链路后再逐项增加附件和工具调用。"
        ]
      ],
      "sources": [
        [
          "OpenRouter 接入指南",
          "https://openrouter.ai/docs/quickstart"
        ]
      ],
      "author": "CoVibe 编辑部",
      "date": "2026-09-21",
      "difficulty": "入门",
      "evidence": "官方文档核对与编辑实践建议；未执行付费推理测试。"
    },
    {
      "id": "image-budget",
      "title": "生图预算：同样是 1K，一张图到底多少钱？",
      "category": "省成本",
      "summary": "固定尺寸、计费步长和返工率，做一张可复算的生图预算表。",
      "tasks": [
        "image"
      ],
      "models": [
        "flux",
        "image-lite",
        "image"
      ],
      "sections": [
        [
          "适合谁与准备材料",
          "适合做商品图、配图和海报的人。先准备一份有授权的商品照片、一段明确的画面要求，以及最终交付尺寸。第一轮只测单张，暂时不加放大、修复、搜索等额外步骤。将模型完整 ID 和文生图或编辑模式写入记录表。"
        ],
        [
          "第一步：统一交付规格",
          "把比较条件固定为 1024×1024、单张、标准调用。低价模型未必擅长文字排版或参考图一致性；先判断是否完成同一任务，再看价格。批处理、低分辨率预览和标准同步调用应分列，不能当成一个价格比较。"
        ],
        [
          "第二步：核对计费步长",
          "fal 的 FLUX.1 schnell 按百万像素向上取整。1024×1024 是 1,048,576 像素，在该规则下按 2 个百万像素计费，单张约 $0.006。不要将“1K 图片”直接当作恰好 1 MP；换尺寸时重新计算。"
        ],
        [
          "第三步：把失败重做放进预算",
          "示例：计划交付 100 张，假设每张平均生成 2 次，每次 $0.006，则生成预算为 $1.20。这里的 2 次是预算假设，不是本站测得成功率。人工修图、存储与其他工具费用另记，最后按可交付张数计算单位成本。"
        ],
        [
          "验收方法",
          "做 10 个固定提示，分别记录商品形状、文字、构图、清晰度和返工原因。保留原图、提示与参数。模型不支持所需编辑能力时换候选，不要把编辑失败归因为单纯价格差异。"
        ],
        [
          "常见问题与下一步",
          "图像 API 返回可能是文件地址或图像数据，不是聊天文本；客户端必须支持相应结果。先在平台文档对应的示例中检查响应格式，再连接自己的工具。本文为文档和算术教程，未执行付费生图。"
        ]
      ],
      "sources": [
        [
          "fal 定价与取整规则",
          "https://fal.ai/models/fal-ai/flux/schnell"
        ],
        [
          "Gemini 图像接口",
          "https://ai.google.dev/gemini-api/docs/image-generation"
        ]
      ],
      "author": "CoVibe 编辑部",
      "date": "2026-09-21",
      "difficulty": "入门",
      "minutes": 3,
      "evidence": "官方文档核对与编辑实践建议；未执行付费推理测试。"
    },
    {
      "id": "video-budget",
      "title": "生视频预算：先固定秒数、分辨率和音频",
      "category": "选模型",
      "summary": "用同一规格计算成本，再记录可用片段率。",
      "tasks": [
        "video"
      ],
      "models": [
        "veo-lite",
        "veo-fast",
        "veo"
      ],
      "sections": [
        [
          "适合谁与前置条件",
          "适合制作商品短片、分镜演示和社交素材的人。准备一段镜头说明，写清主体、动作、镜头运动与声音要求。首次验证用短镜头，不将多个剧情、字幕和复杂转场塞进一次生成。"
        ],
        [
          "第一步：写下完全一致的规格",
          "本榜采用 720p、8 秒、含音频的标准调用。Fast、Lite 与 Standard 是不同型号，价格顺序不代表画面质量顺序。图生视频还要单独记录参考图、首尾帧等条件，不与纯文本视频混做同一实验。"
        ],
        [
          "第二步：按秒还原成本",
          "计算式为：视频秒数 × 每秒单价 × 实际生成次数。示例假设每秒 $0.10，8 秒一段、共 10 次，则预算 $8。若需要重做，应增加生成次数；不要用最终剪辑时长乘单价，因为被弃用的生成结果也可能计费。"
        ],
        [
          "第三步：等待任务完成再取结果",
          "视频通常需要异步处理。按供应商文档提交后保存任务标识，查询状态，成功后再获取文件。网络等待超时不一定代表生成失败；先查询已有任务，避免重新提交导致重复生成。"
        ],
        [
          "第四步：用镜头验收表筛选",
          "建议逐条检查主体是否稳定、动作是否连续、音画是否匹配、是否存在明显瑕疵，再看素材能否接入剪辑流程。记录可用秒数以及选中与弃用的理由，下一轮只调整一个变量。"
        ],
        [
          "常见问题",
          "不要假定所有型号支持同样的时长、分辨率或参考图数量。确认具体模型 ID 的限制。本文不提供本站实测速度或成功率；图像、音轨、剪辑与后期成本也不包含在纯生成单价中。"
        ]
      ],
      "sources": [
        [
          "Veo 官方接口说明",
          "https://ai.google.dev/gemini-api/docs/video"
        ]
      ],
      "author": "CoVibe 编辑部",
      "date": "2026-09-21",
      "difficulty": "入门",
      "minutes": 3,
      "evidence": "官方文档核对与编辑实践建议；未执行付费推理测试。"
    },
    {
      "id": "tts-workflow",
      "title": "把文稿变成配音：从短句测试到整段交付",
      "category": "上手教程",
      "summary": "先校正发音和语气，再处理长稿、文件格式与费用。",
      "tasks": [
        "audio"
      ],
      "models": [
        "tts",
        "tts-pro",
        "tts-31"
      ],
      "sections": [
        [
          "适合谁与前置条件",
          "适合给教程、产品演示和短视频配音的人。先准备确认过事实的文稿，并把品牌名、数字、缩写和多音字单独列出来。配音前完成文字校对，避免将脚本修改成本转移到反复生成上。"
        ],
        [
          "第一步：区分配音与实时对话",
          "本教程处理文字转语音，不处理语音识别或实时语音助手。Gemini TTS 接收文本并生成音频；不要把语音理解模型当作配音模型使用。需要流式能力时应查具体版本，不能假定所有 TTS 都支持。"
        ],
        [
          "第二步：做一条短句样本",
          "建议先用 50–100 字作为自己的验证样本。把“风格要求”和“朗读正文”明确分开，例如要求自然、克制、句尾停顿，然后给出正文。听完后检查专有名词、数字和语速，每次只调整一个变量。"
        ],
        [
          "第三步：分段后统一风格",
          "长稿按自然段拆分，沿用同一音色和风格说明；段落交界留出剪辑余地。分别保存段落编号与版本，减少出现读错一个词却整篇重做的情况。不要将这些建议当作模型固定的长度限制。"
        ],
        [
          "第四步：处理音频文件",
          "按返回结果的媒体类型保存文件。原始音频数据不能仅改扩展名就当成可播放文件，可能需要按官方示例补充容器信息。验收时同时试听耳机和手机扬声器，检查开头截断、尾音和音量跳变。"
        ],
        [
          "费用与验收",
          "音频 Token 不是文本字数，也不能随意当作秒数。分别记录文本输入与音频输出用量，再套用单价。本文的短句和分段方案属于编辑建议，没有声称模型已通过本网站的音质评测。"
        ]
      ],
      "sources": [
        [
          "Google TTS 官方文档",
          "https://ai.google.dev/gemini-api/docs/speech-generation"
        ]
      ],
      "author": "CoVibe 编辑部",
      "date": "2026-09-21",
      "difficulty": "入门",
      "minutes": 3,
      "evidence": "官方文档核对与编辑实践建议；未执行付费推理测试。"
    },
    {
      "id": "rag-first",
      "title": "做一个能引用来源的知识库：先检索，再回答",
      "category": "实战分享",
      "summary": "用 20 份资料建立小型验证集，分开检查检索和回答。",
      "tasks": [
        "knowledge"
      ],
      "models": [
        "embedding",
        "voyage-4-lite",
        "flash"
      ],
      "sections": [
        [
          "适合谁与准备材料",
          "适合想把产品手册、帮助中心或内部流程变成问答的人。建议先选 20 份可授权处理的资料，保留标题、版本和访问权限。另写 10 个已知答案的问题以及 5 个资料中没有答案的问题，作为自己的验收集。"
        ],
        [
          "第一步：切分并保留来源",
          "按章节或语义段落切分文档，同时保存文档 ID、标题、页码或锚点。不要只存没有出处的纯文本；后续即便检索正确，也无法让用户回到原文。先人工检查表格与标题是否在切分时丢失。"
        ],
        [
          "第二步：用同一模型建立索引",
          "文档与查询需要使用兼容的向量空间。更换嵌入模型或维度时重建索引，不能将不同模型的向量直接混用。Gemini Embedding 2 与旧版 001 不兼容，而且不使用旧版 task_type 参数；迁移时按新文档调整。"
        ],
        [
          "第三步：先单独测试检索",
          "对每个问题取回若干片段，人工确认正确答案是否在其中。如果没有，先修正文档解析、切分与检索策略；此时更换回答模型往往无法解决根因。把“找到证据”和“组织答案”记为两个独立指标。"
        ],
        [
          "第四步：给回答附引用",
          "把检索片段及其来源标识交给回答模型，要求每条事实引用对应片段，没有证据时说明无法确定。测试无答案问题，确认它不会为了完整而补编内容。显示引用时应校验 ID 确实来自本次检索。"
        ],
        [
          "费用与上线检查",
          "向量化、索引存储、检索、重排与回答分开记账。先用小批量统计真实 Token，再外推全库成本。上线时按照用户权限过滤资料，并抽查引用链接。本文是实施流程，不是已经完成的客户案例。"
        ]
      ],
      "sources": [
        [
          "Gemini Embedding 与迁移",
          "https://ai.google.dev/gemini-api/docs/embeddings"
        ],
        [
          "Voyage 文本向量接口",
          "https://docs.voyageai.com/docs/embeddings"
        ]
      ],
      "author": "CoVibe 编辑部",
      "date": "2026-09-21",
      "difficulty": "入门",
      "minutes": 3,
      "evidence": "官方文档核对与编辑实践建议；未执行付费推理测试。"
    },
    {
      "id": "cache-batch",
      "title": "缓存与 Batch 怎么选：先算收益，再换调用方式",
      "category": "省成本",
      "summary": "把实时对话和可延迟任务分开，避免为了折扣增加复杂度。",
      "tasks": [
        "text",
        "code"
      ],
      "models": [
        "flash",
        "flash-lite"
      ],
      "sections": [
        [
          "适合谁与准备材料",
          "适合反复处理相同资料、批量摘要或离线评估的开发者。先抽取一天的用量，区分重复输入、新增输入和输出。记录任务最晚完成时间；需要立即响应的聊天，与可以等到次日的分类任务应分开处理。"
        ],
        [
          "第一步：识别真正重复的前缀",
          "公共规则、固定文档和示例尽量保持在提示前部，变化的提问放后面。Gemini 2.5 及更新模型支持隐式缓存，但命中并非保证；查看返回用量和账单才能判断是否实际节省。不要为了命中而人为填充无意义文本。"
        ],
        [
          "第二步：用假设数据算盈亏",
          "假设一百万输入 Token 中 80% 命中，正常价 $1、缓存读取价 $0.10，则输入费用为 0.2×1＋0.8×0.10＝$0.28。若还产生 $0.30 存储或写入费，总计 $0.58。这里全部是算术示例，不是任何具体模型报价。"
        ],
        [
          "第三步：判断是否适合 Batch",
          "Gemini Batch 面向异步任务，文档列出相对标准调用的折扣与目标完成窗口。把离线摘要、数据处理和评估单独排队；不能为在线对话承诺同样的响应时间。模型是否支持及当前价格仍需逐项核对。"
        ],
        [
          "第四步：保存任务与结果映射",
          "给每个输入安排唯一编号。提交后保存批次标识，完成后按编号合并结果，单独重试失败项，避免整批重复处理。记录取消、超时和部分成功的状态，不把“已提交”当作“已完成”。"
        ],
        [
          "验收与回退",
          "比较改动前后同一批任务的总费用、完成率与完成时间。若折扣不足以覆盖维护成本，继续普通调用也合理。显式缓存、隐式缓存和批处理是不同机制，使用前先核对当前 API 支持范围。"
        ]
      ],
      "sources": [
        [
          "Gemini 缓存机制",
          "https://ai.google.dev/gemini-api/docs/caching"
        ],
        [
          "Gemini Batch 文档",
          "https://ai.google.dev/gemini-api/docs/batch-api"
        ]
      ],
      "author": "CoVibe 编辑部",
      "date": "2026-09-21",
      "difficulty": "入门",
      "minutes": 3,
      "evidence": "官方文档核对与编辑实践建议；未执行付费推理测试。"
    },
    {
      "id": "api-errors",
      "title": "API 报错排查：401、402、429 与流式中断",
      "category": "上手教程",
      "summary": "按错误类型处理，用有限重试代替反复点击。",
      "tasks": [
        "code"
      ],
      "models": [
        "deepseek",
        "qwen-coder"
      ],
      "sections": [
        [
          "适合谁与准备材料",
          "适合已经配置客户端但调用失败的人。记录发生时间、平台、模型完整 ID、状态码、错误正文和请求标识。分享日志前去掉密钥、Cookie 和敏感输入；只保留解决问题所需的最小信息。以下以 OpenRouter 文档为例。"
        ],
        [
          "第一步：先查认证与余额",
          "401 优先检查密钥是否有效、复制时是否多出空格，以及请求是否发往对应平台。402 检查账户余额和用量上限，不应靠重试解决。聊天会员、其他平台余额与该 API 账户并不等同。"
        ],
        [
          "第二步：核对路径与请求格式",
          "路径错误先检查 Base URL 是否重复带 /v1，以及客户端是否又追加了完整端点。模型 ID 应直接从目录复制，不用营销名称代替。400 等请求错误需要修改输入；先减少到一个短消息，确认最小请求可以运行。"
        ],
        [
          "第三步：区分限流与容量不足",
          "429 可能来自平台配额，也可能来自上游容量。查看错误正文与可用的重试提示；有 Retry-After 时遵循它，没有时可采用带随机抖动的退避。设置最大次数和总等待时间，不要无限重试或突然增加并发。"
        ],
        [
          "第四步：单独处理流式错误",
          "已经开始输出后仍可能出现错误。HTTP 状态成功不代表整个流完成；客户端需要检查流中的错误事件和结束原因。记录已经产生的内容，明确提示未完成，避免将截断的代码或 JSON 当成完整结果。"
        ],
        [
          "何时停止与联系支持",
          "建议的本地策略是：认证与余额问题立即停止；临时网络或容量问题只做少量有限重试。仍失败时，将脱敏后的请求标识、时间和复现步骤提交给平台支持。自动切换模型需要检查能力差异，不能静默改变业务输出要求。"
        ]
      ],
      "sources": [
        [
          "OpenRouter 错误处理",
          "https://openrouter.ai/docs/api_reference/errors-and-debugging"
        ],
        [
          "OpenRouter 限流说明",
          "https://openrouter.ai/docs/api_reference/limits"
        ]
      ],
      "author": "CoVibe 编辑部",
      "date": "2026-09-21",
      "difficulty": "入门",
      "minutes": 3,
      "evidence": "官方文档核对与编辑实践建议；未执行付费推理测试。"
    }
  ],
  "mediaQuotes": [
    {
      "id": "img-flux",
      "model": "flux",
      "task": "image",
      "cost": 0.006,
      "spec": "1024 × 1024 · 单张文生图",
      "unit": "张",
      "note": "按每百万像素 $0.003 向上取整；1024² 按 2 MP 计费。",
      "source": "https://fal.ai/models/fal-ai/flux/schnell",
      "channel": "fal",
      "checkedAt": "2026-09-21",
      "currency": "USD"
    },
    {
      "id": "img-lite",
      "model": "image-lite",
      "task": "image",
      "cost": 0.0336,
      "spec": "1024 × 1024 · 单张文生图",
      "unit": "张",
      "note": "仅图像输出费；输入和文本输出另计。",
      "source": "https://ai.google.dev/gemini-api/docs/pricing",
      "channel": "Google 官方",
      "checkedAt": "2026-09-21",
      "currency": "USD"
    },
    {
      "id": "img-flash",
      "model": "image",
      "task": "image",
      "cost": 0.0672,
      "spec": "1024 × 1024 · 单张文生图",
      "unit": "张",
      "note": "由 1120 图像 Token × $60 / 百万计算；另计输入及文本输出。",
      "source": "https://ai.google.dev/gemini-api/docs/pricing",
      "channel": "Google 官方",
      "checkedAt": "2026-09-21",
      "currency": "USD"
    },
    {
      "id": "vid-veo-lite",
      "model": "veo-lite",
      "task": "video",
      "cost": 0.4,
      "spec": "720p · 8 秒 · 含音频",
      "unit": "段",
      "note": "标准按量单价 $0.05/秒；未执行生成测试。",
      "source": "https://ai.google.dev/gemini-api/docs/pricing",
      "channel": "Google 官方",
      "checkedAt": "2026-09-21",
      "currency": "USD"
    },
    {
      "id": "vid-veo-fast",
      "model": "veo-fast",
      "task": "video",
      "cost": 0.8,
      "spec": "720p · 8 秒 · 含音频",
      "unit": "段",
      "note": "标准按量单价 $0.1/秒；未执行生成测试。",
      "source": "https://ai.google.dev/gemini-api/docs/pricing",
      "channel": "Google 官方",
      "checkedAt": "2026-09-21",
      "currency": "USD"
    },
    {
      "id": "vid-veo",
      "model": "veo",
      "task": "video",
      "cost": 3.2,
      "spec": "720p · 8 秒 · 含音频",
      "unit": "段",
      "note": "标准按量单价 $0.4/秒；未执行生成测试。",
      "source": "https://ai.google.dev/gemini-api/docs/pricing",
      "channel": "Google 官方",
      "checkedAt": "2026-09-21",
      "currency": "USD"
    },
    {
      "id": "audio-tts",
      "model": "tts",
      "task": "audio",
      "cost": 0.1005,
      "spec": "1000 文本输入 + 10000 音频输出 Token",
      "unit": "组",
      "note": "分别按文本和音频 Token 计费；此处不换算时长。",
      "source": "https://ai.google.dev/gemini-api/docs/pricing",
      "channel": "Google 官方",
      "checkedAt": "2026-09-21",
      "currency": "USD"
    },
    {
      "id": "audio-tts-pro",
      "model": "tts-pro",
      "task": "audio",
      "cost": 0.201,
      "spec": "1000 文本输入 + 10000 音频输出 Token",
      "unit": "组",
      "note": "分别按文本和音频 Token 计费；此处不换算时长。",
      "source": "https://ai.google.dev/gemini-api/docs/pricing",
      "channel": "Google 官方",
      "checkedAt": "2026-09-21",
      "currency": "USD"
    },
    {
      "id": "audio-tts-31",
      "model": "tts-31",
      "task": "audio",
      "cost": 0.201,
      "spec": "1000 文本输入 + 10000 音频输出 Token",
      "unit": "组",
      "note": "分别按文本和音频 Token 计费；此处不换算时长。",
      "source": "https://ai.google.dev/gemini-api/docs/pricing",
      "channel": "Google 官方",
      "checkedAt": "2026-09-21",
      "currency": "USD"
    },
    {
      "id": "embed-google",
      "model": "embedding",
      "task": "knowledge",
      "cost": 0.2,
      "spec": "100 万文本输入 Token · 标准调用",
      "unit": "百万 Token",
      "note": "仅向量化，不含存储、检索、重排及回答。",
      "source": "https://ai.google.dev/gemini-api/docs/pricing",
      "channel": "Google 官方",
      "checkedAt": "2026-09-21",
      "currency": "USD"
    },
    {
      "id": "embed-voyage-4-lite",
      "model": "voyage-4-lite",
      "task": "knowledge",
      "cost": 0.02,
      "spec": "100 万文本输入 Token · 标准调用",
      "unit": "百万 Token",
      "note": "按付费单价比较，不抵扣试用额度；各模型分词可能不同。",
      "source": "https://docs.voyageai.com/docs/pricing",
      "channel": "Voyage AI",
      "checkedAt": "2026-09-21",
      "currency": "USD"
    },
    {
      "id": "embed-voyage-4",
      "model": "voyage-4",
      "task": "knowledge",
      "cost": 0.06,
      "spec": "100 万文本输入 Token · 标准调用",
      "unit": "百万 Token",
      "note": "按付费单价比较，不抵扣试用额度；各模型分词可能不同。",
      "source": "https://docs.voyageai.com/docs/pricing",
      "channel": "Voyage AI",
      "checkedAt": "2026-09-21",
      "currency": "USD"
    },
    {
      "id": "embed-voyage-4-large",
      "model": "voyage-4-large",
      "task": "knowledge",
      "cost": 0.12,
      "spec": "100 万文本输入 Token · 标准调用",
      "unit": "百万 Token",
      "note": "按付费单价比较，不抵扣试用额度；各模型分词可能不同。",
      "source": "https://docs.voyageai.com/docs/pricing",
      "channel": "Voyage AI",
      "checkedAt": "2026-09-21",
      "currency": "USD"
    }
  ],
  "relayFreeReview": {
    "checkedAt": "2026-09-21",
    "catalogCount": 847,
    "leadsCount": 77,
    "confirmedCount": 8,
    "method": "对目录描述进行关键词筛选，再核对线索站点公开页面。未入选不代表没有免费活动；登录后规则、动态页面和无法访问的内容仍可能需要补查。",
    "pending": [
      {
        "name": "xiaoxuapi",
        "source": "https://api.xiaoxuapi.com/",
        "reason": "公开公告未列当前免费模型，价格目录未返回可核验数据；暂不入榜。"
      },
      {
        "name": "Agent Router",
        "source": "https://agentrouter.org/",
        "reason": "目录公益说明未能从当前入口确认；企业试用不能直接当作个人免费配额。"
      },
      {
        "name": "卡拉 Khala",
        "source": "https://khala.online/",
        "reason": "本次可读页面确认首充赠送，未确认目录里的注册及签到赠额。"
      },
      {
        "name": "Cubence",
        "source": "https://cubence.com/",
        "reason": "当前页面写按量计费；免费创建 Key 不等于免费模型调用。"
      },
      {
        "name": "智流 FluxLane",
        "source": "https://fluxlane.cn/",
        "reason": "未在当前公开首页确认目录中的注册赠 $2。"
      },
      {
        "name": "EasyToken",
        "source": "https://easy-token.com/",
        "reason": "页面同时写免费体验和充值后调用，免费 API 额度与范围未明确。"
      }
    ]
  }
};
