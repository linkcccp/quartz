---
title: linkcccp 组件 API 文档
---

本文档描述 `linkcccp` 系列自定义组件的接口、配置项和工作原理。

## RecentNotes

显示最近更新的文章列表，支持折叠/展开。

```
文件: quartz/components/RecentNotes.tsx
样式: quartz/components/styles/linkcccp_recentNotes.scss
脚本: quartz/components/scripts/linkcccp_recentnotes.inline.ts
```

### 配置项

```typescript
interface RecentNotesOptions {
  title?: string // 标题，默认使用 i18n 翻译
  limit: number // 最大显示数，默认 10
  linkToMore: SimpleSlug | false // "查看更多"链接，默认 false
  showTags: boolean // 是否显示标签，默认 true
  filter: (f: QuartzPluginData) => boolean // 过滤函数，默认排除 `index.md`
  sort: (f1: QuartzPluginData, f2: QuartzPluginData) => number // 排序，默认按日期+字母
}
```

### 使用示例

```typescript
Component.RecentNotes({
  title: "最近更新",
  limit: 10,
  showTags: false,
})
```

### 工作原理

- **桌面端**：带箭头 toggle 按钮，列表 `max-height: 24rem; overflow-y: auto` 可滚动
- **移动端**（在 HamburgerMenu 中）：`max-height` 移除，由外层抽屉统一滚动
- **折叠状态**：`.recent-notes.collapsed` 类控制箭头旋转和列表隐藏
- **交互**：通过 `linkcccp_recentnotes.inline.ts` 注册点击事件，监听 `nav` 事件适配 SPA

### 默认过滤

默认排除首页（`index.md`），避免将主页出现在最近笔记列表中。如需包含所有页面：

```typescript
Component.RecentNotes({ filter: () => true })
```

---

## Explorer

文件目录树组件，支持文件夹展开/收起、排序、过滤。

```
文件: quartz/components/Explorer.tsx
样式: quartz/components/styles/explorer.scss
脚本: quartz/components/scripts/explorer.inline.ts
```

### 配置项

```typescript
interface ExplorerOptions {
  title?: string // 标题，默认使用 i18n 翻译
  bare?: boolean // 精简模式：跳过外层 wrapper 和按钮，默认 false
  folderDefaultState: "collapsed" | "open" // 文件夹默认状态，默认 "collapsed"
  folderClickBehavior: "collapse" | "link" // 点击文件夹时折叠/跳转，默认 "link"
  useSavedState: boolean // 是否持久化文件夹状态到 localStorage，默认 true
  sortFn: (a: FileTrieNode, b: FileTrieNode) => number // 排序函数
  filterFn: (node: FileTrieNode) => boolean // 过滤函数
  mapFn: (node: FileTrieNode) => void // 映射函数
  order: ("sort" | "filter" | "map")[] // 执行顺序，默认 ["filter", "map", "sort"]
}
```

### 使用示例

```typescript
// 标准用法
Component.Explorer()

// 自定义标题和文件夹行为
Component.Explorer({
  title: "目录",
  folderClickBehavior: "collapse",
})

// 精简模式（由 HamburgerMenu 内部使用）
Explorer({ bare: true })
```

### `bare` 模式

`bare: true` 时 Explorer 跳过最外层 `<div class="explorer">` 和 toggle 按钮，仅渲染内容：

```html
<div class="explorer-content">
  <ul class="explorer-ul">
    ...
  </ul>
</div>
<template id="template-file">...</template>
<template id="template-folder">...</template>
```

此模式供 `HamburgerMenu` 内部使用，让外层统一管理汉堡按钮和抽屉。

---

## HamburgerMenu

整合 Explorer 和 RecentNotes 的容器组件，在移动端以汉堡菜单形式滑入/滑出，桌面端保持原有行为。

```
文件: quartz/components/linkcccp_HamburgerMenu.tsx
样式: 复用 explorer.scss + linkcccp_recentNotes.scss
```

### 配置项

```typescript
interface HamburgerMenuOptions {
  explorerTitle?: string // Explorer 标题，默认 i18n 翻译
  recentNotesTitle?: string // RecentNotes 标题
  recentNotesLimit?: number // 最大显示数，默认 10
  showTags?: boolean // 是否显示标签，默认 false
}
```

### 使用示例

```typescript
// quartz.layout.ts
Component.HamburgerMenu({
  explorerTitle: "目录",
  recentNotesTitle: "最近更新",
  recentNotesLimit: 10,
  showTags: false,
})
```

### 生成的 HTML 结构

