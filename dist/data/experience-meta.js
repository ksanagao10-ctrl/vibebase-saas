export const experienceMeta = {
  "choose-model": {
    "version": "2026-09-22.1",
    "reviewedAt": "2026-09-21",
    "testedAt": null,
    "cost": null,
    "currency": null,
    "evidenceKind": "documentation",
    "scope": "用同一组真实任务，对比质量、成本和可接入性。",
    "models": [
      {
        "id": "flash",
        "version": "gemini-2.5-flash",
        "name": "Gemini 2.5 Flash"
      },
      {
        "id": "deepseek",
        "version": "deepseek/deepseek-chat-v3.1",
        "name": "DeepSeek V3.1"
      },
      {
        "id": "sonnet",
        "version": "anthropic/claude-sonnet-4",
        "name": "Claude Sonnet 4"
      }
    ],
    "channels": [
      "official-gemini",
      "openrouter"
    ],
    "changes": "补充型号、接入渠道与证据字段；本文尚未进行付费调用实测。"
  },
  "read-prices": {
    "version": "2026-09-22.1",
    "reviewedAt": "2026-09-21",
    "testedAt": null,
    "cost": null,
    "currency": null,
    "evidenceKind": "documentation",
    "scope": "拆开输入、输出、缓存与附加费用，避免把不同版本混为一谈。",
    "models": [
      {
        "id": "flash-lite",
        "version": "gemini-2.5-flash-lite",
        "name": "Gemini 2.5 Flash-Lite"
      },
      {
        "id": "flash",
        "version": "gemini-2.5-flash",
        "name": "Gemini 2.5 Flash"
      }
    ],
    "channels": [
      "official-gemini"
    ],
    "changes": "补充型号、接入渠道与证据字段；本文尚未进行付费调用实测。"
  },
  "free-credits": {
    "version": "2026-09-22.1",
    "reviewedAt": "2026-09-21",
    "testedAt": null,
    "cost": null,
    "currency": null,
    "evidenceKind": "documentation",
    "scope": "长期免费、一次性试用、充值赠送和邀请奖励，需要分开看。",
    "models": [
      {
        "id": "flash-lite",
        "version": "gemini-2.5-flash-lite",
        "name": "Gemini 2.5 Flash-Lite"
      },
      {
        "id": "flash",
        "version": "gemini-2.5-flash",
        "name": "Gemini 2.5 Flash"
      }
    ],
    "channels": [
      "official-gemini"
    ],
    "changes": "补充型号、接入渠道与证据字段；本文尚未进行付费调用实测。"
  },
  "first-api": {
    "version": "2026-09-22.1",
    "reviewedAt": "2026-09-21",
    "testedAt": null,
    "cost": null,
    "currency": null,
    "evidenceKind": "documentation",
    "scope": "以 OpenAI 兼容客户端为例，检查三个字段和常见报错。",
    "models": [
      {
        "id": "flash",
        "version": "gemini-2.5-flash",
        "name": "Gemini 2.5 Flash"
      },
      {
        "id": "deepseek",
        "version": "deepseek/deepseek-chat-v3.1",
        "name": "DeepSeek V3.1"
      }
    ],
    "channels": [
      "official-gemini",
      "openrouter"
    ],
    "changes": "补充型号、接入渠道与证据字段；本文尚未进行付费调用实测。"
  },
  "image-budget": {
    "version": "2026-09-22.1",
    "reviewedAt": "2026-09-21",
    "testedAt": null,
    "cost": null,
    "currency": null,
    "evidenceKind": "documentation",
    "scope": "固定尺寸、计费步长和返工率，做一张可复算的生图预算表。",
    "models": [
      {
        "id": "image",
        "version": "gemini-3.1-flash-image",
        "name": "Gemini 3.1 Flash Image"
      },
      {
        "id": "image-lite",
        "version": "gemini-3.1-flash-lite-image",
        "name": "Gemini 3.1 Flash Lite Image"
      },
      {
        "id": "flux",
        "version": "fal-ai/flux/schnell",
        "name": "FLUX.1 schnell"
      }
    ],
    "channels": [
      "official-gemini",
      "official-fal"
    ],
    "changes": "补充型号、接入渠道与证据字段；本文尚未进行付费调用实测。"
  },
  "video-budget": {
    "version": "2026-09-22.1",
    "reviewedAt": "2026-09-21",
    "testedAt": null,
    "cost": null,
    "currency": null,
    "evidenceKind": "documentation",
    "scope": "用同一规格计算成本，再记录可用片段率。",
    "models": [
      {
        "id": "veo",
        "version": "veo-3.1-generate-preview",
        "name": "Veo 3.1"
      },
      {
        "id": "veo-fast",
        "version": "veo-3.1-fast-generate-preview",
        "name": "Veo 3.1 Fast"
      },
      {
        "id": "veo-lite",
        "version": "veo-3.1-lite-generate-preview",
        "name": "Veo 3.1 Lite"
      }
    ],
    "channels": [
      "official-gemini"
    ],
    "changes": "补充型号、接入渠道与证据字段；本文尚未进行付费调用实测。"
  },
  "tts-workflow": {
    "version": "2026-09-22.1",
    "reviewedAt": "2026-09-21",
    "testedAt": null,
    "cost": null,
    "currency": null,
    "evidenceKind": "documentation",
    "scope": "先校正发音和语气，再处理长稿、文件格式与费用。",
    "models": [
      {
        "id": "tts",
        "version": "gemini-2.5-flash-preview-tts",
        "name": "Gemini 2.5 Flash Preview TTS"
      },
      {
        "id": "tts-pro",
        "version": "gemini-2.5-pro-preview-tts",
        "name": "Gemini 2.5 Pro Preview TTS"
      },
      {
        "id": "tts-31",
        "version": "gemini-3.1-flash-tts-preview",
        "name": "Gemini 3.1 Flash TTS Preview"
      }
    ],
    "channels": [
      "official-gemini"
    ],
    "changes": "补充型号、接入渠道与证据字段；本文尚未进行付费调用实测。"
  },
  "rag-first": {
    "version": "2026-09-22.1",
    "reviewedAt": "2026-09-21",
    "testedAt": null,
    "cost": null,
    "currency": null,
    "evidenceKind": "documentation",
    "scope": "用 20 份资料建立小型验证集，分开检查检索和回答。",
    "models": [
      {
        "id": "flash",
        "version": "gemini-2.5-flash",
        "name": "Gemini 2.5 Flash"
      },
      {
        "id": "embedding",
        "version": "gemini-embedding-2",
        "name": "Gemini Embedding 2"
      },
      {
        "id": "voyage-4-lite",
        "version": "voyage-4-lite",
        "name": "voyage-4-lite"
      }
    ],
    "channels": [
      "official-gemini",
      "official-voyage"
    ],
    "changes": "补充型号、接入渠道与证据字段；本文尚未进行付费调用实测。"
  },
  "cache-batch": {
    "version": "2026-09-22.1",
    "reviewedAt": "2026-09-21",
    "testedAt": null,
    "cost": null,
    "currency": null,
    "evidenceKind": "documentation",
    "scope": "把实时对话和可延迟任务分开，避免为了折扣增加复杂度。",
    "models": [
      {
        "id": "flash-lite",
        "version": "gemini-2.5-flash-lite",
        "name": "Gemini 2.5 Flash-Lite"
      },
      {
        "id": "flash",
        "version": "gemini-2.5-flash",
        "name": "Gemini 2.5 Flash"
      }
    ],
    "channels": [
      "official-gemini"
    ],
    "changes": "补充型号、接入渠道与证据字段；本文尚未进行付费调用实测。"
  },
  "api-errors": {
    "version": "2026-09-22.1",
    "reviewedAt": "2026-09-21",
    "testedAt": null,
    "cost": null,
    "currency": null,
    "evidenceKind": "documentation",
    "scope": "按错误类型处理，用有限重试代替反复点击。",
    "models": [
      {
        "id": "deepseek",
        "version": "deepseek/deepseek-chat-v3.1",
        "name": "DeepSeek V3.1"
      },
      {
        "id": "qwen-coder",
        "version": "qwen/qwen3-coder",
        "name": "Qwen: Qwen3 Coder 480B A35B"
      }
    ],
    "channels": [
      "openrouter"
    ],
    "changes": "补充型号、接入渠道与证据字段；本文尚未进行付费调用实测。"
  }
};
export const experienceChannels = {"official-fal": {"name": "fal 官方", "url": "https://fal.ai/models/fal-ai/flux/schnell"}, "official-voyage": {"name": "Voyage AI 官方", "url": "https://docs.voyageai.com/docs/embeddings"}};
