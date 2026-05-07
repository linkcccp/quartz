---
title: 欧陆风云4统治者头衔修改
tags:
  - Game
  - Mod
  - EU4
  - Paradox
date: 2025-09-06
draft: false
description: 欧陆风云4统治者头衔修改
lastmod: 2025-12-28
cover: https://img.linkcf.top/2025/12/20251229115638571.webp
stale: default
---

- [欧陆风云4统治者头衔修改](#欧陆风云4统治者头衔修改)
- [开始](#开始)
- [本地化](#本地化)
- [test](#test)
- [引用](#引用)
- [CC协议](#cc协议)

## 欧陆风云4统治者头衔修改

## 开始

- 创建mod
- 创建文件`/common/government_names/000_mod_government_names.txt`
  - 注意：文件名称前面至少要3个0，这是为了提高优先级，覆盖原文件，不然没有效果

```
#按照以下格式创建
<string> = { #名称随意，自己认识就行，不用本地化
    rank = {
        <rank> = <string> #这是修改政府等级为王国、公国、帝国时的名称
    }

    ruler_male = { #男性统治者
        <rank> = <string>
    }

    ruler_female = { #女性统治者
        <rank> = <string>
    }

    consort_male = { #男性配偶
        <rank> = <string>
    }

    consort_female = { #女性配偶
        <rank> = <string>
    }

    heir_male = { #男性继承人
        <rank> = <string>
    }

    heir_female = { #女性继承人
        <rank> = <string>
    }

    trigger = { #触发器，条件语句可以写这里面
        <triggers>
    }
}
```

```
#假如更改大明的统治者头衔
MNG = { #名称随意，自己认识就行
    rank = {
        1 = TIANCHAO #这是修改政府等级为王国、公国、帝国时的名称
        2 = TIANCHAO
        3 = TIANCHAO
    }

    ruler_male = { #男性统治者
        1 = TIANZI
        2 = TIANZI
        3 = TIANZI
    }

    ruler_female = { #女性统治者
        1 = TIANHOU
        2 = TIANHOU
        3 = TIANHOU
    }

    consort_male = { #男性配偶
        1 = FUMA
        2 = FUMA
        3 = FUMA
    }

    consort_female = { #女性配偶
        1 = HUANGHOU
        2 = HUANGHOU
        3 = HUANGHOU
    }

    heir_male = { #男性继承人
        1 = TAIZI
        2 = TAIZI
        3 = TAIZI
    }

    heir_female = { #女性继承人
        1 = TAIZI
        2 = TAIZI
        3 = TAIZI
    }

    trigger = { #触发器，条件语句可以写这里面
        tag = MNG
    }
}
```

## 本地化

- 创建文件`/localisation/replace/00_mod_government_names_l_english.yml`
  - 使用`utf-8 with BOM`保存
- [本地化网站](https://paratranz.cn/utilities/converter)

```
l_english:
 TIANCHAO:0 ")Yg"
 TIANZI:0 ")YPR"
 TIANHOU:0 ")YT"
 FUMA:0 "xšlš"
 HUANGHOU:0 "‡vT"
 TAIZI:0 "*YPR"
```

## test

![test](https://img.linkcf.top/imgcenter/2024/10/198214e482173c89fb648cbead49fa8a.jpeg)
![test](https://img.linkcf.top/imgcenter/2024/10/25f41302d3d4fab377b11b2931ee2795.jpeg)
成功！

## 引用

- [EU4 wiki - Government](https://eu4.paradoxwikis.com/Government_modding#Government_ranks)
- [Reddit](https://www.reddit.com/r/eu4/comments/jzgak2/adding_a_new_ruler_title/?rdt=39173)

## CC协议

- 本作品 已获得许可 [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)
