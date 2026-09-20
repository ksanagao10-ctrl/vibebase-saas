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
      "modelId": "gemini-2.5-flash-lite",
      "status": "历史 / 专项备选",
      "guideCount": 0
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
      "modelId": "gemini-2.5-flash",
      "status": "历史 / 专项备选",
      "guideCount": 0
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
      "modelId": "deepseek/deepseek-chat-v3.1",
      "status": "历史 / 专项备选",
      "guideCount": 0
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
      "modelId": "anthropic/claude-sonnet-4",
      "status": "历史 / 专项备选",
      "guideCount": 0
    },
    {
      "id": "image",
      "name": "Gemini 3.1 Flash Image",
      "tasks": [
        "image"
      ],
      "desc": "商品参考图编辑、角色一致性与日常视觉制作；支持多参考输入，比 Lite 更适合连续修改。",
      "source": "https://ai.google.dev/gemini-api/docs/image-generation",
      "provider": "official-gemini",
      "checkedAt": "2026-09-21",
      "modelId": "gemini-3.1-flash-image",
      "guideCount": 3
    },
    {
      "id": "veo",
      "name": "Veo 3.1",
      "tasks": [
        "video"
      ],
      "desc": "生成带声音的短镜头，适合创意分镜；长片需要分镜、剪辑和一致性检查。",
      "source": "https://ai.google.dev/gemini-api/docs/video",
      "provider": "official-gemini",
      "checkedAt": "2026-09-21",
      "modelId": "veo-3.1-generate-preview",
      "status": "预览版本",
      "guideCount": 2
    },
    {
      "id": "tts",
      "name": "Gemini 2.5 Flash Preview TTS",
      "tasks": [
        "audio"
      ],
      "desc": "已审核文案的单人或多角色配音；可作为费用敏感的合成备选，不是实时对话模型。",
      "source": "https://ai.google.dev/gemini-api/docs/pricing",
      "provider": "official-gemini",
      "checkedAt": "2026-09-21",
      "modelId": "gemini-2.5-flash-preview-tts",
      "status": "预览版本",
      "guideCount": 1
    },
    {
      "id": "embedding",
      "name": "Gemini Embedding 2",
      "tasks": [
        "knowledge"
      ],
      "desc": "多模态向量表示候选；用于检索索引，不是直接回答问题或生成图片的模型。",
      "source": "https://ai.google.dev/gemini-api/docs/embeddings",
      "provider": "official-gemini",
      "checkedAt": "2026-09-21",
      "modelId": "gemini-embedding-2",
      "guideCount": 0
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
      "desc": "开源权重编码模型的托管候选；用于仓库理解与工具调用，调用表现取决于工具环境。",
      "checkedAt": "2026-09-21",
      "guideCount": 0
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
      "desc": "保留用于已有项目兼容与专项评估；新任务请优先查看按具体交付物整理的模型方案。",
      "checkedAt": "2026-09-21",
      "status": "历史 / 专项备选",
      "guideCount": 0
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
      "desc": "保留用于已有项目兼容与专项评估；新任务请优先查看按具体交付物整理的模型方案。",
      "checkedAt": "2026-09-21",
      "status": "历史 / 专项备选",
      "guideCount": 0
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
      "desc": "保留用于已有项目兼容与专项评估；新任务请优先查看按具体交付物整理的模型方案。",
      "checkedAt": "2026-09-21",
      "status": "历史 / 专项备选",
      "guideCount": 0
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
      "checkedAt": "2026-09-21",
      "status": "免费实验候选",
      "guideCount": 0
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
      "checkedAt": "2026-09-21",
      "status": "免费实验候选",
      "guideCount": 0
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
      "checkedAt": "2026-09-21",
      "status": "免费实验候选",
      "guideCount": 0
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
      "checkedAt": "2026-09-21",
      "status": "免费实验候选",
      "guideCount": 0
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
      "desc": "快速单次文生图和创意草图；官方明确不针对多参考图及多轮连续编辑优化。",
      "checkedAt": "2026-09-21",
      "guideCount": 2
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
      "desc": "快速文生图草稿与气氛探索；不把该文生图接口推荐给保留商品身份的精细修图任务。",
      "checkedAt": "2026-09-21",
      "guideCount": 1
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
      "desc": "视频快速迭代候选；用已确认的分镜生成短镜头，检查物体形变和音画一致性。",
      "checkedAt": "2026-09-21",
      "status": "预览版本",
      "guideCount": 2
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
      "desc": "适合预算敏感的短镜头试稿；不因单价低就推荐给所有视频任务。",
      "checkedAt": "2026-09-21",
      "status": "预览版本",
      "guideCount": 2
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
      "desc": "对语气、停顿与多角色编排要求较高的配音候选；版本与效果按样稿对照评估。",
      "checkedAt": "2026-09-21",
      "status": "预览版本",
      "guideCount": 2
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
      "desc": "支持流式合成的新版 TTS 预览候选；适合旁白、角色对话和边生成边播放，不能替代双向 Live API。",
      "checkedAt": "2026-09-21",
      "status": "预览版本",
      "guideCount": 2
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
      "desc": "低延迟与成本导向的文本向量检索；适合大量文档建索引，需评估召回损失。",
      "checkedAt": "2026-09-21",
      "guideCount": 1
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
      "desc": "通用多语言文本向量检索主力候选；需要索引、权限与引用流程配合。",
      "checkedAt": "2026-09-21",
      "guideCount": 1
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
      "desc": "通用多语言检索质量优先候选；输出向量，不会直接给出问答结果。",
      "checkedAt": "2026-09-21",
      "guideCount": 1
    },
    {
      "id": "opus5",
      "name": "Claude Opus 5",
      "modelId": "anthropic/claude-opus-5",
      "tasks": [
        "text",
        "code",
        "knowledge"
      ],
      "desc": "复杂推理、代码审查与多步骤交付；适合需要反复检查约束的工作。",
      "source": "https://openrouter.ai/anthropic/claude-opus-5",
      "provider": "openrouter",
      "checkedAt": "2026-09-21",
      "pricingNote": "OpenRouter 目录文本输入 $5.0 / 输出 $25.0 每百万 Token；缓存、工具、重试与渠道附加费另计。",
      "context": 1000000,
      "status": "渠道目录已核对",
      "guideCount": 4
    },
    {
      "id": "sonnet5",
      "name": "Claude Sonnet 5",
      "modelId": "anthropic/claude-sonnet-5",
      "tasks": [
        "text",
        "code",
        "knowledge"
      ],
      "desc": "常规专业写作与持续开发的主力候选，可按任务调整推理投入。",
      "source": "https://openrouter.ai/anthropic/claude-sonnet-5",
      "provider": "openrouter",
      "checkedAt": "2026-09-21",
      "pricingNote": "OpenRouter 目录文本输入 $2.0 / 输出 $10.0 每百万 Token；缓存、工具、重试与渠道附加费另计。",
      "context": 1000000,
      "status": "渠道目录已核对",
      "guideCount": 6
    },
    {
      "id": "fable51",
      "name": "Claude Fable 5.1",
      "modelId": "anthropic/claude-fable-5.1",
      "tasks": [
        "code",
        "text"
      ],
      "desc": "长代码重构、前端实现与较长的知识工作流程候选。",
      "source": "https://openrouter.ai/anthropic/claude-fable-5.1",
      "provider": "openrouter",
      "checkedAt": "2026-09-21",
      "pricingNote": "OpenRouter 目录文本输入 $10.0 / 输出 $50.0 每百万 Token；缓存、工具、重试与渠道附加费另计。",
      "context": 1000000,
      "status": "渠道目录已核对",
      "guideCount": 1
    },
    {
      "id": "sol56",
      "name": "GPT-5.6 Sol",
      "modelId": "openai/gpt-5.6-sol",
      "tasks": [
        "code",
        "text",
        "knowledge"
      ],
      "desc": "命令行、多步骤编码和复杂推理候选；代码执行需要开发工具提供环境。",
      "source": "https://openrouter.ai/openai/gpt-5.6-sol",
      "provider": "openrouter",
      "checkedAt": "2026-09-21",
      "pricingNote": "OpenRouter 目录文本输入 $2.0 / 输出 $10.0 每百万 Token；存在阶梯或时段覆盖价，按请求核对最终费率。",
      "context": 1050000,
      "status": "渠道目录已核对",
      "guideCount": 4
    },
    {
      "id": "flash38",
      "name": "Gemini 3.8 Flash",
      "modelId": "google/gemini-3.8-flash",
      "tasks": [
        "text",
        "code",
        "knowledge"
      ],
      "desc": "文本、文件、图片、音频和视频理解候选；这里的渠道版本输出文本，不用于生成图片或音频。",
      "source": "https://openrouter.ai/google/gemini-3.8-flash",
      "provider": "openrouter",
      "checkedAt": "2026-09-21",
      "pricingNote": "OpenRouter 目录文本输入 $0.75 / 输出 $3.75 每百万 Token；缓存、工具、重试与渠道附加费另计。",
      "context": 1048576,
      "status": "渠道目录已核对",
      "guideCount": 5
    },
    {
      "id": "pro31",
      "name": "Gemini 3.1 Pro Preview",
      "modelId": "google/gemini-3.1-pro-preview",
      "tasks": [
        "text",
        "knowledge"
      ],
      "desc": "复杂推理与多模态资料分析候选，预览版本须先验证稳定性。",
      "source": "https://openrouter.ai/google/gemini-3.1-pro-preview",
      "provider": "openrouter",
      "checkedAt": "2026-09-21",
      "pricingNote": "OpenRouter 目录文本输入 $2.0 / 输出 $12.0 每百万 Token；存在阶梯或时段覆盖价，按请求核对最终费率。",
      "context": 1048576,
      "status": "预览版本",
      "guideCount": 3
    },
    {
      "id": "deepseek41",
      "name": "DeepSeek V4.1 Flash",
      "modelId": "deepseek/deepseek-v4.1-flash",
      "tasks": [
        "text",
        "code"
      ],
      "desc": "文本和图像理解候选，适合大批量结构化处理；渠道存在时段价格差异。",
      "source": "https://openrouter.ai/deepseek/deepseek-v4.1-flash",
      "provider": "openrouter",
      "checkedAt": "2026-09-21",
      "pricingNote": "OpenRouter 目录文本输入 $0.15 / 输出 $0.6 每百万 Token；存在阶梯或时段覆盖价，按请求核对最终费率。",
      "context": 1048576,
      "status": "渠道目录已核对",
      "guideCount": 1
    },
    {
      "id": "coderplus",
      "name": "Qwen3 Coder Plus",
      "modelId": "qwen/qwen3-coder-plus",
      "tasks": [
        "code"
      ],
      "desc": "面向工具调用和仓库级编码；文本输入，不把截图直接送给这个型号。",
      "source": "https://openrouter.ai/qwen/qwen3-coder-plus",
      "provider": "openrouter",
      "checkedAt": "2026-09-21",
      "pricingNote": "OpenRouter 目录文本输入 $0.65 / 输出 $3.25 每百万 Token；存在阶梯或时段覆盖价，按请求核对最终费率。",
      "context": 1000000,
      "status": "渠道目录已核对",
      "guideCount": 1
    },
    {
      "id": "image-pro",
      "name": "Gemini 3 Pro Image",
      "modelId": "gemini-3-pro-image",
      "tasks": [
        "image"
      ],
      "desc": "参考图、多轮修改、品牌视觉与复杂构图。",
      "source": "https://ai.google.dev/gemini-api/docs/image-generation",
      "provider": "official-gemini",
      "checkedAt": "2026-09-21",
      "status": "正式型号",
      "guideCount": 2
    },
    {
      "id": "kling-o3",
      "name": "Kling O3 Standard · fal",
      "modelId": "fal-ai/kling-video/o3/standard/image-to-video",
      "tasks": [
        "video"
      ],
      "desc": "以首帧及可选尾帧约束图生视频，适合确认了画面的产品或空间镜头。",
      "source": "https://fal.ai/models/fal-ai/kling-video/o3/standard/image-to-video",
      "provider": null,
      "checkedAt": "2026-09-21",
      "status": "渠道接口",
      "guideCount": 1
    },
    {
      "id": "live38",
      "name": "Gemini 3.8 Live",
      "modelId": "gemini-3.8-live",
      "tasks": [
        "audio"
      ],
      "desc": "双向实时语音、视觉输入与工具交互；需接入 Live API 会话。",
      "source": "https://ai.google.dev/gemini-api/docs/live-api/get-started-sdk",
      "provider": "official-gemini",
      "checkedAt": "2026-09-21",
      "status": "实时会话接口",
      "guideCount": 1
    },
    {
      "id": "whisper",
      "name": "Whisper Large V3 · Groq",
      "modelId": "whisper-large-v3",
      "tasks": [
        "audio"
      ],
      "desc": "多语言录音转写；翻译接口输出英语，不能作为任意语言互译接口。",
      "source": "https://console.groq.com/docs/speech-to-text",
      "provider": null,
      "checkedAt": "2026-09-21",
      "status": "托管转写接口",
      "guideCount": 1
    },
    {
      "id": "whisper-turbo",
      "name": "Whisper Large V3 Turbo · Groq",
      "modelId": "whisper-large-v3-turbo",
      "tasks": [
        "audio"
      ],
      "desc": "偏吞吐与成本的多语言录音转写，不支持该接口的音频翻译。",
      "source": "https://console.groq.com/docs/speech-to-text",
      "provider": null,
      "checkedAt": "2026-09-21",
      "status": "托管转写接口",
      "guideCount": 1
    },
    {
      "id": "rerank25",
      "name": "Voyage rerank-2.5",
      "modelId": "rerank-2.5",
      "tasks": [
        "knowledge"
      ],
      "desc": "对已有候选文档重排序，提高相关证据靠前的机会；不生成答案。",
      "source": "https://docs.voyageai.com/docs/reranker",
      "provider": null,
      "checkedAt": "2026-09-21",
      "status": "重排模型",
      "guideCount": 1
    },
    {
      "id": "ocr15",
      "name": "PaddleOCR-VL-1.5",
      "modelId": "PaddlePaddle/PaddleOCR-VL-1.5",
      "tasks": [
        "knowledge"
      ],
      "desc": "识别扫描文档版面、表格与公式，先结构化再做检索与问答。",
      "source": "https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.5",
      "provider": null,
      "checkedAt": "2026-09-21",
      "status": "文档视觉模型",
      "guideCount": 1
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
      "group": "消费与零售",
      "persona": "店铺运营",
      "tag": "提取规格 → 生成卖点 → 复核承诺",
      "desc": "面向店铺运营，交付商品标题、详情页文案、客服问答。",
      "inputs": "商品规格、真实商品图、品牌禁用词、售后规则",
      "deliverable": "商品标题、详情页文案、客服问答",
      "acceptance": "抽查 20 个 SKU；规格、价格与售后政策逐项一致",
      "steps": [
        [
          "提取规格",
          "围绕已核验资料完成提取规格。",
          "flash-lite"
        ],
        [
          "生成卖点",
          "围绕已核验资料完成生成卖点。",
          "flash-lite"
        ],
        [
          "复核承诺",
          "围绕已核验资料完成复核承诺。",
          "flash-lite"
        ]
      ],
      "article": "choose-model",
      "budget": "预算只计文本模型 API；素材、检索、存储、人工、税费和重试另计。",
      "plans": [
        {
          "id": "quality",
          "label": "质量优先",
          "strategy": "多版本卖点与品牌语气交叉复核，重点审校功效与售后承诺",
          "fit": "重要对外交付、复杂约束和较高返工代价的任务",
          "recipe": [
            {
              "model": "anthropic/claude-opus-5",
              "share": 1,
              "role": "主任务生成"
            },
            {
              "model": "google/gemini-3.1-pro-preview",
              "share": 1,
              "role": "独立复核"
            }
          ],
          "tradeoff": "两轮模型费用和延迟更高；高阶模型也可能出错，人工验收仍保留。",
          "fallback": null,
          "actions": [
            {
              "label": "提取规格",
              "text": "准备商品规格、真实商品图、品牌禁用词、售后规则；缺失字段先列问题，不让模型补猜。"
            },
            {
              "label": "生成卖点",
              "text": "多版本卖点与品牌语气交叉复核，重点审校功效与售后承诺，产出商品标题、详情页文案、客服问答。"
            },
            {
              "label": "复核承诺",
              "text": "抽查 20 个 SKU；规格、价格与售后政策逐项一致；记录人工修改和重试次数。"
            }
          ]
        },
        {
          "id": "budget",
          "label": "绝对低价",
          "strategy": "固定详情页模板，每件商品只生成一个初稿，图片沿用授权实拍",
          "fit": "非敏感、小批量、能接受排队和人工修改的任务",
          "recipe": [
            {
              "model": "qwen/qwen3.8-27b:free",
              "share": 1,
              "role": "免费初稿"
            }
          ],
          "tradeoff": "免费通道有账号与容量限制，无服务保障；额度用尽时暂停或由你决定是否启用付费备选。",
          "fallback": "google/gemini-2.5-flash-lite",
          "actions": [
            {
              "label": "提取规格",
              "text": "准备商品规格、真实商品图、品牌禁用词、售后规则；缺失字段先列问题，不让模型补猜。"
            },
            {
              "label": "生成卖点",
              "text": "固定详情页模板，每件商品只生成一个初稿，图片沿用授权实拍，产出商品标题、详情页文案、客服问答。"
            },
            {
              "label": "复核承诺",
              "text": "抽查 20 个 SKU；规格、价格与售后政策逐项一致；记录人工修改和重试次数。"
            }
          ]
        },
        {
          "id": "value",
          "label": "性价比",
          "strategy": "常规商品批量生成，复杂参数与主推款升级复核",
          "fit": "有持续业务量，愿意用样本测试设定升级规则的团队",
          "recipe": [
            {
              "model": "google/gemini-3.7-flash",
              "share": 1,
              "role": "日常批量任务"
            },
            {
              "model": "anthropic/claude-opus-5",
              "share": 0.2,
              "role": "仅 20% 困难任务追加复核"
            }
          ],
          "tradeoff": "20% 升级比例是预算假设；真实失败率更高时成本会上升。",
          "fallback": null,
          "actions": [
            {
              "label": "提取规格",
              "text": "准备商品规格、真实商品图、品牌禁用词、售后规则；缺失字段先列问题，不让模型补猜。"
            },
            {
              "label": "生成卖点",
              "text": "常规商品批量生成，复杂参数与主推款升级复核，产出商品标题、详情页文案、客服问答。"
            },
            {
              "label": "复核承诺",
              "text": "抽查 20 个 SKU；规格、价格与售后政策逐项一致；记录人工修改和重试次数。"
            }
          ]
        }
      ],
      "extra": "image",
      "checkedAt": "2026-09-21"
    },
    {
      "id": "marketing",
      "name": "广告与营销",
      "group": "内容与创意",
      "persona": "品牌营销团队",
      "tag": "拆解受众 → 生成创意 → 审校证据",
      "desc": "面向品牌营销团队，交付投放创意、广告文案、内容日历。",
      "inputs": "品牌简报、受众画像、渠道规格、可引用证据",
      "deliverable": "投放创意、广告文案、内容日历",
      "acceptance": "对 10 条素材核对事实、字数与品牌语气；A/B 结果上线后另测",
      "steps": [
        [
          "拆解受众",
          "围绕已核验资料完成拆解受众。",
          "flash"
        ],
        [
          "生成创意",
          "围绕已核验资料完成生成创意。",
          "flash"
        ],
        [
          "审校证据",
          "围绕已核验资料完成审校证据。",
          "flash"
        ]
      ],
      "article": "choose-model",
      "budget": "预算只计文本模型 API；素材、检索、存储、人工、税费和重试另计。",
      "plans": [
        {
          "id": "quality",
          "label": "质量优先",
          "strategy": "先发散三条创意路线，再独立审校品牌一致性与证据",
          "fit": "重要对外交付、复杂约束和较高返工代价的任务",
          "recipe": [
            {
              "model": "anthropic/claude-fable-5.1",
              "share": 1,
              "role": "主任务生成"
            },
            {
              "model": "google/gemini-3.1-pro-preview",
              "share": 1,
              "role": "独立复核"
            }
          ],
          "tradeoff": "两轮模型费用和延迟更高；高阶模型也可能出错，人工验收仍保留。",
          "fallback": null,
          "actions": [
            {
              "label": "拆解受众",
              "text": "准备品牌简报、受众画像、渠道规格、可引用证据；缺失字段先列问题，不让模型补猜。"
            },
            {
              "label": "生成创意",
              "text": "先发散三条创意路线，再独立审校品牌一致性与证据，产出投放创意、广告文案、内容日历。"
            },
            {
              "label": "审校证据",
              "text": "对 10 条素材核对事实、字数与品牌语气；A/B 结果上线后另测；记录人工修改和重试次数。"
            }
          ]
        },
        {
          "id": "budget",
          "label": "绝对低价",
          "strategy": "复用已通过的创意模板，单次生成一条文案，人工挑选",
          "fit": "非敏感、小批量、能接受排队和人工修改的任务",
          "recipe": [
            {
              "model": "qwen/qwen3.8-27b:free",
              "share": 1,
              "role": "免费初稿"
            }
          ],
          "tradeoff": "免费通道有账号与容量限制，无服务保障；额度用尽时暂停或由你决定是否启用付费备选。",
          "fallback": "google/gemini-2.5-flash-lite",
          "actions": [
            {
              "label": "拆解受众",
              "text": "准备品牌简报、受众画像、渠道规格、可引用证据；缺失字段先列问题，不让模型补猜。"
            },
            {
              "label": "生成创意",
              "text": "复用已通过的创意模板，单次生成一条文案，人工挑选，产出投放创意、广告文案、内容日历。"
            },
            {
              "label": "审校证据",
              "text": "对 10 条素材核对事实、字数与品牌语气；A/B 结果上线后另测；记录人工修改和重试次数。"
            }
          ]
        },
        {
          "id": "value",
          "label": "性价比",
          "strategy": "批量短文案走轻量模型，核心活动主题交给高阶模型",
          "fit": "有持续业务量，愿意用样本测试设定升级规则的团队",
          "recipe": [
            {
              "model": "google/gemini-3.7-flash",
              "share": 1,
              "role": "日常批量任务"
            },
            {
              "model": "anthropic/claude-fable-5.1",
              "share": 0.2,
              "role": "仅 20% 困难任务追加复核"
            }
          ],
          "tradeoff": "20% 升级比例是预算假设；真实失败率更高时成本会上升。",
          "fallback": null,
          "actions": [
            {
              "label": "拆解受众",
              "text": "准备品牌简报、受众画像、渠道规格、可引用证据；缺失字段先列问题，不让模型补猜。"
            },
            {
              "label": "生成创意",
              "text": "批量短文案走轻量模型，核心活动主题交给高阶模型，产出投放创意、广告文案、内容日历。"
            },
            {
              "label": "审校证据",
              "text": "对 10 条素材核对事实、字数与品牌语气；A/B 结果上线后另测；记录人工修改和重试次数。"
            }
          ]
        }
      ],
      "extra": "image",
      "checkedAt": "2026-09-21"
    },
    {
      "id": "development",
      "name": "软件研发",
      "group": "技术与数据",
      "persona": "开发与测试团队",
      "tag": "明确验收 → 实现补丁 → 运行测试",
      "desc": "面向开发与测试团队，交付实现方案、补丁、测试清单。",
      "inputs": "需求说明、最小代码上下文、接口契约、测试用例",
      "deliverable": "实现方案、补丁、测试清单",
      "acceptance": "以编译、单元测试、回归和人工差异审查验收，不按代码行数打分",
      "steps": [
        [
          "明确验收",
          "围绕已核验资料完成明确验收。",
          "sonnet"
        ],
        [
          "实现补丁",
          "围绕已核验资料完成实现补丁。",
          "sonnet"
        ],
        [
          "运行测试",
          "围绕已核验资料完成运行测试。",
          "sonnet"
        ]
      ],
      "article": "first-api",
      "budget": "预算只计文本模型 API；素材、检索、存储、人工、税费和重试另计。",
      "plans": [
        {
          "id": "quality",
          "label": "质量优先",
          "strategy": "复杂变更先拆解依赖，再由另一模型审阅补丁，测试作为最终证据",
          "fit": "重要对外交付、复杂约束和较高返工代价的任务",
          "recipe": [
            {
              "model": "anthropic/claude-opus-5",
              "share": 1,
              "role": "主任务生成"
            },
            {
              "model": "google/gemini-3.1-pro-preview",
              "share": 1,
              "role": "独立复核"
            }
          ],
          "tradeoff": "两轮模型费用和延迟更高；高阶模型也可能出错，人工验收仍保留。",
          "fallback": null,
          "actions": [
            {
              "label": "明确验收",
              "text": "准备需求说明、最小代码上下文、接口契约、测试用例；缺失字段先列问题，不让模型补猜。"
            },
            {
              "label": "实现补丁",
              "text": "复杂变更先拆解依赖，再由另一模型审阅补丁，测试作为最终证据，产出实现方案、补丁、测试清单。"
            },
            {
              "label": "运行测试",
              "text": "以编译、单元测试、回归和人工差异审查验收，不按代码行数打分；记录人工修改和重试次数。"
            }
          ]
        },
        {
          "id": "budget",
          "label": "绝对低价",
          "strategy": "免费编程模型处理小文件和独立函数，开发者自行复核执行",
          "fit": "非敏感、小批量、能接受排队和人工修改的任务",
          "recipe": [
            {
              "model": "cohere/north-mini-code:free",
              "share": 1,
              "role": "免费初稿"
            }
          ],
          "tradeoff": "免费通道有账号与容量限制，无服务保障；额度用尽时暂停或由你决定是否启用付费备选。",
          "fallback": "google/gemini-2.5-flash-lite",
          "actions": [
            {
              "label": "明确验收",
              "text": "准备需求说明、最小代码上下文、接口契约、测试用例；缺失字段先列问题，不让模型补猜。"
            },
            {
              "label": "实现补丁",
              "text": "免费编程模型处理小文件和独立函数，开发者自行复核执行，产出实现方案、补丁、测试清单。"
            },
            {
              "label": "运行测试",
              "text": "以编译、单元测试、回归和人工差异审查验收，不按代码行数打分；记录人工修改和重试次数。"
            }
          ]
        },
        {
          "id": "value",
          "label": "性价比",
          "strategy": "常规代码用 Qwen Coder，失败用例与复杂设计再升级",
          "fit": "有持续业务量，愿意用样本测试设定升级规则的团队",
          "recipe": [
            {
              "model": "qwen/qwen3-coder",
              "share": 1,
              "role": "日常批量任务"
            },
            {
              "model": "anthropic/claude-opus-5",
              "share": 0.2,
              "role": "仅 20% 困难任务追加复核"
            }
          ],
          "tradeoff": "20% 升级比例是预算假设；真实失败率更高时成本会上升。",
          "fallback": null,
          "actions": [
            {
              "label": "明确验收",
              "text": "准备需求说明、最小代码上下文、接口契约、测试用例；缺失字段先列问题，不让模型补猜。"
            },
            {
              "label": "实现补丁",
              "text": "常规代码用 Qwen Coder，失败用例与复杂设计再升级，产出实现方案、补丁、测试清单。"
            },
            {
              "label": "运行测试",
              "text": "以编译、单元测试、回归和人工差异审查验收，不按代码行数打分；记录人工修改和重试次数。"
            }
          ]
        }
      ],
      "extra": "none",
      "checkedAt": "2026-09-21"
    },
    {
      "id": "knowledge",
      "name": "企业知识库",
      "group": "技术与数据",
      "persona": "知识管理员",
      "tag": "整理资料 → 检索片段 → 生成引用",
      "desc": "面向知识管理员，交付带页码引用的答案、知识缺口列表。",
      "inputs": "已授权文档、版本号、访问权限、标准问答",
      "deliverable": "带页码引用的答案、知识缺口列表",
      "acceptance": "准备 30 个已知答案问题，记录引用正确率与无法回答比例",
      "steps": [
        [
          "整理资料",
          "围绕已核验资料完成整理资料。",
          "embedding"
        ],
        [
          "检索片段",
          "围绕已核验资料完成检索片段。",
          "embedding"
        ],
        [
          "生成引用",
          "围绕已核验资料完成生成引用。",
          "embedding"
        ]
      ],
      "article": "choose-model",
      "budget": "预算只计文本模型 API；素材、检索、存储、人工、税费和重试另计。",
      "plans": [
        {
          "id": "quality",
          "label": "质量优先",
          "strategy": "检索后由高阶模型对照原文回答，再逐条检查引用",
          "fit": "重要对外交付、复杂约束和较高返工代价的任务",
          "recipe": [
            {
              "model": "anthropic/claude-opus-5",
              "share": 1,
              "role": "主任务生成"
            },
            {
              "model": "google/gemini-3.1-pro-preview",
              "share": 1,
              "role": "独立复核"
            }
          ],
          "tradeoff": "两轮模型费用和延迟更高；高阶模型也可能出错，人工验收仍保留。",
          "fallback": null,
          "actions": [
            {
              "label": "整理资料",
              "text": "准备已授权文档、版本号、访问权限、标准问答；缺失字段先列问题，不让模型补猜。"
            },
            {
              "label": "检索片段",
              "text": "检索后由高阶模型对照原文回答，再逐条检查引用，产出带页码引用的答案、知识缺口列表。"
            },
            {
              "label": "生成引用",
              "text": "准备 30 个已知答案问题，记录引用正确率与无法回答比例；记录人工修改和重试次数。"
            }
          ]
        },
        {
          "id": "budget",
          "label": "绝对低价",
          "strategy": "免费模型只处理人工选取的相关段落，索引使用本地检索",
          "fit": "非敏感、小批量、能接受排队和人工修改的任务",
          "recipe": [
            {
              "model": "qwen/qwen3.8-27b:free",
              "share": 1,
              "role": "免费初稿"
            }
          ],
          "tradeoff": "免费通道有账号与容量限制，无服务保障；额度用尽时暂停或由你决定是否启用付费备选。",
          "fallback": "google/gemini-2.5-flash-lite",
          "actions": [
            {
              "label": "整理资料",
              "text": "准备已授权文档、版本号、访问权限、标准问答；缺失字段先列问题，不让模型补猜。"
            },
            {
              "label": "检索片段",
              "text": "免费模型只处理人工选取的相关段落，索引使用本地检索，产出带页码引用的答案、知识缺口列表。"
            },
            {
              "label": "生成引用",
              "text": "准备 30 个已知答案问题，记录引用正确率与无法回答比例；记录人工修改和重试次数。"
            }
          ]
        },
        {
          "id": "value",
          "label": "性价比",
          "strategy": "常见问题走快速模型，跨文档冲突升级并转人工",
          "fit": "有持续业务量，愿意用样本测试设定升级规则的团队",
          "recipe": [
            {
              "model": "google/gemini-3.7-flash",
              "share": 1,
              "role": "日常批量任务"
            },
            {
              "model": "anthropic/claude-opus-5",
              "share": 0.2,
              "role": "仅 20% 困难任务追加复核"
            }
          ],
          "tradeoff": "20% 升级比例是预算假设；真实失败率更高时成本会上升。",
          "fallback": null,
          "actions": [
            {
              "label": "整理资料",
              "text": "准备已授权文档、版本号、访问权限、标准问答；缺失字段先列问题，不让模型补猜。"
            },
            {
              "label": "检索片段",
              "text": "常见问题走快速模型，跨文档冲突升级并转人工，产出带页码引用的答案、知识缺口列表。"
            },
            {
              "label": "生成引用",
              "text": "准备 30 个已知答案问题，记录引用正确率与无法回答比例；记录人工修改和重试次数。"
            }
          ]
        }
      ],
      "extra": "knowledge",
      "checkedAt": "2026-09-21"
    },
    {
      "id": "education",
      "name": "教育培训",
      "group": "公共与专业服务",
      "persona": "教师与课程运营",
      "tag": "定位目标 → 生成教材 → 教师审题",
      "desc": "面向教师与课程运营，交付教案、练习题、分层讲解。",
      "inputs": "课程大纲、知识点、年级、已审校教材",
      "deliverable": "教案、练习题、分层讲解",
      "acceptance": "抽检 20 道题，教师核查答案、难度和年龄适配",
      "steps": [
        [
          "定位目标",
          "围绕已核验资料完成定位目标。",
          "flash"
        ],
        [
          "生成教材",
          "围绕已核验资料完成生成教材。",
          "flash"
        ],
        [
          "教师审题",
          "围绕已核验资料完成教师审题。",
          "flash"
        ]
      ],
      "article": "choose-model",
      "budget": "预算只计文本模型 API；素材、检索、存储、人工、税费和重试另计。",
      "plans": [
        {
          "id": "quality",
          "label": "质量优先",
          "strategy": "对知识点覆盖和题目答案双重检查，输出难度不同的版本",
          "fit": "重要对外交付、复杂约束和较高返工代价的任务",
          "recipe": [
            {
              "model": "anthropic/claude-opus-5",
              "share": 1,
              "role": "主任务生成"
            },
            {
              "model": "google/gemini-3.1-pro-preview",
              "share": 1,
              "role": "独立复核"
            }
          ],
          "tradeoff": "两轮模型费用和延迟更高；高阶模型也可能出错，人工验收仍保留。",
          "fallback": null,
          "actions": [
            {
              "label": "定位目标",
              "text": "准备课程大纲、知识点、年级、已审校教材；缺失字段先列问题，不让模型补猜。"
            },
            {
              "label": "生成教材",
              "text": "对知识点覆盖和题目答案双重检查，输出难度不同的版本，产出教案、练习题、分层讲解。"
            },
            {
              "label": "教师审题",
              "text": "抽检 20 道题，教师核查答案、难度和年龄适配；记录人工修改和重试次数。"
            }
          ]
        },
        {
          "id": "budget",
          "label": "绝对低价",
          "strategy": "免费模型依固定题型生成少量练习，教师逐题核答",
          "fit": "非敏感、小批量、能接受排队和人工修改的任务",
          "recipe": [
            {
              "model": "qwen/qwen3.8-27b:free",
              "share": 1,
              "role": "免费初稿"
            }
          ],
          "tradeoff": "免费通道有账号与容量限制，无服务保障；额度用尽时暂停或由你决定是否启用付费备选。",
          "fallback": "google/gemini-2.5-flash-lite",
          "actions": [
            {
              "label": "定位目标",
              "text": "准备课程大纲、知识点、年级、已审校教材；缺失字段先列问题，不让模型补猜。"
            },
            {
              "label": "生成教材",
              "text": "免费模型依固定题型生成少量练习，教师逐题核答，产出教案、练习题、分层讲解。"
            },
            {
              "label": "教师审题",
              "text": "抽检 20 道题，教师核查答案、难度和年龄适配；记录人工修改和重试次数。"
            }
          ]
        },
        {
          "id": "value",
          "label": "性价比",
          "strategy": "日常讲解批量生成，考试题与跨章节综合题升级复核",
          "fit": "有持续业务量，愿意用样本测试设定升级规则的团队",
          "recipe": [
            {
              "model": "google/gemini-3.7-flash",
              "share": 1,
              "role": "日常批量任务"
            },
            {
              "model": "anthropic/claude-opus-5",
              "share": 0.2,
              "role": "仅 20% 困难任务追加复核"
            }
          ],
          "tradeoff": "20% 升级比例是预算假设；真实失败率更高时成本会上升。",
          "fallback": null,
          "actions": [
            {
              "label": "定位目标",
              "text": "准备课程大纲、知识点、年级、已审校教材；缺失字段先列问题，不让模型补猜。"
            },
            {
              "label": "生成教材",
              "text": "日常讲解批量生成，考试题与跨章节综合题升级复核，产出教案、练习题、分层讲解。"
            },
            {
              "label": "教师审题",
              "text": "抽检 20 道题，教师核查答案、难度和年龄适配；记录人工修改和重试次数。"
            }
          ]
        }
      ],
      "extra": "audio",
      "checkedAt": "2026-09-21"
    },
    {
      "id": "real-estate",
      "name": "房产经纪",
      "group": "消费与零售",
      "persona": "经纪人和门店运营",
      "tag": "核对房源 → 生成介绍 → 准备问答",
      "desc": "面向经纪人和门店运营，交付房源描述、看房问答、跟进摘要。",
      "inputs": "核验过的房源参数、位置说明、授权照片",
      "deliverable": "房源描述、看房问答、跟进摘要",
      "acceptance": "核验 10 套房源的面积、价格和位置；不添加未提供配套",
      "steps": [
        [
          "核对房源",
          "围绕已核验资料完成核对房源。",
          "flash"
        ],
        [
          "生成介绍",
          "围绕已核验资料完成生成介绍。",
          "flash"
        ],
        [
          "准备问答",
          "围绕已核验资料完成准备问答。",
          "flash"
        ]
      ],
      "article": "choose-model",
      "budget": "预算只计文本模型 API；素材、检索、存储、人工、税费和重试另计。",
      "plans": [
        {
          "id": "quality",
          "label": "质量优先",
          "strategy": "突出不同客群的真实需求，独立核对面积、产权与价格表述",
          "fit": "重要对外交付、复杂约束和较高返工代价的任务",
          "recipe": [
            {
              "model": "anthropic/claude-opus-5",
              "share": 1,
              "role": "主任务生成"
            },
            {
              "model": "google/gemini-3.1-pro-preview",
              "share": 1,
              "role": "独立复核"
            }
          ],
          "tradeoff": "两轮模型费用和延迟更高；高阶模型也可能出错，人工验收仍保留。",
          "fallback": null,
          "actions": [
            {
              "label": "核对房源",
              "text": "准备核验过的房源参数、位置说明、授权照片；缺失字段先列问题，不让模型补猜。"
            },
            {
              "label": "生成介绍",
              "text": "突出不同客群的真实需求，独立核对面积、产权与价格表述，产出房源描述、看房问答、跟进摘要。"
            },
            {
              "label": "准备问答",
              "text": "核验 10 套房源的面积、价格和位置；不添加未提供配套；记录人工修改和重试次数。"
            }
          ]
        },
        {
          "id": "budget",
          "label": "绝对低价",
          "strategy": "免费模型按统一房源模板改写，不生成房屋实景替代照片",
          "fit": "非敏感、小批量、能接受排队和人工修改的任务",
          "recipe": [
            {
              "model": "qwen/qwen3.8-27b:free",
              "share": 1,
              "role": "免费初稿"
            }
          ],
          "tradeoff": "免费通道有账号与容量限制，无服务保障；额度用尽时暂停或由你决定是否启用付费备选。",
          "fallback": "google/gemini-2.5-flash-lite",
          "actions": [
            {
              "label": "核对房源",
              "text": "准备核验过的房源参数、位置说明、授权照片；缺失字段先列问题，不让模型补猜。"
            },
            {
              "label": "生成介绍",
              "text": "免费模型按统一房源模板改写，不生成房屋实景替代照片，产出房源描述、看房问答、跟进摘要。"
            },
            {
              "label": "准备问答",
              "text": "核验 10 套房源的面积、价格和位置；不添加未提供配套；记录人工修改和重试次数。"
            }
          ]
        },
        {
          "id": "value",
          "label": "性价比",
          "strategy": "普通房源批量处理，重点房源与复杂问答升级",
          "fit": "有持续业务量，愿意用样本测试设定升级规则的团队",
          "recipe": [
            {
              "model": "google/gemini-3.7-flash",
              "share": 1,
              "role": "日常批量任务"
            },
            {
              "model": "anthropic/claude-opus-5",
              "share": 0.2,
              "role": "仅 20% 困难任务追加复核"
            }
          ],
          "tradeoff": "20% 升级比例是预算假设；真实失败率更高时成本会上升。",
          "fallback": null,
          "actions": [
            {
              "label": "核对房源",
              "text": "准备核验过的房源参数、位置说明、授权照片；缺失字段先列问题，不让模型补猜。"
            },
            {
              "label": "生成介绍",
              "text": "普通房源批量处理，重点房源与复杂问答升级，产出房源描述、看房问答、跟进摘要。"
            },
            {
              "label": "准备问答",
              "text": "核验 10 套房源的面积、价格和位置；不添加未提供配套；记录人工修改和重试次数。"
            }
          ]
        }
      ],
      "extra": "image",
      "checkedAt": "2026-09-21"
    },
    {
      "id": "retail",
      "name": "连锁零售",
      "group": "消费与零售",
      "persona": "区域督导与店长",
      "tag": "汇总日报 → 归纳异常 → 生成行动单",
      "desc": "面向区域督导与店长，交付经营摘要、培训卡片、巡店问题清单。",
      "inputs": "门店日报、促销规则、商品清单",
      "deliverable": "经营摘要、培训卡片、巡店问题清单",
      "acceptance": "抽查 7 天日报，检查原始数值、门店归属与待办负责人",
      "steps": [
        [
          "汇总日报",
          "围绕已核验资料完成汇总日报。",
          "flash"
        ],
        [
          "归纳异常",
          "围绕已核验资料完成归纳异常。",
          "flash"
        ],
        [
          "生成行动单",
          "围绕已核验资料完成生成行动单。",
          "flash"
        ]
      ],
      "article": "choose-model",
      "budget": "预算只计文本模型 API；素材、检索、存储、人工、税费和重试另计。",
      "plans": [
        {
          "id": "quality",
          "label": "质量优先",
          "strategy": "综合多店材料形成问题假设，店长对照原表确认原因",
          "fit": "重要对外交付、复杂约束和较高返工代价的任务",
          "recipe": [
            {
              "model": "anthropic/claude-opus-5",
              "share": 1,
              "role": "主任务生成"
            },
            {
              "model": "google/gemini-3.1-pro-preview",
              "share": 1,
              "role": "独立复核"
            }
          ],
          "tradeoff": "两轮模型费用和延迟更高；高阶模型也可能出错，人工验收仍保留。",
          "fallback": null,
          "actions": [
            {
              "label": "汇总日报",
              "text": "准备门店日报、促销规则、商品清单；缺失字段先列问题，不让模型补猜。"
            },
            {
              "label": "归纳异常",
              "text": "综合多店材料形成问题假设，店长对照原表确认原因，产出经营摘要、培训卡片、巡店问题清单。"
            },
            {
              "label": "生成行动单",
              "text": "抽查 7 天日报，检查原始数值、门店归属与待办负责人；记录人工修改和重试次数。"
            }
          ]
        },
        {
          "id": "budget",
          "label": "绝对低价",
          "strategy": "免费模型按单店固定字段摘要，数值计算交给表格",
          "fit": "非敏感、小批量、能接受排队和人工修改的任务",
          "recipe": [
            {
              "model": "qwen/qwen3.8-27b:free",
              "share": 1,
              "role": "免费初稿"
            }
          ],
          "tradeoff": "免费通道有账号与容量限制，无服务保障；额度用尽时暂停或由你决定是否启用付费备选。",
          "fallback": "google/gemini-2.5-flash-lite",
          "actions": [
            {
              "label": "汇总日报",
              "text": "准备门店日报、促销规则、商品清单；缺失字段先列问题，不让模型补猜。"
            },
            {
              "label": "归纳异常",
              "text": "免费模型按单店固定字段摘要，数值计算交给表格，产出经营摘要、培训卡片、巡店问题清单。"
            },
            {
              "label": "生成行动单",
              "text": "抽查 7 天日报，检查原始数值、门店归属与待办负责人；记录人工修改和重试次数。"
            }
          ]
        },
        {
          "id": "value",
          "label": "性价比",
          "strategy": "日报自动摘要，持续异常和跨店对比交给高阶模型",
          "fit": "有持续业务量，愿意用样本测试设定升级规则的团队",
          "recipe": [
            {
              "model": "google/gemini-3.7-flash",
              "share": 1,
              "role": "日常批量任务"
            },
            {
              "model": "anthropic/claude-opus-5",
              "share": 0.2,
              "role": "仅 20% 困难任务追加复核"
            }
          ],
          "tradeoff": "20% 升级比例是预算假设；真实失败率更高时成本会上升。",
          "fallback": null,
          "actions": [
            {
              "label": "汇总日报",
              "text": "准备门店日报、促销规则、商品清单；缺失字段先列问题，不让模型补猜。"
            },
            {
              "label": "归纳异常",
              "text": "日报自动摘要，持续异常和跨店对比交给高阶模型，产出经营摘要、培训卡片、巡店问题清单。"
            },
            {
              "label": "生成行动单",
              "text": "抽查 7 天日报，检查原始数值、门店归属与待办负责人；记录人工修改和重试次数。"
            }
          ]
        }
      ],
      "extra": "none",
      "checkedAt": "2026-09-21"
    },
    {
      "id": "restaurant",
      "name": "餐饮经营",
      "group": "消费与零售",
      "persona": "餐饮店长",
      "tag": "整理菜单 → 编写介绍 → 核查配料",
      "desc": "面向餐饮店长，交付菜单介绍、活动文案、客服话术。",
      "inputs": "真实菜单、配料清单、过敏原信息、营业规则",
      "deliverable": "菜单介绍、活动文案、客服话术",
      "acceptance": "逐项核对菜单价格、配料和过敏原，不能由模型补猜",
      "steps": [
        [
          "整理菜单",
          "围绕已核验资料完成整理菜单。",
          "flash"
        ],
        [
          "编写介绍",
          "围绕已核验资料完成编写介绍。",
          "flash"
        ],
        [
          "核查配料",
          "围绕已核验资料完成核查配料。",
          "flash"
        ]
      ],
      "article": "choose-model",
      "budget": "预算只计文本模型 API；素材、检索、存储、人工、税费和重试另计。",
      "plans": [
        {
          "id": "quality",
          "label": "质量优先",
          "strategy": "品牌叙事与菜单一致性分开审校，明确过敏原信息来源",
          "fit": "重要对外交付、复杂约束和较高返工代价的任务",
          "recipe": [
            {
              "model": "anthropic/claude-opus-5",
              "share": 1,
              "role": "主任务生成"
            },
            {
              "model": "google/gemini-3.1-pro-preview",
              "share": 1,
              "role": "独立复核"
            }
          ],
          "tradeoff": "两轮模型费用和延迟更高；高阶模型也可能出错，人工验收仍保留。",
          "fallback": null,
          "actions": [
            {
              "label": "整理菜单",
              "text": "准备真实菜单、配料清单、过敏原信息、营业规则；缺失字段先列问题，不让模型补猜。"
            },
            {
              "label": "编写介绍",
              "text": "品牌叙事与菜单一致性分开审校，明确过敏原信息来源，产出菜单介绍、活动文案、客服话术。"
            },
            {
              "label": "核查配料",
              "text": "逐项核对菜单价格、配料和过敏原，不能由模型补猜；记录人工修改和重试次数。"
            }
          ]
        },
        {
          "id": "budget",
          "label": "绝对低价",
          "strategy": "免费模型生成短菜单说明，使用实拍与固定海报模板",
          "fit": "非敏感、小批量、能接受排队和人工修改的任务",
          "recipe": [
            {
              "model": "qwen/qwen3.8-27b:free",
              "share": 1,
              "role": "免费初稿"
            }
          ],
          "tradeoff": "免费通道有账号与容量限制，无服务保障；额度用尽时暂停或由你决定是否启用付费备选。",
          "fallback": "google/gemini-2.5-flash-lite",
          "actions": [
            {
              "label": "整理菜单",
              "text": "准备真实菜单、配料清单、过敏原信息、营业规则；缺失字段先列问题，不让模型补猜。"
            },
            {
              "label": "编写介绍",
              "text": "免费模型生成短菜单说明，使用实拍与固定海报模板，产出菜单介绍、活动文案、客服话术。"
            },
            {
              "label": "核查配料",
              "text": "逐项核对菜单价格、配料和过敏原，不能由模型补猜；记录人工修改和重试次数。"
            }
          ]
        },
        {
          "id": "value",
          "label": "性价比",
          "strategy": "日常上新走快速模型，品牌活动与特殊饮食问答升级人工",
          "fit": "有持续业务量，愿意用样本测试设定升级规则的团队",
          "recipe": [
            {
              "model": "google/gemini-3.7-flash",
              "share": 1,
              "role": "日常批量任务"
            },
            {
              "model": "anthropic/claude-opus-5",
              "share": 0.2,
              "role": "仅 20% 困难任务追加复核"
            }
          ],
          "tradeoff": "20% 升级比例是预算假设；真实失败率更高时成本会上升。",
          "fallback": null,
          "actions": [
            {
              "label": "整理菜单",
              "text": "准备真实菜单、配料清单、过敏原信息、营业规则；缺失字段先列问题，不让模型补猜。"
            },
            {
              "label": "编写介绍",
              "text": "日常上新走快速模型，品牌活动与特殊饮食问答升级人工，产出菜单介绍、活动文案、客服话术。"
            },
            {
              "label": "核查配料",
              "text": "逐项核对菜单价格、配料和过敏原，不能由模型补猜；记录人工修改和重试次数。"
            }
          ]
        }
      ],
      "extra": "image",
      "checkedAt": "2026-09-21"
    },
    {
      "id": "travel",
      "name": "旅游服务",
      "group": "消费与零售",
      "persona": "行程策划师",
      "tag": "汇总约束 → 编排行程 → 核查可行性",
      "desc": "面向行程策划师，交付行程草案、目的地说明、出行检查表。",
      "inputs": "已确认交通、开放时间、预算、客人偏好",
      "deliverable": "行程草案、目的地说明、出行检查表",
      "acceptance": "检查 5 条路线的时间冲突、交通衔接和费用包含项",
      "steps": [
        [
          "汇总约束",
          "围绕已核验资料完成汇总约束。",
          "flash"
        ],
        [
          "编排行程",
          "围绕已核验资料完成编排行程。",
          "flash"
        ],
        [
          "核查可行性",
          "围绕已核验资料完成核查可行性。",
          "flash"
        ]
      ],
      "article": "choose-model",
      "budget": "预算只计文本模型 API；素材、检索、存储、人工、税费和重试另计。",
      "plans": [
        {
          "id": "quality",
          "label": "质量优先",
          "strategy": "对转场时间和备选行程分别复核，实时信息从供应商确认",
          "fit": "重要对外交付、复杂约束和较高返工代价的任务",
          "recipe": [
            {
              "model": "anthropic/claude-opus-5",
              "share": 1,
              "role": "主任务生成"
            },
            {
              "model": "google/gemini-3.1-pro-preview",
              "share": 1,
              "role": "独立复核"
            }
          ],
          "tradeoff": "两轮模型费用和延迟更高；高阶模型也可能出错，人工验收仍保留。",
          "fallback": null,
          "actions": [
            {
              "label": "汇总约束",
              "text": "准备已确认交通、开放时间、预算、客人偏好；缺失字段先列问题，不让模型补猜。"
            },
            {
              "label": "编排行程",
              "text": "对转场时间和备选行程分别复核，实时信息从供应商确认，产出行程草案、目的地说明、出行检查表。"
            },
            {
              "label": "核查可行性",
              "text": "检查 5 条路线的时间冲突、交通衔接和费用包含项；记录人工修改和重试次数。"
            }
          ]
        },
        {
          "id": "budget",
          "label": "绝对低价",
          "strategy": "免费模型整理用户提供的行程资料，不调用收费搜索",
          "fit": "非敏感、小批量、能接受排队和人工修改的任务",
          "recipe": [
            {
              "model": "qwen/qwen3.8-27b:free",
              "share": 1,
              "role": "免费初稿"
            }
          ],
          "tradeoff": "免费通道有账号与容量限制，无服务保障；额度用尽时暂停或由你决定是否启用付费备选。",
          "fallback": "google/gemini-2.5-flash-lite",
          "actions": [
            {
              "label": "汇总约束",
              "text": "准备已确认交通、开放时间、预算、客人偏好；缺失字段先列问题，不让模型补猜。"
            },
            {
              "label": "编排行程",
              "text": "免费模型整理用户提供的行程资料，不调用收费搜索，产出行程草案、目的地说明、出行检查表。"
            },
            {
              "label": "核查可行性",
              "text": "检查 5 条路线的时间冲突、交通衔接和费用包含项；记录人工修改和重试次数。"
            }
          ]
        },
        {
          "id": "value",
          "label": "性价比",
          "strategy": "标准路线用模板，复杂多城市安排升级模型并人工确认",
          "fit": "有持续业务量，愿意用样本测试设定升级规则的团队",
          "recipe": [
            {
              "model": "google/gemini-3.7-flash",
              "share": 1,
              "role": "日常批量任务"
            },
            {
              "model": "anthropic/claude-opus-5",
              "share": 0.2,
              "role": "仅 20% 困难任务追加复核"
            }
          ],
          "tradeoff": "20% 升级比例是预算假设；真实失败率更高时成本会上升。",
          "fallback": null,
          "actions": [
            {
              "label": "汇总约束",
              "text": "准备已确认交通、开放时间、预算、客人偏好；缺失字段先列问题，不让模型补猜。"
            },
            {
              "label": "编排行程",
              "text": "标准路线用模板，复杂多城市安排升级模型并人工确认，产出行程草案、目的地说明、出行检查表。"
            },
            {
              "label": "核查可行性",
              "text": "检查 5 条路线的时间冲突、交通衔接和费用包含项；记录人工修改和重试次数。"
            }
          ]
        }
      ],
      "extra": "none",
      "checkedAt": "2026-09-21"
    },
    {
      "id": "hospitality",
      "name": "酒店民宿",
      "group": "消费与零售",
      "persona": "前台与运营",
      "tag": "整理政策 → 生成答复 → 检查口径",
      "desc": "面向前台与运营，交付多语种入住指南、客服答复、评价回复。",
      "inputs": "房型设施、入住政策、周边已确认信息",
      "deliverable": "多语种入住指南、客服答复、评价回复",
      "acceptance": "对 20 个常见问题检查政策一致性及无法兑现的承诺",
      "steps": [
        [
          "整理政策",
          "围绕已核验资料完成整理政策。",
          "flash"
        ],
        [
          "生成答复",
          "围绕已核验资料完成生成答复。",
          "flash"
        ],
        [
          "检查口径",
          "围绕已核验资料完成检查口径。",
          "flash"
        ]
      ],
      "article": "choose-model",
      "budget": "预算只计文本模型 API；素材、检索、存储、人工、税费和重试另计。",
      "plans": [
        {
          "id": "quality",
          "label": "质量优先",
          "strategy": "不同语言版本交叉检查，重点复核取消、押金和服务承诺",
          "fit": "重要对外交付、复杂约束和较高返工代价的任务",
          "recipe": [
            {
              "model": "anthropic/claude-opus-5",
              "share": 1,
              "role": "主任务生成"
            },
            {
              "model": "google/gemini-3.1-pro-preview",
              "share": 1,
              "role": "独立复核"
            }
          ],
          "tradeoff": "两轮模型费用和延迟更高；高阶模型也可能出错，人工验收仍保留。",
          "fallback": null,
          "actions": [
            {
              "label": "整理政策",
              "text": "准备房型设施、入住政策、周边已确认信息；缺失字段先列问题，不让模型补猜。"
            },
            {
              "label": "生成答复",
              "text": "不同语言版本交叉检查，重点复核取消、押金和服务承诺，产出多语种入住指南、客服答复、评价回复。"
            },
            {
              "label": "检查口径",
              "text": "对 20 个常见问题检查政策一致性及无法兑现的承诺；记录人工修改和重试次数。"
            }
          ]
        },
        {
          "id": "budget",
          "label": "绝对低价",
          "strategy": "免费模型套用房型与入住模板，高峰期保留人工固定话术",
          "fit": "非敏感、小批量、能接受排队和人工修改的任务",
          "recipe": [
            {
              "model": "qwen/qwen3.8-27b:free",
              "share": 1,
              "role": "免费初稿"
            }
          ],
          "tradeoff": "免费通道有账号与容量限制，无服务保障；额度用尽时暂停或由你决定是否启用付费备选。",
          "fallback": "google/gemini-2.5-flash-lite",
          "actions": [
            {
              "label": "整理政策",
              "text": "准备房型设施、入住政策、周边已确认信息；缺失字段先列问题，不让模型补猜。"
            },
            {
              "label": "生成答复",
              "text": "免费模型套用房型与入住模板，高峰期保留人工固定话术，产出多语种入住指南、客服答复、评价回复。"
            },
            {
              "label": "检查口径",
              "text": "对 20 个常见问题检查政策一致性及无法兑现的承诺；记录人工修改和重试次数。"
            }
          ]
        },
        {
          "id": "value",
          "label": "性价比",
          "strategy": "高频问答用快速模型，投诉和特殊需求直接升级人工",
          "fit": "有持续业务量，愿意用样本测试设定升级规则的团队",
          "recipe": [
            {
              "model": "google/gemini-3.7-flash",
              "share": 1,
              "role": "日常批量任务"
            },
            {
              "model": "anthropic/claude-opus-5",
              "share": 0.2,
              "role": "仅 20% 困难任务追加复核"
            }
          ],
          "tradeoff": "20% 升级比例是预算假设；真实失败率更高时成本会上升。",
          "fallback": null,
          "actions": [
            {
              "label": "整理政策",
              "text": "准备房型设施、入住政策、周边已确认信息；缺失字段先列问题，不让模型补猜。"
            },
            {
              "label": "生成答复",
              "text": "高频问答用快速模型，投诉和特殊需求直接升级人工，产出多语种入住指南、客服答复、评价回复。"
            },
            {
              "label": "检查口径",
              "text": "对 20 个常见问题检查政策一致性及无法兑现的承诺；记录人工修改和重试次数。"
            }
          ]
        }
      ],
      "extra": "audio",
      "checkedAt": "2026-09-21"
    },
    {
      "id": "manufacturing",
      "name": "工业制造",
      "group": "产业与运营",
      "persona": "工艺与质量工程师",
      "tag": "定位版本 → 整理步骤 → 工程师复核",
      "desc": "面向工艺与质量工程师，交付培训说明、故障资料摘要、检查清单。",
      "inputs": "经批准的作业指导书、设备说明、脱敏问题记录",
      "deliverable": "培训说明、故障资料摘要、检查清单",
      "acceptance": "以工程师批准稿为准，逐项检查单位、版本与先后顺序",
      "steps": [
        [
          "定位版本",
          "围绕已核验资料完成定位版本。",
          "flash"
        ],
        [
          "整理步骤",
          "围绕已核验资料完成整理步骤。",
          "flash"
        ],
        [
          "工程师复核",
          "围绕已核验资料完成工程师复核。",
          "flash"
        ]
      ],
      "article": "choose-model",
      "budget": "预算只计文本模型 API；素材、检索、存储、人工、税费和重试另计。",
      "plans": [
        {
          "id": "quality",
          "label": "质量优先",
          "strategy": "对复杂说明书做多轮引用核对，工程师批准后形成作业稿",
          "fit": "重要对外交付、复杂约束和较高返工代价的任务",
          "recipe": [
            {
              "model": "anthropic/claude-opus-5",
              "share": 1,
              "role": "主任务生成"
            },
            {
              "model": "google/gemini-3.1-pro-preview",
              "share": 1,
              "role": "独立复核"
            }
          ],
          "tradeoff": "两轮模型费用和延迟更高；高阶模型也可能出错，人工验收仍保留。",
          "fallback": null,
          "actions": [
            {
              "label": "定位版本",
              "text": "准备经批准的作业指导书、设备说明、脱敏问题记录；缺失字段先列问题，不让模型补猜。"
            },
            {
              "label": "整理步骤",
              "text": "对复杂说明书做多轮引用核对，工程师批准后形成作业稿，产出培训说明、故障资料摘要、检查清单。"
            },
            {
              "label": "工程师复核",
              "text": "以工程师批准稿为准，逐项检查单位、版本与先后顺序；记录人工修改和重试次数。"
            }
          ]
        },
        {
          "id": "budget",
          "label": "绝对低价",
          "strategy": "免费模型整理非敏感公开手册，关键工艺内容留在内部",
          "fit": "非敏感、小批量、能接受排队和人工修改的任务",
          "recipe": [
            {
              "model": "qwen/qwen3.8-27b:free",
              "share": 1,
              "role": "免费初稿"
            }
          ],
          "tradeoff": "免费通道有账号与容量限制，无服务保障；额度用尽时暂停或由你决定是否启用付费备选。",
          "fallback": "google/gemini-2.5-flash-lite",
          "actions": [
            {
              "label": "定位版本",
              "text": "准备经批准的作业指导书、设备说明、脱敏问题记录；缺失字段先列问题，不让模型补猜。"
            },
            {
              "label": "整理步骤",
              "text": "免费模型整理非敏感公开手册，关键工艺内容留在内部，产出培训说明、故障资料摘要、检查清单。"
            },
            {
              "label": "工程师复核",
              "text": "以工程师批准稿为准，逐项检查单位、版本与先后顺序；记录人工修改和重试次数。"
            }
          ]
        },
        {
          "id": "value",
          "label": "性价比",
          "strategy": "重复文档归档用轻量模型，工艺冲突和异常摘要升级",
          "fit": "有持续业务量，愿意用样本测试设定升级规则的团队",
          "recipe": [
            {
              "model": "google/gemini-3.7-flash",
              "share": 1,
              "role": "日常批量任务"
            },
            {
              "model": "anthropic/claude-opus-5",
              "share": 0.2,
              "role": "仅 20% 困难任务追加复核"
            }
          ],
          "tradeoff": "20% 升级比例是预算假设；真实失败率更高时成本会上升。",
          "fallback": null,
          "actions": [
            {
              "label": "定位版本",
              "text": "准备经批准的作业指导书、设备说明、脱敏问题记录；缺失字段先列问题，不让模型补猜。"
            },
            {
              "label": "整理步骤",
              "text": "重复文档归档用轻量模型，工艺冲突和异常摘要升级，产出培训说明、故障资料摘要、检查清单。"
            },
            {
              "label": "工程师复核",
              "text": "以工程师批准稿为准，逐项检查单位、版本与先后顺序；记录人工修改和重试次数。"
            }
          ]
        }
      ],
      "extra": "knowledge",
      "checkedAt": "2026-09-21"
    },
    {
      "id": "logistics",
      "name": "物流供应链",
      "group": "产业与运营",
      "persona": "调度与客服团队",
      "tag": "提取事件 → 匹配规则 → 生成通知",
      "desc": "面向调度与客服团队，交付异常工单摘要、客户通知草稿、交接单。",
      "inputs": "物流节点、异常代码、客户承诺、已确认时效",
      "deliverable": "异常工单摘要、客户通知草稿、交接单",
      "acceptance": "抽查 30 票，核对运单关联、时区和承诺日期",
      "steps": [
        [
          "提取事件",
          "围绕已核验资料完成提取事件。",
          "flash"
        ],
        [
          "匹配规则",
          "围绕已核验资料完成匹配规则。",
          "flash"
        ],
        [
          "生成通知",
          "围绕已核验资料完成生成通知。",
          "flash"
        ]
      ],
      "article": "choose-model",
      "budget": "预算只计文本模型 API；素材、检索、存储、人工、税费和重试另计。",
      "plans": [
        {
          "id": "quality",
          "label": "质量优先",
          "strategy": "多节点异常对照复核，时间和责任方保留可追溯依据",
          "fit": "重要对外交付、复杂约束和较高返工代价的任务",
          "recipe": [
            {
              "model": "anthropic/claude-opus-5",
              "share": 1,
              "role": "主任务生成"
            },
            {
              "model": "google/gemini-3.1-pro-preview",
              "share": 1,
              "role": "独立复核"
            }
          ],
          "tradeoff": "两轮模型费用和延迟更高；高阶模型也可能出错，人工验收仍保留。",
          "fallback": null,
          "actions": [
            {
              "label": "提取事件",
              "text": "准备物流节点、异常代码、客户承诺、已确认时效；缺失字段先列问题，不让模型补猜。"
            },
            {
              "label": "匹配规则",
              "text": "多节点异常对照复核，时间和责任方保留可追溯依据，产出异常工单摘要、客户通知草稿、交接单。"
            },
            {
              "label": "生成通知",
              "text": "抽查 30 票，核对运单关联、时区和承诺日期；记录人工修改和重试次数。"
            }
          ]
        },
        {
          "id": "budget",
          "label": "绝对低价",
          "strategy": "免费模型处理单票脱敏工单，路线和费用交给现有系统",
          "fit": "非敏感、小批量、能接受排队和人工修改的任务",
          "recipe": [
            {
              "model": "qwen/qwen3.8-27b:free",
              "share": 1,
              "role": "免费初稿"
            }
          ],
          "tradeoff": "免费通道有账号与容量限制，无服务保障；额度用尽时暂停或由你决定是否启用付费备选。",
          "fallback": "google/gemini-2.5-flash-lite",
          "actions": [
            {
              "label": "提取事件",
              "text": "准备物流节点、异常代码、客户承诺、已确认时效；缺失字段先列问题，不让模型补猜。"
            },
            {
              "label": "匹配规则",
              "text": "免费模型处理单票脱敏工单，路线和费用交给现有系统，产出异常工单摘要、客户通知草稿、交接单。"
            },
            {
              "label": "生成通知",
              "text": "抽查 30 票，核对运单关联、时区和承诺日期；记录人工修改和重试次数。"
            }
          ]
        },
        {
          "id": "value",
          "label": "性价比",
          "strategy": "普通状态通知模板化，延误争议和跨境异常升级",
          "fit": "有持续业务量，愿意用样本测试设定升级规则的团队",
          "recipe": [
            {
              "model": "google/gemini-3.7-flash",
              "share": 1,
              "role": "日常批量任务"
            },
            {
              "model": "anthropic/claude-opus-5",
              "share": 0.2,
              "role": "仅 20% 困难任务追加复核"
            }
          ],
          "tradeoff": "20% 升级比例是预算假设；真实失败率更高时成本会上升。",
          "fallback": null,
          "actions": [
            {
              "label": "提取事件",
              "text": "准备物流节点、异常代码、客户承诺、已确认时效；缺失字段先列问题，不让模型补猜。"
            },
            {
              "label": "匹配规则",
              "text": "普通状态通知模板化，延误争议和跨境异常升级，产出异常工单摘要、客户通知草稿、交接单。"
            },
            {
              "label": "生成通知",
              "text": "抽查 30 票，核对运单关联、时区和承诺日期；记录人工修改和重试次数。"
            }
          ]
        }
      ],
      "extra": "none",
      "checkedAt": "2026-09-21"
    },
    {
      "id": "finance-ops",
      "name": "财务与审计支持",
      "group": "公共与专业服务",
      "persona": "财务运营人员",
      "tag": "对齐制度 → 定位凭证 → 整理说明",
      "desc": "面向财务运营人员，交付报销问答、差异解释草稿、审计资料索引。",
      "inputs": "脱敏凭证说明、报销制度、已计算好的财务表",
      "deliverable": "报销问答、差异解释草稿、审计资料索引",
      "acceptance": "逐项检查凭证号、币种和会计期间；不自动审批付款",
      "steps": [
        [
          "对齐制度",
          "围绕已核验资料完成对齐制度。",
          "flash"
        ],
        [
          "定位凭证",
          "围绕已核验资料完成定位凭证。",
          "flash"
        ],
        [
          "整理说明",
          "围绕已核验资料完成整理说明。",
          "flash"
        ]
      ],
      "article": "choose-model",
      "budget": "预算只计文本模型 API；素材、检索、存储、人工、税费和重试另计。",
      "plans": [
        {
          "id": "quality",
          "label": "质量优先",
          "strategy": "逐条对照制度和凭证，独立复核引用与数字转录",
          "fit": "重要对外交付、复杂约束和较高返工代价的任务",
          "recipe": [
            {
              "model": "anthropic/claude-opus-5",
              "share": 1,
              "role": "主任务生成"
            },
            {
              "model": "google/gemini-3.1-pro-preview",
              "share": 1,
              "role": "独立复核"
            }
          ],
          "tradeoff": "两轮模型费用和延迟更高；高阶模型也可能出错，人工验收仍保留。",
          "fallback": null,
          "actions": [
            {
              "label": "对齐制度",
              "text": "准备脱敏凭证说明、报销制度、已计算好的财务表；缺失字段先列问题，不让模型补猜。"
            },
            {
              "label": "定位凭证",
              "text": "逐条对照制度和凭证，独立复核引用与数字转录，产出报销问答、差异解释草稿、审计资料索引。"
            },
            {
              "label": "整理说明",
              "text": "逐项检查凭证号、币种和会计期间；不自动审批付款；记录人工修改和重试次数。"
            }
          ]
        },
        {
          "id": "budget",
          "label": "绝对低价",
          "strategy": "免费模型仅整理公开制度或合成样本，金额由表格计算",
          "fit": "非敏感、小批量、能接受排队和人工修改的任务",
          "recipe": [
            {
              "model": "qwen/qwen3.8-27b:free",
              "share": 1,
              "role": "免费初稿"
            }
          ],
          "tradeoff": "免费通道有账号与容量限制，无服务保障；额度用尽时暂停或由你决定是否启用付费备选。",
          "fallback": "google/gemini-2.5-flash-lite",
          "actions": [
            {
              "label": "对齐制度",
              "text": "准备脱敏凭证说明、报销制度、已计算好的财务表；缺失字段先列问题，不让模型补猜。"
            },
            {
              "label": "定位凭证",
              "text": "免费模型仅整理公开制度或合成样本，金额由表格计算，产出报销问答、差异解释草稿、审计资料索引。"
            },
            {
              "label": "整理说明",
              "text": "逐项检查凭证号、币种和会计期间；不自动审批付款；记录人工修改和重试次数。"
            }
          ]
        },
        {
          "id": "value",
          "label": "性价比",
          "strategy": "标准制度问答用快速模型，跨制度差异由财务人员审查",
          "fit": "有持续业务量，愿意用样本测试设定升级规则的团队",
          "recipe": [
            {
              "model": "google/gemini-3.7-flash",
              "share": 1,
              "role": "日常批量任务"
            },
            {
              "model": "anthropic/claude-opus-5",
              "share": 0.2,
              "role": "仅 20% 困难任务追加复核"
            }
          ],
          "tradeoff": "20% 升级比例是预算假设；真实失败率更高时成本会上升。",
          "fallback": null,
          "actions": [
            {
              "label": "对齐制度",
              "text": "准备脱敏凭证说明、报销制度、已计算好的财务表；缺失字段先列问题，不让模型补猜。"
            },
            {
              "label": "定位凭证",
              "text": "标准制度问答用快速模型，跨制度差异由财务人员审查，产出报销问答、差异解释草稿、审计资料索引。"
            },
            {
              "label": "整理说明",
              "text": "逐项检查凭证号、币种和会计期间；不自动审批付款；记录人工修改和重试次数。"
            }
          ]
        }
      ],
      "extra": "knowledge",
      "checkedAt": "2026-09-21"
    },
    {
      "id": "legal-ops",
      "name": "法务文档支持",
      "group": "公共与专业服务",
      "persona": "法务助理",
      "tag": "标注版本 → 对照条款 → 交法务审阅",
      "desc": "面向法务助理，交付条款对照、缺失项清单、谈判问题草稿。",
      "inputs": "授权模板、合同版本、内部审查清单",
      "deliverable": "条款对照、缺失项清单、谈判问题草稿",
      "acceptance": "核对条款定位、版本与漏项；不把生成内容当成法律结论",
      "steps": [
        [
          "标注版本",
          "围绕已核验资料完成标注版本。",
          "flash"
        ],
        [
          "对照条款",
          "围绕已核验资料完成对照条款。",
          "flash"
        ],
        [
          "交法务审阅",
          "围绕已核验资料完成交法务审阅。",
          "flash"
        ]
      ],
      "article": "choose-model",
      "budget": "预算只计文本模型 API；素材、检索、存储、人工、税费和重试另计。",
      "plans": [
        {
          "id": "quality",
          "label": "质量优先",
          "strategy": "长文对照与引用检查分两轮，律师确认风险与最终意见",
          "fit": "重要对外交付、复杂约束和较高返工代价的任务",
          "recipe": [
            {
              "model": "anthropic/claude-opus-5",
              "share": 1,
              "role": "主任务生成"
            },
            {
              "model": "google/gemini-3.1-pro-preview",
              "share": 1,
              "role": "独立复核"
            }
          ],
          "tradeoff": "两轮模型费用和延迟更高；高阶模型也可能出错，人工验收仍保留。",
          "fallback": null,
          "actions": [
            {
              "label": "标注版本",
              "text": "准备授权模板、合同版本、内部审查清单；缺失字段先列问题，不让模型补猜。"
            },
            {
              "label": "对照条款",
              "text": "长文对照与引用检查分两轮，律师确认风险与最终意见，产出条款对照、缺失项清单、谈判问题草稿。"
            },
            {
              "label": "交法务审阅",
              "text": "核对条款定位、版本与漏项；不把生成内容当成法律结论；记录人工修改和重试次数。"
            }
          ]
        },
        {
          "id": "budget",
          "label": "绝对低价",
          "strategy": "免费模型仅处理公开模板或脱敏片段，人工阅读完整合同",
          "fit": "非敏感、小批量、能接受排队和人工修改的任务",
          "recipe": [
            {
              "model": "qwen/qwen3.8-27b:free",
              "share": 1,
              "role": "免费初稿"
            }
          ],
          "tradeoff": "免费通道有账号与容量限制，无服务保障；额度用尽时暂停或由你决定是否启用付费备选。",
          "fallback": "google/gemini-2.5-flash-lite",
          "actions": [
            {
              "label": "标注版本",
              "text": "准备授权模板、合同版本、内部审查清单；缺失字段先列问题，不让模型补猜。"
            },
            {
              "label": "对照条款",
              "text": "免费模型仅处理公开模板或脱敏片段，人工阅读完整合同，产出条款对照、缺失项清单、谈判问题草稿。"
            },
            {
              "label": "交法务审阅",
              "text": "核对条款定位、版本与漏项；不把生成内容当成法律结论；记录人工修改和重试次数。"
            }
          ]
        },
        {
          "id": "value",
          "label": "性价比",
          "strategy": "常规字段抽取用快速模型，差异条款由法务审阅",
          "fit": "有持续业务量，愿意用样本测试设定升级规则的团队",
          "recipe": [
            {
              "model": "google/gemini-3.7-flash",
              "share": 1,
              "role": "日常批量任务"
            },
            {
              "model": "anthropic/claude-opus-5",
              "share": 0.2,
              "role": "仅 20% 困难任务追加复核"
            }
          ],
          "tradeoff": "20% 升级比例是预算假设；真实失败率更高时成本会上升。",
          "fallback": null,
          "actions": [
            {
              "label": "标注版本",
              "text": "准备授权模板、合同版本、内部审查清单；缺失字段先列问题，不让模型补猜。"
            },
            {
              "label": "对照条款",
              "text": "常规字段抽取用快速模型，差异条款由法务审阅，产出条款对照、缺失项清单、谈判问题草稿。"
            },
            {
              "label": "交法务审阅",
              "text": "核对条款定位、版本与漏项；不把生成内容当成法律结论；记录人工修改和重试次数。"
            }
          ]
        }
      ],
      "extra": "knowledge",
      "checkedAt": "2026-09-21"
    },
    {
      "id": "health-ops",
      "name": "医疗机构行政",
      "group": "公共与专业服务",
      "persona": "医院行政与客服",
      "tag": "整理流程 → 生成指南 → 行政确认",
      "desc": "面向医院行政与客服，交付流程指南、行政问答、服务通知。",
      "inputs": "公开就诊流程、科室信息、预约规则",
      "deliverable": "流程指南、行政问答、服务通知",
      "acceptance": "逐项核对窗口、时段和联系方式；不生成诊断用药建议",
      "steps": [
        [
          "整理流程",
          "围绕已核验资料完成整理流程。",
          "flash"
        ],
        [
          "生成指南",
          "围绕已核验资料完成生成指南。",
          "flash"
        ],
        [
          "行政确认",
          "围绕已核验资料完成行政确认。",
          "flash"
        ]
      ],
      "article": "choose-model",
      "budget": "预算只计文本模型 API；素材、检索、存储、人工、税费和重试另计。",
      "plans": [
        {
          "id": "quality",
          "label": "质量优先",
          "strategy": "核对不同科室与流程分支，由机构人员确认最终口径",
          "fit": "重要对外交付、复杂约束和较高返工代价的任务",
          "recipe": [
            {
              "model": "anthropic/claude-opus-5",
              "share": 1,
              "role": "主任务生成"
            },
            {
              "model": "google/gemini-3.1-pro-preview",
              "share": 1,
              "role": "独立复核"
            }
          ],
          "tradeoff": "两轮模型费用和延迟更高；高阶模型也可能出错，人工验收仍保留。",
          "fallback": null,
          "actions": [
            {
              "label": "整理流程",
              "text": "准备公开就诊流程、科室信息、预约规则；缺失字段先列问题，不让模型补猜。"
            },
            {
              "label": "生成指南",
              "text": "核对不同科室与流程分支，由机构人员确认最终口径，产出流程指南、行政问答、服务通知。"
            },
            {
              "label": "行政确认",
              "text": "逐项核对窗口、时段和联系方式；不生成诊断用药建议；记录人工修改和重试次数。"
            }
          ]
        },
        {
          "id": "budget",
          "label": "绝对低价",
          "strategy": "免费模型只用公开行政资料，不上传病历与患者信息",
          "fit": "非敏感、小批量、能接受排队和人工修改的任务",
          "recipe": [
            {
              "model": "qwen/qwen3.8-27b:free",
              "share": 1,
              "role": "免费初稿"
            }
          ],
          "tradeoff": "免费通道有账号与容量限制，无服务保障；额度用尽时暂停或由你决定是否启用付费备选。",
          "fallback": "google/gemini-2.5-flash-lite",
          "actions": [
            {
              "label": "整理流程",
              "text": "准备公开就诊流程、科室信息、预约规则；缺失字段先列问题，不让模型补猜。"
            },
            {
              "label": "生成指南",
              "text": "免费模型只用公开行政资料，不上传病历与患者信息，产出流程指南、行政问答、服务通知。"
            },
            {
              "label": "行政确认",
              "text": "逐项核对窗口、时段和联系方式；不生成诊断用药建议；记录人工修改和重试次数。"
            }
          ]
        },
        {
          "id": "value",
          "label": "性价比",
          "strategy": "常见预约问答模板化，涉及诊疗的问题转医护人员",
          "fit": "有持续业务量，愿意用样本测试设定升级规则的团队",
          "recipe": [
            {
              "model": "google/gemini-3.7-flash",
              "share": 1,
              "role": "日常批量任务"
            },
            {
              "model": "anthropic/claude-opus-5",
              "share": 0.2,
              "role": "仅 20% 困难任务追加复核"
            }
          ],
          "tradeoff": "20% 升级比例是预算假设；真实失败率更高时成本会上升。",
          "fallback": null,
          "actions": [
            {
              "label": "整理流程",
              "text": "准备公开就诊流程、科室信息、预约规则；缺失字段先列问题，不让模型补猜。"
            },
            {
              "label": "生成指南",
              "text": "常见预约问答模板化，涉及诊疗的问题转医护人员，产出流程指南、行政问答、服务通知。"
            },
            {
              "label": "行政确认",
              "text": "逐项核对窗口、时段和联系方式；不生成诊断用药建议；记录人工修改和重试次数。"
            }
          ]
        }
      ],
      "extra": "knowledge",
      "checkedAt": "2026-09-21"
    },
    {
      "id": "recruitment",
      "name": "人力资源运营",
      "group": "公共与专业服务",
      "persona": "招聘与培训运营",
      "tag": "整理岗位 → 生成材料 → HR 审校",
      "desc": "面向招聘与培训运营，交付职位描述、访谈问题、入职指南。",
      "inputs": "岗位职责、访谈提纲、公开福利、培训材料",
      "deliverable": "职位描述、访谈问题、入职指南",
      "acceptance": "检查职责与岗位一致性；不由模型决定录用、薪资或淘汰",
      "steps": [
        [
          "整理岗位",
          "围绕已核验资料完成整理岗位。",
          "flash"
        ],
        [
          "生成材料",
          "围绕已核验资料完成生成材料。",
          "flash"
        ],
        [
          "HR 审校",
          "围绕已核验资料完成HR 审校。",
          "flash"
        ]
      ],
      "article": "choose-model",
      "budget": "预算只计文本模型 API；素材、检索、存储、人工、税费和重试另计。",
      "plans": [
        {
          "id": "quality",
          "label": "质量优先",
          "strategy": "围绕岗位能力审校描述与访谈题，避免无关个人特征",
          "fit": "重要对外交付、复杂约束和较高返工代价的任务",
          "recipe": [
            {
              "model": "anthropic/claude-opus-5",
              "share": 1,
              "role": "主任务生成"
            },
            {
              "model": "google/gemini-3.1-pro-preview",
              "share": 1,
              "role": "独立复核"
            }
          ],
          "tradeoff": "两轮模型费用和延迟更高；高阶模型也可能出错，人工验收仍保留。",
          "fallback": null,
          "actions": [
            {
              "label": "整理岗位",
              "text": "准备岗位职责、访谈提纲、公开福利、培训材料；缺失字段先列问题，不让模型补猜。"
            },
            {
              "label": "生成材料",
              "text": "围绕岗位能力审校描述与访谈题，避免无关个人特征，产出职位描述、访谈问题、入职指南。"
            },
            {
              "label": "HR 审校",
              "text": "检查职责与岗位一致性；不由模型决定录用、薪资或淘汰；记录人工修改和重试次数。"
            }
          ]
        },
        {
          "id": "budget",
          "label": "绝对低价",
          "strategy": "免费模型生成通用职位草案，简历等个人资料留在批准系统",
          "fit": "非敏感、小批量、能接受排队和人工修改的任务",
          "recipe": [
            {
              "model": "qwen/qwen3.8-27b:free",
              "share": 1,
              "role": "免费初稿"
            }
          ],
          "tradeoff": "免费通道有账号与容量限制，无服务保障；额度用尽时暂停或由你决定是否启用付费备选。",
          "fallback": "google/gemini-2.5-flash-lite",
          "actions": [
            {
              "label": "整理岗位",
              "text": "准备岗位职责、访谈提纲、公开福利、培训材料；缺失字段先列问题，不让模型补猜。"
            },
            {
              "label": "生成材料",
              "text": "免费模型生成通用职位草案，简历等个人资料留在批准系统，产出职位描述、访谈问题、入职指南。"
            },
            {
              "label": "HR 审校",
              "text": "检查职责与岗位一致性；不由模型决定录用、薪资或淘汰；记录人工修改和重试次数。"
            }
          ]
        },
        {
          "id": "value",
          "label": "性价比",
          "strategy": "高频入职问答用快速模型，复杂岗位材料升级复核",
          "fit": "有持续业务量，愿意用样本测试设定升级规则的团队",
          "recipe": [
            {
              "model": "google/gemini-3.7-flash",
              "share": 1,
              "role": "日常批量任务"
            },
            {
              "model": "anthropic/claude-opus-5",
              "share": 0.2,
              "role": "仅 20% 困难任务追加复核"
            }
          ],
          "tradeoff": "20% 升级比例是预算假设；真实失败率更高时成本会上升。",
          "fallback": null,
          "actions": [
            {
              "label": "整理岗位",
              "text": "准备岗位职责、访谈提纲、公开福利、培训材料；缺失字段先列问题，不让模型补猜。"
            },
            {
              "label": "生成材料",
              "text": "高频入职问答用快速模型，复杂岗位材料升级复核，产出职位描述、访谈问题、入职指南。"
            },
            {
              "label": "HR 审校",
              "text": "检查职责与岗位一致性；不由模型决定录用、薪资或淘汰；记录人工修改和重试次数。"
            }
          ]
        }
      ],
      "extra": "none",
      "checkedAt": "2026-09-21"
    },
    {
      "id": "gaming",
      "name": "游戏内容制作",
      "group": "内容与创意",
      "persona": "剧情与任务策划",
      "tag": "整理设定 → 编写分支 → 检查冲突",
      "desc": "面向剧情与任务策划，交付支线草案、角色对白、任务节点。",
      "inputs": "世界观、角色设定、玩法约束、已有剧情",
      "deliverable": "支线草案、角色对白、任务节点",
      "acceptance": "试玩 5 条任务链，检查触发条件、剧情冲突和重复台词",
      "steps": [
        [
          "整理设定",
          "围绕已核验资料完成整理设定。",
          "flash"
        ],
        [
          "编写分支",
          "围绕已核验资料完成编写分支。",
          "flash"
        ],
        [
          "检查冲突",
          "围绕已核验资料完成检查冲突。",
          "flash"
        ]
      ],
      "article": "choose-model",
      "budget": "预算只计文本模型 API；素材、检索、存储、人工、税费和重试另计。",
      "plans": [
        {
          "id": "quality",
          "label": "质量优先",
          "strategy": "多分支剧情由另一模型检查角色动机与世界观一致性",
          "fit": "重要对外交付、复杂约束和较高返工代价的任务",
          "recipe": [
            {
              "model": "anthropic/claude-fable-5.1",
              "share": 1,
              "role": "主任务生成"
            },
            {
              "model": "google/gemini-3.1-pro-preview",
              "share": 1,
              "role": "独立复核"
            }
          ],
          "tradeoff": "两轮模型费用和延迟更高；高阶模型也可能出错，人工验收仍保留。",
          "fallback": null,
          "actions": [
            {
              "label": "整理设定",
              "text": "准备世界观、角色设定、玩法约束、已有剧情；缺失字段先列问题，不让模型补猜。"
            },
            {
              "label": "编写分支",
              "text": "多分支剧情由另一模型检查角色动机与世界观一致性，产出支线草案、角色对白、任务节点。"
            },
            {
              "label": "检查冲突",
              "text": "试玩 5 条任务链，检查触发条件、剧情冲突和重复台词；记录人工修改和重试次数。"
            }
          ]
        },
        {
          "id": "budget",
          "label": "绝对低价",
          "strategy": "免费模型生成短对白和任务雏形，画面采用现有素材",
          "fit": "非敏感、小批量、能接受排队和人工修改的任务",
          "recipe": [
            {
              "model": "qwen/qwen3.8-27b:free",
              "share": 1,
              "role": "免费初稿"
            }
          ],
          "tradeoff": "免费通道有账号与容量限制，无服务保障；额度用尽时暂停或由你决定是否启用付费备选。",
          "fallback": "google/gemini-2.5-flash-lite",
          "actions": [
            {
              "label": "整理设定",
              "text": "准备世界观、角色设定、玩法约束、已有剧情；缺失字段先列问题，不让模型补猜。"
            },
            {
              "label": "编写分支",
              "text": "免费模型生成短对白和任务雏形，画面采用现有素材，产出支线草案、角色对白、任务节点。"
            },
            {
              "label": "检查冲突",
              "text": "试玩 5 条任务链，检查触发条件、剧情冲突和重复台词；记录人工修改和重试次数。"
            }
          ]
        },
        {
          "id": "value",
          "label": "性价比",
          "strategy": "批量 NPC 台词走轻量模型，主线与关键角色升级",
          "fit": "有持续业务量，愿意用样本测试设定升级规则的团队",
          "recipe": [
            {
              "model": "google/gemini-3.7-flash",
              "share": 1,
              "role": "日常批量任务"
            },
            {
              "model": "anthropic/claude-fable-5.1",
              "share": 0.2,
              "role": "仅 20% 困难任务追加复核"
            }
          ],
          "tradeoff": "20% 升级比例是预算假设；真实失败率更高时成本会上升。",
          "fallback": null,
          "actions": [
            {
              "label": "整理设定",
              "text": "准备世界观、角色设定、玩法约束、已有剧情；缺失字段先列问题，不让模型补猜。"
            },
            {
              "label": "编写分支",
              "text": "批量 NPC 台词走轻量模型，主线与关键角色升级，产出支线草案、角色对白、任务节点。"
            },
            {
              "label": "检查冲突",
              "text": "试玩 5 条任务链，检查触发条件、剧情冲突和重复台词；记录人工修改和重试次数。"
            }
          ]
        }
      ],
      "extra": "image",
      "checkedAt": "2026-09-21"
    },
    {
      "id": "publishing",
      "name": "出版与媒体",
      "group": "内容与创意",
      "persona": "编辑与记者",
      "tag": "整理来源 → 组织稿件 → 编辑核实",
      "desc": "面向编辑与记者，交付文章提纲、摘要、校对清单。",
      "inputs": "授权稿件、采访记录、事实来源、编辑规范",
      "deliverable": "文章提纲、摘要、校对清单",
      "acceptance": "逐条核实人名、时间、数字和引语，不生成不存在的采访",
      "steps": [
        [
          "整理来源",
          "围绕已核验资料完成整理来源。",
          "flash"
        ],
        [
          "组织稿件",
          "围绕已核验资料完成组织稿件。",
          "flash"
        ],
        [
          "编辑核实",
          "围绕已核验资料完成编辑核实。",
          "flash"
        ]
      ],
      "article": "choose-model",
      "budget": "预算只计文本模型 API；素材、检索、存储、人工、税费和重试另计。",
      "plans": [
        {
          "id": "quality",
          "label": "质量优先",
          "strategy": "结构编辑与事实核对独立进行，引用回到原始材料",
          "fit": "重要对外交付、复杂约束和较高返工代价的任务",
          "recipe": [
            {
              "model": "anthropic/claude-fable-5.1",
              "share": 1,
              "role": "主任务生成"
            },
            {
              "model": "google/gemini-3.1-pro-preview",
              "share": 1,
              "role": "独立复核"
            }
          ],
          "tradeoff": "两轮模型费用和延迟更高；高阶模型也可能出错，人工验收仍保留。",
          "fallback": null,
          "actions": [
            {
              "label": "整理来源",
              "text": "准备授权稿件、采访记录、事实来源、编辑规范；缺失字段先列问题，不让模型补猜。"
            },
            {
              "label": "组织稿件",
              "text": "结构编辑与事实核对独立进行，引用回到原始材料，产出文章提纲、摘要、校对清单。"
            },
            {
              "label": "编辑核实",
              "text": "逐条核实人名、时间、数字和引语，不生成不存在的采访；记录人工修改和重试次数。"
            }
          ]
        },
        {
          "id": "budget",
          "label": "绝对低价",
          "strategy": "免费模型处理标题和短摘要，原稿由编辑审阅",
          "fit": "非敏感、小批量、能接受排队和人工修改的任务",
          "recipe": [
            {
              "model": "qwen/qwen3.8-27b:free",
              "share": 1,
              "role": "免费初稿"
            }
          ],
          "tradeoff": "免费通道有账号与容量限制，无服务保障；额度用尽时暂停或由你决定是否启用付费备选。",
          "fallback": "google/gemini-2.5-flash-lite",
          "actions": [
            {
              "label": "整理来源",
              "text": "准备授权稿件、采访记录、事实来源、编辑规范；缺失字段先列问题，不让模型补猜。"
            },
            {
              "label": "组织稿件",
              "text": "免费模型处理标题和短摘要，原稿由编辑审阅，产出文章提纲、摘要、校对清单。"
            },
            {
              "label": "编辑核实",
              "text": "逐条核实人名、时间、数字和引语，不生成不存在的采访；记录人工修改和重试次数。"
            }
          ]
        },
        {
          "id": "value",
          "label": "性价比",
          "strategy": "批量摘要走快速模型，长篇结构与重要报道升级",
          "fit": "有持续业务量，愿意用样本测试设定升级规则的团队",
          "recipe": [
            {
              "model": "google/gemini-3.7-flash",
              "share": 1,
              "role": "日常批量任务"
            },
            {
              "model": "anthropic/claude-fable-5.1",
              "share": 0.2,
              "role": "仅 20% 困难任务追加复核"
            }
          ],
          "tradeoff": "20% 升级比例是预算假设；真实失败率更高时成本会上升。",
          "fallback": null,
          "actions": [
            {
              "label": "整理来源",
              "text": "准备授权稿件、采访记录、事实来源、编辑规范；缺失字段先列问题，不让模型补猜。"
            },
            {
              "label": "组织稿件",
              "text": "批量摘要走快速模型，长篇结构与重要报道升级，产出文章提纲、摘要、校对清单。"
            },
            {
              "label": "编辑核实",
              "text": "逐条核实人名、时间、数字和引语，不生成不存在的采访；记录人工修改和重试次数。"
            }
          ]
        }
      ],
      "extra": "none",
      "checkedAt": "2026-09-21"
    },
    {
      "id": "consulting",
      "name": "咨询与研究",
      "group": "商业服务",
      "persona": "研究员与顾问",
      "tag": "界定问题 → 组织证据 → 形成建议",
      "desc": "面向研究员与顾问，交付研究提纲、证据矩阵、建议草案。",
      "inputs": "客户问题、公开资料、访谈摘要、分析框架",
      "deliverable": "研究提纲、证据矩阵、建议草案",
      "acceptance": "检查 20 条结论的来源链，把事实、假设、判断分开",
      "steps": [
        [
          "界定问题",
          "围绕已核验资料完成界定问题。",
          "flash"
        ],
        [
          "组织证据",
          "围绕已核验资料完成组织证据。",
          "flash"
        ],
        [
          "形成建议",
          "围绕已核验资料完成形成建议。",
          "flash"
        ]
      ],
      "article": "choose-model",
      "budget": "预算只计文本模型 API；素材、检索、存储、人工、税费和重试另计。",
      "plans": [
        {
          "id": "quality",
          "label": "质量优先",
          "strategy": "复杂假设与反证检查分开执行，顾问确认推论边界",
          "fit": "重要对外交付、复杂约束和较高返工代价的任务",
          "recipe": [
            {
              "model": "anthropic/claude-opus-5",
              "share": 1,
              "role": "主任务生成"
            },
            {
              "model": "google/gemini-3.1-pro-preview",
              "share": 1,
              "role": "独立复核"
            }
          ],
          "tradeoff": "两轮模型费用和延迟更高；高阶模型也可能出错，人工验收仍保留。",
          "fallback": null,
          "actions": [
            {
              "label": "界定问题",
              "text": "准备客户问题、公开资料、访谈摘要、分析框架；缺失字段先列问题，不让模型补猜。"
            },
            {
              "label": "组织证据",
              "text": "复杂假设与反证检查分开执行，顾问确认推论边界，产出研究提纲、证据矩阵、建议草案。"
            },
            {
              "label": "形成建议",
              "text": "检查 20 条结论的来源链，把事实、假设、判断分开；记录人工修改和重试次数。"
            }
          ]
        },
        {
          "id": "budget",
          "label": "绝对低价",
          "strategy": "免费模型先整理公开资料和结构，不生成伪造市场数据",
          "fit": "非敏感、小批量、能接受排队和人工修改的任务",
          "recipe": [
            {
              "model": "qwen/qwen3.8-27b:free",
              "share": 1,
              "role": "免费初稿"
            }
          ],
          "tradeoff": "免费通道有账号与容量限制，无服务保障；额度用尽时暂停或由你决定是否启用付费备选。",
          "fallback": "google/gemini-2.5-flash-lite",
          "actions": [
            {
              "label": "界定问题",
              "text": "准备客户问题、公开资料、访谈摘要、分析框架；缺失字段先列问题，不让模型补猜。"
            },
            {
              "label": "组织证据",
              "text": "免费模型先整理公开资料和结构，不生成伪造市场数据，产出研究提纲、证据矩阵、建议草案。"
            },
            {
              "label": "形成建议",
              "text": "检查 20 条结论的来源链，把事实、假设、判断分开；记录人工修改和重试次数。"
            }
          ]
        },
        {
          "id": "value",
          "label": "性价比",
          "strategy": "资料摘要批量处理，结论与客户汇报升级模型",
          "fit": "有持续业务量，愿意用样本测试设定升级规则的团队",
          "recipe": [
            {
              "model": "google/gemini-3.7-flash",
              "share": 1,
              "role": "日常批量任务"
            },
            {
              "model": "anthropic/claude-opus-5",
              "share": 0.2,
              "role": "仅 20% 困难任务追加复核"
            }
          ],
          "tradeoff": "20% 升级比例是预算假设；真实失败率更高时成本会上升。",
          "fallback": null,
          "actions": [
            {
              "label": "界定问题",
              "text": "准备客户问题、公开资料、访谈摘要、分析框架；缺失字段先列问题，不让模型补猜。"
            },
            {
              "label": "组织证据",
              "text": "资料摘要批量处理，结论与客户汇报升级模型，产出研究提纲、证据矩阵、建议草案。"
            },
            {
              "label": "形成建议",
              "text": "检查 20 条结论的来源链，把事实、假设、判断分开；记录人工修改和重试次数。"
            }
          ]
        }
      ],
      "extra": "knowledge",
      "checkedAt": "2026-09-21"
    },
    {
      "id": "architecture",
      "name": "建筑与室内设计",
      "group": "内容与创意",
      "persona": "建筑师与设计助理",
      "tag": "拆解任务书 → 构思方案 → 专业复核",
      "desc": "面向建筑师与设计助理，交付方案说明、风格草图、材料沟通稿。",
      "inputs": "任务书、空间尺寸、材料清单、风格参考",
      "deliverable": "方案说明、风格草图、材料沟通稿",
      "acceptance": "核对尺寸与任务书；生成图不代替施工图或结构计算",
      "steps": [
        [
          "拆解任务书",
          "围绕已核验资料完成拆解任务书。",
          "flash"
        ],
        [
          "构思方案",
          "围绕已核验资料完成构思方案。",
          "flash"
        ],
        [
          "专业复核",
          "围绕已核验资料完成专业复核。",
          "flash"
        ]
      ],
      "article": "choose-model",
      "budget": "预算只计文本模型 API；素材、检索、存储、人工、税费和重试另计。",
      "plans": [
        {
          "id": "quality",
          "label": "质量优先",
          "strategy": "多方案对照与材料叙述复核，视觉用于概念沟通",
          "fit": "重要对外交付、复杂约束和较高返工代价的任务",
          "recipe": [
            {
              "model": "anthropic/claude-opus-5",
              "share": 1,
              "role": "主任务生成"
            },
            {
              "model": "google/gemini-3.1-pro-preview",
              "share": 1,
              "role": "独立复核"
            }
          ],
          "tradeoff": "两轮模型费用和延迟更高；高阶模型也可能出错，人工验收仍保留。",
          "fallback": null,
          "actions": [
            {
              "label": "拆解任务书",
              "text": "准备任务书、空间尺寸、材料清单、风格参考；缺失字段先列问题，不让模型补猜。"
            },
            {
              "label": "构思方案",
              "text": "多方案对照与材料叙述复核，视觉用于概念沟通，产出方案说明、风格草图、材料沟通稿。"
            },
            {
              "label": "专业复核",
              "text": "核对尺寸与任务书；生成图不代替施工图或结构计算；记录人工修改和重试次数。"
            }
          ]
        },
        {
          "id": "budget",
          "label": "绝对低价",
          "strategy": "免费模型出文字概念，使用原有图库和手绘表达",
          "fit": "非敏感、小批量、能接受排队和人工修改的任务",
          "recipe": [
            {
              "model": "qwen/qwen3.8-27b:free",
              "share": 1,
              "role": "免费初稿"
            }
          ],
          "tradeoff": "免费通道有账号与容量限制，无服务保障；额度用尽时暂停或由你决定是否启用付费备选。",
          "fallback": "google/gemini-2.5-flash-lite",
          "actions": [
            {
              "label": "拆解任务书",
              "text": "准备任务书、空间尺寸、材料清单、风格参考；缺失字段先列问题，不让模型补猜。"
            },
            {
              "label": "构思方案",
              "text": "免费模型出文字概念，使用原有图库和手绘表达，产出方案说明、风格草图、材料沟通稿。"
            },
            {
              "label": "专业复核",
              "text": "核对尺寸与任务书；生成图不代替施工图或结构计算；记录人工修改和重试次数。"
            }
          ]
        },
        {
          "id": "value",
          "label": "性价比",
          "strategy": "说明文案批量化，客户提案与关键空间视觉单独升级",
          "fit": "有持续业务量，愿意用样本测试设定升级规则的团队",
          "recipe": [
            {
              "model": "google/gemini-3.7-flash",
              "share": 1,
              "role": "日常批量任务"
            },
            {
              "model": "anthropic/claude-opus-5",
              "share": 0.2,
              "role": "仅 20% 困难任务追加复核"
            }
          ],
          "tradeoff": "20% 升级比例是预算假设；真实失败率更高时成本会上升。",
          "fallback": null,
          "actions": [
            {
              "label": "拆解任务书",
              "text": "准备任务书、空间尺寸、材料清单、风格参考；缺失字段先列问题，不让模型补猜。"
            },
            {
              "label": "构思方案",
              "text": "说明文案批量化，客户提案与关键空间视觉单独升级，产出方案说明、风格草图、材料沟通稿。"
            },
            {
              "label": "专业复核",
              "text": "核对尺寸与任务书；生成图不代替施工图或结构计算；记录人工修改和重试次数。"
            }
          ]
        }
      ],
      "extra": "image",
      "checkedAt": "2026-09-21"
    },
    {
      "id": "agriculture",
      "name": "农业经营",
      "group": "产业与运营",
      "persona": "合作社运营与农产品销售",
      "tag": "整理记录 → 生成摘要 → 农技人员确认",
      "desc": "面向合作社运营与农产品销售，交付日志摘要、农产品介绍、生产资料索引。",
      "inputs": "已核验产品信息、生产日志、农技部门公开资料",
      "deliverable": "日志摘要、农产品介绍、生产资料索引",
      "acceptance": "抽查 20 条记录的日期、批次与单位；不补猜农药用量",
      "steps": [
        [
          "整理记录",
          "围绕已核验资料完成整理记录。",
          "flash"
        ],
        [
          "生成摘要",
          "围绕已核验资料完成生成摘要。",
          "flash"
        ],
        [
          "农技人员确认",
          "围绕已核验资料完成农技人员确认。",
          "flash"
        ]
      ],
      "article": "choose-model",
      "budget": "预算只计文本模型 API；素材、检索、存储、人工、税费和重试另计。",
      "plans": [
        {
          "id": "quality",
          "label": "质量优先",
          "strategy": "跨批次记录对照，农技人员审校涉及生产操作的内容",
          "fit": "重要对外交付、复杂约束和较高返工代价的任务",
          "recipe": [
            {
              "model": "anthropic/claude-opus-5",
              "share": 1,
              "role": "主任务生成"
            },
            {
              "model": "google/gemini-3.1-pro-preview",
              "share": 1,
              "role": "独立复核"
            }
          ],
          "tradeoff": "两轮模型费用和延迟更高；高阶模型也可能出错，人工验收仍保留。",
          "fallback": null,
          "actions": [
            {
              "label": "整理记录",
              "text": "准备已核验产品信息、生产日志、农技部门公开资料；缺失字段先列问题，不让模型补猜。"
            },
            {
              "label": "生成摘要",
              "text": "跨批次记录对照，农技人员审校涉及生产操作的内容，产出日志摘要、农产品介绍、生产资料索引。"
            },
            {
              "label": "农技人员确认",
              "text": "抽查 20 条记录的日期、批次与单位；不补猜农药用量；记录人工修改和重试次数。"
            }
          ]
        },
        {
          "id": "budget",
          "label": "绝对低价",
          "strategy": "免费模型整理非敏感日志和销售文案，现场决策由人员负责",
          "fit": "非敏感、小批量、能接受排队和人工修改的任务",
          "recipe": [
            {
              "model": "qwen/qwen3.8-27b:free",
              "share": 1,
              "role": "免费初稿"
            }
          ],
          "tradeoff": "免费通道有账号与容量限制，无服务保障；额度用尽时暂停或由你决定是否启用付费备选。",
          "fallback": "google/gemini-2.5-flash-lite",
          "actions": [
            {
              "label": "整理记录",
              "text": "准备已核验产品信息、生产日志、农技部门公开资料；缺失字段先列问题，不让模型补猜。"
            },
            {
              "label": "生成摘要",
              "text": "免费模型整理非敏感日志和销售文案，现场决策由人员负责，产出日志摘要、农产品介绍、生产资料索引。"
            },
            {
              "label": "农技人员确认",
              "text": "抽查 20 条记录的日期、批次与单位；不补猜农药用量；记录人工修改和重试次数。"
            }
          ]
        },
        {
          "id": "value",
          "label": "性价比",
          "strategy": "高频记录摘要批量化，异常记录转专业人员",
          "fit": "有持续业务量，愿意用样本测试设定升级规则的团队",
          "recipe": [
            {
              "model": "google/gemini-3.7-flash",
              "share": 1,
              "role": "日常批量任务"
            },
            {
              "model": "anthropic/claude-opus-5",
              "share": 0.2,
              "role": "仅 20% 困难任务追加复核"
            }
          ],
          "tradeoff": "20% 升级比例是预算假设；真实失败率更高时成本会上升。",
          "fallback": null,
          "actions": [
            {
              "label": "整理记录",
              "text": "准备已核验产品信息、生产日志、农技部门公开资料；缺失字段先列问题，不让模型补猜。"
            },
            {
              "label": "生成摘要",
              "text": "高频记录摘要批量化，异常记录转专业人员，产出日志摘要、农产品介绍、生产资料索引。"
            },
            {
              "label": "农技人员确认",
              "text": "抽查 20 条记录的日期、批次与单位；不补猜农药用量；记录人工修改和重试次数。"
            }
          ]
        }
      ],
      "extra": "none",
      "checkedAt": "2026-09-21"
    },
    {
      "id": "nonprofit",
      "name": "公益与社会组织",
      "group": "公共与专业服务",
      "persona": "项目与志愿者管理者",
      "tag": "整理活动 → 编写报告 → 核对成果",
      "desc": "面向项目与志愿者管理者，交付招募文案、项目摘要、捐赠者报告草稿。",
      "inputs": "公开项目目标、真实活动记录、已核准预算",
      "deliverable": "招募文案、项目摘要、捐赠者报告草稿",
      "acceptance": "核对受益人数、预算与活动照片授权，不编造案例",
      "steps": [
        [
          "整理活动",
          "围绕已核验资料完成整理活动。",
          "flash"
        ],
        [
          "编写报告",
          "围绕已核验资料完成编写报告。",
          "flash"
        ],
        [
          "核对成果",
          "围绕已核验资料完成核对成果。",
          "flash"
        ]
      ],
      "article": "choose-model",
      "budget": "预算只计文本模型 API；素材、检索、存储、人工、税费和重试另计。",
      "plans": [
        {
          "id": "quality",
          "label": "质量优先",
          "strategy": "成果叙事与数字证据双重核对，保留项目限制",
          "fit": "重要对外交付、复杂约束和较高返工代价的任务",
          "recipe": [
            {
              "model": "anthropic/claude-opus-5",
              "share": 1,
              "role": "主任务生成"
            },
            {
              "model": "google/gemini-3.1-pro-preview",
              "share": 1,
              "role": "独立复核"
            }
          ],
          "tradeoff": "两轮模型费用和延迟更高；高阶模型也可能出错，人工验收仍保留。",
          "fallback": null,
          "actions": [
            {
              "label": "整理活动",
              "text": "准备公开项目目标、真实活动记录、已核准预算；缺失字段先列问题，不让模型补猜。"
            },
            {
              "label": "编写报告",
              "text": "成果叙事与数字证据双重核对，保留项目限制，产出招募文案、项目摘要、捐赠者报告草稿。"
            },
            {
              "label": "核对成果",
              "text": "核对受益人数、预算与活动照片授权，不编造案例；记录人工修改和重试次数。"
            }
          ]
        },
        {
          "id": "budget",
          "label": "绝对低价",
          "strategy": "免费模型生成通知与短报告，复用已审批模板",
          "fit": "非敏感、小批量、能接受排队和人工修改的任务",
          "recipe": [
            {
              "model": "qwen/qwen3.8-27b:free",
              "share": 1,
              "role": "免费初稿"
            }
          ],
          "tradeoff": "免费通道有账号与容量限制，无服务保障；额度用尽时暂停或由你决定是否启用付费备选。",
          "fallback": "google/gemini-2.5-flash-lite",
          "actions": [
            {
              "label": "整理活动",
              "text": "准备公开项目目标、真实活动记录、已核准预算；缺失字段先列问题，不让模型补猜。"
            },
            {
              "label": "编写报告",
              "text": "免费模型生成通知与短报告，复用已审批模板，产出招募文案、项目摘要、捐赠者报告草稿。"
            },
            {
              "label": "核对成果",
              "text": "核对受益人数、预算与活动照片授权，不编造案例；记录人工修改和重试次数。"
            }
          ]
        },
        {
          "id": "value",
          "label": "性价比",
          "strategy": "例行通知自动草拟，年度报告与公开募捐材料升级审校",
          "fit": "有持续业务量，愿意用样本测试设定升级规则的团队",
          "recipe": [
            {
              "model": "google/gemini-3.7-flash",
              "share": 1,
              "role": "日常批量任务"
            },
            {
              "model": "anthropic/claude-opus-5",
              "share": 0.2,
              "role": "仅 20% 困难任务追加复核"
            }
          ],
          "tradeoff": "20% 升级比例是预算假设；真实失败率更高时成本会上升。",
          "fallback": null,
          "actions": [
            {
              "label": "整理活动",
              "text": "准备公开项目目标、真实活动记录、已核准预算；缺失字段先列问题，不让模型补猜。"
            },
            {
              "label": "编写报告",
              "text": "例行通知自动草拟，年度报告与公开募捐材料升级审校，产出招募文案、项目摘要、捐赠者报告草稿。"
            },
            {
              "label": "核对成果",
              "text": "核对受益人数、预算与活动照片授权，不编造案例；记录人工修改和重试次数。"
            }
          ]
        }
      ],
      "extra": "image",
      "checkedAt": "2026-09-21"
    },
    {
      "id": "local-services",
      "name": "本地生活服务",
      "group": "商业服务",
      "persona": "家政维修与门店经营者",
      "tag": "整理服务 → 生成答复 → 确认预约",
      "desc": "面向家政维修与门店经营者，交付项目介绍、询价答复、预约确认草稿。",
      "inputs": "服务范围、价目表、预约规则、技师排期",
      "deliverable": "项目介绍、询价答复、预约确认草稿",
      "acceptance": "检查 20 个咨询样本，确认收费范围与预约不冲突",
      "steps": [
        [
          "整理服务",
          "围绕已核验资料完成整理服务。",
          "flash"
        ],
        [
          "生成答复",
          "围绕已核验资料完成生成答复。",
          "flash"
        ],
        [
          "确认预约",
          "围绕已核验资料完成确认预约。",
          "flash"
        ]
      ],
      "article": "choose-model",
      "budget": "预算只计文本模型 API；素材、检索、存储、人工、税费和重试另计。",
      "plans": [
        {
          "id": "quality",
          "label": "质量优先",
          "strategy": "复杂服务边界与报价解释复核，由人员确认上门安排",
          "fit": "重要对外交付、复杂约束和较高返工代价的任务",
          "recipe": [
            {
              "model": "anthropic/claude-opus-5",
              "share": 1,
              "role": "主任务生成"
            },
            {
              "model": "google/gemini-3.1-pro-preview",
              "share": 1,
              "role": "独立复核"
            }
          ],
          "tradeoff": "两轮模型费用和延迟更高；高阶模型也可能出错，人工验收仍保留。",
          "fallback": null,
          "actions": [
            {
              "label": "整理服务",
              "text": "准备服务范围、价目表、预约规则、技师排期；缺失字段先列问题，不让模型补猜。"
            },
            {
              "label": "生成答复",
              "text": "复杂服务边界与报价解释复核，由人员确认上门安排，产出项目介绍、询价答复、预约确认草稿。"
            },
            {
              "label": "确认预约",
              "text": "检查 20 个咨询样本，确认收费范围与预约不冲突；记录人工修改和重试次数。"
            }
          ]
        },
        {
          "id": "budget",
          "label": "绝对低价",
          "strategy": "免费模型套用服务模板，报价使用固定表格",
          "fit": "非敏感、小批量、能接受排队和人工修改的任务",
          "recipe": [
            {
              "model": "qwen/qwen3.8-27b:free",
              "share": 1,
              "role": "免费初稿"
            }
          ],
          "tradeoff": "免费通道有账号与容量限制，无服务保障；额度用尽时暂停或由你决定是否启用付费备选。",
          "fallback": "google/gemini-2.5-flash-lite",
          "actions": [
            {
              "label": "整理服务",
              "text": "准备服务范围、价目表、预约规则、技师排期；缺失字段先列问题，不让模型补猜。"
            },
            {
              "label": "生成答复",
              "text": "免费模型套用服务模板，报价使用固定表格，产出项目介绍、询价答复、预约确认草稿。"
            },
            {
              "label": "确认预约",
              "text": "检查 20 个咨询样本，确认收费范围与预约不冲突；记录人工修改和重试次数。"
            }
          ]
        },
        {
          "id": "value",
          "label": "性价比",
          "strategy": "标准咨询走快速模型，投诉和非标服务转人工",
          "fit": "有持续业务量，愿意用样本测试设定升级规则的团队",
          "recipe": [
            {
              "model": "google/gemini-3.7-flash",
              "share": 1,
              "role": "日常批量任务"
            },
            {
              "model": "anthropic/claude-opus-5",
              "share": 0.2,
              "role": "仅 20% 困难任务追加复核"
            }
          ],
          "tradeoff": "20% 升级比例是预算假设；真实失败率更高时成本会上升。",
          "fallback": null,
          "actions": [
            {
              "label": "整理服务",
              "text": "准备服务范围、价目表、预约规则、技师排期；缺失字段先列问题，不让模型补猜。"
            },
            {
              "label": "生成答复",
              "text": "标准咨询走快速模型，投诉和非标服务转人工，产出项目介绍、询价答复、预约确认草稿。"
            },
            {
              "label": "确认预约",
              "text": "检查 20 个咨询样本，确认收费范围与预约不冲突；记录人工修改和重试次数。"
            }
          ]
        }
      ],
      "extra": "none",
      "checkedAt": "2026-09-21"
    },
    {
      "id": "events",
      "name": "会展与活动",
      "group": "商业服务",
      "persona": "活动策划与执行",
      "tag": "整理资源 → 编排流程 → 执行团队走查",
      "desc": "面向活动策划与执行，交付流程表、主持稿、应急沟通稿。",
      "inputs": "活动目标、场地条件、预算表、嘉宾已确认信息",
      "deliverable": "流程表、主持稿、应急沟通稿",
      "acceptance": "按分钟走查流程，核对人员、设备和场地交接",
      "steps": [
        [
          "整理资源",
          "围绕已核验资料完成整理资源。",
          "flash"
        ],
        [
          "编排流程",
          "围绕已核验资料完成编排流程。",
          "flash"
        ],
        [
          "执行团队走查",
          "围绕已核验资料完成执行团队走查。",
          "flash"
        ]
      ],
      "article": "choose-model",
      "budget": "预算只计文本模型 API；素材、检索、存储、人工、税费和重试另计。",
      "plans": [
        {
          "id": "quality",
          "label": "质量优先",
          "strategy": "串场与时间线分别复核，为关键环节准备备选脚本",
          "fit": "重要对外交付、复杂约束和较高返工代价的任务",
          "recipe": [
            {
              "model": "anthropic/claude-fable-5.1",
              "share": 1,
              "role": "主任务生成"
            },
            {
              "model": "google/gemini-3.1-pro-preview",
              "share": 1,
              "role": "独立复核"
            }
          ],
          "tradeoff": "两轮模型费用和延迟更高；高阶模型也可能出错，人工验收仍保留。",
          "fallback": null,
          "actions": [
            {
              "label": "整理资源",
              "text": "准备活动目标、场地条件、预算表、嘉宾已确认信息；缺失字段先列问题，不让模型补猜。"
            },
            {
              "label": "编排流程",
              "text": "串场与时间线分别复核，为关键环节准备备选脚本，产出流程表、主持稿、应急沟通稿。"
            },
            {
              "label": "执行团队走查",
              "text": "按分钟走查流程，核对人员、设备和场地交接；记录人工修改和重试次数。"
            }
          ]
        },
        {
          "id": "budget",
          "label": "绝对低价",
          "strategy": "免费模型生成标准流程和短通知，物料复用模板",
          "fit": "非敏感、小批量、能接受排队和人工修改的任务",
          "recipe": [
            {
              "model": "qwen/qwen3.8-27b:free",
              "share": 1,
              "role": "免费初稿"
            }
          ],
          "tradeoff": "免费通道有账号与容量限制，无服务保障；额度用尽时暂停或由你决定是否启用付费备选。",
          "fallback": "google/gemini-2.5-flash-lite",
          "actions": [
            {
              "label": "整理资源",
              "text": "准备活动目标、场地条件、预算表、嘉宾已确认信息；缺失字段先列问题，不让模型补猜。"
            },
            {
              "label": "编排流程",
              "text": "免费模型生成标准流程和短通知，物料复用模板，产出流程表、主持稿、应急沟通稿。"
            },
            {
              "label": "执行团队走查",
              "text": "按分钟走查流程，核对人员、设备和场地交接；记录人工修改和重试次数。"
            }
          ]
        },
        {
          "id": "value",
          "label": "性价比",
          "strategy": "常规邀请文案批量化，主会场脚本与关键嘉宾材料升级",
          "fit": "有持续业务量，愿意用样本测试设定升级规则的团队",
          "recipe": [
            {
              "model": "google/gemini-3.7-flash",
              "share": 1,
              "role": "日常批量任务"
            },
            {
              "model": "anthropic/claude-fable-5.1",
              "share": 0.2,
              "role": "仅 20% 困难任务追加复核"
            }
          ],
          "tradeoff": "20% 升级比例是预算假设；真实失败率更高时成本会上升。",
          "fallback": null,
          "actions": [
            {
              "label": "整理资源",
              "text": "准备活动目标、场地条件、预算表、嘉宾已确认信息；缺失字段先列问题，不让模型补猜。"
            },
            {
              "label": "编排流程",
              "text": "常规邀请文案批量化，主会场脚本与关键嘉宾材料升级，产出流程表、主持稿、应急沟通稿。"
            },
            {
              "label": "执行团队走查",
              "text": "按分钟走查流程，核对人员、设备和场地交接；记录人工修改和重试次数。"
            }
          ]
        }
      ],
      "extra": "audio",
      "checkedAt": "2026-09-21"
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
  },
  "freeModelPlatforms": [
    {
      "id": "openrouter",
      "name": "OpenRouter",
      "type": "聚合平台",
      "source": "https://openrouter.ai/api/v1/models",
      "rules": "https://openrouter.ai/docs/api_reference/limits",
      "coverage": "当前公开目录中全部 21 个 :free 模型；自动路由不算具体模型。"
    },
    {
      "id": "siliconflow",
      "name": "硅基流动",
      "type": "模型云平台",
      "source": "https://siliconflow.cn/pricing",
      "rules": "https://siliconflow.cn/pricing",
      "coverage": "公开价格页已确认 14 个免费模型；折叠目录尚未全部核验，不代表完整清单。"
    },
    {
      "id": "groq",
      "name": "Groq",
      "type": "推理平台",
      "source": "https://console.groq.com/docs/rate-limits",
      "rules": "https://console.groq.com/docs/rate-limits",
      "coverage": "当前公开 Free Plan Limits 表中的 10 个模型。"
    },
    {
      "id": "relay-27",
      "name": "Modelsell",
      "type": "中转站",
      "source": "https://modelsell.com/api/pricing",
      "rules": "https://modelsell.com/api/pricing",
      "coverage": "公开价格目录确认 3 个模型条目；仅限卡片所列分组，账号资格与调用可用性未实测。"
    },
    {
      "id": "relay-51",
      "name": "XycAi(星道智能)",
      "type": "中转站",
      "source": "https://xycai.us/api/pricing",
      "rules": "https://xycai.us/api/pricing",
      "coverage": "公开价格目录确认 4 个模型条目；仅限卡片所列分组，账号资格与调用可用性未实测。"
    },
    {
      "id": "relay-60",
      "name": "Apiko",
      "type": "中转站",
      "source": "https://a-piko.top/api/pricing",
      "rules": "https://a-piko.top/api/pricing",
      "coverage": "公开价格目录确认 10 个模型条目；仅限卡片所列分组，账号资格与调用可用性未实测。"
    },
    {
      "id": "relay-65",
      "name": "Lietio",
      "type": "中转站",
      "source": "https://lietio.com/api/pricing",
      "rules": "https://lietio.com/api/pricing",
      "coverage": "公开价格目录确认 1 个模型条目；仅限卡片所列分组，账号资格与调用可用性未实测。"
    },
    {
      "id": "relay-162",
      "name": "LinkAPI",
      "type": "中转站",
      "source": "https://linkapi.ai/api/pricing",
      "rules": "https://linkapi.ai/api/pricing",
      "coverage": "公开价格目录确认 8 个模型条目；仅限卡片所列分组，账号资格与调用可用性未实测。"
    },
    {
      "id": "relay-211",
      "name": "哈基米",
      "type": "中转站",
      "source": "https://api.gemai.cc/api/pricing",
      "rules": "https://api.gemai.cc/api/pricing",
      "coverage": "公开价格目录确认 6 个模型条目；仅限卡片所列分组，账号资格与调用可用性未实测。"
    },
    {
      "id": "relay-213",
      "name": "大肘子",
      "type": "中转站",
      "source": "https://api.dzzi.ai/api/pricing",
      "rules": "https://api.dzzi.ai/api/pricing",
      "coverage": "公开价格目录确认 4 个模型条目；仅限卡片所列分组，账号资格与调用可用性未实测。"
    },
    {
      "id": "relay-215",
      "name": "宅恋",
      "type": "中转站",
      "source": "https://az.zlapi.vip/api/pricing",
      "rules": "https://az.zlapi.vip/api/pricing",
      "coverage": "公开价格目录确认 5 个模型条目；仅限卡片所列分组，账号资格与调用可用性未实测。"
    },
    {
      "id": "relay-262",
      "name": "Zooo Ai",
      "type": "中转站",
      "source": "https://zoooai.com/api/pricing",
      "rules": "https://zoooai.com/api/pricing",
      "coverage": "公开价格目录确认 3 个模型条目；仅限卡片所列分组，账号资格与调用可用性未实测。"
    },
    {
      "id": "relay-311",
      "name": "deepproxy",
      "type": "中转站",
      "source": "https://airouter.mxyhi.com/api/pricing",
      "rules": "https://airouter.mxyhi.com/api/pricing",
      "coverage": "公开价格目录确认 3 个模型条目；仅限卡片所列分组，账号资格与调用可用性未实测。"
    },
    {
      "id": "relay-486",
      "name": "OfficesAI",
      "type": "中转站",
      "source": "https://officesai.top/api/pricing",
      "rules": "https://officesai.top/api/pricing",
      "coverage": "公开价格目录确认 19 个模型条目；仅限卡片所列分组，账号资格与调用可用性未实测。"
    },
    {
      "id": "relay-621",
      "name": "NBAI",
      "type": "中转站",
      "source": "https://niubiai.ai/api/pricing",
      "rules": "https://niubiai.ai/api/pricing",
      "coverage": "公开价格目录确认 1 个模型条目；仅限卡片所列分组，账号资格与调用可用性未实测。"
    },
    {
      "id": "relay-638",
      "name": "瀛光 AI",
      "type": "中转站",
      "source": "https://ai.yzy15.dpdns.org/api/pricing",
      "rules": "https://ai.yzy15.dpdns.org/api/pricing",
      "coverage": "公开价格目录确认 24 个模型条目；仅限卡片所列分组，账号资格与调用可用性未实测。"
    },
    {
      "id": "relay-679",
      "name": "酸奶AI",
      "type": "中转站",
      "source": "https://closedai.kylenqaq.com/api/pricing",
      "rules": "https://closedai.kylenqaq.com/api/pricing",
      "coverage": "公开价格目录确认 1 个模型条目；仅限卡片所列分组，账号资格与调用可用性未实测。"
    },
    {
      "id": "relay-695",
      "name": "apiopencc",
      "type": "中转站",
      "source": "https://sub.apiopencc.com/api/pricing",
      "rules": "https://sub.apiopencc.com/api/pricing",
      "coverage": "公开价格目录确认 1 个模型条目；仅限卡片所列分组，账号资格与调用可用性未实测。"
    },
    {
      "id": "relay-716",
      "name": "河图",
      "type": "中转站",
      "source": "https://hetune.top/api/pricing",
      "rules": "https://hetune.top/api/pricing",
      "coverage": "公开价格目录确认 21 个模型条目；仅限卡片所列分组，账号资格与调用可用性未实测。"
    },
    {
      "id": "relay-800",
      "name": "深龙AI",
      "type": "中转站",
      "source": "https://shenlongapi.com/api/pricing",
      "rules": "https://shenlongapi.com/api/pricing",
      "coverage": "公开价格目录确认 1 个模型条目；仅限卡片所列分组，账号资格与调用可用性未实测。"
    }
  ],
  "freeModels": [
    {
      "platform": "openrouter",
      "modelId": "inclusionai/ling-3.0-flash-vl:free",
      "name": "inclusionAI: Ling 3.0 Flash VL",
      "capabilities": [
        "text",
        "vision",
        "tools",
        "reasoning"
      ],
      "context": 262144,
      "inputModalities": [
        "text",
        "image",
        "video"
      ],
      "outputModalities": [
        "text"
      ],
      "source": "https://openrouter.ai/api/v1/models",
      "url": "https://openrouter.ai/inclusionai/ling-3.0-flash-vl:free",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "priceEvidence": {
        "prompt": "0",
        "completion": "0"
      },
      "limits": "需账号与 API Key；平台按账号及上游容量限流，具体日额度查看账号 Limits。仅此 :free ID 零价；付费插件等附加服务另计。",
      "endsAt": null
    },
    {
      "platform": "openrouter",
      "modelId": "nex-agi/nex-n2.5-mini:free",
      "name": "Nex AGI: Nex-N2.5-Mini",
      "capabilities": [
        "text",
        "vision",
        "tools",
        "reasoning"
      ],
      "context": 262144,
      "inputModalities": [
        "text",
        "image"
      ],
      "outputModalities": [
        "text"
      ],
      "source": "https://openrouter.ai/api/v1/models",
      "url": "https://openrouter.ai/nex-agi/nex-n2.5-mini:free",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "priceEvidence": {
        "prompt": "0",
        "completion": "0"
      },
      "limits": "需账号与 API Key；平台按账号及上游容量限流，具体日额度查看账号 Limits。仅此 :free ID 零价；付费插件等附加服务另计。",
      "endsAt": null
    },
    {
      "platform": "openrouter",
      "modelId": "nex-agi/nex-n2.5-pro:free",
      "name": "Nex AGI: Nex-N2.5-Pro",
      "capabilities": [
        "text",
        "vision",
        "tools",
        "reasoning"
      ],
      "context": 262144,
      "inputModalities": [
        "text",
        "image"
      ],
      "outputModalities": [
        "text"
      ],
      "source": "https://openrouter.ai/api/v1/models",
      "url": "https://openrouter.ai/nex-agi/nex-n2.5-pro:free",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "priceEvidence": {
        "prompt": "0",
        "completion": "0"
      },
      "limits": "需账号与 API Key；平台按账号及上游容量限流，具体日额度查看账号 Limits。仅此 :free ID 零价；付费插件等附加服务另计。",
      "endsAt": null
    },
    {
      "platform": "openrouter",
      "modelId": "inclusionai/ling-3.0-flash-sante:free",
      "name": "inclusionAI: Ling 3.0 Flash Sante",
      "capabilities": [
        "text",
        "tools",
        "reasoning"
      ],
      "context": 262144,
      "inputModalities": [
        "text"
      ],
      "outputModalities": [
        "text"
      ],
      "source": "https://openrouter.ai/api/v1/models",
      "url": "https://openrouter.ai/inclusionai/ling-3.0-flash-sante:free",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "priceEvidence": {
        "prompt": "0",
        "completion": "0"
      },
      "limits": "需账号与 API Key；平台按账号及上游容量限流，具体日额度查看账号 Limits。仅此 :free ID 零价；付费插件等附加服务另计。",
      "endsAt": null
    },
    {
      "platform": "openrouter",
      "modelId": "inclusionai/ling-3.0-flash-fin:free",
      "name": "inclusionAI: Ling 3.0 Flash Fin",
      "capabilities": [
        "text",
        "tools",
        "reasoning"
      ],
      "context": 262144,
      "inputModalities": [
        "text"
      ],
      "outputModalities": [
        "text"
      ],
      "source": "https://openrouter.ai/api/v1/models",
      "url": "https://openrouter.ai/inclusionai/ling-3.0-flash-fin:free",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "priceEvidence": {
        "prompt": "0",
        "completion": "0"
      },
      "limits": "需账号与 API Key；平台按账号及上游容量限流，具体日额度查看账号 Limits。仅此 :free ID 零价；付费插件等附加服务另计。",
      "endsAt": null
    },
    {
      "platform": "openrouter",
      "modelId": "qwen/qwen3.8-27b:free",
      "name": "Qwen: Qwen3.8 27B",
      "capabilities": [
        "text",
        "vision",
        "tools",
        "reasoning"
      ],
      "context": 262144,
      "inputModalities": [
        "text",
        "image",
        "video"
      ],
      "outputModalities": [
        "text"
      ],
      "source": "https://openrouter.ai/api/v1/models",
      "url": "https://openrouter.ai/qwen/qwen3.8-27b:free",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "priceEvidence": {
        "prompt": "0",
        "completion": "0"
      },
      "limits": "需账号与 API Key；平台按账号及上游容量限流，具体日额度查看账号 Limits。仅此 :free ID 零价；付费插件等附加服务另计。",
      "endsAt": null
    },
    {
      "platform": "openrouter",
      "modelId": "dots-studio/dots-3-note-preview:free",
      "name": "Dots Studio: Dots3-Note Preview",
      "capabilities": [
        "text",
        "vision",
        "tools",
        "reasoning"
      ],
      "context": 512000,
      "inputModalities": [
        "text",
        "image"
      ],
      "outputModalities": [
        "text"
      ],
      "source": "https://openrouter.ai/api/v1/models",
      "url": "https://openrouter.ai/dots-studio/dots-3-note-preview:free",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "priceEvidence": {
        "prompt": "0",
        "completion": "0"
      },
      "limits": "需账号与 API Key；平台按账号及上游容量限流，具体日额度查看账号 Limits。仅此 :free ID 零价；付费插件等附加服务另计。",
      "endsAt": "2026-09-30"
    },
    {
      "platform": "openrouter",
      "modelId": "liquid/lfm-2.5-2.6b:free",
      "name": "LiquidAI: LFM2.5-2.6B",
      "capabilities": [
        "text",
        "tools",
        "reasoning"
      ],
      "context": 65536,
      "inputModalities": [
        "text"
      ],
      "outputModalities": [
        "text"
      ],
      "source": "https://openrouter.ai/api/v1/models",
      "url": "https://openrouter.ai/liquid/lfm-2.5-2.6b:free",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "priceEvidence": {
        "prompt": "0",
        "completion": "0"
      },
      "limits": "需账号与 API Key；平台按账号及上游容量限流，具体日额度查看账号 Limits。仅此 :free ID 零价；付费插件等附加服务另计。",
      "endsAt": null
    },
    {
      "platform": "openrouter",
      "modelId": "nvidia/nemotron-3.5-lightning:free",
      "name": "NVIDIA: Nemotron 3.5 Lightning",
      "capabilities": [
        "text",
        "tools",
        "reasoning"
      ],
      "context": 1000000,
      "inputModalities": [
        "text"
      ],
      "outputModalities": [
        "text"
      ],
      "source": "https://openrouter.ai/api/v1/models",
      "url": "https://openrouter.ai/nvidia/nemotron-3.5-lightning:free",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "priceEvidence": {
        "prompt": "0",
        "completion": "0"
      },
      "limits": "需账号与 API Key；平台按账号及上游容量限流，具体日额度查看账号 Limits。仅此 :free ID 零价；付费插件等附加服务另计。",
      "endsAt": null
    },
    {
      "platform": "openrouter",
      "modelId": "thinkingmachines/inkling-small:free",
      "name": "Thinking Machines: Inkling Small",
      "capabilities": [
        "text",
        "vision",
        "audio",
        "tools",
        "reasoning"
      ],
      "context": 1048576,
      "inputModalities": [
        "text",
        "image",
        "audio"
      ],
      "outputModalities": [
        "text"
      ],
      "source": "https://openrouter.ai/api/v1/models",
      "url": "https://openrouter.ai/thinkingmachines/inkling-small:free",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "priceEvidence": {
        "prompt": "0",
        "completion": "0"
      },
      "limits": "需账号与 API Key；平台按账号及上游容量限流，具体日额度查看账号 Limits。仅此 :free ID 零价；付费插件等附加服务另计。",
      "endsAt": null
    },
    {
      "platform": "openrouter",
      "modelId": "poolside/laguna-s-2.1:free",
      "name": "Poolside: Laguna S 2.1",
      "capabilities": [
        "text",
        "tools",
        "reasoning"
      ],
      "context": 262144,
      "inputModalities": [
        "text"
      ],
      "outputModalities": [
        "text"
      ],
      "source": "https://openrouter.ai/api/v1/models",
      "url": "https://openrouter.ai/poolside/laguna-s-2.1:free",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "priceEvidence": {
        "prompt": "0",
        "completion": "0"
      },
      "limits": "需账号与 API Key；平台按账号及上游容量限流，具体日额度查看账号 Limits。仅此 :free ID 零价；付费插件等附加服务另计。",
      "endsAt": null
    },
    {
      "platform": "openrouter",
      "modelId": "thinkingmachines/inkling:free",
      "name": "Thinking Machines: Inkling",
      "capabilities": [
        "text",
        "vision",
        "audio",
        "tools",
        "reasoning"
      ],
      "context": 1048576,
      "inputModalities": [
        "text",
        "image",
        "audio"
      ],
      "outputModalities": [
        "text"
      ],
      "source": "https://openrouter.ai/api/v1/models",
      "url": "https://openrouter.ai/thinkingmachines/inkling:free",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "priceEvidence": {
        "prompt": "0",
        "completion": "0"
      },
      "limits": "需账号与 API Key；平台按账号及上游容量限流，具体日额度查看账号 Limits。仅此 :free ID 零价；付费插件等附加服务另计。",
      "endsAt": null
    },
    {
      "platform": "openrouter",
      "modelId": "poolside/laguna-xs-2.1:free",
      "name": "Poolside: Laguna XS 2.1",
      "capabilities": [
        "text",
        "tools",
        "reasoning"
      ],
      "context": 262144,
      "inputModalities": [
        "text"
      ],
      "outputModalities": [
        "text"
      ],
      "source": "https://openrouter.ai/api/v1/models",
      "url": "https://openrouter.ai/poolside/laguna-xs-2.1:free",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "priceEvidence": {
        "prompt": "0",
        "completion": "0"
      },
      "limits": "需账号与 API Key；平台按账号及上游容量限流，具体日额度查看账号 Limits。仅此 :free ID 零价；付费插件等附加服务另计。",
      "endsAt": null
    },
    {
      "platform": "openrouter",
      "modelId": "cohere/north-mini-code:free",
      "name": "Cohere: North Mini Code",
      "capabilities": [
        "text",
        "tools",
        "reasoning"
      ],
      "context": 256000,
      "inputModalities": [
        "text"
      ],
      "outputModalities": [
        "text"
      ],
      "source": "https://openrouter.ai/api/v1/models",
      "url": "https://openrouter.ai/cohere/north-mini-code:free",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "priceEvidence": {
        "prompt": "0",
        "completion": "0"
      },
      "limits": "需账号与 API Key；平台按账号及上游容量限流，具体日额度查看账号 Limits。仅此 :free ID 零价；付费插件等附加服务另计。",
      "endsAt": null
    },
    {
      "platform": "openrouter",
      "modelId": "z-ai/glm-5.2:free",
      "name": "Z.ai: GLM 5.2",
      "capabilities": [
        "text",
        "reasoning"
      ],
      "context": 32768,
      "inputModalities": [
        "text"
      ],
      "outputModalities": [
        "text"
      ],
      "source": "https://openrouter.ai/api/v1/models",
      "url": "https://openrouter.ai/z-ai/glm-5.2:free",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "priceEvidence": {
        "prompt": "0",
        "completion": "0"
      },
      "limits": "需账号与 API Key；平台按账号及上游容量限流，具体日额度查看账号 Limits。仅此 :free ID 零价；付费插件等附加服务另计。",
      "endsAt": null
    },
    {
      "platform": "openrouter",
      "modelId": "nvidia/nemotron-3.5-content-safety:free",
      "name": "NVIDIA: Nemotron 3.5 Content Safety",
      "capabilities": [
        "text",
        "vision",
        "reasoning"
      ],
      "context": 128000,
      "inputModalities": [
        "text",
        "image"
      ],
      "outputModalities": [
        "text"
      ],
      "source": "https://openrouter.ai/api/v1/models",
      "url": "https://openrouter.ai/nvidia/nemotron-3.5-content-safety:free",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "priceEvidence": {
        "prompt": "0",
        "completion": "0"
      },
      "limits": "需账号与 API Key；平台按账号及上游容量限流，具体日额度查看账号 Limits。仅此 :free ID 零价；付费插件等附加服务另计。",
      "endsAt": null
    },
    {
      "platform": "openrouter",
      "modelId": "nvidia/nemotron-3-ultra-550b-a55b:free",
      "name": "NVIDIA: Nemotron 3 Ultra",
      "capabilities": [
        "text",
        "tools",
        "reasoning"
      ],
      "context": 1000000,
      "inputModalities": [
        "text"
      ],
      "outputModalities": [
        "text"
      ],
      "source": "https://openrouter.ai/api/v1/models",
      "url": "https://openrouter.ai/nvidia/nemotron-3-ultra-550b-a55b:free",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "priceEvidence": {
        "prompt": "0",
        "completion": "0"
      },
      "limits": "需账号与 API Key；平台按账号及上游容量限流，具体日额度查看账号 Limits。仅此 :free ID 零价；付费插件等附加服务另计。",
      "endsAt": null
    },
    {
      "platform": "openrouter",
      "modelId": "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free",
      "name": "NVIDIA: Nemotron 3 Nano Omni",
      "capabilities": [
        "text",
        "vision",
        "audio",
        "tools",
        "reasoning"
      ],
      "context": 256000,
      "inputModalities": [
        "text",
        "audio",
        "image",
        "video"
      ],
      "outputModalities": [
        "text"
      ],
      "source": "https://openrouter.ai/api/v1/models",
      "url": "https://openrouter.ai/nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "priceEvidence": {
        "prompt": "0",
        "completion": "0"
      },
      "limits": "需账号与 API Key；平台按账号及上游容量限流，具体日额度查看账号 Limits。仅此 :free ID 零价；付费插件等附加服务另计。",
      "endsAt": null
    },
    {
      "platform": "openrouter",
      "modelId": "google/gemma-4-26b-a4b-it:free",
      "name": "Google: Gemma 4 26B A4B ",
      "capabilities": [
        "text",
        "vision",
        "tools",
        "reasoning"
      ],
      "context": 262144,
      "inputModalities": [
        "image",
        "text",
        "video"
      ],
      "outputModalities": [
        "text"
      ],
      "source": "https://openrouter.ai/api/v1/models",
      "url": "https://openrouter.ai/google/gemma-4-26b-a4b-it:free",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "priceEvidence": {
        "prompt": "0",
        "completion": "0"
      },
      "limits": "需账号与 API Key；平台按账号及上游容量限流，具体日额度查看账号 Limits。仅此 :free ID 零价；付费插件等附加服务另计。",
      "endsAt": null
    },
    {
      "platform": "openrouter",
      "modelId": "google/gemma-4-31b-it:free",
      "name": "Google: Gemma 4 31B",
      "capabilities": [
        "text",
        "vision",
        "tools",
        "reasoning"
      ],
      "context": 262144,
      "inputModalities": [
        "image",
        "text",
        "video"
      ],
      "outputModalities": [
        "text"
      ],
      "source": "https://openrouter.ai/api/v1/models",
      "url": "https://openrouter.ai/google/gemma-4-31b-it:free",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "priceEvidence": {
        "prompt": "0",
        "completion": "0"
      },
      "limits": "需账号与 API Key；平台按账号及上游容量限流，具体日额度查看账号 Limits。仅此 :free ID 零价；付费插件等附加服务另计。",
      "endsAt": null
    },
    {
      "platform": "openrouter",
      "modelId": "nvidia/nemotron-3-super-120b-a12b:free",
      "name": "NVIDIA: Nemotron 3 Super",
      "capabilities": [
        "text",
        "tools",
        "reasoning"
      ],
      "context": 262144,
      "inputModalities": [
        "text"
      ],
      "outputModalities": [
        "text"
      ],
      "source": "https://openrouter.ai/api/v1/models",
      "url": "https://openrouter.ai/nvidia/nemotron-3-super-120b-a12b:free",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "priceEvidence": {
        "prompt": "0",
        "completion": "0"
      },
      "limits": "需账号与 API Key；平台按账号及上游容量限流，具体日额度查看账号 Limits。仅此 :free ID 零价；付费插件等附加服务另计。",
      "endsAt": null
    },
    {
      "platform": "siliconflow",
      "modelId": "tencent/Hunyuan-MT-7B",
      "name": "Hunyuan-MT-7B",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://siliconflow.cn/pricing",
      "url": "https://siliconflow.cn/pricing",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "priceEvidence": {
        "label": "免费"
      },
      "limits": "中国站价格页标为免费。需注册并创建 Key；认证资格、RPM/TPM 和可用性以控制台为准。本次来源未公开这些模型的具体限额与上下文。Pro 前缀版本不属于此免费条目。"
    },
    {
      "platform": "siliconflow",
      "modelId": "XingChenAGI/Xing4.0-29B",
      "name": "Xing4.0-29B",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://siliconflow.cn/pricing",
      "url": "https://siliconflow.cn/pricing",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "priceEvidence": {
        "label": "免费"
      },
      "limits": "中国站价格页标为免费。需注册并创建 Key；认证资格、RPM/TPM 和可用性以控制台为准。本次来源未公开这些模型的具体限额与上下文。Pro 前缀版本不属于此免费条目。"
    },
    {
      "platform": "siliconflow",
      "modelId": "PaddlePaddle/PaddleOCR-VL-1.5",
      "name": "PaddleOCR-VL-1.5",
      "capabilities": [
        "vision"
      ],
      "context": null,
      "source": "https://siliconflow.cn/pricing",
      "url": "https://siliconflow.cn/pricing",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "priceEvidence": {
        "label": "免费"
      },
      "limits": "中国站价格页标为免费。需注册并创建 Key；认证资格、RPM/TPM 和可用性以控制台为准。本次来源未公开这些模型的具体限额与上下文。Pro 前缀版本不属于此免费条目。"
    },
    {
      "platform": "siliconflow",
      "modelId": "BAAI/bge-m3",
      "name": "bge-m3",
      "capabilities": [
        "embedding"
      ],
      "context": null,
      "source": "https://siliconflow.cn/pricing",
      "url": "https://siliconflow.cn/pricing",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "priceEvidence": {
        "label": "免费"
      },
      "limits": "中国站价格页标为免费。需注册并创建 Key；认证资格、RPM/TPM 和可用性以控制台为准。本次来源未公开这些模型的具体限额与上下文。Pro 前缀版本不属于此免费条目。"
    },
    {
      "platform": "siliconflow",
      "modelId": "BAAI/bge-reranker-v2-m3",
      "name": "bge-reranker-v2-m3",
      "capabilities": [
        "rerank"
      ],
      "context": null,
      "source": "https://siliconflow.cn/pricing",
      "url": "https://siliconflow.cn/pricing",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "priceEvidence": {
        "label": "免费"
      },
      "limits": "中国站价格页标为免费。需注册并创建 Key；认证资格、RPM/TPM 和可用性以控制台为准。本次来源未公开这些模型的具体限额与上下文。Pro 前缀版本不属于此免费条目。"
    },
    {
      "platform": "siliconflow",
      "modelId": "BAAI/bge-large-zh-v1.5",
      "name": "bge-large-zh-v1.5",
      "capabilities": [
        "embedding"
      ],
      "context": null,
      "source": "https://siliconflow.cn/pricing",
      "url": "https://siliconflow.cn/pricing",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "priceEvidence": {
        "label": "免费"
      },
      "limits": "中国站价格页标为免费。需注册并创建 Key；认证资格、RPM/TPM 和可用性以控制台为准。本次来源未公开这些模型的具体限额与上下文。Pro 前缀版本不属于此免费条目。"
    },
    {
      "platform": "siliconflow",
      "modelId": "BAAI/bge-large-en-v1.5",
      "name": "bge-large-en-v1.5",
      "capabilities": [
        "embedding"
      ],
      "context": null,
      "source": "https://siliconflow.cn/pricing",
      "url": "https://siliconflow.cn/pricing",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "priceEvidence": {
        "label": "免费"
      },
      "limits": "中国站价格页标为免费。需注册并创建 Key；认证资格、RPM/TPM 和可用性以控制台为准。本次来源未公开这些模型的具体限额与上下文。Pro 前缀版本不属于此免费条目。"
    },
    {
      "platform": "siliconflow",
      "modelId": "Kwai-Kolors/Kolors",
      "name": "Kolors",
      "capabilities": [
        "image"
      ],
      "context": null,
      "source": "https://siliconflow.cn/pricing",
      "url": "https://siliconflow.cn/pricing",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "priceEvidence": {
        "label": "免费"
      },
      "limits": "中国站价格页标为免费。需注册并创建 Key；认证资格、RPM/TPM 和可用性以控制台为准。本次来源未公开这些模型的具体限额与上下文。Pro 前缀版本不属于此免费条目。"
    },
    {
      "platform": "siliconflow",
      "modelId": "XingChenAGI/XingChenGSR-V1.0",
      "name": "XingChenGSR-V1.0",
      "capabilities": [
        "audio"
      ],
      "context": null,
      "source": "https://siliconflow.cn/pricing",
      "url": "https://siliconflow.cn/pricing",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "priceEvidence": {
        "label": "免费"
      },
      "limits": "中国站价格页标为免费。需注册并创建 Key；认证资格、RPM/TPM 和可用性以控制台为准。本次来源未公开这些模型的具体限额与上下文。Pro 前缀版本不属于此免费条目。"
    },
    {
      "platform": "siliconflow",
      "modelId": "XingChenAGI/XingChenASR-V3.2-Ultra",
      "name": "XingChenASR-V3.2-Ultra",
      "capabilities": [
        "audio"
      ],
      "context": null,
      "source": "https://siliconflow.cn/pricing",
      "url": "https://siliconflow.cn/pricing",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "priceEvidence": {
        "label": "免费"
      },
      "limits": "中国站价格页标为免费。需注册并创建 Key；认证资格、RPM/TPM 和可用性以控制台为准。本次来源未公开这些模型的具体限额与上下文。Pro 前缀版本不属于此免费条目。"
    },
    {
      "platform": "siliconflow",
      "modelId": "XingChenAGI/XingChenASR-Diarize-V3.0",
      "name": "XingChenASR-Diarize-V3.0",
      "capabilities": [
        "audio"
      ],
      "context": null,
      "source": "https://siliconflow.cn/pricing",
      "url": "https://siliconflow.cn/pricing",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "priceEvidence": {
        "label": "免费"
      },
      "limits": "中国站价格页标为免费。需注册并创建 Key；认证资格、RPM/TPM 和可用性以控制台为准。本次来源未公开这些模型的具体限额与上下文。Pro 前缀版本不属于此免费条目。"
    },
    {
      "platform": "siliconflow",
      "modelId": "XingChenAGI/XingChenASR-V3.2",
      "name": "XingChenASR-V3.2",
      "capabilities": [
        "audio"
      ],
      "context": null,
      "source": "https://siliconflow.cn/pricing",
      "url": "https://siliconflow.cn/pricing",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "priceEvidence": {
        "label": "免费"
      },
      "limits": "中国站价格页标为免费。需注册并创建 Key；认证资格、RPM/TPM 和可用性以控制台为准。本次来源未公开这些模型的具体限额与上下文。Pro 前缀版本不属于此免费条目。"
    },
    {
      "platform": "siliconflow",
      "modelId": "Qwen/Qwen3-ASR-1.7B",
      "name": "Qwen3-ASR-1.7B",
      "capabilities": [
        "audio"
      ],
      "context": null,
      "source": "https://siliconflow.cn/pricing",
      "url": "https://siliconflow.cn/pricing",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "priceEvidence": {
        "label": "免费"
      },
      "limits": "中国站价格页标为免费。需注册并创建 Key；认证资格、RPM/TPM 和可用性以控制台为准。本次来源未公开这些模型的具体限额与上下文。Pro 前缀版本不属于此免费条目。"
    },
    {
      "platform": "siliconflow",
      "modelId": "FunAudioLLM/SenseVoiceSmall",
      "name": "SenseVoiceSmall",
      "capabilities": [
        "audio"
      ],
      "context": null,
      "source": "https://siliconflow.cn/pricing",
      "url": "https://siliconflow.cn/pricing",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "priceEvidence": {
        "label": "免费"
      },
      "limits": "中国站价格页标为免费。需注册并创建 Key；认证资格、RPM/TPM 和可用性以控制台为准。本次来源未公开这些模型的具体限额与上下文。Pro 前缀版本不属于此免费条目。"
    },
    {
      "platform": "groq",
      "modelId": "canopylabs/orpheus-arabic-saudi",
      "name": "orpheus-arabic-saudi",
      "capabilities": [
        "audio"
      ],
      "context": null,
      "source": "https://console.groq.com/docs/rate-limits",
      "url": "https://console.groq.com/docs/models",
      "freeType": "quota",
      "checkedAt": "2026-09-21",
      "priceEvidence": {
        "label": "Free Plan Limits"
      },
      "limits": "10 RPM · 100 RPD · 1.2K TPM · 3.6K TPD。免费计划、组织级限额；任一限额先耗尽即受限，账号可能有例外。RPM/RPD 为每分钟/日请求，TPM/TPD 为每分钟/日 Token。",
      "note": "语音合成"
    },
    {
      "platform": "groq",
      "modelId": "canopylabs/orpheus-v1-english",
      "name": "orpheus-v1-english",
      "capabilities": [
        "audio"
      ],
      "context": null,
      "source": "https://console.groq.com/docs/rate-limits",
      "url": "https://console.groq.com/docs/models",
      "freeType": "quota",
      "checkedAt": "2026-09-21",
      "priceEvidence": {
        "label": "Free Plan Limits"
      },
      "limits": "10 RPM · 100 RPD · 1.2K TPM · 3.6K TPD。免费计划、组织级限额；任一限额先耗尽即受限，账号可能有例外。RPM/RPD 为每分钟/日请求，TPM/TPD 为每分钟/日 Token。",
      "note": "语音合成"
    },
    {
      "platform": "groq",
      "modelId": "meta-llama/llama-prompt-guard-2-22m",
      "name": "llama-prompt-guard-2-22m",
      "capabilities": [
        "safety"
      ],
      "context": null,
      "source": "https://console.groq.com/docs/rate-limits",
      "url": "https://console.groq.com/docs/models",
      "freeType": "quota",
      "checkedAt": "2026-09-21",
      "priceEvidence": {
        "label": "Free Plan Limits"
      },
      "limits": "30 RPM · 14.4K RPD · 15K TPM · 500K TPD。免费计划、组织级限额；任一限额先耗尽即受限，账号可能有例外。RPM/RPD 为每分钟/日请求，TPM/TPD 为每分钟/日 Token。",
      "note": "提示安全检测"
    },
    {
      "platform": "groq",
      "modelId": "meta-llama/llama-prompt-guard-2-86m",
      "name": "llama-prompt-guard-2-86m",
      "capabilities": [
        "safety"
      ],
      "context": null,
      "source": "https://console.groq.com/docs/rate-limits",
      "url": "https://console.groq.com/docs/models",
      "freeType": "quota",
      "checkedAt": "2026-09-21",
      "priceEvidence": {
        "label": "Free Plan Limits"
      },
      "limits": "30 RPM · 14.4K RPD · 15K TPM · 500K TPD。免费计划、组织级限额；任一限额先耗尽即受限，账号可能有例外。RPM/RPD 为每分钟/日请求，TPM/TPD 为每分钟/日 Token。",
      "note": "提示安全检测"
    },
    {
      "platform": "groq",
      "modelId": "openai/gpt-oss-120b",
      "name": "gpt-oss-120b",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://console.groq.com/docs/rate-limits",
      "url": "https://console.groq.com/docs/models",
      "freeType": "quota",
      "checkedAt": "2026-09-21",
      "priceEvidence": {
        "label": "Free Plan Limits"
      },
      "limits": "30 RPM · 1K RPD · 8K TPM · 200K TPD。免费计划、组织级限额；任一限额先耗尽即受限，账号可能有例外。RPM/RPD 为每分钟/日请求，TPM/TPD 为每分钟/日 Token。",
      "note": "文本"
    },
    {
      "platform": "groq",
      "modelId": "openai/gpt-oss-20b",
      "name": "gpt-oss-20b",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://console.groq.com/docs/rate-limits",
      "url": "https://console.groq.com/docs/models",
      "freeType": "quota",
      "checkedAt": "2026-09-21",
      "priceEvidence": {
        "label": "Free Plan Limits"
      },
      "limits": "30 RPM · 1K RPD · 8K TPM · 200K TPD。免费计划、组织级限额；任一限额先耗尽即受限，账号可能有例外。RPM/RPD 为每分钟/日请求，TPM/TPD 为每分钟/日 Token。",
      "note": "文本"
    },
    {
      "platform": "groq",
      "modelId": "openai/gpt-oss-safeguard-20b",
      "name": "gpt-oss-safeguard-20b",
      "capabilities": [
        "safety"
      ],
      "context": null,
      "source": "https://console.groq.com/docs/rate-limits",
      "url": "https://console.groq.com/docs/models",
      "freeType": "quota",
      "checkedAt": "2026-09-21",
      "priceEvidence": {
        "label": "Free Plan Limits"
      },
      "limits": "30 RPM · 1K RPD · 8K TPM · 200K TPD。免费计划、组织级限额；任一限额先耗尽即受限，账号可能有例外。RPM/RPD 为每分钟/日请求，TPM/TPD 为每分钟/日 Token。",
      "note": "安全检测"
    },
    {
      "platform": "groq",
      "modelId": "qwen/qwen3.8-27b",
      "name": "qwen3.8-27b",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://console.groq.com/docs/rate-limits",
      "url": "https://console.groq.com/docs/models",
      "freeType": "quota",
      "checkedAt": "2026-09-21",
      "priceEvidence": {
        "label": "Free Plan Limits"
      },
      "limits": "30 RPM · 1K RPD · 8K TPM · 200K TPD。免费计划、组织级限额；任一限额先耗尽即受限，账号可能有例外。RPM/RPD 为每分钟/日请求，TPM/TPD 为每分钟/日 Token。",
      "note": "文本"
    },
    {
      "platform": "groq",
      "modelId": "whisper-large-v3",
      "name": "whisper-large-v3",
      "capabilities": [
        "audio"
      ],
      "context": null,
      "source": "https://console.groq.com/docs/rate-limits",
      "url": "https://console.groq.com/docs/models",
      "freeType": "quota",
      "checkedAt": "2026-09-21",
      "priceEvidence": {
        "label": "Free Plan Limits"
      },
      "limits": "20 RPM · 2K RPD · 7.2K 音频秒/小时 · 28.8K 音频秒/日。免费计划、组织级限额；任一限额先耗尽即受限，账号可能有例外。RPM/RPD 为每分钟/日请求，TPM/TPD 为每分钟/日 Token。",
      "note": "语音识别"
    },
    {
      "platform": "groq",
      "modelId": "whisper-large-v3-turbo",
      "name": "whisper-large-v3-turbo",
      "capabilities": [
        "audio"
      ],
      "context": null,
      "source": "https://console.groq.com/docs/rate-limits",
      "url": "https://console.groq.com/docs/models",
      "freeType": "quota",
      "checkedAt": "2026-09-21",
      "priceEvidence": {
        "label": "Free Plan Limits"
      },
      "limits": "20 RPM · 2K RPD · 7.2K 音频秒/小时 · 28.8K 音频秒/日。免费计划、组织级限额；任一限额先耗尽即受限，账号可能有例外。RPM/RPD 为每分钟/日请求，TPM/TPD 为每分钟/日 Token。",
      "note": "语音识别"
    },
    {
      "platform": "relay-27",
      "modelId": "mimo-v2.5-tts",
      "name": "mimo-v2.5-tts",
      "capabilities": [
        "audio"
      ],
      "context": null,
      "source": "https://modelsell.com/api/pricing",
      "url": "https://modelsell.com/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 XiaomiMIMO。XiaomiMIMO：XiaomiMIMO 官方。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。公开标准计费字段为零；不代表包月套餐、附加服务也免费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "XiaomiMIMO"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 1,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "XiaomiMIMO": 1
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-27",
      "modelId": "mimo-v2.5-tts-voicedesign",
      "name": "mimo-v2.5-tts-voicedesign",
      "capabilities": [
        "audio"
      ],
      "context": null,
      "source": "https://modelsell.com/api/pricing",
      "url": "https://modelsell.com/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 XiaomiMIMO。XiaomiMIMO：XiaomiMIMO 官方。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。公开标准计费字段为零；不代表包月套餐、附加服务也免费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "XiaomiMIMO"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 1,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "XiaomiMIMO": 1
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-27",
      "modelId": "mimo-v2.5-tts-voiceclone",
      "name": "mimo-v2.5-tts-voiceclone",
      "capabilities": [
        "audio"
      ],
      "context": null,
      "source": "https://modelsell.com/api/pricing",
      "url": "https://modelsell.com/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 XiaomiMIMO。XiaomiMIMO：XiaomiMIMO 官方。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。公开标准计费字段为零；不代表包月套餐、附加服务也免费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "XiaomiMIMO"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 1,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "XiaomiMIMO": 1
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-51",
      "modelId": "glm-4.5-flash",
      "name": "glm-4.5-flash",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://xycai.us/api/pricing",
      "url": "https://xycai.us/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 glm-flow。glm-flow：GLM 工作流。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。公开标准计费字段为零；不代表包月套餐、附加服务也免费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "glm-flow"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 1,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "glm-flow": 1
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-51",
      "modelId": "glm-4.7-flash",
      "name": "glm-4.7-flash",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://xycai.us/api/pricing",
      "url": "https://xycai.us/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 glm-flow。glm-flow：GLM 工作流。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。公开标准计费字段为零；不代表包月套餐、附加服务也免费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "glm-flow"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 1,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "glm-flow": 1
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-51",
      "modelId": "glm-4-flash",
      "name": "glm-4-flash",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://xycai.us/api/pricing",
      "url": "https://xycai.us/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 glm-flow。glm-flow：GLM 工作流。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。公开标准计费字段为零；不代表包月套餐、附加服务也免费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "glm-flow"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 1,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "glm-flow": 1
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-51",
      "modelId": "glm-4.6v-flash",
      "name": "glm-4.6v-flash",
      "capabilities": [
        "text",
        "vision"
      ],
      "context": null,
      "source": "https://xycai.us/api/pricing",
      "url": "https://xycai.us/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 glm-flow。glm-flow：GLM 工作流。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。公开标准计费字段为零；不代表包月套餐、附加服务也免费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "glm-flow"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 1,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "glm-flow": 1
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-60",
      "modelId": "claude-fable-5-1",
      "name": "claude-fable-5-1",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://a-piko.top/api/pricing",
      "url": "https://a-piko.top/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 Cursor免费福利。Cursor免费福利：使用Anthropic协议，亏本福利，不稳定，限制高并发。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。零价依据为该分组倍率 0；其他分组的同名模型可能收费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "Cursor免费福利"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 5,
        "model_price": 0,
        "completion_ratio": 5,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "Cursor免费福利": 0
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-60",
      "modelId": "claude-opus-5-high-fast",
      "name": "claude-opus-5-high-fast",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://a-piko.top/api/pricing",
      "url": "https://a-piko.top/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 Cursor免费福利。Cursor免费福利：使用Anthropic协议，亏本福利，不稳定，限制高并发。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。零价依据为该分组倍率 0；其他分组的同名模型可能收费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "Cursor免费福利"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 2.5,
        "model_price": 0,
        "completion_ratio": 5,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "Cursor免费福利": 0
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-60",
      "modelId": "claude-sonnet-5",
      "name": "claude-sonnet-5",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://a-piko.top/api/pricing",
      "url": "https://a-piko.top/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 Cursor免费福利。Cursor免费福利：使用Anthropic协议，亏本福利，不稳定，限制高并发。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。零价依据为该分组倍率 0；其他分组的同名模型可能收费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "Cursor免费福利"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 2.5,
        "model_price": 0,
        "completion_ratio": 5,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "Cursor免费福利": 0
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-60",
      "modelId": "claude-sonnet-5-max",
      "name": "claude-sonnet-5-max",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://a-piko.top/api/pricing",
      "url": "https://a-piko.top/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 Cursor免费福利。Cursor免费福利：使用Anthropic协议，亏本福利，不稳定，限制高并发。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。零价依据为该分组倍率 0；其他分组的同名模型可能收费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "Cursor免费福利"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 1,
        "model_price": 0,
        "completion_ratio": 5,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "Cursor免费福利": 0
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-60",
      "modelId": "gpt-5.6-terra-max-fast",
      "name": "gpt-5.6-terra-max-fast",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://a-piko.top/api/pricing",
      "url": "https://a-piko.top/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 Cursor免费福利。Cursor免费福利：使用Anthropic协议，亏本福利，不稳定，限制高并发。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。零价依据为该分组倍率 0；其他分组的同名模型可能收费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "Cursor免费福利"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 1,
        "model_price": 0,
        "completion_ratio": 6,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "Cursor免费福利": 0
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-60",
      "modelId": "muse-spark-1.3-max",
      "name": "muse-spark-1.3-max",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://a-piko.top/api/pricing",
      "url": "https://a-piko.top/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 Cursor免费福利。Cursor免费福利：使用Anthropic协议，亏本福利，不稳定，限制高并发。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。零价依据为该分组倍率 0；其他分组的同名模型可能收费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "Cursor免费福利"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 0.625,
        "model_price": 0,
        "completion_ratio": 0.12,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "Cursor免费福利": 0
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-60",
      "modelId": "claude-fable-5-1-max",
      "name": "claude-fable-5-1-max",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://a-piko.top/api/pricing",
      "url": "https://a-piko.top/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 Cursor免费福利。Cursor免费福利：使用Anthropic协议，亏本福利，不稳定，限制高并发。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。零价依据为该分组倍率 0；其他分组的同名模型可能收费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "Cursor免费福利"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 5,
        "model_price": 0,
        "completion_ratio": 5,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "Cursor免费福利": 0
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-60",
      "modelId": "gpt-5.6-sol-max-fast",
      "name": "gpt-5.6-sol-max-fast",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://a-piko.top/api/pricing",
      "url": "https://a-piko.top/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 Cursor免费福利。Cursor免费福利：使用Anthropic协议，亏本福利，不稳定，限制高并发。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。零价依据为该分组倍率 0；其他分组的同名模型可能收费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "Cursor免费福利"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 2.5,
        "model_price": 0,
        "completion_ratio": 6,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "Cursor免费福利": 0
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-60",
      "modelId": "claude-fable-5",
      "name": "claude-fable-5",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://a-piko.top/api/pricing",
      "url": "https://a-piko.top/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 Cursor免费福利。Cursor免费福利：使用Anthropic协议，亏本福利，不稳定，限制高并发。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。零价依据为该分组倍率 0；其他分组的同名模型可能收费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "Cursor免费福利"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 5,
        "model_price": 0,
        "completion_ratio": 5,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "Cursor免费福利": 0
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-60",
      "modelId": "claude-opus-5",
      "name": "claude-opus-5",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://a-piko.top/api/pricing",
      "url": "https://a-piko.top/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 Cursor免费福利。Cursor免费福利：使用Anthropic协议，亏本福利，不稳定，限制高并发。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。零价依据为该分组倍率 0；其他分组的同名模型可能收费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "Cursor免费福利"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 2.5,
        "model_price": 0,
        "completion_ratio": 5,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "Cursor免费福利": 0
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-65",
      "modelId": "glm-5.3:free",
      "name": "glm-5.3:free",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://lietio.com/api/pricing",
      "url": "https://lietio.com/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 free。free：免费渠道，不做任何保障。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。零价依据为该分组倍率 0；其他分组的同名模型可能收费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "free"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 1,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "free": 0
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-162",
      "modelId": "[free]kimi-k3",
      "name": "[free]kimi-k3",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://linkapi.ai/api/pricing",
      "url": "https://linkapi.ai/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 once。once：按次计费分组 / Per-use billing group。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。公开标准计费字段为零；不代表包月套餐、附加服务也免费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "once"
      ],
      "priceEvidence": {
        "quota_type": 1,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 0,
        "billing_mode": "tiered_expr",
        "billing_expr": "tier(\"request\", fixed(0))"
      },
      "groupRatios": {
        "once": 1
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-162",
      "modelId": "[free]deepseek-v4-pro-0813",
      "name": "[free]deepseek-v4-pro-0813",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://linkapi.ai/api/pricing",
      "url": "https://linkapi.ai/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 once。once：按次计费分组 / Per-use billing group。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。公开标准计费字段为零；不代表包月套餐、附加服务也免费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "once"
      ],
      "priceEvidence": {
        "quota_type": 1,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 0,
        "billing_mode": "tiered_expr",
        "billing_expr": "tier(\"request\", fixed(0))"
      },
      "groupRatios": {
        "once": 1
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-162",
      "modelId": "[free]GLM-5.3",
      "name": "[free]GLM-5.3",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://linkapi.ai/api/pricing",
      "url": "https://linkapi.ai/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 once。once：按次计费分组 / Per-use billing group。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。公开标准计费字段为零；不代表包月套餐、附加服务也免费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "once"
      ],
      "priceEvidence": {
        "quota_type": 1,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 0,
        "billing_mode": "tiered_expr",
        "billing_expr": "tier(\"request\", fixed(0))"
      },
      "groupRatios": {
        "once": 1
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-162",
      "modelId": "[free]gpt-5.6-sol",
      "name": "[free]gpt-5.6-sol",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://linkapi.ai/api/pricing",
      "url": "https://linkapi.ai/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 once。once：按次计费分组 / Per-use billing group。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。公开标准计费字段为零；不代表包月套餐、附加服务也免费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "once"
      ],
      "priceEvidence": {
        "quota_type": 1,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 0,
        "billing_mode": "tiered_expr",
        "billing_expr": "tier(\"request\", fixed(0))"
      },
      "groupRatios": {
        "once": 1
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-162",
      "modelId": "[free]qwen3.8-max",
      "name": "[free]qwen3.8-max",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://linkapi.ai/api/pricing",
      "url": "https://linkapi.ai/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 once。once：按次计费分组 / Per-use billing group。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。公开标准计费字段为零；不代表包月套餐、附加服务也免费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "once"
      ],
      "priceEvidence": {
        "quota_type": 1,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 0,
        "billing_mode": "tiered_expr",
        "billing_expr": "tier(\"request\", fixed(0))"
      },
      "groupRatios": {
        "once": 1
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-162",
      "modelId": "[free]gemini-3.7-flash",
      "name": "[free]gemini-3.7-flash",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://linkapi.ai/api/pricing",
      "url": "https://linkapi.ai/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 once。once：按次计费分组 / Per-use billing group。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。公开标准计费字段为零；不代表包月套餐、附加服务也免费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "once"
      ],
      "priceEvidence": {
        "quota_type": 1,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 0,
        "billing_mode": "tiered_expr",
        "billing_expr": "tier(\"request\", fixed(0))"
      },
      "groupRatios": {
        "once": 1
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-162",
      "modelId": "[free]grok-4-6",
      "name": "[free]grok-4-6",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://linkapi.ai/api/pricing",
      "url": "https://linkapi.ai/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 once。once：按次计费分组 / Per-use billing group。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。公开标准计费字段为零；不代表包月套餐、附加服务也免费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "once"
      ],
      "priceEvidence": {
        "quota_type": 1,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 0,
        "billing_mode": "tiered_expr",
        "billing_expr": "tier(\"request\", fixed(0))"
      },
      "groupRatios": {
        "once": 1
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-162",
      "modelId": "[free]GLM-5.3-flash",
      "name": "[free]GLM-5.3-flash",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://linkapi.ai/api/pricing",
      "url": "https://linkapi.ai/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 once。once：按次计费分组 / Per-use billing group。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。公开标准计费字段为零；不代表包月套餐、附加服务也免费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "once"
      ],
      "priceEvidence": {
        "quota_type": 1,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 0,
        "billing_mode": "tiered_expr",
        "billing_expr": "tier(\"request\", fixed(0))"
      },
      "groupRatios": {
        "once": 1
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-211",
      "modelId": "[free]GLM-5.3",
      "name": "[free]GLM-5.3",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://api.gemai.cc/api/pricing",
      "url": "https://api.gemai.cc/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 default。default：默认分组。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。公开标准计费字段为零；不代表包月套餐、附加服务也免费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "default"
      ],
      "priceEvidence": {
        "quota_type": 1,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 0,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "default": 1
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-211",
      "modelId": "[free]claude-opus-5",
      "name": "[free]claude-opus-5",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://api.gemai.cc/api/pricing",
      "url": "https://api.gemai.cc/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 default。default：默认分组。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。公开标准计费字段为零；不代表包月套餐、附加服务也免费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "default"
      ],
      "priceEvidence": {
        "quota_type": 1,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 0,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "default": 1
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-211",
      "modelId": "[free]deepseek-v4-pro-0813",
      "name": "[free]deepseek-v4-pro-0813",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://api.gemai.cc/api/pricing",
      "url": "https://api.gemai.cc/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 default。default：默认分组。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。公开标准计费字段为零；不代表包月套餐、附加服务也免费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "default"
      ],
      "priceEvidence": {
        "quota_type": 1,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 0,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "default": 1
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-211",
      "modelId": "[free]qwen3.8-max",
      "name": "[free]qwen3.8-max",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://api.gemai.cc/api/pricing",
      "url": "https://api.gemai.cc/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 default。default：默认分组。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。公开标准计费字段为零；不代表包月套餐、附加服务也免费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "default"
      ],
      "priceEvidence": {
        "quota_type": 1,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 0,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "default": 1
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-211",
      "modelId": "[free]gpt-5.6-sol",
      "name": "[free]gpt-5.6-sol",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://api.gemai.cc/api/pricing",
      "url": "https://api.gemai.cc/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 default。default：默认分组。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。公开标准计费字段为零；不代表包月套餐、附加服务也免费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "default"
      ],
      "priceEvidence": {
        "quota_type": 1,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 0,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "default": 1
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-211",
      "modelId": "[free]kimi-k3",
      "name": "[free]kimi-k3",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://api.gemai.cc/api/pricing",
      "url": "https://api.gemai.cc/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 default。default：默认分组。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。公开标准计费字段为零；不代表包月套餐、附加服务也免费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "default"
      ],
      "priceEvidence": {
        "quota_type": 1,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 0,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "default": 1
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-213",
      "modelId": "gpt-oss-20b-free",
      "name": "gpt-oss-20b-free",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://api.dzzi.ai/api/pricing",
      "url": "https://api.dzzi.ai/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 free。free：。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。零价依据为该分组倍率 0；其他分组的同名模型可能收费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "free"
      ],
      "priceEvidence": {
        "quota_type": 1,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 0,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "free": 0
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-213",
      "modelId": "[按次]glm-5.3-flash-free",
      "name": "[按次]glm-5.3-flash-free",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://api.dzzi.ai/api/pricing",
      "url": "https://api.dzzi.ai/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 free。free：。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。零价依据为该分组倍率 0；其他分组的同名模型可能收费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "free"
      ],
      "priceEvidence": {
        "quota_type": 1,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 0,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "free": 0
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-213",
      "modelId": "gpt-oss-120b-free",
      "name": "gpt-oss-120b-free",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://api.dzzi.ai/api/pricing",
      "url": "https://api.dzzi.ai/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 free。free：。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。零价依据为该分组倍率 0；其他分组的同名模型可能收费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "free"
      ],
      "priceEvidence": {
        "quota_type": 1,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 0,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "free": 0
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-213",
      "modelId": "[按次]deepseek-v4-flash-free",
      "name": "[按次]deepseek-v4-flash-free",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://api.dzzi.ai/api/pricing",
      "url": "https://api.dzzi.ai/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 free。free：。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。零价依据为该分组倍率 0；其他分组的同名模型可能收费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "free"
      ],
      "priceEvidence": {
        "quota_type": 1,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 0,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "free": 0
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-215",
      "modelId": "[0.01]限时/kimi-k3",
      "name": "[0.01]限时/kimi-k3",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://az.zlapi.vip/api/pricing",
      "url": "https://az.zlapi.vip/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 Free。Free：福利模型[免费时间13:30-15:30]。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。仅站方所列 13:30–15:30 免费时段；时区未说明，使用前确认，其他分组可能收费。零价依据为该分组倍率 0；其他分组的同名模型可能收费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "Free"
      ],
      "priceEvidence": {
        "quota_type": 1,
        "model_ratio": 0,
        "model_price": 0.01,
        "completion_ratio": 0,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "Free": 0
      },
      "availability": "仅 13:30–15:30 免费；站方未注明时区"
    },
    {
      "platform": "relay-215",
      "modelId": "[0.01]限时/gpt-5.6-sol",
      "name": "[0.01]限时/gpt-5.6-sol",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://az.zlapi.vip/api/pricing",
      "url": "https://az.zlapi.vip/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 Free。Free：福利模型[免费时间13:30-15:30]。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。仅站方所列 13:30–15:30 免费时段；时区未说明，使用前确认，其他分组可能收费。零价依据为该分组倍率 0；其他分组的同名模型可能收费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "Free"
      ],
      "priceEvidence": {
        "quota_type": 1,
        "model_ratio": 0,
        "model_price": 0.01,
        "completion_ratio": 0,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "Free": 0
      },
      "availability": "仅 13:30–15:30 免费；站方未注明时区"
    },
    {
      "platform": "relay-215",
      "modelId": "[0.01]限时/GLM-5.3",
      "name": "[0.01]限时/GLM-5.3",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://az.zlapi.vip/api/pricing",
      "url": "https://az.zlapi.vip/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 Free。Free：福利模型[免费时间13:30-15:30]。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。仅站方所列 13:30–15:30 免费时段；时区未说明，使用前确认，其他分组可能收费。零价依据为该分组倍率 0；其他分组的同名模型可能收费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "Free"
      ],
      "priceEvidence": {
        "quota_type": 1,
        "model_ratio": 0,
        "model_price": 0.01,
        "completion_ratio": 0,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "Free": 0
      },
      "availability": "仅 13:30–15:30 免费；站方未注明时区"
    },
    {
      "platform": "relay-215",
      "modelId": "[0.01]限时/deepseek-v4-pro-0813",
      "name": "[0.01]限时/deepseek-v4-pro-0813",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://az.zlapi.vip/api/pricing",
      "url": "https://az.zlapi.vip/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 Free。Free：福利模型[免费时间13:30-15:30]。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。仅站方所列 13:30–15:30 免费时段；时区未说明，使用前确认，其他分组可能收费。零价依据为该分组倍率 0；其他分组的同名模型可能收费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "Free"
      ],
      "priceEvidence": {
        "quota_type": 1,
        "model_ratio": 0,
        "model_price": 0.01,
        "completion_ratio": 0,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "Free": 0
      },
      "availability": "仅 13:30–15:30 免费；站方未注明时区"
    },
    {
      "platform": "relay-215",
      "modelId": "[0.01]限时/qwen3.8-max",
      "name": "[0.01]限时/qwen3.8-max",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://az.zlapi.vip/api/pricing",
      "url": "https://az.zlapi.vip/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 Free。Free：福利模型[免费时间13:30-15:30]。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。仅站方所列 13:30–15:30 免费时段；时区未说明，使用前确认，其他分组可能收费。零价依据为该分组倍率 0；其他分组的同名模型可能收费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "Free"
      ],
      "priceEvidence": {
        "quota_type": 1,
        "model_ratio": 0,
        "model_price": 0.01,
        "completion_ratio": 0,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "Free": 0
      },
      "availability": "仅 13:30–15:30 免费；站方未注明时区"
    },
    {
      "platform": "relay-262",
      "modelId": "claude-sonnet-4.6",
      "name": "claude-sonnet-4.6",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://zoooai.com/api/pricing",
      "url": "https://zoooai.com/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 Claude Code。Claude Code：Claude Code有缓存命中率。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。公开标准计费字段为零；不代表包月套餐、附加服务也免费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "Claude Code"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 5,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "Claude Code": 1.5
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-262",
      "modelId": "claude-opus-4.6",
      "name": "claude-opus-4.6",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://zoooai.com/api/pricing",
      "url": "https://zoooai.com/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 Claude Code。Claude Code：Claude Code有缓存命中率。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。公开标准计费字段为零；不代表包月套餐、附加服务也免费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "Claude Code"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 5,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "Claude Code": 1.5
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-262",
      "modelId": "claude-opus-4.5",
      "name": "claude-opus-4.5",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://zoooai.com/api/pricing",
      "url": "https://zoooai.com/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 Claude Code。Claude Code：Claude Code有缓存命中率。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。公开标准计费字段为零；不代表包月套餐、附加服务也免费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "Claude Code"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 5,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "Claude Code": 1.5
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-311",
      "modelId": "agnes-image-2.0-flash",
      "name": "agnes-image-2.0-flash",
      "capabilities": [
        "image"
      ],
      "context": null,
      "source": "https://airouter.mxyhi.com/api/pricing",
      "url": "https://airouter.mxyhi.com/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 free。free：限时free,随时死,别找我。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。零价依据为该分组倍率 0；其他分组的同名模型可能收费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "free"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 1,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "free": 0
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-311",
      "modelId": "agnes-image-2.1-flash",
      "name": "agnes-image-2.1-flash",
      "capabilities": [
        "image"
      ],
      "context": null,
      "source": "https://airouter.mxyhi.com/api/pricing",
      "url": "https://airouter.mxyhi.com/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 free。free：限时free,随时死,别找我。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。零价依据为该分组倍率 0；其他分组的同名模型可能收费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "free"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 1,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "free": 0
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-311",
      "modelId": "agnes-2.0-flash",
      "name": "agnes-2.0-flash",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://airouter.mxyhi.com/api/pricing",
      "url": "https://airouter.mxyhi.com/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 free。free：限时free,随时死,别找我。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。零价依据为该分组倍率 0；其他分组的同名模型可能收费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "free"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 1,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "free": 0
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-486",
      "modelId": "meta/llama-4-maverick-17b-128e-instruct",
      "name": "meta/llama-4-maverick-17b-128e-instruct",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://officesai.top/api/pricing",
      "url": "https://officesai.top/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 基础普及通道。基础普及通道：Offices AI 的基础款通道，里面集中了 100 +普通模型。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。公开标准计费字段为零；不代表包月套餐、附加服务也免费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "基础普及通道"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 1,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "基础普及通道": 0.15
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-486",
      "modelId": "google/gemma-2-2b-it",
      "name": "google/gemma-2-2b-it",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://officesai.top/api/pricing",
      "url": "https://officesai.top/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 基础普及通道。基础普及通道：Offices AI 的基础款通道，里面集中了 100 +普通模型。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。公开标准计费字段为零；不代表包月套餐、附加服务也免费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "基础普及通道"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 1,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "基础普及通道": 0.15
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-486",
      "modelId": "microsoft/phi-3-vision-128k-instruct",
      "name": "microsoft/phi-3-vision-128k-instruct",
      "capabilities": [
        "text",
        "vision"
      ],
      "context": null,
      "source": "https://officesai.top/api/pricing",
      "url": "https://officesai.top/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 基础普及通道。基础普及通道：Offices AI 的基础款通道，里面集中了 100 +普通模型。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。公开标准计费字段为零；不代表包月套餐、附加服务也免费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "基础普及通道"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 1,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "基础普及通道": 0.15
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-486",
      "modelId": "microsoft/phi-4-multimodal-instruct",
      "name": "microsoft/phi-4-multimodal-instruct",
      "capabilities": [
        "text",
        "vision"
      ],
      "context": null,
      "source": "https://officesai.top/api/pricing",
      "url": "https://officesai.top/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 基础普及通道。基础普及通道：Offices AI 的基础款通道，里面集中了 100 +普通模型。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。公开标准计费字段为零；不代表包月套餐、附加服务也免费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "基础普及通道"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 1,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "基础普及通道": 0.15
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-486",
      "modelId": "meta/codellama-70b",
      "name": "meta/codellama-70b",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://officesai.top/api/pricing",
      "url": "https://officesai.top/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 基础普及通道。基础普及通道：Offices AI 的基础款通道，里面集中了 100 +普通模型。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。公开标准计费字段为零；不代表包月套餐、附加服务也免费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "基础普及通道"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 1,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "基础普及通道": 0.15
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-486",
      "modelId": "mistralai/mistral-large-2-instruct",
      "name": "mistralai/mistral-large-2-instruct",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://officesai.top/api/pricing",
      "url": "https://officesai.top/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 基础普及通道。基础普及通道：Offices AI 的基础款通道，里面集中了 100 +普通模型。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。公开标准计费字段为零；不代表包月套餐、附加服务也免费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "基础普及通道"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 1,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "基础普及通道": 0.15
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-486",
      "modelId": "nvidia/llama-3.3-nemotron-super-49b-v1",
      "name": "nvidia/llama-3.3-nemotron-super-49b-v1",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://officesai.top/api/pricing",
      "url": "https://officesai.top/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 基础普及通道。基础普及通道：Offices AI 的基础款通道，里面集中了 100 +普通模型。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。公开标准计费字段为零；不代表包月套餐、附加服务也免费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "基础普及通道"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 1,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "基础普及通道": 0.15
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-486",
      "modelId": "google/codegemma-7b",
      "name": "google/codegemma-7b",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://officesai.top/api/pricing",
      "url": "https://officesai.top/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 基础普及通道。基础普及通道：Offices AI 的基础款通道，里面集中了 100 +普通模型。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。公开标准计费字段为零；不代表包月套餐、附加服务也免费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "基础普及通道"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 1,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "基础普及通道": 0.15
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-486",
      "modelId": "microsoft/phi-3.5-moe-instruct",
      "name": "microsoft/phi-3.5-moe-instruct",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://officesai.top/api/pricing",
      "url": "https://officesai.top/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 基础普及通道。基础普及通道：Offices AI 的基础款通道，里面集中了 100 +普通模型。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。公开标准计费字段为零；不代表包月套餐、附加服务也免费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "基础普及通道"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 1,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "基础普及通道": 0.15
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-486",
      "modelId": "google/gemma-3n-e2b-it",
      "name": "google/gemma-3n-e2b-it",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://officesai.top/api/pricing",
      "url": "https://officesai.top/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 基础普及通道。基础普及通道：Offices AI 的基础款通道，里面集中了 100 +普通模型。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。公开标准计费字段为零；不代表包月套餐、附加服务也免费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "基础普及通道"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 1,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "基础普及通道": 0.15
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-486",
      "modelId": "meta/llama-3.2-90b-vision-instruct",
      "name": "meta/llama-3.2-90b-vision-instruct",
      "capabilities": [
        "text",
        "vision"
      ],
      "context": null,
      "source": "https://officesai.top/api/pricing",
      "url": "https://officesai.top/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 基础普及通道。基础普及通道：Offices AI 的基础款通道，里面集中了 100 +普通模型。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。公开标准计费字段为零；不代表包月套餐、附加服务也免费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "基础普及通道"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 1,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "基础普及通道": 0.15
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-486",
      "modelId": "google/codegemma-1.1-7b",
      "name": "google/codegemma-1.1-7b",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://officesai.top/api/pricing",
      "url": "https://officesai.top/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 基础普及通道。基础普及通道：Offices AI 的基础款通道，里面集中了 100 +普通模型。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。公开标准计费字段为零；不代表包月套餐、附加服务也免费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "基础普及通道"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 1,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "基础普及通道": 0.15
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-486",
      "modelId": "nvidia/llama-3.1-nemotron-51b-instruct",
      "name": "nvidia/llama-3.1-nemotron-51b-instruct",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://officesai.top/api/pricing",
      "url": "https://officesai.top/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 基础普及通道。基础普及通道：Offices AI 的基础款通道，里面集中了 100 +普通模型。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。公开标准计费字段为零；不代表包月套餐、附加服务也免费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "基础普及通道"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 1,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "基础普及通道": 0.15
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-486",
      "modelId": "nvidia/llama3-chatqa-1.5-70b",
      "name": "nvidia/llama3-chatqa-1.5-70b",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://officesai.top/api/pricing",
      "url": "https://officesai.top/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 基础普及通道。基础普及通道：Offices AI 的基础款通道，里面集中了 100 +普通模型。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。公开标准计费字段为零；不代表包月套餐、附加服务也免费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "基础普及通道"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 1,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "基础普及通道": 0.15
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-486",
      "modelId": "meta/llama-3.3-70b-instruct",
      "name": "meta/llama-3.3-70b-instruct",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://officesai.top/api/pricing",
      "url": "https://officesai.top/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 基础普及通道。基础普及通道：Offices AI 的基础款通道，里面集中了 100 +普通模型。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。公开标准计费字段为零；不代表包月套餐、附加服务也免费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "基础普及通道"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 1,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "基础普及通道": 0.15
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-486",
      "modelId": "mistralai/codestral-22b-instruct-v0.1",
      "name": "mistralai/codestral-22b-instruct-v0.1",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://officesai.top/api/pricing",
      "url": "https://officesai.top/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 基础普及通道。基础普及通道：Offices AI 的基础款通道，里面集中了 100 +普通模型。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。公开标准计费字段为零；不代表包月套餐、附加服务也免费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "基础普及通道"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 1,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "基础普及通道": 0.15
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-486",
      "modelId": "nvidia/nemotron-4-340b-instruct",
      "name": "nvidia/nemotron-4-340b-instruct",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://officesai.top/api/pricing",
      "url": "https://officesai.top/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 基础普及通道。基础普及通道：Offices AI 的基础款通道，里面集中了 100 +普通模型。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。公开标准计费字段为零；不代表包月套餐、附加服务也免费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "基础普及通道"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 1,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "基础普及通道": 0.15
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-486",
      "modelId": "meta/llama-3.1-70b-instruct",
      "name": "meta/llama-3.1-70b-instruct",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://officesai.top/api/pricing",
      "url": "https://officesai.top/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 基础普及通道。基础普及通道：Offices AI 的基础款通道，里面集中了 100 +普通模型。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。公开标准计费字段为零；不代表包月套餐、附加服务也免费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "基础普及通道"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 1,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "基础普及通道": 0.15
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-486",
      "modelId": "nvidia/llama-3.1-nemotron-ultra-253b-v1",
      "name": "nvidia/llama-3.1-nemotron-ultra-253b-v1",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://officesai.top/api/pricing",
      "url": "https://officesai.top/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 基础普及通道。基础普及通道：Offices AI 的基础款通道，里面集中了 100 +普通模型。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。公开标准计费字段为零；不代表包月套餐、附加服务也免费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "基础普及通道"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 1,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "基础普及通道": 0.15
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-621",
      "modelId": "agnes-2.0-flash",
      "name": "agnes-2.0-flash",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://niubiai.ai/api/pricing",
      "url": "https://niubiai.ai/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 NBAI福利。NBAI福利：NBAI福利(超低倍率)。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。零价依据为该分组倍率 0；其他分组的同名模型可能收费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "NBAI福利"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 0.5,
        "model_price": 0,
        "completion_ratio": 1.5,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "NBAI福利": 0
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-638",
      "modelId": "nvidia/llama-nemotron-embed-vl-1b-v2",
      "name": "nvidia/llama-nemotron-embed-vl-1b-v2",
      "capabilities": [
        "embedding"
      ],
      "context": null,
      "source": "https://ai.yzy15.dpdns.org/api/pricing",
      "url": "https://ai.yzy15.dpdns.org/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 公益。公益：公益提供，不保证可用性。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。公开标准计费字段为零；不代表包月套餐、附加服务也免费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "公益"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 1,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "公益": 0.01
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-638",
      "modelId": "mistralai/mistral-large-2-instruct",
      "name": "mistralai/mistral-large-2-instruct",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://ai.yzy15.dpdns.org/api/pricing",
      "url": "https://ai.yzy15.dpdns.org/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 公益。公益：公益提供，不保证可用性。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。公开标准计费字段为零；不代表包月套餐、附加服务也免费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "公益"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 1,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "公益": 0.01
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-638",
      "modelId": "nvidia/llama-3.1-nemotron-51b-instruct",
      "name": "nvidia/llama-3.1-nemotron-51b-instruct",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://ai.yzy15.dpdns.org/api/pricing",
      "url": "https://ai.yzy15.dpdns.org/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 公益。公益：公益提供，不保证可用性。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。公开标准计费字段为零；不代表包月套餐、附加服务也免费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "公益"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 1,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "公益": 0.01
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-638",
      "modelId": "deepseek-ai/deepseek-coder-6.7b-instruct",
      "name": "deepseek-ai/deepseek-coder-6.7b-instruct",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://ai.yzy15.dpdns.org/api/pricing",
      "url": "https://ai.yzy15.dpdns.org/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 公益。公益：公益提供，不保证可用性。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。公开标准计费字段为零；不代表包月套餐、附加服务也免费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "公益"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 1,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "公益": 0.01
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-638",
      "modelId": "meta/codellama-70b",
      "name": "meta/codellama-70b",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://ai.yzy15.dpdns.org/api/pricing",
      "url": "https://ai.yzy15.dpdns.org/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 公益。公益：公益提供，不保证可用性。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。公开标准计费字段为零；不代表包月套餐、附加服务也免费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "公益"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 1,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "公益": 0.01
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-638",
      "modelId": "nvidia/cosmos-reason2-8b",
      "name": "nvidia/cosmos-reason2-8b",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://ai.yzy15.dpdns.org/api/pricing",
      "url": "https://ai.yzy15.dpdns.org/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 公益。公益：公益提供，不保证可用性。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。公开标准计费字段为零；不代表包月套餐、附加服务也免费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "公益"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 1,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "公益": 0.01
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-638",
      "modelId": "nvidia/riva-translate-4b-instruct-v1.1",
      "name": "nvidia/riva-translate-4b-instruct-v1.1",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://ai.yzy15.dpdns.org/api/pricing",
      "url": "https://ai.yzy15.dpdns.org/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 公益。公益：公益提供，不保证可用性。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。公开标准计费字段为零；不代表包月套餐、附加服务也免费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "公益"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 1,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "公益": 0.01
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-638",
      "modelId": "mistralai/mistral-7b-instruct-v0.3",
      "name": "mistralai/mistral-7b-instruct-v0.3",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://ai.yzy15.dpdns.org/api/pricing",
      "url": "https://ai.yzy15.dpdns.org/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 公益。公益：公益提供，不保证可用性。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。公开标准计费字段为零；不代表包月套餐、附加服务也免费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "公益"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 1,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "公益": 0.01
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-638",
      "modelId": "microsoft/phi-3-vision-128k-instruct",
      "name": "microsoft/phi-3-vision-128k-instruct",
      "capabilities": [
        "text",
        "vision"
      ],
      "context": null,
      "source": "https://ai.yzy15.dpdns.org/api/pricing",
      "url": "https://ai.yzy15.dpdns.org/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 公益。公益：公益提供，不保证可用性。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。公开标准计费字段为零；不代表包月套餐、附加服务也免费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "公益"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 1,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "公益": 0.01
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-638",
      "modelId": "mistralai/codestral-22b-instruct-v0.1",
      "name": "mistralai/codestral-22b-instruct-v0.1",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://ai.yzy15.dpdns.org/api/pricing",
      "url": "https://ai.yzy15.dpdns.org/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 公益。公益：公益提供，不保证可用性。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。公开标准计费字段为零；不代表包月套餐、附加服务也免费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "公益"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 1,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "公益": 0.01
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-638",
      "modelId": "nvidia/llama3-chatqa-1.5-70b",
      "name": "nvidia/llama3-chatqa-1.5-70b",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://ai.yzy15.dpdns.org/api/pricing",
      "url": "https://ai.yzy15.dpdns.org/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 公益。公益：公益提供，不保证可用性。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。公开标准计费字段为零；不代表包月套餐、附加服务也免费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "公益"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 1,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "公益": 0.01
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-638",
      "modelId": "mistralai/mistral-nemotron",
      "name": "mistralai/mistral-nemotron",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://ai.yzy15.dpdns.org/api/pricing",
      "url": "https://ai.yzy15.dpdns.org/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 公益。公益：公益提供，不保证可用性。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。公开标准计费字段为零；不代表包月套餐、附加服务也免费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "公益"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 3,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "公益": 0.01
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-638",
      "modelId": "google/codegemma-1.1-7b",
      "name": "google/codegemma-1.1-7b",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://ai.yzy15.dpdns.org/api/pricing",
      "url": "https://ai.yzy15.dpdns.org/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 公益。公益：公益提供，不保证可用性。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。公开标准计费字段为零；不代表包月套餐、附加服务也免费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "公益"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 1,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "公益": 0.01
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-638",
      "modelId": "nvidia/nemotron-3.5-lightning-30b-a3b",
      "name": "nvidia/nemotron-3.5-lightning-30b-a3b",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://ai.yzy15.dpdns.org/api/pricing",
      "url": "https://ai.yzy15.dpdns.org/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 公益。公益：公益提供，不保证可用性。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。公开标准计费字段为零；不代表包月套餐、附加服务也免费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "公益"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 1,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "公益": 0.01
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-638",
      "modelId": "deepseek-ai/deepseek-v4-pro-0813",
      "name": "deepseek-ai/deepseek-v4-pro-0813",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://ai.yzy15.dpdns.org/api/pricing",
      "url": "https://ai.yzy15.dpdns.org/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 公益。公益：公益提供，不保证可用性。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。公开标准计费字段为零；不代表包月套餐、附加服务也免费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "公益"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 1,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "公益": 0.01
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-638",
      "modelId": "google/codegemma-7b",
      "name": "google/codegemma-7b",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://ai.yzy15.dpdns.org/api/pricing",
      "url": "https://ai.yzy15.dpdns.org/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 公益。公益：公益提供，不保证可用性。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。公开标准计费字段为零；不代表包月套餐、附加服务也免费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "公益"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 1,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "公益": 0.01
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-638",
      "modelId": "meta/llama-guard-4-12b",
      "name": "meta/llama-guard-4-12b",
      "capabilities": [
        "safety"
      ],
      "context": null,
      "source": "https://ai.yzy15.dpdns.org/api/pricing",
      "url": "https://ai.yzy15.dpdns.org/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 公益。公益：公益提供，不保证可用性。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。公开标准计费字段为零；不代表包月套餐、附加服务也免费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "公益"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 1,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "公益": 0.01
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-638",
      "modelId": "nvidia/nemotron-4-340b-instruct",
      "name": "nvidia/nemotron-4-340b-instruct",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://ai.yzy15.dpdns.org/api/pricing",
      "url": "https://ai.yzy15.dpdns.org/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 公益。公益：公益提供，不保证可用性。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。公开标准计费字段为零；不代表包月套餐、附加服务也免费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "公益"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 1,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "公益": 0.01
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-638",
      "modelId": "nvidia/llama-3.1-nemotron-safety-guard-8b-v3",
      "name": "nvidia/llama-3.1-nemotron-safety-guard-8b-v3",
      "capabilities": [
        "safety"
      ],
      "context": null,
      "source": "https://ai.yzy15.dpdns.org/api/pricing",
      "url": "https://ai.yzy15.dpdns.org/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 公益。公益：公益提供，不保证可用性。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。公开标准计费字段为零；不代表包月套餐、附加服务也免费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "公益"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 1,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "公益": 0.01
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-638",
      "modelId": "microsoft/phi-3.5-moe-instruct",
      "name": "microsoft/phi-3.5-moe-instruct",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://ai.yzy15.dpdns.org/api/pricing",
      "url": "https://ai.yzy15.dpdns.org/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 公益。公益：公益提供，不保证可用性。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。公开标准计费字段为零；不代表包月套餐、附加服务也免费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "公益"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 1,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "公益": 0.01
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-638",
      "modelId": "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning",
      "name": "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://ai.yzy15.dpdns.org/api/pricing",
      "url": "https://ai.yzy15.dpdns.org/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 公益。公益：公益提供，不保证可用性。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。公开标准计费字段为零；不代表包月套餐、附加服务也免费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "公益"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 1,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "公益": 0.01
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-638",
      "modelId": "nvidia/llama-3.1-nemotron-ultra-253b-v1",
      "name": "nvidia/llama-3.1-nemotron-ultra-253b-v1",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://ai.yzy15.dpdns.org/api/pricing",
      "url": "https://ai.yzy15.dpdns.org/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 公益。公益：公益提供，不保证可用性。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。公开标准计费字段为零；不代表包月套餐、附加服务也免费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "公益"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 3,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "公益": 0.01
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-638",
      "modelId": "meta/llama-3.2-90b-vision-instruct",
      "name": "meta/llama-3.2-90b-vision-instruct",
      "capabilities": [
        "text",
        "vision"
      ],
      "context": null,
      "source": "https://ai.yzy15.dpdns.org/api/pricing",
      "url": "https://ai.yzy15.dpdns.org/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 公益。公益：公益提供，不保证可用性。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。公开标准计费字段为零；不代表包月套餐、附加服务也免费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "公益"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 1,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "公益": 0.01
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-638",
      "modelId": "nvidia/llama-3.1-nemotron-70b-instruct",
      "name": "nvidia/llama-3.1-nemotron-70b-instruct",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://ai.yzy15.dpdns.org/api/pricing",
      "url": "https://ai.yzy15.dpdns.org/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 公益。公益：公益提供，不保证可用性。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。公开标准计费字段为零；不代表包月套餐、附加服务也免费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "公益"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 1,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "公益": 0.01
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-679",
      "modelId": "dots3-note-prev",
      "name": "dots3-note-prev",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://closedai.kylenqaq.com/api/pricing",
      "url": "https://closedai.kylenqaq.com/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 DOTS。DOTS：。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。零价依据为该分组倍率 0；其他分组的同名模型可能收费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "DOTS"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 1,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "DOTS": 0
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-695",
      "modelId": "nvidia/llama-nemotron-embed-vl-1b-v2:free",
      "name": "nvidia/llama-nemotron-embed-vl-1b-v2:free",
      "capabilities": [
        "embedding"
      ],
      "context": null,
      "source": "https://sub.apiopencc.com/api/pricing",
      "url": "https://sub.apiopencc.com/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 default / GPT特惠。default：默认分组；GPT特惠：长期优惠活动，支持GPT5.6、5.5。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。公开标准计费字段为零；不代表包月套餐、附加服务也免费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "default",
        "GPT特惠"
      ],
      "priceEvidence": {
        "quota_type": 1,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 0,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "default": 1,
        "GPT特惠": 0.5
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-716",
      "modelId": "gpt-5.6-sol-max-fast",
      "name": "gpt-5.6-sol-max-fast",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://hetune.top/api/pricing",
      "url": "https://hetune.top/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 Cursor福利。Cursor福利：Anthropic协议。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。零价依据为该分组倍率 0；其他分组的同名模型可能收费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "Cursor福利"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 2.5,
        "model_price": 0,
        "completion_ratio": 6,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "Cursor福利": 0
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-716",
      "modelId": "gpt-5.6-terra-max",
      "name": "gpt-5.6-terra-max",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://hetune.top/api/pricing",
      "url": "https://hetune.top/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 Cursor福利。Cursor福利：Anthropic协议。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。零价依据为该分组倍率 0；其他分组的同名模型可能收费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "Cursor福利"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 37.5,
        "model_price": 0,
        "completion_ratio": 6,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "Cursor福利": 0
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-716",
      "modelId": "gpt-5.6-terra-fast",
      "name": "gpt-5.6-terra-fast",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://hetune.top/api/pricing",
      "url": "https://hetune.top/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 Cursor福利。Cursor福利：Anthropic协议。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。零价依据为该分组倍率 0；其他分组的同名模型可能收费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "Cursor福利"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 37.5,
        "model_price": 0,
        "completion_ratio": 6,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "Cursor福利": 0
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-716",
      "modelId": "muse-spark-1.3",
      "name": "muse-spark-1.3",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://hetune.top/api/pricing",
      "url": "https://hetune.top/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 Cursor福利。Cursor福利：Anthropic协议。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。零价依据为该分组倍率 0；其他分组的同名模型可能收费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "Cursor福利"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 37.5,
        "model_price": 0,
        "completion_ratio": 1,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "Cursor福利": 0
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-716",
      "modelId": "claude-fable",
      "name": "claude-fable",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://hetune.top/api/pricing",
      "url": "https://hetune.top/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 Cursor福利。Cursor福利：Anthropic协议。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。零价依据为该分组倍率 0；其他分组的同名模型可能收费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "Cursor福利"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 37.5,
        "model_price": 0,
        "completion_ratio": 1,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "Cursor福利": 0
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-716",
      "modelId": "claude-opus-5-fast",
      "name": "claude-opus-5-fast",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://hetune.top/api/pricing",
      "url": "https://hetune.top/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 Cursor福利。Cursor福利：Anthropic协议。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。零价依据为该分组倍率 0；其他分组的同名模型可能收费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "Cursor福利"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 37.5,
        "model_price": 0,
        "completion_ratio": 1,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "Cursor福利": 0
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-716",
      "modelId": "claude-opus-5-high-fast",
      "name": "claude-opus-5-high-fast",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://hetune.top/api/pricing",
      "url": "https://hetune.top/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 Cursor福利。Cursor福利：Anthropic协议。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。零价依据为该分组倍率 0；其他分组的同名模型可能收费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "Cursor福利"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 2.5,
        "model_price": 0,
        "completion_ratio": 5,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "Cursor福利": 0
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-716",
      "modelId": "gpt-5.6-terra-max-fast",
      "name": "gpt-5.6-terra-max-fast",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://hetune.top/api/pricing",
      "url": "https://hetune.top/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 Cursor福利。Cursor福利：Anthropic协议。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。零价依据为该分组倍率 0；其他分组的同名模型可能收费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "Cursor福利"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 1,
        "model_price": 0,
        "completion_ratio": 6,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "Cursor福利": 0
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-716",
      "modelId": "claude-sonnet-5",
      "name": "claude-sonnet-5",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://hetune.top/api/pricing",
      "url": "https://hetune.top/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 Cursor福利。Cursor福利：Anthropic协议。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。零价依据为该分组倍率 0；其他分组的同名模型可能收费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "Cursor福利"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 2.5,
        "model_price": 0,
        "completion_ratio": 5,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "Cursor福利": 0
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-716",
      "modelId": "gpt-5.6-sol-fast",
      "name": "gpt-5.6-sol-fast",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://hetune.top/api/pricing",
      "url": "https://hetune.top/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 Cursor福利。Cursor福利：Anthropic协议。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。零价依据为该分组倍率 0；其他分组的同名模型可能收费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "Cursor福利"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 37.5,
        "model_price": 0,
        "completion_ratio": 6,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "Cursor福利": 0
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-716",
      "modelId": "claude-fable-5",
      "name": "claude-fable-5",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://hetune.top/api/pricing",
      "url": "https://hetune.top/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 Cursor福利。Cursor福利：Anthropic协议。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。零价依据为该分组倍率 0；其他分组的同名模型可能收费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "Cursor福利"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 5,
        "model_price": 0,
        "completion_ratio": 5,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "Cursor福利": 0
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-716",
      "modelId": "claude-fable-5-1",
      "name": "claude-fable-5-1",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://hetune.top/api/pricing",
      "url": "https://hetune.top/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 Cursor福利。Cursor福利：Anthropic协议。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。零价依据为该分组倍率 0；其他分组的同名模型可能收费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "Cursor福利"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 5,
        "model_price": 0,
        "completion_ratio": 5,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "Cursor福利": 0
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-716",
      "modelId": "claude-opus",
      "name": "claude-opus",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://hetune.top/api/pricing",
      "url": "https://hetune.top/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 Cursor福利。Cursor福利：Anthropic协议。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。零价依据为该分组倍率 0；其他分组的同名模型可能收费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "Cursor福利"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 37.5,
        "model_price": 0,
        "completion_ratio": 1,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "Cursor福利": 0
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-716",
      "modelId": "claude-fable-5-1-max",
      "name": "claude-fable-5-1-max",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://hetune.top/api/pricing",
      "url": "https://hetune.top/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 Cursor福利。Cursor福利：Anthropic协议。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。零价依据为该分组倍率 0；其他分组的同名模型可能收费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "Cursor福利"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 5,
        "model_price": 0,
        "completion_ratio": 5,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "Cursor福利": 0
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-716",
      "modelId": "muse-spark-1.3-max",
      "name": "muse-spark-1.3-max",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://hetune.top/api/pricing",
      "url": "https://hetune.top/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 Cursor福利。Cursor福利：Anthropic协议。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。零价依据为该分组倍率 0；其他分组的同名模型可能收费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "Cursor福利"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 0.625,
        "model_price": 0,
        "completion_ratio": 0.12,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "Cursor福利": 0
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-716",
      "modelId": "claude-opus-5-high",
      "name": "claude-opus-5-high",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://hetune.top/api/pricing",
      "url": "https://hetune.top/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 Cursor福利。Cursor福利：Anthropic协议。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。零价依据为该分组倍率 0；其他分组的同名模型可能收费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "Cursor福利"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 37.5,
        "model_price": 0,
        "completion_ratio": 1,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "Cursor福利": 0
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-716",
      "modelId": "claude-opus-5",
      "name": "claude-opus-5",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://hetune.top/api/pricing",
      "url": "https://hetune.top/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 Cursor福利。Cursor福利：Anthropic协议。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。零价依据为该分组倍率 0；其他分组的同名模型可能收费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "Cursor福利"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 2.5,
        "model_price": 0,
        "completion_ratio": 5,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "Cursor福利": 0
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-716",
      "modelId": "gpt-5.6-sol-max",
      "name": "gpt-5.6-sol-max",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://hetune.top/api/pricing",
      "url": "https://hetune.top/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 Cursor福利。Cursor福利：Anthropic协议。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。零价依据为该分组倍率 0；其他分组的同名模型可能收费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "Cursor福利"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 37.5,
        "model_price": 0,
        "completion_ratio": 6,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "Cursor福利": 0
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-716",
      "modelId": "claude-sonnet-5-max",
      "name": "claude-sonnet-5-max",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://hetune.top/api/pricing",
      "url": "https://hetune.top/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 Cursor福利。Cursor福利：Anthropic协议。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。零价依据为该分组倍率 0；其他分组的同名模型可能收费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "Cursor福利"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 1,
        "model_price": 0,
        "completion_ratio": 5,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "Cursor福利": 0
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-716",
      "modelId": "muse-spark",
      "name": "muse-spark",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://hetune.top/api/pricing",
      "url": "https://hetune.top/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 Cursor福利。Cursor福利：Anthropic协议。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。零价依据为该分组倍率 0；其他分组的同名模型可能收费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "Cursor福利"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 37.5,
        "model_price": 0,
        "completion_ratio": 1,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "Cursor福利": 0
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-716",
      "modelId": "claude-sonnet",
      "name": "claude-sonnet",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://hetune.top/api/pricing",
      "url": "https://hetune.top/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 Cursor福利。Cursor福利：Anthropic协议。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。零价依据为该分组倍率 0；其他分组的同名模型可能收费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "Cursor福利"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 37.5,
        "model_price": 0,
        "completion_ratio": 1,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "Cursor福利": 0
      },
      "availability": "仅指定分组；账号资格待确认"
    },
    {
      "platform": "relay-800",
      "modelId": "z-ai/glm-5.2:free",
      "name": "z-ai/glm-5.2:free",
      "capabilities": [
        "text"
      ],
      "context": null,
      "source": "https://shenlongapi.com/api/pricing",
      "url": "https://shenlongapi.com/",
      "freeType": "zero",
      "checkedAt": "2026-09-21",
      "limits": "仅限分组 Free免费通道。Free免费通道：。需账号与对应分组权限；资格、额度上限和截止时间未完成登录验证。公开标准计费字段为零；不代表包月套餐、附加服务也免费。本站仅记录渠道声明，未验证底层模型身份或调用成功率。",
      "groupNames": [
        "Free免费通道"
      ],
      "priceEvidence": {
        "quota_type": 0,
        "model_ratio": 0,
        "model_price": 0,
        "completion_ratio": 1,
        "billing_mode": null,
        "billing_expr": null
      },
      "groupRatios": {
        "Free免费通道": 1
      },
      "availability": "仅指定分组；账号资格待确认"
    }
  ],
  "freeModelAudit": {
    "checkedAt": "2026-09-21",
    "scope": "已对目录内 847 家中转站逐站尝试公开 /api/pricing 入口，246 家返回可解析目录（含空目录），其余未获得可用价格数据。结合 OpenRouter、硅基流动、Groq 的公开目录，按具体模型和免费条件收录。接口不可读或未入榜不等于没有免费模型；未登录或执行推理。",
    "pending": [
      {
        "name": "xiaoxuapi",
        "url": "https://api.xiaoxuapi.com/",
        "reason": "目录称每周免费模型，当前公开公告与价格响应未能确认具体名单。"
      },
      {
        "name": "章鱼公益平台",
        "url": "https://zhangyuapi.com/pricing",
        "reason": "公开模型广场动态加载，未取得具体模型与免费价格的对应证据。"
      },
      {
        "name": "Euzhi",
        "url": "https://euzhi.vip/",
        "reason": "文档有模型 ID，但未确认零价或明确免费层；公益名称不作为免费依据。"
      },
      {
        "name": "728vibecode",
        "url": "https://728vibecode.top/",
        "reason": "目录有公益描述，站方页面无法核验具体模型 ID 与免费条件。"
      },
      {
        "name": "Agent Router",
        "url": "https://agentrouter.org/",
        "reason": "赠额与公益宣传不能证明某个模型长期零价；待核对账号内模型分组。"
      },
      {
        "name": "Gitee AI",
        "url": "https://ai.gitee.com/serverless-api",
        "reason": "公开页面未返回模型数据，暂不将历史免费信息当成当前价格。"
      },
      {
        "name": "Pollinations",
        "url": "https://github.com/pollinations/pollinations/blob/main/APIDOCS.md",
        "reason": "模型与工具可能消耗 Pollen；需按具体模型核验，暂不将全平台视为免费。"
      },
      {
        "name": "零价字段但另有计费规则",
        "url": "https://origin.modelflare.dev/",
        "reason": "Modelflare 按视频分辨率计费；兔子、数智AI 等存在计费表达式或其他费用，未因默认字段为 0 就入榜。"
      },
      {
        "name": "占位、辅助动作与权限不明",
        "url": "https://api.muskapi.cc/",
        "reason": "MuskAI 批量零值缺少可用分组；MJ 弹窗/上传/缩放辅助动作、test-model、身份不明别名不作为具体免费模型。"
      }
    ],
    "attemptedSites": 847,
    "readablePricingSites": 246
  },
  "industryModels": [
    {
      "id": "anthropic/claude-opus-5",
      "name": "Anthropic: Claude Opus 5",
      "channel": "OpenRouter",
      "input": 5.0,
      "output": 25.0,
      "context": 1000000,
      "source": "https://openrouter.ai/api/v1/models",
      "url": "https://openrouter.ai/anthropic/claude-opus-5",
      "checkedAt": "2026-09-21"
    },
    {
      "id": "anthropic/claude-fable-5.1",
      "name": "Anthropic: Claude Fable 5.1",
      "channel": "OpenRouter",
      "input": 10.0,
      "output": 50.0,
      "context": 1000000,
      "source": "https://openrouter.ai/api/v1/models",
      "url": "https://openrouter.ai/anthropic/claude-fable-5.1",
      "checkedAt": "2026-09-21"
    },
    {
      "id": "google/gemini-3.1-pro-preview",
      "name": "Google: Gemini 3.1 Pro Preview",
      "channel": "OpenRouter",
      "input": 2.0,
      "output": 12.0,
      "context": 1048576,
      "source": "https://openrouter.ai/api/v1/models",
      "url": "https://openrouter.ai/google/gemini-3.1-pro-preview",
      "checkedAt": "2026-09-21"
    },
    {
      "id": "google/gemini-3.7-flash",
      "name": "Google: Gemini 3.7 Flash",
      "channel": "OpenRouter",
      "input": 0.75,
      "output": 3.75,
      "context": 1048576,
      "source": "https://openrouter.ai/api/v1/models",
      "url": "https://openrouter.ai/google/gemini-3.7-flash",
      "checkedAt": "2026-09-21"
    },
    {
      "id": "google/gemini-2.5-flash-lite",
      "name": "Google: Gemini 2.5 Flash Lite",
      "channel": "OpenRouter",
      "input": 0.09999999999999999,
      "output": 0.39999999999999997,
      "context": 1048576,
      "source": "https://openrouter.ai/api/v1/models",
      "url": "https://openrouter.ai/google/gemini-2.5-flash-lite",
      "checkedAt": "2026-09-21"
    },
    {
      "id": "qwen/qwen3-coder",
      "name": "Qwen: Qwen3 Coder 480B A35B",
      "channel": "OpenRouter",
      "input": 0.3,
      "output": 1.0,
      "context": 262144,
      "source": "https://openrouter.ai/api/v1/models",
      "url": "https://openrouter.ai/qwen/qwen3-coder",
      "checkedAt": "2026-09-21"
    },
    {
      "id": "qwen/qwen3.8-27b:free",
      "name": "Qwen: Qwen3.8 27B",
      "channel": "OpenRouter",
      "input": 0.0,
      "output": 0.0,
      "context": 262144,
      "source": "https://openrouter.ai/api/v1/models",
      "url": "https://openrouter.ai/qwen/qwen3.8-27b:free",
      "checkedAt": "2026-09-21"
    },
    {
      "id": "cohere/north-mini-code:free",
      "name": "Cohere: North Mini Code",
      "channel": "OpenRouter",
      "input": 0.0,
      "output": 0.0,
      "context": 256000,
      "source": "https://openrouter.ai/api/v1/models",
      "url": "https://openrouter.ai/cohere/north-mini-code:free",
      "checkedAt": "2026-09-21"
    },
    {
      "id": "google/gemma-4-31b-it:free",
      "name": "Google: Gemma 4 31B",
      "channel": "OpenRouter",
      "input": 0.0,
      "output": 0.0,
      "context": 262144,
      "source": "https://openrouter.ai/api/v1/models",
      "url": "https://openrouter.ai/google/gemma-4-31b-it:free",
      "checkedAt": "2026-09-21"
    }
  ],
  "industryPricing": {
    "inputTokens": 4000,
    "outputTokens": 1000,
    "tasks": 100,
    "currency": "USD",
    "checkedAt": "2026-09-21",
    "note": "统一假设：100 次文本任务，每轮 4000 输入 + 1000 输出 Token；复核轮也按相同用量估算。按目录标准起价、不使用缓存折扣；推理额外输出、长上下文阶梯、搜索工具、平台费用和重试另计。不是完成 100 个项目的总价，也不保证全网最低。"
  },
  "taskGuides": [
    {
      "id": "copy",
      "category": "text",
      "name": "品牌文案与长文写作",
      "goal": "交付有明确受众、结构和语气的文稿",
      "criteria": "用同一份品牌资料检查事实、语气和长文一致性",
      "avoid": "免费小模型只适合试稿；不要用低价标签代替复杂文稿的质量判断",
      "picks": [
        {
          "model": "sonnet5",
          "role": "日常主力",
          "why": "专业写作与多轮修订候选，适合按品牌约束反复改稿",
          "setup": "提供受众、语气样文、必含事实与禁用词。"
        },
        {
          "model": "opus5",
          "role": "复杂交付",
          "why": "多约束长文与论证需要更多推理和复核时升级",
          "setup": "先确认提纲，再逐节写作并逐项核对引用。"
        },
        {
          "model": "flash38",
          "role": "批量变体",
          "why": "适合快速生成渠道版本和摘要，保留统一原始事实",
          "setup": "在审核过的母稿上生成标题和长度变体。"
        }
      ]
    },
    {
      "id": "analysis",
      "category": "text",
      "name": "研究分析与方案推演",
      "goal": "基于材料得出带证据和假设的建议",
      "criteria": "检查引用对应、反例覆盖和计算复核",
      "avoid": "模型没有自动查遍互联网；检索工具和资料来源需另行提供",
      "picks": [
        {
          "model": "opus5",
          "role": "复杂推演",
          "why": "推理与长流程候选，用于多条件方案比较",
          "setup": "提供证据包，要求区分事实、假设与建议。"
        },
        {
          "model": "sol56",
          "role": "计算与工具协作",
          "why": "适合需要多步分析及工具执行的研究流程",
          "setup": "由应用提供计算与检索工具，结论回查工具结果。"
        },
        {
          "model": "pro31",
          "role": "多模态资料",
          "why": "适合同时分析文件、图像或音视频证据的候选",
          "setup": "按资料类型确认渠道输入格式，并保留证据位置。"
        }
      ]
    },
    {
      "id": "summary",
      "category": "text",
      "name": "长文档摘要与会议整理",
      "goal": "输出可回查原文的摘要、决策和待办",
      "criteria": "检查遗漏、时间、人名与原文定位",
      "avoid": "长上下文不代表自动做到精确引用；录音先转写或确认音频输入",
      "picks": [
        {
          "model": "flash38",
          "role": "日常整理",
          "why": "支持文件与音视频输入的文本输出候选，适合资料归纳",
          "setup": "把决策、行动人、截止日拆成独立字段。"
        },
        {
          "model": "pro31",
          "role": "复杂材料",
          "why": "跨文件推理与多模态核对候选",
          "setup": "分别记录原文页码或音视频时间戳再汇总。"
        },
        {
          "model": "sonnet5",
          "role": "文字资料精编",
          "why": "适合已有转写稿或文档的结构重组和行动清单",
          "setup": "只根据已提供文字提取任务，不补猜未明确承诺。"
        }
      ]
    },
    {
      "id": "extract",
      "category": "text",
      "name": "字段抽取与批量分类",
      "goal": "将非结构化内容转成可验证字段",
      "criteria": "检查 JSON 格式、字段准确率和空值处理",
      "avoid": "需要确定数值计算时使用规则或程序；不要让语言模型补全未知字段",
      "picks": [
        {
          "model": "deepseek41",
          "role": "批量候选",
          "why": "渠道支持结构化输出与工具参数，适合字段抽取样本验证",
          "setup": "固定 schema，缺失值返回 null，并用程序验证。"
        },
        {
          "model": "flash38",
          "role": "图文混合",
          "why": "当输入包含图片和文档时使用多模态理解",
          "setup": "复杂扫描表格先 OCR，关键字段回查原件。"
        },
        {
          "model": "sol56",
          "role": "复杂规则",
          "why": "适合跨字段约束和多步骤工具校验",
          "setup": "让代码执行校验规则，将失败字段单独复核。"
        }
      ]
    },
    {
      "id": "build",
      "category": "code",
      "name": "完整功能与多文件开发",
      "goal": "完成可运行功能和必要测试",
      "criteria": "验收构建、测试、需求覆盖与变更范围",
      "avoid": "模型本身不等于开发环境；必须连接仓库、终端和测试工具",
      "picks": [
        {
          "model": "sol56",
          "role": "工具协作",
          "why": "面向命令行与多步开发的候选，适合连通完整开发流程",
          "setup": "提供仓库约定、验收条件与可执行测试。"
        },
        {
          "model": "sonnet5",
          "role": "持续开发",
          "why": "适合常规功能迭代与编码代理工作流",
          "setup": "从最小改动开始，检查真实运行结果。"
        },
        {
          "model": "coderplus",
          "role": "编码专项",
          "why": "工具调用和仓库编码候选；适合文本需求驱动开发",
          "setup": "传入代码而非截图，明确允许修改的文件。"
        }
      ]
    },
    {
      "id": "debug",
      "category": "code",
      "name": "复杂排错与代码审查",
      "goal": "定位根因、复现缺陷并验证修复",
      "criteria": "检查复现证据、回归测试及隐藏副作用",
      "avoid": "不要只看解释流畅或补丁长度，也不能保证找出全部安全问题",
      "picks": [
        {
          "model": "opus5",
          "role": "疑难排错",
          "why": "代码审查、缺陷查找和长链推理候选",
          "setup": "提交复现步骤、日志与相关代码，先论证根因。"
        },
        {
          "model": "sol56",
          "role": "执行验证",
          "why": "用工具运行复现和回归，适合证据驱动排错",
          "setup": "将失败测试固定下来，再应用修复并重跑。"
        },
        {
          "model": "sonnet5",
          "role": "日常审查",
          "why": "适合常规提交审查和范围较明确的修复",
          "setup": "重点检查本次差异、边界输入和调用者。"
        }
      ]
    },
    {
      "id": "frontend",
      "category": "code",
      "name": "前端界面与视觉还原",
      "goal": "从参考图或设计要求实现可交互页面",
      "criteria": "检查截图差异、响应式和真实交互",
      "avoid": "纯文本编码型号不能直接理解截图；生成静态图片也不等于网页实现",
      "picks": [
        {
          "model": "fable51",
          "role": "复杂前端",
          "why": "渠道描述明确包含前端和视觉工作，适合较长实现流程",
          "setup": "提供参考图、组件规范、交互与验收尺寸。"
        },
        {
          "model": "sonnet5",
          "role": "日常页面",
          "why": "图像输入与专业编码候选，适合持续界面迭代",
          "setup": "逐屏实现，实际截图后修正布局。"
        },
        {
          "model": "flash38",
          "role": "快速原型",
          "why": "多模态与编码能力适合快速验证界面方向",
          "setup": "先完成关键用户流程，再逐项检查样式。"
        }
      ]
    },
    {
      "id": "brand-image",
      "category": "image",
      "name": "海报与品牌主视觉",
      "goal": "输出带指定构图和品牌元素的视觉稿",
      "criteria": "检查品牌一致性、文字与画面细节",
      "avoid": "精确 Logo、价格和大段文字最好使用原素材与排版工具",
      "picks": [
        {
          "model": "image-pro",
          "role": "复杂视觉",
          "why": "官方定位偏复杂视觉、品牌一致性和精细控制",
          "setup": "提供品牌参考、构图与需要保留的元素。"
        },
        {
          "model": "image",
          "role": "日常制作",
          "why": "支持参考图与编辑，适合多尺寸物料迭代",
          "setup": "先确定一张母版，再改变尺寸和文案。"
        },
        {
          "model": "image-lite",
          "role": "草图探索",
          "why": "单次创意图探索的速度与成本候选",
          "setup": "只用于前期构图，不承担多轮主体一致性任务。"
        }
      ]
    },
    {
      "id": "product-edit",
      "category": "image",
      "name": "商品修图与角色一致性",
      "goal": "保留主体并修改背景、姿态或局部元素",
      "criteria": "检查外观、标识、材质和跨图一致性",
      "avoid": "FLUX schnell 文生图或 Lite 单次生成不作为精细参考图编辑的默认推荐",
      "picks": [
        {
          "model": "image",
          "role": "多参考编辑",
          "why": "官方明确强调多参考输入与一致性，匹配该任务",
          "setup": "输入真实主体参考图，明确禁止改动的区域。"
        },
        {
          "model": "image-pro",
          "role": "高要求修订",
          "why": "复杂品牌一致性与精细修改的候选",
          "setup": "逐次修改局部，用原参考图回查累积偏差。"
        }
      ]
    },
    {
      "id": "concept-image",
      "category": "image",
      "name": "概念草图与批量灵感",
      "goal": "快速探索画面方向后挑选精修",
      "criteria": "检查风格覆盖、构图可用率与单张重试成本",
      "avoid": "草图候选不等同于成品视觉质量排序",
      "picks": [
        {
          "model": "image-lite",
          "role": "快速探索",
          "why": "官方面向速度与规模的单次视觉生成",
          "setup": "每轮只改变一个视觉变量，筛选后再精修。"
        },
        {
          "model": "flux",
          "role": "轻量草图",
          "why": "快速文生图接口适合背景和氛围图探索",
          "setup": "固定比例与风格，避免依赖精确文字。"
        },
        {
          "model": "image",
          "role": "进入精修",
          "why": "需要保留被选中的主体并继续修改时使用",
          "setup": "从草图切换到参考图编辑，控制人物和物品变化。"
        }
      ]
    },
    {
      "id": "video-create",
      "category": "video",
      "name": "广告短片与分镜生成",
      "goal": "依据脚本生成可剪辑短镜头",
      "criteria": "检查运动、音画同步、主体与跨镜头连续性",
      "avoid": "短镜头生成不等于一键完成长片；仍需剪辑与字幕",
      "picks": [
        {
          "model": "veo",
          "role": "复杂短镜头",
          "why": "带音频的视频生成候选，适合先验证关键创意镜头",
          "setup": "逐镜提供动作、构图与声音要求。"
        },
        {
          "model": "veo-fast",
          "role": "迭代版本",
          "why": "快速分镜迭代与日常短视频素材候选",
          "setup": "先锁定分镜后生成，减少无效重试。"
        },
        {
          "model": "veo-lite",
          "role": "草案控制预算",
          "why": "适合预算敏感的试镜头，不作为无条件质量首选",
          "setup": "只为关键一镜付费，其他部分用现有素材拼接。"
        }
      ]
    },
    {
      "id": "animate-image",
      "category": "video",
      "name": "商品图与空间图动起来",
      "goal": "以确认的图片约束镜头运动",
      "criteria": "检查首尾帧、商品形变和空间关系",
      "avoid": "不要把普通文生视频当作严格主体一致性的替代",
      "picks": [
        {
          "model": "kling-o3",
          "role": "首尾帧约束",
          "why": "该接口专门接收起始图和可选结束图，匹配图生视频",
          "setup": "准备审核过的首帧与尾帧，指定镜头轨迹。"
        },
        {
          "model": "veo",
          "role": "图像引导备选",
          "why": "使用官方视频接口支持的图像引导方式制作短镜头",
          "setup": "核对当前型号的输入规格，逐镜检查主体保真。"
        }
      ]
    },
    {
      "id": "video-draft",
      "category": "video",
      "name": "低成本视频试稿",
      "goal": "验证节奏和分镜后再做成片",
      "criteria": "检查每个镜头的可用率与重试次数",
      "avoid": "便宜但持续重试未必节省总成本",
      "picks": [
        {
          "model": "veo-lite",
          "role": "先验证脚本",
          "why": "预算有限时验证单个关键镜头",
          "setup": "用静态分镜确认后再生成，不直接大量抽卡。"
        },
        {
          "model": "veo-fast",
          "role": "提高迭代效率",
          "why": "需要更频繁地试动作和节奏时作为候选",
          "setup": "记录成功率和每个可用镜头的真实费用。"
        }
      ]
    },
    {
      "id": "narration",
      "category": "audio",
      "name": "旁白与有声内容",
      "goal": "把已审定文稿合成为可发布音频",
      "criteria": "检查读音、停顿、情绪和长段稳定性",
      "avoid": "TTS 负责朗读，不负责实时理解用户并回答",
      "picks": [
        {
          "model": "tts-31",
          "role": "新版流式候选",
          "why": "支持流式合成，适合长文旁白分段播放与自然语言控制",
          "setup": "先试听专名和数字，预览接口保留版本迁移安排。"
        },
        {
          "model": "tts-pro",
          "role": "细致配音备选",
          "why": "对语气与停顿要求高时用同一文稿对照试听",
          "setup": "按段落导出干声，再做响度与背景音乐处理。"
        },
        {
          "model": "tts",
          "role": "费用敏感备选",
          "why": "适合固定模板播报与批量素材",
          "setup": "缓存已合格片段，只重生成变化内容。"
        }
      ]
    },
    {
      "id": "dialogue-audio",
      "category": "audio",
      "name": "多角色配音与对话素材",
      "goal": "输出角色可区分的剧本或教学对话",
      "criteria": "检查角色切换、语气与字幕对齐",
      "avoid": "多角色 TTS 是预写剧本配音，不是多人实时会议代理",
      "picks": [
        {
          "model": "tts-31",
          "role": "角色对话",
          "why": "官方提供多角色生成示例与流式输出",
          "setup": "为每名角色固定标识和声音，按段落试听。"
        },
        {
          "model": "tts-pro",
          "role": "样稿对照",
          "why": "多角色配音候选，用于比较语气和长段稳定性",
          "setup": "保持相同文本和角色设置，盲听选择更合适的版本。"
        }
      ]
    },
    {
      "id": "transcribe",
      "category": "audio",
      "name": "录音转写与会议字幕",
      "goal": "将录音转成可复核文字与时间位置",
      "criteria": "检查专名、数字、噪声段与时间戳",
      "avoid": "转写不等于说话人身份识别；Turbo 不承担音频翻译",
      "picks": [
        {
          "model": "whisper",
          "role": "准确性优先候选",
          "why": "Groq 文档建议对错误敏感的多语言场景使用该型号",
          "setup": "提供术语提示，逐段复核关键金额和姓名。"
        },
        {
          "model": "whisper-turbo",
          "role": "高吞吐候选",
          "why": "Groq 文档定位偏速度和费用的多语言转写",
          "setup": "先抽查口音与背景噪声，再处理整批录音。"
        }
      ]
    },
    {
      "id": "realtime",
      "category": "audio",
      "name": "实时语音助手",
      "goal": "实现双向语音理解、回复和工具交互",
      "criteria": "检查端到端延迟、打断、会话恢复与工具结果",
      "avoid": "配音 TTS、Whisper 转写和文本模型都不能单独代替双向语音接口",
      "picks": [
        {
          "model": "live38",
          "role": "原生实时接口",
          "why": "官方 Live API 使用此型号，提供连续音频输入与语音输出",
          "setup": "建立 Live 会话，接入麦克风、播放、工具回传和重连。"
        }
      ]
    },
    {
      "id": "retrieve",
      "category": "knowledge",
      "name": "知识库向量检索",
      "goal": "从文档中找到相关证据片段",
      "criteria": "使用标注问题比较召回与漏检",
      "avoid": "向量模型只生成表示，不会直接给出带引用的答案",
      "picks": [
        {
          "model": "voyage-4-large",
          "role": "检索质量候选",
          "why": "官方定位通用多语言检索质量优先",
          "setup": "固定切片和评估问题，检查 top-k 证据覆盖。"
        },
        {
          "model": "voyage-4",
          "role": "日常索引",
          "why": "通用多语言检索主力候选",
          "setup": "匹配 query/document 输入类型并维护文档权限。"
        },
        {
          "model": "voyage-4-lite",
          "role": "大规模索引",
          "why": "官方定位延迟与成本优先",
          "setup": "先评估复杂问题召回损失，再决定是否降档。"
        }
      ]
    },
    {
      "id": "rerank",
      "category": "knowledge",
      "name": "搜索结果重排",
      "goal": "让更相关的候选证据排到前面",
      "criteria": "检查前几条相关性和新增延迟",
      "avoid": "重排不能找回第一阶段完全没召回的文档，也不生成最终答案",
      "picks": [
        {
          "model": "rerank25",
          "role": "专用重排",
          "why": "对查询与已召回文档进行相关性排序，任务直接匹配",
          "setup": "先用向量或关键词召回，再重排候选并保留来源。"
        }
      ]
    },
    {
      "id": "rag-answer",
      "category": "knowledge",
      "name": "带引用的知识问答",
      "goal": "基于检索结果回答问题并引用证据",
      "criteria": "检查引用对应、拒答和权限隔离",
      "avoid": "不能把 embedding 模型直接当聊天模型；没有证据时不能硬答",
      "picks": [
        {
          "model": "sonnet5",
          "role": "文字证据问答",
          "why": "对检索后的文字证据进行专业解释与多轮问答",
          "setup": "只向模型提供获授权片段，逐条验证引用。"
        },
        {
          "model": "flash38",
          "role": "多模态证据",
          "why": "当证据含文件、图像或音视频时作为回答候选",
          "setup": "检索与回答分两步，引用由应用校验。"
        },
        {
          "model": "opus5",
          "role": "复杂综合",
          "why": "多份证据存在冲突或需要复杂推理时升级",
          "setup": "展示冲突与来源，不自动把一份材料当唯一事实。"
        }
      ]
    },
    {
      "id": "scan",
      "category": "knowledge",
      "name": "扫描件与表格入库",
      "goal": "先把原始页面变成结构化可检索材料",
      "criteria": "检查页码、表格行列、金额和识别置信度",
      "avoid": "OCR 不负责最终知识问答；复杂数字还需规则检查",
      "picks": [
        {
          "model": "ocr15",
          "role": "文档专用",
          "why": "面向文档版面、表格与公式识别，适合知识库入库前处理",
          "setup": "保留原页和坐标，关键字段人工复核后再索引。"
        },
        {
          "model": "pro31",
          "role": "复杂页面复核",
          "why": "多模态推理可辅助解释异常页面和跨页关系",
          "setup": "只处理 OCR 失败片段，数字和表格回查原件。"
        }
      ]
    }
  ]
};
