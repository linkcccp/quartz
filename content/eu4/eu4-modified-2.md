---
title: 欧陆风云4修正列表2-省份修正
tags:
  - Game
  - Paradox
  - EU4
  - Wiki
date: 2025-09-06
draft: false
description: 本页面是关于欧陆风云4省份修正的资料
lastmod: 2025-12-28
cover: https://img.linkcf.top/2025/12/20251229115638571.webp
stale: default
---

- [省份修正](#省份修正)
  - [科技](#科技)
  - [军事](#军事)
  - [特殊单位](#特殊单位)
  - [海军](#海军)
  - [外交](#外交)
  - [殖民](#殖民)
  - [经济](#经济)
  - [贸易](#贸易)
  - [宗教](#宗教)
  - [文化](#文化)
  - [稳定度](#稳定度)
- [特殊修正](#特殊修正)
- [已移除的修正](#已移除的修正)
- [参考资料](#参考资料)
- [引用](#引用)
- [CC协议：](#cc协议)

[[eu4-modified|欧陆风云4国家修正]]

## 省份修正

- 此内容可能已落后版本，最后更新于1.30

### 科技

| 修正代码           | 举例举例               | 修正描述                           | 效果类型 | 添加修正的版本 |
| ------------------ | ---------------------- | ---------------------------------- | -------- | -------------- |
| institution_growth | institution_growth = 1 | 按指定值修正一个省中所有思潮的增长 | 加法     | 1.25           |

### 军事

| 修正代码                         | 举例举例                                | 修正描述                                                           | 效果类型 | 添加修正的版本 |
| -------------------------------- | --------------------------------------- | ------------------------------------------------------------------ | -------- | -------------- |
| max_attrition                    | max_attrition = 5                       | 省份最大损耗值                                                     | 加法     | 1.1            |
| attrition                        | attrition = 5                           | 增加省份基础损耗值                                                 | 加法     | 1.1            |
| local_hostile_attrition          | local_hostile_attrition = 5             | 当地敌军损耗值                                                     | 加法     | 1.04           |
| fort_level                       | fort_level = 1                          | 要塞等级：增加省份的要塞等级，将导致围城难度增加                   | 加法     | 1.08           |
| garrison_growth                  | garrison_growth = 0.05                  | 省份守军恢复效率                                                   | 乘法     | 1.1            |
| local_defensiveness              | local_defensiveness = 0.1               | 当地防御效率                                                       | 乘法     | 1.1            |
| local_friendly_movement_speed    | local_friendly_movement_speed = 0.1     | 当地友军移动速度：修正路过当地的友军部队移动速度                   | 乘法     | 1.20           |
| local_hostile_movement_speed     | local_hostile_movement_speed = -0.1     | 当地敌军移动速度：修正路过当地的敌军部队移动速度                   | 乘法     | 1.20           |
| local_manpower                   | local_manpower = 1                      | 当地人力：1单位代表1000人力（数值）                                | 加法     | 1.1            |
| local_manpower_modifier          | local_manpower_modifier = 0.25          | 当地人力（百分比）                                                 | 乘法     | 1.1            |
| local_regiment_cost              | local_regiment_cost = -0.25             | 当地征召部队花费                                                   | 乘法     | 1.1            |
| regiment_recruit_speed           | regiment_recruit_speed = -0.25          | 当地征召部队速度                                                   | 乘法     | 1.1            |
| supply_limit                     | supply_limit = 1                        | 当地补给上限（数值）                                               | 加法     | 1.1            |
| supply_limit_modifier            | supply_limit_modifier = 0.25            | 当地补给上限（百分比）                                             | 乘法     | 1.1            |
| local_amount_of_banners          | local_amount_of_banners = 0.1           | 当地可征召八旗数量                                                 | 乘法     | 1.20           |
| local_fort_maintenance_modifier  | local_fort_maintenance_modifier = -0.1  | 当地堡垒维护费                                                     | 乘法     | 1.34           |
| local_garrison_size              | local_garrison_size = 0.10              | 当地守军规模                                                       | 乘法     | 1.34           |
| local_attacker_dice_roll_bonus   | local_attacker_dice_roll_bonus = 1      | 当地攻击方骰子点数奖励                                             | 加法     | 1.34           |
| local_defender_dice_roll_bonus   | local_defender_dice_roll_bonus = 1      | 当地防御方骰子点数奖励                                             | 加法     | 1.34           |
| local_garrison_damage            | local_garrison_damage = 0.5             | 当地守军战斗力                                                     | 乘法     | 1.35           |
| local_assault_fort_cost_modifier | local_assault_fort_cost_modifier = -0.5 | 强攻当地要塞的花费。                                               | 乘法     | 1.35           |
| local_assault_fort_ability       | local_assault_fort_cost_modifier = -0.2 | 当地围城部队强攻要塞时对守军的伤害。请注意：该修正为正数是debuff。 | 乘法     | 1.35           |

### 特殊单位

| 修正代码                 | 用法举例                     | 修正描述                             | 效果类型 | 添加修正的版本 |
| ------------------------ | ---------------------------- | ------------------------------------ | -------- | -------------- |
| local_has_banners        | local_has_banners = yes      | 允许在当地招八旗军：省份修正         | 恒定     | 1.34           |
| local_amount_of_banners  | local_amount_of_banners = 1  | 当地可招募的八旗上限                 | 加法     | 1.34           |
| local_has_streltsy       | local_has_streltsy = yes     | 允许在当地招募射击军：省份修正       | 恒定     | 1.34           |
| local_has_carolean       | local_has_carolean = yes     | 允许在当地招募卡尔军：省份修正       | 恒定     | 1.34           |
| local_amount_of_carolean | local_amount_of_carolean = 1 | 当地可招募的卡尔军上限               | 加法     | 1.34           |
| local_has_samurai = yes  | local_has_samurai = yes      | 允许在当地招募武士：省份修正         | 恒定     | 1.35           |
| local_has_musketeers     | local_has_musketeers = yes   | 允许在当地招募火枪手：省份修正       | 恒定     | 1.35           |
| local_has_tercio         | local_has_tercio = yes       | 允许在当地招方阵步兵：省份修正       | 恒定     | 1.35           |
| local_amount_of_cawa     | local_amount_of_cawa = 1     | 当地可招募的恰瓦上限                 | 加法     | 1.35           |
| local_amount_of_hussars  | local_amount_of_hussars = 1  | 当地可招募的翼骑兵上限               | 加法     | 1.35           |
| local_has_voc_indiamen   | local_has_voc_indiamen = yes | 允许在当地建造东印度商船：省份修正   | 恒定     | 1.35           |
| local_has_galleass       | local_has_galleass = yes     | 允许在当地建造加莱赛战船：省份修正   | 恒定     | 1.35           |
| local_has_caravel        | local_has_caravel = yes      | 允许在当地建造卡拉维尔帆船：省份修正 | 恒定     | 1.35           |
| local_has_galleon        | local_has_galleon = yes      | 允许在当地建造盖伦帆船：省份修正     | 恒定     | 1.35           |
| local_has_man_of_war     | local_has_man_of_war = yes   | 允许在当地建造主力舰：省份修正       | 恒定     | 1.35           |
| local_has_geobukseon     | local_has_geobukseon = yes   | 允许在当地建造龟船：省份修正         | 恒定     | 1.35           |

### 海军

| 修正代码                        | 用法举例                              | 修正描述                         | 效果类型 | 添加修正的版本 |
| ------------------------------- | ------------------------------------- | -------------------------------- | -------- | -------------- |
| local_naval_engagement_modifier | local_naval_engagement_modifier = 0.1 | 当地海战宽度：仅适用于海洋省份   | 乘法     | 1.16           |
| local_sailors                   | local_sailors = 1                     | 水手数量：1单位代表1个（数值）   | 加法     | 1.16           |
| local_sailors_modifier          | local_sailors_modifier = 0.1          | 水手数量（百分比）               | 乘法     | 1.16           |
| local_ship_cost                 | local_ship_cost = -0.2                | 当地造船花费                     | 乘法     | 1.1            |
| local_ship_repair               | local_ship_repair = 0.2               | 当地船只维修效率                 | 乘法     | 1.1            |
| ship_recruit_speed              | ship_recruit_speed = -0.25            | 当地船只建造速度                 | 乘法     | 1.1            |
| blockade_force_required         | blockade_force_required = 0.5         | 海军封锁当地省份需要的船只数量   | 乘法     | 1.30           |
| hostile_disembark_speed         | hostile_disembark_speed = -0.5        | 敌方部队登陆当地省份的速度       | 乘法     | 1.30           |
| hostile_fleet_attrition         | hostile_fleet_attrition = 5           | 地方船只在当地省份附近海域的损耗 | 乘法     | 1.30           |

### 外交

| 修正代码                     | 用法举例                            | 修正描述         | 效果类型 | 添加修正的版本 |
| ---------------------------- | ----------------------------------- | ---------------- | -------- | -------------- |
| local_warscore_cost_modifier | local_warscore_cost_modifier = -0.1 | 当地战争分数修正 | 乘法     | 1.30           |

### 殖民

| 修正代码                        | 用法举例                               | 修正描述             | 效果类型 | 添加修正的版本 |
| ------------------------------- | -------------------------------------- | -------------------- | -------- | -------------- |
| local_colonial_growth           | local_colonial_growth = 10             | 当地殖民人口增长     | 加法     | 1.1            |
| local_colonist_placement_chance | local_colonist_placement_chance = 0.05 | 当地殖民人口定居几率 | 加法     | 1.1            |
| local_colony_cost_modifier      | local_colony_cost_modifier = -0.1      | 当地殖民地维护费     | 乘法     | 1.35           |

### 经济

| 修正代码                             | 用法举例                                    | 修正描述                               | 效果类型 | 添加修正的版本 |
| ------------------------------------ | ------------------------------------------- | -------------------------------------- | -------- | -------------- |
| inflation_reduction_local            | inflation_reduction_local = 0.1             | 当地通货膨胀                           | 加法     | 1.1            |
| local_state_maintenance_modifier     | local_state_maintenance_modifier = -0.25    | 当地直辖州维护费                       | 乘法     | 1.16           |
| local_build_cost                     | local_build_cost = -0.25                    | 当地建筑花费                           | 乘法     | 1.1            |
| local_build_time                     | local_build_time = -0.25                    | 当地建筑时间                           | 乘法     | 1.1            |
| local_monthly_devastation            | local_monthly_devastation = -0.1            | 当地月度荒废度                         | 加法     | 1.20           |
| local_production_efficiency          | local_production_efficiency = 0.1           | 当地生产效率                           | 乘法     | 1.1            |
| local_tax_modifier                   | local_tax_modifier = 0.1                    | 当地税收（百分比）                     | 乘法     | 1.1            |
| tax_income                           | tax_income = 12                             | 当地年度税收（数值）                   | 加法     | 1.10           |
| allowed_num_of_buildings             | allowed_num_of_buildings = 1                | 当地可建筑格子上限                     | 加法     | 1.12           |
| local_development_cost               | local_development_cost = -0.1               | 当地提升发展度花费                     | 乘法     | 1.12           |
| local_institution_spread             | local_institution_spread = 0.1              | 当地思潮传播速度                       | 乘法     | 1.18           |
| local_core_creation                  | local_core_creation = -0.25                 | 当地建造核心花费                       | 乘法     | 1.18           |
| local_governing_cost                 | local_governing_cost = -0.25                | 当地省份占用的行政容量花费             | 乘法     | 1.30           |
| statewide_governing_cost             | statewide_governing_cost = -0.25            | 直辖州内所有省份占用的行政容量花费     | 乘法     | 1.30           |
| local_great_project_upgrade_cost     | local_great_project_upgrade_cost = -0.25    | 当地伟大工程升级花费                   | 乘法     | 1.31           |
| local_gold_depletion_chance_modifier | local_gold_depletion_chance_modifier = -0.1 | 当地金矿垮塌几率                       | 乘法     | 1.32           |
| local_prosperity_growth              | local_prosperity_growth = -0.1              | 当地繁荣度增长                         | 加法     | 1.32           |
| allowed_num_of_manufactories         | allowed_num_of_manufactories = 1            | 当地可建造的工厂建筑数量               | 加法     | 1.34           |
| local_great_project_upgrade_time     | local_great_project_upgrade_time = -0.1     | 当地伟大工程升级的时间                 | 乘法     | 1.35           |
| local_centralize_state_cost          | local_centralize_state_cost = -0.2          | 当地权力集中化所需的行政点和改革点花费 | 乘法     | 1.35           |

### 贸易

| 修正代码                      | 用法举例                            | 修正描述                   | 效果类型 | 添加修正的版本 |
| ----------------------------- | ----------------------------------- | -------------------------- | -------- | -------------- |
| province_trade_power_modifier | province_trade_power_modifier = 0.1 | 省份贸易力量（百分比）     | 乘法     | 1.1            |
| province_trade_power_value    | province_trade_power_value = 0.5    | 省份贸易力量（数值）       | 加法     | 1.1            |
| trade_goods_size_modifier     | trade_goods_size_modifier = 0.25    | 当地商品生产规模（百分比） | 乘法     | 1.12           |
| trade_goods_size              | trade_goods_size = 0.5              | 当地商品生产出规模（数值） | 加法     | 1.12           |
| trade_value_modifier          | trade_value_modifier = 0.1          | 当地贸易额（百分比）       | 乘法     | 1.1            |
| trade_value                   | trade_value = 1                     | 当地贸易额（数值）         | 加法     | 1.1            |

### 宗教

| 修正代码                              | 用法举例                                    | 修正描述                               | 效果类型 | 添加修正的版本 |
| ------------------------------------- | ------------------------------------------- | -------------------------------------- | -------- | -------------- |
| local_missionary_strength             | local_missionary_strength = 0.01            | 当地传教力量：1代表100%传教力量        | 加法     | 1.1            |
| local_religious_unity_contribution    | local_religious_unity_contribution = 0.1    | 增加由省份贡献的宗教统一               | 加法     | 1.28           |
| local_missionary_maintenance_cost     | local_missionary_maintenance_cost = -0.1    | 增加转换一个省份的传教维护费           | 乘法     | 1.28           |
| local_religious_conversion_resistance | local_religious_conversion_resistance = 0.1 | 当地省份宗教改革中心转化省份宗教的阻力 | 加法     | 1.30           |
| local_tolerance_of_heretics           | local_tolerance_of_heretics = 1             | 当地异端容忍                           | 加法     | 1.35           |
| local_tolerance_of_heathens           | local_tolerance_of_heathens = 1             | 当地异教容忍                           | 加法     | 1.35           |

### 文化

| 修正代码                      | 用法举例                              | 修正描述                 | 效果类型 | 添加修正的版本 |
| ----------------------------- | ------------------------------------- | ------------------------ | -------- | -------------- |
| local_culture_conversion_cost | local_culture_conversion_cost = -0.25 | 当地转文化所需的君主点数 | 乘法     | 1.22           |
| local_culture_conversion_time | local_culture_conversion_time = -0.25 | 当地转文化所需的时间     | 乘法     | 1.35           |

### 稳定度

| 修正代码                   | 用法举例                        | 修正描述       | 效果类型 | 添加修正的版本 |
| -------------------------- | ------------------------------- | -------------- | -------- | -------------- |
| local_unrest               | local_unrest = -1               | 当地叛乱度     | 加法     | 1.08           |
| local_autonomy             | local_autonomy = 0.05           | 当地自治度     | 加法     | 1.08           |
| local_years_of_nationalism | local_years_of_nationalism = -5 | 当地分离主义   | 加法     | 1.20           |
| min_local_autonomy         | min_local_autonomy = 50         | 省份最小自治度 | 恒定     | 1.16           |

## 特殊修正

- 此内容可能已落后版本，最后更新于1.30

有诺干个特别的修正只能用于**事件修正**中：

```
religion = yes
secondary_religion = yes
```

若是添加了这两个修正，改教（或者和谐宗教）就会导致整个事件修正消失。

**文明的摇篮**只适用于DLC文明的摇篮激活时。

```
is_janissary_modifier = yes
```

若是添加了这个修正，此修正就只作用于奥斯曼新军（禁卫军）。若未开启文明的摇篮，此修正将被忽略同时修正效果会变成普通的全局修正。

**达摩**只适用于DLC达摩激活时。

```
is_rajput_modifier = yes
```

若是添加了这个修正，此修正就只作用于拉杰普特兵团。若未开启达摩，这部分会被忽略并且这个事件修正成为一个普通的全局修正。

**皇帝**只适用于DLC皇帝激活时。

```
is_revolutionary_guard_modifier = yes
```

若是添加了这个修正，此修正就只作用于革命卫队。需要皇帝DLC。

**起源**只适用于DLC起源激活时。

```
is_cawa_modifier = yes
```

若是添加了这个修正，此修正就只作用于恰瓦。若未开启起源DLC，此修正将被忽略同时修正效果会变成普通的全局修正。

---

```
is_mercenary_modifier = yes
```

若是添加了这个修正，此修正就只作用于**雇佣军团**。

```
is_marine_modifier = yes
```

若是添加了这个修正，此修正就只作用于**海军陆战队**。

```
is_banner_modifier = yes
```

若是添加了这个修正，此修正就只作用于**八旗**。

```
is_streltsy_modifier = yes
```

若是添加了这个修正，此修正就只作用于**射击军**。

```
is_cossack_modifier = yes
```

若是添加了这个修正，此修正就只作用于**哥萨克**。

```
is_carolean_modifier = yes
```

若是添加了这个修正，此修正就只作用于**卡尔军**。

```
is_hussars_modifier = yes
```

若是添加了这个修正，此修正就只作用于**翼骑兵**。

```
is_musketeer_modifier = yes
```

若是添加了这个修正，此修正就只作用于**火枪手**。

```
is_tercio_modifier = yes
```

若是添加了这个修正，此修正就只作用于**方阵步兵**。

## 已移除的修正

- 此内容可能已落后版本，最后更新于1.30

这些修正已经从游戏中移除且不再生效。

| 修正代码                        | 用法举例                               | 移除修正的版本     |
| ------------------------------- | -------------------------------------- | ------------------ |
| overseas_income                 | overseas_income = 0.1                  | 1.4                |
| local_tariffs                   | local_tariffs = 0.1                    | 1.4                |
| colonist_time                   | colonist_time = -0.1                   | 1.4                |
| leader_fire                     | leader_fire = 1                        | 1.6                |
| leader_shock                    | leader_shock = 1                       | 1.6                |
| minimum_revolt_risk             | minimum_revolt_risk = 1                | 1.8                |
| local_revolt_risk               | local_revolt_risk = 1                  | 1.8                |
| global_revolt_risk              | global_revolt_risk = 1                 | 1.8                |
| colonial_liberty_desire         | colonial_liberty_desire = 0.05         | 1.10 (添加于 1.08) |
| merchant_steering_to_inland     | merchant_steering_to_inland = 10       | 1.10 (添加于 1.06) |
| may_force_march                 | may_force_march = yes                  | 1.10               |
| merchant_present_inland         | merchant_present_inland = 5            | 1.10 (添加于 1.06) |
| build_power_cost                | build_power_cost = -0.2                | 1.12 (添加于 1.07) |
| global_trade_income_modifier    | global_trade_income_modifier = 0.1     | 1.13               |
| reduced_native_attacks          | reduced_native_attacks = yes           | 1.14               |
| local_spy_defence               | local_spy_defence = 0.5                | 1.16               |
| may_study_technology            | may_study_technology = yes             | 1.16               |
| may_sow_discontent              | may_sow_discontent = yes               | 1.16               |
| may_sabotage_reputation         | may_sabotage_reputation = yes          | 1.16               |
| may_infiltrate_administration   | may_infiltrate_administration = yes    | 1.16               |
| may_agitate_for_liberty         | may_agitate_for_liberty = yes          | 1.16               |
| accepted_culture_threshold      | accepted_culture_threshold = -0.1      | 1.18 (添加于 1.07) |
| relations_decay_of_me           | relations_decay_of_me = 0.3            | 1.19               |
| no_cost_for_reinforcing         | no_cost_for_reinforcing = yes          | 1.19               |
| cs_only_local_development_cost  | cs_only_local_development_cost = -0.25 | 1.27               |
| max_states                      | max_states = 5                         | 1.30（添加于1.16） |
| possible_mercenaries            | possible_mercenaries = 0.5             | 1.30               |
| religious_conversion_resistance | religious_conversion_resistance = 0.1  | 1.30（添加于1.20） |
| migration_cooldown              | migration_cooldown = -0.2              | 1.31 (添加于1.04)  |

## 参考资料

- [修正](https://www.eu4cn.com/wiki/%E4%BF%AE%E6%AD%A3)
- [修正类型及修改](https://www.eu4cn.com/wiki/%E4%BF%AE%E6%AD%A3%E4%BF%AE%E6%94%B9)
- [静态修正](https://www.eu4cn.com/wiki/%E9%9D%99%E6%80%81%E4%BF%AE%E6%AD%A3)
- [触发修正](https://www.eu4cn.com/wiki/%E8%A7%A6%E5%8F%91%E4%BF%AE%E6%AD%A3)

## 引用

- [欧陆风云4中文百科-修正列表](https://www.eu4cn.com/wiki/%E4%BF%AE%E6%AD%A3%E5%88%97%E8%A1%A8)

## CC协议：

本作品 许可于以下 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1)
