---
title: 取消Microsoft Edge浏览器输入网址自动转为https
tags:
  - Edge
  - Windows
  - Https
  - Http
date: 2025-09-06
draft: false
description: 在edge浏览器输入网址的时候，edge浏览器会自动把协议转为https，这是为了安全着想，但是有时候我不需要它这样做，这篇文章就会帮到你
lastmod: 2025-12-28
cover: https://img.linkcf.top/2025/12/20251229122408477.webp
stale: default
---

## Edge浏览器Https协议转为Http

1. 地址栏输入你要访问的http网址，并访问（此时会自动转成https，这一步不能跳过，接下来继续）
2. 输入`edge://net-internals`
3. 选择`domain security policy`
   ![edge](https://img.linkcf.top/imgcenter/2024/10/a0736b906203af022b97966267f3909e.jpeg)
4. 右侧的 `Query HSTS/PKP domain` 下的输入框中输入你要访问的网址（不带`http://前缀`），点击输入框后的 `Query` 按钮
5. 如果列出一堆东西，那么继续；如果列出 `Not found`，那么返回第1步重新执行
6. 在右侧的 `Delete domain security policies` 下的输入框中输入你要访问的网址（`不带http://前缀`），点击输入框后的 `Delete` 按钮
7. 再次进入第5步操作，如果列出 `Not found`，那么问题解决，地址栏输入`你要访问的http网址（带http://前缀`）
