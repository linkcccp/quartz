---
title: 欧陆风云4政府改革图标修改
tags:
  - EU4
  - Mod
  - Paradox
  - Game
  - GovernmentIcon
date: 2025-09-06
draft: false
description: 教你如何修改政府改革图标
lastmod: 2025-12-28
cover: https://img.linkcf.top/2025/12/20251229115638571.webp
stale: default
---

- [欧陆风云4政府改革图标修改](#欧陆风云4政府改革图标修改)
  - [前提](#前提)
  - [开始](#开始)
  - [测试](#测试)
  - [引用](#引用)
  - [CC协议](#cc协议)

## 欧陆风云4政府改革图标修改

### 前提

1. 拥有PS
2. 下载并安装插件[NVIDIA Texture Tools Exporter](https://developer.nvidia.com/nvidia-texture-tools-exporter)
3. 一个文本编辑器（[vscode](https://code.visualstudio.com/)）

选择右边的PS插件形式下载，他会要求登录NVIDIA账号，登录之后就可以下载。

![NVIDIA Texture Tools Exporter](https://img.linkcf.top/imgcenter/2024/10/d0f3eae00ba2db88c9629794a3e41128.png)

安装`NVIDIA Texture Tools Exporter`插件
![NVIDIA Texture Tools Exporter](https://img.linkcf.top/imgcenter/2024/10/c3fedb34a142ae581f7b359aa50e8fdb.jpeg)
![NVIDIA Texture Tools Exporter](https://img.linkcf.top/imgcenter/2024/10/ff335f5da8c79b7ec974767a28c8d2b0.jpeg)

插件会自动找到PS的安装目录

![install](https://img.linkcf.top/imgcenter/2024/10/00ec149b9ae3cb65a4e2273d091c028f.jpeg)
![install](https://img.linkcf.top/imgcenter/2024/10/b70f6ff24a780a7a1a2f4072dbca239d.jpeg)

### 开始

1. 创建一个mod
2. 在mod根目录创建`gfx`文件夹，gfx文件夹里创建`interface`文件夹，再在interface文件夹里创建`government_reform_icons`文件夹，这里面就是存放`政府改革图标`。
3. 以天朝为例，随便找一张图片，裁剪为`51x51`像素
   ![Ming](https://img.linkcf.top/imgcenter/2024/10/7804df8d2b5bbfc7dfced543ccfa8ab7.png)
   在用PS随便打开一个游戏原本的政府改革图标文件，使用移动工具将图片移到上面去，上下左右各留三个像素，然后合并图层。
   ![Ming](https://img.linkcf.top/imgcenter/2024/10/932ce6bc6aa9f5a04ad9b15f82067b19.png)
   存储为`dds格式`，名称随意，但请不要设为中文，我这里这里就写`test`
   ![Ming](https://img.linkcf.top/imgcenter/2024/10/dcf24bd1c88ab3e84a142e27c65a5913.png)
   会弹出一个窗口，`format`选择`8.8.8.8 BGRA 32 bpp | unsigned`，其他的不动，点击`save`保存
   ![Ming](https://img.linkcf.top/imgcenter/2024/10/51266847699e8275fd20a325b063e191.jpeg)
   在`gfx/interface/government_reform_icons`文件夹下就有一个dds文件
   ![Ming](https://img.linkcf.top/imgcenter/2024/10/00a67b9e8190ee3e60b209a4a1036544.jpeg)

4. 在mod根目录创建`interface`文件夹，interface文件夹里创建一个`gfx文件`，名称随意，不要和游戏原本文件重名，我这里创建为`mod_test.gfx`
   ![test](https://img.linkcf.top/imgcenter/2024/10/277a39c48c175d744c948b39345382e8.png)
5. 用文本编辑器打开gfx文件

   ```
   # 按照模板填写
    spriteTypes = {
        spriteType = {
            name = "government_reform_<icon_name>"
            texturefile = "gfx//interface//government_reform_icons//<icon_name>.dds"
        }
    }
   ```

   ```
   # mod_test.gfx文件填写以下代码，保存
   spriteTypes = {
       spriteType = {
           name = "government_reform_test"
           texturefile = "gfx//interface//government_reform_icons//test.dds"
       }
   }
   ```

6. 在mod根目录创建`common`文件夹，将`government_reforms`文件夹复制过来，只留下`01_government_reforms_monarchies.txt`这一个文件，打开，搜索`celestial_empire`，将`icon`后面的值替换为`test`，保存
   ![test](https://img.linkcf.top/imgcenter/2024/10/37c61fe3779860bfc79f23964f4e62b4.jpeg)

### 测试

![test](https://img.linkcf.top/imgcenter/2024/10/fc9cfd2a920e714e63e837100dc2c35b.jpeg)
成功

### 引用

- [欧陆风云4中文wiki-政府修改](https://www.eu4cn.com/wiki/%E6%94%BF%E5%BA%9C%E4%BF%AE%E6%94%B9)
- [Europa Universalis 4 - Government modding](https://eu4.paradoxwikis.com/Government_modding)
- [NVIDIA Texture Tools Exporter](https://developer.nvidia.com/nvidia-texture-tools-exporter)
- [vscode](https://code.visualstudio.com/)

### CC协议

本作品 许可于以下 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1)
