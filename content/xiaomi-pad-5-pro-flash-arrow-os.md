---
title: 小米平板5Pro刷ArrowOS操作过程
tags:
  - Xiaomi
  - Flash
  - ArrowOS
  - Android
date: 2025-09-06
draft: false
description: 本文章说明了小米平板5Pro如何刷第三方系统ArrowOS，并且提供了相关资源下载
lastmod: 2025-12-28
cover: https://img.linkcf.top/2025/12/20251229114422433.webp
stale: default
---

## Flash ArrowOS

### before

1. 解锁`bootloader`
2. 退出`小米账号`&`google账号`
3. 底包是小米官方包
4. PC配置好[ADB][1]环境
5. 平板50%电量以上，一根完好的数据线
6. 准备好必要的文件
   - [miui_recovery.img][2]
   - [ADB][1]
   - [Payload Dumper][3]
   - [AOSP_recovery.img][4]
   - [ArrowOS 13.1 GAPPS][5]
   - [Magisk][6]

### flash

1. 打开平板的`USB调试选项`，把平板连接到PC，这时候平板会弹出`允许USB调试选项`，点击确定
2. 打开PC上的`terminal`，输入命令：
   - adb devices <这条命令表示检测adb设备>
   - adb reboot fastboot <这条命令表示重启到fastboot模式>
   - fastboot devices <检测fastboot模式下有没有设备连接>
   - fastboot flash boot miui_recovery.img <刷入miui_recovery.img文件，出现两个OKAY就好了>
   - fastboot reboot recovery <重启到recovery模式，选择清除数据，清除完之后重启，按住电源键和音量下键，进入fastboot模式>
   - fastboot flash boot aosp_recovery.img <刷入aosp_recovery.img文件，出现两个OKAY就好了>
   - fastboot reboot recovery <重启到recovery模式，此时rec没有任何显示，只是会呈现出高亮状>
   - adb reboot sideload-auto-reboot <进入平板的侧载模式，看到平板关闭在开启就可以了>
   - adb sideload _.zip <_.zip是你下载的ArrowOS包名，随后平板开始输入ArrowOS，会卡在47%，不要紧，好了会自动开机>
3. 刷GAPPS版本开机引导的时候要过google验证，这个时候选择离线设置

## ROOT

1. 解压`Payload Dumper`
2. 解压`ArrowOS 13.1 GAPPS`系统包
3. 把`payload.bin`文件放入解压好后的`Payload Dumper`文件夹
4. 点击bat文件，把`boot.img`文件解压出来，传输到平板里
5. 安装[Magisk][6]
6. 点击Magisk，在Magisk那一栏里，点击`安装`
7. 选择修补一个文件
8. 选择解压出来的`boot.img`文件
9. 把修补出来的文件传输到PC上
10. 进入`Terminal`
11. 重启平板到fastboot模式，可以终端输入命令：adb reboot fastboot，或者手动重启，同时按住音量下键
12. 输入命令：fastboot flash boot Magisk_boot.img <刷入你修补后的boot.img文件，不一定叫这个名字>
13. fastboot reboot <重启系统>
14. 进入Magisk软件，他会提示你重启系统，在重启一次，就完成了

### after

1. 默认桌面是三大金刚键，进入设置搜索`手势`，选择全面屏手势

[1]: https://developer.android.com/tools/releases/platform-tools?hl=zh-cn
[2]: https://mega.nz/file/JE5XSIRK#j6LJpYF-DH6Fk0zDO8YJEysnm33QAupAK7Z42ondZsg
[3]: https://github.com/ssut/payload-dumper-go
[4]: https://mega.nz/file/9BJm0KZZ#AblxF0ELUAGT5KLNDRmn6z-Qog-C7aaqgGJQCTFbSjg
[5]: https://get.mirror3.arrowos.net/download.php?token=7a6X2CbphRfVLU0zmBxrEMlcg9DtZY1wnkqWJGH8TyKO5oQA4IsjN3iuvdSe&version=arrow-13.1&variant=official&device=elish
[6]: https://github.com/topjohnwu/Magisk
