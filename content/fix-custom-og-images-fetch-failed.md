---
title: 修复CustomOgImages Fetch Failed
tags:
  - Fix
  - Quartz
  - Error
  - CustomOgImages
date: 2025-09-06
draft: false
description: 解决 Quartz 构建时 CustomOgImages fetch failed 报错：安装缺失字体及 Canvas 依赖，修复 Open Graph 图片生成失败问题。
lastmod: 2025-12-28
cover: https://img.linkcf.top/2025/12/20251229122816661.webp
stale: default
---

# Quartz 构建报错 `CustomOgImages fetch failed` 的完整解决方案

在使用 [Quartz](https://quartz.jzhao.xyz/) 构建站点时，如果启用了 `CustomOgImages` 插件，可能会遇到类似报错：

```powershell
 Failed to emit from plugin `CustomOgImages`: fetch failed
     at node:internal/deps/undici/undici:13510:13
     at processTicksAndRejections (node:internal/process/task_queues:105:5)
     at fetchTtf (../util/og.tsx:112:24)
     at ../util/og.tsx:44:18
     at async Promise.all (index 0)
     at async Promise.all (index 1)
     at getSatoriFonts (../util/og.tsx:54:36)
     at Object.emit (../plugins/emitters/ogImage.tsx:116:21)
     at ../processors/emit.ts:24:28
     at async Promise.all (index 10)
```

这通常是因为 Quartz 默认从 **Google Fonts** 在线拉取字体，而构建环境无法访问外网或字体 URL 无效。

本文介绍如何改为**本地字体加载**，彻底解决该问题，并优化构建速度。

---

## 🔍 问题原因

1. Quartz 默认配置：会通过 `fetch` 从 Google Fonts 下载 `.ttf` 文件。

```ts
fontOrigin: "googleFonts"
```

2. 在 CI/CD 或无法访问 Google 的环境下，这些网络请求会失败，导致 `CustomOgImages` 插件生成 OG 图片时报错。

## 🔥 解决方案：改成本地字体加载

### 1. 修改 Quartz 配置

在 `quartz.config.ts` 中将 `fontOrigin` 改为 `local`：

```ts
theme: {
  fontOrigin: "local", // 改为本地字体
  cdnCaching: true,
  typography: {
    header: "Schibsted Grotesk",
    body: "Source Sans Pro",
    code: "IBM Plex Mono",
  },
  ...
}

```

### 2. 下载字体文件

下载你在 Quartz 配置中使用的字体，保存为 `.ttf` 文件。

例如你的配置需要：

| 字体名            | 权重 | 文件名                         |
| ----------------- | ---- | ------------------------------ |
| Schibsted Grotesk | 400  | `SchibstedGrotesk-Regular.ttf` |
| Schibsted Grotesk | 700  | `SchibstedGrotesk-Bold.ttf`    |
| Source Sans Pro   | 400  | `SourceSansPro-Regular.ttf`    |
| Source Sans Pro   | 700  | `SourceSansPro-Bold.ttf`       |
| IBM Plex Mono     | 400  | `IBMPlexMono-Regular.ttf`      |

将这些字体文件放入：

`static/fonts/` 注意：是在项目根目录下创建`static/fonts/`文件夹

最终目录：

```
static/fonts/SchibstedGrotesk-Regular.ttf
static/fonts/SchibstedGrotesk-Bold.ttf
static/fonts/SourceSansPro-Regular.ttf
static/fonts/SourceSansPro-Bold.ttf
static/fonts/IBMPlexMono-Regular.ttf
```

### 3. 修改 `fetchTtf` 函数

打开 `util/og.tsx`，找到 `fetchTtf` 函数，替换为以下内容：

```ts
import path from "path"
import { promises as fs } from "fs"
import { FontWeight } from "satori/wasm"

/**
 * 改为本地加载字体，不再请求 Google Fonts
 */
export async function fetchTtf(
  rawFontName: string,
  weight: FontWeight,
): Promise<Buffer<ArrayBufferLike> | undefined> {
  const fontMap: Record<string, Record<number, string>> = {
    "Schibsted Grotesk": {
      400: path.join(process.cwd(), "static/fonts/SchibstedGrotesk-Regular.ttf"),
      700: path.join(process.cwd(), "static/fonts/SchibstedGrotesk-Bold.ttf"),
    },
    "Source Sans Pro": {
      400: path.join(process.cwd(), "static/fonts/SourceSansPro-Regular.ttf"),
      700: path.join(process.cwd(), "static/fonts/SourceSansPro-Bold.ttf"),
    },
    "IBM Plex Mono": {
      400: path.join(process.cwd(), "static/fonts/IBMPlexMono-Regular.ttf"),
    },
  }

  try {
    const fontPath = fontMap[rawFontName]?.[weight]
    if (!fontPath) {
      console.warn(`⚠️ 未找到字体 ${rawFontName} weight ${weight}`)
      return undefined
    }
    return await fs.readFile(fontPath)
  } catch (err) {
    console.error(`❌ 读取本地字体失败: ${err}`)
    return undefined
  }
}
```

同时可以删除旧的网络 `fetch` 逻辑：

```ts
// const cssResponse = await fetch(...)
// const css = await cssResponse.text()
// const urlRegex = ...
// const fontResponse = await fetch(match[1])
```

### 4. 重新构建

执行：

`npx quartz build --serve`

Quartz 现在会直接从本地读取字体文件，`CustomOgImages` 插件不再依赖网络，构建稳定。
