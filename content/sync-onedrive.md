---
title: 创建符号链接来同步不在onedrive文件夹内的文件
tags:
  - Onedrive
  - SymbolicLink
date: 2025-09-06
draft: false
description: 教程：如何使用 Windows mklink 命令创建符号链接，将 D 盘文件夹同步到 C 盘 OneDrive 目录，节省 C 盘空间。
lastmod: 2025-12-28
cover: https://img.linkcf.top/2025/12/20251229122027529.webp
stale: default
---

- [需求](#需求)
- [操作](#操作)
- [同步测试](#同步测试)
- [测试重装系统](#测试重装系统)
- [最后](#最后)

## 需求

```
我的onedrive文件夹在C盘，但是我在D盘有文件需要同步到onedrive文件夹内，并且，我不希望占用C盘空间
```

## 操作

- 打开`Terminal`，选择`cmd`
  ![cmd](https://img.linkcf.top/imgcenter/2024/10/69314ac58aca7f178d8293fdd5ec55cd.png)
- 输入[mklink](https://learn.microsoft.com/zh-cn/windows-server/administration/windows-commands/mklink)命令，命令语法为`mklink [[/d] | [/h] | [/j]] <link> <target>`
  ![cmd](https://img.linkcf.top/imgcenter/2024/10/0ec71aa0c006cd23dc9b48638f3e8900.png)
- 比如说，我在D盘有test文件夹，需要同步到C盘的onedrive里
  ![dir](https://img.linkcf.top/imgcenter/2024/10/6ee4058bbca52be313cae300cb8b4e22.png)
- 那么mklink命令这样写`mklink /d "C:\Users\Yazov\OneDrive - MSFT\test" D:\test`，注意，路径有空格就用英文双引号括起来
  ![cmd](https://img.linkcf.top/imgcenter/2024/10/f500ce8c81efc8f14ccc91e6de22f829.png)
  ![onedriveDir](https://img.linkcf.top/imgcenter/2024/10/97bec4ad7316b657129345c1cae84ab0.png)
  可以看到，成功了

## 同步测试

- 我们在D盘创建一个文件
  ![d.txt](https://img.linkcf.top/imgcenter/2024/10/36d1aca94ed88d70cd9f46d66902ab3e.png)
- 可以看到onedrive里已经有文件了
  ![d.txt for onedrive](https://img.linkcf.top/imgcenter/2024/10/04f9f88fae6b4a33bbeeb9487feb4a9b.png)
- 但是在onedrive云盘里没有看到test文件夹
  ![onedrive cloud](https://img.linkcf.top/imgcenter/2024/10/55035a117df1f711cac4209aa2ac84d3.jpeg)
- 这时候就需要重新同步
  ![sync](https://img.linkcf.top/imgcenter/2024/10/8d575665e25aa657fddc8b654389d6c9.jpeg)
  ![sync success](https://img.linkcf.top/imgcenter/2024/10/f054b9243fa5c0c784cdb5ea51aa4c9b.jpeg)
  同步成功
- 从云盘里删除文件试试
  ![delete from cloud](https://img.linkcf.top/imgcenter/2024/10/a641272ee0c41d4335c2425feefec8d0.jpeg)
  可以看到本地onedrive文件还在
  ![local](https://img.linkcf.top/imgcenter/2024/10/8cc4e80fe802a1aa049adfc0e6442a22.png)
  这个时候不动，在重新同步一下，发现文件没了
  ![sync](https://img.linkcf.top/imgcenter/2024/10/61b916ba01ac8006b5dbe7ac152df46a.png)
- 重新创建文件，从本地删除试试
  ![delete from local](https://img.linkcf.top/imgcenter/2024/10/9a871c4dddb2641664799ea62b49de6c.png)
  ![cloud](https://img.linkcf.top/imgcenter/2024/10/0e47f03a4eee0e29dfbafaea6c9482c7.jpeg)
  从本地删除
  ![delete](https://img.linkcf.top/imgcenter/2024/10/da0111e7140a90e640f9bcba51ce976a.jpeg)
  发现云上的文件也同步删除了
- 我也试了`释放本地空间`的选项，发现无法释放，因为使用了符号链接的原因，一直是同步状态，哪怕已经同步上onedrive了也是如此
- 在onedrive网页上测试移动文件到另外的地方，本地也会跟着移动，从别的盘移动到C盘onedrive目录里

## 测试重装系统

- 我这里以hyper-v虚拟机为例
- 重新登录上去之后，发现用符号链接的文件夹也出现在了onedrive文件夹里
  ![source](https://img.linkcf.top/imgcenter/2024/10/35157bc4c264eaf04f8a41d830ce2cdc.png)
  重装系统之后的onedrive文件，可以看到videos文件夹
  ![重装系统](https://img.linkcf.top/imgcenter/2024/10/9dd0e876cfdadf91346e463744d479e0.png)
- 在这里，我在本地电脑重新创建了test文件夹，同步到onedrive里，test文件夹里有a.txt，b.txt，c.txt三个文件
  ![local](https://img.linkcf.top/imgcenter/2024/10/892aa60724a8df0802ba23791756be89.png)
- 在虚拟机里同步
  ![VM](https://img.linkcf.top/imgcenter/2024/10/722c387ea3accc7fa5ce9f1dbca91bdc.png)
  把test文件夹剪切到其他地方，然后使用mklink命令
  ![cut](https://img.linkcf.top/imgcenter/2024/10/28d373addbb38d1d1f858cafd3eb0527.png)
  ![mklink](https://img.linkcf.top/imgcenter/2024/10/31c4f7d953823cb2dcfbb1afcb420c7b.jpeg)
  在虚拟机里进行添加文件操作
  ![虚拟机里进行添加文件操作](https://img.linkcf.top/imgcenter/2024/10/136bb8e88632faa7b79302a39214a672.png)
  ![local](https://img.linkcf.top/imgcenter/2024/10/e2c84b82a221a9a6985977b7c8a1eb5a.png)
- 同步之后可以看到，本地onedrive也同步了虚拟机添加的文件，但是本地的符号链接失效了

## 最后

- 符号链接同步onedrive的优缺点
  - 优点：
    - 如果文件不在onedrive所在盘的话，就不会占用所在盘的空间，对于onedrive在C盘的用户来说，是利好的
    - 可以从各个地方同步文件，不用把文件一股脑放在onedrive文件夹里
  - 缺点：
    - 同步需要主动同步。也就是先暂停同步，再重新同步，才会同步文件上去
    - 文件无法释放空间。始终需要文件保存再本地，不需要了也无法删除，对于本地空间是一种浪费行为
    - 同一个文件夹，只能有一台电脑进行符号链接（也算是个缺点吧）
