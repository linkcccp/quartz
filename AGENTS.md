# Quartz v4 开发指南

## 关键命令

```bash
pnpm quartz build              # content/ → public/
pnpm quartz build --serve      # 构建 + 本地预览 (localhost:8080)
pnpm quartz build --serve -d docs  # 预览 docs/ 目录 (测试用)
pnpm quartz build --watch      # 监听变化自动重建
pnpm run check                 # tsc --noEmit + prettier --check
pnpm run format                # prettier --write
pnpm run test                  # tsx --test (所有测试)
```

## 环境

- Node.js >= 22，pnpm >= 10.33.2
- ESM (`"type": "module"`)

## 项目结构

```
quartz/                     # 核心源码
  bootstrap-cli.mjs         # CLI 入口
  components/               # Preact 组件
  plugins/                  # transformers / filters / emitters
  styles/                   # SCSS (base.scss, variables.scss, callouts.scss)
  i18n/locales/             # 30+ 语言翻译
  util/theme.ts             # joinStyles() 注入 CSS 自定义属性
quartz.config.ts            # 用户配置
quartz.layout.ts            # 页面布局
content/                    # git submodule → linkcccp/quartz-content (Private)
test/                       # 集成测试
docs/linkcccp/api.md        # 自定义组件 API 文档
scripts/sync-content.sh     # Windows→WSL 同步脚本
```

## 内容子模块 (Content Submodule)

`content/` 是 git submodule，指向私有仓库 `linkcccp/quartz-content`。

**设计意图：**

- 主仓库 (`linkcccp/quartz`) 只含代码/配置，可公开 fork
- 文章内容隔离在私有仓库，不污染主仓库 git log
- Cloudflare Pages 开启 "Include submodules" 即可拉取内容构建

**日常操作：**

```bash
# 首次克隆后初始化子模块
git submodule update --init --recursive

# 同步文章后，在内容仓库中提交
cd content
git add -A && git commit -m "sync: YYYY-MM-DD"
git push

# 然后回到主仓库，提交子模块指针变更
cd ..
git add content
git commit -m "chore: update content submodule"
git push

# 让子模块指向最新远程提交
cd content && git pull origin main
```

## 自定义组件约定 (linkcccp\_)

所有自定义文件使用 `linkcccp_` 前缀：

| 组件                  | 文件                                                                                                        |
| --------------------- | ----------------------------------------------------------------------------------------------------------- |
| HamburgerMenu         | `components/linkcccp_HamburgerMenu.tsx`                                                                     |
| StaleNotice           | `components/linkcccp_StaleNotice.tsx` + `linkcccp_staleNoticeLogic.ts` + `styles/linkcccp_staleNotice.scss` |
| RecentNotes 样式/脚本 | `styles/linkcccp_recentNotes.scss` + `scripts/linkcccp_recentnotes.inline.ts`                               |
| PWA                   | `plugins/emitters/linkcccp_pwa/linkcccp_pwa.tsx`                                                            |

## 设计系统 (Fluent 2)

- 无 CSS 框架，纯自定义 SCSS + CSS 自定义属性
- 9 色 token × 2 模式 (light/dark)，配置在 `quartz.config.ts` → `theme.colors`
- elevation / radius token 通过 `joinStyles()` 注入 `:root`
- 字体：Inter (标题+正文) / JetBrains Mono (代码)
- 过渡：统一 ms (`100ms` / `200ms` / `300ms`) + `ease-in-out`
- Focus 可见：`outline: 2px solid var(--secondary); outline-offset: 2px`

## PWA 插件 (linkcccp_pwa)

```typescript
// quartz.config.ts
pwa: { enabled: true, name: "...", shortName: "...", themeColor: "...", backgroundColor: "..." }
```

**当前缓存策略：**

| 资源         | 策略                       | 缓存   | 过期   |
| ------------ | -------------------------- | ------ | ------ |
| HTML         | NetworkFirst               | pages  | -      |
| JS/CSS/图片  | CacheFirst                 | static | 7 天   |
| Google Fonts | CacheFirst                 | fonts  | 365 天 |
| 预缓存       | Precache (SHA256 revision) | auto   | -      |

**SW 更新机制：**

- `service-worker.js` 顶部注入 `// Build: <ISO时间戳>` + 所有文件 SHA256 前 8 位作为 revision
- 注册使用 `{updateViaCache: 'none'}` 强制浏览器绕过 HTTP 缓存
- 浏览器检测到 SW 变化 → `updatefound` → `window.location.reload()`

## StaleNotice 自动过期

文章 frontmatter 中 `stale` 字段三态：

- `false`：不显示横幅
- `true`：强制显示红色横幅
- 不设置/`default`：git 最后修改距今 > 180 天 → 自动显示

日期来源：`CreatedModifiedDate` 优先级 `["git", "frontmatter", "filesystem"]`。编辑后 `git commit` 即可刷新，无需维护 `lastmod`。
所有 `content/` 下 `.md` 文件已添加 `stale: default`。

## 其他约定

- **内容文件命名**：kebab-case (`my-article.md`)，目录名小写
- **RecentNotes**：默认 filter 排除 `index.md`
- **RSS**：`rssLimit: 0` 输出全部笔记，Footer 有 `RSS: "/index.xml"` 链接
- **`baseUrl`**：`www.linkcf.top`
- **同步脚本**：`scripts/sync-content.sh` — 从 Windows `C:\Users\Yazov\OneDrive\Blog\content` 同步到 WSL 子模块，移除 `draft: true` 文件，转换 CRLF→LF，自动在子模块内提交

## 测试注意事项

- `tsx --test` 无法解析 `.scss` 导入 → 组件逻辑测试必须抽取到纯 `.ts` 文件（如 `linkcccp_staleNoticeLogic.ts`）
- 集成测试放 `test/`，单元测试放模块目录
- 验证流程：`pnpm run check` → `pnpm run test` → `npx quartz build -d docs`

## i18n

- 新增翻译字段需同时更新 `definition.ts` + 所有 locale 文件（用 sed 批量插入）
- 中文在 `zh-CN.ts`，英文默认在 `en-US.ts`
