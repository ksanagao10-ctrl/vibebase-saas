# VibeBase SaaS

AI API 导航、Android / SaaS 协议匹配、API 对比、成本计算与推广机会目录。

## 数据与功能

- 37 个官方 API，840 条去重后的中转 / Router / 聚合线索，合计 877 条。
- 保留公开索引的 847 条原始记录，快照日期 2026-09-19。
- 每页 48 条；官方 / 第三方分区；中文搜索、协议与模型筛选、详情与外链。
- 完整 HTML、CSS、JavaScript、JSON 均由本站提供，不在运行时请求 GitHub。
- 推广联盟是机会目录，示例收益不代表真实佣金；暂无结算后台。

## Cloudflare Workers 部署

采用 Workers Static Assets，无运行时数据库、API Key 或动态 GitHub 数据源依赖。

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

也可使用 Pages：框架选 None，构建命令 `npm run build`，产物目录 `dist`。

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
