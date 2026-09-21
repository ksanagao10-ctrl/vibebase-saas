# VibeBase SaaS

AI API 导航、Android / SaaS 协议匹配、API 对比、成本计算与推广机会目录。

## 数据与功能

- 37 个官方 API，840 条去重后的中转 / Router / 聚合线索，合计 877 条。
- 保留公开索引的 847 条原始记录，快照日期 2026-09-19。
- 每页 48 条；官方 / 第三方分区；中文搜索、协议与模型筛选、详情与外链。
- 完整 HTML、CSS、JavaScript、JSON 均由本站提供，不在运行时请求 GitHub。
- 推广联盟是机会目录，示例收益不代表真实佣金；暂无结算后台。

## Cloudflare Workers 部署

采用 Workers Static Assets + Worker 报价接口，无数据库或客户 API Key 依赖。页面查询本站接口，由 Worker 读取固定白名单的公开价格目录。

```sh
npm ci
npm run build
npx wrangler login
npm run deploy
```

登录操作在浏览器中完成，不要把 Token 提交到仓库。多账户用户可通过 `CLOUDFLARE_ACCOUNT_ID` 环境变量选择账户。

## GitHub 自动部署

Cloudflare 控制台 → Workers & Pages → Create application → Import a repository，选择此 GitHub 仓库。

- Production branch: `main`
- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Root directory: `/`
- Worker name: `vibebase-saas`

首次连接需要账户所有者授权 Cloudflare 访问该仓库。之后 main 分支推送触发自动部署。

实时比价需要 Workers 运行时；不要仅把 dist 作为 Pages 静态站部署，否则 /api/prices 不可用。

## 本地检查

`npm run build` 检查脚本语法、UTF-8 声明、静态文件完整性和 800+ 索引数量。
`npm run dev` 使用 Wrangler 本地预览。

## 自动校验与发布版本

每次构建会生成 `dist/release.json`，包含提交 SHA、构建时间和静态资源 SHA-256。
该文件随部署发布，不提交到 Git。

GitHub Actions 在 main 推送和拉取请求时执行构建校验；实际发布由 Cloudflare 的 Git 集成完成。
请确认 Cloudflare 已连接本仓库，并开启 main 自动构建，构建命令保持 `npm run build`。
此仓库不保存 Cloudflare Token。

设置 GitHub 仓库 Actions 变量 `SITE_URL` 为实际线上地址后，main 的工作流会等待 Cloudflare 发布，并校验提交版本、CSS/JS/JSON 哈希、HTTP 状态、Content-Type、UTF-8 和 800+ 数据量。未设置该变量时，线上校验任务会跳过。

也可手动执行：

```sh
npm run verify:live -- https://实际线上域名
```

线上资源校验不等于桌面端和手机端的交互验收；搜索、弹窗和分页仍需浏览器验证。
GitHub 校验本身不会阻止 Cloudflare 构建；Cloudflare 构建中的 `npm run build` 失败才会阻止该次发布。

## 数据来源

官方与重点平台种子来自用户提供的 VibeBase Full Catalog 包。中转索引来源：https://github.com/hvoyai/awesome-ai-api/blob/main/data.json 。条目收录不构成可用性或信誉保证，价格和返佣以各平台当前条款为准。


## 单模型实时报价爬虫

入口：`/#boards/price/sol56`。所有模型详情页的“此模型实时比价”均进入同模型页面。

