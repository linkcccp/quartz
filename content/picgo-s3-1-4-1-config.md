---
title: Picgo S3 1.4.1没有自定义域名怎么办？
tags:
  - Picgo
  - S3
  - Config
date: 2025-09-06
draft: false
description: PicGo S3 插件配置指南：自定义输出 URL 模板 (outputURLPattern)，支持协议、域名、路径等占位符，优化图床链接格式。
lastmod: 2025-12-28
cover: https://img.linkcf.top/2025/12/20251229124009602.webp
stale: default
---

## 配置自定义输出 URL 模板(`outputURLPattern`)

<font color=red>最简单的就是配置 https://xxx.example.com/{path}</font>

支持占位符方式配置，如 `{protocol}://{host}:{port}/{path}`。除以下列表外，还指出上述通用占位符。

| payload      | 描述                                                          | 例子                                                      |
| ------------ | ------------------------------------------------------------- | --------------------------------------------------------- |
| `{protocol}` | 原上传 URL 的协议                                             | `http` 或 `https`                                         |
| `{host}`     | 原上传 URL 的域名，可不不使用次此变量改为其他自己的反代的域名 | `example.com`                                             |
| `{port}`     | 原上传 URL 的端口                                             | `80`                                                      |
| `{dir}`      | 原上传 URL 的目录                                             | `testBucket/2024/12`                                      |
| `{path}`     | 原上传 URL 的完整路径                                         | `testBucket/2024/12/4aa4f41e38817e5fd38ac870f40dbc70.jpg` |
| `{fileName}` | 文件名（含扩展名）                                            | `test.jpg`                                                |
| `{extName}`  | 扩展名（不含`.`）                                             | `jpg`                                                     |
| `{query}`    | 上传 URL 的 querystirng 部分（不含 `?` ）                     | `height=100&width=200`                                    |
| `{hash}`     | 上传 URL 的 hash 部分（不含 `#` ）                            | `abc`                                                     |
| `{bucket}`   | 上传桶名                                                      | `testBucket`                                              |

这个配置将会替代原有的 `urlPrefix` 、`urlSuffix`、`disableBucketPrefixToURL` 的配置。

另外每个变量都支持**正则替换**

```
语法：
{payload:/pattern/reFlag,'replacement'}
```

比如配置为 `{protocol}://example.imgbed/{path:/testBucket/i,'myimage'}`，如果原URL为 `https://cluster-test-1.s3.us-east-001.example.com/testBucket/image.jpg` 则会生成 `https://example.imgbed/myimage/image.jpg`。

#### 示例 Example

[](https://github.com/wayjam/picgo-plugin-s3#%E7%A4%BA%E4%BE%8B-example)

```json
    "aws-s3": {
      "accessKeyID": "xxx",
      "secretAccessKey": "xxxxx",
      "bucketName": "my-bucket",
      "uploadPath": "{year}/{md5}.{extName}",
      "endpoint": "s3.us-west-000.backblazeb2.com",
      "outputURLPattern": "{protocol}://{host}/{path}"
    }
```

如果 PicGo 像以上配置，执行上传：`picgo upload sample.png`，则最终得到图片地址为：`https://img.example.com/2021/4aa4f41e38817e5fd38ac870f40dbc70.jpg`

⚠️upload failed, check dev console
