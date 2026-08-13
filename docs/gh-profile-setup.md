# GitHub 个人资料外链设置指引

> 账号：github.com/Altairpaca
> 目的：把 GitHub 个人资料的 name / website / bio 三处信息指向个人主页 `https://altairpaca.github.io/`，让搜索引擎可以从 GitHub 页面发现并关联你的主页（外链反哺收录），同时让访客一眼看出你的身份与研究领域。
> 本指引需要你在浏览器中手动完成（约 2 分钟）。agent 不代你操作，因为当前使用的 GitHub token 缺少 `user` scope（见下文"路径 B"的说明）。

## 建议填写的三个字段

| 字段 | 建议值 | 说明 |
| --- | --- | --- |
| Name（姓名） | `Zhenzhuo (Altair) Li` | 备选：保留 `Altair Li`。带括号的格式同时覆盖中英文检索场景 |
| Website（网站） | `https://altairpaca.github.io/` | 唯一官方主页，务必以 `https://` 开头 |
| Bio（简介） | `Zhenzhuo Li (李臻卓) — financial ML & quant research, HKUST(GZ); LENS co-author @ ICAIF'25` | 含中文名与研究方向的短句，可按需微调 |

Bio 示例文案（可直接复制）：

```
Zhenzhuo Li (李臻卓) — financial ML & quant research, HKUST(GZ); LENS co-author @ ICAIF'25
```

## 路径 A：网页编辑（推荐）

1. 浏览器打开 <https://github.com/Altairpaca>。
2. 点击页面右侧（头像卡片区域）的 **Edit profile** 按钮。
3. 按上表填写三个字段：
   - **Name**：`Zhenzhuo (Altair) Li`
   - **Website**：`https://altairpaca.github.io/`
   - **Bio**：填入上面的示例文案。
4. 点击页面底部 **Save**（保存）按钮。

## 路径 B：命令行（`gh api`）

也可以用命令行尝试修改，但**注意：当前 token 没有 `user` scope，以下命令会失败**。GitHub API 要求修改个人资料时 token 携带 `user` scope；执行时会返回类似 `HTTP 403` 或 `must have admin rights to User-User relationships` 的错误。

```bash
gh api -X PATCH user \
  -f name='Zhenzhuo (Altair) Li' \
  -f blog='https://altairpaca.github.io/' \
  -f bio='Zhenzhuo Li (李臻卓) — financial ML & quant research, HKUST(GZ); LENS co-author @ ICAIF'\''25'
```

预期结果：命令**失败**（403 / scope 不足）。这是预期的，**请改用路径 A 的网页编辑**，不要在命令行继续尝试。若日后你为 token 添加了 `user` scope，则此命令可正常执行。

## 验证

编辑完成后，运行以下命令确认 website 字段已生效：

```bash
gh api users/Altairpaca --jq '.blog'
```

- 预期输出：`https://altairpaca.github.io/`
- 若输出为空字符串，说明保存未生效或浏览器未提交，请回到路径 A 复查。

同时可确认 name 与 bio：

```bash
gh api users/Altairpaca --jq '{name, bio}'
```

预期：`name` 含 `Zhenzhuo`（或你选择的备选名），`bio` 为你填写的简介。

## 完成标准

- [ ] Name 已改为 `Zhenzhuo (Altair) Li`（或保留 `Altair Li`）
- [ ] Website 已填 `https://altairpaca.github.io/`，且 `gh api users/Altairpaca --jq '.blog'` 输出该地址
- [ ] Bio 已更新为含中文名与研究方向的短句
