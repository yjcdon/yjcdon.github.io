# yjcdon 的像素工坊

网站：<https://yjcdon.github.io/>

个人主页采用泰拉瑞亚游戏素材构成的像素场景，保留个人简介和开源工具两大内容区：访客先在天空场景阅读简介，再向下滚动查看开源工具。现有工具文案、真实截图、下载链接和 GitHub 入口保持有效。

## 页面与交互

- 首屏：天空背景、偏左上的个人介绍与右侧太阳/月亮；名字保持同一行，显示任职情况、产品经理与 AI 全栈开发方向及邮箱。
- 开源工具：桌面端左侧是工具目录，右侧展示所选工具。飞书项目 MCP 卡片提供安装、下载和资源占用对比图。Ferry Drive 标为跨平台，浏览器扩展入口使用像素风 Chrome 图标，展开后可单独查看倍速、F4ToSearch4win、X 和抖音扩展。Typora Markmap Plus 和蓝牙音箱静音保活也在目录中独立展示。
- F4 划词搜索：Fluor4me 位于 MacRight 后，Windows 版 F4ToSearch4win 位于「浏览器扩展」分组。目录使用各项目的原图标，详情展示按 F4 搜索选中文字，以及从四步缩为一步的对比，并提供下载入口。
- 作品预览：有多张素材时，可用轮播按钮切换，也可在图片上横向滚动、按住拖动或用手指横划。触控板和触屏使用浏览器原生横向滚动，并自动对齐到整张图片；纵向手势用于滚动页面。横滑在首尾图片处停止，左右按钮支持首尾循环。鼠标拖动后松开可切换图片，单击图片查看原图。预览区域尺寸固定，系统启用减少动态效果时按钮直接切换。Ferry Drive 展示百度网盘、夸克网盘和传输设置截图，Markmap Plus 展示 Typora 文档与导图、导出菜单截图。抖音扩展依次展示下载视频、提取文案、插件设置（上）与豆包提取结果（下）的合成图，以及精选页的「不感兴趣」按钮。
- 桌面端右侧详情按内容确定高度，页脚跟随工具区收尾。左侧目录与详情等高，超出的条目在目录内滚动，滚动条隐藏。指针在目录内滚到顶或底时，滚动停在栏内。内容较少时在卡片内垂直居中。切换工具时，如果固定顶栏挡住了工具区顶部，页面会将工具区移回可见位置。
- X 插件展示原版与启用插件后的时间线对比，说明如何在帖子上查看关注数和粉丝数、关注或取关、屏蔽博主、标记「不感兴趣」以及用 Grok 翻译。
- 支持中英文，首次访问跟随浏览器语言，手动选择保存在本机。页面固定暗色，不再读取或写入主题偏好；首屏固定显示月亮。
- 窄屏点击当前工具展开带图标的目录，选中项带勾，浏览器扩展可单独展开。选择后收起目录，详情和图片纵向排列。
- 截图按原比例显示，点击进入图片弹窗，支持关闭按钮、Escape、点击遮罩关闭及原图入口。GitHub 在新标签打开，邮箱使用 mailto 链接。

## 加载与字体

使用 Svelte 5、SvelteKit 和 TypeScript，构建时预渲染为静态 HTML，交互由客户端组件接管。主要标题、导航、按钮和短标语使用本地像素字体，长说明使用系统字体。

`src/lib/assets/pixel-ui.woff2` 是 Fusion Pixel 12px 简体中文字体的本页子集，约 13 KB。首屏使用官方 Wiki 一张透明云朵 PNG，以及按主题切换的太阳/月亮，保持原图内容；工位入口使用应用图标。应用图标在工具区接近视野时统一加载；工具截图只加载当前工位，其他截图在选中后加载。

修改中英文文案后，应重新生成字体子集，避免新增文字缺字：

```sh
uv run --with fonttools --with brotli scripts/subset-pixel-font.py
```

脚本从上游下载固定版本 `2026.10.25`，检查字形并生成自托管字体及许可文件；网站访问过程无需下载上游字体。首次生成需联网。构建自动生成脚本、样式和字体的哈希文件名。

## 开发与发布

使用 Node.js 22.12+ 和 pnpm，执行以下命令。

```sh
pnpm install
pnpm dev
pnpm check
pnpm build
pnpm preview
```

开发预览默认位于 http://localhost:5173，生产构建预览默认位于 http://localhost:4173。构建产物位于 `build/`，可以部署到静态站点服务。

GitHub Pages 的发布来源为 GitHub Actions。推送 `main` 后，`.github/workflows/pages.yml` 执行类型检查、构建，并发布 `build/`。

