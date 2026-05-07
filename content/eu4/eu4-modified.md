---
title: 欧陆风云4修正列表1-国家修正
tags:
  - Game
  - Paradox
  - Wiki
  - EU4
date: 2025-09-06
description: 欧陆风云4修正列表，包含国家修正和省份修正，搬运自中文百科，本页面主要是关于国家修正的内容
lastmod: 2025-12-28
draft: false
cover: https://img.linkcf.top/2025/12/20251229115638571.webp
stale: default
---

- [修正列表](#修正列表)
- [概述](#概述)
- [国家修正](#国家修正)
  - [陆军](#陆军)
  - [海军](#海军)
  - [特殊单位](#特殊单位)
  - [雇佣兵](#雇佣兵)
  - [旗舰](#旗舰)
  - [外交](#外交)
  - [经济](#经济)
  - [科技](#科技)
  - [内政](#内政)
  - [政府](#政府)
  - [核心](#核心)
  - [阶层](#阶层)
  - [天命](#天命)
  - [神圣罗马帝国](#神圣罗马帝国)
  - [文化](#文化)
  - [稳定](#稳定)
  - [附属国](#附属国)
  - [间谍](#间谍)
  - [宗教](#宗教)
  - [殖民](#殖民)
  - [贸易](#贸易)

本文内容引用自[欧陆风云4中文百科-修正列表](https://www.eu4cn.com/wiki/%E4%BF%AE%E6%AD%A3%E5%88%97%E8%A1%A8)

[[eu4-modified-2|欧陆风云4省份修正]]

`由于家里网络时不时抽风，登不上中文百科网站，故将EU4百科部分内容重新分发，本文遵守百科CC协议`

## 修正列表

本页面所适用的版本可能已经过时，最后更新于1.30。
**修正**（英文：**Modifier**）会影响一个国家或省份的各种属性数值。 一定要注意，修正**不是**[指令](https://www.eu4cn.com/wiki/%E6%8C%87%E4%BB%A4)！阅读`/Europa Universalis IV/common/<type>_modifiers`中的各种修正代码，可以更好地理解[不同类型的修正](https://www.eu4cn.com/wiki/%E4%BF%AE%E6%AD%A3%E4%BF%AE%E6%94%B9)是如何工作的。本文所列的修正项，需要封装为某种类型的修正，然后添加给特定的作用域。

## 概述

所有修正都被划分为两个内部范围：国家修正与省份修正。在一个省份添加国家修正是无效的，反之亦然。

另外，在国家修正中有一个独特的类型被称为“规则”修正。在应用这类修正的时候会调用诸如“探索”之类的特殊功能。注意，多数规则修正只能在具体的情况下发挥作用，例， `can_bypass_forts`只能在时代文件 **（common/ages）** 中起作用。

同类型的多条修正会以加法合并。例如，若在添加 `infantry_cost = 0.1` 后继续添加 `infantry_cost = 0.3` ，则游戏中的效果表示为 `infantry_cost = 0.4` 。

此外，修正的效果是在基础值之上做改动（增加值，或增加乘数）；例如， `army_tradition = 1` 在陆军传统的基值之上增加修正，而 `infantry_cost = 0.1` 则是以修正值乘以基值。

**以乘法计算的修正，在游戏中会以增加或减小百分比的形式作显示。**例如`army_tradition_decay = -0.1` 在游戏中会显示为“年度陆军传统衰减：-10%”。

下述的例子是游戏中主要的正面修正（即以游戏中绿色文本标示的）。

## 国家修正

- 此内容可能已落后版本，最后更新于1.30

### 陆军

| 修正代码                               | 用法举例                                      | 修正描述                                                                                                   | 效果类型 | 添加修正的版本                         |
| -------------------------------------- | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | -------- | -------------------------------------- |
| attack_bonus_in_capital_terrain        | attack_bonus_in_capital_terrain = 1           | 与首都相同地形的省份战斗骰子点数                                                                           | 加法     | 1.20（1.34更新该语句可用于任何修正中） |
| can_bypass_forts                       | can_bypass_forts = yes                        | 允许部队忽略要塞控制区域                                                                                   | 恒定     | 1.20（1.34更新该语句可用于任何修正中） |
| force_march_free                       | force_march_free = yes                        | 免除强行军所需的军事点数花费                                                                               | 恒定     | 1.20（1.34更新该语句可用于任何修正中） |
| free_maintenance_on_expl_conq          | free_maintenance_on_expl_conq = yes           | 免除探险家与征服者所需的点数维护（比如，将领上限为3，已经征召3名将领，再征召一位征服者，不会占用上限）     | 恒定     | 1.20（1.34更新该语句可用于任何修正中） |
| extra_manpower_at_religious_war        | extra_manpower_at_religious_war = yes         | 与异教国家交战时，人力恢复为平时的300%（不会显示为修正，但实际有效）                                       | 恒定     | 1.01                                   |
| army_tradition                         | army_tradition = 0.5                          | 年度陆军传统                                                                                               | 加法     | 1.1                                    |
| army_tradition_decay                   | army_tradition_decay = -0.1                   | 年度陆军传统衰减                                                                                           | 乘法     | 1.1                                    |
| army_tradition_from_battle             | army_tradition_from_battle = 0.05             | 陆战获得传统                                                                                               | 乘法     | 1.18                                   |
| yearly_army_professionalism            | yearly_army_professionalism = 0.1             | 年度职业度                                                                                                 | 乘法     | 1.23                                   |
| drill_gain_modifier                    | drill_gain_modifier = 0.1                     | 陆军操练度获取修正                                                                                         | 乘法     | 1.23                                   |
| drill_decay_modifier                   | drill_decay_modifier = -0.1                   | 陆军操练度损失                                                                                             | 乘法     | 1.24                                   |
| infantry_cost                          | infantry_cost = -0.1                          | 步兵征召花费                                                                                               | 乘法     | 1.1                                    |
| infantry_power                         | infantry_power = 0.1                          | 步兵作战能力                                                                                               | 乘法     | 1.1                                    |
| infantry_fire                          | infantry_fire = 1                             | 步兵基础火力                                                                                               | 加法     | 1.28                                   |
| infantry_shock                         | infantry_shock = 1                            | 步兵基础冲击                                                                                               | 加法     | 1.28                                   |
| cavalry_cost                           | cavalry_cost = -0.1                           | 骑兵征召花费                                                                                               | 乘法     | 1.1                                    |
| cavalry_power                          | cavalry_power = 0.1                           | 骑兵作战能力                                                                                               | 乘法     | 1.1                                    |
| cavalry_fire                           | cavalry_fire = 1                              | 骑兵基础火力                                                                                               | 加法     | 1.28                                   |
| cavalry_shock                          | cavalry_shock = 1                             | 骑兵基础冲击                                                                                               | 加法     | 1.28                                   |
| artillery_cost                         | artillery_cost = -0.1                         | 炮兵征召花费                                                                                               | 乘法     | 1.1                                    |
| artillery_power                        | artillery_power = 0.1                         | 炮兵作战能力                                                                                               | 乘法     | 1.1                                    |
| artillery_fire                         | artillery_fire = 1                            | 炮兵基础火力                                                                                               | 加法     | 1.28                                   |
| artillery_shock                        | artillery_shock = 1                           | 炮兵基础冲击                                                                                               | 加法     | 1.28                                   |
| cav_to_inf_ratio                       | cav_to_inf_ratio = 0.1                        | 步兵对骑兵支援惩罚比例：加上基础值达到100%即可无惩罚使用全骑兵作战                                         | 乘法     | 1.20                                   |
| cavalry_flanking                       | cavalry_flanking = 0.1                        | 骑兵侧翼攻击能力                                                                                           | 乘法     | 1.18                                   |
| artillery_levels_available_vs_fort     | artillery_levels_available_vs_fort = 1        | 炮兵对堡垒额外加成                                                                                         | 加法     | 1.20                                   |
| backrow_artillery_damage               | backrow_artillery_damage = 0.1                | 来自后排炮兵火力伤害的加成                                                                                 | 乘法     | 1.20                                   |
| discipline                             | discipline = 0.1                              | 训练度                                                                                                     | 乘法     | 1.1                                    |
| land_morale                            | land_morale = 0.1                             | 陆军士气修正                                                                                               | 乘法     | 1.1                                    |
| morale_damage_received                 | morale_damage_received = -0.1                 | 所受士气打击                                                                                               | 乘法     | 1.35                                   |
| morale_damage                          | morale_damage = 0.1                           | 士气打击                                                                                                   | 乘法     | 1.35                                   |
| defensiveness                          | defensiveness = 0.25                          | 全国防御效率                                                                                               | 乘法     | 1.1                                    |
| siege_ability                          | siege_ability = 0.1                           | 围城能力：削减防御效率                                                                                     | 乘法     | 1.06                                   |
| movement_speed                         | movement_speed = 0.1                          | 陆军移动速度                                                                                               | 乘法     | 1.18                                   |
| fire_damage                            | fire_damage = 0.1                             | 火力伤害                                                                                                   | 乘法     | 1.18                                   |
| fire_damage_received                   | fire_damage_received = -0.1                   | 承受火力伤害                                                                                               | 乘法     | 1.18                                   |
| shock_damage                           | shock_damage = 0.1                            | 冲击伤害                                                                                                   | 乘法     | 1.18                                   |
| shock_damage_received                  | shock_damage_received = -0.1                  | 承受冲击伤害                                                                                               | 乘法     | 1.18                                   |
| recover_army_morale_speed              | recover_army_morale_speed = 0.1               | 陆军月度士气回复速度                                                                                       | 乘法     | 1.1                                    |
| siege_blockade_progress                | siege_blockade_progress = 1                   | 封锁对围城进度修正                                                                                         | 加法     | 1.20                                   |
| reserves_organisation                  | reserves_organisation = 0.1                   | 未参战单位士气修正                                                                                         | 乘法     | 1.23                                   |
| land_attrition                         | land_attrition = -0.1                         | 陆军月度损耗                                                                                               | 乘法     | 1.1                                    |
| reinforce_cost_modifier                | reinforce_cost_modifier = -0.1                | 补员花费                                                                                                   | 乘法     | 1.19                                   |
| reinforce_speed                        | reinforce_speed = 0.1                         | 增援效率                                                                                                   | 乘法     | 1.1                                    |
| manpower_recovery_speed                | manpower_recovery_speed = 0.1                 | 后备人力恢复速度                                                                                           | 乘法     | 1.1                                    |
| global_manpower                        | global_manpower = 1                           | 全国人力（数值 1=1000人力）                                                                                | 加法     | 1.1                                    |
| global_manpower_modifier               | global_manpower_modifier = 0.1                | 全国人力（百分比）                                                                                         | 乘法     | 1.1                                    |
| global_regiment_cost                   | global_regiment_cost = -0.1                   | 陆军征召花费                                                                                               | 乘法     | 1.1                                    |
| global_regiment_recruit_speed          | global_regiment_recruit_speed = -0.1          | 陆军征召时间                                                                                               | 乘法     | 1.1                                    |
| global_supply_limit_modifier           | global_supply_limit_modifier = 0.33           | 国家补给限制修正                                                                                           | 乘法     | 1.28                                   |
| land_forcelimit                        | land_forcelimit = 1                           | 增加陆军上限（基础值）                                                                                     | 加法     | 1.1                                    |
| land_forcelimit_modifier               | land_forcelimit_modifier = 0.1                | 修正陆军上限（百分比）                                                                                     | 乘法     | 1.1                                    |
| land_maintenance_modifier              | land_maintenance_modifier = -0.1              | 陆军维护费修正                                                                                             | 乘法     | 1.1                                    |
| possible_condottieri                   | possible_condottieri = 0.5                    | 可借出的佣兵：派出本国军队成为佣兵的上限                                                                   | 乘法     | 1.16                                   |
| hostile_attrition                      | hostile_attrition = 1                         | 月度敌军损耗                                                                                               | 加法     | 1.1                                    |
| garrison_size                          | garrison_size = 0.1                           | 堡垒驻军规模                                                                                               | 乘法     | 1.12                                   |
| global_garrison_growth                 | global_garrison_growth = 0.1                  | 堡垒驻军恢复速度                                                                                           | 乘法     | 1.1                                    |
| fort_maintenance_modifier              | fort_maintenance_modifier = -0.1              | 堡垒维护费                                                                                                 | 乘法     | 1.12                                   |
| rival_border_fort_maintenance          | rival_border_fort_maintenance = -0.1          | 与宿敌相邻堡垒维护费                                                                                       | 乘法     | 1.20                                   |
| war_exhaustion                         | war_exhaustion = -0.1                         | 每月厌战度                                                                                                 | 加法     | 1.1                                    |
| war_exhaustion_cost                    | war_exhaustion_cost = -0.1                    | 减少厌战点数花费                                                                                           | 乘法     | 1.1                                    |
| leader_land_fire                       | leader_land_fire = 1                          | 陆军将领火力属性                                                                                           | 加法     | 1.06                                   |
| leader_land_manuever                   | leader_land_manuever = 1                      | 陆军将领机动属性                                                                                           | 加法     | 1.06                                   |
| leader_land_shock                      | leader_land_shock = 1                         | 陆军将领冲击属性                                                                                           | 加法     | 1.06                                   |
| leader_siege                           | leader_siege = 1                              | 将领围城属性                                                                                               | 加法     | 1.06                                   |
| general_cost                           | general_cost = -0.1                           | 征召陆军将领的花费                                                                                         | 乘法     | 1.23                                   |
| free_leader_pool                       | free_leader_pool = 1                          | 不需付出额外军事点数来维持的将领数量                                                                       | 加法     | 1.1                                    |
| raze_power_gain                        | raze_power_gain = 0.1                         | 游牧屠城获得君主点数修正                                                                                   | 乘法     | 1.14                                   |
| loot_amount                            | loot_amount = 0.1                             | 抢劫速度                                                                                                   | 乘法     | 1.12                                   |
| prestige_from_land                     | prestige_from_land = 0.1                      | 陆战获得威望                                                                                               | 乘法     | 1.11                                   |
| war_taxes_cost_modifier                | war_taxes_cost_modifier = -0.1                | 战争税军事点数花费                                                                                         | 乘法     | 1.20                                   |
| leader_cost                            | leader_cost = -0.1                            | 招募将领的点数花费                                                                                         | 乘法     | 1.26                                   |
| may_recruit_female_generals            | may_recruit_female_generals = yes             | 允许招募女性将领                                                                                           | 恒定     | 1.11（1.30更新该语句可用于任何修正中） |
| manpower_in_true_faith_provinces       | manpower_in_true_faith_provinces = 0.1        | 国教信仰省份人力                                                                                           | 乘法     | 1.30                                   |
| available_province_loot                | available_province_loot = 0.15                | 可以劫掠的省份财富                                                                                         | 乘法     | 1.30                                   |
| free_land_leader_pool                  | free_land_leader_pool = 1                     | 可招募的陆军将领上限                                                                                       | 加法     | 1.33                                   |
| capped_by_forcelimit                   | capped_by_forcelimit = yes                    | 禁止军队超过部队上限                                                                                       | 恒定     | 1.34                                   |
| global_attacker_dice_roll_bonus        | global_attacker_dice_roll_bonus = 1           | 全局进攻方骰子增加                                                                                         | 加法     | 1.34                                   |
| own_territory_dice_roll_bonus          | own_territory_dice_roll_bonus = 1             | 己方领土骰子增加                                                                                           | 加法     | 1.34                                   |
| global_defender_dice_roll_bonus        | global_defender_dice_roll_bonus = 1           | 全局防御方骰子增加                                                                                         | 加法     | 1.34                                   |
| may_return_manpower_on_disband         | may_return_manpower_on_disband = yes          | 解散单位时允许获得人力                                                                                     | 恒定     | 1.34                                   |
| may_refill_garrison                    | may_refill_garrison = yes                     | 允许补充堡垒驻军                                                                                           | 恒定     | 1.34                                   |
| may_build_supply_depot                 | may_build_supply_depot = yes                  | 允许建立补给站                                                                                             | 恒定     | 1.34                                   |
| max_hostile_attrition                  | max_hostile_attrition = 1                     | 敌方最大损耗数                                                                                             | 加法     | 1.34                                   |
| military_tactics                       | military_tactics = 0.25                       | 军事战术                                                                                                   | 加法     | 1.1（1.34开始可用于任何修正中）        |
| manpower_in_accepted_culture_provinces | manpower_in_accepted_culture_provinces = 0.10 | 已接受文化省份提供的人力（不包括主流文化省份）                                                             | 乘法     | 1.34                                   |
| manpower_in_culture_group_provinces    | manpower_in_culture_group_provinces = 0.1     | 同文化组省份提供的人力                                                                                     | 乘法     | 1.34                                   |
| manpower_in_own_culture_provinces      | manpower_in_own_culture_provinces = 0.10      | 主流文化省份提供的人力                                                                                     | 乘法     | 1.34                                   |
| regiment_manpower_usage = -0.75        | regiment_manpower_usage = -0.75               | 陆军人力花费                                                                                               | 乘法     | 1.34                                   |
| artillery_barrage_cost                 | artillery_barrage_cost = -0.1                 | 炮兵弹幕的花费                                                                                             | 乘法     | 1.35                                   |
| warscore_from_battles_modifier         | warscore_from_battles_modifier = 0.15         | 战斗获得的战争分数（包含陆战与海战）                                                                       | 乘法     | 1.35                                   |
| enable_forced_march                    | enable_forced_march = yes                     | 启用强行军                                                                                                 | 恒定     | 1.35                                   |
| max_general_shock                      | max_general_shock = 1                         | 陆军将领冲击属性上限。该修正也适用于征服者。                                                               | 加法     | 1.35                                   |
| max_general_fire                       | max_general_fire = 1                          | 陆军将领火力属性上限。该修正也适用于征服者。                                                               | 加法     | 1.35                                   |
| max_general_maneuver                   | max_general_maneuver = 1                      | 陆军将领机动属性上限。该修正也适用于征服者。                                                               | 加法     | 1.35                                   |
| max_general_siege                      | max_general_siege = 1                         | 陆军将领围城属性上限。该修正也适用于征服者。                                                               | 加法     | 1.35                                   |
| land_morale_constant                   | land_morale_constant = 0.5                    | 陆军士气（数值）                                                                                           | 加法     | 1.35                                   |
| artillery_level_modifier               | artillery_level_modifier = 0.2                | 炮兵数量的围城奖励。举例，在 artillery_level_modifier = 0.2 的情况下5队炮兵围城，则在围城界面炮兵计为6队。 | 加法     | 1.35                                   |
| garrison_damage                        | garrison_damage = 0.2                         | 要塞守军战斗力。强攻要塞及守军出击时，守军的伤害能力。                                                     | 乘法     | 1.35                                   |
| assault_fort_cost_modifier             | assault_fort_cost_modifier = -0.5             | 强攻要塞的花费。                                                                                           | 乘法     | 1.35                                   |
| assault_fort_ability                   | assault_fort_ability = 0.2                    | 围城部队强攻要塞时对守军的伤害。                                                                           | 乘法     | 1.35                                   |

### 海军

| 修正代码                                | 用法举例                                      | 修正描述                                                                                                                                   | 效果类型 | 添加修正的版本                         |
| --------------------------------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | -------- | -------------------------------------- |
| navy_tradition                          | navy_tradition = 1                            | 年度海军传统                                                                                                                               | 加法     | 1.1                                    |
| navy_tradition_decay                    | navy_tradition_decay = -0.1                   | 年度海军传统衰减                                                                                                                           | 乘法     | 1.1                                    |
| naval_tradition_from_battle             | naval_tradition_from_battle = 0.1             | 海战获得海军传统                                                                                                                           | 乘法     | 1.18                                   |
| naval_tradition_from_trade              | naval_tradition_from_trade = 0.1              | 商船保护贸易任务所获得海军传统                                                                                                             | 乘法     | 1.28                                   |
| heavy_ship_cost                         | heavy_ship_cost = -0.1                        | 重型船建造花费                                                                                                                             | 乘法     | 1.1                                    |
| heavy_ship_power                        | heavy_ship_power = 0.1                        | 重型船战斗力                                                                                                                               | 乘法     | 1.1                                    |
| light_ship_cost                         | light_ship_cost = -0.1                        | 商船建造花费                                                                                                                               | 乘法     | 1.1                                    |
| light_ship_power                        | light_ship_power = 0.1                        | 商船战斗力                                                                                                                                 | 乘法     | 1.1                                    |
| galley_cost                             | galley_cost = -0.1                            | 轻型船花费                                                                                                                                 | 乘法     | 1.1                                    |
| galley_power                            | galley_power = 0.1                            | 轻型船战斗力                                                                                                                               | 乘法     | 1.1                                    |
| transport_cost                          | transport_cost = -0.1                         | 运输船建造花费                                                                                                                             | 乘法     | 1.1                                    |
| transport_power                         | transport_power = 0.1                         | 运输船战斗力                                                                                                                               | 乘法     | 1.1                                    |
| global_ship_cost                        | global_ship_cost = -0.1                       | 全国船只建造花费                                                                                                                           | 乘法     | 1.1                                    |
| global_ship_recruit_speed               | global_ship_recruit_speed = -0.1              | 全国船只建造时间                                                                                                                           | 乘法     | 1.1                                    |
| global_ship_repair                      | global_ship_repair = 0.1                      | 全国船只修理速度                                                                                                                           | 乘法     | 1.07                                   |
| naval_forcelimit                        | naval_forcelimit = 1                          | 海军上限（数值）                                                                                                                           | 加法     | 1.1                                    |
| naval_forcelimit_modifier               | naval_forcelimit_modifier = 0.1               | 海军上限修正（百分比）                                                                                                                     | 乘法     | 1.1                                    |
| naval_maintenance_modifier              | naval_maintenance_modifier = -0.1             | 海军维护费                                                                                                                                 | 乘法     | 1.1                                    |
| global_sailors                          | global_sailors = 1000                         | 全国水手数量（数值）                                                                                                                       | 加法     | 1.1                                    |
| global_sailors_modifier                 | global_sailors_modifier = 0.1                 | 全国水手数量修正（百分比）                                                                                                                 | 乘法     | 1.16                                   |
| sailor_maintenance_modifer              | sailor_maintenance_modifer = -0.1             | 海军水手消耗量修正                                                                                                                         | 乘法     | 1.16                                   |
| sailors_recovery_speed                  | sailors_recovery_speed = 0.1                  | 水手增长速度                                                                                                                               | 乘法     | 1.16                                   |
| blockade_efficiency                     | blockade_efficiency = 0.1                     | 封锁港口效率                                                                                                                               | 乘法     | 1.1                                    |
| capture_ship_chance                     | capture_ship_chance = 0.1                     | 海战捕获船只几率                                                                                                                           | 乘法     | 1.18                                   |
| global_naval_engagement_modifier        | global_naval_engagement_modifier = 0.1        | 海战宽度                                                                                                                                   | 乘法     | 1.16                                   |
| naval_attrition                         | naval_attrition = -0.1                        | 海军月度损耗                                                                                                                               | 乘法     | 1.1                                    |
| naval_morale                            | naval_morale = 0.1                            | 海军士气                                                                                                                                   | 乘法     | 1.1                                    |
| ship_durability                         | ship_durability = 0.1                         | 船只耐久度：可以作为海军的训练度                                                                                                           | 乘法     | 1.07                                   |
| sunk_ship_morale_hit_recieved           | sunk_ship_morale_hit_recieved = -0.1          | 沉船士气打击：战斗中我方船舰被击沉对我方其他船只的士气打击                                                                                 | 乘法     | 1.18                                   |
| recover_navy_morale_speed               | recover_navy_morale_speed = 0.1               | 海军士气恢复速度                                                                                                                           | 乘法     | 1.1                                    |
| prestige_from_naval                     | prestige_from_naval = 0.1                     | 海战威望获得                                                                                                                               | 乘法     | 1.11                                   |
| leader_naval_fire                       | leader_naval_fire = 1                         | 海军将领火力                                                                                                                               | 加法     | 1.06                                   |
| leader_naval_manuever                   | leader_naval_manuever = 1                     | 海军将领机动                                                                                                                               | 加法     | 1.06                                   |
| leader_naval_shock                      | leader_naval_shock = 1                        | 海军将领冲击                                                                                                                               | 加法     | 1.06                                   |
| own_coast_naval_combat_bonus            | own_coast_naval_combat_bonus = 1.0            | 在己方省份相邻海域海战点数加成                                                                                                             | 乘法     | 1.26                                   |
| admiral_cost                            | admiral_cost = -0.1                           | 招募海军将领的花费                                                                                                                         | 乘法     | 1.28                                   |
| movement_speed_onto_off_boat_modifier   | movement_speed_onto_off_boat_modifier = 0.1   | 陆军登陆速度                                                                                                                               | 乘法     | 1.28                                   |
| global_naval_barrage_cost               | global_naval_barrage_cost = -0.2              | 海上炮击的点数花费                                                                                                                         | 乘法     | 1.28                                   |
| disengagement_chance                    | disengagement_chance = 0.2                    | 海战脱离接战几率                                                                                                                           | 乘法     | 1.30                                   |
| free_navy_leader_pool                   | free_navy_leader_pool = 1                     | 可招募的海军将领上限                                                                                                                       | 加法     | 1.33                                   |
| may_perform_slave_raid                  | may_perform_slave_raid = yes                  | 允许沿岸袭击                                                                                                                               | 恒定     | 1.16（1.30更新该语句可用于任何修正中） |
| sea_repair                              | sea_repair = yes                              | 允许船只在临近己方控制省份的海上恢复耐久度                                                                                                 | 恒定     | 1.01                                   |
| may_perform_slave_raid_on_same_religion | may_perform_slave_raid_on_same_religion = yes | 允许对同一宗教的国家进行劫掠海岸                                                                                                           | 恒定     | 1.27（1.30更新该语句可用于任何修正中） |
| transport_attrition                     | transport_attrition = -1                      | 海军运输造成的损耗                                                                                                                         | 乘法     | 1.34                                   |
| number_of_cannons                       | number_of_cannons = 1                         | 舰炮数量                                                                                                                                   | 加法     | 1.35                                   |
| number_of_cannons_modifier              | number_of_cannons_modifier = 1                | 舰炮数量                                                                                                                                   | 乘法     | 1.35                                   |
| hull_size_modifier                      | hull_size_modifier = 0.1                      | 船体尺寸                                                                                                                                   | 乘法     | 1.35                                   |
| hull_size                               | hull_size = 1                                 | 船体尺寸                                                                                                                                   | 加法     | 1.35                                   |
| heavy_ship_number_of_cannons_modifier   | heavy_ship_number_of_cannons_modifier = 1     | 重型船舰炮数量                                                                                                                             | 乘法     | 1.35                                   |
| heavy_ship_hull_size_modifier           | heavy_ship_hull_size_modifier = 0.2           | 重型船舰船体尺寸修正                                                                                                                       | 乘法     | 1.35                                   |
| light_ship_number_of_cannons_modifier   | light_ship_number_of_cannons_modifier = 1     | 商船舰炮数量                                                                                                                               | 乘法     | 1.35                                   |
| light_ship_hull_size_modifier           | light_ship_hull_size_modifier = 0.2           | 商船船体尺寸修正                                                                                                                           | 乘法     | 1.35                                   |
| galley_number_of_cannons_modifier       | galley_number_of_cannons_modifier = 1         | 桨帆船舰炮数量                                                                                                                             | 乘法     | 1.35                                   |
| galley_hull_size_modifier               | galley_hull_size_modifier = 0.2               | 桨帆船船体尺寸修正                                                                                                                         | 乘法     | 1.35                                   |
| transport_number_of_cannons_modifier    | transport_number_of_cannons_modifier = 1      | 运输船舰炮数量                                                                                                                             | 乘法     | 1.35                                   |
| transport_hull_size_modifier            | transport_hull_size_modifier = 0.2            | 运输船船体尺寸修正                                                                                                                         | 加法     | 1.35                                   |
| max_flagships                           | max_flagships = 1                             | 最大可建造的旗舰数                                                                                                                         | 加法     | 1.35                                   |
| max_admiral_shock                       | max_admiral_shock = 1                         | 海军将领冲击属性上限。该修正也适用于探险家。                                                                                               | 加法     | 1.35                                   |
| max_admiral_fire                        | max_admiral_fire = 1                          | 海军将领火力属性上限。该修正也适用于探险家。                                                                                               | 加法     | 1.35                                   |
| max_admiral_maneuver                    | max_admiral_maneuver = 1                      | 海军将领机动属性上限。该修正也适用于探险家。                                                                                               | 加法     | 1.35                                   |
| max_admiral_siege                       | max_admiral_siege = 1                         | 海军将领围城属性上限。该修正也适用于探险家。                                                                                               | 加法     | 1.35                                   |
| coast_raid_range                        | coast_raid_range = 2                          | 劫掠海岸最大距离。举例，当前能劫掠距离本国港口最远 3 个海域的省份，若 "coast_raid_range = 1" ，则可以劫掠距离本国港口最远 5 个海域的省份。 | 加法     | 1.35                                   |
| naval_morale_constant                   | naval_morale_constant = 0.5                   | 海军士气（数值）                                                                                                                           | 加法     | 1.35                                   |
| naval_morale_damage = 0.15              | naval_morale_damage = 0.15                    | 海军对敌方士气伤害                                                                                                                         | 乘法     | 1.35                                   |
| naval_morale_damage_received            | naval_morale_damage_received = -0.15          | 海军承受士气伤害                                                                                                                           | 乘法     | 1.35                                   |

### 特殊单位

| 修正代码                            | 用法举例                                   | 修正描述                                                                                     | 效果类型 | 添加修正的版本 |
| ----------------------------------- | ------------------------------------------ | -------------------------------------------------------------------------------------------- | -------- | -------------- |
| special_unit_cost_modifier          | special_unit_cost_modifier = -0.2          | 特殊兵种/舰船的花费（不包含人力/水手）                                                       | 乘法     | 1.35           |
| special_unit_manpower_cost_modifier | special_unit_manpower_cost_modifier = -0.2 | 特殊兵种/舰船的人力/水手花费                                                                 | 乘法     | 1.35           |
| special_unit_forcelimit             | special_unit_forcelimit = 0.10             | 可招募的特殊单位上限                                                                         | 乘法     | 1.30           |
| allowed_marine_fraction             | allowed_marine_fraction = 0.1              | 可招募海军陆战队的比例                                                                       | 乘法     | 1.30           |
| can_recruit_rajputs                 | can_recruit_rajputs = yes                  | 允许招募拉杰普特：国家修正                                                                   | 恒定     | 1.35           |
| can_recruit_cossacks                | can_recruit_cossacks = yes                 | 允许招募哥萨克：国家修正                                                                     | 恒定     | 1.35           |
| has_banners                         | has_banners = yes                          | 允许招募八旗部队：国家修正                                                                   | 恒定     | 1.20           |
| amount_of_banners                   | amount_of_banners = 0.10                   | 额外可招募的八旗上限                                                                         | 乘法     | 1.20           |
| can_recruit_janissaries             | can_recruit_janissaries = yes              | 允许招募耶尼切里：国家修正                                                                   | 恒定     | 1.35           |
| allow_janissaries_from_own_faith    | allow_janissaries_from_own_faith = yes     | 允许自正统信仰省份招募耶尼切里                                                               | 恒定     | 1.35           |
| can_recruit_cawa                    | can_recruit_cawa = yes                     | 允许招募恰瓦：国家修正                                                                       | 恒定     | 1.35           |
| amount_of_cawa                      | amount_of_cawa = 0.15                      | 额外可招募的恰瓦上限                                                                         | 乘法     | 1.32           |
| cawa_cost_modifier                  | cawa_cost_modifier = -0.10                 | 招募恰瓦需要的军事点数花费                                                                   | 乘法     | 1.32           |
| has_carolean                        | has_carolean = yes                         | 允许招募卡尔军：国家修正                                                                     | 恒定     | 1.34           |
| amount_of_carolean                  | amount_of_carolean = 1                     | 额外可招募的卡尔军上限                                                                       | 乘法     | 1.34           |
| can_recruit_hussars                 | can_recruit_hussars = yes                  | 允许招募翼骑兵：国家修正                                                                     | 恒定     | 1.34           |
| amount_of_hussars                   | amount_of_hussars = 1                      | 额外可招募的翼骑兵上限                                                                       | 加法     | 1.34           |
| can_recruit_revolutionary_guards    | can_recruit_revolutionary_guards = yes     | 允许招募革命卫队：国家修正                                                                   | 恒定     | 1.35           |
| has_tercio                          | has_tercio = yes                           | 允许招募方阵步兵：国家修正                                                                   | 恒定     | 1.35           |
| allowed_tercio_fraction             | allowed_tercio_fraction = 0.1              | 可招募方阵步兵的比例                                                                         | 乘法     | 1.35           |
| has_samurai                         | has_samurai = yes                          | 允许招募武士：国家修正                                                                       | 恒定     | 1.35           |
| allowed_samurai_fraction            | allowed_samurai_fraction = 0.1             | 可招募武士的比例                                                                             | 乘法     | 1.35           |
| has_musketeer                       | has_musketeer = yes                        | 允许招募火枪手：国家修正                                                                     | 恒定     | 1.35           |
| allowed_musketeer_fraction          | allowed_musketeer_fraction = 0.15          | 可招募火枪手的比例                                                                           | 乘法     | 1.35           |
| has_streltsy                        | has_streltsy = yes                         | 允许招募射击军：国家修正                                                                     | 恒定     | 1.35           |
| allowed_streltsy_fraction           | allowed_streltsy_fraction = 0.2            | 可招募射击军的比例                                                                           | 乘法     | 1.35           |
| has_geobukseon                      | has_geobukseon = yes                       | 允许建造龟船：国家修正                                                                       | 恒定     | 1.35           |
| allowed_geobukseon_fraction         | allowed_geobukseon_fraction = 0.5          | 可招募龟船的比例                                                                             | 乘法     | 1.35           |
| has_galleass                        | has_galleass = yes                         | 允许建造加莱赛战船：国家修正                                                                 | 恒定     | 1.35           |
| allowed_galleass_fraction           | allowed_galleass_fraction = 0.5            | 可招募加莱赛战船的比例                                                                       | 乘法     | 1.35           |
| has_voc_indiamen                    | has_voc_indiamen = yes                     | 允许建造东印度商船：国家修正                                                                 | 恒定     | 1.35           |
| allowed_voc_indiamen_fraction       | allowed_voc_indiamen_fraction = 0.25       | 可招募东印度商船的比例                                                                       | 乘法     | 1.35           |
| has_man_of_war                      | has_man_of_war = yes                       | 允许建造主力舰：国家修正                                                                     | 恒定     | 1.35           |
| allowed_man_of_war_fraction         | allowed_man_of_war_fraction = 0.2          | 可招募主力舰的比例                                                                           | 乘法     | 1.35           |
| has_galleon                         | has_galleon = yes                          | 允许建造盖伦帆船：国家修正                                                                   | 恒定     | 1.35           |
| allowed_galleon_fraction            | allowed_galleon_fraction = 0.1             | 可招募盖伦帆船的比例                                                                         | 乘法     | 1.35           |
| has_caravel                         | has_caravel = yes                          | 允许建造卡拉维尔帆船：国家修正                                                               | 恒定     | 1.35           |
| allowed_caravel_fraction            | allowed_caravel_fraction = 0.1             | 可招募卡拉维尔帆船的比例                                                                     | 乘法     | 1.35           |
| has\_<special_unit>                 | has\_<special_unit> = yes                  | 解锁特殊单位，并可供招募。注意：配合使用<special_unit>\_fraction_modifier = <float> 来招募。 | 恒定     | 1.35           |

### 雇佣兵

| 修正代码                          | 用法举例                                | 修正描述                                                                                           | 效果类型 | 添加修正的版本 |
| --------------------------------- | --------------------------------------- | -------------------------------------------------------------------------------------------------- | -------- | -------------- |
| mercenary_cost                    | mercenary_cost = -0.1                   | 雇佣兵征召花费                                                                                     | 乘法     | 1.1            |
| merc_maintenance_modifier         | merc_maintenance_modifier = -0.1        | 雇佣兵维护费                                                                                       | 乘法     | 1.1            |
| mercenary_discipline              | mercenary_discipline = 0.1              | 雇佣兵训练度                                                                                       | 乘法     | 1.20           |
| mercenary_manpower                | mercenary_manpower= 0.1                 | 雇佣兵人力                                                                                         | 乘法     | 1.30           |
| allow_mercenary_drill             | allow_mercenary_drill = yes             | 允许雇佣兵操练                                                                                     | 恒定     | 1.35           |
| merc_leader_army_tradition        | merc_leader_army_tradition = 0.5        | 招募雇佣兵将领的军事传统                                                                           | 乘法     | 1.35           |
| merc_independent_from_trade_range | merc_independent_from_trade_range = yes | 允许招募总部位于本国所属贸易范围内的雇佣兵                                                         | 恒定     | 1.35           |
| allow_mercenaries_to_split        | allow_mercenaries_to_split = yes        | 允许雇佣兵分兵。但是分兵后仍只能与属于自己雇佣兵团的雇佣兵合兵。请注意：P社备注该功能可能导致BUG。 | 恒定     | 1.35           |

### 旗舰

| 修正代码                                    | 用法举例                                          | 修正描述                                     | 效果类型 | 添加修正的版本 |
| ------------------------------------------- | ------------------------------------------------- | -------------------------------------------- | -------- | -------------- |
| admiral_skill_gain_modifier                 | admiral_skill_gain_modifier = 0.1                 | 海军将领在战斗中获得技能的概率               | 乘法     | 1.28           |
| flagship_durability                         | flagship_durability = 1                           | 旗舰的耐久                                   | 乘法     | 1.28           |
| flagship_morale                             | flagship_morale = 1                               | 旗舰的士气                                   | 乘法     | 1.28           |
| flagship_naval_engagement_modifier          | flagship_naval_engagement_modifier = 1            | 旗舰占用的海战宽度                           | 加法     | 1.28           |
| flagship_landing_penalty                    | flagship_landing_penalty = 1                      | 旗舰的登陆惩罚                               | 乘法     | 1.28           |
| number_of_cannons_flagship_modifier         | number_of_cannons_flagship_modifier = 0.1         | 旗舰的火力                                   | 乘法     | 1.28           |
| naval_maintenance_flagship_modifier         | naval_maintenance_flagship_modifier = -0.1        | 旗舰的维护费修正                             | 加法     | 1.28           |
| trade_power_in_fleet_modifier               | trade_power_in_fleet_modifier = 1                 | 旗舰所在舰队的贸易力量                       | 加法     | 1.28           |
| morale_in_fleet_modifier                    | morale_in_fleet_modifier = 0.1                    | 旗舰所在舰队的士气                           | 乘法     | 1.28           |
| blockade_impact_on_siege_in_fleet_modifier  | blockade_impact_on_siege_in_fleet_modifier = 0.1  | 旗舰所在舰队造成的封锁影响                   | 加法     | 1.28           |
| exploration_mission_range_in_fleet_modifier | exploration_mission_range_in_fleet_modifier = 100 | 旗舰所在舰队执行探索任务的范围               | 加法     | 1.28           |
| barrage_cost_in_fleet_modifier              | barrage_cost_in_fleet_modifier = -0.1             | 旗舰所在舰队执行海军弹幕的花费               | 乘法     | 1.28           |
| naval_attrition_in_fleet_modifier           | naval_attrition_in_fleet_modifier = -0.1          | 旗舰所在舰队受到的损耗                       | 乘法     | 1.28           |
| privateering_efficiency_in_fleet_modifier   | privateering_efficiency_in_fleet_modifier = 0.1   | 旗舰所在舰队的私掠效率                       | 乘法     | 1.28           |
| prestige_from_battles_in_fleet_modifier     | prestige_from_battles_in_fleet_modifier = 1       | 旗舰和所在舰队在海战中获得的威望             | 乘法     | 1.28           |
| naval_tradition_in_fleet_modifier           | naval_tradition_in_fleet_modifier = 1             | 旗舰和所在舰队在海战中获得的海军传统         | 乘法     | 1.28           |
| cannons_for_hunting_pirates_in_fleet        | cannons_for_hunting_pirates_in_fleet = 1          | 旗舰和所在舰队在执行猎杀海盗任务时的火力加成 | 乘法     | 1.28           |
| movement_speed_in_fleet_modifier            | movement_speed_in_fleet_modifier = 0.1            | 旗舰和所在舰队的移动速度                     | 加法     | 1.28           |
| flagship_cost                               | flagship_cost = -0.2                              | 旗舰建造成本                                 | 乘法     | 1.30           |
| number_of_cannons_flagship_modifier         | number_of_cannons_flagship_modifier = 1           | 旗舰舰炮数量                                 | 乘法     | 1.35           |
| number_of_cannons_flagship                  | number_of_cannons_flagship = 1                    | 旗舰舰炮数量                                 | 加法     | 1.35           |

### 外交

| 修正代码                            | 用法举例                                 | 修正描述                                                                                                                           | 效果类型 | 添加修正的版本                         |
| ----------------------------------- | ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | -------- | -------------------------------------- |
| diplomats                           | diplomats = 1                            | 外交官数量                                                                                                                         | 加法     | 1.1                                    |
| diplomatic_reputation               | diplomatic_reputation = 1                | 外交威望                                                                                                                           | 加法     | 1.1                                    |
| diplomatic_upkeep                   | diplomatic_upkeep = 1                    | 外交关系数量                                                                                                                       | 加法     | 1.1                                    |
| envoy_travel_time                   | envoy_travel_time = -0.2                 | 外交官移动速度                                                                                                                     | 乘法     | 1.06                                   |
| improve_relation_modifier           | improve_relation_modifier = 0.2          | 改善关系效果                                                                                                                       | 乘法     | 1.18                                   |
| ae_impact                           | ae_impact = -0.2                         | 侵略扩张造成的外交影响                                                                                                             | 乘法     | 1.06                                   |
| claim_duration                      | claim_duration = 0.2                     | 宣称持续时间                                                                                                                       | 乘法     | 1.20                                   |
| diplomatic_annexation_cost          | diplomatic_annexation_cost = -0.2        | 外交合并的外交点数花费                                                                                                             | 乘法     | 1.07                                   |
| province_warscore_cost              | province_warscore_cost = -0.2            | 省份战争分数花费：割取敌方省份战争分数花费，此为全局buff                                                                           | 乘法     | 1.08                                   |
| unjustified_demands                 | unjustified_demands = -0.2               | 不合理要求：不符合当前宣战借口的和平条约造成的额外花费                                                                             | 乘法     | 1.1                                    |
| can_transfer_vassal_wargoal         | can_transfer_vassal_wargoal = yes        | 和平协议中获取敌对附庸的战争分数花费减半                                                                                           | 恒定     | 1.20（1.34更新该语句可用于任何修正中） |
| rival_change_cost                   | rival_change_cost = -0.2                 | 更换宿敌造成的外交点数花费                                                                                                         | 乘法     | 1.20                                   |
| justify_trade_conflict_cost         | justify_trade_conflict_cost = -0.2       | 制造贸易冲突需要的间谍网点数花费                                                                                                   | 乘法     | 1.26                                   |
| accept_vassalization_reasons        | accept_vassalization_reasons = 20        | 要求他国成为附庸的影响因素                                                                                                         | 加法     | 1.30                                   |
| transfer_trade_power_reasons        | transfer_trade_power_reasons = 100       | 要求他国转移贸易竞争力的影响因素                                                                                                   | 加法     | 1.30                                   |
| stability_cost_to_declare_war       | stability_cost_to_declare_war = -1       | 宣战导致的稳定度变化                                                                                                               | 加法     | 1.30                                   |
| monthly_favor_modifier              | monthly_favor_modifier = 0.25            | 月度人情增长                                                                                                                       | 乘法     | 1.32                                   |
| overlord_naval_forcelimit_modifier  | overlord_naval_forcelimit_modifier = 0.2 | 宗主国海军规模上限                                                                                                                 | 乘法     | 1.32                                   |
| relation_with_same_religion         | relation_with_same_religion = 10         | 本国对同宗教国家的关系（请注意，一般情况下派出使者提高与他国的关系，提升的是他国对本国的好感，但该修正作用于本国对其他国家的好感） | 加法     | 1.33                                   |
| relation_with_heathens              | relation_with_heathens = 10              | 本国对异教国家的关系（请注意，一般情况下派出使者提高与他国的关系，提升的是他国对本国的好感，但该修正作用于本国对其他国家的好感）   | 加法     | 1.33                                   |
| relation_with_heretics              | relation_with_heretics = 20              | 本国对异端国家的关系（请注意，一般情况下派出使者提高与他国的关系，提升的是他国对本国的好感，但该修正作用于本国对其他国家的好感）   | 加法     | 1.30                                   |
| relation_with_same_culture          | relation_with_same_culture = 10          | 同文化国家对本国的关系                                                                                                             | 加法     | 1.33                                   |
| relation_with_same_culture_group    | relation_with_same_culture_group = 10    | 同文化组国家对本国的关系                                                                                                           | 加法     | 1.33                                   |
| relation_with_accepted_culture      | relation_with_accepted_culture = 10      | 可接受文化为主流文化的国家对本国的关系                                                                                             | 加法     | 1.33                                   |
| relation_with_other_culture         | relation_with_other_culture = 10         | 不同主流文化国家对本国的关系                                                                                                       | 加法     | 1.33                                   |
| years_to_integrate_personal_union   | years_to_integrate_personal_union = -40  | 增加合并联合统治国家所需的时间（单位：年）                                                                                         | 加法     | 1.34                                   |
| can_chain_claim                     | can_chain_claim = yes                    | 允许向已宣称省份的相邻省份造宣称                                                                                                   | 恒定     | 1.20（1.34更新该语句可用于任何修正中） |
| cb_on_government_enemies            | cb_on_government_enemies = yes           | 可以使用“革命”的战争借口                                                                                                           | 恒定     | 1.01                                   |
| reduced_stab_impacts                | reduced_stab_impacts = yes               | 降低外交行动对稳定的影响 (例如：断绝王室联姻)                                                                                      | 恒定     | 1.01                                   |
| chance_to_inherit                   | chance_to_inherit = 0.5                  | 继承联合统治国家的概率                                                                                                             | 乘法     | 1.35                                   |
| reverse_relation_with_same_religion | reverse_relation_with_same_religion = 25 | 同宗教的国家对本国的关系                                                                                                           | 加法     | 1.35                                   |
| overextension_impact_modifier       | overextension_impact_modifier = -0.1     | 过度扩张造成的外交影响                                                                                                             | 加法     | 1.35                                   |

### 经济

| 修正代码                            | 用法举例                                   | 修正描述                                                         | 效果类型 | 添加修正的版本 |
| ----------------------------------- | ------------------------------------------ | ---------------------------------------------------------------- | -------- | -------------- |
| global_tax_income                   | global_tax_income = 12                     | 年度税收收入：global_tax_income = 12，即每月获得1收入            | 加法     | 1.10           |
| global_tax_modifier                 | global_tax_modifier = 0.05                 | 税收收入修正                                                     | 乘法     | 1.1            |
| production_efficiency               | production_efficiency = 0.05               | 生产效率：生产收入修正                                           | 乘法     | 1.1            |
| state_maintenance_modifier          | state_maintenance_modifier = -0.25         | 直辖维护费                                                       | 乘法     | 1.16           |
| inflation_action_cost               | inflation_action_cost = -0.1               | 降低通货膨胀的行政点数花费                                       | 乘法     | 1.02           |
| inflation_reduction                 | inflation_reduction = 0.1                  | 年度通货膨胀下降                                                 | 加法     | 1.1            |
| interest                            | interest = -1                              | 贷款利息                                                         | 加法     | 1.1            |
| development_cost                    | development_cost = -0.1                    | 提升发展度花费                                                   | 乘法     | 1.12           |
| build_cost                          | build_cost = -0.1                          | 建筑花费                                                         | 乘法     | 1.1            |
| build_time                          | build_time = -0.25                         | 建筑时间                                                         | 乘法     | 1.1            |
| administrative_efficiency           | administrative_efficiency = 0.2            | 行政效率：影响造核花费、外交吞并花费、过度扩张影响和战争分数花费 | 乘法     | 1.20           |
| great_project_upgrade_cost          | great_project_upgrade_cost = -0.25         | 伟大工程升级花费                                                 | 乘法     | 1.31           |
| tribal_development_growth           | tribal_development_growth = 0.02           | 部落发展度增长                                                   | 加法     | 1.31           |
| global_monthly_devastation          | global_monthly_devastation = 0.1           | 所有省份的荒废度                                                 | 加法     | 1.32           |
| global_prosperity_growth            | global_prosperity_growth = 0.1             | 所有省份的繁荣度                                                 | 加法     | 1.32           |
| monthly_gold_inflation_modifier     | monthly_gold_inflation_modifier = -0.1     | 月度贵金属导致的通货膨胀                                         | 乘法     | 1.32           |
| gold_depletion_chance_modifier      | gold_depletion_chance_modifier = -0.1      | 金矿耗尽的几率                                                   | 乘法     | 1.32           |
| can_not_build_buildings             | can_not_build_buildings = yes              | 无法建造建筑物                                                   | 恒定     | 1.34           |
| global_allowed_num_of_buildings     | global_allowed_num_of_buildings = 1        | 所有省份可建筑的格子                                             | 加法     | 1.34           |
| global_allowed_num_of_manufactories | global_allowed_num_of_manufactories = 1    | 所有省份可建筑的工厂数量                                         | 加法     | 1.35           |
| free_concentrate_development = yes  | free_concentrate_development = yes         | 集中发展度不会有任何损失                                         | 恒定     | 1.35           |
| centralize_state_cost               | centralize_state_cost = -0.2               | 权力集中化所需的行政点和改革点花费                               | 乘法     | 1.35           |
| great_project_upgrade_time          | great_project_upgrade_time = -0.1          | 伟大工程升级的时间                                               | 乘法     | 1.35           |
| development_cost_in_primary_culture | development_cost_in_primary_culture = -0.1 | 主流文化省份提高发展度所需的力量点数花费                         | 乘法     | 1.35           |

### 科技

| 修正代码                           | 用法举例                                                                                  | 修正描述                                                                              | 效果类型 | 添加修正的版本 |
| ---------------------------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | -------- | -------------- |
| <tech>\_cost_modifier              | dip_tech_cost_modifier = -0.1 mil_tech_cost_modifier = -0.1 adm_tech_cost_modifier = -0.1 | 升级各项科技所需花费的行政君主点数：adm为行政科技花费； dip为外交科技； mil为军事科技 | 乘法     | 1.1            |
| technology_cost                    | technology_cost = -0.1                                                                    | 升级所有科技所需花费的君主点数                                                        | 乘法     | 1.1            |
| idea_cost                          | idea_cost = -0.1                                                                          | 开启理念所需花费的君主点数                                                            | 乘法     | 1.1            |
| embracement_cost                   | embracement_cost = -0.1                                                                   | 接纳思潮的金币花费                                                                    | 乘法     | 1.18           |
| global_institution_spread          | global_institution_spread = 0.1                                                           | 全局思潮传播速度                                                                      | 乘法     | 1.18           |
| institution_spread_from_true_faith | institution_spread_from_true_faith = 0.1                                                  | 国教省份思潮传播速度                                                                  | 乘法     | 1.20           |
| native_advancement_cost            | native_advancement_cost = -0.2                                                            | 土著改革所需花费的君主点数                                                            | 乘法     | 1.04           |
| all_power_cost                     | all_power_cost = -0.1                                                                     | 所有需花费的君主点数                                                                  | 乘法     | 1.16           |
| innovativeness_gain                | innovativeness_gain = 0.5                                                                 | 创新度获得加成                                                                        | 乘法     | 1.25           |
| free_adm_policy                    | free_adm_policy = 1                                                                       | 免费行政政策个数                                                                      | 加法     | 1.26           |
| free_dip_policy                    | free_dip_policy = 1                                                                       | 免费外交政策个数                                                                      | 加法     | 1.26           |
| free_mil_policy                    | free_mil_policy = 1                                                                       | 免费军事政策个数                                                                      | 加法     | 1.26           |
| possible_adm_policy                | possible_adm_policy = 1                                                                   | 可用行政政策槽个数                                                                    | 加法     | 1.26           |
| possible_dip_policy                | possible_dip_policy = 1                                                                   | 可用外交政策槽个数                                                                    | 加法     | 1.26           |
| possible_mil_policy                | possible_mil_policy = 1                                                                   | 可用军事政策槽个数                                                                    | 加法     | 1.26           |
| possible_policy                    | possible_policy = 1                                                                       | 可用策略槽个数（同时增加三种类别的可用政策槽）                                        | 加法     | 1.26           |
| free_policy                        | free_policy = 1                                                                           | 免费政策个数（同时增加三种类别的免费政策）                                            | 加法     | 1.26           |
| country_admin_power                | country_admin_power = 1                                                                   | 每月额外获得行政君主力量点数                                                          | 加法     | 1.30           |
| country_diplomatic_power           | country_diplomatic_power = 1                                                              | 每月额外获得外交君主力量点数                                                          | 加法     | 1.30           |
| country_military_power             | country_military_power = 1                                                                | 每月额外获得军事君主力量点数                                                          | 加法     | 1.30           |
| yearly_innovativeness              | yearly_innovativeness = 0.25                                                              | 年度创新度                                                                            | 加法     | 1.35           |

### 内政

| 修正代码                            | 用法举例                                    | 修正描述                                                                                   | 效果类型 | 添加修正的版本 |
| ----------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------ | -------- | -------------- |
| prestige                            | prestige = 0.5                              | 年度威望                                                                                   | 加法     | 1.1            |
| prestige_decay                      | prestige_decay = -0.01                      | 威望衰减                                                                                   | 乘法     | 1.1            |
| monthly_splendor                    | monthly_splendor = 1                        | 月度辉煌值                                                                                 | 加法     | 1.20           |
| yearly_corruption                   | yearly_corruption = -0.1                    | 年度腐败                                                                                   | 加法     | 1.16           |
| advisor_cost                        | advisor_cost = -0.25                        | 征召顾问花费                                                                               | 乘法     | 1.1            |
| advisor_pool                        | advisor_pool = 1                            | 可以征召的顾问：顾问池                                                                     | 加法     | 1.1            |
| female_advisor_chance               | female_advisor_chance = 0.1                 | 出现女性顾问几率                                                                           | 乘法     | 1.12           |
| heir_chance                         | heir_chance = 0.5                           | 诞生继承人几率                                                                             | 乘法     | 1.1            |
| monarch_admin_power                 | monarch_admin_power = 1                     | 后继统治者的行政属性基础值：统治者包括君主、继承人、配偶不对当前统治者造成影响 fixed = yes | 加法     | 1.20           |
| monarch_diplomatic_power            | monarch_diplomatic_power = 1                | 后继统治者的外交属性基础值：统治者包括君主、继承人、配偶不对当前统治者造成影响 fixed = yes | 加法     | 1.20           |
| monarch_military_power              | monarch_military_power = 1                  | 后继统治者的军事属性基础值：统治者包括君主、继承人、配偶不对当前统治者造成影响 fixed = yes | 加法     | 1.20           |
| adm_advisor_cost                    | adm_advisor_cost = -0.1                     | 雇用行政顾问的花费                                                                         | 乘法     | 1.26           |
| dip_advisor_cost                    | dip_advisor_cost = -0.1                     | 雇用外交顾问的花费                                                                         | 乘法     | 1.26           |
| mil_advisor_cost                    | mil_advisor_cost = -0.1                     | 雇用军事顾问的花费                                                                         | 乘法     | 1.26           |
| monthly_support_heir_gain           | monthly_support_heir_gain = 0.1             | 选举君主制本国继承人每月获得支持度                                                         | 乘法     | 1.27           |
| power_projection_from_insults       | power_projection_from_insults = 0.5         | 侮辱宿敌所得的力量投射，左例即获得的力量投射+50%                                           | 乘法     | 1.26           |
| monarch_lifespan                    | monarch_lifespan = 0.1                      | 君主寿命                                                                                   | 乘法     | 1.30           |
| local_heir_adm                      | local_heir_adm = 1                          | 当地继承人行政能力                                                                         | 加法     | 1.30           |
| local_heir_dip                      | local_heir_dip = 1                          | 当地继承人外交能力                                                                         | 加法     | 1.30           |
| local_heir_mil                      | local_heir_mil = 1                          | 当地继承人军事能力                                                                         | 加法     | 1.30           |
| monthly_heir_claim_increase         | monthly_heir_claim_increase = 0.05          | 继承人正统度每月增长                                                                       | 乘法     | 1.31           |
| national_focus_years                | national_focus_years = -1                   | 设置国家焦点的冷却时间                                                                     | 加法     | 1.34           |
| expand_infrastructure_cost_modifier | expand_infrastructure_cost_modifier = -0.25 | 拓展基础设置花费（拓展基础设施将影响政府改革和相关行政点数花费）                           | 乘法     | 1.35           |
| same_culture_advisor_cost           | same_culture_advisor_cost = -0.5            | 与统治者同文化顾问花费                                                                     | 乘法     | 1.23           |
| same_religion_advisor_cost          | same_religion_advisor_cost = -0.1           | 与统治者同宗教顾问花费                                                                     | 乘法     | 1.35           |

### 政府

| 修正代码                         | 用法举例                               | 修正描述                                                                                       | 效果类型 | 添加修正的版本 |
| -------------------------------- | -------------------------------------- | ---------------------------------------------------------------------------------------------- | -------- | -------------- |
| yearly_absolutism                | yearly_absolutism = 0.1                | 年度专制度                                                                                     | 加法     | 1.20           |
| max_absolutism                   | max_absolutism = 10                    | 最大专制度上限                                                                                 | 加法     | 1.20           |
| legitimacy                       | legitimacy = 1                         | 年度正统性。根据政府类型的不同，并非所有国家都有正统性                                         | 加法     | 1.1            |
| republican_tradition             | republican_tradition = 0.5             | 年度共和传统。根据政府类型的不同，并非所有国家都有共和传统                                     | 加法     | 1.1            |
| devotion                         | devotion = 1                           | 年度奉献度。根据政府类型的不同，并非所有国家都有奉献度                                         | 加法     | 1.12           |
| horde_unity                      | horde_unity = 1                        | 年度游牧团结。根据政府类型的不同，并非所有国家都有游牧团结                                     | 加法     | 1.14           |
| meritocracy                      | meritocracy = 1                        | 年度精英度。根据政府类型的不同，并非所有国家都有精英度                                         | 加法     | 1.20           |
| monthly_militarized_society      | monthly_militarized_society = 0.05     | 月度社会军事化度。根据政府类型的不同，并非所有国家都有军事化社会机制（原版为普鲁士君主制专用） | 加法     | 1.18           |
| yearly_tribal_allegiance         | yearly_tribal_allegiance = 0.05        | 部族忠诚度：部族联盟制专用                                                                     | 加法     | 1.23           |
| <faction>\_influence             | <faction>\_influence = 0.1             | 派系影响力：具体派系可见：/Europa Universalis IV/common/factions                               | 加法     | 1.1            |
| election_cycle                   | election_cycle = 1                     | 共和国选举周期。负值代表减短选举周期，正值代表加长选举周期                                     | 加法     | 1.26           |
| candidate_random_bonus           | candidate_random_bonus = 1             | 共和国随机候选人属性+1                                                                         | 加法     | 1.26           |
| reelection_cost                  | reelection_cost = -0.1                 | 留任候选人共和传统花费                                                                         | 乘法     | 1.26           |
| reform_progress_growth           | reform_progress_growth = 0.1           | 政府改革进度修正                                                                               | 加法     | 1.26           |
| expand_administration_cost       | expand_administration_cost = -0.1      | 行政开支：使用政府改革点数扩大行政容量上限的成本                                               | 乘法     | 1.30           |
| governing_capacity               | governing_capacity = 20                | 行政容量上限                                                                                   | 加法     | 1.30           |
| governing_capacity_modifier      | governing_capacity_modifier = 0.25     | 行政容量增加(百分比)                                                                           | 乘法     | 1.30           |
| state_governing_cost             | state_governing_cost = -0.1            | 直辖州占用的行政容量花费                                                                       | 乘法     | 1.30           |
| trade_company_governing_cost     | trade_company_governing_cost = -0.1    | 贸易公司省份占用的行政容量花费                                                                 | 乘法     | 1.30           |
| governing_cost                   | governing_cost = -0.25                 | 治理成本（省份占用的行政容量）                                                                 | 乘法     | 1.30           |
| yearly_revolutionary_zeal        | yearly_revolutionary_zeal = 4          | 年度革命热情                                                                                   | 加法     | 1.30           |
| max_revolutionary_zeal           | max_revolutionary_zeal = 50            | 最大革命热情上限                                                                               | 加法     | 1.30           |
| monthly_federation_favor_growth  | monthly_federation_favor_growth = 0.05 | 土著联邦月度人情增长                                                                           | 加法     | 1.31           |
| monthly_reform_progress          | monthly_reform_progress = 0.5          | 月度额外政府改革点数（政府改革点数结算完成后再计算此buff的修正）                               | 加法     | 1.31           |
| monthly_reform_progress_modifier | monthly_reform_progress_modifier = 0.1 | 月度政府改革点数修正（自治度与monthly_reform_progress结算完成后再计算此buff的修正）            | 乘法     | 1.31           |
| move_capital_cost_modifier       | move_capital_cost_modifier = -0.1      | 迁都所需要的行政点数花费                                                                       | 乘法     | 1.32           |
| allow_client_states              | allow_client_states = yes              | 允许建立自定义附庸国                                                                           | 恒定     | 1.34           |
| max_absolutism_effect            | max_absolutism_effect = 0.2            | 最大专制度产生的效果修正                                                                       | 乘法     | 1.35           |
| can_revoke_parliament_seats      | can_revoke_parliament_seats = yes      | 允许移除一个省份的议会议席。请注意，这是一个国家修正                                           | 恒定     | 1.35           |
| parliament_backing_chance = 0.25 | parliament_backing_chance = 0.25       | 议会议案初始就获得赞同的概率                                                                   | 乘法     | 1.35           |
| parliament_effect_duration       | parliament_effect_duration = 5         | 议案效果持续时间。请注意，P社备注：任何议案效果持续时间都不应少于1年。                         | 乘法     | 1.35           |
| parliament_debate_duration       | parliament_debate_duration = -5        | 议案辩论持续时间                                                                               | 加法     | 1.35           |
| num_of_parliament_issues         | num_of_parliament_issues = 10          | 议会议案上限                                                                                   | 加法     | 1.35           |
| parliament_chance_of_decision    | parliament_chance_of_decision = 1      | 议案决定几率                                                                                   | 加法     | 1.35           |
| max_possible_parliament_seats    | max_possible_parliament_seats = 15     | 议会议席上限。如果修正值为 0 或负数，那么您的议会可以拥有无限的议席。                          | 加法     | 1.35           |

### 核心

| 修正代码               | 用法举例                      | 修正描述                                                                                   | 效果类型 | 添加修正的版本                         |
| ---------------------- | ----------------------------- | ------------------------------------------------------------------------------------------ | -------- | -------------------------------------- |
| ignore_coring_distance | ignore_coring_distance = yes  | 无视距离造核                                                                               | 恒定     | 1.20（1.34更新该语句可用于任何修正中） |
| enemy_core_creation    | enemy_core_creation = 0.2     | 敌方建造核心花费：其他国家在有该国核心的省份上建立核心的花费，即上古版本我们所说的“贵族哥” | 乘法     | 1.1                                    |
| core_creation          | core_creation = -0.1          | 建造核心花费                                                                               | 乘法     | 1.1                                    |
| core_decay_on_your_own | core_decay_on_your_own = -0.1 | 核心消退速度                                                                               | 乘法     | 1.20                                   |

### 阶层

| 修正代码                               | 用法举例                                     | 修正描述                                                                                                                                 | 效果类型 | 添加修正的版本 |
| -------------------------------------- | -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | -------- | -------------- |
| <estate>\_influence_modifier           | estate_church_influence_modifier = 0.1       | 指定阶层的影响力修正                                                                                                                     | 乘法     | 1.30           |
| <estate>\_loyalty_modifier             | church_loyalty_modifier = 0.1                | 指定阶层的忠诚度修正                                                                                                                     | 乘法     | 1.30           |
| all_estate_loyalty_equilibrium         | all_estate_loyalty_equilibrium = 0.1         | 本国 所有阶层忠诚度修正                                                                                                                  | 乘法     | 1.32           |
| all_estate_influence_modifier          | all_estate_influence_modifier = 0.1          | 本国 所有阶层影响力修正                                                                                                                  | 乘法     | 1.34           |
| allow_free_estate_privilege_revocation | allow_free_estate_privilege_revocation = yes | 允许无视阶级的忠诚度和影响力取消阶级特权                                                                                                 | 恒定     | 1.34           |
| loyalty_change_on_revoked              | loyalty_change_on_revoked = -0.1             | 取消阶层特权导致的忠诚度损失减少（例如：修正“loyalty_change_on_revoked = -0.1”情况下，取消特权会导致减少30%忠诚度，那么实际上只减少20%） | 加法     | 1.35           |
| estate_interaction_cooldown_modifier   | estate_interaction_cooldown_modifier = -0.1  | 阶层互动的冷却时间（阶层互动的冷却时间可以在：common/estate_crown_land/00_interactions.txt 找到。）                                      | 加法     | 1.35           |
| all_estate_possible_privileges         | all_estate_possible_privileges = 1           | 本国 所有阶层的特权槽                                                                                                                    | 加法     | 1.35           |

### 天命

| 修正代码                           | 用法举例                                | 修正描述                         | 效果类型 | 添加修正的版本 |
| ---------------------------------- | --------------------------------------- | -------------------------------- | -------- | -------------- |
| imperial_mandate                   | imperial_mandate = 0.1                  | 月度天命值：中华帝国专用         | 加法     | 1.21           |
| tributary_conversion_cost_modifier | tributary_conversion_cost_modifier = -1 | 朝贡国转化为附庸国所需的天命花费 | 乘法     | 1.35           |

### 神圣罗马帝国

| 修正代码                          | 用法举例                                | 修正描述                               | 效果类型 | 添加修正的版本 |
| --------------------------------- | --------------------------------------- | -------------------------------------- | -------- | -------------- |
| imperial_authority                | imperial_authority = 0.05               | 帝国权威（百分比）：神圣罗马帝国专用   | 乘法     | 1.1            |
| imperial_authority_value          | imperial_authority_value = 0.1          | 月度帝国权威（数值）：神圣罗马帝国专用 | 加法     | 1.1            |
| free_city_imperial_authority      | free_city_imperial_authority = 0.1      | 帝国皇帝从自由市获得的帝国权威         | 加法     | 1.30           |
| imperial_mercenary_cost           | imperial_mercenary_cost = -0.1          | 神罗成员国雇佣佣兵的花费               | 乘法     | 1.30           |
| max_free_cities                   | max_free_cities = 3                     | 帝国自由市的数量上限                   | 加法     | 1.30           |
| max_electors                      | max_electors = 3                        | 选帝侯的数量上限                       | 加法     | 1.30           |
| legitimate_subject_elector        | legitimate_subject_elector = 100        | 选帝侯对当前国家成为帝国皇帝的渴望之情 | 加法     | 1.30           |
| imperial_reform_catholic_approval | imperial_reform_catholic_approval = 10  | 天主教诸侯对帝国改革的支持度           | 加法     | 1.30           |
| reasons_to_elect                  | reasons_to_elect = 10                   | 增加选侯投票给该国的支持度             | 加法     | 1.34           |
| manpower_against_imperial_enemies | manpower_against_imperial_enemies = 100 | 用法未知                               | 加法     | 1.30           |

### 文化

| 修正代码                         | 用法举例                             | 修正描述                                                         | 效果类型 | 添加修正的版本 |
| -------------------------------- | ------------------------------------ | ---------------------------------------------------------------- | -------- | -------------- |
| culture_conversion_cost          | culture_conversion_cost = -0.25      | 转化省份文化的外交点数花费                                       | 乘法     | 1.07           |
| num_accepted_cultures            | num_accepted_cultures = 1            | 增加可接受文化的最大值                                           | 加法     | 1.18           |
| promote_culture_cost             | promote_culture_cost = -0.25         | 接受文化的外交点数花费                                           | 乘法     | 1.23           |
| relation_with_same_culture       | relation_with_same_culture = 5       | 与本国主流文化相同的国家的关系                                   | 加法     | 1.33           |
| relation_with_same_culture_group | relation_with_same_culture_group = 5 | 与本国主流文化为同一文化组的国家的关系（不包括同主流文化的国家） | 加法     | 1.33           |
| relation_with_accepted_culture   | relation_with_accepted_culture = 5   | 与主流文化为本国可接受文化的国家的关系                           | 加法     | 1.33           |
| relation_with_other_culture      | relation_with_other_culture = 5      | 主流文化既不与本国同文化组，也不为本国已接收文化的国家的关系     | 加法     | 1.33           |
| culture_conversion_time          | culture_conversion_time = -0.10      | 转文化所需的时间                                                 | 乘法     | 1.35           |

### 稳定

| 修正代码                            | 用法举例                                  | 修正描述                                                         | 效果类型 | 添加修正的版本 |
| ----------------------------------- | ----------------------------------------- | ---------------------------------------------------------------- | -------- | -------------- |
| global_unrest                       | global_unrest = -2                        | 全国叛乱度                                                       | 加法     | 1.08           |
| stability_cost_modifier             | stability_cost_modifier = -0.1            | 提升稳定的行政点数花费                                           | 乘法     | 1.01           |
| global_autonomy                     | global_autonomy = -0.05                   | 全省份自治度月度变化                                             | 加法     | 1.08           |
| min_autonomy                        | min_autonomy = 50                         | 直属州的最低自治度（50代表50%）                                  | 恒定     | 1.08           |
| autonomy_change_time                | autonomy_change_time = -0.25              | 调整自治度的间隔                                                 | 乘法     | 1.08           |
| harsh_treatment_cost                | harsh_treatment_cost = -0.2               | 使用残酷镇压的军事点数花费                                       | 乘法     | 1.20           |
| years_of_nationalism                | years_of_nationalism = -5                 | 征服省份造成的分离主义基础值                                     | 加法     | 1.07           |
| min_autonomy_in_territories         | min_autonomy_in_territories = -0.1        | 非直辖地区的最低自治度修正（0.5代表50%）                         | 加法     | 1.26           |
| unrest_catholic_provinces           | unrest_catholic_provinces = -1            | 本国天主教省份叛乱度                                             | 加法     | 1.30           |
| can_not_declare_war                 | can_not_declare_war = yes                 | 无法宣布战争                                                     | 恒定     | 1.34           |
| global_rebel_suppression_efficiency | global_rebel_suppression_efficiency = 0.2 | 驻军对省份叛乱的镇压效率（似乎对自动镇压叛军也有效果，待验证。） | 乘法     | 1.32           |

### 附属国

| 修正代码                                  | 用法举例                                        | 修正描述                                                                                                                                                                                                                  | 效果类型 | 添加修正的版本 |
| ----------------------------------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | -------------- |
| liberty_desire                            | liberty_desire = 10                             | 附庸国对宗主国的自由渴望度（这条加给附属国，比如：加给立陶宛，波兰会感受到立陶宛要独立的压力）                                                                                                                            | 加法     | 1.04           |
| liberty_desire_from_subject_development   | liberty_desire_from_subject_development = -0.25 | 因为发展度变化导致的附庸国对宗主国自由渴望度（请注意：自1.29版本起游戏中的提示文本就存在错误。</br>例如，“-20%因为发展度变化导致的附庸国对宗主国自由渴望度”会显示为“-0.20%因为发展度变化导致的附庸国对宗主国自由渴望度”） | 加法     | 1.20           |
| reduced_liberty_desire                    | reduced_liberty_desire = 10                     | 消减附庸国对宗主国的自由渴望度（这条加给宗主国，比如：加给大明，降全部朝贡国的独立欲望）                                                                                                                                  | 加法     | 1.17           |
| reduced_liberty_desire_on_same_continent  | reduced_liberty_desire_on_same_continent = 10   | 消减附庸国对首都在同一大陆的宗主国的自由渴望度（此项应用于宗主国）                                                                                                                                                        | 加法     | 1.20           |
| monarch_power_tribute                     | monarch_power_tribute = 1                       | 朝贡国每年进贡的君主力量点数（上限仍为12）                                                                                                                                                                                | 加法     | 1.35           |
| reduced_liberty_desire_on_other_continent | educed_liberty_desire_on_other_continent = -10  | 消减附庸国对首都在不同大陆的宗主国的自由渴望度（此项应用于宗主国）                                                                                                                                                        | 加法     | 1.35           |
| vassal_forcelimit_bonus                   | vassal_forcelimit_bonus = 0.2                   | 附庸国提供的陆军上限（百分比）                                                                                                                                                                                            | 乘法     | 1.07           |
| vassal_income                             | vassal_income = 0.2                             | 附庸国提供的税贡收入（百分比）                                                                                                                                                                                            | 乘法     | 1.1            |
| vassal_manpower_bonus                     | vassal_manpower_bonus = 0.2                     | 附庸国提供的人力（百分比）                                                                                                                                                                                                | 乘法     | 1.35           |
| vassal_sailors_bonus                      | vassal_sailors_bonus = 0.2                      | 附庸国提供的水手（百分比）                                                                                                                                                                                                | 乘法     | 1.35           |
| vassal_naval_forcelimit_bonus             | vassal_naval_forcelimit_bonus = 0.2             | 附庸国提供的海军上限（百分比）                                                                                                                                                                                            | 乘法     | 1.35           |
| annexation_relations_impact               | annexation_relations_impact = -0.2              | 吞并附庸国导致的好感度变化。举例，吞并附庸国会导致其他所有附庸国-30好感度。                                                                                                                                               | 乘法     | 1.35           |

### 间谍

| 修正代码                    | 用法举例                           | 修正描述                                     | 效果类型 | 添加修正的版本 |
| --------------------------- | ---------------------------------- | -------------------------------------------- | -------- | -------------- |
| spy_offence                 | spy_offence = 0.1                  | 间谍工作效率                                 | 乘法     | 1.01           |
| global_spy_defence          | global_spy_defence = 0.1           | 反间谍工作的效率                             | 乘法     | 1.01           |
| discovered_relations_impact | discovered_relations_impact = -0.1 | 发现间谍行为造成的国家关系影响               | 乘法     | 1.01           |
| rebel_support_efficiency    | rebel_support_efficiency = 0.5     | 对其他国家叛军的支持效率                     | 乘法     | 1.01           |
| fabricate_claims_cost       | fabricate_claims_cost= -0.2        | 伪造宣称间谍点数花费                         | 乘法     | 1.1            |
| cb_on_primitives            | cb_on_primitives = yes             | 可以制造海外殖民地区域殖民领拥有的省份宣称   | 恒定     | 1.01           |
| cb_on_overseas              | cb_on_overseas = yes               | 可以制造海外贸易公司区域的宣称               | 恒定     | 1.01           |
| can_fabricate_for_vassals   | can_fabricate_for_vassals = yes    | 可以为附庸国伪造宣称                         | 恒定     | 1.28           |
| idea_claim_colonies         | idea_claim_colonies = yes          | 可以制造海外殖民地区域其他国家所有省份的宣称 | 恒定     | 1.01           |
| can_claim_states            | can_claim_states = yes             | 可以伪造整个州所有省份的宣称                 | 恒定     | 1.35           |
| spy_action_cost_modifier    | spy_action_cost_modifier = -0.2    | 间谍行动花费的间谍点数                       | 乘法     | 1.35           |

### 宗教

| 修正代码                                 | 用法举例                                       | 修正描述                                   | 效果类型 | 添加修正的版本                         |
| ---------------------------------------- | ---------------------------------------------- | ------------------------------------------ | -------- | -------------------------------------- |
| can_not_build_missionaries               | can_not_build_missionaries = yes               | 禁止该国向省份传教                         | 恒定     | 1.34                                   |
| global_missionary_strength               | global_missionary_strength = 0.03              | 对所有宗教的传教力量                       | 乘法     | 1.01                                   |
| global_heretic_missionary_strength       | global_heretic_missionary_strength = 0.03      | 对异端的传教力量（与传教力量叠加）         | 乘法     | 1.06                                   |
| missionaries                             | missionaries = 1                               | 传教士数量                                 | 加法     | 1.01                                   |
| missionary_maintenance_cost              | missionary_maintenance_cost = -0.5             | 传教维护费                                 | 乘法     | 1.28                                   |
| religious_unity                          | religious_unity = 0.5                          | 国家宗教统一度                             | 乘法     | 1.01                                   |
| tolerance_own                            | tolerance_own = 1                              | 对正统信仰（国教）的容忍度                 | 加法     | 1.01                                   |
| tolerance_heretic                        | tolerance_heretic = 1                          | 对异端信仰的容忍度                         | 加法     | 1.01                                   |
| tolerance_heathen                        | tolerance_heathen = 1                          | 对异教信仰的容忍度                         | 加法     | 1.01                                   |
| papal_influence                          | papal_influence = 0.5                          | 年度教廷影响力（天主教）                   | 加法     | 1.01                                   |
| church_power_modifier                    | church_power_modifier = 0.5                    | 教会点数修正（圣公宗&新教）                | 乘法     | 1.12                                   |
| monthly_fervor_increase                  | monthly_fervor_increase = 1                    | 月度狂热点数（改革宗）                     | 加法     | 1.01                                   |
| harmonization_speed                      | harmonization_speed = 0.2                      | 和谐宗教的速度（儒教）                     | 乘法     | 1.20                                   |
| yearly_harmony                           | yearly_harmony = 1                             | 年度和谐度（儒教）                         | 加法     | 1.20                                   |
| monthly_piety                            | monthly_piety = 0.1                            | 月度虔诚度（穆斯林）                       | 乘法     | 1.22                                   |
| monthly_karma                            | monthly_karma = 0.1                            | 月度业力值（佛教）                         | 乘法     | 1.22                                   |
| enforce_religion_cost                    | enforce_religion_cost = -0.5                   | 和平协议中强迫敌人改变宗教的战争分数花费   | 乘法     | 1.20                                   |
| prestige_per_development_from_conversion | prestige_per_development_from_conversion = 0.5 | 完成省份传教后每点发展度造成的威望变化     | 加法     | 1.20                                   |
| warscore_cost_vs_other_religion          | warscore_cost_vs_other_religion = -0.25        | 对异教国家和平协议中的战争分数花费         | 乘法     | 1.20                                   |
| establish_order_cost                     | establish_order_cost = -0.1                    | 建立修会行动花费                           | 乘法     | 1.28                                   |
| appoint_cardinal_cost                    | appoint_cardinal_cost = -0.2                   | 任命枢机主教花费                           | 乘法     | 1.30                                   |
| global_heathen_missionary_strength       | global_heathen_missionary_strength = 0.02      | 对异教传教力量（与传教力量叠加）           | 加法     | 1.30                                   |
| global_religious_conversion_resistance   | global_religious_conversion_resistance = 0.25  | 增加宗教改革中心转化省份宗教的阻力         | 乘法     | 1.30                                   |
| curia_treasury_contribution              | curia_treasury_contribution = 0.2              | 教宗金库获得献金的实际金额修正             | 乘法     | 1.30                                   |
| curia_powers_cost                        | curia_powers_cost = -0.1                       | 教宗金库的使用花费（教廷影响力花费）       | 乘法     | 1.30                                   |
| yearly_patriarch_authority               | yearly_patriarch_authority = 0.1               | 年度牧首权威                               | 加法     | 1.30                                   |
| cb_on_religious_enemies                  | cb_on_religious_enemies = yes                  | 可以对异端异教国家使用“圣战”的宗教战争借口 | 恒定     | 1.01（1.30更新该语句可用于任何修正中） |
| papal_influence_from_cardinals           | papal_influence_from_cardinals = 1             | 枢机主教提供的教廷影响力                   | 加法     | 1.30                                   |
| yearly_karma_decay                       | yearly_karma_decay = 0.01                      | 年度业力衰减                               | 乘法     | 1.30                                   |
| no_religion_penalty                      | no_religion_penalty = yes                      | 负的宗教容忍不会有负面影响                 | 恒定     | 1.01                                   |
| yearly_authority                         | yearly_authority = 1                           | 年度因蒂国家君主的权威                     | 加法     | 1.32                                   |
| tolerance_of_heretics_capacity           | tolerance_of_heretics_capacity = 1             | 异端容忍的最大值                           | 加法     | 1.32                                   |
| tolerance_of_heathens_capacity           | tolerance_of_heathens_capacity = 1             | 异教容忍的最大值                           | 加法     | 1.32                                   |
| monthly_piety_accelerator                | monthly_piety_accelerator = 0.001              | 月度虔诚加速修正                           | 乘法     | 1.33                                   |
| monthly_karma_accelerator                | monthly_karma_accelerator = 0.02               | 月度业力                                   | 加法     | 1.34                                   |
| monthly_church_power                     | monthly_church_power = 0.02                    | 月度教会力量                               | 加法     | 1.34                                   |

### 殖民

| 修正代码                        | 用法举例                              | 修正描述                                                                         | 效果类型 | 添加修正的版本                         |
| ------------------------------- | ------------------------------------- | -------------------------------------------------------------------------------- | -------- | -------------------------------------- |
| can_not_build_colonies          | can_not_build_colonies = yes          | 禁止该国建立殖民地                                                               | 恒定     | 1.34                                   |
| colonists                       | colonists = 1                         | 殖民队数量                                                                       | 加法     | 1.01                                   |
| colonist_placement_chance       | colonist_placement_chance = 0.05      | 殖民过程中移民的安置概率，只在殖民过程中起效（这关系着月度殖民地人口的增长几率） | 乘法     | 1.01                                   |
| global_colonial_growth          | global_colonial_growth = 10           | 年度殖民地人口增长数量                                                           | 加法     | 1.01                                   |
| range                           | range = 0.5                           | 航行距离，它直接影响探索范围、殖民范围以及隔海造核心的距离                       | 乘法     | 1.01                                   |
| native_uprising_chance          | native_uprising_chance = -0.25        | 殖民地土著叛乱几率                                                               | 乘法     | 1.14                                   |
| native_assimilation             | native_assimilation = 0.25            | 殖民完成后同化土著奖励（同化土著会根据当地土著人数获得殖民地商品生产的加成）     | 乘法     | 1.14                                   |
| migration_cost                  | migration_cost = -0.2                 | 可以进行迁徙的原始土著国家的迁移花费                                             | 乘法     | 1.31                                   |
| global_tariffs                  | global_tariffs = 0.25                 | 关税收入                                                                         | 乘法     | 1.01                                   |
| treasure_fleet_income           | treasure_fleet_income = 0.1           | 来自殖民领运宝船队的收入修正                                                     | 乘法     | 1.28                                   |
| expel_minorities_cost           | expel_minorities_cost = -0.25         | 驱逐少数族群花费                                                                 | 乘法     | 1.28                                   |
| may_establish_frontier          | may_establish_frontier = yes          | 允许使用西伯利亚边疆的机制                                                       | 恒定     | 1.22                                   |
| auto_explore_adjacent_to_colony | auto_explore_adjacent_to_colony = yes | 自动探索与殖民地相邻的未探索省份                                                 | 恒定     | 1.01                                   |
| may_explore                     | may_explore = yes                     | 允许招募探险家与征服者                                                           | 恒定     | 1.01                                   |
| migration_cost                  | migration_cost = -0.2                 | 移民所需的点数花费                                                               | 乘法     | 1.31                                   |
| add_tribal_land_cost            | add_tribal_land_cost = -0.1           | 增加部落领地的花费                                                               | 乘法     | 1.31                                   |
| colony_development_boost        | colony_development_boost = 1          | 殖民完成后的省份生产、税收、人力获得额外增长                                     | 恒定     | 1.20（1.34更新该语句可用于任何修正中） |
| colony_cost_modifier            | colony_cost_modifier = -0.1           | 殖民地维护费                                                                     | 乘法     | 1.35                                   |

### 贸易

| 修正代码                                    | 用法举例                                          | 修正描述                                                                                               | 效果类型 | 添加修正的版本 |
| ------------------------------------------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | -------- | -------------- |
| can_not_send_merchants                      | can_not_send_merchants = yes                      | 禁止该国派遣商人团                                                                                     | 恒定     | 1.34           |
| caravan_power                               | caravan_power = 0.2                               | 商队贸易力量                                                                                           | 乘法     | 1.10           |
| merchants                                   | merchants = 1                                     | 商人数量                                                                                               | 加法     | 1.01           |
| placed_merchant_power                       | placed_merchant_power = 3                         | 有商人驻扎的贸易节点获得的额外贸易力量                                                                 | 加法     | 1.20           |
| global_trade_power                          | global_trade_power = 0.1                          | 全局贸易力量                                                                                           | 乘法     | 1.01           |
| global_foreign_trade_power                  | global_foreign_trade_power = 0.1                  | 非国内贸易节点的贸易力量加成                                                                           | 乘法     | 1.01           |
| global_own_trade_power                      | global_own_trade_power = 0.1                      | 国内贸易节点的贸易力量加成                                                                             | 乘法     | 1.01           |
| global_prov_trade_power_modifier            | global_prov_trade_power_modifier = 0.1            | 本国拥有的省份基础贸易力量（全局）                                                                     | 乘法     | 1.01           |
| global_trade_goods_size                     | global_trade_goods_size = 1                       | 全局商品生产                                                                                           | 加法     | 1.34           |
| global_trade_goods_size_modifier            | global_trade_goods_size_modifier = 0.1            | 全局商品生产加成                                                                                       | 乘法     | 1.12           |
| trade_efficiency                            | trade_efficiency = 0.1                            | 贸易效率：直接作用于贸易收入（最高为200%）                                                             | 乘法     | 1.01           |
| trade_range_modifier                        | trade_range_modifier = 0.25                       | 贸易距离：用以确认一个国家能否在一处贸易节点放置商人                                                   | 乘法     | 1.01           |
| trade_steering                              | trade_steering = 0.1                              | 贸易控制：引导贸易节点贸易流向的贸易力量加成（若有商人在贸易节点驻扎，也会略微提高节点流出的贸易价值） | 乘法     | 1.01           |
| global_ship_trade_power                     | global_ship_trade_power = 0.2                     | 保护贸易时，商船的贸易力量加成                                                                         | 乘法     | 1.16           |
| privateer_efficiency                        | privateer_efficiency = 0.2                        | 私掠效率（海盗）                                                                                       | 乘法     | 1.06           |
| embargo_efficiency                          | embargo_efficiency = 0.25                         | 对其他国家的禁运效率                                                                                   | 乘法     | 1.01           |
| ship_power_propagation                      | ship_power_propagation = 0.1                      | 商船保护贸易时，贸易力量传播修正                                                                       | 乘法     | 1.20           |
| center_of_trade_upgrade_cost                | center_of_trade_upgrade_cost = -0.2               | 贸易中心升级花费                                                                                       | 乘法     | 1.28           |
| trade_company_investment_cost               | trade_company_investment_cost = -0.2              | 贸易公司投资花费                                                                                       | 乘法     | 1.26           |
| mercantilism_cost                           | mercantilism_cost = -0.2                          | 提升重商主义的花费                                                                                     | 乘法     | 1.30           |
| reduced_trade_penalty_on_non_main_tradenode | reduced_trade_penalty_on_non_main_tradenode = 0.2 | 减少商人在非贸易本埠获取贸易收入的惩罚                                                                 | 乘法     | 1.35           |
| placed_merchant_power_modifier              | placed_merchant_power_modifier = 0.2              | 有商人驻扎的贸易节点获得的额外贸易力量                                                                 | 乘法     | 1.35           |

<p align="right">
{% btn https://www.linkcf.top/posts/a57e5ce8, 欧陆风云4修正列表2-省份修正, far fa-hand-point-right, red %}
</p>