```html
<div class="explorer">
  <!-- 复用 explorer 类 -->
  <button class="explorer-toggle mobile-explorer">
    <!-- 汉堡图标：三条横线 -->
  </button>
  <button class="explorer-toggle desktop-explorer">
    <h2>标题</h2>
    <svg class="fold"><!-- 折叠箭头 --></svg>
  </button>
  <div class="explorer-drawer">
    <!-- 移动端全屏抽屉 -->
    <div class="explorer-content">
      <!-- Explorer 树形结构 -->
      <ul class="explorer-ul">
        ...
      </ul>
    </div>
    <div class="recent-notes">
      <!-- RecentNotes 列表 -->
      ...
    </div>
  </div>
</div>
```

### 桌面端行为

- `.explorer-drawer` 通过 `display: contents` 从布局中移除
- `.explorer-content` 和 `.recent-notes` 直接作为 `.explorer` 的 flex 子项
- 点击 Explorer 标题箭头 → 仅折叠/展开目录树，不影响 RecentNotes
- 点击 RecentNotes 箭头 → 仅折叠/展开列表
- 两者的 toggle 完全独立，互不干扰

### 移动端行为

- `.explorer.collapsed` → 全屏抽屉滑出屏幕左侧
- `.explorer:not(.collapsed)` → 抽屉滑入，覆盖整个视口
- 主内容通过 `translateX(100dvw)` 被推到屏幕右侧
- 抽屉内 `.explorer-drawer` 统一滚动
- 两个组件的内部 toggle 按钮仍然可用

### 关键技术点

| CSS 类                                        | 作用                                         |
| --------------------------------------------- | -------------------------------------------- |
| `.explorer`                                   | 容器，复用原有 Explorer 移动端样式           |
| `.explorer-drawer`                            | 包裹 Explorer 内容和 RecentNotes             |
| `display: contents`                           | 桌面端消除 wrapper 对布局的影响              |
| `.explorer.collapsed .desktop-explorer .fold` | 只旋转 Explorer 自身箭头，不影响 RecentNotes |

---

## StaleNotice

自动检测文章是否过时，在文章标题下方显示红色提醒横幅。

```
文件: quartz/components/linkcccp_StaleNotice.tsx
逻辑: quartz/components/linkcccp_staleNoticeLogic.ts
样式: quartz/components/styles/linkcccp_staleNotice.scss
测试: test/linkcccp_staleNotice.test.ts
```

### 配置项

```typescript
interface StaleNoticeOptions {
  threshold: number // 过期天数阈值，默认 180
}
```

### 使用示例

```typescript
// quartz.layout.ts
Component.StaleNotice({ threshold: 180 })
```

### `stale` 字段三态

在文章 frontmatter 中设置 `stale` 字段控制行为：

| 值                 | 行为                                     |
| ------------------ | ---------------------------------------- |
| 不设置 / `default` | 自动：git 最后修改距今 > 阈值 → 显示横幅 |
| `true`             | 强制显示横幅                             |
| `false`            | 强制隐藏横幅                             |

### 判定逻辑

```
读取 frontmatter.stale
  → false  → 不显示
  → true   → 显示 "作者标记内容可能已过时"
  → 未设置 → 读取 dates.modified（git 最后提交时间）
    → 无日期    → 不显示
    → ≤ 180 天  → 不显示
    → > 180 天  → 显示 "最后更新于 X，已超过 N 天"
```

### 日期来源

通过 `CreatedModifiedDate` 插件（优先级 `["git", "frontmatter", "filesystem"]`）获取，编辑文章后 `git commit` 即可自动刷新，无需手动维护 `lastmod` 字段。

### 视觉

红色横幅（`#d13438`），`border-radius: var(--radius-medium)`，左侧带警告图标 SVG，位于文章标题和正文之间。

---

## PWA 插件

生成 Progressive Web App 所需的 manifest、Service Worker 和图标。

```
文件: quartz/plugins/emitters/linkcccp_pwa/linkcccp_pwa.tsx
```

### 配置项

```typescript
// quartz.config.ts
interface PWAOptions {
  enabled: boolean // 是否启用 PWA
  name: string // 应用全名
  shortName: string // 短名称
  description?: string // 描述
  themeColor: string // 主题色
  backgroundColor: string // 背景色
  icon?: string // 图标路径，默认 quartz/static/icon.png
}
```

### 使用示例

