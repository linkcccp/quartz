---
title: 欧陆风云4Defines第三部分
tags:
  - EU4
  - Game
  - Paradox
  - Wiki
date: 2025-09-06
draft: false
description: 本文章是摘抄自欧陆风云4中文百科-Defines的内容
lastmod: 2025-12-28
cover: https://img.linkcf.top/2025/12/20251229115638571.webp
stale: default
---

- [定义](#定义)
  - [NEconomy](#neconomy)
  - [NMilitary](#nmilitary)

[[eu4-defines|欧陆风云4定义第一部分]]

[[eu4-defines-2|欧陆风云4定义第二部分]]

[[eu4-defines-4|欧陆风云4定义第四部分]]

[[eu4-defines-5|欧陆风云4定义第五部分]]

## 定义

### NEconomy

- 此内容可能已落后版本，最后更新于1.34

| Define                                                    | Default | Notes                                                                                                |
| --------------------------------------------------------- | ------- | ---------------------------------------------------------------------------------------------------- |
| EDICTS_COST_INCREASE                                      | 2.0     | 开启法令后，直属州维护费增加倍数                                                                     |
| EDICTS_DURATION_MONTHS                                    | 12      | 法令最短持续时间                                                                                     |
| TRADING_CITY_TRADING_RANGE_BOOST                          | 0.2     | 贸易城市贸易范围提升                                                                                 |
| MIN_DIPLO_LOAN_INTEREST                                   | 0.5     | 外交贷款最小利息                                                                                     |
| MAX_DIPLO_LOAN_INTEREST                                   | 100     | 外交贷款最大利息                                                                                     |
| DIPLO_LOAN_INTEREST_STEP                                  | 0.05    | 外交贷款每点击一次提升的利息                                                                         |
| MIN_DIPLO_LOAN_DURATION                                   | 1       | 外交贷款最低贷款数                                                                                   |
| MAX_DIPLO_LOAN_DURATION                                   | 3600    | 外交贷款最高贷款数                                                                                   |
| DEBASE_MAX_STORED_MONTHS                                  | 60      | 最高累计贬值货币时间计数（DEBASE_MAX_STORED_MONTHS除以DEBASE_MONTHS_PER_CHARGE即为总贷款次数上限）   |
| DEBASE_MONTHS_PER_CHARGE                                  | 12      | 每次贬值货币时间计数                                                                                 |
| DEBASE_MAX_CORRUPTION                                     | 90      | 高于此腐败度，将不能贬值货币                                                                         |
| DEBASE_ADDED_CORRUPTION                                   | 2       | 每次贬值货币获得的腐败度                                                                             |
| GOLD_MINE_SIZE                                            | 40      | 每单位金矿带来的年度基础收入                                                                         |
| GOLD_MINE_DEPLETION_THRESHOLD                             | 1       | 高于此发展度的金矿有几率塌陷                                                                         |
| GOLD_MINE_DEPLETION_CHANCE                                | 0.1     | （每高于塌陷阈值1点）年度金矿塌陷概率                                                                |
| GOLD_MINE_SIZE_PRIMITIVES                                 | 4       | 未开化国家金矿转化倍数                                                                               |
| TRADE_POWER_HOME_BONUS                                    | 0.1     | 贸易本埠贸易力量修正                                                                                 |
| TRADE_POWER_HOME_BONUS_MAX                                | 1       | 贸易本埠竞争力修正最大值                                                                             |
| AUTONOMY_AT_DIPLO_ANNEX                                   | 60      | 外交吞并省份自治度                                                                                   |
| AUTONOMY_AT_CONQUEST                                      | 50      | 征服吞并省份自治度                                                                                   |
| AUTONOMY_AT_CONQUEST_CLAIM                                | 40      | 征服吞并省份自治度（拥有宣称）                                                                       |
| AUTONOMY_AT_CONQUEST_CORE                                 | 0       | 征服吞并省份自治度（拥有核心）                                                                       |
| OVERSEAS_MIN_AUTONOMY                                     | 75      | 海外省份最低自治度（1.16版本后，直属州与自治领地机制取代海外省份机制）                               |
| COLONY_MIN_AUTONOMY                                       | 50      | 殖民地核心最低自治度                                                                                 |
| CAPITAL_MAX_AUTONOMY                                      | 0       | 首都最高自治度                                                                                       |
| DECREASE_AUTONOMY_STEP                                    | -25     | 每次降低自治度数值                                                                                   |
| DECREASE_AUTONOMY_MIN                                     | 10      | 低于此数值，将不可以再降低自治度                                                                     |
| INCREASE_AUTONOMY_STEP                                    | 25      | 提升自治度数值                                                                                       |
| INCREASE_AUTONOMY_MAX                                     | 91      | 高于此数值，将不再可以提高自治度                                                                     |
| AUTONOMY_CHANGE_DURATION                                  | 10950   | 改变自治度冷却时间（30年）                                                                           |
| LAND_TECH_MAINTENANCE_IMPACT                              | 0.02    | 每级科技带来的陆军维护费修正                                                                         |
| NAVAL_TECH_MAINTENANCE_IMPACT                             | 0.02    | 每级科技带来的海军维护费修正                                                                         |
| LAND_TECH_MAINTENANCE_IMPACT                              | 0.08    | 每级科技带来的雇佣军维护费修正                                                                       |
| ADVISOR_COST                                              | 1.0     | 顾问花费修正                                                                                         |
| GOLD_INFLATION_THRESHOLD                                  | 0.0     | 金矿产生通货膨胀的                                                                                   |
| GOLD_INFLATION                                            | 0.5     | 金矿占比收入折算通货膨胀倍数                                                                         |
| TREASURE_FLEET_INFLATION                                  | 0.5     | 珍宝舰队占比收入折算通货膨胀                                                                         |
| BASE_YEARLY_INFLATION                                     | 0       | 年度通货膨胀变化量                                                                                   |
| INFLATION_FROM_LOAN                                       | 0.1     | 每笔贷款增加的通货膨胀                                                                               |
| INFLATION_FROM_PEACE_GOLD                                 | 0.02    | 合约中索要金币占比收入折算通货膨胀、                                                                 |
| INFLATION_ACTION_REDUCTION                                | 2       | 降低通货膨胀减少量                                                                                   |
| BANKRUPTCY_DURATION                                       | 5       | 破产持续时间                                                                                         |
| BANKRUPTCY_BUILDING_DESTRUCTION_THRESHOLD                 | 5       | 破产前此年份内建造的建筑将被摧毁，此值设置为0将禁用此功能                                            |
| BANKRUPTCY_PROVINCE_DEVASTATION_GAIN                      | 10      | 宣布破产后，全国所有省份获得的荒废度                                                                 |
| WARTAXES_DURATION                                         | 2       | 战争税持续时间                                                                                       |
| MINIMUM_INTERESTS                                         | 1.0     | 最低利率                                                                                             |
| BASE_INTERESTS                                            | 4.0     | 基础利率                                                                                             |
| LAND_MAINTENANCE_FACTOR                                   | 0.25    | 陆军维护费系数                                                                                       |
| HEAVY_SHIP_MAINT_FACTOR                                   | 0.10    | 重型船只维护费系数                                                                                   |
| LIGHT_SHIP_MAINT_FACTOR                                   | 0.03    | 轻型船只维护费系数                                                                                   |
| GALLEY_MAINT_FACTOR                                       | 0.04    | 桨帆船维护费系数                                                                                     |
| TRANSPORT_MAINT_FACTOR                                    | 0.04    | 运输船维护费系数                                                                                     |
| COLONIAL_MAINTENANCE_FACTOR                               | 8.0     | 殖民地省份维护费系数                                                                                 |
| MISSIONARY_MAINTENANCE_FACTOR                             | 0.0     | 基础传教花费（1.24版本后，取消了传教固定数值花费的设定；1.28版本后，传教花费公式变更为非线性函数。） |
| MISSIONARY_MAINTENANCE_DEVELOPMENT_FACTOR                 | 0.5     | 传教花费发展度乘数                                                                                   |
| MISSIONARY_MAINTENANCE_AUTONOMY_FACTOR                    | 0.75    | 传教花费自治度乘数                                                                                   |
| MISSIONARY_MAINTENANCE_AUTONOMY_BASE                      | 1.0     | 传教花费自治度加数                                                                                   |
| MISSIONARY_MAINTENANCE_DEVELOPMENT_CAP                    | 30      | 发展度达到此值后，对传教维护费的影响达到最大值                                                       |
| MERCHANT_TIME_DISTANCE                                    | 0.25    |                                                                                                      |
| MERCHANT_CHANCE                                           | 0.35    |                                                                                                      |
| MERCHANT_COMPETE                                          | 0.5     |                                                                                                      |
| MAX_PROVINCE_SELL_PRICE                                   | 100     |                                                                                                      |
| COLONIST_DISTANCE_DIVISOR                                 | 1000    |                                                                                                      |
| COLONIST_TIME                                             | 0.3     |                                                                                                      |
| COLONIST_CHANCE                                           | 0.05    |                                                                                                      |
| MISSIONARY_TIME_BASE                                      | 1000    | 传教士移动速度，EDEF_MISSIONARY_TIME_BASE = 10                                                       |
| MISSIONARY_TIME_DISTANCE                                  | 0.2     | 传教士移动距离，EDEF_MISSIONARY_TIME_DISTANCE = 10，故传教士行动永远瞬间完成                         |
| TRADE_WIND_STRENGTH                                       | 0.5     | 信风对贸易范围和殖民距离修正                                                                         |
| MERCHANT_COMPETE_PERCENT_OWNED_BASE                       | 0.25    |                                                                                                      |
| TRADED_FRACTION_FOR_BONUS                                 | 0.20    |                                                                                                      |
| OPEN_SEA_MODIFIER                                         | 1.7     |                                                                                                      |
| COASTAL_MODIFIER                                          | 1.0     |                                                                                                      |
| TRADE_CAPITAL_POWER                                       | 5.0     |                                                                                                      |
| MERCHANT_SPEED                                            | 20.0    | 商人团移动速度                                                                                       |
| MERCHANT_MAX_POWER_BONUS                                  | 2.0     | 商人团提供贸易竞争力最大值                                                                           |
| TRADE_SHIP_MAX_DAYS_IN_PORT                               | 5.0     | 轻型船只港口停留时间                                                                                 |
| TRADE_SHIP_ORG_LIMIT                                      | 0.5     |                                                                                                      |
| TRADE_NON_CAPITAL_OFFICE                                  | -0.50   | 在非本埠节点派遣商人团，获取贸易收入将遭受的贸易竞争力惩罚                                           |
| TRADE_MERCHANT_PRESENT                                    | 0.1     | 派遣商人对贸易力量的提升                                                                             |
| EMBARGO_BASE_EFFICIENCY                                   | 0.5     | 基础禁运效率                                                                                         |
| EMBARGO_MERCANTILISM_EFFICIENCY                           | 50      | 重商主义对禁运效率转化百分比                                                                         |
| TRADE_ADDED_VALUE_MODIFER                                 | 0.05    |                                                                                                      |
| TRADE_PROPAGATE_DIVIDER                                   | 5       |                                                                                                      |
| TRADE_PROPAGATE_THRESHOLD                                 | 2       |                                                                                                      |
| REGAIN_COST_BEFORE_PROGRESS                               | 0.1     | 在多少百分比之前会恢复全部成本                                                                       |
| ALLOW_DESTROY_MANUFACTORY                                 | 0       | 是否允许玩家摧毁工厂                                                                                 |
| PIRATES_TRADE_POWER_FACTOR                                | 1.5     |                                                                                                      |
| PIRATES_MONOPOLY_BONUS                                    | 1       | 垄断节点的系数加到私掠者的权力效率上。                                                               |
| TRADE_COMPANY_CONTROL_LIMIT                               | 0.6     |                                                                                                      |
| TRADE_COMPANY_DAYS_TO_SWAP_LEADER                         | 30      |                                                                                                      |
| TRADE_COMPANY_STRONG_LIMIT                                | 0.51    |                                                                                                      |
| TRADE_COMPANY_COOLDOWN                                    | 60      |                                                                                                      |
| LARGE_COLONIAL_NATION_LIMIT                               | 10      |                                                                                                      |
| PRIVATEER_INCOME_COLLECTION_EFF                           | 0.5     |                                                                                                      |
| MIN_ARMY_MAINTENANCE                                      | 0.1     |                                                                                                      |
| MIN_NAVY_MAINTENANCE                                      | 0.1     |                                                                                                      |
| CARAVAN_FACTOR                                            | 3.0     | 发展除以这个系数不要设为零！                                                                         |
| CARAVAN_POWER_MAX                                         | 50      |                                                                                                      |
| CARAVAN_POWER_MIN                                         | 2       |                                                                                                      |
| MAX_BUILDING_SLOTS                                        | 12      | 建筑栏的上限。譬如：最多允许的建筑数量。                                                             |
| COT_BUILDING_SLOTS                                        | 2       | 贸易中心占用建筑栏的数量。                                                                           |
| COT_DOWNGRADE_PRESTIGE_COST                               | -10     | 降级贸易中心的威望花费。                                                                             |
| MAX_LD_FOR_CONSTRUCT_IN_SUBJECT                           | 50      | 宗主能从属国友善省份征募的陆军和海军单位的最大独立倾向值。                                           |
| CONSTRUCT_IN_SUBJECT_TIME_MULTIPLIER                      | 1.25    |                                                                                                      |
| BANK_LOAN_DURATION                                        | 60      | 默认贷款持续时间以月计算。                                                                           |
| MIN_NEW_CACHED_STARTING_INCOME                            | 1.0     | 建立/释放出来的国家最低收入。                                                                        |
| EXPELLED_MINORITY_DEV_BONUS_FACTOR                        | 0.2     | 少数民族驱逐出境完成后的奖励，乘以原本省份的发展度。                                                 |
| EXPELLING_MINORITY_COLONIST_COST_FACTOR                   | 0.5     | 当选定“驱逐少数民族”时殖民地维护费修正                                                               |
| EXPELLING_MINORITY_SETTLER_CHANCE_FACTOR                  | 0.001   | 定居几率增长当少数族群被驱逐后，以来源省份发展度的成倍增长。                                         |
| USE_COLONIZER_RELIGION_ON_COLONY_COMPLETION_WITH_COLONIST | 1       | 殖民完成后，殖民地宗教是否是主流信仰                                                                 |
| USE_COLONIZER_CULTURE_ON_COLONY_COMPLETION_WITH_COLONIST  | 0       | 殖民完成后，殖民地宗教是否是主流文化                                                                 |

### NMilitary

- 此内容可能已落后版本，最后更新于1.29

| Define                                        | Default | Notes                                                                                                             |
| --------------------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------- |
| SLACKEN_AP_DROP                               | 0.05    | 陆军传统衰退                                                                                                      |
| SLACKEN_MANPOWER_INCREASE                     | 1.0     | 人力增加修正                                                                                                      |
| DEVELOPMENT_FOR_BLOCKADE_COST                 | 0.5     |                                                                                                                   |
| ARMY_DRILL_YEARLY_DECAY                       | -1.0    | 年度陆军操练衰减（停止操练时）                                                                                    |
| ARMY_DRILL_YEARLY_GAIN                        | 10.0    | 年度陆军操练获取                                                                                                  |
| ARMY_DRILL_MAX                                | 100.0   | 操练度最大值                                                                                                      |
| ARMY_DRILL_MAX_MORALE                         | 0.5     | 操练时士气最大值                                                                                                  |
| ARMY_DRILL_SKILL_MONTHS                       | 120     | 训练部队占陆军上限的100%时，获得技能增强的概率平均值（此值为0时禁用此功能）                                       |
| COSSACKS_SHOCK_DAMAGE_BONUS                   | 0.1     | 哥萨克冲击修正                                                                                                    |
| STRELTSY_FIRE_DAMAGE_BONUS                    | 0.1     | 射击军火力修正                                                                                                    |
| MAX_SAILOR_LACK_ATTRITION                     | 1       | 缺少水手遭受损耗                                                                                                  |
| SAILOR_MAINTAINANCE                           | 0.02    | （基于对应船只建造时消耗的水手）水手维护                                                                          |
| BANNER_DISCIPLINE_BONUS                       | 0.05    | 八旗训练度修正                                                                                                    |
| BANNER_MANPOWER_USAGE                         | 0.25    | 八旗所需人力修正                                                                                                  |
| BANNER_REINFORCE_SPEE                         | -0.5    | 八旗补员速度修正                                                                                                  |
| BANNER_MAINTENANCE_COST                       | 0.5     | 八旗维护费修正                                                                                                    |
| BANNER_AGE_MULTIPLIER                         | 0.50    | 八旗数目时代能力修正                                                                                              |
| BANNER_STARTING_STRENGTH                      | 0.1     | 八旗初始兵力                                                                                                      |
| CAWA_STARTING_STRENGTH                        | 0.1     | 恰瓦初始兵力                                                                                                      |
| CAWA_STARTING_MORALE                          | 0.5     | 恰瓦初始士气                                                                                                      |
| CAROLEAN_STARTING_STRENGTH                    | 1.0     | 卡尔军初始兵力                                                                                                    |
| CAROLEAN_STARTING_MORALE                      | 0.1     | 卡尔军初始士气                                                                                                    |
| FORT_DEVASTATION_IMPACT                       | -10     | （相邻省份最高等级）要塞年度荒废消退                                                                              |
| REVANCHISM_DEVASTATION_IMPACT                 | -0.02   | 复仇主义年度消退                                                                                                  |
| SURRENDER_DEVASTATION_IMPACT                  | -3.4    |                                                                                                                   |
| CONTROL_DEVASTATION_IMPACT                    | -1      | 控制领土荒废度衰退                                                                                                |
| PASSIVE_DEVASTATION_IMPACT                    | -10     |                                                                                                                   |
| DEVASTATION_DEVELOPMENT_SCALE                 | 5       | 提升发展度消除非荒废度                                                                                            |
| PARTICIPATION_SCORE_BLOCKADE                  | 0.001   | 战争参与度乘数：封锁（基数为发展度和舰队数目的乘积，每月累计）                                                    |
| PARTICIPATION_SCORE_BATTLE                    | 0.03    | 战争参与度乘数：参战的每支部队与每艘舰船                                                                          |
| PARTICIPATION_SCORE_SIEGE                     | 0.01    | 战争参与度乘数：可以推动围城进度的每支围城部队                                                                    |
| PARTICIPATION_SCORE_OVERSEAS_MULT             | 0.25    | 战争参与度乘数：与海外国家作战                                                                                    |
| PARTICIPATION_SCORE_MERC_MULT                 | 0.5     | 战争参与度乘数：佣兵（相较于常备军）                                                                              |
| PARTICIPATION_SCORE_UNFORTIFIED_MULT          | 0.1     | 战争参与度乘数：围攻无堡垒省份                                                                                    |
| FORT_PER_DEV_RATIO                            | 50      | 每个未过时的，处于开启状态的要塞带来2点陆军传统。围攻过时的要塞获取的陆军传统则根据其等级与最高要塞等级之比折算。 |
| MOVE_LOCK_PERCENTAGE                          | 0.5     | 移动进程超过此值，军队的移动将被锁定                                                                              |
| REGULAR_LEADER_POWER                          | 1       | 陆军将领和提督有效传统乘数                                                                                        |
| EXPLORER_LEADER_POWER                         | 0.8     | 征服者和探险家有效传统乘数                                                                                        |
| BASE_MP_TO_MANPOWER                           | 0.25    | 每点基础人力对应人力增加                                                                                          |
| SIEGE_ATTRITION                               | 1       | 围攻损耗                                                                                                          |
| SIEGE_DISEASE_IMPACT                          | 0.05    | 疾病爆发损失围城士兵                                                                                              |
| ARMY_ATTRITION_AT_COAST                       | 1       | 在沿海地区装船时的损耗率                                                                                          |
| ARMY_ATTRITION_AT_SEA                         | 10      | 单位在装载到公海上行驶的船上时的损耗率                                                                            |
| NATIVE_FEROCITY_IMPACT                        | 0.05    | 每点狂暴度带来的伤害增加                                                                                          |
| GALLEY_BONUS_INLAND_SEA                       | 1.0     | 桨帆船内海战斗力提升                                                                                              |
| GALLEY_DICE_MALLUS_HIGH_SEA                   | 0       | 桨帆船非内海作战骰子点数惩罚（此设定已取消）                                                                      |
| INSUFFICIENT_SUPPORT                          | -1      | 守军不足对围攻速度的影响                                                                                          |
| SIEGE_MEMORY                                  | 11      | 获胜所需围攻进度基数（即1级要塞至少需要+12围攻进度才可以获得围城胜利）                                            |
| SIEGE_MEMORY_SCALED                           | 0.5     | 每级要塞提升获胜围攻进度乘数（即每提升2级要塞，获得围城胜利需要的围攻进度+1）                                     |
| SIEGE_WIN                                     | 20      | 骰子掷出此点数，即刻获得围攻胜利                                                                                  |
| UNLOAD_COST_FRIENDLY                          | 12      | 登陆非敌对领土所需时间                                                                                            |
| UNLOAD_COST_ENEMY                             | 36      | 登陆敌对领土所需时间                                                                                              |
| LEADER_MAINTENANCE_COST                       | 1       | 将领维护费                                                                                                        |
| GARRISON_SIZE                                 | 1000    | 每等级守军规模                                                                                                    |
| SIEGE_FORCE_NEEDED_MULTIPLIER                 | 3       | 围攻进度增长，需要超过守军规模此倍数                                                                              |
| MAX_BREACH                                    | 3       | 围墙破裂修正最大值                                                                                                |
| SIEGE_GARRISON_SURRENDER                      | 100     | 守军低于此数值后，即刻围城胜利                                                                                    |
| ASSAULT_WIDTH_LIMIT                           | 5       | 守军规模此倍数的围攻部队可以在围攻中造成伤害（其余部队将会遭受守城部队的伤害，但并不能造成伤害）                  |
| ASSAULT_ATTACKER_LOSS                         | 1.0     | 强攻中进攻方每日损失                                                                                              |
| ASSAULT_DEFENDER_LOSS                         | 0.05    | 强攻中防守方每日损失                                                                                              |
| ASSAULT_DICE_MODIFIER                         | 5       | 强攻骰子修正                                                                                                      |
| INF_REGIMENT_MANPOWER_COST                    | 1.0     | 步兵招募人力花费（1单位为1K人力）                                                                                 |
| CAV_REGIMENT_MANPOWER_COST                    | 1.0     | 骑兵招募人力花费                                                                                                  |
| ART_REGIMENT_MANPOWER_COST                    | 1.0     | 炮兵招募人力花费                                                                                                  |
| HEAVY_SHIP_SAILORS_COST                       | 200     | 重型船只水手花费（1单位为1水手）                                                                                  |
| LIGHT_SHIP_SAILORS_COST                       | 50      | 轻型船只水手花费                                                                                                  |
| GALLEY_SHIP_SAILORS_COST                      | 50      | 桨帆船水手花费                                                                                                    |
| TRANSPORT_SHIP_SAILORS_COST                   | 50      | 运输船水手花费                                                                                                    |
| MAX_MANPOWER                                  | 10      | 恢复至最大人力所需时间                                                                                            |
| MIN_MONTHLY_MANPOWER                          | 0.1     | 人力恢复速度不能低于每月100人                                                                                     |
| MAX_SAILORS                                   | 10      | 恢复至最大水手人力所需时间                                                                                        |
| MIN_MONTHLY_SAILORS                           | 5       | 水手人力恢复速度不能低于每月5人                                                                                   |
| SLAVE_RAIDS_SAILOR_FACTOR                     | 0.25    | 劫掠海岸掠夺水手乘数                                                                                              |
| SLAVE_RAIDS_DURATION                          | 3650    | 劫掠海岸效果持续时间                                                                                              |
| INFANTRY_BREAKTHROUGH                         | 0       | 一个实验性的功能，当你击败一个后面有炮兵的敌军团时有可能把他们的炮兵拉到前排。                                    |
| CAVALRY_BREAKTHROUGH                          | 0       | 一个实验性的功能，当你击败一个后面有炮兵的敌军团时有可能把他们的炮兵拉到前排。                                    |
| INFANTRY_SPEED                                | 0.7     | 步兵移动速度                                                                                                      |
| CAVALRY_SPEED                                 | 0.7     | 骑兵移动速度                                                                                                      |
| ARTILLERY_SPEED                               | 0.7     | 炮兵移动速度                                                                                                      |
| HEAVY_SHIP_SPEED                              | 6.0     | 重型船只移动速度                                                                                                  |
| LIGHT_SHIP_SPEED                              | 10.0    | 轻型船只移动速度                                                                                                  |
| GALLEY_SPEED                                  | 4.0     | 桨帆船移动速度                                                                                                    |
| TRANSPORT_SPEED                               | 6.0     | 运输船移动速度                                                                                                    |
| INFANTRY_COST                                 | 10.0    | 步兵花费                                                                                                          |
| CAVALRY_COST                                  | 25.0    | 骑兵花费                                                                                                          |
| ARTILLERY_COST                                | 30.0    | 炮兵花费                                                                                                          |
| FORTRESS_COST                                 | 0.5     | 每级堡垒维护费                                                                                                    |
| HEAVY_SHIP_COST                               | 50      | 重型船只花费                                                                                                      |
| LIGHT_SHIP_COST                               | 20      | 轻型船只花费                                                                                                      |
| GALLEY_COST                                   | 10      | 桨帆船花费                                                                                                        |
| TRANSPORT_COST                                | 12      | 运输船花费                                                                                                        |
| INFANTRY_TIME                                 | 60      | 步兵组建时间                                                                                                      |
| CAVALRY_TIME                                  | 90      | 骑兵组建时间                                                                                                      |
| ARTILLERY_TIME                                | 120     | 炮兵组建时间                                                                                                      |
| HEAVY_SHIP_TIME                               | 730     | 重型船只组建时间                                                                                                  |
| LIGHT_SHIP_TIME                               | 365     | 轻型船只组建时间                                                                                                  |
| GALLEY_TIME                                   | 365     | 桨帆船组建时间                                                                                                    |
| TRANSPORT_TIME                                | 365     | 运输船组建时间                                                                                                    |
| MONTHLY_REINFORCE                             | 0.1     | 补员速度                                                                                                          |
| MONTHLY_REPAIR                                | 0.1     | 船只维修速度                                                                                                      |
| EXTRA_LAND_REINFORCE_COST                     | 2.00    | 补员额外花费乘数（基于维护费）                                                                                    |
| MERCENARY_REINFORCE_COST_MULTIPLIER           | -1.0    | 雇佣兵增援花费（过时设定，1.30版本后雇佣兵补员不再产生花费）                                                      |
| MERCENARY_BASE_COST                           | 10.0    | 雇佣兵基础花费                                                                                                    |
| TRADITION_GAIN_LAND                           | 20      | 陆战陆军传统获取基础值                                                                                            |
| TRADITION_GAIN_NAVAL                          | 40      | 海战海军传统获取基础值                                                                                            |
| CONDOTTIERI_TRADITION_BONUS                   | 0.5     | 谴外雇佣军团额外陆军传统获取                                                                                      |
| MERCENARY_SUPPORT_LIMIT_BASE                  | 20      | 雇佣兵基础补给上限（过时设定，1.30版本后此修正取消）                                                              |
| MERCENARY_SUPPORT_LIMIT_FRACTION              | 0.3     | 雇佣兵超过补给上限损耗（过时设定，1.30版本后此修正取消）                                                          |
| CONDOTTIERI_TRADITION_BONUS                   | 0.5     |                                                                                                                   |
| FRONT_LINE_MODIFIER                           | 1.0     | 第一排作战能力发挥                                                                                                |
| BACK_LINE_MODIFIER                            | 0.5     | 第二排作战能力发挥                                                                                                |
| BACK_LINE_REINFORCE_SPEED                     | 2       | 每天可以增援多少个团                                                                                              |
| BASE_COMBAT_WIDTH                             | 15.0    | 基础战场宽度                                                                                                      |
| MAX_COMBAT_WIDTH                              | 40      | 最大战场宽度                                                                                                      |
| FORCE_MARCH_FACTOR                            | 0.5     | 强行军移速加成                                                                                                    |
| LOOT_DEVASTATION_IMPACT                       | 10      | 彻底劫掠一省份带来的荒废度                                                                                        |
| SCORCHED_DEVASTATION_IMPACT                   | 10      | 焦土政策带来的荒废度                                                                                              |
| SCORCHED_DURATION                             | 60      | 焦土政策持续时间（月）                                                                                            |
| LOOTED_DAYS                                   | 730     | 从劫掠中恢复时间                                                                                                  |
| LOOTED_SCALE                                  | 1       | 劫掠规模                                                                                                          |
| LOOTED_MAX                                    | 5       | 省份单次劫掠最大值                                                                                                |
| LOOTED_RECOVERY                               | 0.1     | 劫掠恢复速度                                                                                                      |
| NAVAL_SUPPLY_RANGE                            | 150     | 海军补给距离                                                                                                      |
| REBEL_TRADITION_GAIN                          | 0.5     | 与叛军或海盗作战获取的陆军/海军传统修正                                                                           |
| NOMAD_LOOT_TRADITION                          | 0.01    | 从劫掠中获得的陆军传统                                                                                            |
| NOMAD_PLAINS_SHOCK_BONUS                      | 0.25    | 游牧平稳地形冲击修正                                                                                              |
| NOMAD_NON_PLAINS_SHOCK_PENALTY                | -0.25   | 游牧非平稳地形冲击修正                                                                                            |
| SUPPLYLIMIT_BASE_MULTIPLIER                   | 6.0     | 补给上限基础乘数                                                                                                  |
| WAR_LENGTH_DAMAGE_MODIFIER                    | 0.01    | 每日伤亡增长（按百分比计算）                                                                                      |
| BACK_LINE_MORALE_DAMAGE_TAKEN_MODIFIER        | 0.4     | 后方士气所受的伤害修正                                                                                            |
| BACK_LINE_STRENGTH_DAMAGE_TAKEN_MODIFIER      | 0       | 后方兵力所受的伤害修正                                                                                            |
| MORALE_RECOVERY_SPEED                         | 0.15    | 士气恢复速度（按百分比计算）                                                                                      |
| MORALE_RECOVERY_SPEED_OWN_TERRITORY           | 0.05    | 在己方控制地区额外士气恢复速度                                                                                    |
| HOSTILE_TERRITORY_SPEED_MODIFIER              | 0       | 进入敌对省份移动速度修正                                                                                          |
| SHATTERED_RETREAT_SPEED_MODIFIER              | 0.5     | 完全溃败撤退时额外移动速度修正（百分比）                                                                          |
| DELIBERATE_RETREAT_MORALE_PENALTY             | 1       | 主动撤退士气惩罚（作用对象为仍在战斗的部队，数值为此值*士气最大值*撤退部队占比）                                  |
| LOW_MORALE_THRESHOLD                          | 0.50    | 低士气阈值，低于此士气的部队的撤退行动为完全溃败                                                                  |
| UNIT_TYPE_CHANGE_MAX_MORALE                   | 0.51    | 更换部队兵种士气                                                                                                  |
| DEFAULT_WARGOAL_TICKINGWARSCORE_BONUS         | 0.4     | 进攻方/防守方达成战争目标后，战争分数每月增长默认值                                                               |
| WARGOAL_MAX_BONUS                             | 25      | 从完成战争目标获得的战争分数最大值                                                                                |
| DEFAULT_WARGOAL_WARSCORE_BONUS                | 5       | 完成战争目标奖励战争分数默认值                                                                                    |
| DEFAULT_WARGOAL_BATTLESCORE_BONUS             | 3       | 赢得战争战争分数奖励默认值                                                                                        |
| SUPERIORITY_WARGOAL_WARSCORE_THRESHOLD        | 10      | 从战争中获得的战争分数超过此值后，将会达成霸权战争的战争目标                                                      |
| WARSCORE_MAX_FROM_BATTLES                     | 40      | 从战争中获得的战争分数最大值                                                                                      |
| WAR_ENTHUSIASM_HIGH_THRESHOLD                 | -20     | 高厌战度阈值                                                                                                      |
| WAR_ENTHUSIASM_LOW_THRESHOLD                  | 0       | 低厌战度阈值                                                                                                      |
| EXPLORATION_TRAVEL_TIME                       | 3       | 探索未知之地行程花费时间乘数                                                                                      |
| OVERRUN_FACTOR                                | 10      | 无条件秒杀所需部队倍数                                                                                            |
| OVERRUN_FACTOR_CANNOT_LEAVE                   | 2       | 士气清空秒杀所需部队倍数                                                                                          |
| CANNOT_RETREAT_DAYS                           | 12      | 最早撤退时间                                                                                                      |
| DAYS_PER_PHASE                                | 3       | 各阶段时间                                                                                                        |
| DAYS_PER_SIEGE_PHASE                          | 30      | 围城阶段持续时间                                                                                                  |
| COMBAT_DICE_SIDE                              | 10      | 战斗骰范围（包含0）                                                                                               |
| BLOCKADE_FACTOR                               | 3       | 封锁系数（舰队总速度/封锁系数）\*封锁效率/省份发展度                                                              |
| REBEL_RELOCATION_TIME                         | 2.0     | 叛军再部署时间乘数                                                                                                |
| REBEL_RELOCATION_DISTANCE_MAX                 | 200     | 叛军再部署最大距离                                                                                                |
| LEADER_MAX_PIPS                               | 6       | 将领单项能力最大点数                                                                                              |
| LEADER_MIN_PIPS                               | 1       | 将领总能力最小点数                                                                                                |
| REBEL_LEADER_POWER                            | 20      | 叛军将领平均军事传统                                                                                              |
| REBEL_GARRISON_GROWTH                         | 2       | 叛军要塞守军增长倍数修正                                                                                          |
| RIVER_CROSSING_PENALTY                        | 1       | 跨河惩罚                                                                                                          |
| STRAIT_CROSSING_PENALTY                       | 2       | 跨越海峡惩罚                                                                                                      |
| SEA_LANDING_PENALTY                           | 2       | 登陆惩罚                                                                                                          |
| MOTHBALLING_MONTHLY_DECREASE                  | 0.05    | 封存舰队后舰队耐久度                                                                                              |
| MOTHBALLING_MINIMUM_STRENGTH                  | 0.25    | 低于此耐久度不可封存舰队                                                                                          |
| MIN_RECRUIT_TIME_MODIFIER                     | 0.2     | 招募时间不可低于原招募时间\*此值                                                                                  |
| PRESTIGE_FROM_LAND                            | 10      | 陆战威望获取基数                                                                                                  |
| PRESTIGE_FROM_NAVAL                           | 10      | 海战威望获取基数                                                                                                  |
| CONDOTTIERI_PRESTIGE_BONUS                    | 0.5     | 谴外雇佣军团额外威望获取修正                                                                                      |
| PRESTIGE_TO_TRIBAL_ALLEGIANCE_FACTOR          | 3       | 部落联盟制国家赢得战争获得的部落团结度等于此值乘以威望                                                            |
| SEA_EXPLORE_SPEED                             | 5       | 通过定义船只在探索海域滞留的时间，控制探索速度                                                                    |
| INF_LOOT                                      | 0.1     | 一支整编步兵每月劫掠的金币                                                                                        |
| CAV_LOOT                                      | 0.3     | 一支整编骑兵每月劫掠的金币                                                                                        |
| ART_LOOT                                      | 0.05    | 一支整编炮兵每月劫掠的金币                                                                                        |
| MAX_REBEL_SUPPRESSION                         | 5.0     | 通过驻扎军队降低叛乱度最大值                                                                                      |
| INF_SUPPRESSION                               | 0.25    | 友方步兵镇压能力                                                                                                  |
| CAV_SUPPRESSION                               | 0.25    | 友方骑兵镇压能力                                                                                                  |
| ART_SUPPRESSION                               | 0.25    | 友方炮兵镇压能力                                                                                                  |
| FORT_FLIPPING_TIME                            | 30      | 邻近堡垒省份自动取回控制权时间                                                                                    |
| STACKWIPE_MANPOWER_RETURN_FRACTION            | 0.5     | 解散部队返还人力倍数                                                                                              |
| SELECT_BUILD_PROVINCE_WEIGHT_GOLD             | 50.0    |                                                                                                                   |
| SELECT_BUILD_PROVINCE_WEIGHT_DISTANCE         | 0.7     |                                                                                                                   |
| SELECT_BUILD_PROVINCE_WEIGHT_TIME             | 50.0    |                                                                                                                   |
| ADMIRAL_BLOCKADE_BONUS_PER_SIEGE_PIP          | 0.1     | 提督每一点围城能力对封锁效率提升                                                                                  |
| NAVAL_TARGET_SELECT_ITERATIONS                | 12      | 海战重新选择目标时间                                                                                              |
| NAVAL_BASE_ENGAGEMENT_WIDTH                   | 5       | 每轮次可开火船只数目                                                                                              |
| HEAVY_SHIP_COMBAT_WIDTH                       | 3       | 重型船只宽度                                                                                                      |
| LIGHT_SHIP_COMBAT_WIDTH                       | 1       | 轻型船只宽度                                                                                                      |
| GALLEY_COMBAT_WIDTH                           | 1       | 桨帆船宽度                                                                                                        |
| TRANSPORT_COMBAT_WIDTH                        | 1       | 运输船宽度                                                                                                        |
| NAVAL_CASUALTY_MIN_MORALE_DAMAGE              | 0.2     | 海军伤亡造成的士气打击倍数                                                                                        |
| CAPTURED_SHIP_STRENGTH                        | 0.3     | 捕获船只耐久度                                                                                                    |
| CAPTURED_SHIP_MORALE                          | 0.3     | 捕获船只士气                                                                                                      |
| NAVAL_MISSION_REGION_MIN_PROVINCES_IN_RANGE   | 5       | 海军任务最近范围                                                                                                  |
| LEADER_GAIN_PERSONALITY_BASE_CHANCE           | 20.0    | 将领战后获得特性概率（受陆军传统获取修正影响）                                                                    |
| SUPPLY_DEPOT_DURATION_MONTHS                  | 60      | 补给站持续时间                                                                                                    |
| SUPPLY_DEPOT_MIL_COST                         | 20      | 建造补给站花费                                                                                                    |
| RESERVE_TICK_DAMAGE                           | 0.03    | 每日基础士气打击                                                                                                  |
| BATTLE_DAILY_MORALE_DAMAGE                    | 0.01    |                                                                                                                   |
| RESERVE_DAILY_MORALE_DAMAGE                   | 0.02    |                                                                                                                   |
| CREATE_JANISSARIES_MIL_COST                   | 10      | 创建耶尼切里部队军事点数花费                                                                                      |
| CREATE_CAWA_MIL_COST                          | 5       | 创建恰瓦军事点数花费                                                                                              |
| CREATE_HUSSARS_MIL_COST                       | 0       | 创建翼骑兵军事点数花费                                                                                            |
| JANISSARIES_HEATHEN_DEVELOPMENT_DIVISOR       | 10      | 每此发展度的异教省份可用招募一支耶尼切里军团（此条目已经不存在于defines.lua文件中）                               |
| JANISSARIES_COOLDOWN_DAYS                     | 1825    | 创建耶尼切里冷却时间（此条目已经不存在于defines.lua文件中）                                                       |
| COSSACKS_MAXIMUM_RATIO                        | 1.0     | 哥萨克占陆军上限最大值                                                                                            |
| REVOLUTIONARY_GUARD_MAXIMUM_RATIO             | 1.0     | 革命卫队占陆军上限最大值                                                                                          |
| RAJPUT_MAXIMUM_RATIO                          | 1.0     | 拉杰普特军团占陆军上限最大值                                                                                      |
| MARINE_DISEMBARK_SPEED_BONUS                  | 2.0     | 海军陆战队登陆速度奖励                                                                                            |
| BASE_COST_MODIFIER                            | 2.0     | 革命卫队花费修正                                                                                                  |
| RAJPUT_BASE_COST_MODIFIER                     | 1.5     | 拉杰普特军团花费修正                                                                                              |
| COSSACK_BASE_COST_MODIFIER                    | 1.5     | 哥萨克花费修正                                                                                                    |
| REVOLUTIONARY_GUARD_BASE_COST_MODIFIER        | 2.0     | 革命卫队花费修正                                                                                                  |
| CAROLEAN_BASE_COST_MODIFIER                   | 1.0     | 卡尔军花费修正                                                                                                    |
| HUSSARS_BASE_COST_MODIFIER                    | 1.0     | 翼骑兵花费修正                                                                                                    |
| HUSSARS_MANPOWER_COST_MODIFIER                | 1.0     | 翼骑兵人力花费修正                                                                                                |
| HUSSARS_STARTING_STRENGTH                     | 1.0     | 翼骑兵初始兵力                                                                                                    |
| HUSSARS_STARTING_MORALE                       | 0.1     | 翼骑兵初始士气                                                                                                    |
| SPECIAL_REGIMENT_ESTATE_LOYALTY_COST          | 0       | 招募特殊部队花费阶层影响力                                                                                        |
| NAVAL_DOCTRINE_SAILORS_COST                   | 0.1     | 切换海军学说水手花费乘数                                                                                          |
| NAVAL_DOCTRINE_MIN_FORCE_LIMIT                | 20      | 海军上限高于此值才能选择海军学说                                                                                  |
| LEAGUE_LEADER_CHANGE_SCORE_THRESHOLD          | 1.5     | 更换宗教联盟领袖所需分数阈值（此值乘以当前领袖分数）                                                              |
| MAX_DRILL_DECAY                               | 0.9     | 操练度衰减不能大于此值                                                                                            |
| AREA_REBEL_SUPPRESSION_MULTIPLIER             | 5.0     | 区域镇压叛乱任务乘数，最终镇压能力为所选部队镇压能力加上此值与任务省份数量的商                                    |
| BANNER_USES_CONSTRUCTION                      | 0       | 八旗是否免除组建时间（0为免除）                                                                                   |
| STRELTSY_USES_CONSTRUCTION                    | 1       | 射击军是否免除组建时间                                                                                            |
| COSSACKS_USES_CONSTRUCTION                    | 1       | 哥萨克是否免除组建时间                                                                                            |
| JANISSARIES_USES_CONSTRUCTION                 | 0       | 耶尼切里是否免除组建时间                                                                                          |
| RAJPUT_USES_CONSTRUCTION                      | 1       | 拉杰普特军团是否免除组建时间                                                                                      |
| MARINES_USES_CONSTRUCTION                     | 1       | 海军陆战队是否免除组建时间                                                                                        |
| REVOLUTIONARY_GUARD_USES_CONSTRUCTION         | 1       | 革命卫队是否免除组建时间                                                                                          |
| FLAGSHIP_REQUIRED_NAVY_SIZE_IN_SAILORS        | 1500    | 解锁旗舰需要的服役水手数目                                                                                        |
| FLAGSHIP_COST_DUCATS                          | 100     | 旗舰花费                                                                                                          |
| FLAGSHIP_COST_SAILORS                         | 300     | 旗舰水手花费                                                                                                      |
| FLAGSHIP_BUILDTIME                            | 730     | 旗舰建造花费                                                                                                      |
| FLAGSHIP_MAX_MODIFICATION                     | 3       | 旗舰修正倍数                                                                                                      |
| FLAGSHIP_MORALE_HIT_ON_DESTRUCTION            | 1.0     | 旗舰被摧毁后造成的士气打击                                                                                        |
| MAX_DRAFT_SIZE_FORCE_LIMIT_RATIO              | 0.8     | 我们最多可以征召多少个单位的兵力限制                                                                              |
| MAX_DRAFT_SIZE_TO_YEARLY_INCOME_COST_RATIO    | 0.8     | 征召上述比例的单位所需的年收入的多少                                                                              |
| DRAFTED_TRANSPORT_MEN_RATIO                   | 0.8     | 相对于普通单位，被征召的单位的水手成本                                                                            |
| MERCENARY_COMPANY_HIRING_COST_MONTHS          | 48      | 雇佣军雇佣花费为此倍数的月维护费                                                                                  |
| MERCENARY_COMPANY_STARTING_MORALE             | 0.5     | 雇佣军初始士气                                                                                                    |
| MERCENARY_COMPANY_MIN_REGIMENTS               | 4       | 雇佣军最小规模                                                                                                    |
| MERCENARY_COMPANY_MAX_REGIMENTS               | 60      | 雇佣军最大规模                                                                                                    |
| MERCENARY_COMPANY_MANPOWER_PER_REGIMENT       | 2.0     | 雇佣军人力为部队数乘以此倍数的一千倍                                                                              |
| MERCENARY_COMPANY_MANPOWER_RECOVERY           | 120     | 雇佣军人力从零恢复至最大值所需时间                                                                                |
| MERCENARY_COMPANY_HIRED_MANPOWER_RECOVERY_MOD | 2.0     | （雇佣时）雇佣兵人力恢复时间延长倍数                                                                              |
| MERCENARY_COMPANY_LOW_MANPOWER_THRESHOLD      | 0.1     | 雇佣兵低人力警告阈值                                                                                              |
| MERCENARY_TRADE_RANGE_MODIFIER                | 1.0     | 雇佣兵可招募范围（贸易距离的一半）                                                                                |
| MERCENARY_COMPANY_BUILDING_TIME               | 0.25    | 雇佣兵组建速度（乘以省份距离）                                                                                    |
| MERCENARY_COMPANY_LOCAL_VIRTUAL_DISTANCE      | 40      | 雇佣兵本地判定（单位：像素）                                                                                      |
| NAVAL_BASE_DISENGAGEMENT_CHANCE               | 0.1     | 士气归零时，舰船基础脱战几率（每日判定，范围0-1）                                                                 |
| NAVAL_MORALE_DISENGAGEMENT_CHANCE             | 0.5     | 士气损失低于此值前，舰船无法脱战                                                                                  |
| LEADER_MINIMUM_AGE                            | 16      | 将领最小年龄                                                                                                      |
| LEADER_MAX_RANDOM_YEARS                       | 25      | 将领年龄浮动年数                                                                                                  |
| LEADER_MAX_RANDOM_DAYS                        | 730     | 将领年龄浮动天数                                                                                                  |
| LEADER_WORK_YEARS_DEATH_FACTOR                | 2       | 将领服役死亡参数，服役时间除以此值                                                                                |
| LEADER_AGE_DEATH_FACTOR                       | 3       | 将领年龄死亡参数，年龄除以此值                                                                                    |
| MERCENARY_COMPANY_ARMY_TRADITION              | 50.0    | 雇佣军将领陆军传统水平                                                                                            |
| WARDEC_COBELLI_FOR_ALLIES                     | 1       | 结盟国家受到攻击，盟友会加入这场战斗                                                                              |
| WARDEC_COBELLI_FOR_COALITION                  | 1       | 部落联盟成员受到攻击，部落联盟会加入这场战斗                                                                      |
| WARDEC_COBELLI_FOR_DEFENDER_OF_THE_FAITH      | 1       | 同宗教国家受到异教徒攻击，信仰守护者会加入这场战斗                                                                |
| WARDEC_COBELLI_FOR_GUARANTEES                 | 1       | 被保证独立的国家受到攻击，保证独立的国家会加入这场战斗                                                            |
| WARDEC_COBELLI_FOR_HOLY_ROMAN_EMPEROR         | 1       | 神罗受到攻击，神罗皇帝会加入这场战斗                                                                              |
| WARDEC_COBELLI_FOR_OVERLORD                   | 1       | 宗主国受到攻击，附庸国会加入这场战斗                                                                              |
| WARDEC_COBELLI_FOR_TRADE_LEAGUES              | 1       | 贸易联盟受到攻击，贸易联盟领袖会加入这场战斗                                                                      |
| WARDEC_COBELLI_FOR_TRIBAL_FEDERATION          | 1       | 朝贡国受到攻击，中国皇帝会加入这场战斗                                                                            |
| WARDEC_COBELLI_FOR_WARNINGS                   | 1       | 被警告的国家受到攻击，警告方会加入这场战斗                                                                        |
| SIEGE_BONUS_SUPPLIES_SHORTAGE                 | 1       | 补给短缺对围城的影响                                                                                              |
| SIEGE_BONUS_FOOD_SHORTAGE                     | 2       | 食物短缺对围城的影响                                                                                              |
| SIEGE_BONUS_WATER_SHORTAGE                    | 3       | 饮水短缺对围城的影响                                                                                              |
| SIEGE_BONUS_DEFENDERS_DESERT                  | 2       | 守军潜逃对围城的影响                                                                                              |
