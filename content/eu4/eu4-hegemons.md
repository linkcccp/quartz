---
title: 欧陆风云4霸权解除硬限制
tags:
  - Game
  - Paradox
  - EU4
  - Mod
date: 2025-09-06
draft: false
description: 欧陆风云4三个霸权想要获取需要一些前置条件，导致在前期根本没有霸权，感觉不灵活，所以去掉限制。
lastmod: 2025-12-28
cover: https://img.linkcf.top/2025/12/20251229115638571.webp
stale: default
---

## 欧陆风云4霸权解除硬限制

- 修改`/common/hegemons/`下的三个文件
- `0_economic_hegemon.txt`是经济霸权，注释掉或者删掉`monthly_income = 1000`就可以了
- `1_naval_hegemon.txt`是海军霸权，注释掉或者删掉`navy_size = 500`
- `2_military_hegemon.txt`，是军事霸权，注释掉或者删掉`army_size = 1000`

## 图片

- 经济霸权
  ![经济霸权](https://img.linkcf.top/imgcenter/2024/10/39a3b657caaf2383de082c9fc125f8b9.png)

- 海军霸权
  ![海军霸权](https://img.linkcf.top/imgcenter/2024/10/12202beea08cf9f494817862de4ca64f.png)

- 军事霸权
  ![军事霸权](https://img.linkcf.top/imgcenter/2024/10/ce88d0d665bf3dd03ef3341619cdea2d.png)

- 另外再说一句，`base = {这里的就是获得霸权取得的修正}`，`scale = {这里就是霸权力量增长到100%的修正}`，`max = {这里就是当霸权力量增长到最大值另外获得的修正}`

## Test

- 经济霸权
  ![经济霸权](https://img.linkcf.top/imgcenter/2024/10/b0193ed44c44f821e9000254f480aa88.png)
- 海军霸权
  ![海军霸权](https://img.linkcf.top/imgcenter/2024/10/8133eeaffa31e6b291c0e604b77c4d41.png)
- 军事霸权
  ![军事霸权](https://img.linkcf.top/imgcenter/2024/10/de579b800fa5e1c9ab9f0d681b8d460e.png)
