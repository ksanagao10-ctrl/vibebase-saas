export const discovery = {
  "checkedAt": "2026-09-20",
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
      "provider": "official-gemini"
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
      "provider": "official-gemini"
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
      "provider": "openrouter"
    },
    {
      "id": "sonnet",
      "name": "Claude Sonnet 4",
      "tasks": [
        "text",
        "code"
      ],
      "desc": "适合纳入复杂写作与开发任务的比较；本页不提供未经实测的质量分数。",
      "source": "https://openrouter.ai/anthropic/claude-sonnet-4",
      "provider": "openrouter"
    },
    {
      "id": "image",
      "name": "Gemini 3.1 Flash Image",
      "tasks": [
        "image"
      ],
      "desc": "支持图像生成与编辑。先固定尺寸、参考图和质量要求，再比较报价。",
      "source": "https://ai.google.dev/gemini-api/docs/image-generation",
      "provider": "official-gemini"
    },
    {
      "id": "veo",
      "name": "Veo 3.1",
      "tasks": [
        "video"
      ],
      "desc": "视频生成候选。比较时固定分辨率、时长与音频规格。",
      "source": "https://ai.google.dev/gemini-api/docs/video",
      "provider": "official-gemini"
    },
    {
      "id": "tts",
      "name": "Gemini 2.5 Flash Preview TTS",
      "tasks": [
        "audio"
      ],
      "desc": "文本转语音候选，处于预览阶段。音频输出按 Token 计费，不直接等同于每分钟单价。",
      "source": "https://ai.google.dev/gemini-api/docs/pricing",
      "provider": "official-gemini"
    },
    {
      "id": "embedding",
      "name": "Gemini Embedding",
      "tasks": [
        "knowledge"
      ],
      "desc": "用于检索的向量表示。需要配合文档切分、索引与回答模型；不是独立问答应用。",
      "source": "https://ai.google.dev/gemini-api/docs/embeddings",
      "provider": "official-gemini"
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
      "checkedAt": "2026-09-20",
      "note": "标准文本用量；不含缓存存储、搜索工具、税费及充值手续费。"
    },
    {
      "id": "router-lite",
      "model": "flash-lite",
      "channel": "OpenRouter",
      "input": 0.1,
      "output": 0.4,
      "cache": 0.01,
      "source": "https://openrouter.ai/api/v1/models",
      "provider": "openrouter",
      "currency": "USD",
      "unit": "1M tokens",
      "checkedAt": "2026-09-20",
      "note": "标准文本用量；不含缓存存储、搜索工具、税费及充值手续费。"
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
      "checkedAt": "2026-09-20",
      "note": "标准文本用量；不含缓存存储、搜索工具、税费及充值手续费。"
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
      "checkedAt": "2026-09-20",
      "note": "标准文本用量；不含缓存存储、搜索工具、税费及充值手续费。"
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
      "checkedAt": "2026-09-20",
      "note": "标准文本用量；不含缓存存储、搜索工具、税费及充值手续费。"
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
      "endsAt": null
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
      "endsAt": null
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
      "endsAt": "2026-12-31"
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
      "endsAt": null
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
      "model": "flash"
    },
    {
      "id": "live-ga",
      "title": "Gemini 3.8 Live 系列正式上线",
      "date": "2026-09-15",
      "status": "live",
      "label": "正式上线",
      "desc": "官方更新记录列出实时语音模型及 Extended Thinking 版本。",
      "source": "https://ai.google.dev/gemini-api/docs/changelog",
      "model": "tts"
    },
    {
      "id": "image-sunset",
      "title": "旧版 Flash Image 下线预告",
      "date": "2026-10-02",
      "status": "upcoming",
      "label": "下线预告",
      "desc": "Gemini 2.5 Flash Image 计划下线，官方建议迁移到新版图像模型。",
      "source": "https://ai.google.dev/gemini-api/docs/pricing",
      "model": "image"
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
      "minutes": 5,
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
      "date": "2026-09-20",
      "difficulty": "入门"
    },
    {
      "id": "read-prices",
      "category": "选 API",
      "title": "同一个模型，API 报价应该怎么比较？",
      "summary": "拆开输入、输出、缓存与附加费用，避免把不同版本混为一谈。",
      "minutes": 5,
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
      "date": "2026-09-20",
      "difficulty": "入门"
    },
    {
      "id": "free-credits",
      "category": "省成本",
      "title": "免费额度怎么选：先确认能领，再确认能用",
      "summary": "长期免费、一次性试用、充值赠送和邀请奖励，需要分开看。",
      "minutes": 4,
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
      "date": "2026-09-20",
      "difficulty": "入门"
    },
    {
      "id": "first-api",
      "category": "上手教程",
      "title": "第一个 API Key：从配置到首次成功调用",
      "summary": "以 OpenAI 兼容客户端为例，检查三个字段和常见报错。",
      "minutes": 6,
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
        ]
      ],
      "sources": [
        [
          "OpenRouter 接入指南",
          "https://openrouter.ai/docs/quickstart"
        ]
      ],
      "author": "CoVibe 编辑部",
      "date": "2026-09-20",
      "difficulty": "入门"
    }
  ]
};
