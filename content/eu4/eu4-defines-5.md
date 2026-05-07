---
title: 欧陆风云4Defines第五部分
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
  - [NAIEconomy](#naieconomy)
  - [NGraphics](#ngraphics)
  - [NGui](#ngui)
  - [NEngine](#nengine)
  - [NMacroBuildColors](#nmacrobuildcolors)
  - [NFrontend](#nfrontend)
  - [NReligion](#nreligion)
  - [NNationDesigner](#nnationdesigner)
  - [NGovernment](#ngovernment)
- [引用](#引用)
- [CC协议](#cc协议)

[[eu4-defines|欧陆风云4定义第一部分]]

[[eu4-defines-2|欧陆风云4定义第二部分]]

[[eu4-defines-3|欧陆风云4定义第三部分]]

[[eu4-defines-4|欧陆风云4定义第四部分]]

## 定义

### NAIEconomy

- 此内容可能已落后版本，最后更新于1.29

| Define                                   | Default | Notes                                                              |
| ---------------------------------------- | ------- | ------------------------------------------------------------------ |
| BUDGETING_ADJUSTMENT_STEP                | 0.5     | 由于盈余/亏损而进行调整时，增加/减少预算员额支出的金额（百分比）。 |
| REBEL_THREAT_MILITARIZE_THRESHOLD        | 0.8     | 叛军的威胁超过多少，AI就应该军事化（即把开支集中在军队上）。       |
| MILITARY_FOCUS_DEFAULT                   | 1.0     |                                                                    |
| MILITARY_FOCUS_LOWER_BOUND               | 0.0     |                                                                    |
| MILITARY_FOCUS_UPPER_BOUND               | 1.5     |                                                                    |
| ARMY_FRACTION_MILITARIZE                 | 1.5     |                                                                    |
| ARMY_FRACTION_PEACEFUL                   | 0.9     |                                                                    |
| ARMY_FRACTION_MILITARIST                 | 1.25    |                                                                    |
| NAVY_FRACTION_PEACEFUL                   | 1.25    |                                                                    |
| NAVY_FRACTION_CAPITALIST                 | 1.25    |                                                                    |
| FORT_FRACTION_MILITARIZE                 | 1.33    |                                                                    |
| FORT_FRACTION_MILITARIST                 | 1.25    |                                                                    |
| FORT_FRACTION_CAPITALIST                 | 0.8     |                                                                    |
| MISSIONARY_FRACTION                      | 0.15    |                                                                    |
| STATE_MAINTENANCE_FRACTION               | 0.1     |                                                                    |
| BASE_SAVINGS_PRIORITY                    | 0.5     |                                                                    |
| BASE_SAVINGS_PRIORITY_WARTIME            | 0       |                                                                    |
| LOAN_REPAYMENT_SAVINGS_PRIORITY          | 1.0     |                                                                    |
| LOAN_REPAYMENT_SAVINGS_PRIORITY_WARTIME  | 0.5     |                                                                    |
| SUBSIDY_PRIORITY_CONSIDERATION_THRESHOLD | 50      |                                                                    |
| SUBSIDY_DESIRE_TO_PRIORITY_RATIO         | 0.05    |                                                                    |
| SUBSIDY_MAX_BUDGET_FRACTION              | 0.05    |                                                                    |

### NGraphics

- 此内容可能已落后版本，最后更新于1.29

| Define                                 | Default | Notes                                                                                           |
| -------------------------------------- | ------- | ----------------------------------------------------------------------------------------------- |
| COPTIC_FADE_R                          | 0.55    |                                                                                                 |
| COPTIC_FADE_G                          | 0.4     |                                                                                                 |
| COPTIC_FADE_B                          | 0.4     |                                                                                                 |
| SHIELD_GLOW_RANGE                      | 0.28    | Set to 0 to disable Great Power shield glow set to 1 for epileptic seizure.                     |
| MIN_PROVINCES_FOR_NAME_ON_MAP          | 2       |                                                                                                 |
| MIN_PROVINCES_FOR_REGION               | 4       |                                                                                                 |
| RIVER_MEMORY_BUFFER                    | 250000  | Increase this if you want to add more rivers to the game.                                       |
| PORT_SHIP_OFFSET                       | 2.0     |                                                                                                 |
| SHIP_IN_PORT_SCALE                     | 0.25    |                                                                                                 |
| CITY_SPRAWL_SHRINK_DISTANCE            | 150.0   | Start shrinking at this distance.                                                               |
| CITY_SPRAWL_DRAW_DISTANCE              | 200.0   | Remove at this distance.                                                                        |
| CITY_SPRAWL_AMOUNT                     | 3.0     | Size of cities higher gives larger cities.                                                      |
| CITY_SPRAWL_NUDGE_TAX_VALUE            | 50      | Debug flag.                                                                                     |
| CITY_SPRAWL_NUDGE_FORT_LEVEL           | 4       | 0: no fort; 1-4: fort_15th-fort_18th.                                                           |
| PROVINCE_NAME_DRAW_DISTANCE            | 500.0   | Remove province names beyond this distance.                                                     |
| DIRECTION_POINTER_DRAW_DISTANCE        | 2700.0  | Direction pointer arrow will not be drawn beyond this distance.                                 |
| DIRECTION_POINTER_INTERPOLATION_SPEED  | 0.275   | How fast the arrow is interpolating.                                                            |
| DIRECTION_POINTER_SCREEN_AREA_MAX      | 0.935   | The moment when the arrow snaps to the province (value is in DOT PRODUCT) 0.9-0.99              |
| DIRECTION_POINTER_SCREEN_AREA_MIN      | 0.910   | The moment when the arrow starts getting closer to the target before it snaps.                  |
| DIRECTION_POINTER_SIZE_MIN             | 0.9     | Size of the arrow interpolated depends on camera distance.                                      |
| DIRECTION_POINTER_SIZE_MAX             | 10.0    |                                                                                                 |
| DIRECTION_POINTER_GROUND_OFFSET        | 5.0     | Offset Y above the ground for arrow to point at.                                                |
| LIGHT_DIRECTION_X                      | -1.0    |                                                                                                 |
| LIGHT_DIRECTION_Y                      | -1.0    |                                                                                                 |
| LIGHT_DIRECTION_Z                      | 0.5     |                                                                                                 |
| LIGHT_SHADOW_DIRECTION_X               | -5.0    |                                                                                                 |
| LIGHT_SHADOW_DIRECTION_Y               | -8.0    |                                                                                                 |
| LIGHT_SHADOW_DIRECTION_Z               | 5.0     |                                                                                                 |
| MILD_WINTER_VALUE                      | 90      |                                                                                                 |
| NORMAL_WINTER_VALUE                    | 145     |                                                                                                 |
| SEVERE_WINTER_VALUE                    | 255     |                                                                                                 |
| BORDER_WIDTH                           | 1.5     |                                                                                                 |
| TRADE_GOODS_ROTATE_SPEED               | 0.2     | Higher values gives a faster speed.                                                             |
| TRADE_GOODS_SPEED                      | 0.02    | Higher values gives a faster speed.                                                             |
| LAND_UNIT_MOVEMENT_SPEED               | 12      |                                                                                                 |
| NAVAL_UNIT_MOVEMENT_SPEED              | 12      |                                                                                                 |
| ARROW_MOVEMENT_SPEED                   | 2       |                                                                                                 |
| DRAW_DETAILED_CUTOFF                   | 400     |                                                                                                 |
| DRAW_BORDERS_CUTOFF                    | 1600    | Do not draw borders if the camera is above this height (currently unused in standard builds).   |
| DRAW_MAP_NAMES_CUTOFF                  | 1600    | Do not draw map names if the camera is above this height (currently unused in standard builds). |
| DRAW_TRADEROUTES_CUTOFF                | 400     |                                                                                                 |
| DRAW_TRADEROUTES_CUTOFF_TRADE_MAPMODE  | 3000    |                                                                                                 |
| UNIT_TURN_SPEED                        | 3       |                                                                                                 |
| WATER_MAP_MODE_COLOR_R                 | 0.27    |                                                                                                 |
| WATER_MAP_MODE_COLOR_G                 | 0.42    |                                                                                                 |
| WATER_MAP_MODE_COLOR_B                 | 0.64    |                                                                                                 |
| CAPITAL_INDICATOR_HEIGHT               | 5.8     |                                                                                                 |
| CAPITAL_INDICATOR_HEIGHT_SCALE         | 140.0   |                                                                                                 |
| BORDER_COLOR_SELECTION_R               | 1.0     |                                                                                                 |
| BORDER_COLOR_SELECTION_G               | 0.8     |                                                                                                 |
| BORDER_COLOR_SELECTION_B               | 0.0     |                                                                                                 |
| BORDER_COLOR_SELECTION_A               | 1.0     |                                                                                                 |
| BORDER_COLOR_CB_SELECT_R               | 0.1     |                                                                                                 |
| BORDER_COLOR_CB_SELECT_G               | 0.8     |                                                                                                 |
| BORDER_COLOR_CB_SELECT_B               | 0.8     |                                                                                                 |
| BORDER_COLOR_CB_SELECT_A               | 1.0     |                                                                                                 |
| BORDER_COLOR_WAR_TARGET_R              | 1.0     |                                                                                                 |
| BORDER_COLOR_WAR_TARGET_G              | 0.4     |                                                                                                 |
| BORDER_COLOR_WAR_TARGET_B              | 0.0     |                                                                                                 |
| BORDER_COLOR_WAR_TARGET_A              | 1.0     |                                                                                                 |
| BORDER_COLOR_WAR_R                     | 0.8     |                                                                                                 |
| BORDER_COLOR_WAR_G                     | 0.0     |                                                                                                 |
| BORDER_COLOR_WAR_B                     | 0.0     |                                                                                                 |
| BORDER_COLOR_WAR_A                     | 0.8     |                                                                                                 |
| BORDER_COLOR_CUSTOM_HIGHLIGHT_R        | 0.0     |                                                                                                 |
| BORDER_COLOR_CUSTOM_HIGHLIGHT_G        | 0.61    |                                                                                                 |
| BORDER_COLOR_CUSTOM_HIGHLIGHT_B        | 0.75    |                                                                                                 |
| BORDER_COLOR_CUSTOM_HIGHLIGHT_A        | 1.0     |                                                                                                 |
| BORDER_COLOR_TAP_SUCCESS_R             | 0.0     |                                                                                                 |
| BORDER_COLOR_TAP_SUCCESS_G             | 0.61    |                                                                                                 |
| BORDER_COLOR_TAP_SUCCESS_B             | 0.75    |                                                                                                 |
| BORDER_COLOR_TAP_SUCCESS_A             | 1.0     |                                                                                                 |
| BORDER_COLOR_TAP_FAIL_R                | 0.8     |                                                                                                 |
| BORDER_COLOR_TAP_FAIL_G                | 0.0     |                                                                                                 |
| BORDER_COLOR_TAP_FAIL_B                | 0.0     |                                                                                                 |
| BORDER_COLOR_TAP_FAIL_A                | 0.8     |                                                                                                 |
| BORDER_COLOR_TAP_NEUTRAL_R             | 0.8     |                                                                                                 |
| BORDER_COLOR_TAP_NEUTRAL_G             | 0.8     |                                                                                                 |
| BORDER_COLOR_TAP_NEUTRAL_B             | 0.0     |                                                                                                 |
| BORDER_COLOR_TAP_NEUTRAL_A             | 0.8     |                                                                                                 |
| BORDER_COLOR_RIVER_R                   | 0.0     |                                                                                                 |
| BORDER_COLOR_RIVER_G                   | 0.1     |                                                                                                 |
| BORDER_COLOR_RIVER_B                   | 0.8     |                                                                                                 |
| BORDER_COLOR_RIVER_A                   | 1.0     |                                                                                                 |
| BORDER_COLOR_CUSTOM_TEMP_HIGHLIGHT_R   | 0.61    | For find province.                                                                              |
| BORDER_COLOR_CUSTOM_TEMP_HIGHLIGHT_G   | 0.0     |                                                                                                 |
| BORDER_COLOR_CUSTOM_TEMP_HIGHLIGHT_B   | 0.75    |                                                                                                 |
| BORDER_COLOR_CUSTOM_TEMP_HIGHLIGHT_A   | 1.0     |                                                                                                 |
| DRAW_REFRACTIONS_CUTOFF                | 250     |                                                                                                 |
| DRAW_SHADOWS_CUTOFF                    | 500     |                                                                                                 |
| AGGRESSIVE_EXPANSION_MAX_R             | 1.0     |                                                                                                 |
| AGGRESSIVE_EXPANSION_MAX_G             | 0.25    |                                                                                                 |
| AGGRESSIVE_EXPANSION_MAX_B             | 0.0     |                                                                                                 |
| AGGRESSIVE_EXPANSION_MAX_A             | 1.0     |                                                                                                 |
| AG_FOR_MAX_COLOR_IN_COALITION_MAPMODE  | 150     |                                                                                                 |
| TRUCE_LENGTH_MIN_RE                    | 1.0     |                                                                                                 |
| TRUCE_LENGTH_MIN_GE                    | 0.75    |                                                                                                 |
| TRUCE_LENGTH_MIN_BE                    | 0.0     |                                                                                                 |
| TRUCE_LENGTH_MAX_RE                    | 1.0     |                                                                                                 |
| TRUCE_LENGTH_MAX_GE                    | 0.0     |                                                                                                 |
| TRUCE_LENGTH_MAX_BE                    | 0.0     |                                                                                                 |
| TRUCE_LENGTH_AE                        | 1.0     |                                                                                                 |
| MAX_NUM_YEAR_OF_TRUCE_FOR_MAPMODE      | 15      |                                                                                                 |
| COLONIAL_COLOR_INTERPOLATION_FACTOR    | 0.35    |                                                                                                 |
| MINIMAP_LAND_COLOR_R                   | 2       |                                                                                                 |
| MINIMAP_LAND_COLOR_G                   | 15      |                                                                                                 |
| MINIMAP_LAND_COLOR_B                   | 0       |                                                                                                 |
| MINIMAP_LAND_COLOR_BASE_LERP           | 0.4     |                                                                                                 |
| MINIMAP_WATER_COLOR_R                  | 38      |                                                                                                 |
| MINIMAP_WATER_COLOR_G                  | 124     |                                                                                                 |
| MINIMAP_WATER_COLOR_B                  | 200     |                                                                                                 |
| MINIMAP_PLAYER_COLOR_R                 | 90      |                                                                                                 |
| MINIMAP_PLAYER_COLOR_G                 | 190     |                                                                                                 |
| MINIMAP_PLAYER_COLOR_B                 | 0       |                                                                                                 |
| MINIMAP_FRIENDLY_COLOR_R               | 0       |                                                                                                 |
| MINIMAP_FRIENDLY_COLOR_G               | 180     |                                                                                                 |
| MINIMAP_FRIENDLY_COLOR_B               | 255     |                                                                                                 |
| MINIMAP_ENEMY_COLOR_R                  | 255     |                                                                                                 |
| MINIMAP_ENEMY_COLOR_G                  | 0       |                                                                                                 |
| MINIMAP_ENEMY_COLOR_B                  | 0       |                                                                                                 |
| MINIMAP_UNIT_COLOR_BASE_LERP           | 0.4     |                                                                                                 |
| MINIMAP_WATER_COLOR_BASE_LERP          | 0.3     |                                                                                                 |
| MAX_TRADE_NODE_FLAGS_SHOWN             | 5       | -1 is unlimited.                                                                                |
| SHOW_TRADE_MODIFIERS_IN_TRADE_MAP_MODE | 1       | 1 = true; 0 = false.                                                                            |
| END_OF_COMBAT_GFX                      | 1       |                                                                                                 |
| MAX_MAPMODE_COLOR_UPDATE_DELAY_MS      | 200     |                                                                                                 |

### NGui

- 此内容可能已落后版本，最后更新于1.29

| Define                        | Default | Notes                                                                 |
| ----------------------------- | ------- | --------------------------------------------------------------------- |
| PROVINCE_FOCUS_ZOOM_HEIGHT    | 0.25    |                                                                       |
| MACRO_BUILD_FOCUS_ZOOM_HEIGHT | 0.149   |                                                                       |
| MACRO_BUILD_BIG_SMALL_HEIGHT  | 0.15    |                                                                       |
| DELAY_ACCEPT_EVENT            | 0.5     | Seconds. Disables event option buttons for the duration if > 0.       |
| DELAY_ACCEPT_CALL_TO_ARMS     | 0.5     | Seconds. Disables Call to Arms accept button for the duration if > 0. |

### NEngine

- 此内容可能已落后版本，最后更新于1.29

| Define                          | Default | Notes                                                            |
| ------------------------------- | ------- | ---------------------------------------------------------------- |
| EVENT_PROCESS_OFFSET            | 20      | Events are checked every X days (1 is ideal, but CPU heavy).     |
| TRIGGER_PROFILING_SAMPLING_RATE | 1000    | Sampling rate for trigger profiling (Every nth call is recorded) |

### NMacroBuildColors

- 此内容可能已落后版本，最后更新于1.29

| Define                     | Default | Notes |
| -------------------------- | ------- | ----- |
| NO_SLOTS_R                 | 255     |       |
| NO_SLOTS_G                 | 185     |       |
| NO_SLOTS_B                 | 0       |       |
| CANNOT_BUILD_R             | 200     |       |
| CANNOT_BUILD_G             | 25      |       |
| CANNOT_BUILD_B             | 15      |       |
| CAN_BUILD_R                | 65      |       |
| CAN_BUILD_G                | 165     |       |
| CAN_BUILD_B                | 65      |       |
| CAN_UPGRADE_R              | 20      |       |
| CAN_UPGRADE_G              | 100     |       |
| CAN_UPGRADE_B              | 120     |       |
| HAS_BUILDING_R             | 25      |       |
| HAS_BUILDING_G             | 25      |       |
| HAS_BUILDING_B             | 200     |       |
| OTHER_R                    | 128     |       |
| OTHER_G                    | 128     |       |
| OTHER_B                    | 128     |       |
| STRIPES_MUTALY_EXCLUSIVE_R | 195     |       |
| STRIPES_MUTALY_EXCLUSIVE_G | 175     |       |
| STRIPES_MUTALY_EXCLUSIVE_B | 10      |       |
| STRIPES_MUTALY_EXCLUSIVE_A | 255     |       |
| STRIPES_CANNOT_AFFORD_R    | 200     |       |
| STRIPES_CANNOT_AFFORD_G    | 0       |       |
| STRIPES_CANNOT_AFFORD_B    | 0       |       |
| STRIPES_CANNOT_AFFORD_A    | 255     |       |
| STRIPES_HAS_MILITARY_R     | 0       |       |
| STRIPES_HAS_MILITARY_G     | 190     |       |
| STRIPES_HAS_MILITARY_B     | 0       |       |
| STRIPES_HAS_MILITARY_A     | 255     |       |

### NFrontend

- 此内容可能已落后版本，最后更新于1.29

| Define                     | Default | Notes                                                                                                                         |
| -------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------- |
| CAMERA_LOOKAT_X            | 2958.0  | Rotation point in main menu.                                                                                                  |
| CAMERA_LOOKAT_Y            | 0.0     |                                                                                                                               |
| CAMERA_LOOKAT_Z            | 1519.0  |                                                                                                                               |
| CAMERA_LOOKAT_SETTINGS_X   | 2958.0  | Rotation point in settings.                                                                                                   |
| CAMERA_LOOKAT_SETTINGS_Y   | 0.0     | Y is height.                                                                                                                  |
| CAMERA_LOOKAT_SETTINGS_Z   | 1519.0  |                                                                                                                               |
| CAMERA_START_X             | 2958.0  | Initial position in main menu.                                                                                                |
| CAMERA_START_Y             | 800     | Y is height.                                                                                                                  |
| CAMERA_START_Z             | 1400.0  |                                                                                                                               |
| CAMERA_END_X               | 2958.0  | Move to position in main menu.                                                                                                |
| CAMERA_END_Y               | 900.0   |                                                                                                                               |
| CAMERA_END_Z               | 1400.0  |                                                                                                                               |
| CAMERA_MIN_DIST_FOR_ROTATE | 800.0   | Controls when rotation starts. When camera is close enough it starts.                                                         |
| CAMERA_MIN_HEIGHT          | 50.0    | 镜头最低高度（越低越接近于平行于地面，0贴地）                                                                                 |
| CAMERA_MAX_HEIGHT          | 3000.0  | 镜头最高高度（越大拉最远后地图显示面积越大）                                                                                  |
| TIME_FROZEN                | 1.0     | Time before initial animation starts (some delay here so it should NOT be 0 then the animation starts before you can see it). |
| TIME_UNTIL_ROTATE          | 1.5     | Time when rotation start (from beginning of time).                                                                            |
| CAMERA_SPEED_START         | 0.04    | Initial animation speed.                                                                                                      |
| CAMERA_SPEED_ROTATE        | 0.04    | Rotation speed.                                                                                                               |
| GUI_MOVE_SPEED             | 300     | How fast sliding GUI objects move (pixels/s).                                                                                 |
| FADE_IN_DONE_TIME          | 2.2     |                                                                                                                               |
| GUI_START_MOVE_TIME        | 1.4     |                                                                                                                               |
| CAMERA_START_MOVE_TIME     | 3.0     |                                                                                                                               |
| CAMERA_SPEED_IN_MENUS      | 0.1     |                                                                                                                               |
| FRONTEND_POS_X             | 2958.0  |                                                                                                                               |
| FRONTEND_POS_Y             | 900.0   |                                                                                                                               |
| FRONTEND_POS_Z             | 1500.0  |                                                                                                                               |
| FRONTEND_LOOK_X            | 2958.0  |                                                                                                                               |
| FRONTEND_LOOK_Y            | 0.0     |                                                                                                                               |
| FRONTEND_LOOK_Z            | 1519.0  |                                                                                                                               |
| SETTINGS_POS_X             | 2958.0  |                                                                                                                               |
| SETTINGS_POS_Y             | 551.0   |                                                                                                                               |
| SETTINGS_POS_Z             | 978.0   |                                                                                                                               |
| SETTINGS_LOOK_X            | 2998.0  |                                                                                                                               |
| SETTINGS_LOOK_Y            | 0.0     |                                                                                                                               |
| SETTINGS_LOOK_Z            | 1364.0  |                                                                                                                               |
| MP_OPTIONS_POS_X           | 2958.0  |                                                                                                                               |
| MP_OPTIONS_POS_Y           | 922.0   |                                                                                                                               |
| MP_OPTIONS_POS_Z           | 1048.0  |                                                                                                                               |
| MP_OPTIONS_LOOK_X          | 2958.0  |                                                                                                                               |
| MP_OPTIONS_LOOK_Y          | 0.0     |                                                                                                                               |
| MP_OPTIONS_LOOK_Z          | 1159.0  |                                                                                                                               |
| TUTORIAL_POS_X             | 2894.0  |                                                                                                                               |
| TUTORIAL_POS_Y             | 124.0   |                                                                                                                               |
| TUTORIAL_POS_Z             | 1319.0  |                                                                                                                               |
| TUTORIAL_LOOK_X            | 2881.0  |                                                                                                                               |
| TUTORIAL_LOOK_Y            | 21.0    |                                                                                                                               |
| TUTORIAL_LOOK_Z            | 1463.0  |                                                                                                                               |
| CONTENT_POS_X              | 2958.0  |                                                                                                                               |
| CONTENT_POS_Y              | 922.0   |                                                                                                                               |
| CONTENT_POS_Z              | 1308.0  |                                                                                                                               |
| CONTENT_LOOK_X             | 2958.0  |                                                                                                                               |
| CONTENT_LOOK_Y             | 0.0     |                                                                                                                               |
| CONTENT_LOOK_Z             | 1519.0  |                                                                                                                               |
| CREDITS_POS_X              | 3077.0  |                                                                                                                               |
| CREDITS_POS_Y              | 231.0   |                                                                                                                               |
| CREDITS_POS_Z              | 1508.0  |                                                                                                                               |
| CREDITS_LOOK_X             | 3080.0  |                                                                                                                               |
| CREDITS_LOOK_Y             | 19.0    |                                                                                                                               |
| CREDITS_LOOK_Z             | 1720.0  |                                                                                                                               |

### NReligion

- 此内容可能已落后版本，最后更新于1.34

| Define                                           | Default | Notes                                                                                                     |
| ------------------------------------------------ | ------- | --------------------------------------------------------------------------------------------------------- |
| COUNCIL_BASE_COST                                | 1000    |                                                                                                           |
| COUNCIL_CARDINAL_SPREAD                          | 500     |                                                                                                           |
| PIETY_CORRUPTION                                 | -2      |                                                                                                           |
| PIETY_MANPOWER                                   | 2.0     |                                                                                                           |
| PIETY_COST                                       | 0.50    |                                                                                                           |
| PIETY_ABS_THRESHOLD                              | 0.75    |                                                                                                           |
| PIETY_ACTION_COOLDOWN                            | 5       |                                                                                                           |
| APPOINT_CARDINAL_COOLDOWN                        | 4       |                                                                                                           |
| CONSECRATE_PATRIACH_AUTHORITY_BOOST              | 0.05    | 5% or so.                                                                                                 |
| CONSECRATE_PATRIARCH_THRESHOLD                   | 30      | In development.                                                                                           |
| ORTHODOX_ICON_DURATION_MONTHS                    | 240     | 圣像持续时间                                                                                              |
| ORTHODOX_ICON_AUTHORITY_COST                     | 0.1     | 圣像的消耗的牧首权威                                                                                      |
| MAYA_COLLAPSE_PROVINCES                          | 15      | 玛雅在改革时崩溃到这个大小。                                                                              |
| MAYA_COLLAPSE_PROVINCES_PER_REFORM               | 1       | 玛雅每次改革都会保留这么多的额外省份                                                                      |
| YEARLY_DOOM_INCREASE                             | 1       | 年度灾难增长乘以省的数量                                                                                  |
| DOOM_REDUCTION_FROM_REFORMS                      | 0.2     | 每通过一项改革，每月的厄运就会减少很多（作为整体的一个部分）                                              |
| DOOM_REDUCTION_FROM_OCCUPATION                   | 0.05    | 从占领省份中减少的厄运，乘于发展度                                                                        |
| DOOM_REDUCTION_FROM_BATTLE                       | 1       | 每一千人战斗死亡带来的厄运减少                                                                            |
| DOOM_REDUCTION_FROM_SACRIFICE                    | 1       | 祭祀带来的厄运减少                                                                                        |
| SACRIFICE_COOLDOWN                               | 3       | 该数值年后，你才能牺牲同一国家的统治者/继承人。                                                           |
| SACRIFICE_LIBERTY_DESIRE                         | 25      | 牺牲统治者后增加的独立倾向                                                                                |
| SACRIFICE_LIBERTY_DESIRE_HEIR                    | 20      | 牺牲统治者后增加的独立倾向                                                                                |
| AUTHORITY_FROM_DEVELOPMENT                       | 0.02    | 每点发展度带来的权威修正                                                                                  |
| AUTHORITY_FROM_AUTONOMY                          | 0.2     | 每提升一点自治度则减少该数值的权威（反之亦然）                                                            |
| RELIGIOUS_LEAGUE_COOLDOWN                        | 5       | 加入/离开宗教联盟的最小年限。                                                                             |
| RELIGIOUS_LEAGUE_WAR_BONUS_DURATION              | 100     | 宗教联盟奖励持续时间                                                                                      |
| MAX_CHRISTIAN_RELIGIOUS_CENTERS                  | 3       | '产生的宗教改革中心的数量不会超过这个数字。                                                               |
| MAX_RELIGIOUS_CENTER_SPREAD_DISTANCE             | 150.0   | 宗教改革传播到其他省份的距离不会超过这个数字。                                                            |
| CONVERSION_ZEAL_DURATION                         | 10950   | 宗教热情持续时间，该时间段无法改变省份宗教                                                                |
| KARMA_FOR_CONVERSION                             | 0.1     | 每改变一个省份的宗教会获得的业力                                                                          |
| MIN_CARDINALS                                    | 7       | 最小的枢机/游戏开局枢机数。                                                                               |
| MAX_CARDINALS                                    | 49      | 最大的枢机数。                                                                                            |
| MAX_CARDINALS_PER_COUNTRY                        | 7       | 单个国家最大枢机数                                                                                        |
| YEARLY_PAPAL_INFLUENCE_CATHOLIC                  | 0.5     | 天主教徒每年能获得的教廷影响力。                                                                          |
| YEARLY_PAPAL_INFLUENCE_PER_CARDINAL              | 0.5     | 每拥有一个枢机，每年额外获得的教廷影响力                                                                  |
| YEARLY_POPE_INVESTED_INFLUENCE_PER_CARDINAL      | 0.1     | The amount of investment Papal state gets towards becoming Papal controller for each cardinal that exists |
| MAX_PAPAL_INFLUENCE                              | 200.0   | 最大教廷影响力                                                                                            |
| REFORM_DESIRE_PER_YEAR                           | 0.002   | 每年增加的改革倾向                                                                                        |
| MINIMUM_DEVELOPMENT_ALLOWED                      | 10.0    | 拥有枢机的省份所需的最低发展度为10                                                                        |
| COUNTRY_DEVELOPMENT_DIVIDER                      | 200.0   | 每选择一个枢机，公式是将一个国家的发展度除于这个数字                                                      |
| INVEST_PAPAL_INFLUENCE                           | 10.0    | 每次获得的已投资影响力                                                                                    |
| NUMBER_OF_POSSIBLE_CARDINALS                     | 10      | 从基础税收最高的省份数量中随机抽取枢机的数量。                                                            |
| MAX_CHURCH_POWER                                 | 200     | 最大教会力量                                                                                              |
| ASPECT_REMOVE_COST                               | 0       | 去除一个宗教信条的花费                                                                                    |
| MAX_UNLOCKED_ASPECTS                             | 3       | 玩家一次可以解锁的最大宗教信条的数量                                                                      |
| CHURCH_POWER_RATE_SCALE                          | 0.1     | 获得教会力量的速度的比例值                                                                                |
| KARMA_FOR_OFFENSIVE_WAR                          | -10     | 开战损失的业力                                                                                            |
| KARMA_FOR_HONORING_CTA                           | 25      | 履行盟约获得的业力                                                                                        |
| KARMA_PER_RELEASED_PROVINCE                      | 1       | 归还省份获得的业力                                                                                        |
| KARMA_PER_TAKEN_PROVINCE                         | -1      | 夺取省份损失的业力                                                                                        |
| KARMA_TOO_HIGH                                   | 33      | 高业力阀值                                                                                                |
| KARMA_TOO_LOW                                    | -33     | 低业力阀值                                                                                                |
| KARMA_JUST_RIGHT_HIGH                            | 33      | 更高业力阀值                                                                                              |
| KARMA_JUST_RIGHT_LOW                             | -33     | 更低业力阀值                                                                                              |
| KARMA_RESTORE_ON_RULER_DEATH                     | 25      | 统治者死亡减少25业力不过不会低于0                                                                         |
| CHANGE_SECONDARY_PRESTIGE_HIT                    | -50     | 改变兼容宗教损失的威望                                                                                    |
| MIN_HARMONIZE_DEVELOPMENT                        | 20      | 和谐宗教需要的最低发展度                                                                                  |
| STARTING_HARMONY                                 | 50.0    | 儒教国家初始和谐度                                                                                        |
| YEARLY_HARMONY_INCREASE                          | 0.25    | 年度和谐度损失                                                                                            |
| HARMONY_LOSS_PER_DEV_CONVERTED                   | 1.0     | 每改变拥有一点发展度所损失的和谐度                                                                        |
| YEARLY_HARMONY_INCREASE_WHEN_HARMONIZING         | -3.25   | 融合宗教时每年损失的和谐度                                                                                |
| YEARLY_HARMONIZATION_PROGRESS                    | 0.03    | 每年和谐宗教进程                                                                                          |
| INITIAL_ISOLATIONISM                             | 1       | 对于一个新独立的国家来说，孤立主义的程度。                                                                |
| NOT_SAME_MUSLIM_SCHOOL_ALLIANCE_ACCEPTANCE       | 15      | 不同宗教国家的联盟接受值（负面）                                                                          |
| NOT_SAME_MUSLIM_SCHOOL_ROYAL_MARRIAGE_ACCEPTANCE | 15      | 不同宗教国家对皇室婚姻的接受程度（消极）                                                                  |
| SAME_MUSLIM_SCHOOL_ALLIANCE_ACCEPTANCE           | 15      | 相同宗教国家的联盟接受值（正面）                                                                          |
| SAME_MUSLIM_SCHOOL_ROYAL_MARRIAGE_ACCEPTANCE     | 15      | 相同宗教国家对皇室婚姻的接受程度（正面）                                                                  |
| RELIGIOUS_CONVERSION_AUTONOMY_WEIGHT             | 0.05    | 自治程度影响选择传播宗教的省份（例如宗教改革中心）。                                                      |
| RELIGIOUS_CONVERSION_DEVELOPMENT_WEIGHT          | 0.05    | 发展度在多大程度上影响了选择传播宗教的省份（例如宗教改革中心）。                                          |
| EXPEL_RELIGIOUS_MINORITY_THRESHOLD               | -0.1    | “将宗教少数群体驱逐出一个省所需的最小皈依机会”                                                            |
| EXPELLED_MINORITY_DURATION                       | 18250   | 驱逐宗教少数群体修正持续时间                                                                              |
| PAPAL_TITHE_MINIMUM_DIVISION_OF_LAND             | 0.1     | 国家每年的税收乘于该国的教士阶层所掌握的领地                                                              |
| PAPAL_TITHE_PERCENTAGE                           | 0.1     | 在这个PAPAL_TITHE_MINIMUM_DIVISION_OF_LAND基础上乘于该数值就是一个月所收的什一税                          |
| PAPAL_TITHE_YEARLY_LEVEL_1                       | 100     |                                                                                                           |
| PAPAL_TITHE_YEARLY_LEVEL_2                       | 250     |                                                                                                           |
| PAPAL_TITHE_YEARLY_LEVEL_3                       | 800     |                                                                                                           |
| PAPAL_TITHE_YEARLY_LEVEL_4                       | 1500    |                                                                                                           |
| CALL_ECUMENICAL_COUNCIL_COST                     | 0.5     | 任命枢机花费以该数值年收入为单位                                                                          |
| CALL_ECUMENICAL_COUNCIL_TREASURY_CONTRIBUTION    | 0.25    | 召集大公会议的费用中，进入教廷金库的数额                                                                  |
| BUY_INDULGENCE_COST                              | 0.5     | 购买赎罪卷以该数值年收入为单位                                                                            |
| BUY_INDULGENCE_COST_EXCOMMUNICATE_MULTIPLIER     | 2       | 被绝罚国家购买赎罪卷的花费修正                                                                            |
| BUY_INDULGENCE_DURATION                          | 5       | 购买赎罪卷的持续时间                                                                                      |
| BUY_INDULGENCE_TREASURY_CONTRIBUTION             | 0.5     | 购买赎罪卷的费用中，有多少是进入教廷金库的。                                                              |
| APPOINT_CARDINAL_INFLUENCE                       | 10      | 通过任命枢机所获得的投资影响力。                                                                          |
| APPOINT_CARDINAL_CORRUPTION                      | 0.5     | 教宗国在自己领地上任命枢机时获得的腐败。                                                                  |
| APPOINT_CARDINAL_INFLUENCE_PAPAL_STATE           | 1       | 枢机在教宗国获得的年度被动影响力                                                                          |
| APPOINT_CARDINAL_TOTAL_FACTOR                    | 2       | 成本公式中枢机数量的系数。                                                                                |
| APPOINT_CARDINAL_COUNTRY_FACTOR                  | 20      | 成本公式中目标国家的枢机数量的系数                                                                        |
| APPOINT_CARDINAL_MINIMUM_COST                    | 25      | 任命一名枢机的最低费用                                                                                    |
| PICK_GOLDEN_BULL_COST                            | 400     | 颁布金玺诏书的花费                                                                                        |
| REFORM_DESIRE_PROV_CONVERSION_SPEED_MODIFIER     | 1       | 转教速率会获得一个数值等同于改革呼声的加成                                                                |
| SIKH_GURU_MAX_CHANCE                             | 100     | 骰子的边数                                                                                                |

### NNationDesigner

- 此内容可能已落后版本，最后更新于1.34

| Define                           | Default             | Notes                                                            |
| -------------------------------- | ------------------- | ---------------------------------------------------------------- |
| POINTS_AVAILABLE                 | 200                 | 可用的自建国点数。                                               |
| RULER_BASE_AGE                   | 30                  | 这个岁数的君主是不需要额外花费自建国点数的。                     |
| RULER_MIN_AGE                    | 20                  | 自建国可用的君主最小年龄。                                       |
| RULER_MAX_AGE                    | 40                  | 自建国可用的君主最大年龄                                         |
| HEIR_BASE_AGE                    | 15                  | 这个岁数的继承人是不需要额外花费点数的。                         |
| HEIR_MIN_AGE                     | 0                   | 自建国可用的继承人最小年龄。                                     |
| HEIR_MAX_AGE                     | 30                  | 自建国可用的继承人最大年龄。                                     |
| CONSORT_MIN_AGE                  | 20                  | 自建国可用的配偶最小年龄。（设置极低不是一件值得倡议的事）       |
| CONSORT_MAX_AGE                  | 40                  | 自建国可用的配偶最大年龄。                                       |
| RULER_BASE_SKILL                 | 2                   | 这个数值的君主能力是不需要额外点数的。                           |
| RULER_MAX_SKILL                  | 6                   | 自建国的君主能力数值上限。（此项数值不受正常的能力上限限制）     |
| RULER_SKILL_COST_MODIFIER        | 2                   | 每提升一点君主能力数值所需要花费的自建国点数。                   |
| ELECTION_SKILL_COST_MODIFIER     | 0.25                | 如果政府有选举，将此应用于统治者的成本。                         |
| CONSORT_COST_MULTIPLIER          | 0.25                | 妃子的费用要乘以这个。                                           |
| BASE_TAX_COST_MODIFIER           | 0.5                 | 自建国每点税收花费修正                                           |
| PRODUCTION_COST_MODIFIER         | 0.5                 | 自建国每点生产花费修正                                           |
| MANPOWER_COST_MODIFIER           | 0.5                 | 自建国每点人力花费修正                                           |
| GOLD_PROVINCE_COST_MULTIPLIER    | 3                   | 金矿省份花费修正                                                 |
| TECH_GROUP_COST_MODIFIER         | 1                   | 科技组花费修正                                                   |
| MEMBER_OF_HRE_COST               | 20                  | 神罗省份基础花费                                                 |
| MEMBER_OF_HRE_PROVINCE_COST      | 0.2                 | 神罗省份花费修正                                                 |
| TECH_GROUP_NO_NEIGHBOUR_COST     | 20                  | 如果旁边没有相同科技组的话，花费就会增加                         |
| IDEAS_PERCENTAGE_LIMIT           | 50                  | 来自任何一个类别的最大百分比才不会得到点数的惩罚                 |
| IDEAS_LIMIT_PENALTY              | 5                   | 如果单一理念占比达到100%则会有该数值倍点数惩罚                   |
| IDEAS_LEVEL_COST_1               | 0                   | 可以被单独定义                                                   |
| IDEAS_LEVEL_COST_2               | 5                   | 二级理念花费                                                     |
| IDEAS_LEVEL_COST_3               | 15                  | 三级理念花费                                                     |
| IDEAS_LEVEL_COST_4               | 30                  | 四级理念花费                                                     |
| IDEAS_LEVEL_COST_5               | 50                  | 五级理念花费                                                     |
| IDEAS_LEVEL_COST_6               | 75                  | 六级理念花费                                                     |
| IDEAS_LEVEL_COST_7               | 105                 | 七级理念花费                                                     |
| IDEAS_LEVEL_COST_8               | 140                 | 八级理念花费                                                     |
| IDEAS_LEVEL_COST_9               | 180                 | 九级理念花费                                                     |
| IDEAS_LEVEL_COST_10              | 225                 | 十级理念花费                                                     |
| IDEAS_MAX_LEVEL                  | 4                   | 理念最大等级，可以被单独定义                                     |
| FLAT_TAX_AMOUNT                  | 4                   | 在'同一值'选项中，每个省的税收是多少。                           |
| FLAT_MP_AMOUNT                   | 3                   | 在'同一值'选项中，每个省的人力是多少。                           |
| MAX_DISTANCE_TO_OWNER_AREA       | 400                 | 自建国可选择最大距离的省份                                       |
| MAX_DISCOVERED_PROVINCE_DISTANCE | 500                 | 自建国可发现最大距离的省份                                       |
| DEFAULT_MALE_CHANCE              | 75                  | 如果统治者和继承人开始的性别不一样，默认为男性的机会。           |
| ALL_FEMALE_MALE_CHANCE           | 0                   | 如果开始的统治者和继承人都是女性，那么男性的机会就大了。         |
| ALL_MALE_MALE_CHANCE             | 100                 | 如果开始的统治者和继承人都是男性，女性就有机会                   |
| MAX_GOVERNMENT_RANK              | 3                   | 自建国最大政府等级                                               |
| GOVERNMENT_RANK_COST_1           | -10                 | 一级政府花费                                                     |
| GOVERNMENT_RANK_COST_2           | 0                   | 二级政府花费                                                     |
| GOVERNMENT_RANK_COST_3           | 30                  | 三级政府花费                                                     |
| MANDATE_SUBCONTINENT_NAME        | "china_superregion" | 在使用随机生成的国家时，将把任务交给发展最大的国家的次大陆的名称 |

### NGovernment

- 此内容可能已落后版本，最后更新于1.34

| Define                                        | Default                 | Notes                                                                      |
| --------------------------------------------- | ----------------------- | -------------------------------------------------------------------------- |
| SELECT_HEIR_FROM_HAREM_AT_MONARCH_AGE         | 30                      | 如果政府内有着“拥有后宫”("has_harem") 标识，君主年龄为此年龄时挑选继承人。 |
| RUSSIAN_ABILITY_COST                          | 100                     | 俄罗斯的能力花费                                                           |
| RUSSIAN_ABILITY_POOL_SIZE                     | 150                     | 俄罗斯能力点数的最大储存值                                                 |
| RUSSIAN_ABILITY_BASE_GAIN                     | 3                       | 俄罗斯的能力基础增长                                                       |
| RUSSIAN_ABILITY_SUDEBNIK_MIN_AUTONOMY         | 10                      | 俄罗斯可以使用全俄罗斯法典能力需要的最低自治度                             |
| RUSSIAN_ABILITY_SUDEBNIK_AUTONOMY_CHANGE      | -10                     | 全俄罗斯法典减少的自治度                                                   |
| RUSSIAN_ABILITY_OPRICHNINA_THRESHOLD          | 0.3                     | 俄罗斯使用推行特辖制能力所需要最低叛乱度                                   |
| RUSSIAN_ABILITY_OPRICHNINA_AI_THRESHOLD       | 0.85                    | 当叛乱风险为90%或能力值满时，AI将使用能力。                                |
| RUSSIAN_ABILITY_OPRICHNINA_CHANGE             | -0.3                    | 推行特辖制减少的叛乱度                                                     |
| RUSSIAN_ABILITY_STRELTSY_WE_CHANGE            | -2                      | 招募射击军减少的厌战度                                                     |
| RUSSIAN_ABILITY_STRELTSY_SPAWN_SIZE           | 0.2                     | 招募射击军得到的射击军规模                                                 |
| IQTA_POLICY_COOLDOWN_YEARS                    | 20                      | 伊克塔税收能力持续时间                                                     |
| EFFICIENT_FARMING_DUCAT_MULTIPLIER            | 2                       | 高效包税值得到的金币修正                                                   |
| LAND_AQUISITION_MANPOWER_MULTIPLIER           | 0.05                    | 征用土地得到的人力修正                                                     |
| SEIZE_CLERICAL_HOLDINGS_COST                  | 50                      | 没收教会地产所需的行政点花费                                               |
| INVITE_MINORITIES_COST                        | 50                      | 邀请少数族群所需的外交点花费                                               |
| SANCTION_HOLY_WAR_COST                        | 50                      | 圣战制裁所需的军事点花费                                                   |
| FEUDAL_THEOCRACY_INTERACTION_COOLDOWN_YEARS   | 5                       | 封建神权制互动冷却年限                                                     |
| MAMLUK_ABILITY_POOL_SIZE                      | 150                     | 马穆鲁克能力点数的最大储存值                                               |
| MAMLUK_ABILITY_COST                           | 100                     | 马穆鲁克能力花费                                                           |
| MAMLUK_RECRUIT_MANPOWER_MULTIPLIER            | 50                      | 招募切尔克斯人获得人力修正                                                 |
| MAMLUK_SELL_SLAVES_DUCATS_MULTIPLIER          | 2                       | 清仓出货切尔克斯人获得金币修正                                             |
| PROMOTE_MAMLUK_CULTURE_DURATION_YEARS         | 1                       | 提拔切尔克斯官僚获得点数修正                                               |
| TRAIN_HORSEMANSHIP_DURATION_YEARS             | 10                      | 训练马术持续时间                                                           |
| CONSCRIPT_FROM_TRIBES_AMOUNT                  | 6                       | 部落征兵得到的骑兵数量                                                     |
| CONSCRIPT_FROM_TRIBES_TIME                    | 0.25                    | 部落征兵得到的骑兵组建时间修正                                             |
| TRIBAL_ALLEGIANCE_MAX                         | 100                     | 部落拥护度最大值                                                           |
| TRIBAL_ALLEGIANCE_HUMILIATE                   | 30.0                    | 羞辱敌人得到的部落拥护度                                                   |
| TRIBAL_FEDERATION_ABILITY_COST                | 30                      | 部落联盟制能力花费                                                         |
| ENLIST_GENERAL_TRADITION                      | 40                      | 招募将军的陆军传统                                                         |
| SANCTION_HOLY_WAR_LIST_SIZE                   | 7                       | 圣战制裁最大显示宣称数量                                                   |
| INVITE_MINORITIES_GAIN                        | 1                       | 邀请少数族群得到的发展度                                                   |
| GOVERNMENT_REFORM_BASE_COST                   | 100.0                   | 政府改革基础花费                                                           |
| GOVERNMENT_REFORM_COST_INCREASE               | 40.0                    | 每增加一级增加的改革花费数目                                               |
| GOVERNMENT_REFORM_YEARLY_BASE_PROGRESS        | 10.0                    | 政府改革年度基础增加值                                                     |
| GOVERNMENT_REFORM_HISTORIC_AUTONOMY           | 0.25                    |                                                                            |
| GOVERNMENT_REFORM_CHANGE_CORRUPTION           | 10.0                    |                                                                            |
| GOVERNMENT_REFORM_CHANGE_MAX_CORRUPTION       | 50.0                    |                                                                            |
| GOVERNMENT_REFORM_MAX_SURPLUS_PROGRESS        | 100.0                   |                                                                            |
| DICTATORSHIP_TO_MONARCHY_REFORM_PENALTY       | 4                       |                                                                            |
| NATIVE_REFORM_REFORM_PENALTY                  | 2                       |                                                                            |
| RECEIVE_SERFS_DEVELOPMENT                     | 1                       |                                                                            |
| RECEIVE_SERFS_MODIFIER_ON_RIVAL_DURATION_DAYS | 3650                    |                                                                            |
| COSSACKS_ABILITY_COSSACKS_SPAWN_SIZE          | 0.2                     |                                                                            |
| COSSACKS_ABILITY_COSSACKS_WE_CHANGE           | -2                      |                                                                            |
| RAIDING_PARTIES_MODIFIER_DURATION             | 10                      |                                                                            |
| LEGACY_NATIVES_REFORM_REPUBLIC_SPONSOR        | "oligarchic_republic"   |                                                                            |
| LEGACY_NATIVES_REFORM_MONARCHY_SPONSOR        | "despotic_monarchy"     |                                                                            |
| LEGACY_NATIVES_REFORM_THEOCRACY_SPONSOR       | "theocratic_government" |                                                                            |
| LEADER_AS_MONARCH_TRADITION                   | 30                      | How much tradition leaders will get when generated for                     |

## 引用

- [欧陆风云4中文百科-Defines](https://www.eu4cn.com/wiki/Defines)

## CC协议

本作品 许可于以下 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1)
