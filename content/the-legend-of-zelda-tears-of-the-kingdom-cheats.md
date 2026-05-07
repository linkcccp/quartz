---
title: 王国之泪金手指
tags:
  - Nintendo
  - Switch
  - Zelda
  - TearsOfTheKingdoms
  - Cheats
date: 2025-09-06
draft: false
description: 详细介绍了塞尔达传说王国之泪金手指的下载和如何使用，有什么值得注意的点，以yuzu模拟器为例子，使用1.2.1版本金手指并且做了测试，最后贴有测试的金手指。
lastmod: 2025-12-28
cover: https://img.linkcf.top/2025/12/20251229124104195.webp
stale: default
---

## 金手指下载

- [Download](https://1drv.ms/f/c/f1e3a9ff68c2d887/EgZpbo0wTwtDnDV0FnF12YABeOX6N9-0_W8wy5f33hq7YQ?e=PIMssx)需要魔法

## 使用

- 解压之后，得到以下文件
  ![Cheats](https://img.linkcf.top/imgcenter/2024/10/c4fb3d50a3f1bfa8499c09a6b1d63b17.png)
  ![Cheats](https://img.linkcf.top/imgcenter/2024/10/aa7b8aa0b3d855b5c0eaa47cd06197ce.png)

- 每个版本金手指数量不同，以<font color=red>1.2.1版本</font>为例
- 打开`yuzu模拟器`，打开mod文件夹
  ![yuzu](https://img.linkcf.top/imgcenter/2024/10/a3ccfd8e6cf3bdaa53e8998b309e0262.png)
  ![mod](https://img.linkcf.top/imgcenter/2024/10/427e9d62a52348fa478e7ca090376466.png)
- 然后把刚刚金手指解压的文件夹放到mod文件夹里，注意，要玩什么就放什么，别全部都放，我这里放一个显示全神庙位置
  ![Cheats](https://img.linkcf.top/imgcenter/2024/10/f37b340b9d4afd39a39caec3a363aa3a.png)
- 注意，有些金手指需要额外加代码，就比如上面的
  ![Cheats](https://img.linkcf.top/imgcenter/2024/10/a31dc5b323c4f09c7e572e42dd6ea545.png)
  用记事本之类的软件，打开
  ![Cheats](https://img.linkcf.top/imgcenter/2024/10/29fa3343c7583ae6ba7d288216d2311f.png)
  找到解压文件夹里的这个文件夹
  ![Cheats](https://img.linkcf.top/imgcenter/2024/10/5210bc8a789e05b2a05a4b737fe2b34d.png)
  同样用记事本打开
  ![Cheats](https://img.linkcf.top/imgcenter/2024/10/6071b27c40b742bfa4649685a7b3c703.png)
  复制这串代码到你刚刚添加到mod文件夹里的金手指文件里
  ![Cheats](https://img.linkcf.top/imgcenter/2024/10/25a60a900802c92baee3f7a95b6ac2ae.png)
  注意右下角的编码为`UTF-8`
  ![UTF-8](https://img.linkcf.top/imgcenter/2024/10/a37963bd33ef1dab30781b5b8d7dfdf2.png)
- 保存，去`yuzu模拟器`，右键，打开属性
  ![yuzu](https://img.linkcf.top/imgcenter/2024/10/ee5de5e4bfd2741851b50704e7f07233.png)
  ![yuzu](https://img.linkcf.top/imgcenter/2024/10/1e1be8503dcf82bc407d28a775df954c.jpeg)
- 为了金手指能够顺利加载，可以点击不勾选然后在点击勾选，让模拟器重新加载mod文件

## 测试

- 成功
  ![test1](https://img.linkcf.top/imgcenter/2024/10/01635bc1246edf797ba23134c996269d.jpeg)
  ![test2](https://img.linkcf.top/imgcenter/2024/10/26b164fd8b972a399935eabde40f4596.jpeg)

## 代码

```
[前110项均需打开此必须码]
580F0000 04616BF8
400B0000 00000000 02B01A10
680F01B0 BD015E80 BD416280
400B0000 00000000 02B01A18
640F01B0 00000000 D65F03C0
400B0000 00000000 02B01A20
680F01B0 10FFFFC8 1E214800
400B0000 00000000 02B01A28
680F01B0 1E220800 BD400102
400B0000 00000000 02B01A30
640F01B0 00000000 176DCFA2
400B0000 00000000 02B01AAC
680F01B0 37300121 B94032C1
400B0000 00000000 02B01AB4
680F01B0 F9400442 F94007E2
400B0000 00000000 02B01ABC
680F01B0 B9406043 F9403842
400B0000 00000000 02B01AC4
680F01B0 B940EEC2 35000083
400B0000 00000000 02B01ACC
680F01B0 2A0903E8 34000042
400B0000 00000000 02B01AD4
680F01B0 D65F03C0 6B09011F
400B0000 00000000 02B01ADC
680F01B0 10000189 385FC3A8
400B0000 00000000 02B01AE4
680F01B0 386A692B 5280008A
400B0000 00000000 02B01AEC
680F01B0 5100056C 3400008B
400B0000 00000000 02B01AF4
680F01B0 54000080 6B14019F
400B0000 00000000 02B01AFC
680F01B0 54FFFF4A 7100054A
400B0000 00000000 02B01B04
680F01B0 2A0B03E8 D65F03C0
400B0000 00000000 02B01B0C
640F01B0 00000000 D65F03C0


[#69 地图显示全神庙位置]
400B0000 00000000 00EAA11C
640F01B0 00000000 D503201F

```
