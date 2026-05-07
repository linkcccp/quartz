---
title: 英白拉多：罗马旗帜修改
tags:
  - ImperatorRome
  - Mod
  - Flag
date: 2025-10-08
draft: false
description: 帝皇：罗马旗帜修改教程：编辑 coat_of_arms 文件，自定义国家旗帜图案、颜色及纹章。
lastmod: 2025-12-28
cover: https://img.linkcf.top/2025/12/20251229120119557.webp
stale: default
---

## 修改旗帜

### 结构

打开`\ImperatorRome\game\common\coat_of_arms\coat_of_arms\00_pre_scripted_countries.txt`文件，这个文件存放着所有国家的旗帜

```imperator
<flag_tag> = {
    pattern = "pattern_solid.tga"
    color1 = rgb { r g b }
    color2 = rgb { r g b }

    textured_emblem = {
        texture = "<filename>.dds"
    }
}
```

```imperator
ROM = {
    pattern = "pattern_solid.tga"
    color1 = "roman_red"
    color2 = "roman_gold"
   
    colored_emblem = {
        texture = "ce_roman_eagle.dds"
        color1 = "roman_gold"
    }
}
```

```imperator
EASTERN_ROME_FLAG = {
    pattern = "pattern_solid.tga"
    color1 = "ck2_purple"
    color2 = "roman_gold"

    colored_emblem = {
        texture = "ce_roman_eagle.dds"
        color1 = "roman_gold"
    }
}
```

> [!NOTE]
> 开局国家的旗帜tag就是国家tag，而可成立国家的旗帜tag为另外定义的，不和国家tag一样

| Key             | Description                                                                 | Example                                                                          | Notes                                                                                                            |
| --------------- | --------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| pattern         | 使用的模式指的是pattern文件夹中的一个文件 `game/gfx/coat_of_arms/patterns/` | `pattern = "pattern_solid.tga"`                                                  | 不是必需的，如果未指定，将显示为纯红色。也就是`pattern_solid.tga`                                                |
| color1          | 控制pattern文件夹里的文件的红色部分                                         | `color1 = "bone_white"`                                                          | ==必需==，因为它也给旗帜的褶皱上色。默认是亮粉色。如果指定为别的颜色，那么红色就会变成指定的颜色。<br><br>       |
| color2          | 控制pattern文件夹里的文件的黄色部分                                         | `color2 = "pitch_black"`                                                         | ==必需==，因为它还为游戏中的单位盔甲着色。默认是黄绿色。如果指定为别的颜色，那么黄色就会变成指定的颜色。<br><br> |
| color3          | 控制pattern文件夹里的文件的白色部分                                         | `color3 = "ck2_yellow"`                                                          | 这种颜色不是必需的，仅用于具有三种颜色的图案。没有其他影响。                                                     |
| colored emblem  | 这用于指定要放置在旗帜上的彩色徽章`game/gfx/coat_of_arms/colored_emblems/`  | colored_emblem = {<br> texture = "ce_chimera.dds"<br> color1 = "bone_white"<br>} | 此部分不是必需的，可以使用多个。==一般不用这个。==                                                               |
| textured emblem | 这用于指定要放置在旗帜上的纹理徽章`game/gfx/coat_of_arms/textured_emblems/` | textured_emblem = {<br> texture = "te_skull_goat.dds"<br>}                       | 这一部分不是必需的。==修改旗帜一般用这个。==                                                                     |

### 使用textured emblem修改旗帜

> [!NOTE]
> 纹理标志只是将图像按原样放置在旗帜上。如果不使用预先存在的设计，纹理标志是制作自己的旗帜的推荐方法，因为它是迄今为止最简单的方法。纹理标志可以有任何尺寸，但建议使用 256x256。

**以罗马为例，修改旗帜**

