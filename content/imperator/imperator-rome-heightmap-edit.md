---
title: 分享一下我自己摸索出来的Imperator:Rome Heightmap如何制作
tags:
  - Paradox
  - Mod
  - HeightMap
  - ImperatorRome
date: 2025-09-06
draft: false
description: "帝皇：罗马 (Imperator: Rome) 地图高度图编辑教程：使用 QGIS 和 GIMP 处理 NASA 高度图数据，制作自定义游戏地图。"
lastmod: 2025-12-28
cover: https://img.linkcf.top/2025/12/20251229120119557.webp
stale: default
---

> [!important] Important
> rgb值 37 37 37是海平面，高于它的的陆地，低于它的是海洋

## 准备

1. [QGIS](https://qgis.org/download/)两个版本随便下
   ![QGIS download](https://img.linkcf.top/imgcenter/2024/10/f474c508bc3a678cdc3b0d8d148eae63.png)
2. [GIMP](https://www.gimp.org/downloads/)点击黄色图标下载
   ![GIMP download](https://img.linkcf.top/imgcenter/2024/10/ad2ded8b30bd30a9f36d8950f420f3bb.png)
3. [NASA Heightmap](https://visibleearth.nasa.gov/images/73934/topography)下载所有GeoTIFF文件
   ![Heightmap](https://img.linkcf.top/imgcenter/2024/10/97d4e82ca3bf5cbf8127db0a6c817e68.png)
4. [Natural Earth](https://www.naturalearthdata.com/)点击 **Downloads** 下载矢量文件
   ![Natural Earth](https://img.linkcf.top/imgcenter/2024/10/bee3094534dcac4fd1a7502f8e33f2cd.png) 点击 **Physical**
   ![矢量文件](https://img.linkcf.top/imgcenter/2024/10/b54d99577ca4b38a566427cca9925659.png) 找到 **rivers&lakes** 下载
   ![rivers & lakes](https://img.linkcf.top/imgcenter/2024/10/627eeaf50b99c6b0aaa48dd2f668485a.png) 退回去找到 **cultrual** 下载
   ![cultural](https://img.linkcf.top/imgcenter/2024/10/9566b4035033058e00c8d617251dbb65.png) 下载 **countries**
   ![countries](https://img.linkcf.top/imgcenter/2024/10/f4e7a9e0748395476d2ca0fcf8b082de.png)

## 开始

1. 打开 **QGIS**
   ![blank Qgis](https://img.linkcf.top/imgcenter/2024/10/1325471e872127efcae48786c231538a.png)
2. 可以看到左边有计算机的盘符，找到下载的 **NASA Hheightmap** 文件，拖到下面的空白处
   ![nasa heightmap](https://img.linkcf.top/imgcenter/2024/10/c11eb6646ac61f01ff77867afca201a5.png)
3. 当然，你也可以在文件夹里就拖拽到QGIS
   ![拖拽](https://img.linkcf.top/imgcenter/2024/10/d54e209d321da677fcff5ae14e7d2817.png)
4. 点击 **栅格-->杂项-->合并**
   ![](https://img.linkcf.top/imgcenter/2024/10/fd9b8e085c476102e25bc83ff94cc46a.png)
5. 点击输入图层右边的选项
   ![点击输入图层右边的选项](https://img.linkcf.top/imgcenter/2024/10/000df717142e6e0ed582277e8240912b.png)
6. 点击全选
   ![点击全选](https://img.linkcf.top/imgcenter/2024/10/ca4f9a58aecb0bf8234c3c76362d56d3.png)
7. 点击箭头返回
   ![点击箭头返回](https://img.linkcf.top/imgcenter/2024/10/829f6908cdf2bad39b9e0f35c79a1ff0.png)
8. 输出数据类型选择 **int8**
   ![输出数据类型选择int8](https://img.linkcf.top/imgcenter/2024/10/ce556d53969afcca30a071dc1066ef48.png)
   ![输出数据类型选择int8](https://img.linkcf.top/imgcenter/2024/10/4d5918e88485f2598c066522019a68c4.png)
9. 合并输出选择保存到文件，选择一个地方保存，文件名字随意，然后点击运行
   ![合并输出选择保存到文件](https://img.linkcf.top/imgcenter/2024/10/fb60144d07ceb5ec23b6a7f5ed9042e0.png)
   ![合并输出选择保存到文件](https://img.linkcf.top/imgcenter/2024/10/96a255c8d9433f6f36d11f78db7dea9a.png)
10. 合并完成，完成之后，之前的几个栅格文件就没用了，可以移除掉，当然不移除也可以，把前面的勾勾掉，就不显示在右侧了
    ![合并完成](https://img.linkcf.top/imgcenter/2024/10/64d7c5d21a4abf9a0287cbf65377d9d9.png)
    ![移除](https://img.linkcf.top/imgcenter/2024/10/bcd657c8e004cc4dd05c34ea37ecc750.png)
11. 把之前下载的 **countries，lakes，rivers** 压缩包解压，选择其中的 **shp** 文件，拖到QGIS里
    ![shp](https://img.linkcf.top/imgcenter/2024/10/e68f81349e914ea64c91f06f94061c3d.png)

12. 选择右下角的 **epsg:4326** ，过滤那里输入 **3035** ，在下面的坐标系中选择 **3035** ，点击 **Apply** ，可以发现，投影变了，最后点击 **OK**
    ![epsg4326](https://img.linkcf.top/imgcenter/2024/10/d8fc3a73fb4d8c194a03e443334a03ea.png)
    ![3035](https://img.linkcf.top/imgcenter/2024/10/03f3827f126ccd0127d7eae92061bde1.png)
    ![apply](https://img.linkcf.top/imgcenter/2024/10/5b8e1ea74015cd2078290c3dd9e322f7.png)

13. 点击 **栅格-->投影-->重投影** ，选择合并后的栅格文件，源CRS选择 **4326** ，目标CRS选择 **3035** ，选个地方保存。运行。运行之时会有一系列报错，这个不用管。
    ![重投影](https://img.linkcf.top/imgcenter/2024/10/de049364c73ab1f353f4725a1c695741.png)
    ![重投影](https://img.linkcf.top/imgcenter/2024/10/8a6d7e8533c098c829a2b854f864bcf3.png)
    ![Error](https://img.linkcf.top/imgcenter/2024/10/8ca300019b68a4f4571ee5aaecbac6e2.png)
14. 点击 **矢量-->数据管理工具-->重投影图层** ，有三个图层，为每一个图层进行转换，目标CRS为 **3035** ，保存为shp文件
    ![矢量](https://img.linkcf.top/imgcenter/2024/10/f8c6247fc5f458ded1caf182ae76a893.png)
    ![转换](https://img.linkcf.top/imgcenter/2024/10/d71fe3e5fbe300c927d1baf7529a6284.png)
15. 转换完成
    ![转换完成](https://img.linkcf.top/imgcenter/2024/10/391310e2f6cbdf59b0c4c983e66dc4ce.png)

16. 我们分别为各个图层创建 **PNG** 文件，去掉图层左边的勾，先让一个图层显示。点击下面的比例尺设置为 **1:10000000** ，点击左上角 **工程-->导入/导出-->导出地图为图像** ，由于显示的是 **rivers** 图层，那么这里的图层也选择 **rivers** 图层，分辨率选择 **200** ，然后 **save**，宽度和高度不用管。选择一个地方保存。
    ![导出](https://img.linkcf.top/imgcenter/2024/10/388247c3c1ffc8c274a80048c2858d04.png)
    ![rivers](https://img.linkcf.top/imgcenter/2024/10/92331d5a23e14623ab6c70487740a116.png)
    ![运行](https://img.linkcf.top/imgcenter/2024/10/11289b5ebeecc3e82e6e4484f259c425.png)
17. 按照同样的步骤给其它图层导出为 **PNG**
    ![导出](https://img.linkcf.top/imgcenter/2024/10/4569abd660ab0356c9b9e86aa555744f.png)
18. 编写python脚本，删除PNG里的rgb值为 255 255 255的像素，把其它像素rgb值设为 0 0 0，作用于lakes和rivers图片。[Python地址](https://www.python.org/)，pip安装命令： `pip install numpy pillow`

```
from tkinter import Tk, filedialog
from PIL import Image
import numpy as np

# 增加 PIL 的图像大小限制
Image.MAX_IMAGE_PIXELS = None

def process_png(input_path):
    # 打开PNG文件
    img = Image.open(input_path)
    img = img.convert("RGBA")
    data = np.array(img)

    # 创建一个布尔掩码，找到需要处理的像素
    mask_white = (data[:, :, :3] == [255, 255, 255]).all(axis=2)
    mask_non_white = ~mask_white

    # 将白色像素设为透明
    data[mask_white] = [255, 255, 255, 0]

    # 将非白色像素改为 (0, 0, 0)
    data[mask_non_white] = [0, 0, 0, 255]

    # 创建处理后的图像
    processed_img = Image.fromarray(data, 'RGBA')
    output_path = input_path.replace(".png", "_processed.png")
    processed_img.save(output_path, "PNG")

# 创建一个Tkinter根窗口并隐藏它
root = Tk()
root.withdraw()

# 打开文件对话框，选择PNG文件
file_path = filedialog.askopenfilename(filetypes=[("PNG files", "*.png")])

# 处理选中的文件
if file_path:
    process_png(file_path)
    print(f"处理完成：{file_path.replace('.png', '_processed.png')}")

print("所有文件处理完成。")

```

19. 写一个python脚本，删除rgb为255 255 255的像素，将其它像素rgb设为41 41 41，作用于countries.png

```
from tkinter import Tk, filedialog
from PIL import Image
import numpy as np

# 增加 PIL 的图像大小限制
Image.MAX_IMAGE_PIXELS = None

def process_png(input_path):
    # 打开PNG文件
    img = Image.open(input_path)
    img = img.convert("RGBA")
    data = np.array(img)

    # 创建一个布尔掩码，找到需要处理的像素
    mask_white = (data[:, :, :3] == [255, 255, 255]).all(axis=2)
    mask_non_white = ~mask_white

    # 将白色像素设为透明
    data[mask_white] = [255, 255, 255, 0]

    # 将非白色像素改为 (41, 41, 41)
    data[mask_non_white] = [41, 41, 41, 255]

    # 创建处理后的图像
    processed_img = Image.fromarray(data, 'RGBA')
    output_path = input_path.replace(".png", "_processed.png")
    processed_img.save(output_path, "PNG")

# 创建一个Tkinter根窗口并隐藏它
root = Tk()
root.withdraw()

# 打开文件对话框，选择PNG文件
file_path = filedialog.askopenfilename(filetypes=[("PNG files", "*.png")])

# 处理选中的文件
if file_path:
    process_png(file_path)
    print(f"处理完成：{file_path.replace('.png', '_processed.png')}")

print("所有文件处理完成。")

```

20. 写一个python脚本，删除rgb为0 0 0的像素，作用与heightmap_origin.png

```
from tkinter import Tk, filedialog
from PIL import Image
import numpy as np

# 增加 PIL 的图像大小限制
Image.MAX_IMAGE_PIXELS = None

def process_png(input_path):
    # 打开PNG文件
    img = Image.open(input_path)
    img = img.convert("RGBA")
    data = np.array(img)

    # 创建一个布尔掩码，找到需要处理的像素
    mask_black = (data[:, :, :3] == [0, 0, 0]).all(axis=2)

    # 将黑色像素设为透明
    data[mask_black] = [255, 255, 255, 0]

    # 创建处理后的图像
    processed_img = Image.fromarray(data, 'RGBA')
    output_path = input_path.replace(".png", "_processed.png")
    processed_img.save(output_path, "PNG")

# 创建一个Tkinter根窗口并隐藏它
root = Tk()
root.withdraw()

# 打开文件对话框，选择PNG文件
file_path = filedialog.askopenfilename(filetypes=[("PNG files", "*.png")])

# 处理选中的文件
if file_path:
    process_png(file_path)
    print(f"处理完成：{file_path.replace('.png', '_processed.png')}")

print("所有文件处理完成。")

```

21. 用gimp打开其中一张处理过的png，点击 **文件-->作为图层打开** ，打开其它处理过的png，countries.png要在最下面
    ![打开](https://img.linkcf.top/imgcenter/2024/10/9f95f3ad18c70ff7bbc276996802dabc.png)
    ![图层](https://img.linkcf.top/imgcenter/2024/10/38b667cb095fe7f8820c253f37114a44.png)
22. 用移动工具移动图层位置，然后裁剪分辨率。我这里使用了[PhotoGIMP](https://github.com/Diolinux/PhotoGIMP)插件，快捷键和PS一样，原本快捷键是 **M** 和 **shift + c** 。
    ![移动](https://img.linkcf.top/imgcenter/2024/10/187f472c8f1203fbc475a845e7e7bf39.png)
    ![裁剪](https://img.linkcf.top/imgcenter/2024/10/8e4d9ba18a78ad1c1df2e9fe5d4d3dbf.png)
23. 稍微裁剪一下边边角角，然后为 **countries.png 和 origin.png** 单独导出。名称随意， **去掉保存背景色** ，**勾上保存透明像素的颜色值** ，**选择8位RGBA**
    ![导出为](https://img.linkcf.top/imgcenter/2024/10/5f4ba4cbaeb6dad96e93ee63cffa03bf.png)
    ![导出为](https://img.linkcf.top/imgcenter/2024/10/c2dabc4047cf58312a8f7431d1051f60.png)
24. 写python脚本，合并两张图片，逻辑是合并两张png图片，RGB值相加，透明像素不参与计算，如果最终计算出来的RGB值大于255 255 255，那么就输出为255 255 255，为了提升效率，这里缩放了一半像素

```
import numpy as np
from PIL import Image
import os
from tkinter import Tk
from tkinter.filedialog import askopenfilename

Image.MAX_IMAGE_PIXELS = None  # 移除限制

def merge_images(image_path1, image_path2, output_path, scale_factor=0.5):
    # 打开两张图片并按比例缩放
    img1 = Image.open(image_path1).convert("RGBA")
    img2 = Image.open(image_path2).convert("RGBA")

    # 缩放图片
    img1 = img1.resize((int(img1.width * scale_factor), int(img1.height * scale_factor)), Image.LANCZOS)
    img2 = img2.resize((int(img2.width * scale_factor), int(img2.height * scale_factor)), Image.LANCZOS)

    # 确保两张图片的尺寸相同
    if img1.size != img2.size:
        raise ValueError("两张图片必须具有相同的尺寸")

    # 将图片转换为numpy数组
    arr1 = np.array(img1)
    arr2 = np.array(img2)

    # 创建一个空的合并数组
    merged_arr = np.zeros_like(arr1)

    # 直接相加RGB通道，并处理溢出
    for i in range(arr1.shape[0]):  # 遍历每一行
        for j in range(arr1.shape[1]):  # 遍历每一列
            r = int(arr1[i, j, 0]) + int(arr2[i, j, 0])
            g = int(arr1[i, j, 1]) + int(arr2[i, j, 1])
            b = int(arr1[i, j, 2]) + int(arr2[i, j, 2])

            # 如果RGB值都大于255，则设置为255 255 255
            if r > 255 and g > 255 and b > 255:
                merged_arr[i, j, :3] = [255, 255, 255]
            else:
                merged_arr[i, j, :3] = [min(r, 255), min(g, 255), min(b, 255)]

    # 合并透明度通道
    merged_arr[:, :, 3] = np.maximum(arr1[:, :, 3], arr2[:, :, 3])  # 透明度可以根据需要进行合并

    # 保存合并后的图片
    Image.fromarray(merged_arr.astype(np.uint8), "RGBA").save(output_path, "PNG")



def main():
    # 创建一个隐藏的Tkinter窗口
    Tk().withdraw()

    # 选择第一张图片
    print("请选择第一张图片...")
    image_path1 = askopenfilename(title="选择第一张图片", filetypes=[("PNG files", "*.png")])
    if not image_path1:
        print("未选择文件，程序结束。")
        return

    # 选择第二张图片
    print("请选择第二张图片...")
    image_path2 = askopenfilename(title="选择第二张图片", filetypes=[("PNG files", "*.png")])
    if not image_path2:
        print("未选择文件，程序结束。")
        return

    # 获取输入文件夹
    input_folder = os.path.dirname(image_path1)

    # 设置输出文件名和路径
    output_filename = "merged_image.png"
    output_path = os.path.join(input_folder, output_filename)

    # 合并图片
    merge_images(image_path1, image_path2, output_path)
    print(f"合并完成，输出文件保存为: {output_path}")

if __name__ == "__main__":
    main()

```

25. 合并之后的png导入到GIMP中，右键图层，找到缩放图层，然后在高度宽度任意一个 **\*2**
    ![导入](https://img.linkcf.top/imgcenter/2024/10/a4bbdeddbc09713347b64c86ac820913.png)
26. 选择一个图层，右键合并可见图层，选择裁剪至图像
    ![合并](https://img.linkcf.top/imgcenter/2024/10/31736a9c9926c1191463f349450f563e.png)
    ![裁剪](https://img.linkcf.top/imgcenter/2024/10/adf01dde30604df5b53547d0db1ab35b.png)
27. 删除剩下的两个图层，设置前景色为0 0 0，新建一个海洋图层，填充为前景色，放到最下面，然后合并图层
    ![前景色](https://img.linkcf.top/imgcenter/2024/10/65ddfe626ed4798f39940494e4ca86f5.png)
    ![海洋](https://img.linkcf.top/imgcenter/2024/10/837d975e2f7eab49efcb4cb4297de00e.png)
    ![合并](https://img.linkcf.top/imgcenter/2024/10/2bf829768f3792c6cb68157dc93f7df9.png)
28. 裁剪到合适的地方，然后选择 **图层-->缩放图像** ，高度选择 **4096** ，宽度会跟着变化，中途会有一段时间未响应，等一会就好了。选择 **图像-->画布大小** ，宽度填写 **8192** ，填充选择透明，然后改变大小。
    ![缩放](https://img.linkcf.top/imgcenter/2024/10/297c91906dc2ac966d0cfaa592e2c463.png)
    ![画布](https://img.linkcf.top/imgcenter/2024/10/a77da56ff2a7fc3181003ea17162dd71.png)
    ![画布](https://img.linkcf.top/imgcenter/2024/10/9dbdb40c6c53983f1e370b37f50bf54d.png)
    ![结果](https://img.linkcf.top/imgcenter/2024/10/ba3772015fce88ca03e2978fd23a57bb.png)
29. 新建图层，以0 0 0填充，然后合并图层
    ![新建](https://img.linkcf.top/imgcenter/2024/10/57a39103c83cb72ebfc0a95587c59171.png)
30. 导出为 **8位灰阶** ，不保存透明像素的颜色值，创建一个mod，ir启动器属性添加 **-mapeditor**
    ![导出](https://img.linkcf.top/imgcenter/2024/10/03304a877e61a93df6a5f3e1437a400e.png)
    ![mapeditor](https://img.linkcf.top/imgcenter/2024/10/b0eabc48542f1ed50ee87f248fa34678.png)
