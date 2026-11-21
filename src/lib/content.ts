export type Language = 'zh' | 'en';

export type Localized = { zh: string; en: string };

export type ToolImage = {
  src: string;
  width: number;
  height: number;
  alt: Localized;
  label: Localized;
};

export type Tool = {
  id: string;
  name: Localized;
  navName: Localized;
  icon: string;
  extension: boolean;
  platform?: Localized;
  paragraphs: { kind: 'tagline' | 'description'; lines: Localized[] }[];
  links: { href: string; label: Localized; primary: boolean }[];
  images: ToolImage[];
};

type Messages = {
  pageTitle: string;
  pageDescription: string;
  skip: string;
  homeLabel: string;
  navigation: string;
  preferences: string;
  switchLanguage: string;
  introLabel: string;
  toolsLabel: string;
  greeting: string;
  employment: string;
  background: string;
  contactLabel: string;
  toolsHeading: string;
  browserExtensions: string;
  toolGallery: string;
  toolNavigation: string;
  showTool: string;
  toolStatus: string;
  closeImage: string;
  imagePreview: string;
  viewOriginal: string;
  worldFooter: string;
  previousImage: string;
  nextImage: string;
};

/** Shared labels for the page, navigation, gallery and image dialog. */
export const messages: Record<Language, Messages> = {
  zh: {
    pageTitle: "yjcdon · 个人主页",
    pageDescription: "Hi，我是 yjcdon。Java 后端出身，向产品经理与 AI 全栈开发方向发展。分享自己日常使用的开源工具。",
    skip: "跳到正文",
    homeLabel: "yjcdon，返回个人简介",
    navigation: "主导航",
    preferences: "显示设置",
    switchLanguage: "Switch to English",
    introLabel: "个人简介",
    toolsLabel: "开源工具",
    greeting: "Hi，我是 yjcdon",
    employment: "目前就职于制造业龙头企业",
    background: "Java 后端出身，向产品经理与 AI 全栈开发方向发展",
    contactLabel: "联系方式：",
    toolsHeading: "开源工具",
    browserExtensions: "浏览器扩展",
    toolGallery: "开源工具展示",
    toolNavigation: "切换工具",
    showTool: "查看 {name}",
    toolStatus: "正在展示：{name}，第 {current} 个，共 {total} 个。",
    closeImage: "关闭图片",
    imagePreview: "图片预览",
    viewOriginal: "查看原图",
    worldFooter: "以物质建设为中心",
    previousImage: "上一张图",
    nextImage: "下一张图"
  },
  en: {
    pageTitle: "yjcdon · Personal Website",
    pageDescription: "Hi, I'm yjcdon. From Java backend development toward product management and AI-assisted full-stack development. Explore the open-source tools I use every day.",
    skip: "Skip to content",
    homeLabel: "yjcdon, back to introduction",
    navigation: "Main navigation",
    preferences: "Display preferences",
    switchLanguage: "切换到中文",
    introLabel: "About me",
    toolsLabel: "Open-source tools",
    greeting: "Hi, I'm yjcdon",
    employment: "Currently at a leading manufacturing company",
    background: "From Java backend development toward product management and AI-assisted full-stack development",
    contactLabel: "Contact: ",
    toolsHeading: "Open-source tools",
    browserExtensions: "Browser extensions",
    toolGallery: "Open-source tool gallery",
    toolNavigation: "Choose a tool",
    showTool: "View {name}",
    toolStatus: "Showing {name}, tool {current} of {total}.",
    closeImage: "Close image",
    imagePreview: "Image preview",
    viewOriginal: "View original",
    worldFooter: "Focus on material development",
    previousImage: "Previous image",
    nextImage: "Next image"
  }
};

