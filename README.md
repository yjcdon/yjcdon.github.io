# yjcdon 的像素工坊

网站：<https://yjcdon.github.io/>

个人主页采用泰拉瑞亚游戏素材构成的像素场景，保留个人简介和开源工具两大内容区：访客先在天空场景阅读简介，再向下滚动查看开源工具。现有工具文案、真实截图、下载链接和 GitHub 入口保持有效。

## 页面与交互

- 首屏：天空背景、偏左上的个人介绍与右侧太阳/月亮；名字保持同一行，显示任职情况、产品经理与 AI 全栈开发方向及邮箱。
- 开源工具：轮播展示 Ferry Drive、miniEasyConnect、MacRight 和浏览器扩展。Ferry Drive 标为跨平台，浏览器扩展入口使用像素风 Chrome 图标，卡内显示倍速、X 和抖音扩展各自的图标。Typora Markmap Plus 和蓝牙音箱静音保活也在轮播中独立展示。
- 工具支持工位名称选择、左右按钮、触屏滑动、方向键及 Home/End；左右按钮和方向键首尾循环，内容保持手动切换，方便阅读。非当前工具退出键盘焦点顺序。
- 工位选中时播放一次短动画；首屏装饰保持静态，系统减少动态效果偏好下直接切换工具。
- 支持中英文，首次访问跟随浏览器语言，手动选择保存在本机。页面固定暗色，不再读取或写入主题偏好；首屏固定显示月亮。
- 手机端保留正常纵向滚动，工位选择横向滑动，工具详情与截图上下排列。
- 截图按原比例显示，点击进入图片弹窗，支持关闭按钮、Escape、点击遮罩关闭及原图入口。GitHub 在新标签打开，邮箱使用 mailto 链接。

## 加载与字体

使用原生 HTML、CSS 和少量 JavaScript，无游戏引擎、运行时 API 或在线字体依赖。主要标题、导航、按钮和短标语使用本地像素字体，长说明使用系统字体。

`assets/pixel-ui.woff2` 是 Fusion Pixel 12px 简体中文字体的本页子集，约 10 KB。首屏使用官方 Wiki 一张透明云朵 PNG，以及按主题切换的太阳/月亮，保持原图内容；工位入口使用应用图标。应用图标在工具区接近视野时统一加载；工具截图只加载当前工位，其他截图在选中后加载。

修改中英文文案后，应重新生成字体子集，避免新增文字缺字：

```sh
uv run --with fonttools --with brotli scripts/subset-pixel-font.py
```

脚本从上游下载固定版本 `2026.10.25`，检查字形并生成自托管字体及许可文件；网站访问过程无需下载上游字体。首次生成需联网。静态脚本、样式或字体更新时，同步更新 `index.html` 中的缓存版本。

## 文件与维护

- `index.html`：两个内容区、场景装饰、工位入口和图片弹窗。
- `styles.css`：像素视觉、固定暗色、动画、响应式布局及减少动态效果适配。
- `site.js`：双语、语言偏好、工位切换、图片按需加载和弹窗。
- `assets/terraria/`：森林、洞穴、向导、家具、方块、太阳和月亮等游戏素材；逐个来源见 `sources.json`。
- `scripts/subset-pixel-font.py`：生成字体子集。

可直接打开 `index.html` 本地预览。GitHub Pages 从 main 分支根目录发布。

## 素材与来源

- 泰拉瑞亚游戏素材来自官方 Wiki <https://terraria.wiki.gg/>，版权归 Re-Logic；逐文件页面与原图地址保存在 `assets/terraria/sources.json`。这些素材单独标注来源，不适用字体或图标的开源许可。
- Fusion Pixel Font：<https://github.com/TakWolf/fusion-pixel-font>，SIL OFL 1.1，当前本地子集命名为 YJ Pixel Workshop。上游及组成字体许可保留在 `assets/pixel-font-licenses/`。
- `assets/ferry-drive-preview.png`：用户提供的 Ferry Drive 夸克网盘文件管理截图。
- `assets/connect-comparison.png`：用户提供的资源对比原图。
- `assets/macright-context-menu.jpg`：用户提供的 MacRight 右键菜单原图。
- `assets/markmap-demo.png`：新建示例文档生成的真实导图截图。
- Ferry、miniEasyConnect、MacRight 图标提取自对应应用；Markmap 图标来自插件默认悬浮按钮。
- `assets/speaker-silver.svg`：用户选定的 C 款银灰图标，采用 Tabler Icons 的 device-speaker 符号，许可见 `assets/tabler-icons-LICENSE.txt`。
- 其他历史截图和图标保留，当前页面资源引用以 HTML 与 CSS 为准。应用许可及上游关系见各工具仓库。

切换区的三个 PNG 应用图标使用 128 px WebP 缩略图，外观沿用原图，进入工具区时加载。页脚文案为“以物质建设为中心”，个人简介区直接通过导航进入工具区。

所有工具平台标签位于标题下方。

手动选择工具时直接定位目标卡片，再执行 160 ms 的淡入。首尾循环和跨项选择均不滚过中间卡片；快速切换会先结束上一段淡入，减少动态效果偏好下直接切换。触屏滑动继续使用原生滚动与吸附。


## 首屏素材与字体

首屏使用官方 Wiki 的 Cirrocumulus cloud 5 和 [Moon](https://terraria.wiki.gg/wiki/File:Moon.png) 原图，来源见 `assets/terraria/sources.json`。太阳、月亮已逐字节核对官方原图。首屏固定使用 50 × 50 px 的官方月亮原图；太阳、亮色样式、主题切换按钮与主题存储逻辑已移除。小白龙及其动画已移除。简介保留告示牌式衬底，工具区恢复泰拉瑞亚蓝色物品栏、金色选中边框、洞穴纹理背景和绿色下载按钮。


官方 Wiki 标注游戏字体为 [Andy Bold](https://terraria.wiki.gg/wiki/Font)；[微软字体资料](https://learn.microsoft.com/en-us/typography/font-list/andy)列出其拉丁字符集与字体授权入口。首屏通过 `local()` 优先使用设备已安装的 Andy Bold / Andy Pro Bold，没有打包或下载商业字体；未安装或缺少中文字形时使用现有 Fusion Pixel 子集。这不代表所有访客都能看到游戏原版字体，中文原版字体尚未确认。下方工具区字体维持现状。

首屏夜空增加疏密不一的静态像素星点；官方透明云图在月亮下方与首屏底部按原尺寸或整数倍呈现，以较低透明度区分远近。星点与云层均无动画，无额外网络依赖；告示牌、月亮和工具区保持原位置。

工具区标题旁装饰使用官方 Wiki 的透明 Diamond.png，按原图两倍尺寸（36 × 32 px）显示，来源记录于 sources.json。

网页视频长按倍速展示 Chrome / Edge 插件及用户提供的倍率设置截图，安装说明链接到插件发布页；插件图标来自其 GitHub 仓库。
