---
title: 欧陆风云4Defines第一部分
tags:
  - EU4
  - Game
  - Wiki
  - Paradox
date: 2025-09-06
draft: false
description: 本文章是摘抄自欧陆风云4中文百科-Defines的内容
lastmod: 2025-12-28
cover: https://img.linkcf.top/2025/12/20251229115638571.webp
stale: default
---

- [定义覆盖](#定义覆盖)
- [定义](#定义)
  - [NGame-游戏性](#ngame-游戏性)
  - [NDiplomacy-外交](#ndiplomacy-外交)

本文内容引用自[欧陆风云4中文百科-Defines](https://www.eu4cn.com/wiki/Defines)

[[eu4-defines-2|欧陆风云4定义第二部分]]

[[eu4-defines-3|欧陆风云4定义第三部分]]

[[eu4-defines-4|欧陆风云4定义第四部分]]

[[eu4-defines-5|欧陆风云4定义第五部分]]

## 定义覆盖

当你想覆盖定义文件 `/Europa Universalis IV/common/defines.lua`，最好使用`/Europa Universalis IV/common/defines/`文件夹覆盖而不是直接编辑它们。

一个简单的例子是把游戏结束时间改为9999年。为此你需要进行如下操作：

![test](https://img.linkcf.top/imgcenter/2024/10/fa8e05c54b08ec1721cf7fb65239b0fa.jpeg)

1. 添加一个 common/defines 文件夹在你的模组文件里。
2. 从原版游戏路径 common/defines 复制 `/Europa Universalis IV/common/defines/00_dummy.lua` 到你的模组文件夹。
3. 为了增强兼容性，重命名00_dummy.lua 为 00_yourmodname.lua。任何文件名都是有效的。
4. 结束时间的定义是‘END_DATE’。要添加这一条作为覆盖到你的00_yourmodname.lua，需要修改这条字符串。
5. 每个替代定义都必须在定义组和NDefines之前，因此：NDefines.NGame.END_DATE =“ 9999.12.12”
6. 请注意 **`,`** `/Europa Universalis IV/common/defines.lua `定义末尾的逗号不存在。复制定义时，请记住将其删除。
7. 您已经添加了覆盖定义。参见图片“替代示例”。

## 定义

### NGame-游戏性

- 此内容可能已落后版本，最后更新于1.29

| 定义                             | 默认值       | 允许范围                | 注释                                                      |
| -------------------------------- | ------------ | ----------------------- | --------------------------------------------------------- |
| START_DATE                       | "1444.11.11" | "1.1.1" to "9999.12.12" | 设定游戏开始时间。                                        |
| END_DATE                         | "1821.1.2"   | "1.1.1 to 9999.12.12"   | 设定游戏结束时间，必须要比开始时间要晚一天以上。          |
| MAX_RANDOM_NEW_WORLD             | "1492.1.1"   | "1.1.1" to "9999.12.12" | 可以使用随机新世界的最大日期值。                          |
| GREAT_POWER_FRENZY_START         | "1700.1.1"   |                         | 列强狂热的开始时间。                                      |
| GREAT_POWER_FRENZY_WARMUP_MONTHS | 600          |                         | 列强狂热在开始后多少个月达到最大效能。                    |
| GREAT_POWER_FRENZY_QUICKSTART    | 0            | 0 or 1                  | 列强狂热是否可以因为一个联盟变得过于强大而提早开始？      |
| AGE_USHER_IN_TIME                | 120          |                         | 开启一个新时代所需要的时间。                              |
| MAX_COLONIAL_NATIONS             | 75           | max is 100              | 最大殖民国家数量。                                        |
| MAX_CLIENT_STATES                | 100          | max is 100              | 最大仆从国国数量。                                        |
| MAX_ESTATE_COUNTRIES             | 50           | max is 100              | 最大通过阶层灾难出现的国家数量。                          |
| MAX_TRADING_CITIES               | 75           | max is 100              | 最大贸易城市数量。                                        |
| MAX_CUSTOM_COUNTRIES             | 75           | max is 100              | 最大自定义国家数量。                                      |
| MAX_OBSERVERS                    | 10           | max is 100              | 最大旁观者数量。                                          |
| SIZE_LIMIT_FOR_ISLANDS           | 25000        |                         | 以像素为单位的阈值，用于定义什么是岛屿和什么是大陆。      |
| DAYS_BEHIND_PAUSE                | 25           |                         | 用于 多人游戏, 如果最慢的玩家落后于此天数，则游戏将暂停。 |
| DAYS_BEHIND_LOWER_SPEED          | 10           |                         | 在多人游戏中，如果最慢的玩家落后于此天数，则游戏将变慢。  |

### NDiplomacy-外交

- 此内容可能已落后版本，最后更新于1.34

| 定义                                                                      | 默认   | 注释                                                                                                                                                |
| ------------------------------------------------------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| MIN_MONTHLY_COST_FOR_INFLUENCE_NATION                                     | 5      | 每个月影响国家所需支付最低成本（实际支付成本要乘于12）                                                                                              |
| HEGEMONY_LOST_DAYS                                                        | 7300   | 失去霸权效果持续时间                                                                                                                                |
| HEGEMONY_MONTHLY_PROGRESS                                                 | 0.5    | 每月霸权增长                                                                                                                                        |
| CHANGE_RIVAL_YEARS                                                        | 25     | 改变宿敌需要的年数。                                                                                                                                |
| CONDOTTIERI_MIN_DURATION                                                  | 18     | 派遣雇佣兵需要预先支付多少个月份的费用。                                                                                                            |
| UNCONDITIONAL_SURRENDER_MONTHS                                            | 2      | 开战2月后才能无条件投降。可以把数值改成负数来取消这个时间限制。                                                                                     |
| SHAREMAP_PRESTIGE_TRANSFER_LOSE                                           | -15    | 申请共享地图的威望花费。                                                                                                                            |
| SHAREMAP_PRESTIGE_TRANSFER_GAIN                                           | 10     | 请求共享地图得到的威望。                                                                                                                            |
| TRADE_LEAGUE_MIN_PRESTIGE_OLD_LEADER                                      | -50    | 担任贸易联盟领导者需要的最小威望值。                                                                                                                |
| TRADE_LEAGUE_MIN_PRESTIGE_NEW_LEADER                                      | 20     | 当旧领导者辞职时成为贸易联盟新领导者所需要的最小威望。                                                                                              |
| TRADE_LEAGUE_BREAK_OPINION                                                | -50    | 如果关系低于这个值，AI将会离开贸易联盟。                                                                                                            |
| PRESS_SAILORS_FRACTION                                                    | 0.2    | 附庸国征收水手百分比                                                                                                                                |
| DEMAND_UNLAWFUL_TERRITORY_BASE_DESIRE                                     | 100    | 神罗皇帝要求非法领地基础评分。                                                                                                                      |
| DEMAND_UNLAWFUL_TERRITORY_DEPENDENCY_DESIRE                               | -100   |                                                                                                                                                     |
| DEMAND_UNLAWFUL_TERRITORY_ALLIANCE_DESIRE                                 | -80    | 如果是神罗皇帝的盟友，则要求非法领地会减少的评分。                                                                                                  |
| DEMAND_UNLAWFUL_TERRITORY_TARGET_AT_WAR_DESIRE                            | 0      | 如果是战争目标，则神罗皇帝要求非法领地评分。                                                                                                        |
| DEMAND_UNLAWFUL_TERRITORY_RIVALRY_DESIRE                                  | 100    | 如果是神罗皇帝的宿敌，则要求非法领地会增加的评分。                                                                                                  |
| DEMAND_UNLAWFUL_TERRITORY_DESIRE_OPINION_MODIFIER                         | -1     | 与神罗皇帝关系修正对要求非法领地的评分影响。                                                                                                        |
| DEMAND_UNLAWFUL_TERRITORY_DESIRE_TRUST_MODIFIER                           | -1     | 与神罗皇帝信任修正对要求非法领地的评分影响。                                                                                                        |
| DEMAND_UNLAWFUL_TERRITORY_DESIRE_AE_MODIFIER                              | -1     |                                                                                                                                                     |
| TREASURE_FLEET_OPINION_HIT                                                | -25    | 私掠造成的态度变化值（按私掠金钱/50）                                                                                                               |
| DISHONORABLE_PEACE_MONTHS                                                 | 12     | 参见 DISHONORABLE_PEACE_WARSCORE（下一行）。设置为0可禁用该功能。                                                                                   |
| DISHONORABLE_PEACE_WARSCORE                                               | -10    | 如果你的战争分数大于这个值，并且在 DISHONORABLE_PEACE_MONTHS 所规定的时间内与敌人达成和平协议将导致 CALL_ALLY_DECLINE_PRESTIGE_PENALTY （威望损失） |
| DAYS_TO_DECLARE_WA                                                        | 30     | 在游戏开始多少天后你才能宣战。                                                                                                                      |
| INCREASE_TRUST_COST                                                       | 10     | 增加信任花费的人情。                                                                                                                                |
| INCREASE_TRUST_AMOUNT                                                     | 5      | 增加一次得到的信任数额。                                                                                                                            |
| PREPARE_FOR_WAR_COST                                                      | 10     | 要求AI备战花费的人情数额。                                                                                                                          |
| PREPARE_FOR_WAR_MONTHS                                                    | 12     | AI备战的月数。                                                                                                                                      |
| CALL_TO_ARMS_COST                                                         | 10     | 当你没有许诺土地时要求盟友参与进攻战争花费的人情数。                                                                                                |
| FAVORS_LAND_DIVIDER                                                       | 2      | 和平条约中给予其他国家土地获得的人情数（取决于发展度）。                                                                                            |
| DISHONOR_CALL_TRUST_CALLER                                                | 20     | 不名誉地拒绝参战降低的信任数额（与召唤者）。                                                                                                        |
| DISHONOR_CALL_TRUST                                                       | 5      | 不名誉地拒绝参战降低的信任数额（与任何国家）。                                                                                                      |
| EXCOMMUNICATE_TRUST                                                       | 10     | 绝罚降低的信任数额（与绝罚者）。                                                                                                                    |
| INSULT_TRUST                                                              | 5      | 侮辱造成信任降低的数额（与侮辱者）。                                                                                                                |
| CLAIM_THRONE_TRUST                                                        | 25     | 宣称王位降低的信任数额（与宣称者）。                                                                                                                |
| BROKE_LAND_PROMISE_YEARS                                                  | 30     | 违背许诺土地后多少年内不能再以许诺土地要求盟友加入战争。                                                                                            |
| DEFENDER_OF_FAITH_TRUST_LOSS                                              | -15    | 信仰守护者拒绝捍卫同种宗教国家所损失对应国家的信任值。                                                                                              |
| DEFENDER_OF_FAITH_PENALTY_DAYS                                            | 1800   | 前信仰守护者如果拒绝捍卫同种宗教国家后，想再次宣称信仰守护者的所需时间。                                                                            |
| FAVOR_GAIN_WARSCORE_FACTOR                                                | 20     | 给予土地所获得的人情与战争分数是成比例的（因此，给予土地的条款实际战争分数越高，获得的人情越多。此时为实际战争分数去除百分号再除以2）。             |
| FAVOR_GAIN_FOR_LAND                                                       | 10     | 给予土地获得的人情（与战争参与度成比例）。                                                                                                          |
| FAVOR_GAIN_FOR_HELP                                                       | 20     | 帮助盟友的战争获得的人情（基于相对于其力量的战争贡献）。                                                                                            |
| TRUST_PENALTY_FOR_NO_LAND                                                 | 20     | 因为未获得和平协议中预期的土地数量，而导致信任降低数额最大值（与实际获得的土地数量成正比）。                                                        |
| TRUST_PENALTY_FOR_SEPARATE_PEACE                                          | 10     | 单独媾和导致的信任降低数额。                                                                                                                        |
| OFFENSIVE_WAR_COOLDOWN                                                    | 10     | 在发动进攻战争的几年之内你可以召唤盟友参战。                                                                                                        |
| MAX_CLIENT_STATES                                                         | 10     | 一个国家所能拥有的最大仆从国数量。                                                                                                                  |
| ALLOW_LEADER_DEMAND_TOGGLE                                                | 0      | 是否允许玩家设定战争领袖是否可以为其谈判。                                                                                                          |
| VASSALIZE_BASE_DEVELOPMENT_CAP                                            | 100    | 当高于该数值时便不能通过外交附庸。                                                                                                                  |
| MARCH_BASE_DEVELOPMENT_CAP                                                | 200    | 当高于该数值时便不能转变为卫戍国。                                                                                                                  |
| MARCH_DEVELOPMENT_FRACTION                                                | 0.25   | 在卫戍国的发展度占宗主国发展度比例为多少之前，能够获得军事奖励。                                                                                    |
| PEACE_IMPACT_ADM_SCORE                                                    | 0.25   | 平静对行政类别中的分数累积有多大影响。                                                                                                              |
| PEACE_IMPACT_DIP_SCORE                                                    | 0.25   | 和平对外交类别中的分数积累有多大影响。                                                                                                              |
| PEACE_IMPACT_MIL_SCORE                                                    | 0.25   | 和平状态对军事类别的分数积累有多大影响。                                                                                                            |
| AUTONOMY_WARSCORE_COST_MODIFIER                                           | 0.33   | 自治度对省份战争分数的影响比例（此值为1时即无折扣，15%自治度等同15%省份战争分数减免；</br> 此值为0.33时，15%自治度等同5%省份战争分数减免）。        |
| GREAT_PROJECT_WARSCORE_COST_MODIFIER                                      | 0.33   | 每个伟大工程使对应省份所需的战争分数花费增加多少（所以1个增加33%，2个增加66%等等）                                                                  |
| NUM_POSSIBLE_RIVALS                                                       | 3      | 最大宿敌槽位                                                                                                                                        |
| RIVAL_PRESTIGE_BONUS                                                      | 0.25   | 从击败宿敌的战斗中获取的威望奖励。                                                                                                                  |
| RIVAL_SPY_OFFENCE                                                         | 0.25   | 在宿敌国家构建间谍网的奖励。                                                                                                                        |
| SPY_NETWORK_DISTANCE_EFFECT                                               | 0.1    | 作为距离的乘数，计算首都距离对构建间谍网的惩罚。                                                                                                    |
| OVEREXTENSION_THRESHOLD                                                   | 1.0    | 过度扩张事件触发阈值，1代表100%。                                                                                                                   |
| OVEREXTENSTION_POLL_BASE                                                  | 365    | 过度扩张事件爆发的基础频率（在100%时）。                                                                                                            |
| OVEREXTENSTION_POLL_CHANGE                                                | 0.05   | 多于100%的过度扩张每有1%，增加的相应爆发概率。                                                                                                      |
| RIVAL_PEACE_COST_REDUCTION                                                | -0.33  | 在与宿敌的合约中要求省份时，获得的外交点数减免。                                                                                                    |
| MAX_PEACE_TREATY_COST                                                     | 200    | 每份和平协议最大消耗的外交点数。                                                                                                                    |
| DESIRED_NUM_OF_ELECTORS                                                   | 7      | 维持神圣罗马帝国帝国威望所需选帝侯最小值。                                                                                                          |
| MAX_FREE_CITIES                                                           | 12     | 神圣罗马帝国自由市最大值。                                                                                                                          |
| MIN_NUM_ELECTORS_FOR_REMOVE_ELECTORATE                                    | 2      | 选帝侯数量小于等于此数值时无法剥夺选帝侯身份。                                                                                                      |
| HRE_PRINCE_AUTHORITY_THRESHOLD                                            | 25     | 帝国诸侯低于此数值将损失帝国威望，高于此数值将获得帝国威望。                                                                                        |
| IMPERIAL_AUTHORITY_FROM_PRINCES                                           | 0.075  | 每个诸侯带来的帝国威望。                                                                                                                            |
| HRE_FOREIGN_CONTROL_PENALTY                                               | -0.005 | 每个由非帝国诸侯控制（无论直接拥有或通过附庸占有）的省份对帝国威望造成的损失。                                                                      |
| HRE_HERETIC_PENALTY                                                       | -0.01  | 每个异端诸侯带来的帝国威望损失（威斯特伐利亚条约签署后减半）。                                                                                      |
| LACK_OF_ELECTORS_HIT                                                      | -0.1   | 缺少选帝侯遭受的帝国威望损失（包括选帝侯被附庸的情况）。                                                                                            |
| JOIN_HRE_DEVELOPMENT_CAP_VASSAL                                           | 200    | 能够加入帝国的最大发展度。                                                                                                                          |
| IMPERIAL_REFORM_COST                                                      | 50     | 推行一项帝国改革所需要的最小花费。                                                                                                                  |
| IMPERIAL_REFORM_AUTHORITY_ACCEPTANCE                                      | 1      | 帝国权威对帝国成员是否支持改革的影响                                                                                                                |
| CELESTIAL_EMPIRE_REFORM_COST                                              | 70     | 推行一项天朝改革所需要消耗的天命值。                                                                                                                |
| CELESTIAL_EMPIRE_REFORM_STABILITY_COST                                    | 1      | 推行一项天朝改革所需要消耗的稳定度。                                                                                                                |
| CELESTIAL_EMPIRE_REFORM_MIN_VALUE                                         | 80     | 推行一项天朝改革至少需要的天命值。                                                                                                                  |
| DEFENDER_OF_FAITH_COST                                                    | 500    | 宣称信仰守护者头衔的花费。                                                                                                                          |
| DEFENDER_OF_FAITH_MONTHS                                                  | 24     | 因为威望不足而被其他国家取代信仰守护者头衔前的过渡时间。                                                                                            |
| AMOUNT_OF_ACTIVE_CARDINALS                                                | 7      | 至多可以控制的枢机主教数目。                                                                                                                        |
| AMOUNT_OF_FUTURE_CARDINALS                                                | 5      | 未来红衣主教的数量                                                                                                                                  |
| EXCOMMUNICATE_ACTION_MONTHS                                               | 36     | 绝罚外交行动的冷却时间。                                                                                                                            |
| CRUSADE_TIMEOUT_YEARS                                                     | 30     | 十字军号召有效时限，单位为年。                                                                                                                      |
| WE_IMPACT_ON_ANNEX_INTEGRATE                                              | -0.05  | 与现有的厌战度相乘，影响外交合并或吞并带来的厌战度。                                                                                                |
| EMPEROR_VOTE_DAYS                                                         | 60     | 选帝侯改变投票的冷却时间。                                                                                                                          |
| EMPEROR_REVOKE_AUTHORITY_COST                                             | 50.0   | 移除帝国改革所需的帝国权威                                                                                                                          |
| EMPEROR_REVOKE_MODIFIER_DAYS                                              | 1800   | 移除帝国改革后修正持续时间                                                                                                                          |
| TRUCE_YEARS                                                               | 5      | 停战协定时间。                                                                                                                                      |
| SCALED_TRUCE_YEARS                                                        | 10     | 停战协定年份，按照战争分数花费等比例地延长（100%战争分数时为全额停战时间）。                                                                        |
| REQUEST_HEIR_TRUCE                                                        | 5      | 强制停战所导致的停战时间。                                                                                                                          |
| REQUEST_HEIR_AE                                                           | 20     | 强制停战所造成的侵略扩张。                                                                                                                          |
| WARNING_YEARS                                                             | 20     | 发布警告有效时间。                                                                                                                                  |
| ANNUL_TREATIES_YEARS                                                      | 10     | 断绝同盟禁止再次结盟时限。                                                                                                                          |
| COALITION_YEARS                                                           | 20     | 包围网消退时限。                                                                                                                                    |
| GUARANTEE_YEARS                                                           | 20     | 保证独立有效时间。                                                                                                                                  |
| REVANCHISM_MONTHLY_DECAY                                                  | 0.833  | 复仇主义消退速度修正，默认值为20年左右完全消退。                                                                                                    |
| MONARCH_GOV_CHANGE_LEGITIMACY_PENALTY                                     | 0.0    | 改变政体为君主制时所受的正统性惩罚。                                                                                                                |
| EXTEND_REGENCY_LEGITIMACY_PENALTY                                         | 10     | 延长摄政期对正统的惩罚                                                                                                                              |
| EXTEND_REGENCY_IMPERIAL_AUTHORITY_PENALTY                                 | 20     | 延长摄政期对帝国权威的惩罚                                                                                                                          |
| DEFAULT_EXTEND_REGENCY_YEARS                                              | 5      | 默认延长摄政年限                                                                                                                                    |
| EXTEND_REGENCY_ALERT_LEEWAY_DAYS                                          | 365    | 离摄政结束还有多久才会提醒。                                                                                                                        |
| BASE_SPY_DISCOVERY_CHANCE                                                 | 0.25   | 基础间谍暴露几率。                                                                                                                                  |
| JUSTIFY_TRADE_CONFLICT_LIMIT                                              | 0.2    | 能被用以正当化贸易争端时，自身在贸易节点所需要的贸易力量。                                                                                          |
| JUSTIFY_TRADE_CONFLICT_ACTOR_LIMIT                                        | 0.1    | 能被用以正当化贸易争端时，对方在贸易节点所需要的贸易力量。                                                                                          |
| PRESTIGE_PENALTY_ON_DISCOVER_JTC                                          | -5     | 如果被发现在正当化贸易冲突，所蒙受的威望惩罚。                                                                                                      |
| MIN_ASKED_TRADE_POWER                                                     | 10     | 最低可以要求转移的贸易竞争力。                                                                                                                      |
| MAX_ASKED_TRADE_POWER                                                     | 50     | 最高可以要求转移的贸易竞争力。                                                                                                                      |
| MIN_PAPAL_INFLUENCE_TO_PREVENT_EXCOMMUNICATION                            | 50     | 教皇的影响力可以防止开除教籍（效果未知）。                                                                                                          |
| HRE_VOTE_ENEMY                                                            | -200   | 对处于敌对战争中的国家的投票修正。                                                                                                                  |
| HRE_VOTE_LEGUE_ENEMY                                                      | -200   | 对处于宗教联盟敌对阵营的国家的投票修正。                                                                                                            |
| HRE_VOTE_LEAGUE_LEADER                                                    | 100    | 对宗教阵营领袖的投票修正。                                                                                                                          |
| HRE_VOTE_LEAGUE_LEADER_FRIEND                                             | 200    | 作为同一宗教联盟成员，对联盟领袖的投票修正。                                                                                                        |
| HRE_VOTE_HERETIC                                                          | -50    | 对异端国家投票修正。                                                                                                                                |
| HRE_VOTE_OVERLORD                                                         | 50     | 附庸国对宗主国投票修正。                                                                                                                            |
| HRE_VOTE_VASSAL_ELECTOR                                                   | -50    | 对附庸了选帝侯的国家的投票修正。                                                                                                                    |
| HRE_VOTE_TOO_SMALL                                                        | -25    | 对发展度低于50的国家的投票修正（弹丸小国）。                                                                                                        |
| HRE_VOTE_BIG_COUNTRY                                                      | 25     | 基于发展度的投票修正（帝国大诸侯）。                                                                                                                |
| HRE_VOTE_VERY_BIG_COUNTRY                                                 | 50     | 基于发展度的投票修正（帝国大诸侯）。                                                                                                                |
| HRE_VOTE_NON_MEMBER                                                       | -50    | 对非神圣罗马帝国成员的投票修正。                                                                                                                    |
| HRE_VOTE_SAME_CULTURE_GROUP                                               | 5      | 对相同文化组国家的投票修正                                                                                                                          |
| HRE_VOTE_ALLIANCE                                                         | 30     | 对同盟的投票修正。                                                                                                                                  |
| HRE_VOTE_ROYAL_MARRIAGE                                                   | 10     | 对王室联姻对象的投票修正。                                                                                                                          |
| HRE_VOTE_CORE_CLAIM                                                       | -50    | 对占据了己方核心或拥有宣称的国家的投票修正。                                                                                                        |
| COUNTERESPIONAGE_DISCOVER_CHANCE                                          | 0.33   | 间谍防御效率。                                                                                                                                      |
| COUNTERESPIONAGE_NETWORK_IMPACT                                           | -0.50  | 减缓间谍网组建速度。                                                                                                                                |
| BUILD_SPY_DISCOVERED_PENALTY                                              | -10.0  | 间谍网被发现后构建速度惩罚。                                                                                                                        |
| BUILD_SPY_NETWORK_SPEED                                                   | 1.5    | 间谍网组建速度。                                                                                                                                    |
| SPY_NETWORK_DECAY                                                         | 1      | 间谍网衰退速度。                                                                                                                                    |
| SPY_NETWORK_SIEGE_EFFECT                                                  | 0.2    | 间谍网对围城效率影响。                                                                                                                              |
| SPY_NETWORK_AE_EFFECT                                                     | -0.3   | 间谍网对侵略扩张(AE)影响。                                                                                                                          |
| SPY_NETWORK_TECH_EFFECT                                                   | -0.05  | 间谍网从每一级科技差获得的奖励。                                                                                                                    |
| SPY_NETWORK_TECH_EFFECT_MAX                                               | -0.3   | 间谍网从科技差最高获得的将领。                                                                                                                      |
| DETECTED_SPY_NETWORK_DAMAGE_MIN                                           | 10     | 发现间谍网后，最小摧毁规模。                                                                                                                        |
| DETECTED_SPY_NETWORK_DAMAGE_MAX                                           | 30     | 发现间谍网后，最大摧毁规模。                                                                                                                        |
| SPY_NETWORK_DISCOVER_WAR                                                  | 50     |                                                                                                                                                     |
| SUPPORT_REBELS_EFFECT                                                     | 10     | 支持叛军效率。                                                                                                                                      |
| SUPPORT_REBELS_MONEY_FACTOR                                               | 0.5    | 支持叛军花费金钱。                                                                                                                                  |
| FABRICATE_CLAIM_COST                                                      | 20     | 伪造宣称消耗。                                                                                                                                      |
| FABRICATE_CLAIM_COST_MODIFIER_PER_CLAIM                                   | 0.25   | 每获取一个宣称，伪造宣称花费增加。                                                                                                                  |
| CLAIM_STATE_MODIFIER                                                      | 0.5    | 伪造地区宣称花费修正。                                                                                                                              |
| JUSTIFY_TRADE_CONFLICT_COST                                               | 10     | 正当化贸易冲突花费。                                                                                                                                |
| INFILTRATE_ADMINISTRATION_COST                                            | 40     | 管理渗透花费。                                                                                                                                      |
| SABOTAGE_REPUTATION_COST                                                  | 60     | 破坏名誉花费。                                                                                                                                      |
| STEAL_MAPS_COST                                                           | 50     | 偷取地图信息花费。                                                                                                                                  |
| SUPPORT_REBELS_COST                                                       | 30     | 支持叛军花费。                                                                                                                                      |
| SOW_DISCONTENT_COST                                                       | 80     | 挑动不满情绪花费。                                                                                                                                  |
| AGITATE_FOR_LIBERTY_COST                                                  | 90     | 煽动独立花费。                                                                                                                                      |
| SABOTAGE_RECRUITMENT_COST                                                 | 80     | 破坏征兵花费。                                                                                                                                      |
| SLANDER_MERCHANTS_COST                                                    | 70     | 诽谤商人团花费。                                                                                                                                    |
| CORRUPT_OFFICIALS_COST                                                    | 25     | 腐化官员花费。                                                                                                                                      |
| INFILTRATE_ADMINISTRATION_DURATION                                        | 60     | 管理渗透持续时间（月）                                                                                                                              |
| SABOTAGE_REPUTATION_DURATION                                              | 1825   | 破坏征兵持续时间（天）                                                                                                                              |
| CORRUPT_OFFICIALS_DURATION                                                | 1825   | 腐化官员持续时间（天）                                                                                                                              |
| SUPPORT_REBELS_DURATION                                                   | 5      | 支持叛军持续时间（年）                                                                                                                              |
| SOW_DISCONTENT_DURATION                                                   | 1825   | 挑动不满情绪持续时间（天）                                                                                                                          |
| AGITATE_FOR_LIBERTY_DURATION                                              | 60     | 煽动独立持续时间（月）                                                                                                                              |
| SABOTAGE_RECRUITMENT_DURATION                                             | 60     | 破坏征兵持续时间（月）                                                                                                                              |
| SLANDER_MERCHANTS_DURATION                                                | 60     | 诽谤商人团花费（月）                                                                                                                                |
| AE_OTHER_CONTINENT                                                        | 10     | 对非同一大陆国家造成的侵略扩张影响修正（绝对值，减法）。                                                                                            |
| AE_SAME_CULTURE                                                           | 0.5    | 所征服省份对同文化国家造成的侵略扩张影响修正。                                                                                                      |
| AE_SAME_CULTURE_GROUP                                                     | 0.25   | 所征服省份对（与该省份）同文化组国家造成的侵略扩张影响修正。                                                                                        |
| AE_INFIDEL_CONQUEST                                                       | 0.25   | 从异教国家夺取同宗教省份造成的侵略扩张影响修正。                                                                                                    |
| AE_SAME_RELIGION                                                          | 0.5    | 所征服省份对同宗教国家造成的侵略扩张影响修正。                                                                                                      |
| AE_SAME_RELIGION_GROUP                                                    | 0.0    | 所征服省份对同宗教组国家造成的侵略扩张影响修正。                                                                                                    |
| AE_DIFFERENT_RELIGION                                                     | -0.5   | 所征服省份对异教国家造成的侵略扩张影响修正。                                                                                                        |
| AE_HRE_INTERNAL                                                           | 0.5    | 征服神罗省份造成的侵略扩张影响修正。                                                                                                                |
| AE_ATTACKER_DEVELOPMENT                                                   | 0.01   | 夺取省份对进攻战争中一同作战者造成的侵略扩张影响修正，随发展度成比例上升，在1000发展度时最高为+50%。                                                |
| AE_DEFENDER_DEVELOPMENT                                                   | 0.01   | 夺取省份对防御战争中一同作战者造成的侵略扩张影响修正，随发展度成比例上升，在1000发展度时最高为+50%。                                                |
| AE_DISTANCE_BASE                                                          | 0.75   | 侵略扩张影响距离乘数，每100边界距离增加一次幂，100距离以内为0次幂。                                                                                 |
| AE_SAME_OVERLORD                                                          | 0.5    | 夺取省份对拥有同一宗主国的国家造成的侵略扩张影响修正。                                                                                              |
| AE_PROVINCE_CAP                                                           | 30     | 该数值以上的发展度不会造成更多的侵略扩张影响（与战争分数相关设定一致）。                                                                            |
| AE_FABRICATE_CLAIM                                                        | 2.5    | 伪造宣称被发现后获得的侵略扩张影响（1.20版本后伪造宣称机制修改，此设定废除）                                                                        |
| AE_THREATEN_WAR                                                           | 1.0    | 威胁开战造成的侵略扩张影响修正（乘法）。                                                                                                            |
| PO_DEMAND_PROVINCES_AE                                                    | 0.6    | 夺取省份时每点发展度带来的侵略扩张影响。                                                                                                            |
| PO_RETURN_CORES_AE                                                        | 0.4    | 归还省份时每点发展度造成的侵略扩张影响（仅当归还给胜利者的属国时生效）                                                                              |
| PO_FORM_PU_AE                                                             | 0.20   | 建立联合统治时每点发展度造成的侵略扩张影响                                                                                                          |
| PO_CONCEDE_COLONIAL_AE                                                    | 0.2    | 夺取殖民地省份每点发展度带来的侵略扩张影响                                                                                                          |
| PO_BECOME_VASSAL_AE                                                       | 0.5    | 强制附庸每点发展度带来的侵略扩张影响                                                                                                                |
| PO_FORCE_JOIN_EMPIRE_AE                                                   | 0.2    | 强制加入神罗带来的侵略扩张影响                                                                                                                      |
| PO_TRANSFER_VASSAL_AE                                                     | 0.33   | 转移属国每点发展度带来的侵略扩张影响                                                                                                                |
| PO_ANNEX_PRESTIGE                                                         | 0.25   | 完全吞并每点发展度带来的威望                                                                                                                        |
| PO_DEMAND_PROVINCES_PRESTIGE                                              | 0.25   | 战争中夺取省份每点发展度带来的威望                                                                                                                  |
| PO_PILLAGE_CAPITAL_PRESTIGE                                               | 0      | 劫掠首都发展度带来的威望                                                                                                                            |
| PO_REVOKE_CORES_PRESTIGE                                                  | 0.1    | 放弃核心每点发展度带来的威望                                                                                                                        |
| PO_RETURN_CORES_PRESTIGE                                                  | 0.25   | 归还核心每点发展度带来的威望                                                                                                                        |
| PO_RELEASE_VASSAL_PRESTIGE                                                | 0.25   | 释放附庸国每点发展度带来的威望                                                                                                                      |
| PO_TRANSFER_VASSAL_PRESTIGE                                               | 0.25   | 转移附庸国每点发展度带来的威望                                                                                                                      |
| PO_RELEASE_ANNEXED_PRESTIGE                                               | 0.25   | 释放国家每点发展度带来的威望                                                                                                                        |
| PO_CHANGE_RELIGION_PRESTIGE                                               | 5      | 转换宗教带来的威望                                                                                                                                  |
| PO_FORM_PU_PRESTIGE                                                       | 0.25   | 建立联合统治每点发展度带来的威望                                                                                                                    |
| PO_BECOME_VASSAL_PRESTIGE                                                 | 0.25   | 强迫附庸每点发展度带来的威望                                                                                                                        |
| PO_BECOME_VASSAL_PRESTIGE                                                 | 0.25   | 强迫附庸每点发展度带来的威望                                                                                                                        |
| PO_JOIN_EMPIRE_PRESTIGE                                                   | 0.25   | 强迫加入神罗每点发展度带来的威望                                                                                                                    |
| PO_CONCEDE_DEFEAT_PRESTIGE                                                | 10     | 承认失败获得的威望                                                                                                                                  |
| PO_DISMANTLE_REVOLUTION_PRESTIGE                                          | 25     | 扑灭革命获得的威望                                                                                                                                  |
| PO_CHANGE_HRE_RELIGION_PRESTIGE                                           | 25     | 神圣罗马帝国改变官方信仰获得的威望                                                                                                                  |
| PO_ANNUL_TREATY_PRESTIGE                                                  | 1      |                                                                                                                                                     |
| PO_REVOKE_ELECTOR_AE                                                      | 25     | 移除选帝侯造成的侵略扩张影响（在缺少孙子兵法和常识时才能以战争手段移除选帝侯，否则移除选帝侯会成为外交行动）                                        |
| PO_REVOKE_ELECTOR_PRESTIGE                                                | 5      | 移除选帝侯获得的威望                                                                                                                                |
| PO_TRADE_POWER_PRESTIGE                                                   | 2      | 转移贸易竞争力获得的威望                                                                                                                            |
| PO_CONCEDE_COLONIAL_PRESTIGE                                              | 2      | 移交殖民地获得的威望                                                                                                                                |
| PO_GIVE_UP_CLAIM_PRESTIGE                                                 | 2      | 放弃宣称获得的威望                                                                                                                                  |
| PO_HUMILIATE_RIVAL_PRESTIGE                                               | 5      | 羞辱宿敌获得的威望                                                                                                                                  |
| PO_FORCE_MIGRATION_PRESTIGE                                               | 2      | 强制迁徙获得的威望                                                                                                                                  |
| PO_ENFORCE_REBEL_DEMANDS_PRESTIGE                                         | 2      | 强迫同意叛军要求带来的威望                                                                                                                          |
| PO_TAKE_MANDATE_PRESTIGE                                                  | 25     | 夺取天命带来的威望                                                                                                                                  |
| PO_TAKE_MANDATE_AE                                                        | 0      | 夺取天命带来的侵略扩张影响                                                                                                                          |
| PO_SPREAD_REVOLUTION_PRESTIGE                                             | 0.1    | 强制传播革命每点发展度带来的威望                                                                                                                    |
| PO_ENFORCE_FLEET_BASING_PRESTIGE                                          | 2      | 强迫提供船只停泊权带来的威望                                                                                                                        |
| PO_ENFORCE_MIL_ACCESS_PRESTIGE                                            | 2      | 强迫提供军事通行权带来的威望                                                                                                                        |
| PO_WAR_REPARATIONS_PRESTIGE                                               | 2      | 要求战争赔偿带来的威望                                                                                                                              |
| PO_END_RIVALRY_PRESTIGE                                                   | 5      | 终止宿敌带来的威望                                                                                                                                  |
| PEACE_COST_PRIMITIVE_NERF                                                 | 0.75   | 对原始部落战争分数花费乘数                                                                                                                          |
| PEACE_COST_DEMAND_PROVINCE                                                | 0.8    | 索要省份战争分数花费乘数（分数为此数值乘以省份价值，默认设置时与完全吞花费设定一致）                                                                |
| PEACE_COST_CONCEDE_PROVINCE                                               | 0.8    | 索要殖民地区域省份的战争分数花费乘数                                                                                                                |
| PEACE_COST_BECOME_VASSAL                                                  | 0.8    | 附庸国家的战争分数花费乘数（分数为此数值乘以省份价值）                                                                                              |
| PEACE_COST_PILLAGE_CAPITAL                                                | 1      | 掠夺首都发展度战争花费乘数（分数为此数值乘以省份价值）                                                                                              |
| PEACE_COST_RETURN_CORE                                                    | 0.8    | 归还核心战争分数花费乘数（分数为此数值乘以省份价值）                                                                                                |
| PEACE_COST_REVOKE_CORE                                                    | 0.4    | 放弃核心战争分数花费乘数（分数为此数值乘以省份价值）                                                                                                |
| PEACE_COST_RELEASE_ANNEXED                                                | 1      | 释放（被吞并的）国家战争分数花费乘数（分数为此数值乘以省份价值）                                                                                    |
| PEACE_COST_RELEASE_VASSAL                                                 | 0.4    | 释放附庸战争分数花费乘数（分数为此数值乘以省份价值）                                                                                                |
| PEACE_COST_REVOKE_ELECTOR                                                 | 60     | 取消选帝侯身份战争分数花费                                                                                                                          |
| PEACE_COST_UNION                                                          | 60     | 组建联合统治分数花费                                                                                                                                |
| PEACE_COST_SUBJUGATE                                                      | 90     | 使用附庸战争借口的战争分数花费                                                                                                                      |
| PEACE_COST_JOIN_HRE                                                       | 90     | 强迫加入神罗的最大战争分数花费                                                                                                                      |
| PEACE_COST_CONVERSION                                                     | 0.8    | 强制信仰战争分数花费乘数（分数为此数值乘以省份价值）                                                                                                |
| PEACE_COST_RELEASE                                                        | 2      | 释放国家战争花费乘数（随省份数目增加而上升）                                                                                                        |
| PEACE_COST_CONCEDE                                                        | 10     | 承认失败战争分数花费                                                                                                                                |
| PEACE_COST_GOLD_STEP                                                      | 5      | 每有一笔贷款规模的赔款所需的分数                                                                                                                    |
| PEACE_COST_GOLD_MAX                                                       | 5      | 最多可以在战争合约中，索取此数额笔数贷款规模的赔款（即默认情况至多索取25战争分数的赔款）                                                            |
| PEACE_COST_ANNUL                                                          | 10     | 废除条约的战争分数花费                                                                                                                              |
| PEACE_COST_CHANGE_GOVERNMENT                                              | 50     | 强制转变政体的战争分数花费                                                                                                                          |
| PEACE_COST_TRADE_POWER                                                    | 30     | 转移贸易竞争力的战争分数花费                                                                                                                        |
| PEACE_COST_STEER_TRADE                                                    | 60     | 转移贸易的战争分数花费                                                                                                                              |
| PEACE_COST_INDEPENDANCE                                                   | 30     | 断绝盟约的战争分数花费                                                                                                                              |
| PEACE_COST_ENFORCED_FLEET_BASING_RIGHTS                                   | 25     | 强制舰队停泊权的战争分数花费                                                                                                                        |
| PEACE_COST_ENFORCED_MILITARY_ACCESS                                       | 15     | 强制军队通行权的战争分数花费                                                                                                                        |
| PEACE_COST_WAR_REPARATIONS                                                | 10     | 战争赔款的战争分数花费                                                                                                                              |
| PEACE_COST_GIVE_UP_CLAIM                                                  | 20     | 放弃对某国全部宣称的战争分数花费                                                                                                                    |
| PEACE_COST_DISMANTLE_REVOLUTION                                           | 100    | 粉碎革命战争分数花费                                                                                                                                |
| PEACE_COST_CHANGE_HRE_RELIGION                                            | 100    | 改变神圣罗马帝国官方信仰战争分数花费（宗教霸权享受50%战争分数花费修正，故实际仅需要50%战争分数）                                                    |
| PEACE_COST_HUMILIATE_RIVAL                                                | 40     | 羞辱宿敌战争分数花费                                                                                                                                |
| PEACE_COST_FORCE_MIGRATION                                                | 50     | 强制迁徙战争分数花费                                                                                                                                |
| PEACE_COST_FORCE_OUT_COLONIZERS                                           | 20.0   | 放弃殖民地战争分数花费                                                                                                                              |
| PEACE_COST_ENFORCE_REBEL_DEMANDS                                          | 50     | 同意叛军要求战争分数花费                                                                                                                            |
| PEACE_COST_END_RIVALRY                                                    | 30     | 终止宿敌战争分数花费                                                                                                                                |
| PEACE_COST_TAKE_MANDATE                                                   | 50     | 夺取天命战争分数花费                                                                                                                                |
| PEACE_COST_SPREAD_REVOLUTION                                              | 60     | 传播革命战争分数花费                                                                                                                                |
| MAX_PEACE_COST_TRIBUTARY_STATE                                            | 80     | 强制建立朝贡关系最大战争分数花费                                                                                                                    |
| MAX_PEACE_COST_CANCEL_SUBJECT                                             | 100    | 强制解除附庸关系最大战争分数花费                                                                                                                    |
| MAX_WARSCORE                                                              | 100    | 最大战争分数                                                                                                                                        |
| MAX_PEACE_TREATY_PRESTIGE                                                 | 100    | 合约最大可获得威望                                                                                                                                  |
| MAX_PEACE_TREATY_AE                                                       | 50     | 合约最大侵略扩张影响                                                                                                                                |
| PEACE_COST_DEMAND_NON_OCCUPIED_PROVINCE_MULT                              | 1.1    | 索取未占领省份的战争分数花费                                                                                                                        |
| PEACE_COST_DEMAND_CAPITAL_MULT                                            | 1.2    | 索取首都的战争分数花费                                                                                                                              |
| PO_TRADE_POWER_AMOUNT                                                     | 0.5    | 合约中转移贸易竞争力的数额                                                                                                                          |
| PO_HUMILIATE_PRESTIGE_HIT                                                 | 20     | 羞辱条目的威望损失                                                                                                                                  |
| PO_HUMILIATE_POWER_GAIN                                                   | 100    | 羞辱条目所能获得的君主点数（宣战借口需为“羞辱宿敌”）                                                                                                |
| PO_SPREAD_REVOLUTION_POWER_GAIN                                           | 1.0    | 传播革命所获得的点数（乘于发展度）                                                                                                                  |
| PO_SPREAD_REVOLUTION_MAX_POWER_GAIN                                       | 999    | 传播革命所能获得的最大点数                                                                                                                          |
| MAX_ANNEX_SIZE                                                            | 10000  | 至多能够吞并此数值省份的国家                                                                                                                        |
| ALLY_PEACE_COST_MULT                                                      | 2      | 对非联合作战方战争分数花费                                                                                                                          |
| ALLY_AE_MULT                                                              | 1.5    | 对非联合作战方的要求，所产生的侵略扩张乘数                                                                                                          |
| ANNEX_DIP_COST_PER_DEVELOPMENT                                            | 8      | 外交吞并每点发展度所需外交点数                                                                                                                      |
| DEFENDER_AE_MULT                                                          | 0.75   | 防守方侵略扩张乘数（除非宣战借口是互相的，例如无论进攻者是谁，输出革命与镇压革命是同一场战争双方各自的借口，胜利者总被认为是防守方）                |
| PO_REVOKE_REFORM_PRESTIGE                                                 | 10     | 移除帝国改革获得威望                                                                                                                                |
| PO_REVOKE_REFORM_PEACE_COST                                               | 100    | 移除帝国改革所需分数                                                                                                                                |
| DIP_PORT_FEES                                                             | 0.1    | 外交行动舰船停泊权花费（此数值乘以拥有港口的省份数，若符合要求的省份增加，收费同样增加）                                                            |
| IMPROVE_RELATION_MAX                                                      | 25     | 提升关系最大值                                                                                                                                      |
| IMPROVE_RELATION_SPEED                                                    | 1      | 提升关系速度                                                                                                                                        |
| STABHIT_FOR_BREAKING_ALLIANCE_IN_WAR                                      | 2      | 拒绝战争呼唤外交威望损失                                                                                                                            |
| WARGOAL_PEACE_FRACTION                                                    | 0.66   | 战争目标所需战争分数                                                                                                                                |
| CLAIM_PEACE_COST_DIP_FRACTION                                             | -0.1   | 索取拥有宣称的省份所需外交点数减成                                                                                                                  |
| CORE_PEACE_COST_DIP_FRACTION                                              | -0.2   | 索取核心省份所需外交点数减成                                                                                                                        |
| CANCEL_TRADE_TRANSFER_PRESTIGE_HIT                                        | -5     | 取消转移贸易竞争力条约损失威望                                                                                                                      |
| DIPLOMAT_SPEED                                                            | 20.0   | 外交官移动速度                                                                                                                                      |
| DIPLOMAT_COOLDOWN_TIME                                                    | 1      | 再次执行外交命令冷却时间                                                                                                                            |
| MIN_RELATIONS_TO_ALLY                                                     | -25    | （双方关系）低于此数值便不可能结盟                                                                                                                  |
| MIN_RELATIONS_TO_SUPPORT_INDEPENDENCE                                     | -25    | （双方关系）低于此数值便不可能支持独立                                                                                                              |
| ELECTIVE_VICTORY_PRESTIGE                                                 | 25     | 在选王制中胜选所获得的威望                                                                                                                          |
| ELECTIVE_VICTORY_LEGITIMACY                                               | 10     | 在选王制中胜选所获得的正统性                                                                                                                        |
| INTEGRATE_UNION_MIN_YEARS                                                 | 50     | 建立关系低于此年份的被联统国无法被合并                                                                                                              |
| INTEGRATE_VASSAL_MIN_YEARS                                                | 10     | 建立关系低于此年份的附庸国无法被吞并                                                                                                                |
| MONTHS_BEFORE_TOTAL_OCCUPATION                                            | 60     | 在战争开始此数值月份前，仅控制战争领袖无法获得100%战争分数                                                                                          |
| WAR_REPARATIONS_FACTOR                                                    | 0.1    | 战争赔偿占战败国收入                                                                                                                                |
| WAR_REPARATIONS_YEARS                                                     | 10     | 战争赔偿年限                                                                                                                                        |
| MINIMUM_TRADE_POWER_TO_PREVENT_PRIVATEER                                  | 0.2    | 战胜国至少需要在某一节点（本埠或派遣商人的节点）拥有此份额的贸易竞争力，才能禁止战败国的私掠行为                                                    |
| MINIMUM_TRADE_POWER_SHARE_FOR_PRIVATEER_OPINION_HIT                       | 0.1    | 至少需要在某一节点（本埠或派遣商人的节点）拥有此份额的贸易竞争力，才允许使用贸易保护战争借口                                                        |
| MAX_NUMBER_OF_CB_ITEMS                                                    | 15     | 战争借口页面最多能显示的盾徽的数目                                                                                                                  |
| CB_ITEM_COUNTRY_SCORE_LIMIT                                               | 20     | 任何低于分数限制的国家都与外交视图中的CB列表有关                                                                                                    |
| SPY_DISCOVERY_COOLDOWN_MONTHS                                             | 12     | 在间谍网被发现后，间谍网规模至少要等待此数值的时间才能重新恢复增长。                                                                                |
| DIPLOANNEX_LIBERTY_THRESHOLD                                              | 50     | 当附庸国独立倾向大于等于此数值时，便无法获得外交吞并进度                                                                                            |
| CELESTIAL_EMPIRE_DEFAULT_INFLUENCE                                        | 60     | 夺取天命后，天命初始值                                                                                                                              |
| CELESTIAL_EMPIRE_MODIFIER_THRESHOLD                                       | 50     | 高于此数值的天命值会带来正面修正，反之为负面修正                                                                                                    |
| CELESTIAL_EMPIRE_MANDATE_PER_STABILITY                                    | 0.24   | 每点正稳定每年带来的天命增长                                                                                                                        |
| CELESTIAL_EMPIRE_MANDATE_PER_STATE_WITH_PROSPERITY                        | 0.03   | 每个繁荣的直属州每年带来的天命增长                                                                                                                  |
| CELESTIAL_EMPIRE_MANDATE_PER_HUNDRED_DEVASTATION                          | -10.0  | 此数值与存在荒废省份的发展度的乘积为年度天命减少（随着荒废度等比例变化）                                                                            |
| CELESTIAL_EMPIRE_MANDATE_PER_HUNDRED_TRIBUTARY_DEV                        | 0.15   | 朝贡国每有100点发展度便可提供的年度天命增长                                                                                                         |
| CELESTIAL_EMPIRE_MANDATE_PER_HUNDRED_NONTRIBUTARY_DEV                     | 0.0    | 接壤的非朝贡国每100点发展度带来的年度天命减少                                                                                                       |
| CELESTIAL_EMPIRE_MANDATE_FROM_DEFENDING                                   | 5      | 每次成功捍卫天子头衔所获得的天命值                                                                                                                  |
| CELESTIAL_EMPIRE_MANDATE_PER_5_LOANS                                      | -0.36  | 每5笔贷款带来的年度天命降低                                                                                                                         |
| REMOVE_ELECTORATE_INFLUENCE_COST                                          | 10     | 移除选帝侯身份花费帝国威望                                                                                                                          |
| GRANT_ELECTORATE_INFLUENCE                                                | 0      | 授予选帝侯身份获得的帝国威望                                                                                                                        |
| GRANT_FREECITY_INFLUENCE                                                  | 0      | 授予自由市身份获得的帝国威望                                                                                                                        |
| REMOVE_FREECITY_INFLUENCE_COST                                            | 5      | 授予自由市身份花费的帝国威望                                                                                                                        |
| IMPERIAL_CITY_IA                                                          | 0.005  | 自由市每月提供帝国威望增长                                                                                                                          |
| AGITATE_FOR_LIBERTY_DESIRE                                                | 25     | 处于煽动叛乱时间内，独立倾向增长值                                                                                                                  |
| AGITATE_FOR_LIBERTY_RATE                                                  | 1      | 煽动叛乱期间，独立倾向月度增长值。（持续增长至最大值，或消退后逐渐降低至0）                                                                         |
| STUDY_TECHNLOGY_CATEGORY_CAP                                              | 1      | 通过窃取科技，每种科技可以获得的君主点数收益（1.16版本后取消）                                                                                      |
| STUDY_TECHNOLOGY_MIN_TECHS_AHEAD                                          | 2      | 窃取科技所需的科技差                                                                                                                                |
| THREATEN_WAR_PRESTIGE                                                     | 10     | 顺从威胁开战损失威望                                                                                                                                |
| THREATEN_WAR_TRUCE_YEARS                                                  | 5      | 威胁开战导致的停战期                                                                                                                                |
| THREATEN_WAR_ALLIANCE_OFFSET                                              | 1.5    | 如果（对方对己方）同盟的力量对比高于这一阈值，则会出现“军事同盟间的相对力量”的倾向影响                                                              |
| THREATEN_WAR_ALLIANCE_GRADIENT                                            | 20     | 威胁开战外交行动中，盟友相对力量对比带来的倾向影响，最大为+100                                                                                      |
| THREATEN_WAR_COALITION_GRADIENT                                           | -50    | 计算包围网的力量对比带来的倾向影响，最大为-1000                                                                                                     |
| BREAK_ALLIANCE_STRENGTH_OFFSET                                            | 2      | 如果如果（对方对己方）同盟的力量对比高于这一阈值，便可能倾向于断绝盟约                                                                              |
| BREAK_ALLIANCE_STRENGTH_GRADIENT                                          | 25     | 战争号召时，盟友相对力量对比带来的倾向影响，最大为+100'                                                                                             |
| BREAK_ALLIANCE_DISTANCE_FACTOR                                            | -0.15  | 距离对AI响应号召的倾向影响                                                                                                                          |
| BREAK_ALLIANCE_WAREXHAUST_FACTOR                                          | 2      | 厌战度对AI响应号召的倾向影响                                                                                                                        |
| BREAK_ALLIANCE_DEBT_FACTOR                                                | 0.5    | 债务与收入比值对AI响应号召的倾向影响                                                                                                                |
| BREAK_ALLIANCE_PENALTY_MONTHS                                             | 120    | 打破盟约带来的观念修正持续时间                                                                                                                      |
| BREAK_ALLIANCE_PENALTY_SCALER                                             | -0.85  | 打破盟约带来的观念修正乘数，最大值为-100                                                                                                            |
| BREAK_ALLIANCE_DIPLOREP_FACTOR                                            | 3      | 战争号召时，外交声誉带来的倾向影响                                                                                                                  |
| AE_COALITION_THRESHOLD                                                    | -50    | 低于该侵略扩张才会组建包围网                                                                                                                        |
| ABANDON_UNION_PRESTIGE                                                    | -25    | 放弃联合统治受到的威望惩罚                                                                                                                          |
| PAY_SUBJECT_DEBT_LIBERTY_DESIRE_REDUCTION                                 | 5      | 每代为偿付一笔贷款所降低的独立倾向                                                                                                                  |
| NUM_OF_GREAT_POWERS                                                       | 8      | 列强数目                                                                                                                                            |
| LEAVING_GREAT_POWER_YEARS                                                 | 5      | 最末位列强可以保留的上榜时间                                                                                                                        |
| GREAT_POWER_SUBJECT_CONTRIBUTION                                          | 0.5    | 附庸国发展度对列强分数贡献                                                                                                                          |
| FORCE_BREAK_ALLIANCE_TRUCE_YEARS                                          | 10     | 断绝盟约停战时间                                                                                                                                    |
| FORCE_END_RIVALRY_YEARS                                                   | 15     | 因战争条约解除宿敌后，在此数值年限前无法再次将目标选为宿敌                                                                                          |
| DECLINE_FAVOR_ACTION_STAB_HIT                                             | 0      | 拒绝人情行动而失去稳定值                                                                                                                            |
| TRIBUTE_BASE_CASH                                                         | 0.125  | 此倍数的年收入将成为朝贡贡金                                                                                                                        |
| TRIBUTE_BASE_ADM                                                          | 0.03   | 此倍数的总发展度将成为朝贡的行政点数                                                                                                                |
| TRIBUTE_BASE_DIP                                                          | 0.03   | 此倍数的总发展度将成为朝贡的外交点数                                                                                                                |
| TRIBUTE_BASE_MIL                                                          | 0.03   | 此倍数的总发展度将成为朝贡的军事点数                                                                                                                |
| TRIBUTE_MAX_MONARCH_POWER                                                 | 12.0   | 朝贡最大可贡献点数                                                                                                                                  |
| TRIBUTE_BASE_MANPOWER                                                     | 0.25   | 此倍数的总人力将成为朝贡的人力                                                                                                                      |
| TRIBUTE_SENT_TRUST                                                        | 1      | 朝贡国如约朝贡增长的信任度                                                                                                                          |
| TRIBUTE_REFUSED_TRUST                                                     | -15    | 朝贡国拒绝朝贡增长的信任度                                                                                                                          |
| DECLINED_TRIBUTARY_TRUST                                                  | -15    | 朝贡国未能建立朝贡关系或断绝朝贡关系损失的信任度                                                                                                    |
| TRIBUTARY_OVERLORD_LOW_TRUST                                              | 30     | 低于此信任度将可能导致断绝朝贡关系                                                                                                                  |
| REFUSED_CALL_FROM_TRIBUTARY_MANDATE_LOSS                                  | 10     | 拒绝朝贡国战争召唤损失的天命                                                                                                                        |
| AUTODIPLO_TARGET_NEIGHBOURS_HOPELESS_LIMIT                                | -150   | （对邻国）AI在好感度低于此值后便不会再改善关系                                                                                                      |
| AUTODIPLO_TARGET_NEIGHBOURS_IMPROVECAP                                    | 80     | （对邻国） AI会优先选取此数值以下好感度的国家改善关系                                                                                               |
| AUTODIPLO_TARGET_SUBJECTS_HOPELESS_LIMIT                                  | -200   | （对属国）AI在好感度低于此值后便不会再改善关系                                                                                                      |
| AUTODIPLO_TARGET_SUBJECTS_IMPROVECAP                                      | 160    | （对属国） AI会优先选取此数值以下好感度的国家改善关系                                                                                               |
| AUTODIPLO_TARGET_COALITION_HOPELESS_LIMIT                                 | -150   | （对包围网国家）AI在好感度低于此值后便不会再改善关系                                                                                                |
| AUTODIPLO_TARGET_COALITION_IMPROVECAP                                     | 10     | （对包围网国家） AI会优先选取此数值以下好感度的国家改善关系                                                                                         |
| AUTODIPLO_TARGET_COALITION_START_TO_IGNORE_AE_ABOVE_THIS                  | -25    | （对包围网国家）AI会无视超过该AE的国家                                                                                                              |
| AUTODIPLO_TARGET_COALITION_START_TO_IGNORE_AE_ABOVE_THIS_SCORE_MULTIPLIER | 10     | （对包围网国家）AI会无视AE超过乘于该数值的国家                                                                                                      |
| AUTODIPLO_TARGET_COALITION_HIGHEST_PRIORITY_AE                            | 50     | （对包围网国家）AI会最优先选取此数值AE的国家改善关系                                                                                                |
| AUTODIPLO_TARGET_COALITION_IMPROVE_ABOVE_0_SCORE_BONUS                    | 20     | （对包围网国家）AI在提高好感度直到超过0时得到的AI得分奖励                                                                                           |
| AUTODIPLO_TARGET_COALITION_ALREADY_IN_COALITION_SCORE_BONUS               | 50     | 加入了包围网的AI得到的AI得分奖励                                                                                                                    |
| AUTODIPLO_TARGET_ALLIES_HOPELESS_LIMIT                                    | -75    | （对同盟国家）AI在好感度低于此值后便不会再改善关系                                                                                                  |
| AUTODIPLO_TARGET_ALLIES_IMPROVECAP                                        | 80     | （对同盟国家） AI会优先选取此数值以下好感度的国家改善关系                                                                                           |
| AUTODIPLO_TARGET_THREATS_HOPELESS_LIMIT                                   | -100   | （对受到威胁的国家）AI在好感度低于此值后便不会再改善关系                                                                                            |
| AUTODIPLO_TARGET_THREATS_IMPROVECAP                                       | 80     | （对受到威胁的国家） AI会优先选取此数值以下好感度的国家改善关系                                                                                     |
| KNOWLEDGE_SHARING_INSTITUTION_GROWTH_MONTHLY                              | 1.0    | 思潮分享月度增长                                                                                                                                    |
| KNOWLEDGE_SHARING_DURATION_YEARS                                          | 10     | 思潮分享年限                                                                                                                                        |
| KNOWLEDGE_SHARING_COST_PERCENT_MONTHLY                                    | 10.0   | 思潮分享需支付的月度收入百分比                                                                                                                      |
| SCORNFUL_INSULT_PRESTIGE_COST                                             | 5.0    | 轻蔑地侮辱花费威望                                                                                                                                  |
| CHANGE_COLONIAL_TYPE_COST                                                 | 1000   | 改变殖民地类型的花费                                                                                                                                |
| CHARTER_COMPANY_BASE_COST                                                 | 1000   | 特许贸易公司基础花费                                                                                                                                |
| CHARTER_COMPANY_MINIMUM_COST                                              | 100    | 特许贸易公司最低花费                                                                                                                                |
| GOOD_RELATIONS                                                            | 100    | 关系良好阈值                                                                                                                                        |
| GREAT_RELATIONS                                                           | 150    | 关系亲密阈值                                                                                                                                        |
| FORCE_JOIN_HRE_AUTHORITY_PER_DEVELOPMENT                                  | 0.1    | 强迫加入神圣罗马帝国每发展度可获得帝国威望                                                                                                          |
| FORCE_JOIN_HRE_YEARS_BOUND_BY_TREATY                                      | 50     | 强迫加入神圣罗马帝国战争借口有效时间                                                                                                                |
| VOLUNTARY_JOIN_HRE_AUTHORITY_PER_DEVELOPMENT                              | 0.1    | 自愿加入神罗每点发展度带来的帝国威望                                                                                                                |
| LEAVE_HRE_AUTHORITY_PER_DEVELOPMENT                                       | -0.2   | 脱离神罗每点发展度所损失的帝国威望                                                                                                                  |
| IMPERIAL_REALM_WAR_IA_COST                                                | 25.0   | 解放帝国领土获得的帝国威望                                                                                                                          |
| IMPERIAL_REALM_WAR_MONTHS                                                 | 60     | 解放帝国领土战争借口持续时间                                                                                                                        |
| SAME_TRIBUTARY_OVERLORD_SUPPORT_INDEPENDENCE_CHANCE                       | -50    |                                                                                                                                                     |
| UNCONDITIONAL_SURRENDER_MIN_MONTHS                                        | 12     | 无条件投降最小月数                                                                                                                                  |