## 文件与维护

- `src/lib/content.ts` 集中维护工具顺序、分组、中英文文案、图标、链接与截图。新增工具只需添加一个记录。
- `src/routes/+page.svelte` 组织首屏、工具目录和详情，管理语言和工具选择。
- `src/lib/components/ToolGallery.svelte` 负责截图轮播，`ImagePreview.svelte` 负责原图弹窗。
- `src/app.css` 维护像素视觉、响应式布局与减少动态效果适配。
- `static/assets/` 存放原始图片与图标，对应发布后的 `/assets/` 路径。
- `scripts/subset-pixel-font.py` 扫描 Svelte 和 TypeScript 文案，生成像素字体子集。放大镜 emoji 使用系统字体。

## 素材与来源

- 泰拉瑞亚游戏素材来自官方 Wiki <https://terraria.wiki.gg/>，版权归 Re-Logic；逐文件页面与原图地址保存在 `static/assets/terraria/sources.json`。这些素材单独标注来源，不适用字体或图标的开源许可。
- Fusion Pixel Font：<https://github.com/TakWolf/fusion-pixel-font>，SIL OFL 1.1，当前本地子集命名为 YJ Pixel Workshop。上游及组成字体许可保留在 `static/assets/pixel-font-licenses/`。
- `static/assets/ferry-drive-preview.png`：用户提供的 Ferry Drive 夸克网盘文件管理截图。
- `static/assets/previews/connect-connected.png` 和 `static/assets/connect-comparison.png`：用户提供的 miniEasyConnect 已连接界面和资源占用对比。
- `static/assets/macright-context-menu.jpg`：用户提供的 MacRight 右键菜单原图。
- `static/assets/markmap-demo.png` 和 `static/assets/previews/markmap-export-menu.png`：用户提供的 Typora 导图界面和导出菜单截图。
- Ferry、miniEasyConnect、MacRight 图标提取自对应应用；Markmap 图标来自插件默认悬浮按钮。
- `static/assets/speaker-silver.svg`：用户选定的 C 款银灰图标，采用 Tabler Icons 的 device-speaker 符号，许可见 `static/assets/tabler-icons-LICENSE.txt`。
- 其他历史截图和图标保留，当前页面资源引用以 HTML 与 CSS 为准。应用许可及上游关系见各工具仓库。

切换区的三个 PNG 应用图标使用 128 px WebP 缩略图，外观沿用原图，进入工具区时加载。页脚文案为“以物质建设为中心”，个人简介区直接通过导航进入工具区。

所有工具平台标签位于标题下方。

## 首屏素材与字体

首屏使用官方 Wiki 的 Cirrocumulus cloud 5 和 [Moon](https://terraria.wiki.gg/wiki/File:Moon.png) 原图，来源见 `static/assets/terraria/sources.json`。太阳、月亮已逐字节核对官方原图。首屏固定使用 50 × 50 px 的官方月亮原图；太阳、亮色样式、主题切换按钮与主题存储逻辑已移除。小白龙及其动画已移除。简介保留告示牌式衬底，工具区恢复泰拉瑞亚蓝色物品栏、金色选中边框、洞穴纹理背景和绿色下载按钮。


官方 Wiki 标注游戏字体为 [Andy Bold](https://terraria.wiki.gg/wiki/Font)；[微软字体资料](https://learn.microsoft.com/en-us/typography/font-list/andy)列出其拉丁字符集与字体授权入口。首屏通过 `local()` 优先使用设备已安装的 Andy Bold / Andy Pro Bold，没有打包或下载商业字体；未安装或缺少中文字形时使用现有 Fusion Pixel 子集。这不代表所有访客都能看到游戏原版字体，中文原版字体尚未确认。下方工具区字体维持现状。

首屏夜空增加疏密不一的静态像素星点；官方透明云图在月亮下方与首屏底部按原尺寸或整数倍呈现，以较低透明度区分远近。星点与云层均无动画，无额外网络依赖；告示牌、月亮和工具区保持原位置。

工具区标题旁装饰使用官方 Wiki 的透明 Diamond.png，按原图两倍尺寸（36 × 32 px）显示，来源记录于 sources.json。

网页视频长按倍速展示 Chrome / Edge 插件及用户提供的倍率设置截图，并介绍右方向键长按加速与适用网站。插件图标来自其 GitHub 仓库。浏览器扩展统一使用「安装扩展」按钮，网页视频长按倍速和 Make X Great Again 的按钮打开 Chrome 网上应用店。