下载[Paint.NET - Free Software for Digital Photo Editing](https://www.getpaint.net/)
![image.png](https://img.linkcf.top/2025/10/20251008214929197.png)
下载免费版
![image.png](https://img.linkcf.top/2025/10/20251008215034375.png)
下载好之后，是一个压缩包，解压之后安装软件，会联网下载软件，一会就好了。
打开是这样子的。
![image.png](https://img.linkcf.top/2025/10/20251008215333587.png)

创建mod，我在这里名叫test，在mod根目录里创建`common/coat_of_arms/coat_of_arms/`文件夹，在第二个文件夹里创建txt文件，名称随意，我这里是`00_rom.txt`

![image.png](https://img.linkcf.top/2025/10/20251010150517466.png)
以下是原版代码，复制到新创建的txt文件里

```imperator
ROM = {
    pattern = "pattern_solid.tga"
    color1 = "roman_red"
    color2 = "roman_gold"
    colored_emblem = {
        texture = "ce_roman_eagle.dds"
        color1 = "roman_gold"
    }
}
```

pattern默认是`pattern_solid.tga`，不用改。想改可以找到游戏`game/gfx/coat_of_arms/patterns/`路径查看
![image.png](https://img.linkcf.top/2025/10/20251010151240907.png)
想要修改pattern的颜色，靠的是color1和color2，color1修改红色区域，color2修改黄色区域（同样也会渲染兵模颜色）

**颜色可以通过三种方式定义：**

- 使用命名颜色`color1 = pitch_black`
- 使用 RGB 值`color1 = rgb { 255 255 255}`
- 使用 HSV 值`color1 = hsv { 1.0 1.0 1.0}`

可以在文件夹中找到命名颜色。 可以通过在此文件夹中添加另一个文件来创建一个新文件，其中包含如下条目：`/common/named_colors/`

```imperator
colors = {
    custom_color = hsv { 0 0 0.12 }
    custom_color = rgb{ 128 128 128 }
}
```

这些条目以 HSV 或 RGB 格式进行。请注意，HSV 颜色中的所有值均满分 1，而 RGB 颜色中的所有值均满分 255。

此处定义的颜色也可以直接分配给脚本中的国家/地区，以更改其在地图上的颜色（使用命令）`change_country_color = COLOUR`

在这里，我不使用`colored_emblem`，而使用`textured_emblem`，相对来说更方便一些
**接下来制作国旗，大小推荐为256x256像素**
从网上下载
![image.png](https://img.linkcf.top/2025/10/20251010160149864.png)

也可以用其它图片，随意
用paint.net打开之后，先调整尺寸
![image.png](https://img.linkcf.top/2025/10/20251010153052002.png)

先把高调整为256像素
![image.png](https://img.linkcf.top/2025/10/20251010153131839.png)

在调整画布尺寸
![image.png](https://img.linkcf.top/2025/10/20251010153409217.png)

宽为256，锚点为中

![image.png](https://img.linkcf.top/2025/10/20251010153501714.png)

得到256x256像素的图片
![image.png](https://img.linkcf.top/2025/10/20251010153550298.png)

然后用吸管吸取背景色，这里是黄色，得到rgb值，那么color1就填写吸取到的rgb值
![image.png](https://img.linkcf.top/2025/10/20251010153736889.png)

删除背景，保存为dds文件
![image.png](https://img.linkcf.top/2025/10/20251010154003303.png)

保存配置为**B8G8R8A8(线性，A8R8G8B8)**
![](https://img.linkcf.top/2025/10/20251010154042849.png)

保存路径为`gfx/coat_of_arms/textured_emblems/`
![image.png](https://img.linkcf.top/2025/10/20251010154343498.png)

然后修改`00_rom.txt`里的代码，完整代码如下。

```imperator
ROM = {
    pattern = "pattern_solid.tga"
    color1 = rgb {255 204 30}
    color2 = rgb {0 0 0}

    textured_emblem = {
        texture = "rom_new_flag.dds"
    }
}
```

勾上mod，启动游戏，发现修改好了
![image.png](https://img.linkcf.top/2025/10/20251010155035855.png)

其中罗马征召兵的盾牌为黑色，改color2可以改为其它颜色。每个国家显示的地方不一样，我用英伦蛮子测试发现color2修改的地方是裤子。
![image.png](https://img.linkcf.top/2025/10/20251010155246900.png)
