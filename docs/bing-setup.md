# Bing 与 IndexNow 接入指引

本指引让你把个人主页接入 Bing 搜索，并配置 IndexNow 自动提交，使每次推送后 Bing 能快速抓取最新内容。

- Bing Webmaster Tools: https://www.bing.com/webmasters
- IndexNow 协议: https://www.indexnow.org/
- 仓库内已配置 workflow `.github/workflows/indexnow.yml`，只需按本指引完成一次性设置。

## 1. 在 Bing Webmaster Tools 验证站点所有权

打开 https://www.bing.com/webmasters 并用你的账号登录，添加站点 `https://altairpaca.github.io/`，二选一完成验证：

**方式 A：从 Google Search Console 导入（推荐，若已完成 GSC 验证）**

1. 在 Bing Webmaster Tools 首页选择「从 Google Search Console 导入」。
2. 按提示授权 Google 账号，Bing 会直接读取 GSC 中已验证的站点并完成导入，无需额外文件。

**方式 B：HTML 文件验证**

1. 添加站点后选择 HTML 文件验证方式，Bing 会提供一个验证文件（如 `BingSiteAuth.xml`）。
2. 将该文件放入仓库根目录（与 `index.html` 同级），提交并推送：

   ```bash
   git add <验证文件名> && git commit -m "chore(site): add Bing verification file" && git push origin main
   ```

3. 返回 Bing Webmaster Tools 点击「验证」。**验证文件必须保留在仓库中，不可删除**——Bing 会周期性复查，删除会导致验证失效。

## 2. 生成 IndexNow key

IndexNow 使用一个 key 来确认你是站点所有者。生成方式任选其一：

- UUID：`python3 -c "import uuid; print(uuid.uuid4())"`
- 随机字符串：`openssl rand -hex 16`

记录生成的 key（下文统称 `<key>`），例如 `a1b2c3d4e5f6...`。

## 3. 在站点根目录创建 key 文件

1. 在仓库根目录（与 `index.html` 同级）创建文件 `<key>.txt`，文件名就是 key 本身，文件内容也只写 key 本身（不要带换行、引号或多余字符）：

   ```bash
   cd /home/altair/personal/resume/site
   echo -n "<key>" > <key>.txt
   ```

2. 提交并推送：

   ```bash
   git add <key>.txt && git commit -m "feat(site): add IndexNow key file" && git push origin main
   ```

> **关于 key 文件的安全性**：按 IndexNow 协议，key 文件本来就是公开的——IndexNow 与搜索引擎会通过 `https://altairpaca.github.io/<key>.txt` 定期访问它来确认你对站点的所有权，因此它必须能被公开访问。这是本仓库唯一允许出现的"凭据类"文件；除此之外的任何密钥都不要提交进仓库。

## 4. 在 GitHub 仓库配置 INDEXNOW_KEY Secret

1. 打开仓库 `Altairpaca/altairpaca.github.io` → **Settings** → **Secrets and variables** → **Actions**。
2. 点击 **New repository secret**：
   - Name: `INDEXNOW_KEY`
   - Secret: 粘贴第 2 步生成的 key（必须与 `<key>.txt` 的文件名和内容完全一致）
3. 保存。

## 5. 自动提交机制

配置完成后，每次向 `main` 分支推送代码，`.github/workflows/indexnow.yml` 都会自动运行，把 `https://altairpaca.github.io/sitemap.xml` 中的 URL 提交给 IndexNow（Bing 端点）。IndexNow 收到后会通知 Bing 等参与搜索引擎抓取。

- 未配置 `INDEXNOW_KEY` 时 workflow 会自动跳过（job 级 `if` 条件），不会报错。
- 提交状态可在仓库 **Actions** 页面的 "IndexNow Submit Sitemap" 运行记录中查看。
