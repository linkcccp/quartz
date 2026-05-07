---
title: git-start
date: 2026-02-02
lastmod: 2026-02-02
tags:
draft: false
description:
cover:
stale: default
---

# Git 初次配置完全指南

配置 Git 就像是给你的代码仓库发一张“身份证”，让系统知道谁在提交代码。以下是核心配置步骤。

---

## 一、 基础用户信息配置（必须）

这是最重要的一步。Git 的每一条提交记录都会包含这些信息。

```bash
# 设置你的用户名
git config --global user.name "你的名字"

# 设置你的邮箱地址
git config --global user.email "your_email@example.com"
```

> **注意：** `--global` 参数表示这些配置会应用在你电脑上所有的 Git 仓库中。

### 检查配置信息

Bash

```
# 查看所有配置项
git config --list

# 只查看用户名
git config user.name
```

---

## 二、 默认分支配置 (Main)

目前业界（包括 GitHub 和 GitLab）已普遍转向使用 **`main`** 作为默认分支名。

### 1. 设置全局默认分支名

让 Git 在以后新建项目（`git init`）时自动将主分支命名为 `main`：

Bash

```
git config --global init.defaultBranch main
```

### 2. 修改现有项目的分支名

如果你已经初始化了仓库且分支名叫 `master`，可以将其重命名：

Bash

```
git branch -m main
```

### 3. 检查是否生效

Bash

```
git config --global init.defaultBranch
# 如果输出 main，说明配置成功
```

---

## 三、 SSH 免密连接配置 (Ed25519)

**Ed25519** 是目前更推荐的加密算法，比传统的 RSA 更安全且性能更好。

### 1. 生成密钥对

Bash

```
ssh-keygen -t ed25519 -C "your_email@example.com"
```

- **保存路径**：直接按 **回车**（默认 `~/.ssh/id_ed25519`）。
- **设置密码**：直接按 **回车** 跳过（实现完全免密）。

### 2. 将密钥添加到 SSH Agent (可选)

```Bash
# 启动代理
eval "$(ssh-agent -s)"

# 添加密钥
ssh-add ~/.ssh/id_ed25519
```

### 3. 在 GitHub/GitLab 中添加公钥

1. **复制公钥内容**：

   ```Bash
   cat ~/.ssh/id_ed25519.pub
   ```

2. **粘贴到平台**：
   - 登录 GitHub -> **Settings** -> **SSH and GPG keys** -> **New SSH key**。
   - 将复制的以 `ssh-ed25519` 开头的内容全部粘贴进去。

### 4. 测试连接

```Bash
ssh -T git@github.com
```

看到 `Hi [用户名]! You've successfully authenticated...` 即表示成功。

---

## 四、 进阶建议

### 1. 检查远程连接类型

如果你的项目每次推送都要输密码，说明可能误用了 HTTPS 协议。

```Bash
# 查看远程仓库地址
git remote -v
```

### 2. 切换 HTTPS 为 SSH

如果看到地址是以 `https://` 开头的，建议切换为 SSH 模式：

```Bash
git remote set-url origin git@github.com:用户名/仓库名.git
```

---
