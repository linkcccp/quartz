---
title: EPUB 文件规范
tags:
  - EPUB
date: 2025-09-11
draft: false
description: EPUB 电子书文件规范详解：涵盖基本结构、文件封装、内容组织、资源要求及元数据标准，助你理解数字出版物技术细节。
lastmod: 2025-12-28
cover: https://img.linkcf.top/2025/12/20251229122652318.webp
stale: default
---

EPUB 文件规范是一套为数字出版物定义的标准，其主要目的是确保电子书在不同设备和平台上都能一致、无障碍地呈现。下面是对 EPUB 文件规范主要内容的概述：

1. **基本结构与文件封装**  
   EPUB 文件本质上是一个经过特殊组织的 ZIP 归档，其扩展名为 `.epub`。在这个归档中必须包含一个未压缩的 `mimetype` 文件，该文件声明了归档的媒体类型为 `application/epub+zip`。此外，还需要有一个 `META-INF` 目录，该目录内包含核心配置文件（如 `container.xml`），它指明了电子出版物的主包文件（通常是 OPF 文件）所在的位置。主包文件中记录了出版物的元数据、资源清单（manifest）以及阅读顺序（spine）等内容，这些都为平台间的统一阅读体验提供了技术保障。

2. **内容组织与资源要求**  
   EPUB 文件内的内容一般包括 HTML（或 XHTML）文档、CSS 样式表、图片、多媒体资源（如 SVG）、以及可能的 JavaScript 支持等。规范对这些资源的使用和组织方式提出了明确要求，确保内容不仅以逻辑上正确的方式排列，同时具备良好的可扩展性和语义标注。这样的设计允许阅读系统能够准确解析、呈现并导航电子出版物中的内容。

3. **版本迭代与功能扩展**  
   随着数字阅读技术的发展，EPUB 标准也持续改进。早期的 EPUB 3 版本已经为电子书带来了灵活的重排（reflowable）内容和固定布局（fixed layout）支持，使得既适合文字密集型作品也能满足图像和互动内容丰富的出版物需求。最新的 EPUB 3.3 规范（已由 W3C 正式推荐）在原有基础上进一步增强了对多媒体、互动性、无障碍阅读（例如符合 WCAG 标准）以及全球化支持的要求。这样的演进使得 EPUB 成为一种既适合传统书籍也适合杂志、漫画和其他复杂布局出版物的通用格式。

