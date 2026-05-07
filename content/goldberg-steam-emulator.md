---
title: 为游戏配置steam环境
date: 2026-02-03
lastmod: 2026-02-03
tags:
  - steam
  - goldberg
draft: false
description:
cover:
stale: default
---

为游戏生成 Goldberg Steam Emulator 的配置文件，通常分为**基础配置**和**高级功能配置**两部分。

以下是分步操作指南：

---

## 第一步：获取基础 AppID（必须）

这是最关键的一步，模拟器必须知道你在运行哪个游戏。

1. 前往 [SteamDB](https://steamdb.info/)。
2. 搜索你的游戏名称，记下顶部的 **App ID**（例如：_星露谷物语是 413150_）。
3. 在游戏 dll（`steam_api64.dll`）所在目录下，新建一个 `steam_appid.txt`，把这个数字填进去并保存。

---

## 第二步：生成接口文件 `steam_interfaces.txt`（可选/推荐）

生成 **interfaces**（接口文件）主要是为了告诉模拟器，这个游戏到底在用 Steam 的哪个版本的功能。以下是详细的操作步骤，分为**简单拖拽法**和**命令行法**。

---

## 🛠️ 方法一：简单拖拽法（最推荐）

这是最直观的方法，不需要输入任何代码：

1. **找到原版文件**：在游戏目录中找到**原始的** `steam_api.dll` 或 `steam_api64.dll`（注意：必须是游戏自带的原版，不能是已经替换过的 Goldberg 模拟器文件）。
2. **定位工具**：找到 Goldberg 压缩包内的 `tools` 文件夹，里面有一个 `generate_interfaces_file.exe`。
3. **拖拽操作**：鼠标左键长按**原版 DLL 文件**，直接拖到 `generate_interfaces_file.exe` 图标上面松开。
4. **完成**：程序会自动运行并在同目录下生成一个名为 `steam_interfaces.txt` 的文件。

---

## 💻 方法二：命令行法（当拖拽无效时）

如果拖拽没有反应，或者窗口一闪而过没生成文件，请尝试这种更稳妥的方法：

1. 将原版的 `steam_api.dll`（或 64 位版本）拷贝到工具 `generate_interfaces_file.exe` 所在的文件夹里。
2. 在文件夹的**地址栏**输入 `cmd` 然后按回车，打开黑色窗口。
3. 在窗口中输入以下命令并按回车：
   - 如果是 32 位：`generate_interfaces_file.exe steam_api.dll`
   - 如果是 64 位：`generate_interfaces_file.exe steam_api64.dll`

4. 此时窗口会显示处理进度，成功后 `steam_interfaces.txt` 就会出现在文件夹里。

---

## 📂 生成后该怎么办？

生成这个文件后，你需要把它放到正确的位置，模拟器才能读取：

- **放置位置**：将生成的 `steam_interfaces.txt` 拷贝到游戏程序所在目录。
- **确保同级**：它必须和 Goldberg 模拟器的 `steam_api(64).dll` 以及 `steam_appid.txt` **放在一起**。

### ⚠️ 关键提示：

- **一定要用原版 DLL**：如果你不小心把 Goldberg 的 DLL 拖进去了，生成的 txt 文件里只有几行甚至为空，游戏将无法启动。
- **为什么要生成它？**：如果你的游戏发布于 **2016 年 5 月之前**，这个文件几乎是必须的；如果是新游戏，不放这个文件通常也能跑。

---

---

## 第三步：生成 DLC 列表

如果你想解锁所有 DLC，可以手动创建：

1. 在 dll 旁边新建文件夹，命名为 **`steam_settings`**。
2. 在里面新建 **`DLC.txt`**。
3. 格式为 `AppID=DLC名称`。
   - _例如：_ `123456=My Super DLC`
   - _懒人技巧：_ 如果你不知道具体的 DLC ID，通常只要创建一个空的 `DLC.txt`，模拟器有时会默认尝试返回“已购买”。

---

## 第四步：使用脚本自动生成（进阶）

如果你想完美模拟**成就（Achievements）**和**统计数据（Stats）**，手动写 JSON 太麻烦，可以使用模拟器源码自带的脚本：

1. 你需要安装 [Python](https://www.python.org/)。
2. 定位到模拟器源码中的 `scripts\stats_schema_achievement_gen\` 目录。
3. 运行 `achievements_gen.py`，它会尝试从 Steam 的缓存或在线数据中抓取该游戏的成就定义，并自动生成 `achievements.json`。

---

## 常用配置项对照表

所有这些文件都应放在 `steam_settings` 文件夹内：

| **文件名**                   | **内容示例** | **作用**                      |
| ---------------------------- | ------------ | ----------------------------- |
| **`force_language.txt`**     | `schinese`   | 强制游戏显示简中              |
| **`force_account_name.txt`** | `YourName`   | 强制修改你的游戏昵称          |
| **`offline.txt`**            | (留空即可)   | 让游戏认为 Steam 处于离线状态 |
| **`disable_overlay.txt`**    | (留空即可)   | 禁用模拟器的 Shift+Tab 覆盖层 |

---

## 💡 快速检查清单

你的游戏目录最终看起来应该是这样的：

- `steam_api64.dll` (模拟器版)
- `steam_appid.txt` (写着 AppID)
- `steam_settings/` (文件夹)
  - `DLC.txt`
  - `force_language.txt`

**你需要我帮你查询某个具体游戏的 AppID 或者 DLC 列表格式吗？**
