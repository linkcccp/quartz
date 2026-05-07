---
title: 欧陆风云4添加省份修正
tags:
  - EU4
  - Game
  - Mod
  - Paradox
date: 2025-09-06
draft: false
description: 这篇文章教你如何添加两种省份修正并且本地化
lastmod: 2025-12-28
cover: https://img.linkcf.top/2025/12/20251229115638571.webp
stale: default
---

- [创建mod文件](#创建mod文件)
- [添加永久性的省份修正](#添加永久性的省份修正)
  - [本地化](#本地化)
- [添加触发性的省份修正](#添加触发性的省份修正)
  - [本地化](#本地化-1)
- [引用](#引用)
- [CC协议](#cc协议)

## 创建mod文件

![create mod](https://img.linkcf.top/imgcenter/2024/10/5a3df2960d46940b03f19b335ddf8fc7.jpeg)
如图在`\Documents\Paradox Interactive\Europa Universalis IV\mod`文件夹下创建mod文件夹及文件

用记事本或其他编辑器打开`test.mod`文件

编辑文件`name="" supported_version="" path=""`

name为mod名称；support_version为支持的版本，视游戏而定；path为mod文件夹存放的路径 如图所示

![path](https://img.linkcf.top/imgcenter/2024/10/ed6b365e42a4d71ed30cf570d72aa88c.jpeg)

在test文件夹里添加一个`descriptor.mod`文件，里面只填写`name`和`support_version`就可以

如图所示
![location](https://img.linkcf.top/imgcenter/2024/10/dcb19367e6c54c5664e45cd09448d78f.jpeg)

![location](https://img.linkcf.top/imgcenter/2024/10/7e353132ced090f1e74c1b6588a836d9.png)

这样mod就添加完成了，在启动器里可以看到

![mod](https://img.linkcf.top/imgcenter/2024/10/c0c08e88be4cfde65a52e740623ae01b.jpeg)

在播放集里添加就可以用了，但是因为没有修改文件，所以没有任何效果

![add mod](https://img.linkcf.top/imgcenter/2024/10/bec891ccf42284e5ea427f3a0a74304d.jpeg)
![add mod](https://img.linkcf.top/imgcenter/2024/10/d6d6955bedf784cfe437bcfba6bb3b3f.jpeg)
![add mod](https://img.linkcf.top/imgcenter/2024/10/803f657d4a450af439515ba2ddab01db.jpeg)

## 添加永久性的省份修正

把eu4原本的history文件夹复制到mod文件夹里，进入以下路径找到你想修改的省份`/history/provinces/*.txt`，比如我想修改北京，那么搜索`1816 - Beijing.txt`，用记事本或者其他编辑器进行修改。

```
添加以下代码
add_permanent_province_modifier = {
  name = GreatCity # 省份修正的名字，这个修正原本没有，之后要去common\event_modifiers\*.txt中添加一个
  duration = -1  # 持续时间，-1表示永久
}
```

在mod根目录创建`common`文件夹，复制`event_modifiers`文件夹，可以在原本文件之上进行编辑，也可以重新创建文件如`00_testmod_modifiers.txt`进行编辑

添加省份修正

```
GreatCity = {
	# 在这个括号里添加省份修正就可以了
    garrison_growth = 0.05	# 省份守军恢复效率
    local_defensiveness = 0.1	# 当地防御效率
    local_production_efficiency = 0.1	# 当地生产效率
    local_tax_modifier = 0.1	# 当地税收（百分比）
    province_trade_power_modifier = 0.1	# 省份贸易力量（百分比）	乘法
}
```

### 本地化

在mod根目录创建`localisation`文件夹，在localisation文件夹里创建`replace`文件夹，在replace文件夹里创建`*.yml`文件，起名随意

编辑yml文件，开头`l_english:`顶格，下面的行前面空一格写，冒号后面的数字是修订版本号

修正类型本地化：
`<modifier>: ` 这是修正标题
`desc_<modifier>:` 这是修正详细描述

到[转码网站](https://paratranz.cn/utilities/converter)进行转码

目标编码选择utf-8-bom
![utf-8 bom](https://img.linkcf.top/imgcenter/2024/10/50bd4805620383ca3e2eda18554d127b.jpeg)

```
l_english:
 GreatCity:0 "-NNS„v-NÃV"
 desc_GreatCity:0 "êbVyåNegÿS¬Nn/f-NNSCNóNšN„v-NÃV0"
```

yml文件保存记得保存为`utf-8-bom`文件
![save](https://img.linkcf.top/imgcenter/2024/10/98d336c0e9cc800b809f8590e9c65e7e.png)

如何保存为utf-8-bom
![how to save](https://img.linkcf.top/imgcenter/2024/10/4bb4df2da9e5d080bb60303a8f94a32c.png)
![how to save](https://img.linkcf.top/imgcenter/2024/10/fac05e2d136cffbea6f6ed1f80ebbf63.jpeg)

进入游戏查看，成功
![success](https://img.linkcf.top/imgcenter/2024/10/057e4d09e574e6689e3e528981829eaf.jpeg)

## 添加触发性的省份修正

同样的，在北京添加一个触发性的省份修正

打开北京的省份文件，添加以下代码

```
add_province_triggered_modifier = MNG_Defence_modifier #这是创建的修正，要去common\province_triggered_modifiers\*.txt中添加
```

创建`province_triggered_modifiers`文件夹及`*.txt`，名称随意

仿照格式编写

```
<名称> = {
    # 触发的修正是否在省份界面中可见的条件
    potential = {
        <条件>
    }

    # 触发修正所需的条件
    trigger = {
        <条件>
    }

    # 触发修正的效果
    <修正效果>

    # Province scope
    # 当触发修正的条件满足而开启时执行的效果
    on_activation = {

    }

    # 当触发修正的条件不满足而关闭时执行的效果
    on_deactivation = {

    }
}


MNG_Defence_modifier = {
    # 触发的修正是否在省份界面中可见的条件
    potential = {
        always = yes
    }

    # 触发修正所需的条件
    trigger = {
        owner = {
            tag = MNG
        }
    }

    # 触发修正的效果
    local_hostile_attrition = 5	# 当地敌军损耗值
    local_garrison_damage = 0.5	# 当地守军战斗力


    # Province scope
    # 当触发修正的条件满足而开启时执行的效果
    on_activation = {

    }

    # 当触发修正的条件不满足而关闭时执行的效果
    on_deactivation = {

    }
}
```

### 本地化

和上面同样的操作

进入游戏，成功
![success](https://img.linkcf.top/imgcenter/2024/10/c00cfcfc7d9efca6c0ab4df5a49a06e7.jpeg)

## 引用

- [ParaTranz编码网站](https://paratranz.cn/utilities/converter)
- [欧陆风云4中文百科-省份触发修正](https://www.eu4cn.com/wiki/修正修改#省份触发修正)
- [欧陆风云4中文百科-本地化](https://www.eu4cn.com/wiki/%E6%9C%AC%E5%9C%B0%E5%8C%96)
- [欧陆风云4中文百科-效果指令](https://www.eu4cn.com/wiki/%E6%8C%87%E4%BB%A4)

## CC协议

本作品 许可于以下 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1)
