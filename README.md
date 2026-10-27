# yjcdon 的个人主页

网站：<https://yjcdon.github.io/>

页面只有两个主要内容区：**个人简介**、**定制化开源工具**。展示 Ferry Plus、MacRight、miniEasyConnect、Typora Markmap Plus 和音箱静音保活，提供用途、平台、使用说明及下载入口。

视觉采用 Apple 官网风格：系统字体、居中大标题、蓝色胶囊按钮、半透明固定导航，以及黑色主打工具展示区。个人简介占满首屏，问候语与名字在同一行显示，简介下方不设操作按钮。工具使用单项轮播，支持左右按钮、底部切换点、手机滑动，以及轮播区域获得焦点后的方向键和 Home/End 键。到达首尾时禁用对应方向按钮；未展示的工具退出键盘焦点顺序。切换动效与平滑滚动遵循系统的减少动态效果设置。页面不设页脚。

全站支持中文和英文、浅色和深色外观。首次访问时语言跟随浏览器，外观跟随系统；顶部按钮可切换，并在本机保存选择。所有 GitHub 链接在新标签页打开。简介邮箱使用 `mailto:` 链接。

## 文件与维护

- `index.html`：个人简介、工具内容和链接。
- `styles.css`：布局、配色和移动端适配。
- `site.js`：中英文文案、轮播交互、语言和外观切换、本机偏好设置。
- `assets/`：网站使用的本地图片和图标。

使用原生 HTML、CSS 和 JavaScript，无构建步骤、外部字体或运行时 API 请求。直接打开 `index.html` 即可查看。禁用 JavaScript 时显示中文正文，外观跟随系统。工具介绍手动维护，下载按钮指向各仓库的最新 Release 页面，插件入口指向安装说明。

修改文案时，同时更新 `index.html` 中的默认中文和 `site.js` 中对应的中英文词条；词条由 `data-i18n` 及其属性变体关联。页面标题为“yjcdon · 个人主页”或“yjcdon · Personal Website”，网站图标为 YJ。

GitHub Pages 从 `main` 分支根目录发布。修改主分支内容会触发网站更新。

修改样式、脚本或网站图标时，同时更新 `index.html` 对应链接中的 `v` 参数，让已访问过网站的浏览器获取新版资源。

## 素材与来源

- `assets/ferry-plus.jpg` 来自 [Ferry Plus 的界面截图](https://github.com/yjcdon/ferry-plus/blob/main/.github/screenshot-v3.jpg)，用于展示该工具。
- `assets/markmap-plus.png` 来自 [Typora Markmap Plus 的插件预览图](https://github.com/yjcdon/typora-plugin-markmap-plus/blob/main/assets/插件预览图.png)，用于展示该插件；截图内容以原仓库为准。
- 网站字母图标和线条图形由本站绘制。
- 工具的原始作者、许可证与复用来源以各工具仓库声明为准，页面保留上游链接。
