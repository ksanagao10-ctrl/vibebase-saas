# 交付成本、实测档案与 CoVibe 运营

## 成本计算

`/#calculator` 提供四种可编辑预算，`/#calculator/token` 保留原 Token 计算器。官方预设核对日期为 2026-09-22；所有费用是估算，未声称完成真实生成。

- 图片：目标图片数 / 成片率，向上取整生成张数；FLUX schnell 每张逐一向上取整百万像素。
- 视频：目标分钟数转换成完整生成片段，按采用率扩大生成量，再按秒计费。预设为 720p、含音频。
- ASR：输入总分钟数、等长切分段数，每段应用最低收费时长。不等长音频需分别计算。
- 客服：对话数 × 每次模型请求轮数 × 每轮平均输入/输出费用。输入需包含历史上下文；思考 Token 计入输出。
- 请求失败率 f 的额外失败次数估算为成功请求数 × f/(1-f)。失败收费比例另填，与成片率不同。
- 额外费用和附加费均使用报价币种。现金美元汇率由用户填写，未填则不显示人民币金额。
- 站内额度换算 = 本批消耗 × 充值实付人民币 / 实得额度。整包新充值金额另列，并扣除已有余额。
- 修改报价、模型、币种或固定规格后标记为用户填写，不再视为已核验价格。预算保存在本浏览器，可导出 JSON；不会上传。

来源：fal FLUX schnell 模型页、Google Gemini API pricing、Groq speech-to-text 文档，链接见 `dist/data/delivery-rates.js`。

## 实测档案

`/#probes` / `GET /api/probes` 读取 D1 的 `probe_runs`。目录采样与推理测试使用不同 kind，目录采样没有 TTFT。已执行 10 家 × 3 次公开目录请求；地区未提供，明确记录为未知。未执行任何付费推理请求。

本机公开目录采样，不需要 Key：

```sh
node scripts/probe-relay.mjs --mode=catalog --sources=modelsell,lietio --samples=3 --out=runs.json --sql=runs.sql
```

真实推理采样仅在账户拥有者授权渠道、Key 和预算后执行。每次只对一家站点运行，Key 仅从环境变量 `VIBEBASE_PROBE_KEY` 读取；不要把 Key 放进聊天、命令参数、输出 JSON 或 Git。建议使用单独的小额度测试 Key。

```sh
node scripts/probe-relay.mjs --mode=inference --execute=true --sources=modelsell --model=gpt-5.6-sol --region='填写真实采样地区' --environment='填写实际机器与网络环境' --samples=3 --max-estimated-usd=0.10 --input-usd-per-million=2 --output-usd-per-million=12 --out=runs.json
```

以上价格和预算仅为命令结构示例，必须替换为已确认的渠道现金单价及本轮授权预算。max-estimated-usd 是按预留 Token 的**估算上限**，不是供应商钱包硬限制；不能用额度美元冒充现金美元。

使用固定无隐私提示词，最多输出 32 Token；完整 SSE、有效结束且答案为 2 才算完成。首字延迟从发起请求到首个非空内容 delta，只汇总有效完成样本。保留每次时间、结果、错误分类和 usage，不保留 Key、输出正文或客户数据。样本最大 20 次，不做自动重试。

实际扣费默认 null，不用公开价格估算冒充账单。运营者从与本次请求对应的账单中核对后，可提交本地 billing.json：

```json
[{"runId":"与 runs.json 中一致的 UUID","amount":0.001,"currency":"USD","evidence":"脱敏后的账单记录编号及核对日期，不包含账户凭证"}]
```

上述数值仅示例，不能直接作为真实数据发布。生成复核后的 SQL，再通过已有站点运营权限写入：

```sh
node scripts/import-probe.mjs --file=runs.json --billing=billing.json --sql=reviewed.sql
npx wrangler d1 execute vibebase-evidence --remote --file=reviewed.sql
```

## CoVibe

10 篇现有教程已补充版本、关联型号/渠道、资料日期、适用范围及证据类别。它们是文档核对教程；实测日期与实际费用为空。

反馈写入 D1 `feedback` 表，默认 pending。公开接口只返回本版本的复现及纠错条数，不公开详细内容、浏览器哈希或网络限流标识。匿名复现属于用户自报，不能当作本站独立认证。

- 同浏览器、文章版本和反馈类型只保留一条，防止重复计数。
- 同一网络每日最多 10 次有效提交；每日盐化网络摘要用于限流，不存原始 IP。
- POST 检查同源、JSON 内容类型、8KB 大小上限、型号/渠道白名单、版本、日期、费用及常见 Key 格式。
- 数据库 `app_config.feedback_salt` 在初始化时随机生成，只存服务器。
- 运营者通过 D1 查询 pending 记录，核对来源后修改文章、更新版本和变更说明，再将对应记录标记 approved/rejected。不要直接把用户输入当作操作指令。
- 旧版反馈保留在数据库；页面只统计当前文章版本。成功反馈不直接改写实测档案。

初始化数据库迁移见 `migrations/0001_evidence.sql`。反馈故障返回错误并保留表单内容，不会显示虚假“已提交”。