4. **无障碍与兼容性**  
   当前的 EPUB 文件规范非常重视无障碍功能，规定了相应的标准（如 EPUB Accessibility Guidelines），帮助出版者在设计电子书时考虑到视觉障碍或其他特殊需求的用户。同时，通过工具（例如 [EPUBCheck](https://www.w3.org/publishing/epubcheck/)），开发者和出版者可以验证电子书是否符合各项规范要求，确保在各种阅读系统中的兼容性和稳定性。

5. **中文生态与资料支持**  
   为了方便中文出版者和开发者学习和使用 EPUB 标准，社区中有多个翻译项目，例如 GitHub 上的 [dpublishing/epub-specs-tc: EPUB 3.2 規格文件中文版](https://github.com/dpublishing/epub-specs-tc) 就提供了 EPUB 3.2（以及后续版本）中文版规范。这些资源对于理解 EPUB 的各项技术细节、最佳实践以及编写符合标准的电子书文件都有很大帮助。

综上所述，EPUB 文件规范不仅详细定义了文件的封装、内容组织和元数据要求，同时也通过不断的版本更新，扩展了对多媒体、互动性和无障碍阅读的支持，为全球各种类型的数字出版提供了统一而灵活的技术标准。如果你需要更深入的信息，可以参考 W3C 的 [EPUB 3.3 核心规范](https://w3c.github.io/epub-specs/epub33/core/) 或 GitHub 上的相关中文译本项目。

---

EPUB 文件不仅仅是一种电子书格式，它内部包含的文件和文件夹共同构成了完整的信息架构，确保内容能够被正确解析、展示和导航。以下是 EPUB 文件中常见的核心组成部分和内容说明：

以下是一个基本的 EPUB 文件目录结构示例：

```
mybook.epub
│
├── mimetype                  // 第一文件，内容为 application/epub+zip
├── META-INF
│   └── container.xml         // 指向 OPF 文件的配置文件
└── OEBPS (或其他内容目录)
    ├── content.opf           // EPUB 主要包文件：元数据、manifest、spine
    ├── toc.ncx               // EPUB2 的目录导航文件（或 nav.xhtml 用于 EPUB3）
    ├── Chapter1.xhtml        // 章节或内容页面
    ├── Chapter2.xhtml
    ├── styles/
    │    └── style.css        // 样式表文件
    ├── images/
    │    ├── cover.jpg        // 封面或章节插图
    │    └── figure1.png
    └── fonts/                // 字体文件（如果有嵌入字体）
```

这种结构既满足了标准要求，又能灵活地组织丰富的内容，确保在各种电子阅读器上都能获得良好的阅读体验。

1. **mimetype 文件**  
   这是 EPUB 文件的必备部分，位于归档的根目录中，并且必须是第一个文件。它仅包含一行文本，通常为

   ```
   application/epub+zip
   ```

   **注意：**
   - 该文件**必须位于 ZIP 归档的最前面**。
   - 存储时一定不能压缩，否则可能导致部分阅读器无法识别文件。

2. **META-INF 目录及其配置文件**  
   在根目录中还会有一个名为 `META-INF` 的文件夹，其中最重要的文件是 `container.xml`。该文件定义了 EPUB 文件的主包（通常为 OPF 文件）的所在路径，指导电子阅读器如何定位并加载后续的元数据和内容结构。
   在 `META-INF` 文件夹中创建 `container.xml` 文件，内容示例如下：

```xml
	<?xml version="1.0" encoding="UTF-8"?>
	<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">
	  <rootfiles>
	    <rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/>
	  </rootfiles>
	</container>
```

    该文件告诉阅读器：EPUB 包的主描述文件（OPF 文件）位于 `OEBPS/content.opf`。

4. **OPF 包文件**  
   OPF（Open Packaging Format）文件是 EPUB 的心脏，通常命名为 `content.opf`，但名称可以根据实际情况而定。此文件包含了：
   - **元数据 (Metadata)：** 描述书名、作者、语言、发布时间、版权信息等基本出版信息。
   - **资源清单 (Manifest)：** 列举了所有用于构建电子书的资源，如各章节的 XHTML（或 HTML）文档、CSS 样式、图片、字体文件、多媒体文件等，并指明了它们的媒体类型。
   - **阅读顺序 (Spine)：** 指定了书内实际阅读的顺序，即 EPUB 阅读器加载各章节的先后顺序。

   通过 OPF 文件，整个电子书的结构和依赖关系得以组织和管理。
   在 `OEBPS` 目录中创建 `content.opf` 文件，这是整个 EPUB 文件的核心文件，包含了元数据、资源清单和阅读顺序。一个简单的示例（基于 EPUB3）：

   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <package version="3.0"
            xmlns="http://www.idpf.org/2007/opf"
            unique-identifier="bookid">
     <metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
       <dc:identifier id="bookid">urn:uuid:12345</dc:identifier>
       <dc:title>你的书名</dc:title>
       <dc:language>zh</dc:language>
       <dc:creator>作者姓名</dc:creator>
     </metadata>
     <manifest>
       <!-- 主内容文件 -->
       <item id="chapter1" href="chapter1.xhtml" media-type="application/xhtml+xml"/>
       <item id="chapter2" href="chapter2.xhtml" media-type="application/xhtml+xml"/>
       <!-- 导航文件，属性 properties="nav" 告知这是导航文件 -->
       <item id="nav" href="nav.xhtml" media-type="application/xhtml+xml" properties="nav"/>
       <!-- 其他资源，如 CSS 文件和图片 -->
       <item id="css" href="styles/style.css" media-type="text/css"/>
       <item id="cover" href="images/cover.jpg" media-type="image/jpeg"/>
     </manifest>
     <spine>
       <!-- 定义线性阅读顺序 -->
       <itemref idref="chapter1"/>
       <itemref idref="chapter2"/>
     </spine>
   </package>
   ```

   在这个文件中：
   - **metadata** 部分定义基本信息，如书名、语言、作者等。
   - **manifest** 列出所有资源文件，并为每个文件分配唯一的标识符。
   - **spine** 定义了阅读器打开书籍时的默认阅读顺序。

5. **内容文件及资源组织**  
   EPUB 文件内容主要存放在一个或多个子目录中（常见的目录名称为 `OEBPS` 或 `content`），其中涵盖了：
   - **章节文件：** 以 XHTML 或 HTML 格式编写的文本内容，构成了书籍的主要章节。
   - **样式文件：** 使用 CSS 文件来定义页面布局、字体、颜色等视觉效果，确保在不同设备上有一致的展示效果。
   - **图片和多媒体：** 用于插图、封面、图表乃至嵌入式视频或音频，这些资源使得内容更加丰富。
   - **字体文件：** 用来嵌入特定字体，保证文字风格的一致性。

   此外，开发者还可以利用 JavaScript 赋予内容一定的交互性或增强功能，但这也需要针对不同阅读设备谨慎测试。
   在 `OEBPS` 中创建章节文件，例如 `chapter1.xhtml`。下面提供一个简单示例：

   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <html xmlns="http://www.w3.org/1999/xhtml">
     <head>
       <title>第一章</title>
       <link rel="stylesheet" type="text/css" href="styles/style.css"/>
     </head>
     <body>
       <h1>第一章</h1>
       <p>这里是第一章的内容……</p>
     </body>
   </html>
   ```

   同样的方法可以创建更多的章节（如 `chapter2.xhtml`）。

6. **导航文件**  
   导航结构在不同版本的 EPUB 中有所不同：
   - **EPUB2：** 通常会配备一个 `toc.ncx` 文件，基于 XML 语法，定义了详细的目录和导航点。
   - **EPUB3：** 引入了 HTML5 基础的导航文档（通常为 `nav.xhtml`），它在结构上与常规网页类似，更易于现代浏览器解析，也更利于无障碍设计。

   这些导航文件让读者可以快速地跳转到关键内容和章节，同时也为电子书的整体结构提供了逻辑支撑。
   于 EPUB3 文件，需要一个基于 HTML 的导航文件（常命名为 `nav.xhtml`），示例如下：

   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <html xmlns="http://www.w3.org/1999/xhtml"
         xmlns:epub="http://www.idpf.org/2007/ops">
     <head>
       <title>目录</title>
     </head>
     <body>
       <nav epub:type="toc">
         <h1>目录</h1>
         <ol>
           <li><a href="chapter1.xhtml">第一章</a></li>
           <li><a href="chapter2.xhtml">第二章</a></li>
         </ol>
       </nav>
     </body>
   </html>
   ```

   此文件用于生成书籍目录，帮助读者快速定位章节。

7. **打包成 EPUB 文件**
   完成以上文件创建后，确保目录结构正确。接下来需要把所有文件打包成一个 ZIP 文件，并改名为 `.epub`。打包时有两个关键点需要注意：
   - **顺序和压缩方式**：

- `mimetype` 文件必须作为第一个文件排在ZIP包中，并且存储时不能压缩。
  - **打包命令（以 Linux 为例）**：

  ```bash
  # 先添加 mimetype 文件（无压缩）
  zip -X0 mybook.epub mimetype
  # 再将其他文件和目录添加到压缩包中
  zip -Xur mybook.epub META-INF OEBPS
  ```

  这条命令保证了 `mimetype` 文件的位置和存储方式符合 EPUB 规范。
  - **Windows打包**
    - **安装 7‑Zip**
      - 如果尚未安装 [7‑Zip](https://www.7-zip.org/)，请先下载安装。
    - **准备文件目录**
      - 确保你的工作目录（例如 `mybook`）已经建立好如下结构：

    ```
    mybook\
    ├── mimetype
    ├── META-INF\
    │   └── container.xml
    └── OEBPS\
        ├── content.opf
        ├── nav.xhtml      (或 toc.ncx)
        ├── chapter1.xhtml
        └── ...其它资源
    ```

    - **打开命令提示符**
    - 按 `Win + R` 打开“运行”，输入 `cmd` 并回车，再切换到 `mybook` 所在目录。
    - **先添加 mimetype 文件**
      - 由于 mimetype 文件必须放在归档最前面且不压缩，所以执行以下命令（假设 7‑Zip 安装在默认位置）：

    ```batch
    "C:\Program Files\7-Zip\7z.exe" a -tzip -mx=0 mybook.epub mimetype
    ```

    其中参数解释：
    - `a`：添加文件到归档
    - `-tzip`：指定创建 ZIP 格式归档
    - `-mx=0`：表示采用“存储”方式（无压缩）
      - **添加其他文件和目录**
        - 接下来将 META-INF 和 OEBPS 目录添加到归档，并可使用较高的压缩级别（例如 `-mx=9`）：

    ```batch
    "C:\Program Files\7-Zip\7z.exe" a -tzip -mx=9 mybook.epub META-INF OEBPS
    ```

    这样生成的 `mybook.epub` 就符合 EPUB 规范，mimetype 文件处于归档最前面且无压缩，其余资源正常压缩存放。

9. **验证文件合规性**
   - 使用 [EPUBCheck](https://github.com/w3c/epubcheck) 等工具对生成的 EPUB 文件进行验证，这能确保文件符合标准，不会在各种阅读器中出现解析问题。
   - **命令行验证**
     - 确保你的系统已安装了 Java，然后在命令行中输入类似如下命令：

       ```bash
       java -jar epubcheck.jar your_book.epub
       ```

   工具会扫描整个 EPUB 文件，并在命令行输出中提示错误（errors）、警告（warnings）及建议改进的地方。出现错误时需要修改对应文件，直到 EPUBCheck 报告没有严重错误。
   - **错误（Errors）**  
     表示文件严重不符合 EPUB 标准，需要逐一排查并修正。例如 XML 解析错误、必填属性缺失、文件路径错误等。
   - **警告（Warnings）**  
     虽然不一定会影响阅读器加载，但这些提示有助于提高电子书质量，如缺少某些补充信息或建议改进的语法。
