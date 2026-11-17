(() => {
  "use strict";
  const messages = {
  "zh": {
    "connectConnectedImage": "miniEasyConnect 已连接界面与连接记录",
    "ferryBaiduImageLabel": "查看 Ferry Drive 百度网盘界面原图",
    "ferryBaiduImageAlt": "Ferry Drive 百度网盘文件管理界面",
    "ferryTransferSettingsImage": "Ferry Drive 的并发传输和限速设置",
    "markmapExportImage": "Markmap Plus 导出菜单，支持 HTML、SVG 和 PNG",
    "macrightSettingsImage": "MacRight 设置界面",
    "previousImage": "上一张图",
    "nextImage": "下一张图",
    "meegoName": "飞书项目 MCP（Go 版）",
    "meegoStation": "飞书项目 MCP\n（Go 版）",
    "meegoDescription": "Go 单文件 MCP 进程，无需额外依赖",
    "meegoMemory": "内存占用比原版 Node.js 进程减少约 83%",
    "meegoGuide": "安装教程",
    "meegoDownload": "下载",
    "meegoImageLabel": "查看资源占用对比原图",
    "meegoImageAlt": "飞书项目 MCP 的 Node.js 版与 Go 版资源占用对比",
    "crossPlatform": "跨平台",
    "browserExtensions": "浏览器扩展",
    "xExtensionIntro": "在 X 时间线上，无需进入二级菜单",
    "xExtensionDescription": "即可查看博主的关注数和粉丝数，关注或取关，屏蔽博主，或标记「不感兴趣」",
    "xExtensionTranslation": "帖子无需点进去，就能用 Grok 翻译",
    "xTimelineImageLabel": "查看 X 时间线对比图原图",
    "xTimelineImageAlt": "上方是 X 原版帖子，下方是启用插件后显示关注数据、Grok 翻译、屏蔽和不感兴趣按钮的帖子",
    "douyinExtensionDescription": "复制标题和短链接，精简精选页交互",
    "pageTitle": "yjcdon · 个人主页",
    "pageDescription": "Hi，我是 yjcdon。Java 后端出身，向产品经理与 AI 全栈开发方向发展。分享自己日常使用的开源工具。",
    "skip": "跳到正文",
    "homeLabel": "yjcdon，返回个人简介",
    "navigation": "主导航",
    "preferences": "显示设置",
    "switchLanguage": "Switch to English",
    "introLabel": "个人简介",
    "toolsLabel": "开源工具",
    "greeting": "Hi，我是 yjcdon",
    "employment": "目前就职于制造业龙头企业",
    "background": "Java 后端出身，向产品经理与 AI 全栈开发方向发展",
    "contactLabel": "联系方式：",
    "toolsHeading": "开源工具",
    "ferryDescription": "轻量客户端，统一百度、夸克网盘的文件管理",
    "download": "下载应用",
    "downloadExtension": "下载扩展",
    "sourceAndGuide": "GitHub",
    "macrightTagline": "常用操作，右键完成",
    "macrightDescription": "在 Finder 中新建常用文件、批量复制路径，或在当前目录打开终端",
    "typoraPlatform": "Typora 插件",
    "markmapTagline": "用思维导图梳理长文档",
    "markmapDescription": "呈现标题、段落与多级列表，支持跳转原文及导出 HTML、SVG、PNG",
    "install": "安装说明",
    "source": "GitHub",
    "videoSpeedName": "网页视频长按倍速",
    "videoSpeedTagline": "按住右方向键加速，松开恢复原速",
    "videoSpeedImageLabel": "查看网页视频长按倍速界面原图",
    "videoSpeedImageAlt": "网页视频长按倍速的倍率设置界面",
    "speakerName": "蓝牙音箱静音保活",
    "speakerTagline": "音箱长时间静音，也不关机",
    "ferryImageLabel": "查看 Ferry Drive 界面原图",
    "ferryImageAlt": "Ferry Drive 夸克网盘文件管理界面",
    "markmapImageLabel": "查看 Markmap Plus 界面原图",
    "markmapImageAlt": "Typora 中的周末徒步计划文档与 Markmap Plus 思维导图",
    "toolGallery": "开源工具展示",
    "toolNavigation": "切换工具",
    "showTool": "查看 {name}",
    "toolStatus": "正在展示：{name}，第 {current} 个，共 {total} 个。",
    "connectImageLabel": "查看 miniEasyConnect 资源对比原图",
    "connectImageAlt": "用户提供的 EasyConnect 与 miniEasyConnect 资源对比原图，平均内存分别为 697.33 MB 和 60.73 MB",
    "macrightImageLabel": "查看 MacRight 界面原图",
    "macrightImageAlt": "MacRight 右键菜单，包含复制路径、在此打开终端及新建多种格式文件",
    "closeImage": "关闭图片",
    "imagePreview": "图片预览",
    "viewOriginal": "查看原图",
    "connectTagline": "原生 APP，替代 EasyConnect",
    "ferryMotto": "拒绝臃肿客户端，从我做起",
    "worldLabel": "YJCDON 的像素工坊",
    "worldFooter": "以物质建设为中心"
  },
  "en": {
    "connectConnectedImage": "miniEasyConnect connected status and saved connections",
    "ferryBaiduImageLabel": "View the full Ferry Drive Baidu Netdisk screenshot",
    "ferryBaiduImageAlt": "Ferry Drive Baidu Netdisk file browser",
    "ferryTransferSettingsImage": "Ferry Drive transfer settings for concurrency and rate limits",
    "markmapExportImage": "Markmap Plus export menu with HTML, SVG, and PNG options",
    "macrightSettingsImage": "MacRight settings window",
    "previousImage": "Previous image",
    "nextImage": "Next image",
    "meegoName": "Feishu Project MCP (Go)",
    "meegoStation": "Feishu Project\nMCP (Go)",
    "meegoDescription": "A single Go MCP binary with no extra dependencies",
    "meegoMemory": "Uses about 83% less memory than the original Node.js process",
    "meegoGuide": "Installation guide",
    "meegoDownload": "Download",
    "meegoImageLabel": "View the resource usage comparison",
    "meegoImageAlt": "Resource usage comparison between the Node.js and Go versions of Feishu Project MCP",
    "crossPlatform": "Cross-platform",
    "browserExtensions": "Browser extensions",
    "xExtensionIntro": "From the X timeline, without opening a menu",
    "xExtensionDescription": "You can see an author’s following and follower counts, follow or unfollow them, block them, or mark a post as Not interested.",
    "xExtensionTranslation": "Translate posts with Grok without opening them.",
    "xTimelineImageLabel": "View the full-size X timeline comparison",
    "xTimelineImageAlt": "Top: an original X post. Bottom: a post with the extension enabled, showing follow counts, Grok translation, and buttons to follow, block, or mark it as Not interested.",
    "douyinExtensionDescription": "Copy titles and short links and simplify the featured feed",
    "pageTitle": "yjcdon · Personal Website",
    "pageDescription": "Hi, I'm yjcdon. From Java backend development toward product management and AI-assisted full-stack development. Explore the open-source tools I use every day.",
    "skip": "Skip to content",
    "homeLabel": "yjcdon, back to introduction",
    "navigation": "Main navigation",
    "preferences": "Display preferences",
    "switchLanguage": "切换到中文",
    "introLabel": "About me",
    "toolsLabel": "Open-source tools",
    "greeting": "Hi, I'm yjcdon",
    "employment": "Currently at a leading manufacturing company",
    "background": "From Java backend development toward product management and AI-assisted full-stack development",
    "contactLabel": "Contact: ",
    "toolsHeading": "Open-source tools",
    "ferryDescription": "A lightweight app for unified file management across Baidu and Quark cloud drives",
    "download": "Download",
    "downloadExtension": "Download extension",
    "sourceAndGuide": "GitHub",
    "macrightTagline": "Everyday actions, a right-click away",
    "macrightDescription": "Create common file types, copy multiple paths, or open a terminal in the current Finder folder",
    "typoraPlatform": "Typora plugin",
    "markmapTagline": "Make sense of long documents with mind maps",
    "markmapDescription": "Map headings, paragraphs and nested lists, jump to the source, and export HTML, SVG or PNG",
    "install": "Installation",
    "source": "GitHub",
    "videoSpeedName": "Video Hold Speed",
    "videoSpeedTagline": "Hold the right arrow to speed up, release to resume",
    "videoSpeedImageLabel": "View the video speed extension screenshot",
    "videoSpeedImageAlt": "Playback speed settings for the video extension",
    "speakerName": "Bluetooth Speaker Keep Alive",
    "speakerTagline": "Keep your speaker on through long periods of silence",
    "ferryImageLabel": "View the full Ferry Drive screenshot",
    "ferryImageAlt": "Ferry Drive Quark Drive file browser",
    "markmapImageLabel": "View the full Markmap Plus screenshot",
    "markmapImageAlt": "Weekend hiking plan and its Markmap Plus mind map in Typora",
    "toolGallery": "Open-source tool gallery",
    "toolNavigation": "Choose a tool",
    "showTool": "View {name}",
    "toolStatus": "Showing {name}, tool {current} of {total}.",
    "connectImageLabel": "View the original miniEasyConnect resource comparison",
    "connectImageAlt": "Original user-provided comparison: EasyConnect averages 697.33 MB of memory and miniEasyConnect 60.73 MB",
    "macrightImageLabel": "View the full MacRight screenshot",
    "macrightImageAlt": "MacRight context menu with Copy Path, Open Terminal Here, and options to create files in multiple formats",
    "closeImage": "Close image",
    "imagePreview": "Image preview",
    "viewOriginal": "View original",
    "connectTagline": "A native app to replace EasyConnect",
    "ferryMotto": "Saying no to bloated clients starts with me",
    "worldLabel": "YJCDON'S PIXEL WORKSHOP",
    "worldFooter": "Focus on material development"
  }
};

  const root = document.documentElement;
  let language = readChoice("language", ["zh", "en"])
    ?? (navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en");
  let activeTool = 0;
  let toolsInView = false;

  /**
   * Read optional display preferences; restricted storage uses browser defaults.
   */
  function readChoice(key, allowed) {
    try {
      const value = localStorage.getItem("yjcdon:" + key);
      return allowed.includes(value) ? value : null;
    } catch (error) {
      if (error.name !== "SecurityError" && error.name !== "QuotaExceededError") throw error;
      return null;
    }
  }

  /**
   * Persist a visitor choice when storage is available; the current page always updates.
   */
  function saveChoice(key, value) {
    try {
      localStorage.setItem("yjcdon:" + key, value);
    } catch (error) {
      if (error.name !== "SecurityError" && error.name !== "QuotaExceededError") throw error;
    }
  }

  /** Resolve a known translation key; missing copy is an implementation error. */
  function translate(key) {
    const value = messages[language][key];
    if (typeof value !== "string") throw new Error("Missing translation: " + language + "." + key);
    return value;
  }


  /** Translate page content, metadata and accessible descriptions together. */
  function renderLanguage() {
    root.lang = language === "zh" ? "zh-CN" : "en";
    const targets = [
      ["data-i18n", null],
      ["data-i18n-content", "content"],
      ["data-i18n-aria-label", "aria-label"],
      ["data-i18n-alt", "alt"],
    ];
    for (const [source, destination] of targets) {
      for (const element of document.querySelectorAll("[" + source + "]")) {
        const value = translate(element.getAttribute(source));
        if (destination === null) element.textContent = value;
        else element.setAttribute(destination, value);
      }
    }
    renderControls();
  }

  /** Describe each toggle's next action in the currently selected language. */
  function renderControls() {
    const languageToggle = document.getElementById("language-toggle");
    languageToggle.setAttribute("aria-label", translate("switchLanguage"));
    languageToggle.title = translate("switchLanguage");
    document.getElementById("language-label").textContent = language === "zh" ? "EN" : "中";
    renderToolSelection();
  }

  /** Load the selected tool's original assets only as the workshop approaches view. */
  function loadToolImages() {
    if (!toolsInView) return;
    const slide = document.querySelectorAll("#tool-track > article")[activeTool];
    const images = [...document.querySelectorAll(".carousel-dot img[data-src]"), ...slide.querySelectorAll(".tool-preview img[data-src]")];
    images.forEach((image) => {
      image.src = image.dataset.src;
      image.removeAttribute("data-src");
    });
    const pickerIcon = document.querySelector("#tool-picker img");
    pickerIcon.src = document.querySelectorAll("button.carousel-dot img")[activeTool].src;
    pickerIcon.hidden = false;
  }

  /** Keep tool navigation, translated announcements and offscreen focus in sync. */
  function renderToolSelection() {
    const slides = [...document.querySelectorAll("#tool-track > article")];
    const dots = [...document.querySelectorAll("button.carousel-dot")];
    slides.forEach((slide, index) => {
      slide.hidden = index !== activeTool;
      const name = slide.querySelector("h3").textContent;
      dots[index].setAttribute("aria-label", translate("showTool").replace("{name}", name));
      dots[index].title = name;
      dots[index].setAttribute("aria-current", String(index === activeTool));
    });
    const activeName = slides[activeTool].querySelector("h3").textContent;
    document.getElementById("tool-picker-name").textContent = activeName;
    document.querySelector(".extension-summary").classList.toggle("contains-current", Boolean(dots[activeTool].closest(".extension-group")));
    loadToolImages();
    document.getElementById("tool-status").textContent = translate("toolStatus")
      .replace("{name}", activeName)
      .replace("{current}", String(activeTool + 1))
      .replace("{total}", String(slides.length));
  }

  /** Keep the desktop list and mobile selector on the same work. */
  function initializeToolSelection() {
    const browser = document.getElementById("tool-carousel");
    const header = document.querySelector(".header-shell");
    const controls = document.querySelector(".carousel-controls");
    const picker = document.getElementById("tool-picker");
    const list = document.getElementById("tool-list");
    const extensionGroup = document.querySelector(".extension-group");
    const buttons = document.querySelectorAll("button.carousel-dot");
    const narrowScreen = window.matchMedia("(max-width: 760px)");

    picker.addEventListener("click", () => {
      const expanded = picker.getAttribute("aria-expanded") === "true";
      picker.setAttribute("aria-expanded", String(!expanded));
      if (!expanded) {
        const activeButton = buttons[activeTool];
        if (extensionGroup.contains(activeButton)) extensionGroup.open = true;
        const item = activeButton.getBoundingClientRect();
        const viewport = list.getBoundingClientRect();
        if (item.top < viewport.top + 6) list.scrollTop += item.top - viewport.top - 6;
        else if (item.bottom > viewport.bottom - 6) list.scrollTop += item.bottom - viewport.bottom + 6;
      }
    });
    controls.addEventListener("keydown", (event) => {
      if (event.key !== "Escape" || !narrowScreen.matches || picker.getAttribute("aria-expanded") !== "true") return;
      event.preventDefault();
      picker.setAttribute("aria-expanded", "false");
      picker.focus();
    });

    buttons.forEach((button, index) => {
      button.addEventListener("click", () => {
        if (extensionGroup.contains(button)) extensionGroup.open = true;
        activeTool = index;
        renderToolSelection();
        if (narrowScreen.matches) {
          picker.setAttribute("aria-expanded", "false");
          picker.focus({ preventScroll: true });
        } else {
          // Keep the selected entry visible when a shorter detail shrinks the sidebar.
          const overflow = button.getBoundingClientRect().bottom - controls.getBoundingClientRect().bottom;
          if (overflow > 0) controls.scrollTop += overflow;
        }
        if (browser.getBoundingClientRect().top < header.getBoundingClientRect().bottom) {
          browser.scrollIntoView({ block: "start", behavior: "instant" });
        }
      });
    });
    controls.hidden = false;
    browser.classList.add("tool-browser");
  }

  /** Group multiple preview figures from one work into a manual gallery. */
  function initializeToolGalleries() {
    document.querySelectorAll("#tool-track > article").forEach((tool) => {
      const figures = [...tool.querySelectorAll(":scope > .tool-preview")];
      if (figures.length < 2) return;

      const frame = document.createElement("div");
      frame.className = "tool-gallery-frame";
      const firstImage = figures[0].querySelector("img");
      frame.style.aspectRatio = `${firstImage.getAttribute("width")} / ${firstImage.getAttribute("height")}`;
      figures[0].before(frame);
      frame.append(...figures);
      figures.forEach((figure) => { figure.querySelector("img").loading = "eager"; });

      const controls = document.createElement("div");
      controls.className = "tool-gallery-controls";
      const count = document.createElement("span");
      count.setAttribute("role", "status");
      let activeImage = 0;
      let requestedImage;
      let dragStart;
      let suppressClick = false;

      /** Keep the counter and keyboard focus aligned with the visible screenshot. */
      function updateSelection(index) {
        activeImage = index;
        count.textContent = `${index + 1} / ${figures.length}`;
        figures.forEach((figure, i) => {
          figure.querySelector("a").tabIndex = i === index ? 0 : -1;
        });
      }

      /** Buttons wrap at either end; native swipes stop at the first or last screenshot. */
      function showImage(index) {
        requestedImage = (index + figures.length) % figures.length;
        frame.scrollTo({
          left: requestedImage * frame.clientWidth,
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
        });
      }

      frame.addEventListener("scroll", () => {
        if (!frame.clientWidth) return;
        const index = Math.max(0, Math.min(figures.length - 1, Math.round(frame.scrollLeft / frame.clientWidth)));
        if (index !== activeImage) updateSelection(index);
      }, { passive: true });
      frame.addEventListener("scrollend", () => { requestedImage = undefined; });
      frame.addEventListener("wheel", () => { requestedImage = undefined; }, { passive: true });
      frame.addEventListener("dragstart", (event) => event.preventDefault());
      frame.addEventListener("pointerdown", (event) => {
        suppressClick = false;
        requestedImage = undefined;
        if (!event.isPrimary || event.button !== 0 || event.pointerType !== "mouse") return;
        dragStart = { id: event.pointerId, x: event.clientX, y: event.clientY, index: activeImage };
      });
      frame.addEventListener("pointermove", (event) => {
        if (dragStart?.id !== event.pointerId) return;
        const dx = event.clientX - dragStart.x;
        const dy = event.clientY - dragStart.y;
        if (!frame.hasPointerCapture(event.pointerId)) {
          if (Math.abs(dx) < 10 || Math.abs(dx) <= Math.abs(dy)) return;
          frame.setPointerCapture(event.pointerId);
          frame.classList.add("is-dragging");
          suppressClick = true;
        }
        frame.scrollLeft = dragStart.index * frame.clientWidth - dx;
      });
      frame.addEventListener("pointerup", (event) => {
        if (dragStart?.id !== event.pointerId) return;
        const start = dragStart;
        dragStart = undefined;
        if (!frame.hasPointerCapture(event.pointerId)) return;
        frame.releasePointerCapture(event.pointerId);
        frame.classList.remove("is-dragging");
        const dx = event.clientX - start.x;
        const step = Math.abs(dx) >= 36 ? -Math.sign(dx) : 0;
        showImage(Math.max(0, Math.min(figures.length - 1, start.index + step)));
      });
      frame.addEventListener("lostpointercapture", () => {
        dragStart = undefined;
        frame.classList.remove("is-dragging");
      });
      frame.addEventListener("pointercancel", () => {
        dragStart = undefined;
        frame.classList.remove("is-dragging");
      });
      frame.addEventListener("click", (event) => {
        if (!suppressClick || event.detail === 0) return;
        event.preventDefault();
        event.stopPropagation();
        suppressClick = false;
      }, true);
      new ResizeObserver(() => {
        if (!frame.clientWidth) return;
        frame.scrollTo({ left: (requestedImage ?? activeImage) * frame.clientWidth, behavior: "instant" });
      }).observe(frame);
      for (const [symbol, key, step] of [["<", "previousImage", -1], [">", "nextImage", 1]]) {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "carousel-arrow";
        button.dataset.i18nAriaLabel = key;
        button.textContent = symbol;
        button.addEventListener("click", () => showImage((requestedImage ?? activeImage) + step));
        controls.append(button);
      }
      controls.insertBefore(count, controls.lastChild);
      frame.after(controls);
      updateSelection(0);
    });
  }

  /** Enlarge the original image in a native modal and restore the triggering link. */
  function initializeImagePreview() {
    const dialog = document.getElementById("image-dialog");
    const image = document.getElementById("image-full");
    const original = document.getElementById("image-original");
    let trigger;
    document.querySelectorAll(".image-link").forEach((link) => {
      link.addEventListener("click", (event) => {
        if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        trigger = link;
        image.src = link.href;
        image.alt = link.querySelector("img").alt;
        original.href = link.href;
        dialog.showModal();
      });
    });
    document.getElementById("image-close").addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", (event) => {
      if (event.target !== dialog) return;
      const bounds = dialog.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
    });
    dialog.addEventListener("close", () => trigger.focus({ preventScroll: true }));
  }

  /** Bind language controls once the static page is ready. */
  function initialize() {
    new IntersectionObserver(([entry]) => {
      toolsInView = entry.isIntersecting;
      loadToolImages();
    }, { rootMargin: "160px" }).observe(document.getElementById("tools"));
    initializeToolGalleries();
    initializeToolSelection();
    initializeImagePreview();
    renderLanguage();
    document.querySelector(".preferences").hidden = false;
    document.getElementById("language-toggle").addEventListener("click", () => {
      language = language === "zh" ? "en" : "zh";
      saveChoice("language", language);
      renderLanguage();
    });
  }

  root.lang = language === "zh" ? "zh-CN" : "en";
  document.addEventListener("DOMContentLoaded", initialize, { once: true });
})();
