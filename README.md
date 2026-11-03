# yjcdon 的个人主页

网站：<https://yjcdon.github.io/>

页面保留个人简介和开源工具两个内容区。个人简介展示任职情况、产品经理与 AI 全栈开发方向及联系方式；工具按 Ferry Plus、miniEasyConnect、MacRight、Typora Markmap Plus、音箱静音保活排序。

## 展示与交互

沿用系统字体、大标题、蓝色主要按钮及深浅色外观，导航使用不透明背景。工具以单项轮播展示，支持工具名称入口、左右按钮、触屏滑动，以及轮播区域获得焦点后的方向键和 Home/End。采用手动切换，方便阅读与查看图片；未展示项退出键盘焦点顺序。布局变化时保持当前工具，动效遵循系统减少动态效果偏好。

工具卡片展示用途、平台、下载和 GitHub 入口。Ferry Plus 介绍为“轻量客户端，统一百度、夸克网盘的文件管理”，下方展示“拒绝臃肿客户端，从我做起”；miniEasyConnect 介绍为“原生 APP，替代 EasyConnect”。工具卡片直接展示截图，相关来源见各工具仓库。截图按原比例完整显示，点击打开原生图片预览弹窗，支持关闭按钮、Escape 和点击遮罩关闭，关闭后恢复触发入口焦点；弹窗提供原图链接。禁用 JavaScript 时图片链接直接打开原图。

全站支持中英文和深浅色。首次访问跟随浏览器语言与系统外观，访客选择保存在本机。GitHub 链接在新标签打开，邮箱使用 mailto 链接。

## 文件与维护

- `index.html`：个人简介、工具内容、链接和图片预览弹窗。
- `styles.css`：实色配色、布局和移动端适配。
- `site.js`：双语文案、轮播、图片预览及显示偏好。
- `assets/`：本地图片和图标。

使用原生 HTML、CSS、JavaScript，无构建步骤、外部字体或运行时 API。文案同时维护 HTML 默认中文及脚本中英文词条；修改静态脚本与样式后更新 HTML 的 `v` 参数。

本地预览：

```sh
python3 -I -m http.server 8765 --bind 127.0.0.1 --directory /Users/yjcdon/mycode/yjcdon.github.io
```

访问 <http://127.0.0.1:8765/>。GitHub Pages 从 main 分支根目录发布，推送前先在本地确认展示效果。

## 素材与来源

- `assets/ferry-files.png`：通过 Computer Use 采集真实应用窗口，已不可逆遮盖文件夹名称、日期和任务数量。仅使用脱敏版本。
- `assets/connect-comparison.png`：用户提供的资源对比原图，完整保留，未裁切、重绘或修改文字。与输入原图 SHA-256 一致。
- `assets/macright-context-menu.jpg`：用户提供的 MacRight 右键菜单截图，按原图复制，未裁切或重绘；支持点击查看原图。
- `assets/markmap-demo.png`：在 Typora 新建展示文档，生成真实思维导图后截图；裁去私人文件侧栏。未使用已有私人文档内容。
- 原有 `assets/ferry-plus.jpg`、`assets/markmap-plus.png` 保留，当前页面不引用。
- 音箱工具当前仅展示文字，尚无 Windows 环境截图。
- `assets/ferry-icon.png`、`assets/connect-icon.png`、`assets/macright-icon.png`：从已安装应用的 AppIcon.icns 提取，保留真实图标外观。
- `assets/markmap-icon.svg`：取自插件 FloatingButton.ts 中的默认悬浮按钮图标，白色圆形表面沿用插件样式。
- `assets/speaker-silver.svg`：用户选定的 C 款银灰图标，使用 Tabler Icons 的 device-speaker 符号，配银灰渐变圆角底。MIT 许可见 `assets/tabler-icons-LICENSE.txt`。原有音箱图标素材保留，当前页面使用 SVG。
- 应用原作者、许可及复用来源以各工具仓库为准，页面保留相关上游链接。