```typescript
// quartz.config.ts
const config: QuartzConfig = {
  configuration: {
    pwa: {
      enabled: true,
      name: "Link's Digital Garden",
      shortName: "Garden",
      description: "A personal digital garden",
      themeColor: "#284b63",
      backgroundColor: "#faf8f8",
    },
  },
}
```

### 生成文件

| 文件                         | 说明                          |
| ---------------------------- | ----------------------------- |
| `public/manifest.json`       | Web App Manifest              |
| `public/service-worker.js`   | Service Worker (基于 Workbox) |
| `public/static/icon-192.png` | PWA 图标 192x192              |
| `public/static/icon-512.png` | PWA 图标 512x512              |

### 缓存策略

| 资源类型               | 策略         | 缓存名   | 过期时间 | 说明                                         |
| ---------------------- | ------------ | -------- | -------- | -------------------------------------------- |
| HTML 页面              | NetworkFirst | `pages`  | -        | 优先从网络获取，网络不可用时回退到缓存       |
| 静态资源 (JS/CSS/图片) | CacheFirst   | `static` | 7 天     | 优先使用缓存，缓存未命中时从网络获取         |
| Google Fonts           | CacheFirst   | `fonts`  | 365 天   | 字体文件极少更新，长期缓存                   |
| 预缓存文件             | Precache     | -        | -        | 每次构建时计算 SHA256 哈希作为 revision 标识 |

### SW 更新检测

Service Worker 文件包含构建时间戳和所有静态文件的 SHA256 内容哈希：

- `service-worker.js` 顶部注入 `// Build: <ISO时间戳>` 注释，确保每次构建文件内容不同
- 预缓存列表以 `{url, revision: '<SHA256前8位>'}` 格式生成，Workbox 通过 revision 变化判断资源是否过期
- SW 注册使用 `{updateViaCache: 'none'}` 强制浏览器绕过 HTTP 缓存，确保每次都能检测到 SW 更新
- 浏览器检测到 SW 文件变化后触发 `updatefound` 事件，自动刷新页面加载最新内容
- 无需手动清除浏览器 Storage 中的数据

---

## Fluent Design 主题

项目使用 **Fluent 2** 设计语言作为视觉主题，基于 Microsoft 的 Fluent Design System。

```
文件: quartz.util/theme.ts        (CSS 自定义属性注入)
文件: quartz/styles/variables.scss (布局/间距变量)
文件: quartz/styles/base.scss      (基础样式)
文件: quartz.config.ts             (用户配置)
```

### CSS 自定义属性

构建时通过 `joinStyles()` 注入 `:root`，所有组件通过 `var()` 引用，确保主题一致：

**颜色（9 token × 2 模式）：**

| Token             | Light 值              | Dark 值                 | 用途                   |
| ----------------- | --------------------- | ----------------------- | ---------------------- |
| `--light`         | `#ffffff`             | `#1f1f1f`               | 页面背景               |
| `--lightgray`     | `#e1dfdd`             | `#484644`               | 边框、分隔线、代码背景 |
| `--gray`          | `#707070`             | `#adadad`               | 次要文字               |
| `--darkgray`      | `#242424`             | `#f5f5f5`               | 正文文字               |
| `--dark`          | `#0f0f0f`             | `#ffffff`               | 标题、强调             |
| `--secondary`     | `#0f6cbd`             | `#479ef5`               | 链接、品牌色           |
| `--tertiary`      | `#115ea3`             | `#62abf5`               | 链接 hover、选中状态   |
| `--highlight`     | `rgba(0,0,0,.04)`     | `rgba(255,255,255,.06)` | 代码行高亮             |
| `--textHighlight` | `rgba(15,108,189,.2)` | `rgba(71,158,245,.25)`  | `==高亮文字==` 背景    |

**Elevation（阴影层级）：**

| Token            | 值                                                    | 用途              |
| ---------------- | ----------------------------------------------------- | ----------------- |
| `--elevation-2`  | `0 0 2px rgba(0,0,0,.12), 0 1px 2px rgba(0,0,0,.14)`  | 代码块            |
| `--elevation-4`  | `0 0 2px rgba(0,0,0,.12), 0 2px 4px rgba(0,0,0,.14)`  | 卡片              |
| `--elevation-8`  | `0 0 2px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.14)`  | 搜索弹窗、Popover |
| `--elevation-16` | `0 0 2px rgba(0,0,0,.12), 0 8px 16px rgba(0,0,0,.14)` | 最高层级对话框    |

**Radius（圆角等级）：**