/** Each entry defines one tool across both navigation layouts and its detail card. */
export const tools: Tool[] = [
  {
    id: "ferry",
    name: { zh: "Ferry Drive", en: "Ferry Drive" },
    navName: { zh: "Ferry Drive", en: "Ferry Drive" },
    icon: "/assets/ferry-nav.webp",
    extension: false,
    platform: { zh: "跨平台", en: "Cross-platform" },
    paragraphs: [
      {
        kind: "description",
        lines: [
          { zh: "轻量客户端，统一百度、夸克网盘的文件管理", en: "A lightweight app for unified file management across Baidu and Quark cloud drives" }
        ]
      },
      {
        kind: "description",
        lines: [
          { zh: "拒绝臃肿客户端，从我做起", en: "Saying no to bloated clients starts with me" }
        ]
      }
    ],
    links: [
      {
        href: "https://github.com/yjcdon/ferry-drive/releases/latest",
        label: { zh: "下载应用", en: "Download" },
        primary: true
      },
      {
        href: "https://github.com/yjcdon/ferry-drive",
        label: { zh: "GitHub", en: "GitHub" },
        primary: false
      }
    ],
    images: [
      {
        src: "/assets/previews/ferry-baidu.png",
        width: 1920,
        height: 1280,
        alt: { zh: "Ferry Drive 百度网盘文件管理界面", en: "Ferry Drive Baidu Netdisk file browser" },
        label: { zh: "查看 Ferry Drive 百度网盘界面原图", en: "View the full Ferry Drive Baidu Netdisk screenshot" }
      },
      {
        src: "/assets/ferry-drive-preview.png",
        width: 1920,
        height: 1280,
        alt: { zh: "Ferry Drive 夸克网盘文件管理界面", en: "Ferry Drive Quark Drive file browser" },
        label: { zh: "查看 Ferry Drive 界面原图", en: "View the full Ferry Drive screenshot" }
      },
      {
        src: "/assets/previews/ferry-transfer-settings.png",
        width: 960,
        height: 900,
        alt: { zh: "Ferry Drive 的并发传输和限速设置", en: "Ferry Drive transfer settings for concurrency and rate limits" },
        label: { zh: "Ferry Drive 的并发传输和限速设置", en: "Ferry Drive transfer settings for concurrency and rate limits" }
      }
    ]
  },
  {
    id: "connect",
    name: { zh: "miniEasyConnect", en: "miniEasyConnect" },
    navName: { zh: "miniEasyConnect", en: "miniEasyConnect" },
    icon: "/assets/connect-nav.webp",
    extension: false,
    platform: { zh: "macOS · Apple Silicon", en: "macOS · Apple Silicon" },
    paragraphs: [
      {
        kind: "tagline",
        lines: [
          { zh: "原生 APP，替代 EasyConnect", en: "A native app to replace EasyConnect" }
        ]
      }
    ],
    links: [
      {
        href: "https://github.com/yjcdon/miniEasyConnect/releases/latest",
        label: { zh: "下载应用", en: "Download" },
        primary: true
      },
      {
        href: "https://github.com/yjcdon/miniEasyConnect",
        label: { zh: "GitHub", en: "GitHub" },
        primary: false
      }
    ],
    images: [
      {
        src: "/assets/previews/connect-connected.png",
        width: 960,
        height: 1144,
        alt: { zh: "miniEasyConnect 已连接界面与连接记录", en: "miniEasyConnect connected status and saved connections" },
        label: { zh: "miniEasyConnect 已连接界面与连接记录", en: "miniEasyConnect connected status and saved connections" }
      },
      {
        src: "/assets/connect-comparison.png",
        width: 1518,
        height: 1016,
        alt: { zh: "用户提供的 EasyConnect 与 miniEasyConnect 资源对比原图，平均内存分别为 697.33 MB 和 60.73 MB", en: "Original user-provided comparison: EasyConnect averages 697.33 MB of memory and miniEasyConnect 60.73 MB" },
        label: { zh: "查看 miniEasyConnect 资源对比原图", en: "View the original miniEasyConnect resource comparison" }
      }
    ]
  },
  {
    id: "macright",
    name: { zh: "MacRight", en: "MacRight" },
    navName: { zh: "MacRight", en: "MacRight" },
    icon: "/assets/macright-nav.webp",
    extension: false,
    platform: { zh: "macOS · Apple Silicon", en: "macOS · Apple Silicon" },
    paragraphs: [
      {
        kind: "tagline",
        lines: [
          { zh: "常用操作，右键完成", en: "Everyday actions, a right-click away" }
        ]
      },
      {
        kind: "description",
        lines: [
          { zh: "在 Finder 中新建常用文件、批量复制路径，或在当前目录打开终端", en: "Create common file types, copy multiple paths, or open a terminal in the current Finder folder" }
        ]
      }
    ],
    links: [
      {
        href: "https://github.com/yjcdon/MacRight/releases/latest",
        label: { zh: "下载应用", en: "Download" },
        primary: true
      },
      {
        href: "https://github.com/yjcdon/MacRight",
        label: { zh: "GitHub", en: "GitHub" },
        primary: false
      }
    ],
    images: [
      {
        src: "/assets/macright-context-menu.jpg",
        width: 702,
        height: 366,
        alt: { zh: "MacRight 右键菜单，包含复制路径、在此打开终端及新建多种格式文件", en: "MacRight context menu with Copy Path, Open Terminal Here, and options to create files in multiple formats" },
        label: { zh: "查看 MacRight 界面原图", en: "View the full MacRight screenshot" }
      },
      {
        src: "/assets/macright.png",
        width: 960,
        height: 658,
        alt: { zh: "MacRight 设置界面", en: "MacRight settings window" },
        label: { zh: "MacRight 设置界面", en: "MacRight settings window" }
      }
    ]
  },
  {
    id: "fluor",
    name: { zh: "Fluor4me", en: "Fluor4me" },
    navName: { zh: "Fluor4me", en: "Fluor4me" },
    icon: "/assets/fluor4me-icon.png",
    extension: false,
    platform: { zh: "macOS 11+ · Apple Silicon", en: "macOS 11+ · Apple Silicon" },
    paragraphs: [
      {
        kind: "description",
        lines: [
          { zh: "选中文字，按下 F4 🔍，触发搜索", en: "Select text and press F4 🔍 to search" },
          { zh: "复制、新开标签、粘贴、回车 => F4 🔍", en: "Copy, open a new tab, paste, press Enter => F4 🔍" },
          { zh: "立省 75%", en: "75% fewer steps" }
        ]
      }
    ],
    links: [
      {
        href: "https://github.com/yjcdon/Fluor4me/releases/latest",
        label: { zh: "下载应用", en: "Download" },
        primary: true
      },
      {
        href: "https://github.com/yjcdon/Fluor4me",
        label: { zh: "GitHub", en: "GitHub" },
        primary: false
      }
    ],
    images: []
  },
  {
    id: "markmap",
    name: { zh: "Typora Markmap Plus", en: "Typora Markmap Plus" },
    navName: { zh: "Typora Markmap Plus", en: "Typora Markmap Plus" },
    icon: "/assets/markmap-icon.svg",
    extension: false,
    platform: { zh: "Typora 插件", en: "Typora plugin" },
    paragraphs: [
      {
        kind: "tagline",
        lines: [
          { zh: "用思维导图梳理长文档", en: "Make sense of long documents with mind maps" }
        ]
      },
      {
        kind: "description",
        lines: [
          { zh: "呈现标题、段落与多级列表，支持跳转原文及导出 HTML、SVG、PNG", en: "Map headings, paragraphs and nested lists, jump to the source, and export HTML, SVG or PNG" }
        ]
      }
    ],
    links: [
      {
        href: "https://github.com/yjcdon/typora-plugin-markmap-plus#-安装",
        label: { zh: "安装说明", en: "Installation" },
        primary: true
      },
      {
        href: "https://github.com/yjcdon/typora-plugin-markmap-plus",
        label: { zh: "GitHub", en: "GitHub" },
        primary: false
      }
    ],
    images: [
      {
        src: "/assets/markmap-demo.png",
        width: 2256,
        height: 1806,
        alt: { zh: "Typora 中的周末徒步计划文档与 Markmap Plus 思维导图", en: "Weekend hiking plan and its Markmap Plus mind map in Typora" },
        label: { zh: "查看 Markmap Plus 界面原图", en: "View the full Markmap Plus screenshot" }
      },
      {
        src: "/assets/previews/markmap-export-menu.png",
        width: 580,
        height: 326,
        alt: { zh: "Markmap Plus 导出菜单，支持 HTML、SVG 和 PNG", en: "Markmap Plus export menu with HTML, SVG, and PNG options" },
        label: { zh: "Markmap Plus 导出菜单，支持 HTML、SVG 和 PNG", en: "Markmap Plus export menu with HTML, SVG, and PNG options" }
      }
    ]
  },
  {
    id: "speaker",
    name: { zh: "蓝牙音箱静音保活", en: "Bluetooth Speaker Keep Alive" },
    navName: { zh: "蓝牙音箱静音保活", en: "Bluetooth Speaker Keep Alive" },
    icon: "/assets/speaker-silver.svg",
    extension: false,
    platform: { zh: "Windows 10", en: "Windows 10" },
    paragraphs: [
      {
        kind: "tagline",
        lines: [
          { zh: "音箱长时间静音，也不关机", en: "Keep your speaker on through long periods of silence" }
        ]
      }
    ],
    links: [
      {
        href: "https://github.com/yjcdon/speaker-keep-alive/releases/latest",
        label: { zh: "下载应用", en: "Download" },
        primary: true
      },
      {
        href: "https://github.com/yjcdon/speaker-keep-alive",
        label: { zh: "GitHub", en: "GitHub" },
        primary: false
      }
    ],
    images: []
  },
  {
    id: "meego",
    name: { zh: "飞书项目 MCP（Go 版）", en: "Feishu Project MCP (Go)" },
    navName: { zh: "飞书项目 MCP\n（Go 版）", en: "Feishu Project\nMCP (Go)" },
    icon: "/assets/meego-terminal.svg",
    extension: false,
    paragraphs: [
      {
        kind: "description",
        lines: [
          { zh: "Go 单文件 MCP 进程，无需额外依赖", en: "A single Go MCP binary with no extra dependencies" },
          { zh: "内存占用比原版 Node.js 进程减少约 83%", en: "Uses about 83% less memory than the original Node.js process" }
        ]
      }
    ],
    links: [
      {
        href: "https://github.com/yjcdon/meego-mcp-go/blob/main/INSTALL.md",
        label: { zh: "安装教程", en: "Installation guide" },
        primary: true
      },
      {
        href: "https://github.com/yjcdon/meego-mcp-go/releases/latest",
        label: { zh: "下载", en: "Download" },
        primary: false
      }
    ],
    images: [
      {
        src: "/assets/meego-benchmark.jpg",
        width: 1544,
        height: 976,
        alt: { zh: "飞书项目 MCP 的 Node.js 版与 Go 版资源占用对比", en: "Resource usage comparison between the Node.js and Go versions of Feishu Project MCP" },
        label: { zh: "查看资源占用对比原图", en: "View the resource usage comparison" }
      }
    ]
  },
  {
    id: "video-speed",
    name: { zh: "网页视频长按倍速", en: "Video Hold Speed" },
    navName: { zh: "网页视频长按倍速", en: "Video Hold Speed" },
    icon: "/assets/video-speed-icon.png",
    extension: true,
    paragraphs: [
      {
        kind: "description",
        lines: [
          { zh: "按住右方向键加速，松开恢复原速", en: "Hold the right arrow to speed up, release to resume" }
        ]
      },
      {
        kind: "description",
        lines: [
          { zh: "可覆盖 YouTube、无长按交互的网站视频", en: "Works on YouTube and video sites without a built-in hold-to-speed-up shortcut" }
        ]
      }
    ],
    links: [
      {
        href: "https://chromewebstore.google.com/detail/%E8%A7%86%E9%A2%91%E9%95%BF%E6%8C%89%E5%8A%A0%E9%80%9F%E5%80%8D%E7%8E%87/eocijgabbohbmdlipiimocfhhlapmjhd",
        label: { zh: "安装扩展", en: "Install extension" },
        primary: true
      },
      {
        href: "https://github.com/yjcdon/web-video-speed-extension",
        label: { zh: "GitHub", en: "GitHub" },
        primary: false
      }
    ],
    images: [
      {
        src: "/assets/video-speed-preview.png",
        width: 648,
        height: 494,
        alt: { zh: "网页视频长按倍速的倍率设置界面", en: "Playback speed settings for the video extension" },
        label: { zh: "查看网页视频长按倍速界面原图", en: "View the video speed extension screenshot" }
      }
    ]
  },
  {
    id: "f4-search",
    name: { zh: "F4ToSearch4win", en: "F4ToSearch4win" },
    navName: { zh: "F4ToSearch4win", en: "F4ToSearch4win" },
    icon: "/assets/f4-search-icon.png",
    extension: true,
    platform: { zh: "Windows · Chrome 扩展", en: "Windows · Chrome extension" },
    paragraphs: [
      {
        kind: "description",
        lines: [
          { zh: "选中文字，按下 F4 🔍，触发搜索", en: "Select text and press F4 🔍 to search" },
          { zh: "复制、新开标签、粘贴、回车 => F4 🔍", en: "Copy, open a new tab, paste, press Enter => F4 🔍" },
          { zh: "立省 75%", en: "75% fewer steps" }
        ]
      }
    ],
    links: [
      {
        href: "https://github.com/yjcdon/F4ToSearch4win/releases/latest",
        label: { zh: "安装扩展", en: "Install extension" },
        primary: true
      },
      {
        href: "https://github.com/yjcdon/F4ToSearch4win#安装",
        label: { zh: "安装说明", en: "Installation" },
        primary: false
      }
    ],
    images: []
  },
  {
    id: "mxga",
    name: { zh: "Make X Great Again", en: "Make X Great Again" },
    navName: { zh: "Make X\n Great Again", en: "Make X\n Great Again" },
    icon: "/assets/mxga-icon.png",
    extension: true,
    paragraphs: [
      {
        kind: "description",
        lines: [
          { zh: "在 X 时间线上，无需进入二级菜单", en: "From the X timeline, without opening a menu" }
        ]
      },
      {
        kind: "description",
        lines: [
          { zh: "即可查看博主的关注数和粉丝数，关注或取关，屏蔽博主，或标记「不感兴趣」", en: "You can see an author’s following and follower counts, follow or unfollow them, block them, or mark a post as Not interested." }
        ]
      },
      {
        kind: "description",
        lines: [
          { zh: "帖子无需点进去，就能用 Grok 翻译", en: "Translate posts with Grok without opening them." }
        ]
      }
    ],
    links: [
      {
        href: "https://chromewebstore.google.com/detail/make-x-great-again/hhnjogcifjdjdpjkhfkbhiechbhecpdl",
        label: { zh: "安装扩展", en: "Install extension" },
        primary: true
      },
      {
        href: "https://github.com/yjcdon/make-x-great-again",
        label: { zh: "GitHub", en: "GitHub" },
        primary: false
      }
    ],
    images: [
      {
        src: "/assets/previews/x-timeline-comparison.png",
        width: 1254,
        height: 536,
        alt: { zh: "上方是 X 原版帖子，下方是启用插件后显示关注数据、Grok 翻译、屏蔽和不感兴趣按钮的帖子", en: "Top: an original X post. Bottom: a post with the extension enabled, showing follow counts, Grok translation, and buttons to follow, block, or mark it as Not interested." },
        label: { zh: "查看 X 时间线对比图原图", en: "View the full-size X timeline comparison" }
      }
    ]
  },
  {
    id: "mdga",
    name: { zh: "Make Douyin Great Again", en: "Make Douyin Great Again" },
    navName: { zh: "Make Douyin\n Great Again", en: "Make Douyin\n Great Again" },
    icon: "/assets/mdga-icon.png",
    extension: true,
    paragraphs: [
      {
        kind: "description",
        lines: [
          { zh: "复制标题和短链接，精简精选页交互", en: "Copy titles and short links and simplify the featured feed" }
        ]
      }
    ],
    links: [
      {
        href: "https://github.com/yjcdon/make-douyin-great-again/releases/latest",
        label: { zh: "安装扩展", en: "Install extension" },
        primary: true
      },
      {
        href: "https://github.com/yjcdon/make-douyin-great-again",
        label: { zh: "GitHub", en: "GitHub" },
        primary: false
      }
    ],
    images: [
      {
        src: "/assets/previews/douyin-download.png",
        width: 1988,
        height: 1152,
        alt: { zh: "抖音播放器上的「下载视频」按钮", en: "The Download video button on the Douyin player" },
        label: { zh: "抖音播放器上的「下载视频」按钮", en: "The Download video button on the Douyin player" }
      },
      {
        src: "/assets/previews/douyin-extract.png",
        width: 956,
        height: 408,
        alt: { zh: "抖音播放器上的「提取文案」按钮", en: "The Extract transcript button on the Douyin player" },
        label: { zh: "抖音播放器上的「提取文案」按钮", en: "The Extract transcript button on the Douyin player" }
      },
      {
        src: "/assets/previews/douyin-extract-workflow.png",
        width: 1946,
        height: 1076,
        alt: { zh: "抖音插件设置和豆包提取文案结果", en: "Douyin extension settings and the transcript returned by Doubao" },
        label: { zh: "抖音插件设置和豆包提取文案结果", en: "Douyin extension settings and the transcript returned by Doubao" }
      },
      {
        src: "/assets/previews/douyin-feedback.png",
        width: 716,
        height: 420,
        alt: { zh: "红色箭头指向抖音精选视频卡片左上角的「不感兴趣」按钮", en: "A red arrow points to the Not interested button at the top left of a featured Douyin video card" },
        label: { zh: "红色箭头指向抖音精选视频卡片左上角的「不感兴趣」按钮", en: "A red arrow points to the Not interested button at the top left of a featured Douyin video card" }
      }
    ]
  }
];
