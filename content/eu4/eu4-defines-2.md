---
title: 欧陆风云4Defines第二部分
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
  - [NCountry](#ncountry)

[[eu4-defines|欧陆风云4定义第一部分]]

[[eu4-defines-3|欧陆风云4定义第三部分]]

[[eu4-defines-4|欧陆风云4定义第四部分]]

[[eu4-defines-5|欧陆风云4定义第五部分]]

## 定义

### NCountry

- 此内容可能已落后版本，最后更新于1.29

| Define                                                   | Default | Notes                                                                                                       |
| -------------------------------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------- |
| CLEAR_PROVINCE_VARIABLES_ON_CLEAR_OWNER                  | 1       | --设置为0，以避免在一个省的所有者被设置为无时清除省的变量（修改者要求）。                                   |
| CLEAR_PROVINCE_FLAGS_ON_CLEAR_OWNER                      | 1       | --设置为0，以避免在一个省的所有者被设置为无时清除省的标志（modder要求）。                                   |
| CLEAR_PROVINCE_SAVED_NAMES_ON_CLEAR_OWNER                | 1       | --当一个省的所有者被设置为 "无 "时，设置为0以避免清除该省保存的名称（修改者要求）。                         |
| CREATE_LEADER_FROM_CONSORT_PRESTIGE_COST                 | 10      |                                                                                                             |
| EXPLOIT_ADM_INCOME                                       | 60      | 剥削每点基础税收将提供此数值月份的金币收入                                                                  |
| EXPLOIT_DIP_SAILORS                                      | 6       | 剥削每点基础生产将提供此数值月份的水手                                                                      |
| EXPLOIT_MIL_MANPOWER                                     | 6       | 剥削每点基础人力将提供此数值月份的人力                                                                      |
| EXPLOIT_COOLDOWN_MONTHS                                  | 240     | 剥削发展度冷却期                                                                                            |
| SCORNFUL_INSULT_MULTIPLIER                               | 2       |                                                                                                             |
| MONTHS_FOR_MAX_MP_ALERT                                  | 3       |                                                                                                             |
| CHANGE_COLONIAL_TYPE_COOLDOWN_DURATION                   | 10      | 更改殖民地类型的冷却时间                                                                                    |
| CONCENTRATE_DEVELOPMENT_COOLDOWN_DURATION                | 50      | 集中发展度冷却时间                                                                                          |
| SIBERIAN_FRONTIER_DAILY_BASE                             | 5       | 西伯利亚前哨站月度基础增长（即使是键值写为DAILY_BASE）                                                      |
| SIBERIAN_FRONTIER_DAILY_RANGE                            | 11      | 西伯利亚前哨站月度额外增长范围                                                                              |
| CONTRIBUTE_TO_CAPITAL_MIN_DEV_RATIO                      | 0.5     | 宗主国的发展度乘以此值必须小于附庸国的发展度时，可以使用首都进贡功能                                        |
| FORCE_SEPPUKU_POWER_MULTIPLIER                           | 5       | 勒令切腹所能获得此数值乘以被害君主三项属性对应的点数                                                        |
| SHOGUN_INTERACTIONS_DURATION                             | 10      | 幕府政体特殊功能持续时间                                                                                    |
| SHOGUN_INTERACTIONS_LEGITIMACY                           | -20     | 幕府政体特殊功能花费正统性                                                                                  |
| GOLDEN_ERA_YEARS                                         | 50      | 黄金年代时间                                                                                                |
| SPLENDOR_ABILITY_COST                                    | 800     | 时代能力需要花费的辉煌点数                                                                                  |
| PROSPERITY_MONTHLY_DECLINE                               | -2      | 存在荒废度时，繁荣度月度衰减                                                                                |
| PROSPERITY_INCREASE_SIZE                                 | 1       | 繁荣度增长规模（投20面骰，如果点数小于君主点数之和则会产生一次增长）                                        |
| CORRUPTION_FROM_BANNERS                                  | 5       | 招募100%陆军规模的八旗军队带来的腐败                                                                        |
| MONARCH_MIN_SKILL                                        | 0       | 最低君主基础属性（改低这一数值真不是啥好主意！！！）                                                        |
| MONARCH_MAX_SKILL                                        | 6       | 最高君主基础属性                                                                                            |
| ELECTIVE_LOCAL_MONARCH_MIN_BONUS                         | 0       | 选王制本地候选人票数增加最小值                                                                              |
| ELECTIVE_LOCAL_MONARCH_MAX_BONUS                         | 1       | 选王制本地候选人票数增加最大值                                                                              |
| ELECTIVE_FOREIGN_MONARCH_MIN_BONUS                       | 0       | 选王制外国候选人票数增加最小值                                                                              |
| ELECTIVE_FOREIGN_MONARCH_MAX_BONUS                       | 0       | 选王制外国候选人票数增加最大值                                                                              |
| ABDICATE_LEGITIMACY_THRESHOLD                            | 50      | 至少拥有此数值的正统性才能退位                                                                              |
| ABDICATE_AGE_THRESHOLD                                   | 60      | 因年龄退位的最低值                                                                                          |
| ABDICATE_RULING_LENGTH_THRESHOLD                         | 20      | 继承人至少此年龄后才可退位                                                                                  |
| ABDICATE_LEGITIMACY_HIT                                  | -20     | 退位对正统性的影响                                                                                          |
| ABDICATE_PRESTIGE_HIT                                    | -50     | 退位对威望的影响                                                                                            |
| DISINHERIT_PRESTIGE_HIT                                  | -50     | 废除继承人对威望的影响                                                                                      |
| DISINHERIT_PRESTIGE_THRESHOLD                            | 0       | 废除继承人对威望的要求                                                                                      |
| INSTITUTION_BONUS_FROM_IMP_DEVELOPMENT                   | 5       | 每提升一点发展度便可以获得的思潮增长基数（增加数值等于提升后的发展度基数,即默认值为提升后的发展度的16.66%） |
| INSTITUTION_CAP_IMP_DEVELOPMENT                          | 10      |                                                                                                             |
| INSTITUTION_BASE_IMP_DEVELOPMENT                         | 30      |                                                                                                             |
| EMBRACE_INSTITUTION_COST                                 | 2.5     | 接纳思潮的花费乘数（计算自治度）                                                                            |
| MAXIMUM_CONDOTTIERI                                      | 20      | 基础派遣雇佣军规模                                                                                          |
| CORRUPTION_COST                                          | 0.05    | 消除腐败度花费，计算时为此数值×（省份发展度×省份自治度）                                                    |
| STATE_MAINTENANCE_DEV_FACTOR                             | 0.007   | 直属州发展度维护费修正                                                                                      |
| STATE_MAINTENANCE_DISTANCE_FACTOR                        | 0.001   | 直属州距离维护费修正                                                                                        |
| STATE_MAINTENANCE_CONTINENT_FACTOR                       | 0.25    | 直属州非同大陆维护费修正                                                                                    |
| STATE_MAINTENANCE_CULTURE_FACTOR                         | 0.25    | 直属州非可接受文化维护费修正                                                                                |
| ALLOW_ZERO_BASE_VALUES                                   | 0       | 是否允许0基础税收、基础生产和基础人力（0代表禁止）                                                          |
| ALLOW_ESTATE_AND_PARLIAMENT_SEAT_IN_PROVINCE             | 0       | 是否允许同一省份既存在阶层，又存在议会席位（0代表禁止）                                                     |
| ALLOW_ESTATE_IN_CAPITAL                                  | 0       | 是否允许首都所在省份被分配予阶层（0代表禁止）                                                               |
| NOMAD_DEVELOPMENT_SCALE                                  | 600     | 草原游牧政体因发展度而损失游牧团结的发展度上限                                                              |
| OVERSEAS_CLIENT_STATES                                   | 0       | 是否允许在海外省份建立仆从国（0代表禁止）                                                                   |
| ESTATE_DROP_LOYALTY_IF_LOST_PRIVILEDGE                   | -20     | 移除阶层特权就会丧失忠诚度的值                                                                              |
| ESTATE_ANGRY_THRESHOLD                                   | 30      | 低于此忠诚度，则阶层不忠                                                                                    |
| ESTATE_HAPPY_THRESHOLD                                   | 60      | 高于此忠诚度，则阶层忠诚                                                                                    |
| ESTATE_LOYALTY_DECAY_BASE_MIN                            | 2.0     | 年度阶层忠诚度变化（中间水平）                                                                              |
| ESTATE_LOYALTY_DECAY_BASE_MAX                            | 5.0     | 年度阶层忠诚度变化（极值水平）                                                                              |
| ESTATE_INFLUENCE_LEVEL_1                                 | 20      | 阶层影响力等级阈值                                                                                          |
| ESTATE_INFLUENCE_LEVEL_2                                 | 40      | 阶层影响力等级阈值                                                                                          |
| ESTATE_INFLUENCE_LEVEL_3                                 | 60      | 阶层影响力等级阈值                                                                                          |
| ESTATE_DANGER_THRESHOLD                                  | 100     | 触发灾难的阶层影响力阈值                                                                                    |
| ESTATE_DEFAULT_LOYALTY                                   | 30      | 阶层基础忠诚度                                                                                              |
| ESTATE_INFLUENCE_PER_DEV                                 | 0.5     | 阶层领地占比所带来的影响力                                                                                  |
| ESTATE_MAX_INFLUENCE_FROM_DEV                            | 100     | 阶层领地占比所带来的最大影响力                                                                              |
| ESTATE_MIN_DISTRIBUTED_CROWNLAND                         | 30      | 阶层游戏开始分享的领地                                                                                      |
| ESTATE_CROWNLAND_INFLUENCE                               | 60.0    |                                                                                                             |
| ESTATE_START_CROWNLAND_INFLUENCE                         | 10.0    | 阶层基础影响力                                                                                              |
| ESTATE_CROWNLAND_FROM_DEV                                | 0.2     | 每提升一点发展度对阶层领地减少的量                                                                          |
| ESTATE_PRIVILEGE_ADMIN_COST                              | 0       | 每个阶层特权所消耗的行政点数                                                                                |
| ESTATE_PRIVILEGES_MAX_CONCURRENT                         | 6       | 最多拥有多少阶层特权                                                                                        |
| ESTATE_AGENDA_DEFAULT_MAX_ACTIVE_DAYS                    | 7300    | 阶层议程结束默认最大天数                                                                                    |
| ESTATE_AGENDA_ABOUT_TO_EXPIRE_WARNING                    | 1095    | 离阶层议程到期还有多少天才会提醒                                                                            |
| ESTATE_LOYALTY_INFLUENCE_ON_LIBERTY_DESIRE               | -0.3    | 阶层忠诚对独立倾向的影响                                                                                    |
| ESTATE_PROVINCE_HAPPINESS_INCREASE                       | 1.0     | 每分配相应百分比发展度的省份，带来的忠诚度                                                                  |
| ESTATE_PROVINCE_HAPPINESS_DECREASE                       | 5.0     | 每收回相应百分比发展度的省份，带来的忠诚度                                                                  |
| ESTATE_PROVINCE_HAPPINESS_CHANGE_MAX_POS                 | 20      | 阶层忠诚度因每次分配省份带来的增长，不会高于此值                                                            |
| ESTATE_PROVINCE_HAPPINESS_CHANGE_MAX_NEG                 | 30      | 阶层忠诚度因每次分配省份带来的损失，不会高于此值'                                                           |
| ESTATE_PROVINCE_POWER                                    | 1.5     | 阶层所掌握的相应百分比的（非海外）省份带来的影响力                                                          |
| ESTATE_PROVINCE_POWER_MAX                                | 50      | 省份最高可以提供的影响力                                                                                    |
| ESTATE_GRANT_PROVINCE_COOLDOWN                           | 1       | 在此时间内，不能将刚刚收回的省份再次分配给阶层                                                              |
| ESTATE_LACK_OF_TERRITORY_EFFECT                          | -0.25   | 每月因领土太小而损失的阶层忠诚度                                                                            |
| CULTURAL_UNION_MIN_DEV                                   | 1000    | 在没有常识常识DLC，或CULTURAL_UNION_MIN_RANK 被设置为0的情况下，组建文化联盟所需的发展度                    |
| CULTURAL_UNION_MIN_RANK                                  | 3       | 在拥有常识常识DLC时，构建文化联盟所需的政府等级                                                             |
| PRIMARY_NATION_BLOCK_CONVERT_CULTURE                     | 0       | 文化母国的存在是否可以禁止转变文化（0为不启用此功能）                                                       |
| MIN_DEV_FOR_FREE_CITY                                    | 10      | 首都必须高于此发展度才能成为自由市                                                                          |
| MAX_PROVINCES_FOR_FREE_CITY                              | 1       | 自由市的省份数量不能超过此数值                                                                              |
| HRE_RANK                                                 | 3       | 神圣罗马帝国皇帝的政府等级                                                                                  |
| HRE_MAX_RANK                                             | 1       | 神圣罗马帝国诸侯的政府等级                                                                                  |
| HRE_MAX_RANK_ELECTOR                                     | 2       | 神圣罗马帝国选帝侯最高政府等级                                                                              |
| HRE_INCIDENT_DAYS_ACTIVE                                 | 365     | HRE事件将被激活的天数                                                                                       |
| HRE_INCIDENT_ELECTOR_SUPPORT_IA                          | 1       | 选帝侯支持在一个事件中的价值有多大                                                                          |
| HRE_INCIDENT_MEMBER_SUPPORT_IA                           | 0.2     | 在一个事件中，帝国成员支持的价值有多大                                                                      |
| HRE_INCIDENT_AI_EMPEROR_OPINION                          | 0.05    | 对皇帝的观点有多大，AI就会支持他。                                                                          |
| HRE_INCIDENT_AI_RANDOM_FACTOR                            | 10      | 对AI来说，在决定选择何种成员时，会有一点随机的因素，将是-10到10。                                           |
| PRESTIGE_GAIN_FOR_GOV_RANK_2                             | 10      | 将政府等级提升至王国所获得的威望                                                                            |
| PRESTIGE_GAIN_FOR_GOV_RANK_3                             | 25      | 将政府等级提升至帝国所获得的威望                                                                            |
| MIN_PRESTIGE_FOR_GOV_RANK_2                              | 50      | 将政府等级提升至王国所需要的威望                                                                            |
| MIN_PRESTIGE_FOR_GOV_RANK_3                              | 75      | 将政府等级提升至帝国所需要的威望                                                                            |
| MIN_DEVELOPMENT_FOR_GOV_RANK_2                           | 300     | 将政府等级提升至王国所需要的发展度                                                                          |
| MIN_DEVELOPMENT_FOR_GOV_RANK_3                           | 1000    | 将政府等级提升至帝国所需要的发展度                                                                          |
| PRESTIGE_GAIN_FOR_GOV_RANK_X                             | 25      | 将政府等级提升至高于3级时所获得的威望                                                                       |
| MIN_PRESTIGE_FOR_GOV_RANK_X                              | 75      | 将政府等级提升至高于3级时所需要的威望                                                                       |
| ADDITIONAL_MIN_DEVELOPMENT_FOR_GOV_RANK_X                | 500     | 将政府等级提高至3级以上时额外需要的发展度                                                                   |
| MAX_GOV_RANK                                             | 3       | 最高政府等级，最大值可为10                                                                                  |
| PARLIAMENT_BACKING_PERCENTAGE                            | 25      | 议会平均支持率                                                                                              |
| PARLIAMENT_ISSUE_DURATION                                | 10      | 议题生效时间（年）                                                                                          |
| PARLIAMENT_DEBATE_DURATION                               | 5       | 议题辩论时间（年）                                                                                          |
| NUM_PARLIAMENT_ISSUES                                    | 5       | 议题数目                                                                                                    |
| PARLIAMENT_PRESTIGE_HIT                                  | -20     | 辩论失败损失的威望                                                                                          |
| PARLIAMENT_CHANCE_OF_DECISION                            | 10      | 若在PARLIAMENT_DEBATE_DURATION年限之后仍未完成辩论，则每月终结辩论的几率                                    |
| ALLOW_FEMALE_GENERALS                                    | 0       | 是否允许女性将领                                                                                            |
| FEMALE_ADVISOR_CHANCE                                    | 2       | 如果女性史DLC启用，则激活此设定。女性顾问概率                                                               |
| MAX_IDEA_GROUPS_FROM_SAME_CATEGORY                       | 0.5     | 相同理念组类型占比                                                                                          |
| RANDOM_LUCKY_BASE_WEIGHT                                 | 100     | 随机幸运国基础权重                                                                                          |
| RANDOM_LUCKY_DEVELOPMENT_WEIGHT                          | 0.4     | 发展度增加的随机幸运国权重                                                                                  |
| RANDOM_LUCKY_INSTITUTION_FACTOR                          | 1.5     | 每种政府的权重乘以此数                                                                                      |
| RANDOM_LUCKY_TECH_WEIGHT                                 | 1.5     | 随机幸运国在落后科技组权重的惩罚乘数（数值越大惩罚越大）                                                    |
| RANDOM_LUCKY_SLOW_TECH_PENALTY                           | 0.33    | 随机幸运国在科研惩罚超过75%的科技组的惩罚乘数（数值越小惩罚越大）                                           |
| PLAYER_CAN_MOVE_FIXED_CAPITAL                            | 1       | 是否允许玩家在拥有固定首都设定时迁都                                                                        |
| PDEVELOPMENT_ON_CONTINENT_FOR_NEW_CAPITAL                | 0.0     | 非同大陆发展度占比达到此数值以上时，可以迁都到异大陆                                                        |
| EXPLORE_COAST_EVENT_CHANCE                               | 2       | 探索海岸触发事件概率                                                                                        |
| MIN_TECH_FOR_CIRCUMNAVIGATE                              | 9       | 解锁环球航行的外交科技等级                                                                                  |
| CIRCUMNAVIGATION_PROVINCE_1                              | 1468    | 环球航行锚点，冈比亚海岸                                                                                    |
| CIRCUMNAVIGATION_PROVINCE_2                              | 1539    | 环球航行锚点，麦哲伦海峡                                                                                    |
| CIRCUMNAVIGATION_PROVINCE_3                              | 1697    | 环球航行锚点，夏威夷海岸                                                                                    |
| CIRCUMNAVIGATION_PROVINCE_4                              | 1398    | 环球航行锚点，苏禄海                                                                                        |
| CIRCUMNAVIGATION_PROVINCE_5                              | 1446    | 环球航行锚点，非洲之角                                                                                      |
| CIRCUMNAVIGATION_PROVINCE_6                              | 1460    | 环球航行锚点，好望角                                                                                        |
| MIN_DEV_FOR_OLD_GREAT_POWER                              | 100     | 低于此发展度的国家不能成为列强                                                                              |
| SUPPORT_OWN_HEIR_PRESTIGE_COST                           | 10      | 选王制支持己方候选人花费的威望                                                                              |
| SUPPORT_OWN_HEIR_SUPPORT_BONUS                           | 5       | 选王制每次支持己方候选人可以获得的票数                                                                      |
| ELECTIVE_HEIR_CLAIM_STRENGTH                             | 80      | 选王制所推举继承人的宣称强度                                                                                |
| MAX_ACTIVE_POLICIES                                      | 5       | 最大政策槽位                                                                                                |
| MINIMUM_POLICY_TIME                                      | 10      | 政策最短持续时间                                                                                            |
| POLICY_COST                                              | 1       | 政策点数花费                                                                                                |
| BASE_POSSIBLE_POLICIES                                   | 3       | 基础的政策槽位                                                                                              |
| BASE_FREE_POLICIES                                       | 1       | 免费的政策槽位                                                                                              |
| MIN_FEDERAL_AUTHORITY                                    | -100    | 盟内权威不会低于此值                                                                                        |
| MAX_WAR_EXHAUSTION                                       | 20      | 厌战度最大值                                                                                                |
| VICTORY_CARD_DECAY_MONTHS                                | 120     | 胜利卡失去所有分数所需时间                                                                                  |
| VICTORY_CARD_INCREASE_MONTHS                             | 120     | 胜利卡分数增长到最大所需时间                                                                                |
| VICTORY_CARD_START_YEAR                                  | 1450    | 第一张胜利卡出现时间                                                                                        |
| VICTORY_CARD_START_OFFSET                                | 100     | 胜利卡出现间隔                                                                                              |
| VICTORY_CARD_BONUS_SCORE                                 | 1000    | 每一等级胜利卡提供的额外分数                                                                                |
| COUNTRIES_GETTING_SCORE                                  | 10      | 排名此数值之内的玩家可以获得分数                                                                            |
| GREAT_PROJECT_MANPOWER_REQUIRED_FOR_CONSTRUCTION_BOOST   | 10000   | 使用多少人力来推动伟大工程的建造进展。                                                                      |
| GREAT_PROJECT_MANPOWER_CONSTRUCTION_BOOST_AMOUNT_IN_DAYS | 730     | 人力推动建设的时间                                                                                          |
| GREAT_PROJECT_MONEY_REQUIRED_FOR_CONSTRUCTION_BOOST      | 250     | 使用多少金钱来推动伟大工程的建造进展。                                                                      |
| GREAT_PROJECT_MONEY_CONSTRUCTION_BOOST_AMOUNT_IN_DAYS    | 730     | 金钱推动建设的时间                                                                                          |
| GREAT_PROJECT_MOVE_COST_PER_DAY                          | 3       | 伟大工程每天移动距离                                                                                        |
| COUNTRIES_GETTING_SCORE                                  | 10.0    | 国家的得分                                                                                                  |
| LAND_FORCELIMIT_EXTRA_COST_FACTOR                        | 2       | 超出陆军上限的部队的维护费乘数                                                                              |
| NAVAL_FORCELIMIT_EXTRA_COST_FACTOR                       | 2       | 超出海军上限的部队的维护费乘数                                                                              |
| REPUBLICAN_TRADITION_YEARLY_INCREASE                     | 1       | 基础共和传统年度增长                                                                                        |
| PIETY_PERCENTAGE_AT_NEW_RULER                            | 0.25    | 新任统治者从上任统治者继承的虔诚度                                                                          |
| PIETY_INCREASE_AT_GOOD_WAR                               | 0.25    | 对异端异教国家发起战争获得的虔诚度                                                                          |
| PIETY_DECREASE_AT_BAD_WAR                                | -0.33   | 对同宗国家发起战争获得的虔诚度（默认为无战争借口，有战争借口下此数值减半）                                  |
| ADVISOR_COST_INCREASE_PER_YEAR                           | 0.005   | 年度顾问花费增长                                                                                            |
| SCRIPTED_ADVISOR_DISCOUNT                                | 0.5     | 历史顾问花费折扣，与其他修正为乘法关系                                                                      |
| MINIMUM_ADVISOR_DURATION                                 | 10      | 顾问绝对健康时间                                                                                            |
| MINIMUM_ADVISOR_DURATION_CHANCE_VALUE                    | 15      | 年龄超过ADVISOR_CUT_OFF_AGE与MINIMUM_ADVISOR_DURATION之和的顾问有几率死亡，此数值越高每日死亡概率越低       |
| ADVISOR_CUT_OFF_AGE                                      | 30      | 顾问最低年龄                                                                                                |
| MAXIMUM_ADVISOR_SKILL                                    | 5       | 顾问通过提升，最高可以达到的等级                                                                            |
| PROMOTE_COST_MONTHS_ADVISOR_SALARY                       | 60.0    | 提升顾问等级的月薪倍数                                                                                      |
| CULTURE_LOSS_THRESHOLD                                   | 0.10    | CDEF_CULTURE_LOSS_THRESHOLD = 10                                                                            |
| CULTURE_GAIN_THRESHOLD                                   | 0.20    | CDEF_CULTURE_GAIN_THRESHOLD = 10                                                                            |
| CULTURE_COST_DIFF_ORIGINAL                               | -50     | 将文化转变为此省份初始文化花费修正                                                                          |
| CULTURE_COST_DIFF_ADJACENT                               | -25     | 将文化转变为相邻省份文化花费修正                                                                            |
| CULTURE_COST_DIFF_PRIMARY                                | 0       | 将文化转变为主流文化花费修正                                                                                |
| CULTURE_MIN_DEVELOPMENT_TO_PROMOTE                       | 20      | 将未接纳文化提升为接纳文化至少需要的发展度                                                                  |
| MONARCH_DEATH_STABILITY_PENALTY                          | 1       | 君主死亡的稳定度冲击                                                                                        |
| MONARCH_DEATH_LEADER_STABILITY_PENALTY                   | 1       | 君主作为将领时死亡的稳定度冲击                                                                              |
| MONARCH_DEATH                                            | 4       | 君主死亡概率参数，函数不明                                                                                  |
| MONARCH_DEATH_MIN_CHANCE_MODIFIER                        | 0.1     | 最小死亡机会修正                                                                                            |
| HEIR_DEATH                                               | 1       | 继承人死亡概率参数，函数不明（仅在继承人20岁以后生效，并随年龄增长而增长）                                  |
| LEGITIMACY_DYNASTY_CHANGE                                | 20      | 新王朝正统性                                                                                                |
| MIN_REGENCY_LEGITIMACY                                   | 80      | 摄政的正统性                                                                                                |
| BASE_POWER_INCREASE                                      | 3       | 基础点数增长                                                                                                |
| NAT_FOCUS_DECREASE                                       | -1      | 国家焦点每月耗费点数                                                                                        |
| NAT_FOCUS_INCREASE                                       | 2       | 国家焦点每月增长点数                                                                                        |
| NAT_FOCUS_YEARS                                          | 25      | 国家焦点冷却年限                                                                                            |
| NAT_FOCUS_YEARS_RANK                                     | 5       | 每级政府等级能够移除的国家焦点冷却年限，从1级开始计算                                                       |
| POWER_MAX                                                | 999     | 点数存储上限                                                                                                |
| DISMANTLE_HRE_PRESTIGE                                   | 100     | 解散神圣罗马帝国获得的威望                                                                                  |
| CROWN_LANDS_ALERT_THRESHOLD                              | 30      | 皇冠领地警报阈值                                                                                            |
| FREE_IDEA_GROUP_COST                                     | 3       | 解锁国家理念需要的理念组数目                                                                                |
| MAX_TOLERANCE_HERETIC                                    | 3       | 最大异端容忍                                                                                                |
| MAX_TOLERANCE_HEATHEN                                    | 3       | 最大异教容忍                                                                                                |
| CONVERSION_COOLDOWN                                      | 120     | 转教冷却期                                                                                                  |
| CONVERSION_COOLDOWN_SECONDARY                            | 120     | 兼容宗教冷却期                                                                                              |
| MERCHANT_REPUBLIC_SIZE_LIMIT                             | 20      | 商业共和国最大无惩罚拥有省份（1.30版本后取消此设定）                                                        |
| IDEA_TO_TECH                                             | -0.02   | 每个已点亮理念对对应科技花费减免                                                                            |
| TECH_TIME_COST                                           | 0.3     | 随时间增长的科技花费，在游戏结束时达到这一数值                                                              |
| TECH_AHEAD_OF_TIME                                       | 0.1     | 科技超前于年份的点数花费惩罚                                                                                |
| PS_BUY_IDEA                                              | 400     | 理念点数花费                                                                                                |
| PS_BUY_NATIVE_ADVANCEMENT                                | 500     | 土著理念花费                                                                                                |
| PS_BUY_RELIGIOUS_REFORM                                  | 0       |                                                                                                             |
| PS_ADVANCE_TECH                                          | 600     | 提升科技点数花费                                                                                            |
| PS_BOOST_STABILITY                                       | 100     | 提升稳定度花费                                                                                              |
| PS_BUY_GENERAL                                           | 50      | 提拔将军点数花费                                                                                            |
| PS_BUY_ADMIRAL                                           | 50      | 提拔提督点数花费                                                                                            |
| PS_BUY_CONQUISTADOR                                      | 50      | 提拔征服者点数花费                                                                                          |
| PS_BUY_EXPLORER                                          | 50      | 提拔探险家点数花费                                                                                          |
| PS_ASSAULT                                               | 5       | 发动强攻点数花费                                                                                            |
| PS_ARTILLERY_BARRAGE                                     | 50      | 炮兵轰击城墙点数花费                                                                                        |
| PS_NAVAL_BARRAGE                                         | 50      | 海军轰击城墙点数花费                                                                                        |
| PS_ADD_TRIBAL_LAND                                       | 100     | 添加部落土地                                                                                                |
| PS_ADD_TRIBAL_LAND_EXTRA_COST_PER_PROVINCE               | 10      | 增加部落的土地，每个省的额外费用                                                                            |
| PS_FORCE_MARCH                                           | 2       | 强行军点数花费                                                                                              |
| PS_DEMAND_NON_WARGOAL_PROVINCE                           | 50      | 索取省份为不正当要求时的点数花费                                                                            |
| PS_DEMAND_NON_WARGOAL_PEACE                              | 2.5     | 添加不正当条目条目                                                                                          |
| PS_DEMAND_NON_WARGOAL_PEACE_PRIMITIVES                   | 0       | 对原住民国家的不正当要求点数花费                                                                            |
| PS_MAKE_PROVINCE_CORE                                    | 10      | 建造核心点数花费                                                                                            |
| PS_REDUCE_INFLATION                                      | 75      | 降低通货膨胀点数花费                                                                                        |
| PS_PROMOTE_MERCANTILISM                                  | 100     | 提升重商主义点数花费                                                                                        |
| PS_MOVE_CAPITAL                                          | 200     | 迁都点数花费                                                                                                |
| PS_MOVE_CAPITAL_EXTRA                                    | 20      | 每有100点发展度差距，增加的迁都点数花费                                                                     |
| PS_MOVE_CAPITAL_DISTANCE                                 | 10      | 每多少点距离消耗一点行政点                                                                                  |
| PS_MOVE_CAPITAL_DISTANCE_CAP                             | 300     | 移动首都的距离惩罚最多惩罚多少                                                                              |
| PS_MOVE_TRADE_PORT                                       | 200     | 迁移贸易本埠点数花费                                                                                        |
| PS_REPLACE_RIVAL                                         | 100     | 变更宿敌点数花费                                                                                            |
| PS_SEIZE_COLONY                                          | 25      | 夺取殖民地区域点数花费                                                                                      |
| PS_BURN_COLONY                                           | 5       | 烧毁殖民地点数花费                                                                                          |
| PS_ATTACK_NATIVES                                        | 5       | 攻击土著点数花费                                                                                            |
| PS_SCORCH_EARTH                                          | 5       | 焦土战术点数花费                                                                                            |
| PS_CHANGE_GOVERNMENT                                     | 100     | 强迫变更政体点数花费                                                                                        |
| PS_CHANGE_CULTURE                                        | 10      | （每发展度）转变文化点数花费                                                                                |
| PS_CHANGE_CULTURE_OVERSEAS_RELIGION_MOD                  | -0.8    | 海外同宗教省份转变文化点数花费修正                                                                          |
| PS_HARSH_TREATMENT_COST                                  | 200     | 残酷镇压点数花费（与叛乱规模相关）                                                                          |
| PS_HARSH_TREATMENT_REDUCE                                | 30      | 残酷镇压消除进程                                                                                            |
| PS_GARRISON_SORTIES                                      | 10      | 突围点数花费                                                                                                |
| PS_REDUCE_WAREXHAUSTION                                  | 75      | 降低厌战度点数花费                                                                                          |
| PS_FACTION_BOOST                                         | 10      | 提升派系影响力点数花费                                                                                      |
| PS_RAISE_TARIFFS                                         | 50      | 提升关税点数花费                                                                                            |
| PS_LOWER_TARIFFS                                         | 25      | 降低关税点数花费                                                                                            |
| PS_RAISE_WAR_TAXES                                       | 2       | 征收战争税月度点数花费                                                                                      |
| PS_WAR_TAXES_LIMIT_MIN                                   | 0       | 征收战争税最低点数花费                                                                                      |
| PS_CREATE_TRADE_POST                                     | 50      | 建立贸易站点数花费                                                                                          |
| PS_IMPROVE_PROVINCE_BASE                                 | 50      | 提升发展度基础点数花费                                                                                      |
| PS_IMPROVE_PROVINCE_MUL                                  | 0       |                                                                                                             |
| PS_IMPROVE_PROVINCE_CAPITAL_DISCOUNT                     | 0.05    | 首都提升发展度点数花费修正                                                                                  |
| PS_SET_PRIMARY_CULTURE                                   | 100     | 转变主流文化点数花费                                                                                        |
| PS_ADD_ACCEPTED_CULTURE                                  | 100     | 添加可接受文化点数花费                                                                                      |
| PS_REMOVE_ACCEPTED_CULTURE                               | 10      | 移除可接受文化点数花费                                                                                      |
| PS_REMOVE_ACCEPTED_CULTURE_UNREST_DURATION               | 5       | 移除可接受文化后叛乱持续时间                                                                                |
| PS_STRENGTHEN_GOVERNMENT                                 | 100     | 强化政府点数花费                                                                                            |
| PS_BOOST_MILITARIZATION                                  | 50      | 提升军事化程度点数花费                                                                                      |
| PS_ESTABLISH_SIBERIAN_FRONTIER                           | 20      | 建立西伯利亚前哨站点数花费                                                                                  |
| STRENGTHEN_GOVERNMENT_LEGITIMACY                         | 10      | 强化政府行动带来的正统性收益                                                                                |
| STRENGTHEN_GOVERNMENT_REPUBLICAN_TRADITION               | 3       | 强化政府行动带来的共和传统收益                                                                              |
| STRENGTHEN_GOVERNMENT_HORDE_UNITY                        | 10      | 强化政府行动带来的部落团结收益                                                                              |
| STRENGTHEN_GOVERNMENT_DEVOTION                           | 10      | 强化政府行动带来的奉献度收益                                                                                |
| STRENGTHEN_GOVERNMENT_MERITOCRACY                        | 10      | 强化政府行动带来的贤能度收益                                                                                |
| MIL_SOCIETY_BOOST_SIZE                                   | 10      | 提升军事化程度带来的军事化程度收益                                                                          |
| CORE_COLONY                                              | 0.5     | 核心化同一殖民区域省份花费修正                                                                              |
| CORE_OVERSEAS                                            | 0.5     | 核心化海外省份花费修正                                                                                      |
| CORE_SAME_REGION                                         | 0.25    | 核心化殖民地区省份花费修正                                                                                  |
| CORE_SAME_CONTINENT                                      | 0.75    | 核心化殖民大陆省份花费修正                                                                                  |
| CORE_HAD_CLAIM                                           | 0.1     | 核心化拥有宣称的省份花费修正                                                                                |
| CORE_HAD_PERMANENT_CLAIM                                 | 0.25    | 核心化拥有永久宣称的省份花费修正                                                                            |
| FACTION_BOOST_SIZE                                       | 10      | 支持派系增长的派系影响力                                                                                    |
| WAREXHAUSTION_REDUCTION                                  | 2       | 每次降低厌战度行动降低的数值                                                                                |
| HARSH_TREATMENT_IN_MONTHS                                | 180     | 残酷镇压持续时间（月）                                                                                      |
| RECENT_UPRISING_IN_MONTHS                                | 120     | 最近的起义持续时间（月）                                                                                    |
| UNREST_REVOLT_FACTOR                                     | 0.5     | 每点叛乱度可换算为多少（基础）叛乱进度增长几率                                                              |
| UPRISING_INCREASE                                        | 10      | 每次叛乱进度增长的数值                                                                                      |
| PROVOKE_REVOLT_SIZE_FACTOR                               | 0.5     | 激发叛乱时提升的叛军规模                                                                                    |
| PROVOKE_REVOLT_MIN_PROGRESS                              | 50.0    | 激发叛乱要求的最低叛乱规模                                                                                  |
| UNREST_DECAY                                             | 1.0     |                                                                                                             |
| PROMOTE_MERCANTILISM_INCREASE                            | 1       | 每次提升重商主义行动提升的数值                                                                              |
| DISHONOURED_ALLIANCE_DURATION                            | 1800    | 拒绝响应战争召唤影响时间                                                                                    |
| CALL_ALLY_DECLINE_PRESTIGE_PENALTY                       | -25.0   | 拒绝响应战争召唤损失威望                                                                                    |
| CLAIM_THRONE_PRESTIGE_PENALTY                            | -20.0   | 宣称王位损失威望                                                                                            |
| BREAK_VASSAL_PRESTIGE_PENALTY                            | -25.0   | 抛弃附庸国损失威望                                                                                          |
| BREAK_MARRIAGE_PRESTIGE_PENALTY                          | -10     | 终止王室联姻损失威望                                                                                        |
| BREAK_MARRIAGE_STABILITY_PENALTY                         | -1      | 终止王室联姻稳定度冲击                                                                                      |
| FORM_MARRIAGE_HIGHER_PRESTIGE                            | -2      | 与威望低于我们的国家联姻损失的正统性                                                                        |
| FORM_MARRIAGE_HIGHER_LEGITIMACY                          | -3      | 与正统性低于我们的国家联姻损失的正统性                                                                      |
| ANNEX_OR_INTEGRATE_PRESTIGE                              | 5.0     | 外交合并或吞并的威望奖励                                                                                    |
| PROVINCE_DISCOVERY_PRESTIGE                              | 0.1     | 首次探索发现新省份增长的威望                                                                                |
| PROVINCE_DISCOVERY_YEARS_TECHNOLOGY                      | 50      | 已经探明的省份将在此数值年份内传播至所有同科技组国家                                                        |
| PROVINCE_DISCOVERY_YEARS_RELIGION                        | 100     | 已经探明的省份将在此数值年份内传播至所有同宗教国家                                                          |
| START_YEARLY_INFLATION                                   | 0.0     | 年度通货膨胀变化量                                                                                          |
| CLAIM_LOSE                                               | 25      | 宣称持续时间                                                                                                |
| CORE_LOSE                                                | 50      | 核心持续时间                                                                                                |
| CORE_LOSE_CULTURE_GROUP                                  | 150     | 核心对应文化与省份文化在同一文化组时的持续时间                                                              |
| CORE_LOSE_PRIMARY_CULTURE_TAG                            | -1      | 对应文化的主要国家核心持续时间（-1为永不失去）                                                              |
| CORE_LOSE_PRESTIGE                                       | -10.0   | 核心消退损失威望                                                                                            |
| ABANDON_CORE_PRESTIGE                                    | -10.0   | 放弃未争夺核心损失威望                                                                                      |
| ABANDON_IDEAGROUP_REFUND                                 | 0.10    | 放弃理念组返还的点数                                                                                        |
| NEIGHBOURBONUS                                           | -0.05   | 每一级邻国科技领先科技花费减免                                                                              |
| NEIGHBOURBONUS_CAP                                       | -0.75   | 邻国科技领先科技花费减免最大值                                                                              |
| NEIGHBOURBONUS_CORRUPTION                                | 0.0     | 邻国科技领先造成的腐败度                                                                                    |
| LAGGINGTECH_CORRUPTION                                   | 0.1     | 科技不平衡造成的年度腐败度增长（此数值乘以最高最低科技等级之差）                                            |
| LAGGINGTECH_CORRUPTION_MAX                               | 0.5     | 科技不平衡造成的年度腐败度增长最大值                                                                        |
| POPULATION_GROWTH                                        | 0.03    | 基础人口增长速度                                                                                            |
| COLONIAL_GROWTH_PENALTY                                  | 100     | 每达到此人口规模，殖民地增加一层增长几率惩罚                                                                |
| BANKRUPTCY_COLONIAL_GROWTH_PENALTY                       | -200    | 破产对殖民人口增长的惩罚                                                                                    |
| MAX_NATIONALISM                                          | 10      | 分离主义最大可增加值                                                                                        |
| MIN_NATIONALISM                                          | -30     | 分离主义最大可减少值                                                                                        |
| YEARS_OF_NATIONALISM                                     | 30      | 分离主义持续时间                                                                                            |
| YEARS_UNTIL_BROKEN                                       | 2       | 叛军毁国所需时间                                                                                            |
| BASE_HEIR_BIRTH                                          | 120     | 基础获得继承人概率，函数不明                                                                                |
| AGE_OF_ADULTHOOD                                         | 15      | 成年年龄                                                                                                    |
| MAX_QUEEN_AGE                                            | 35      | 配偶不会老于此数值                                                                                          |
| MAX_EXTRA_PERSONALITIES                                  | 2       | 除成年时获得的特质，还可以获得的特质数目                                                                    |
| FIRST_EXTRA_PERSONALITY                                  | 10      | 即位此数值年份后可以获得第一个额外特质                                                                      |
| YEARS_PER_EXTRA_PERSONALITY                              | 15      | 继获得第一个额外特质后，获得后续特质所需时间                                                                |
| ANCESTOR_PERSONALITY_LEVEL_1                             | 6       |                                                                                                             |
| ANCESTOR_PERSONALITY_LEVEL_2                             | 12      |                                                                                                             |
| ANCESTOR_COST                                            | 400     | 添加祖灵所需要的外交点数                                                                                    |
| INITIAL_REGULAR_COLONY                                   | 10      | 初始殖民地规模                                                                                              |
| REGULAR_COLONY_GROWTH                                    | 25      | 殖民地基础人口增长                                                                                          |
| COLONIAL_CLAIM_BONUS                                     | 10      | 宣称对殖民地人口增长加成                                                                                    |
| COLONIAL_CLAIM_VIOLATION                                 | -20     | 违反托尔德西里亚斯条约人口增长减成                                                                          |
| COLONY_VIOLAION_PAPAL_INFLUENCE_COST                     | -10     | 违反托尔德西里亚斯条约对教廷影响力减成                                                                      |
| COLONIAL_NATION_GROWTH_IMPACT                            | 1       | 如果愿意的话，殖民国家的殖民地增长速度较慢。                                                                |
| OVEREXTENSION_FACTOR                                     | 1.0     | 过度扩张系数                                                                                                |
| OVEREXTENSION_OVERSEAS_FACTOR                            | 0.5     | 海外省份过度扩张系数                                                                                        |
| MISSIONARY_PROGRESS_ON_CHANCE                            | 1       | 因幸运骰而增长的传教进度                                                                                    |
| MISSION_CANCEL_CHOOSE_NEXT_DELAY                         | 1       | 重新选择任务所需时间（1.25版本后，任务树机制取代了旧有的任务机制）                                          |
| MONTHS_TO_CORE_MAXIMUM                                   | 240     | 即使计算上各种修正，造核时间不会长于此数值（月）                                                            |
| MONTHS_TO_CORE_MINIMUM                                   | 6       | 即使计算上各种修正，造核时间不会短于此数值（月）                                                            |
| MONTHS_TO_CORE                                           | 36      | 核心化省份花费时间                                                                                          |
| MONTHS_TO_CHANGE_CULTURE                                 | 10      | 在转变文化时，每点发展度对转变文化所需时间的影响                                                            |
| RELEASED_NATION_ARMY_SIZE                                | 0.5     | 释放国家初始部队规模                                                                                        |
| STARTING_ARMY_SIZE                                       | 0.75    | 初始国家部队规模                                                                                            |
| STARTING_ARMY_SIZE_AT_WAR                                | 1.0     | （在战争中）初始国家部队规模                                                                                |
| STARTING_ARMY_SIZE_REBEL_THREAT                          | 0.05    | 叛乱规模（基于陆军上限）Percentage of rebel threat added to percentage of force limit                       |
| STARTING_FLEET_SIZE                                      | 0.9     | 初始舰队规模                                                                                                |
| GALLEY_INLAND_SEA_COAST_RATIO                            | 0.75    | 内海港口省份占总港口达到此百分比，桨帆战舰将被认为很重要                                                    |
| REBEL_BREAK_STABILITY_SET                                | 0       | 叛军毁国后稳定度将变为此值                                                                                  |
| REBEL_BREAK_EXHAUSTION_SET                               | 0       | 叛军毁国后厌战度将变为此值                                                                                  |
| REVOLT_SIZE_DEVELOPMENT_MULTIPLIER                       | 0.1     | 叛乱规模发展度乘数                                                                                          |
| REVOLT_SIZE_BASE                                         | 5       | 基础叛乱规模                                                                                                |
| REVOLT_TECH_IMPACT                                       | 0.03    | 每一级军事科技，叛军规模增长此百分比                                                                        |
| REVOLT_TECH_MORALE                                       | 0.01    | 每一级军事科技，叛军士气增长此百分比                                                                        |
| REBEL_ARTILLERY_INCREASE_LEVEL_1_TECH                    | 11      | 此等级的军事科技后，叛军会出现炮兵                                                                          |
| REBEL_ARTILLERY_INCREASE_LEVEL_1_SIZE                    | 0.1     | 叛军炮兵占比                                                                                                |
| REBEL_ARTILLERY_INCREASE_LEVEL_2_TECH                    | 16      | 此等级的军事科技后，叛军炮兵规模增大                                                                        |
| REBEL_ARTILLERY_INCREASE_LEVEL_2_SIZE                    | 0.15    | 叛军炮兵占比，与REBEL_ARTILLERY_INCREASE_LEVEL_1_SIZE不叠加                                                 |
| MIGRATION_BOOST                                          | 50      | 迁徙获得的点数                                                                                              |
| MIGRATION_COOLDOWN                                       | 60      | 迁徙冷却时间                                                                                                |
| MIGRATION_DEPLETION_TIME                                 | 7200    | 迁徙造成的影响消退时间                                                                                      |
| BASE_TARIFF                                              | 0.10    | 基础关税                                                                                                    |
| TARIFF_INCREASE_STEP                                     | 0.05    | 每次提升关税等级的数值                                                                                      |
| TARIFF_LIBERTY_INCREASE                                  | 1.0     | 每百分比关税造成的独立倾向乘数                                                                              |
| TARIFF_DECREASE_STEP                                     | -0.05   | 每次降低关税等级的数值                                                                                      |
| HIGH_LIBERTY_DESIRE                                      | 50      | 触发高独立倾向警告的阈值                                                                                    |
| MONTHLY_LIBERTY_DECREASE                                 | 0.1     | 临时独立倾向月度消退值                                                                                      |
| LIBERTY_DESIRE_ENFORCE_PEACE                             | 0.1     | 强制和平造成的独立倾向                                                                                      |
| LIBERTY_DESIRE_WAR_EXHAUSTION                            | 1       | 宗主国厌战度造成的独立倾向                                                                                  |
| LIBERTY_DESIRE_MERCANTILISM                              | 0.25    | 宗主国每点重商主义造成的独立倾向                                                                            |
| LIBERTY_DESIRE_RELATIVE_POWER                            | 75      | 属国军事力量对宗主国占比独立欲望，在占比100%时为此值                                                        |
| LIBERTY_DESIRE_ADM_EFFICIENCY                            | 0.2     | 行政效率减少的独立倾向（仅限殖民领）                                                                        |
| LIBERTY_DESIRE_DIPLO_TECH                                | 5       | 外交科技每领先宗主国一级造成的独立倾向                                                                      |
| LIBERTY_DESIRE_HISTORICAL_FRIEND                         | -50     | 历史友邦独立倾向                                                                                            |
| LIBERTY_DESIRE_HISTORICAL_RIVAL                          | 50      | 历史宿敌独立倾向                                                                                            |
| LIBERTY_DESIRE_TRUST                                     | -0.4    | 信任度对独立倾向的影响                                                                                      |
| LIBERTY_DESIRE_POSITIVE_OPINION                          | -0.1    | 正观念对独立倾向的影响                                                                                      |
| LIBERTY_DESIRE_NEGATIVE_OPINION                          | 0.2     | 负观念对独立倾向的影响                                                                                      |
| LIBERTY_DESIRE_ANNEXATION                                | 0       | 吞并行为对独立倾向的影响                                                                                    |
| LIBERTY_DESIRE_DIPLOMATIC_REPUTATION                     | -3      | 外交声誉对独立倾向的影响                                                                                    |
| LIBERTY_DESIRE_GREAT_POWER_VASSAL                        | 50      | 超过300发展度对独立倾向的影响                                                                               |
| LIBERTY_DESIRE_HORDE                                     | 10      | 游牧独立倾向                                                                                                |
| LIBERTY_DESIRE_ROYAL_MARRIAGE                            | -5      | 王室联姻对独立倾向的影响                                                                                    |
| LIBERTY_DESIRE_SCUTAGE_OFF                               | 25      | 撤销免服兵役对独立倾向的影响                                                                                |
| LIBERTY_DESIRE_DEVELOPED_IN_SUBJECT                      | -5      | 宗主国对属国提升发展度造成的独立倾向                                                                        |
| LOST_INDEPENDANCE_WAR_LIBERTY_DESIRE                     | -50     | 最近失败的独立起义对独立倾向的影响                                                                          |
| MIN_LIBERTY_DESIRE                                       | 0       | 独立倾向最低值                                                                                              |
| MAX_LIBERTY_DESIRE                                       | 100     | 独立倾向最高值                                                                                              |
| MIN_LIBERTY_DESIRE_INFLUENCE                             | -100    | 单项独立倾向影响最低值                                                                                      |
| MAX_LIBERTY_DESIRE_INFLUENCE                             | 100000  | 单项独立倾向影响最高值                                                                                      |
| MAX_CROWN_COLONIES                                       | 4       | 成立殖民领前最多拥有的同殖民区域省份                                                                        |
| RIVAL_TECH_THRESHOLD                                     | 0.5     | 科技差距符合此值才可以被选为宿敌                                                                            |
| OVERSEAS_DISTANCE                                        | 150     | 距离首都超过此距离被视为远方海外省份                                                                        |
| TRADE_LEAGUE_TECH_LIMIT                                  | 2       | 外交科技差异超过此值不能加入贸易联盟                                                                        |
| NORMAL_ELECTION_CYCLE                                    | 4       | 共和国基础选举周期（任期除以此值每有1点，连任损失的共和传统增加10点）                                       |
| DICTATORSHIP_TRADITION_FOR_MONARCHY                      | 50      | 如果共和传统低于此值，独裁者死后转变为君主制                                                                |
| DICTATORSHIP_TRADITION_FOR_REPUBLIC                      | 50      | 如果共和传统不低于此值，独裁者死后转变为共和                                                                |
| REVOLUTION_TARGET_SCORE_BOOST                            | 0.5     | 革命目标额外游戏分数                                                                                        |
| MIN_SHIPS_TO_EXPLORE                                     | 3       | 探索所需舰队规模最小值                                                                                      |
| BESTOW_GIFTS_FRACTION                                    | 0.5     | 赠送礼物获得好感系数，与目标国家年收入相关                                                                  |
| SEND_ADDITIONAL_TROOPS_FRACTION                          | 2       | 派遣援军系数（此倍数于目标国家年度人力增长）                                                                |
| DEMAND_ARTIFACTS_PRESTIGE                                | 5       | 要求进贡工艺品获得威望                                                                                      |
| DEMAND_ADDITIONAL_TRIBUTE_FRACTION                       | 0.25    | 要求额外进贡系数（此倍数于目标国家年收入）                                                                  |
| PLACATE_RULERS_PRESTIGE                                  | -20     | 安抚统治者威望花费                                                                                          |
| PLACATE_RULERS_LIBERTY                                   | -10     | 安抚统治者对独立倾向影响                                                                                    |
| RELATIVE_ON_THRONE_LIBERTY                               | 10      | 在附属国处于摄政期时，扶持本朝宗亲上位对独立倾向影响                                                        |
| RELATIVE_ON_THRONE_NOT_REGENCY_LIBERTY                   | 25      | 在附属国未处于摄政期时，扶持本朝宗亲上位对独立倾向影响                                                      |
| ENFORCE_RELIGION_LIBERTY_THRESHOLD                       | 50      | 强制转换宗教对独立倾向影响                                                                                  |
| ENFORCE_CULTURE_LIBERTY                                  | 25      | 强制转换主流文化对独立倾向影响                                                                              |
| ENFORCE_CULTURE_LIBERTY_THRESHOLD                        | 50      | 强制转换主流文化在独立倾向高于此值时不可用                                                                  |
| ENFORCE_CULTURE_TAX_MULTIPLIER                           | 2       | 强制转换主流文化点数花费倍数                                                                                |
| SIPHON_INCOME_FRACTION                                   | 0.5     | 榨取收入倍数（此数值乘以年收入）                                                                            |
| SIPHON_INCOME_LIBERTY                                    | 10      | 榨取收入对独立倾向影响                                                                                      |
| DIVERT_TRADE_FRACTION                                    | 1       | 转移贸易竞争力系数                                                                                          |
| PERCENTAGE_OF_YEARLY_INCOME_FOR_FAVOURS                  | 0.15    | 用人情换取金钱可获得该数值的年收入                                                                          |
| MONTHS_OF_RESOURCES_FOR_FAVOURS                          | 6       | 用人情换取金钱可获得该数值的人力                                                                            |
| RETURN_LAND_LIBERTY_MULTIPLIER                           | 2.5     | 归还省份对独立倾向影响系数                                                                                  |
| COT_DOWNGRADE_LIBERTY_DESIRE                             | 10      | 降级贸易中心对独立倾向影响系数                                                                              |
| CONCENTRATED_DEV_LIBERTY_DESIRE_PER_DEV                  | 3       | 每集中一点发展度对独立倾向的影响系数                                                                        |
| SEIZE_TERRITORY_LIBERTY_MULTIPLIER                       | 5       | 夺取省份对独立倾向影响系数                                                                                  |
| SEIZE_TERRITORY_LIBERTY_THRESHOLD                        | 50      | 夺取省份在独立倾向高于此值时不可用                                                                          |
| GRANT_PROVINCE_LIBERTY_MULTIPLIER                        | 0.5     | 授予核心对独立倾向影响系数                                                                                  |
| RETURN_PROVINCE_LIBERTY_MULTIPLIER                       | 1.0     | 授予省份对独立倾向的影响系数                                                                                |
| REPLACE_GOVERNOR_LIBERTY                                 | 10      | 替换总督对独立倾向影响系数                                                                                  |
| REPLACE_GOVERNOR_LIBERTY_THRESHOLD                       | 50      | 替换总督在独立倾向高于此值时不可用                                                                          |
| REPLACE_GOVERNOR_DELAY                                   | 12      | 替换总督延迟时间                                                                                            |
| SEND_SUBSIDIES_MANPOWER_FRACTION                         | 0.1     | 资助军队人力系数（宗主国人力乘以此数值）                                                                    |
| SUPPORT_LOYALISTS_EXPENSE_MULTIPLIER                     | 0.1     | 支持效忠派所需花费修正                                                                                      |
| SEND_OFFICERS_MAINTENANCE_MULTIPLIER                     | 0.33    | 派遣军官团对陆军花费减免修正                                                                                |
| EMBARGO_RIVALS_LIBERTY                                   | 5       | 禁运宿敌对独立倾向的影响                                                                                    |
| SUPPORT_LOYALISTS_LIBERTY                                | -20     | 支持效忠派对独立倾向的影响                                                                                  |
| SEND_OFFICERS_LIBERTY                                    | -10     | 派遣军官团对独立倾向的影响                                                                                  |
| DIVERT_TRADE_LIBERTY                                     | 30      | 转移贸易竞争力对独立倾向的影响                                                                              |
| PROMOTE_INVESTMENTS_TRADEPOWER                           | 0.5     | 增加投资贸易竞争力修正                                                                                      |
| PROMOTE_INVESTMENTS_INFLATION                            | 0.03    | 增加投资带来的通货膨胀                                                                                      |
| SCUTAGE_TAX_FRACTION                                     | 0.5     | 免服兵役额外进贡                                                                                            |
| PERCENTAGE_OF_DEV_FOR_CONVERT_TRIBUTARY_TO_VASSAL        | 0.4     | 将朝贡国转为附庸国所需要的天命值（将发展度乘于该数值）                                                      |
| MAX_LIBERTY_DESIRE_FOR_CONVERT_TRIBUTARY_TO_VASSAL       | 50      | 将朝贡国转为附庸国最低独立倾向                                                                              |
| CONCENTRATE_DEVELOPMENT_DEVELOPMENT_DECREASE             | 0.2     | 集中发展度损失的发展度系数                                                                                  |
| PILLAGE_CAPITAL_DEVELOPMENT_DECREASE                     | 0.2     | 掠夺发展度损失的发展度系数                                                                                  |
| RAZE_UNREST_DURATION                                     | 10      | 焚掠叛乱持续时间（焚掠带来的负面观念修正持续同样时间）                                                      |
| RAZE_PROVINCE_DEVELOPMENT_DECREASE                       | 0.33    | 焚掠降低的发展度（不能使单项发展度低于1，单项发展度在5以下时只会焚掠1点）                                   |
| RAZE_PROVINCE_POWER_PER_DEVELOPMENT                      | 25.0    | 每焚掠1点发展度可获得对应君主点数                                                                           |
| RAZE_TECH_BASE_LEVEL                                     | 3       | 解锁焚掠功能的科技等级                                                                                      |
| RAZE_TECH_POWER_DECREASE                                 | 0.04    | 焚掠获得军事点数衰减，（高于RAZE_TECH_BASE_LEVEL的）每等级军科对焚掠所获得的军事点数修正                    |
| RAZE_TECH_POWER_DECREASE_MAX                             | 0.8     | 焚掠获得军事点数衰减最大值                                                                                  |
| RAZE_PROVINCE_COOLDOWN_YRS                               | 20      | 焚掠冷却期，此年份内不可对一省份进行第二次焚掠                                                              |
| RAZE_PROVINCE_CONQUERED_TIME_LIMIT_MONTHS                | 6       | 省份在被征服此月份后不再可被劫掠                                                                            |
| HORDE_UNITY_PER_LOOT                                     | 0.25    | 每从劫掠中获得1金币得到此数值的游牧团结                                                                     |
| HORDE_UNITY_PER_RAZE                                     | 0.5     | 每从焚掠中摧毁1发展度得到此数值的游牧团结                                                                   |
| DEVOTION_PER_RAZE                                        | 0.33    | 每从焚掠中摧毁1发展度得到此数值的奉献度                                                                     |
| PILLAGE_CAPITAL_MAX_DEV_PILLAGED                         | 2       | 掠夺首都发展度单个最大值                                                                                    |
| NATIVE_UPRISING_COOLDOWN_MONTHS                          | 12      | 土著暴动冷却时间                                                                                            |
| NATIVE_UPRISING_CHANCE_PER_AGGRESSIVENESS                | 1.0     | 每点攻击性等于此数值倍数的土著暴动几率                                                                      |
| MIN_POPULATION_FOR_TRADEGOOD_ASSIGNMENT                  | 400     | 揭晓产物所需殖民地规模                                                                                      |
| DEBT_LIMIT_ADM                                           | -100    | 行政点数最低值                                                                                              |
| DEBT_LIMIT_DIP                                           | -999    | 外交点数最低值                                                                                              |
| DEBT_LIMIT_MIL                                           | -100    | 军事点数最低值                                                                                              |
| MAX_FERVOR                                               | 100.0   | 人情最大值                                                                                                  |
| BREAK_ALLIANCE_PRESTIGE_LOSS                             | 10.0    | 因外力断绝盟约损失的威望                                                                                    |
| BREAK_ALLIANCE_TRUST_COST                                | 5       | 对于目标国家，要求断绝盟约的国家会损失此数值的信任                                                          |
| BREAK_ALLIANCE_NON_GREAT_POWER_FAVOR_COST                | 50      | 断绝非列强盟友的盟约所需要消耗的人情                                                                        |
| BREAK_ALLIANCE_REQUIRED_OPINION                          | 50      | 断绝盟约所需要最低好感度                                                                                    |
| BREAK_ALLIANCE_OPINION_TO_NOT_WANT_TO                    | 75      |                                                                                                             |
| RETURN_CORE_FAVOR_COST_PER_DEV                           | 3       | 归还核心每点发展度所需要的人情                                                                              |
| RETURN_CORE_REQUIRED_OPINION                             | 50      | 归还核心最低好感度                                                                                          |
| REDUCE_OPINION_FAVOR_COST                                | 10      | 降低关系所需要人情                                                                                          |
| REDUCE_OPINION_REQUIRED_OPINION                          | 50      | 降低关系最低好感度                                                                                          |
| REDUCE_OPINION_OPINION_TO_NOT_WANT_TO                    | 75      |                                                                                                             |
| REDUCE_OPINION_POWER_BALANCE_SCORE                       | 100     |                                                                                                             |
| REDUCE_OPINION_RIVALS_OF_SCORE                           | 50      |                                                                                                             |
| REDUCE_OPINION_RIVALS_SCORE                              | 100     |                                                                                                             |
| REDUCE_OPINION_ANTAGONIZE_SCORE                          | 150     |                                                                                                             |
| TRADE_FAVORS_FOR_GOLD_FAVOR_COST                         | 10      | 换取金币所需要的人情                                                                                        |
| TRADE_FAVORS_FOR_GOLD_REQUIRED_OPINION                   | 50      | 换取金币最低好感度                                                                                          |
| TRADE_FAVORS_FOR_MEN_FAVOR_COST                          | 10      | 换取人力所需要的人情                                                                                        |
| TRADE_FAVORS_FOR_MEN_REQUIRED_OPINION                    | 50      | 换取人力最低好感度                                                                                          |
| TRADE_FAVORS_FOR_SAILORS_FAVOR_COST                      | 10      | 换取水手所需要的人情                                                                                        |
| TRADE_FAVORS_FOR_SAILORS_REQUIRED_OPINION                | 50      | 换取水手最低好感度                                                                                          |
| TRADE_FAVORS_FOR_HEIR_FAVOR_COST                         | 90      | 让亲属成为继承人所需要人情                                                                                  |
| TRADE_FAVORS_FOR_HEIR_REQUIRED_OPINION                   | 50      | 让亲属成为继承人所需要的最低好感度                                                                          |
| TRADE_FAVORS_FOR_TRUST_REQUIRED_OPINION                  | 50      | 让亲属成为继承人所需要的最低信任度                                                                          |
| TRADE_FAVORS_FOR_WAR_PREP_REQUIRED_OPINION               | 50      | 要求备战的最低好感度                                                                                        |
| USING_FAVORS_AI_BOOST                                    | 50      |                                                                                                             |
| NEW_FAVOR_HEIR_AGE_RANDOM_FACTOR                         | 12      | 让亲属成为继承人这项行动得到的继承人的年龄随机值                                                            |
| NEW_FAVOR_HEIR_AGE_MIN_FACTOR                            | 18      | 让亲属成为继承人这项行动得到的继承人的年龄最低值                                                            |
| NEW_HEIR_QUEEN_CHANCE                                    | 100     | 如果创建了继承人，则得到配偶的概率为此数值                                                                  |
| ROYAL_MARRIAGE_QUEEN_CHANCE                              | 50      | 建立王室联姻获得配偶概率                                                                                    |
| CONSORT_TAKEOVER_LEGITIMACY_HIT                          | -25     | 配偶摄政夺取政权造成的正统性冲击                                                                            |
| NAVAL_ATTRITION_ALERT_ATTRITION                          | 5       | 海军损耗高于此值时出现警告提示                                                                              |
| NAVAL_ATTRITION_ALERT_HULL                               | 50      | 舰船耐久值低于此值时出现警告提示                                                                            |
| BREAK_TRIBUTARY_STABILITY_PENALTY                        | -1      | 断绝朝贡关系稳定度冲击                                                                                      |
| MAX_ARMY_PROFESSIONALISM                                 | 1.0     | 陆军职业度最大值                                                                                            |
| LOW_ARMY_PROFESSIONALISM_MIN_RANGE                       | 0.0     | 低陆军职业度下限节点                                                                                        |
| LOW_ARMY_PROFESSIONALISM_MAX_RANGE                       | 0.5     | 低陆军职业度上限节点                                                                                        |
| HIGH_ARMY_PROFESSIONALISM_MIN_RANGE                      | 0.0     | 高陆军职业度下限节点                                                                                        |
| HIGH_ARMY_PROFESSIONALISM_MAX_RANGE                      | 1.0     | 高陆军职业度上限节点                                                                                        |
| ARMY_PROFESSIONALISM_PER_AGE                             | 0.2     | 陆军职业度解锁能力节点                                                                                      |
| TRADING_POLICY_COOLDOWN_MONTHS                           | 12      | 选择贸易策略冷却期                                                                                          |
| INNOVATIVENESS_FIRST_REACHED_TECH_LEVEL                  | 4.0     | 率先达到某科技等级的国家获得的创新度                                                                        |
| INNOVATIVENESS_FIRST_PICKED_IDEA                         | 2.0     | 率先点亮理念的国家获得的创新度                                                                              |
| INNOVATIVENESS_BEHIND_IN_TECH_PENALTY                    | -0.03   | 邻国科技领先损失创新度                                                                                      |
| INNOVATIVENESS_ENABLE_ANY_BEHIND_IN_TECH_PENALTY         | 0       | 开启时，创新度惩罚会在任意科技落后时生效。不启用则只要某项科技领先，便可免受惩罚。                          |
| INNOVATIVENESS_ENABLE_PER_TECH_BEHIND_IN_TECH_PENALTY    | 0       | 开启后，若所有科技均落后则创新度惩罚生效。                                                                  |
| INNOVATIVENESS_AHEAD_OF_TIME_BONUS                       | 0.01    | 科技领先创新度增长                                                                                          |
| INNOVATIVENESS_DAYS_AFTER_FIRST_PICK_VIABLE              | 365     | 继首个国家解锁科技后，后续国家在此天数内解锁科技依旧能获得创新度                                            |
| INNOVATIVENESS_MAX                                       | 100.0   | 创新度最大值                                                                                                |
| MIN_HARSH_TREATMENT_COST                                 | 5       | 残酷镇压最低点数花费                                                                                        |
| CAN_CONVERT_TERRITORY_CULTURE                            | 1       | 是否允许转变自治领地核心省份的文化                                                                          |
| CAN_CONVERT_TERRITORY_RELIGION                           | 1       | 是否允许转变自治领地核心省份的宗教                                                                          |
| ALLOWED_TERRITORY_VS_MAX_STATES                          | 1.0     | 自治领地与直属州占比不产生惩罚阈值（1.30版本后失效）                                                        |
| TERRITORY_PENALTY_CAP                                    | 40      | 自治领地达到惩罚最大值的数目（1.30版本后失效）                                                              |
| SETTLEMENT_GROWTH_DEVELOPMENT_INCREASE                   | 1       | 促进垦殖单次提升发展度                                                                                      |
| SETTLMENT_GROWTH_CHANCE_MULTIPLIER                       | 2.5     | 促进垦殖额外提升发展度几率基础值                                                                            |
| SETTLMENT_GROWTH_CHANCE_MIN                              | 0.05    | 促进垦殖额外提升发展度几率最小值                                                                            |
| SETTLEMENT_GROWTH_CHECK_INTERVAL                         | 365     | 促进垦殖触发检测间隔                                                                                        |
| FREE_POLICIES_PER_CATEGORY                               | 1       | 免费政策数量                                                                                                |
| TREASURE_SHIP_PASSAGE_FLAG_DECAY_DAYS                    | 365     | has_recent_tradeship_passage触发器再次为真时限                                                              |
| LEADER_PIPS_MONARCH_SKILL_INFLUENCE                      | 1.0     | 将领点数对君主点数的影响                                                                                    |
| REVOLUTION_SPREAD_COUNTE                                 | 3       | 同时传播革命省份数目最大值                                                                                  |
| REVOLUTION_DAILY_SPREADE                                 | 1.0     | 每日传播革命进度                                                                                            |
| REVOLUTION_EMBRACE_MIN_SPREADE                           | 1.0     | 接受革命需要至少此百分比的省份拥有革命理念                                                                  |
| REVOLUTION_EMBRACE_MIN_DEVE                              | 0       | 接受革命所需最低国家发展度                                                                                  |
| REVOLUTIONARY_ZEAL_GAIN_SPREADE                          | 0.1     | 从革命理念传播到省份中获得的革命热情乘数（乘以发展度）                                                      |
| REVOLUTIONARY_ZEAL_GAIN_STRENGTHEN_GOVERNMENTE           | 5.0     | 强化政府获得的革命热情                                                                                      |
| REVOLUTIONARY_ZEAL_LOST_WARE                             | -20.0   | 输掉战争损失革命热情                                                                                        |
| REVOLUTIONARY_ZEAL_SUPPORT_REBELS_WARE                   | 0.05    | 通过战争支持他国革命叛军获得的革命热情乘数（乘以发展度）                                                    |
| REVOLUTIONARY_ZEAL_SUPPORT_REBELSE                       | 0.01    | 支持他国革命叛军获得的革命热情乘数（乘以发展度）                                                            |
| REVOLUTION_CLAIM_MIN_ZEAL                                | 20.0    | 宣称革命目标最低所需革命热情                                                                                |
| REVOLUTION_CLAIM_COOLDOWNE                               | 12      | 再次夺取革命目标冷却期                                                                                      |
| TRIBE_STARTING_DEV                                       | 3       | 部落发展度初始值                                                                                            |
| MIGRATORY_TRIBE_DEVASTATION_BURN                         | 0.8     |                                                                                                             |
| MIGRATORY_TRIBE_DEVASTATION_ALERT_THRESHOLD              | 80      | 迁徙部落首都荒废度过高的警报阀值                                                                            |
| MIGRATORY_TRIBE_DEVELOPMENT_PROGRESS                     | 0.02    | 部落发展度每月增长值                                                                                        |
| MIGRATORY_TRIBE_DEVELOPMENT_OTHER_BONUS                  | 0.08    |                                                                                                             |
| TRIBE_MIGRATION_ADM_COST                                 | 0       | 迁徙部落迁徙所需要消耗的行政点                                                                              |
| TRIBE_MIGRATION_DIP_COST                                 | 0       | 迁徙部落迁徙所需要消耗的外交点                                                                              |
| TRIBE_MIGRATION_MIL_COST                                 | 50      | 迁徙部落迁徙所需要消耗的军事点                                                                              |
| SIBERIAN_TRIBE_MIGRATION_BONUS                           | 50      | 西伯利亚部落迁徙所获得的点数奖励                                                                            |
| SIBERIAN_TRIBE_MIGRATION_COOLDOWN_YEARS                  | 5       | 西伯利亚部落迁徙冷却期                                                                                      |
| TRIBE_MIGRATION_NON_TRIBAL_LAND_COOLDOWN_YEARS           | 2       | 迁徙部落迁徙冷却期                                                                                          |
| TRIBE_SETTLE_ADM_COST                                    | 50      | 迁徙部落定居所需消耗的行政点                                                                                |
| TRIBE_SETTLE_DIP_COST                                    | 50      | 迁徙部落定居所需消耗的外交点                                                                                |
| TRIBE_SETTLE_MIL_COST                                    | 50      | 迁徙部落定居所需消耗的军事点                                                                                |
| COHESION_FEDERATION_MEMBER_WRONG_CULTURE                 | 0.05    | 同一文化组不同文化的部落成员所提供的部落凝聚力                                                              |
| COHESION_FEDERATION_MEMBER_CORRECT_CULTURE               | 0.10    | 相同文化的部落成员所提供的部落凝聚力                                                                        |
| COHESION_FEDERATION_MEMBER_STRONGER                      | -0.20   | 实力强过部落首领的部落成员所提供的部落凝聚力                                                                |
| COHESION_FEDERATION_MEMBER_STRONGER_WRONG_CULTURE        | -0.40   | 实力强过部落首领且不同文化组的部落成员所提供的部落凝聚力                                                    |
| COHESION_FEDERATION_SAME_CULTURE_MEMBERS_BONUS_NUMBER    | 3       | 需要多少同一文化组成员才会提供部落凝聚力修正                                                                |
| COHESION_FEDERATION_SAME_CULTURE_MEMBERS_BONUS_MODIFIER  | 1.0     | 在满足COHESION_FEDERATION_SAME_CULTURE_MEMBERS_BONUS_NUMBER后额外提供的部落修正                             |
| COHESION_NEIGHBOURING_COLONIZER                          | 0.5     | 在与殖民者接壤后提供的部落凝聚力                                                                            |
| COHESION_FEDERATION_ADVANCEMENT                          | -0.05   | 每一个部落革新所提供的部落凝聚力                                                                            |
| FEDERATION_DESIRABILITY_WRONG_CULTURE_GROUP              | -100    | 不同文化组想要加入部落联盟的票数改变                                                                        |
| FEDERATION_DESIRABILITY_SAME_CULTURE                     | 100     | 相同文化想要加入部落联盟的票数                                                                              |
| FEDERATION_DESIRABILITY_SAME_CULTURE_GROUP               | -20     | 相同文化组但不同文化想要加入部落联盟的票数改变                                                              |
| FEDERATION_DESIRABILITY_LAND_BALANCE_MULTIPLIER          | 20.0    | 陆军实力对想要加入部落联盟的修正                                                                            |
| FEDERATION_DESIRABILITY_STRONGER_THAN_LEADER_MALUS       | -100    | 被邀请国家如果比邀请人陆军实力更强大则所获得的票数改变                                                      |
| FEDERATION_DESIRABILITY_WANTS_ALLY                       | 20      |                                                                                                             |
| FEDERATION_DESIRABILITY_WANTS_BEFRIEND                   | 20.0    |                                                                                                             |
| FEDERATION_DESIRABILITY_WANTS_ANTAGONIZE                 | -40     |                                                                                                             |
| FEDERATION_DESIRABILITY_WANTS_WEAKEN                     | -10     |                                                                                                             |
| FEDERATION_DESIRABILITY_DONT_WANT_TO_CHANGE              | -10     |                                                                                                             |
| FEDERATION_ACTION_COOLDOWN                               | 5       | 加入部落联盟后需要经过该数值的年数才能再次加入部落联盟                                                      |
| BREAK_ALLIANCE_ACTION_COOLDOWN                           | 10      |                                                                                                             |
| TRADE_FAVORS_ACTION_COOLDOWN                             | 5       |                                                                                                             |
| REDUCE_RELATION_ACTION_COOLDOWN                          | 15      |                                                                                                             |
| FEDERATION_ADVANCEMENT_COHESION_REQUIREMENT              | 100     | 部落革新所需要的部落凝聚力                                                                                  |
| FEDERATION_ADVANCEMENT_COHESION_COST                     | 80      | 部落革新所需要消耗的部落凝聚力                                                                              |
| EXPAND_INFRASTRUCTURE_DEV_LIMIT                          | 15      | 扩大基础设施所需要的最低发展度                                                                              |