| Token             | 值    | 用途                           |
| ----------------- | ----- | ------------------------------ |
| `--radius-none`   | `0`   | 无圆角                         |
| `--radius-small`  | `2px` | 内联代码、checkbox、滚动条滑块 |
| `--radius-medium` | `4px` | 主要 UI 元素、代码块、卡片     |
| `--radius-large`  | `6px` | 图片、视频                     |
| `--radius-xlarge` | `8px` | 搜索弹窗                       |

### 字体

| 角色 | 字体           | Weights       |
| ---- | -------------- | ------------- |
| 标题 | Inter          | 400, 600, 700 |
| 正文 | Inter          | 400, 500, 600 |
| 代码 | JetBrains Mono | 400, 500      |

Inter 是 Segoe UI 在 Google Fonts 上的最佳替代，比例和可读性相近。

### 主要视觉变更（vs 默认 Quartz）

| 元素           | 默认 Quartz                   | Fluent 版本                           |
| -------------- | ----------------------------- | ------------------------------------- |
| 内链样式       | 背景色高亮                    | 蓝色文字 + hover 下划线               |
| 代码块         | `border: 1px solid`           | `box-shadow: var(--elevation-2)`      |
| 引用块左边框   | `3px`                         | `4px`                                 |
| 页面网格间隙   | `5px`                         | `8px`（4px 基网格）                   |
| 过渡曲线       | `ease`                        | `ease-in-out`                         |
| 过渡时长       | `0.1s` / `0.2s` / `0.3s` 混用 | `100ms` / `200ms` / `300ms` 标准      |
| Focus 可见样式 | 无                            | `outline: 2px solid var(--secondary)` |
| Footer 透明度  | `0.7`                         | `0.85`                                |
| 标题字重       | `700`                         | `600`                                 |

### 自定义主题

修改 `quartz.config.ts` 中的 `theme` 配置即可覆盖颜色和字体：

```typescript
theme: {
  typography: {
    header: { name: "Inter", weights: [400, 600, 700] },
    body: { name: "Inter", weights: [400, 500, 600] },
    code: { name: "JetBrains Mono", weights: [400, 500] },
  },
  colors: {
    lightMode: { /* 9 个颜色值 */ },
    darkMode: { /* 9 个颜色值 */ },
  },
}
```

间距、圆角、阴影等 token 定义在 `quartz/util/theme.ts` 和组件 SCSS 文件中，需通过修改源码调整。

---

## Windows-WSL 同步脚本

在 Windows 下用 Obsidian 编辑文章，WSL 中运行脚本同步内容并构建站点。

```
文件: scripts/sync-content.sh
```

### 工作原理

从 Windows 路径 `C:\Users\Yazov\OneDrive\Blog\content` 同步到 WSL 路径 `~/source/quartz/content/`，执行四步：

1. **复制文件**：优先用 `rsync --delete`（需 `sudo apt install rsync`），无 rsync 时回退到 `cp --update`
2. **移除草稿**：扫描 frontmatter 中 `draft: true` 的文章并从 WSL 侧删除
3. **转换行尾**：将 CRLF 转换为 LF（`sed -i 's/\r$//'`）
4. **完成**

### 使用

```bash
# WSL 中执行
./scripts/sync-content.sh && npx quartz build
```

### 同步范围

- `*.md`（Markdown 文章）
- `*.png`, `*.jpg`, `*.jpeg`, `*.gif`, `*.svg`, `*.webp`（图片）
- `*.pdf`（文档）

`.obsidian` 配置目录和 `draft: true` 文件不会被同步。`index.md` 等 WSL 侧独有文件不受影响（仅在 Windows 侧也存时才覆盖）。

---

## RSS 订阅

站点默认提供 RSS Feed，同时支持浏览器自动发现和 Footer 直达链接。

### 配置

- **`baseUrl`**（`quartz.config.ts`）：需设为真实域名（当前：`www.linkcf.top`）
- **`rssLimit`**（ContentIndex 插件）：默认 `0` 表示输出全部笔记；设为正整数则限制条目数
- **Footer 链接**：`quartz.layout.ts` 中已添加 `RSS: "/index.xml"`

### 发现方式

| 途径          | 说明                                                                     |
| ------------- | ------------------------------------------------------------------------ |
| `<head>` 标签 | `<link rel="alternate" type="application/rss+xml">` — RSS 阅读器自动检测 |
| Footer 链接   | 页面底部 `RSS` 链接 — 人类访客可见                                       |

### 自定义限制

```typescript
// quartz.config.ts - 仅输出最近 10 条
Plugin.ContentIndex({
  enableSiteMap: true,
  enableRSS: true,
  rssLimit: 10,
})
```
