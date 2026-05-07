---
title: 欧陆风云4历史修改
tags:
  - EU4
  - Paradox
  - Wiki
  - Game
date: 2025-09-06
draft: false
description: 本文章是摘抄自欧陆风云4中文百科-HistoryModified的内容
lastmod: 2025-12-28
cover: https://img.linkcf.top/2025/12/20251229115638571.webp
stale: default
---

- [历史修改](#历史修改)
- [国家历史](#国家历史)
- [省份历史](#省份历史)
- [外交历史](#外交历史)
  - [神罗皇帝](#神罗皇帝)
  - [天朝皇帝](#天朝皇帝)
  - [外交关系](#外交关系)
    - [自建附属关系](#自建附属关系)
  - [战争](#战争)
  - [顾问](#顾问)
- [注意事项](#注意事项)
- [参考文献：](#参考文献)
- [CC协议：](#cc协议)

本文内容引用自[欧陆风云4中文百科-历史修改](https://www.eu4cn.com/wiki/%E5%8E%86%E5%8F%B2%E4%BF%AE%E6%94%B9)

`由于家里网络时不时抽风，登不上中文百科网站，故将EU4百科部分内容重新分发，本文遵守百科CC协议`

## 历史修改

本页面讲述的内容长期有效。
在EU4中，历史文件用于在游戏中展现特定时期的世界。本文讲述如何修改历史相关的文件。

## 国家历史

国家历史的文件位于`/Europa Universalis IV/history/countries/*.txt`，用于调控每个国家在不同时期的数据。

每个国家都有自己的文件，名称为：`<tag> - <国家名称>`。 国家历史的基本格式：

```
technology_group = <group>      # 确定科技组和兵种组，默认是相同的
unit_type = <group>             # 当科技组和兵种组不同时，单独设定兵种组

government = <government>       # 政府形态
government_rank = <rank>        # 政府等级：1, 2 or 3

primary_culture = <culture>     # 主流文化
add_accepted_culture = <culture> # 接纳文化

religion = <religion>           # 国教

mercantilism = <int>            # 开局的重商主义数值
religious_school = <school>     # 穆斯林学派

capital = <id>                  # 首都的省份代码
fixed_capital = <id>            # 强迫AI不能迁到这个省份代码以外的省份。如果首都不在这个省份，那么会自动迁入。
add_army_professionalism =      # 军队职业化程度

# 定义统治者
monarch = {
    name = <string>             # 名字
    dynasty = <string>          # 姓氏
    adm = <int>                 # ADM能力
    dip = <int>                 # DIP能力
    mil = <int>                 # MIL能力
    birth_date = <date>         # 出生日期
    female = yes                # 是否为女性
    regent = yes                # 是否为摄政
    religion = <religion>       # 统治者宗教
    culture = <culture>         # 统治者文化

    # 将定义的君主指定为将军
    leader = {
        name = <string>     # 姓名
        type = <type>       # 将领类型：陆军将领，海军将领，探索者，征服者( general, admiral, explorer, conquistidor)
        fire = <int>
        shock = <int>
        manuever = <int>
        siege = <int>       # 四围数值
    }
}

# 定义继承人
heir = {
    name = <string>             # 名字
    dynasty = <string>          # 姓氏

    claim = <int>               # 继承人宣称数值
    adm = <int>                 # ADM能力
    dip = <int>                 # DIP能力
    mil = <int>                 # MIL能力
    birth_date = <date>         # 出生日期
    death_date = <date>         # 死亡日期
    female = yes                # 是否为女性
    religion = <religion>       # 统治者宗教
    culture = <culture>         # 统治者文化

}

# 定义配偶，基础属性和前两个一样
queen = {
    name = <string>             # 配偶的名字
    dynasty = <string>          # 配偶的王朝
    birth_date = <date>         # 用于设置配偶的年龄。派生自找到该君主作用域的历史记录的日期。
    death_date = <date>         # 何时该配偶应该被移除。
    adm = <int>                 # 配偶的ADM技能
    dip = <int>                 # 配偶的DIP技能
    mil = <int>                 # 配偶的MIL技能
    female = yes                # 该配偶是否是女性
    country_of_origin = <tag>   # 配偶的母国tag
    religion = <religion>       # 配偶的宗教
    culture = <culture>         # 配偶的文化
}

add_ruler_personality = immortal_personality #增加君主特质

#  历史部分，可以在其中增加和上面一样的内容（统治者、继承人、配偶、设定值），或者增加其他的普通国家效果
<year>.<month>.<day> = {
    <country effects>
}
```

## 省份历史

省份历史位于`/Europa Universalis IV/history/provinces/*.txt`，控制每个省份的参数。

每个省份都有自己的文件，文件名为：`<省份id> - <省份名称>`。

以下是省份文件的格式

```
owner = <tag>           # 省份拥有者
controller = <tag>      # 省份目前的控制者
add_core = <tag>        # 为特定tag的国家增设核心
remove_core = <tag>     # 为特定tag的国家去除核心
is_city = yes / no      # 决定此处是否为一座城市，即是否完成了殖民。

culture = <culture>     # 本省文化
religion = <culture>    # 本省宗教

base_tax = <int>        # 本省税收
base_production = <int> # 本省生产
base_manpower = <int>   # 本省人力

latent_trade_goods = {coal} # 是否有煤炭（或者其他mod产品）作为潜在产品
trade_goods = <goods>   # 本省产物
estate = <estate>       # 为本省增加阶级
hre = yes / no          # 是否为神罗省份
capital = "<string>"    # 设定专有的首府名称，否则首府名称将会和省份名称一致

discovered_by = <technology group>  # 为某科技组的国家开启本省份的视野。
reformation_center = <religion>     # 设定本省为某宗教改革中心
unrest = <int>                      # 增加基础叛乱度
<building> = yes / no               # 增加或者移除特定建筑
add_permanent_province_modifier = { name="<修正名称>" : duration=-1 } #增加本省的永久性修正
# 增加叛乱
revolt = {
    type = <rebel type> #叛军类型
    size = <int> #叛军规模
    leader = <string>
}

# 历史部分，可以对以上属性进行更新，也可以添加普通效果
<年>.<月>.<日> = {
    <省份效果>
}
```

## 外交历史

外交历史位于`/Europa Universalis IV/history/diplomacy/*.txt`，用来定义外交关系

### 神罗皇帝

设定目前的神罗皇帝

```
<year>.<month>.<day> = {
    emperor = <tag>
}
```

### 天朝皇帝

设定目前的天朝皇帝

```
<year>.<month>.<day> = {
    celestial_emperor = <tag>
}
```

### 外交关系

外交关系的格式如下：

```
<type> = {
    first = <tag>       # 如果关系是宗主-附庸关系，那么这是宗主国tag
    second = <tag>      # 如果关系是宗主-附庸关系，那么这是附庸国tag
    start_date = <date> # 关系的起始时刻
    end_date = <date>   # 关系的终止时刻
}
```

<font color=red>type</font>中可以填写以下关系：

- alliance——联盟
- royal_marriage——王室联姻
- guarantee——保证独立
- warning——警告
- vassal——附庸
- march——卫戍
- union——联合统治

##### 自建附属关系

对于自建的附属关系（包括朝贡国），按照以下方式添加，即在`subject_type`处指明具体关系名称。

```
dependency = {
    subject_type = "<subject type>"
    first = <tag>
    second = <tag>
    start_date = <date>
    end_date = <date>
}
```

### 战争

战争的文件位于`/Europa Universalis IV/history/wars/*.txt`，用于定义正在进行的战争，或者刚刚结束的战争。（用于和约的创建）。

每一场的战争都要用一个文件进行记录，格式如下：

```
name = "<字符串>"           # 屏幕上所显示的战争名称
war_goal = {
    type = <wargoal>        # 战争目标来自于00_wargoals.txt
    casus_belli = <cb>      # 宣战理由来自于00_cb_types.txt
    #以下两行依照战争目标和宣战理由填写，对于贸易战争等无目标省份或者国家的战争则不必填写
    province =              # 为所有征服省份类战争指定目标省份id
    tag =                   # 为独立/宣称王位等类别的战争指定目标国家tag
}
succession = <tag>        #是针对该国王位的继承战争，不是则不填，用于防止宣战被联统国打包带走联统主导国的情况
<year>.<month>.<day> = {
    add_attacker = <tag>    # 将一个国家加入到进攻方，可以在战争进行时中途加入
    add_defender = <tag>    # 将一个国家加入到防守方
}
# 添加战役
<year>.<month>.<day> = {
    batle = {
        name = "<string>"   # 发生战斗的省份名称
        location = <id>     # 省份id

        attacker = {
            commander = "<string>"  # 进攻方将领名称
            infantry = <int>        # 步兵数目
            cavalry = <int>         # 骑兵数目
            artillery = <int>       # 炮兵数目（1=1k人？）
            losses = <float>        # 阵亡人数百分比
            country = <tag>         # 进攻方tag
        }

        defender = {
            commander = "<string>"
            infantry = <int>
            cavalry = <int>
            artillery = <int>
            losses = <float>
            country = <tag>         # 防守方的指标同进攻方相同
        }

        result = yes    #是否显示结果
    }
    #同样地，可以在海洋省份指定已经发生的海战，只是要把陆军单位换为海军单位
}

# 用于在战争
<year>.<month>.<day> = {
    rem_attacker = <tag>    # 将一个国家从进攻方移除，可以在战争进行时中途离开
    rem_defender = <tag>    # 同上
}
```

### 顾问

历史上的顾问位于`/Europa Universalis IV/history/advisors/*.txt`，用于指定某一历史时期中一个国家可用的特殊顾问。

不必创建新文件，格式如下：

```
advisor = {
    advisor_id = <id>           # 独立id
    name = <string>             # 全名
    location = <province id>    # 关联省份
    skill = <int>               # 技能等级
    type = <advisortype>        # 顾问类型
    discount = yes              # 是否折扣
    date = <year>.<month>.<day>         # 开始出现的日期
    death_date = <year>.<month>.<day>   # 停止出现的日期
    culture = <culture>         # 顾问文化
    religion = <religion>       # 顾问宗教
}
```

在规定的时间内开局的话，这些顾问会和普通顾问一同加到顾问池中。

## 注意事项

通常，历史部分出现问题很容易导致游戏崩溃，而且是很难诊断的。举个例子，如果在 `capital =填入了一个无效省份id`，那么游戏就会崩溃。

因此请确保你引用的所有来源都是可靠的。（特别是省份id和国家tag）

## 参考文献：

- [欧陆风云4中文百科-历史修改](https://www.eu4cn.com/wiki/%E5%8E%86%E5%8F%B2%E4%BF%AE%E6%94%B9)

## CC协议：

本作品 许可于以下 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1)
