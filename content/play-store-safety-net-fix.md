---
title: Google Play Store 设备未认证修复，以小米平板5Pro为例
tags:
  - Android
  - Xiaomi
  - Google
date: 2025-09-06
draft: false
description: 解决 Root 后 Google Play 设备未认证问题：使用 Magisk 模块（Shamiko, PlayIntegrityFix）通过 SafetyNet 检测，恢复应用下载。
lastmod: 2025-12-28
cover: https://img.linkcf.top/2025/12/20251229123027390.webp
stale: default
---

## 问题

```
由于root了之后，在google play store上显示设备未认证，导致一些应用无法下载
```

![设备未认证](https://img.linkcf.top/imgcenter/2024/10/086fe56eaec01f45fe2274964d60d62f.jpeg)

## 模块准备

- 由于机器root了，那自然也要用root的方式解决
- 可以去我的[github](https://github.com/linkcccp/ModuleBackup)下载模块
- Magisk：
  - XiaomiCTSPass-v1.9.3(0927).zip
  - PlayIntegrityFix_v17.6.zip
  - PlayIntegrityNEXT-v10.7.zip
  - Shamiko-v0.7.3(174).zip

## 开始

- 刷入Shamiko之后重启，设置里选择`不遵守排除列表`
  ![不遵守排除列表](https://img.linkcf.top/imgcenter/2024/10/62000614330dac9446540fb232ff688d.jpeg)
  让shamiko运行在黑名单模式
  ![blacklist](https://img.linkcf.top/imgcenter/2024/10/7b7c1ef6bb3c4946677598d76007e596.jpeg)
- 选择三个模块刷入
  ![1](https://img.linkcf.top/imgcenter/2024/10/107a796eebae53ba6b41f7ec0ea8945d.jpeg)
  ![2](https://img.linkcf.top/imgcenter/2024/10/43555b8c06ca276a228d8dc5448efe23.jpeg)
  ![3](https://img.linkcf.top/imgcenter/2024/10/7f6eb11562058dac1cd0bf13fb103eb6.jpeg)
- 重启
- 重启完成之后在应用设置里搜索google
- 把`Google服务框架`，`Google Play服务`，`Google Play 商店`的缓存清除
  ![google三件套](https://img.linkcf.top/imgcenter/2024/10/dad0a1635608d2cc9e20a23d24bc2fc6.jpeg)
  ![google服务框架](https://img.linkcf.top/imgcenter/2024/10/40bcf30bebadcdb79444e613cc5a7c3c.jpeg)
  ![google play服务](https://img.linkcf.top/imgcenter/2024/10/80a6d1b73a3cd014de3c757b001cdce1.jpeg)
  ![google play store](https://img.linkcf.top/imgcenter/2024/10/2bbfd179dfd344b339acbea5039053f9.jpeg)
- 进入google play store，点击解决设备问题，过一会就成功了
  ![成功](https://img.linkcf.top/imgcenter/2024/10/146043d3de11e79ae29c863c1a2e7570.jpeg)
  ![成功](https://img.linkcf.top/imgcenter/2024/10/9e21546326a3e3dba23d703bf5780fb8.jpeg)

## 结语

- 本方法只适用于`小米、红米`设备，因为只有这些机型的模块
- 本方法需要及时更新，google方面会定期检查