- API：`GET /api/prices?model=sol56&inputTokens=4000`
- 可选 `sources=openrouter,modelsell,lietio`；来源必须在服务端白名单内，不接受任意 URL。
- 型号支持本地 ID 或明确登记的渠道 ID。版本号、preview、free 后缀不会被模糊合并。
- 来源：OpenRouter、Modelsell、Lietio、Apiko、LinkAPI、Zooo AI、哈基米、大肘子、XycAi。每次返回独立的成功、未收录、待适配、失败或旧缓存状态；接入来源不代表所有型号都有可计算报价。
- OpenRouter 适配每 Token 价格、上下文阶梯和 UTC 分时规则。New API 适配标准倍率 × 分组倍率、按次报价，以及受限的 `len < / <= N ? tier(...) : tier(...)` 线性表达式。其他表达式、自定义分组价格（如 XycAi）、多模态 Token 账单保留原因，不猜测、不执行上游代码。
- 新鲜缓存 5 分钟，最多保留 24 小时供失败回退；旧快照不参与排序。源目录按平台共享，不因切换模型重复抓取。单源超时 8 秒，并发上限 4；短暂错误退避 45 秒。Cloudflare Cache API 为地域缓存，不承诺跨地域统一限流。
- 站内“额度美元”按标准 500,000 quota 换算，与 OpenRouter USD 分区呈现，不能据此比较充值现金成本。账号折扣、充值汇率、套餐、税费、工具、缓存存储及重试不计。核对的是目录价格和型号声明，没有调用付费推理或验证模型身份。

独立运行（Node 22+）：

```sh
npm run prices:crawl -- --model=sol56 --input-tokens=4000 --output=prices.json
npm run prices:crawl -- --model=astra6 --sources=apiko,linkapi
npm run test:prices
npm run dev
```

`src/pricing/sources.js` 定义白名单；`models.js` 定义明确别名；`adapters.js` 实现纯函数换算；`service.js` 负责抓取、大小限制、超时、缓存及错误隔离。`scripts/fixtures/pricing` 保存 2026-09-21 的最小公开响应样本，验证分组与 272K 边界。添加站点时先保存最小样本、写换算测试，再加入白名单；不要将缺失费率默认成零或一。


### 分类模型比价（2026-09-21）

- 六类弹窗：生文、生图、生视频、ASR、TTS、其它，每类 10 个候选。排序依据是本次已收录候选的独立站点目录覆盖数，不是性能排行榜。
- `dist/data/price-catalog.js` 是前后端共用型号、精确别名、来源白名单和覆盖证据。保留旧模型深链接，新增型号也能直接访问。
- 本次检查 883 个不同站点地址，234 个返回非空 New API 公开目录。选择覆盖较广的来源并保留既有接入，共 80 个站点（含 OpenRouter）；未把同站分组计为独立站。
- 浏览器按每批 8 家、3 批并发逐步显示结果。服务端每次最多 20 家，默认前 20 家；避免单请求大量外部连接。缓存仍为 5 分钟，旧快照不参与排序。
- **不是所有模型都有 20 家有效报价。** 生文前十的保存响应各有 24–60 家可换算报价；ASR、视频等很多型号连公开收录都不足 20 家。页面显示实际取得的报价家数和缺口。
- 多模态固定目录单价的“每秒 / 字符 / 图片 / 任务”结算口径未经验证时，只显示基础单价，不作为每次请求总价排序。不能把文本 Token 规则直接套用到 ASR / TTS。
- 复核快照：`node scripts/audit-price-coverage.mjs <snapshot-directory> [--update]`。目录包含 `sources.json`（id/name/url）和每个 id 的公开 JSON 响应。该命令生成 coverage.json；`--update` 更新目录覆盖数及排序。
- 全部来源爬取：`npm run prices:crawl -- --model=sol56 --output=prices.json`。CLI 自动分批；`--sources=lietio,modelsell` 可限定来源。


### 交付预算与经验档案（2026-09-22）

新增 `/#calculator` 四种交付预算、`/#probes` 渠道证据档案，以及每篇 CoVibe 文章的版本信息和服务器反馈。原 Token 计算器迁移至 `/#calculator/token`。反馈和采样记录使用 `EVIDENCE_DB`，迁移文件在 migrations/；上线前先应用迁移并初始化服务器反馈盐。详细采样、账单核对与反馈审核方法见 [运营说明](docs/evidence-operations.md)。已有公开目录采样不等于付费推理测试，未取得的实际扣费显示未知。
