---
title: YouTube Music Telegram Bot 部署指南：自动化监控收藏夹同步
date: 2026-02-07
lastmod: 2026-02-07
tags:
  - Telegram
  - Bot
  - Youtube
  - Python
draft: false
description: 本指南详细介绍如何部署一个能够自动监控 YouTube 收藏夹并将音乐同步到 Telegram 频道的机器人。包含环境配置、核心代码、操作指令和常见问题排查，支持定时扫描和手动触发。
cover:
stale: default
---

# 🎵 YouTube Music Telegram Bot 部署指南 (v2.0 自动化监控版)

本机器人基于 `yt-dlp` 开发，专门针对机房 IP 做了深度优化。除了手动发送链接下载外，它还能**定时自动扫描你的 YouTube 收藏夹**并同步至 Telegram 频道。

## 🛠️ 0.环境依赖更新

### 系统 Python 安装

大多数 Linux 服务器预装了 Python，但可能不是最新版。

```Bash
# 更新系统软件包列表
sudo apt update && sudo apt upgrade -y

# 安装 Python 3 及基础开发组件
sudo apt install python3 python3-pip python3-venv -y

# 验证版本
python3 --version
```

**管理虚拟环境（Virtual Environment）**

> [!important]
> 注意：以下安装操作都在虚拟环境中进行，包括运行main.py也是在虚拟环境中安装

**强烈建议**为每个项目创建独立的虚拟环境，以避免不同项目间的依赖冲突

| **操作**     | **命令**                          |
| ------------ | --------------------------------- |
| **创建环境** | `python3 -m venv my_env_name`     |
| **激活环境** | `source my_env_name/bin/activate` |
| **退出环境** | `deactivate`                      |

### **FFmpeg**: 音频转码核心

```bash
sudo apt install ffmpeg
```

### **Deno**: 用于解析 YouTube JavaScript 挑战

#### 1. 一键脚本安装

在终端中运行以下官方安装脚本：

```Bash
curl -fsSL https://deno.land/install.sh | sh
```

#### 2. 配置环境变量

安装完成后，你需要告诉系统 `deno` 程序在哪里。

1. **打开配置文件**：
   ```Bash
   nano ~/.bashrc
   ```
2. **在文件末尾添加以下三行内容**（通常脚本会自动提示你，如果没有请手动添加）：
   ```Bash
   export DENO_INSTALL="$HOME/.deno"
   export PATH="$DENO_INSTALL/bin:$PATH"
   ```
3. **使配置立即生效**：

   ```Bash
   source ~/.bashrc
   ```

#### 3. 验证安装

输入以下命令，如果看到版本号，说明安装成功：

```Bash
deno --version
```

### **Python 依赖**:

```python
pip install python-telegram-bot yt-dlp apscheduler
```

### Screen安装

```bash
# 更新软件包列表
sudo apt update

# 安装 screen
sudo apt install screen -y

# 验证安装是否成功
screen --version
```

### YouTube Cookies

