# Google Search Console 接入指引（手动执行）

> 本指引面向本站站长（登录账号：altairpaca@gmail.com），全程在浏览器中手动操作，预计耗时 10–15 分钟。
> 本站托管于 GitHub Pages（`altairpaca.github.io`），**不支持 DNS 验证方式**，请使用本文的 HTML 文件验证。

---

## 步骤一：添加资源（网域前缀）

1. 打开 Google Search Console：<https://search.google.com/search-console>
2. 使用 **altairpaca@gmail.com** 登录（如未登录，页面会先跳转到 Google 账号登录页）。
3. 在首页「**添加资源**」面板中，选择「**网域前缀**」（Domain prefix）类型。
   - 注意：不要选「网域」（Domain，即不带 `www` 的根域形式）——那需要 DNS 验证，GitHub Pages 不支持。
4. 在输入框中粘贴：`https://altairpaca.github.io/`
5. 点击「**继续**」。

**预期界面**：进入验证页，显示「验证这个资源」并提供几种验证方式（HTML 文件、HTML 标记、DNS、Google Analytics 等）。

---

## 步骤二：HTML 文件验证

1. 在验证方式列表中，选择「**HTML 文件**」（HTML file）。
2. 点击「**下载**」按钮，得到一个形如 `google<一串字符>.html` 的验证文件（例如 `google1234567890abcdef.html`）。
   - 该文件内容是一段 `google-site-verification` meta 标签代码，请勿改动内容。
3. 把下载的文件放入本仓库**根目录**（即 `site/` 目录，与 `index.html` 同级）。
4. 复用本仓库现有的推送流程，提交并推送到 GitHub：
   ```bash
   cd /home/altair/personal/resume/site
   git add google<一串字符>.html
   git commit -m "chore(site): add Google Search Console verification file"
   git push origin main
   ```
   （也可以直接 `git add -A` 后提交。推送后 GitHub Pages 会自动重新部署，等待约 1–2 分钟。）
5. 返回 Google Search Console 验证页，点击「**验证**」（Verify）。

**预期界面**：验证成功后页面显示绿色提示「已成功验证此资源」（Property verified），随后自动进入 Search Console 首页/概览面板。

> ⚠️ **重要：验证文件必须永久保留在仓库根目录，验证完成后不要删除。**
> Google 会周期性重新检查验证文件；一旦删除，验证将失效，需要重新走一遍验证流程。

---

## 步骤三：提交 Sitemaps

1. 进入 Search Console 后，在左侧导航栏找到「**Sitemaps**」（站点地图），点击进入：
   <https://search.google.com/search-console/sitemaps>
2. 在「添加新的站点地图」（Add a new sitemap）输入框中，填写：`sitemap.xml`
   - 输入框已带域名前缀 `https://altairpaca.github.io/`，只需补 `sitemap.xml` 即可。
3. 点击「**提交**」（Submit）。

**预期界面**：提交后「已提交的站点地图」列表中新增一条 `sitemap.xml`，状态先显示「无法抓取」（待处理），随后会变为「成功」并显示已发现的网址数（本站为 2 条：主页与简历 PDF）。

---

## 步骤四：URL 检查工具请求编制索引

1. 在左侧导航栏点击「**网址检查**」（URL Inspection）：
   <https://search.google.com/search-console/url-inspection-panel>
2. 第一次：在顶部输入框中粘贴 `https://altairpaca.github.io/`，回车。
   - 预期界面：显示「网址不在 Google 上」或「已编入索引」；点击「**请求编制索引**」（Request indexing）按钮并确认。
3. 第二次：在输入框中粘贴 `https://altairpaca.github.io/assets/resume.pdf`，回车。
   - 预期界面：同上；再次点击「**请求编制索引**」。

**预期界面**：每次点击请求后显示确认提示「已发送请求」（Request submitted）；URL 检查页同时会显示抓取结果、索引状态与页面上的标题/Meta 描述。

---

## 步骤五：预期生效时间与验证

- 正常情况下，Google 会在 **3–14 天**内完成收录刷新。
- 验证方法：在 Google 搜索（或 Bing）中搜索 `site:altairpaca.github.io`。
- 预期结果：结果中的页面标题应为：

  > **Zhenzhuo (Altair) Li | Financial Machine Learning & Quantitative Research**

  若仍显示旧标题（如 "AI & FinTech Portfolio"），说明索引尚未刷新，请耐心等待，无需重复提交。

---

## 常见问题

- **验证文件什么时候可以删除？** 不可以。验证文件必须一直保留在仓库根目录（见步骤二说明），删除即失去验证。
- **push 后多久可以点验证？** 等 GitHub Pages 构建完成（约 1–2 分钟）后即可；若提示验证失败，先确认线上 `https://altairpaca.github.io/google<一串字符>.html` 能正常打开。
- **提交 sitemap 显示「无法抓取」？** 新提交的资源首次检查通常显示此状态，属正常现象，等待即可。
