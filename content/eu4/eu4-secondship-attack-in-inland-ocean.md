---
title: 欧陆风云4浆帆船在内海及沿海的攻击力加成
tags:
  - Game
  - Paradox
  - EU4
  - Mod
date: 2025-09-06
draft: false
description: 欧陆风云4浆帆船在内海及沿海的攻击力加成
lastmod: 2025-12-28
cover: https://img.linkcf.top/2025/12/20251229115638571.webp
stale: default
---

- [浆帆船在内海及沿海的攻击力加成](#浆帆船在内海及沿海的攻击力加成)
- [引用](#引用)
- [CC协议：](#cc协议)

## 浆帆船在内海及沿海的攻击力加成

- 打开`/common/defines.lua`文件
- 搜索`GALLEY_BONUS_INLAND_SEA`，这是在内海的攻击力加成，默认是`1.0[100%]`
- 搜索`GALLEY_BONUS_COASTAL_SEA`，这是在沿海的攻击力加成，默认是`0.5[50%]`
- `HEAVY_SHIP_COMBAT_WIDTH`，重型战舰战斗宽度，默认是`3`
- `LIGHT_SHIP_COMBAT_WIDTH`，轻型战舰战斗宽度，默认是`1`
- `GALLEY_COMBAT_WIDTH`，浆帆战舰战斗宽度，默认是`1`
- `TRANSPORT_COMBAT_WIDTH`，运输船战斗宽度，默认是`1`
- `NAVAL_BASE_ENGAGEMENT_WIDTH`，海军的基础战斗宽度，默认是`5`
  - 在沿海海域，战斗宽度将减少，在`/common/static_modifiers/00_static_modifiers.txt`搜索`coastal_sea`，有一句修正语句，`local_naval_engagement_modifier = -0.20`

## 引用

- [eu4 wiki - naval warfare](https://eu4.paradoxwikis.com/Naval_warfare#Unit_strength)

## CC协议：

- 本作品 已获得许可 [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)
