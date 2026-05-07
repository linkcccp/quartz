---
title: 欧陆风云4修复在决议中中文文本显示错误问题
tags:
  - EU4
  - Mod
  - Game
date: 2025-09-06
draft: false
description: 本文章解决在决议里中文文本显示错误的问题
lastmod: 2025-12-28
cover: https://img.linkcf.top/2025/12/20251229115638571.webp
stale: default
---

## EU4解决在决议、事件、省份等文本文件中文显示不全问题

- 更改文件编码为`ISO 8859-1`
  ![文件编码](https://img.linkcf.top/imgcenter/2024/10/ff67f60fe972308f5673b3a5423086f1.jpeg)

## test

- 编写了一个决议，招募一个将军，名字就姑且叫`戚继光`
  ![编码](https://img.linkcf.top/imgcenter/2024/10/7d110472f539262dd469e60e6dd2ce93.jpeg)
- 如果以`utf-8`编码保存，可以看到会有中文字符显示不全
  ![vscode](https://img.linkcf.top/imgcenter/2024/10/3d0a9658f1749f04d6685abd7478c86a.jpeg)
  ![test](https://img.linkcf.top/imgcenter/2024/10/d2350504936d54ba7694555b5b64de6b.jpeg)

<br>

- 如果以`ISO 8859-1`编码保存，完美
  ![ISO 8859-1](https://img.linkcf.top/imgcenter/2024/10/613741f1fc1a679673141577ab91d392.jpeg)
  ![completed](https://img.linkcf.top/imgcenter/2024/10/41c00008781902a3fcd2fe769f40bed8.jpeg)

## 引用

- [ParaTranz](https://paratranz.cn/utilities/converter)

## CC协议

- 本作品 已获得许可 [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)