**安装这个cookies导出扩展** [Get cookies.txt LOCALLY - Chrome 应用商店](https://chromewebstore.google.com/detail/get-cookiestxt-locally/cclelndahbckbenkjhflpdbgdldlbecc) 导出cookies。把cookies导入到服务器，然后和 `main.py` 同一个文件夹

### Telegram Bot Token

1. 在tg上搜索 `@BotFather` 注意要是带蓝勾认证的。然后 `/start` 开始，输入 `/newbot` 它会提示name和username，name是看到的名字， `username` 是唯一的以 `bot` 结尾的名字。之后它会返回 `HTTP API` 这个就是token。注意，这个api上传的文件不能大于 `50MB`
2. 创建一个channel，把bot加入进来作为管理员，并且有 `Post Messages` 权限
3. 返回主页搜索 `@userinfobot` ，选择自己刚刚创建的channel，然后选择 `发送（send）` ，获取channel id，以 `-100` 开头的。

## 📂 1. 核心文件清单

### 📄 `main.py` (全功能自动版)

```Python
# -*- coding: utf-8 -*-
import os, asyncio, yt_dlp
from telegram import Update
from telegram.ext import ApplicationBuilder, MessageHandler, filters, ContextTypes, CommandHandler
from apscheduler.schedulers.asyncio import AsyncIOScheduler

BOT_TOKEN = '你的TOKEN'
CHANNEL_ID = -100XXXXXXXXXX
# 监控的播放列表链接 (如：我的收藏夹)
MONITOR_PLAYLIST = 'https://www.youtube.com/playlist?list=你的列表ID'
# 检查频率 (分钟)
CHECK_INTERVAL = 30
# 历史记录文件，防止重复同步
HISTORY_FILE = "downloaded.txt"
# ==========================================

def get_history():
    if not os.path.exists(HISTORY_FILE): return set()
    with open(HISTORY_FILE, "r") as f:
        return set(line.strip() for line in f)

def add_to_history(video_id):
    with open(HISTORY_FILE, "a") as f:
        f.write(f"{video_id}\n")

async def download_and_send_logic(bot, url, label="手动推送"):
    ydl_opts = {
        'format': 'bestaudio/best',
        'cookiefile': 'cookies.txt',
        'javascript_runtime': 'deno',
        'remote_components': ['ejs:github'],
        'outtmpl': 'downloads/%(title)s.%(ext)s',
        'postprocessors': [{'key': 'FFmpegExtractAudio','preferredcodec': 'mp3','preferredquality': '320'}],
        'quiet': True,
    }
    try:
        loop = asyncio.get_event_loop()
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            info = await loop.run_in_executor(None, lambda: ydl.extract_info(url, download=True))
            file_path = os.path.splitext(ydl.prepare_filename(info))[0] + ".mp3"
            with open(file_path, 'rb') as f:
                await bot.send_audio(
                    chat_id=CHANNEL_ID,
                    audio=f,
                    title=info.get('title'),
                    performer=info.get('uploader'),
                    caption=f"🌟 {label}\n🎵 {info.get('title')}\n🔗 {url}",
                    write_timeout=120
                )
            if os.path.exists(file_path): os.remove(file_path)
            return True
    except Exception as e:
        print(f"❌ 任务失败 [{url}]: {e}")
        return False

async def auto_check_playlist(application):
    print("🔄 开始扫描播放列表...")
    history = get_history()
    ydl_opts = {'cookiefile': 'cookies.txt','javascript_runtime': 'deno','extract_flat': True}
    try:
        loop = asyncio.get_event_loop()
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            info = await loop.run_in_executor(None, lambda: ydl.extract_info(MONITOR_PLAYLIST, download=False))
            if 'entries' not in info: return
            for entry in info['entries']:
                v_id = entry['id']
                if v_id not in history:
                    v_url = f"https://www.youtube.com/watch?v={v_id}"
                    if await download_and_send_logic(application.bot, v_url, "收藏夹同步"):
                        add_to_history(v_id)
                        await asyncio.sleep(5)
    except Exception as e:
        print(f"❌ 自动扫描异常: {e}")

async def force_check(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("🔎 正在立即执行同步...")
    await auto_check_playlist(context.application)
    await update.message.reply_text("✅ 同步检查完成。")

async def on_startup(application):
    # 注册指令菜单
    await application.bot.set_my_commands([("start", "查看说明"), ("check", "立即同步")])
    # 开启定时任务
    scheduler = AsyncIOScheduler()
    scheduler.add_job(auto_check_playlist, 'interval', minutes=CHECK_INTERVAL, args=[application])
    scheduler.start()
    # 启动即刻抓取一次
    asyncio.create_task(auto_check_playlist(application))

if __name__ == '__main__':
    if not os.path.exists('downloads'): os.makedirs('downloads')
    app = ApplicationBuilder().token(BOT_TOKEN).build()
    app.post_init = on_startup
    app.add_handler(CommandHandler("check", force_check))
    app.add_handler(MessageHandler(filters.TEXT & (~filters.COMMAND), lambda u, c: download_and_send_logic(c.bot, u.message.text)))
    app.run_polling()
```

---

## 🚀 2. 常用操作指令集

### 🏃启动&后台管理

```Bash
# 进入窗口
screen -S music_bot
# 进入虚拟环境 venv_name是自己设置的
source venv_name/bin/activate
# 运行
python main.py
# 挂起窗口
Ctrl + A, 然后按 D
# 恢复窗口
screen -r music_bot
```

### 🤖 Telegram 指令

- `/start`: 初始化并查看帮助。
- `/check`: **立即触发**一次收藏夹扫描，无需等待 30 分钟周期。

---

## 🆘 3. 常见问题排查 (New)

| **现象**                              | **原因**           | **解决方法**                                                         |
| ------------------------------------- | ------------------ | -------------------------------------------------------------------- |
| `RuntimeError: no running event loop` | 定时器启动时机不对 | 确保使用 `app.post_init` 钩子启动 `scheduler`。                      |
| 启动时没有立即抓取                    | 缺少异步任务触发   | 在 `post_init` 中添加 `asyncio.create_task()`。                      |
| 指令不显示                            | 菜单未注册         | 使用 `/setcommands` 给 @BotFather 或在代码中运行 `set_my_commands`。 |

---

## 📅 4. 进阶维护建议

1. **批量预填充历史**：如果是第一次运行且收藏夹已有大量歌曲，建议先将所有视频 ID 写入 `downloaded.txt`，否则会瞬间触发大量下载导致被封。
2. **频率控制**：代码中加入了 `asyncio.sleep(5)`，同步大量歌曲时请勿将此值设为 0。
