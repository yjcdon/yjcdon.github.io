(() => {
  "use strict";
  const messages = {
  "zh": {
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
    "videoSpeedDescription": "自定义 0.25×～16× 倍速，适用于网页视频",
    "videoSpeedDetection": "识别正在播放的视频，覆盖为插件的交互",
    "videoSpeedSites": "支持 B 站、抖音、油管等",
    "videoSpeedImageLabel": "查看网页视频长按倍速界面原图",
    "videoSpeedImageAlt": "网页视频长按倍速的倍率设置界面",
    "speakerName": "音箱静音保活",
    "speakerTagline": "让音箱静音时，也不关机",
    "ferryImageLabel": "查看 Ferry Plus 界面原图",
    "ferryImageAlt": "Ferry Plus 双网盘文件管理界面，目录名和日期已打码",
    "markmapImageLabel": "查看 Markmap Plus 界面原图",
    "markmapImageAlt": "新建示例文档及其思维导图，展示多级列表的结构",
    "toolGallery": "开源工具展示",
    "toolNavigation": "切换工具",
    "previousTool": "上一个工具",
    "nextTool": "下一个工具",
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
    "videoSpeedDescription": "Set a speed from 0.25× to 16× for web videos",
    "videoSpeedDetection": "Detects the playing video and applies the extension’s controls",
    "videoSpeedSites": "Supports Bilibili, Douyin, YouTube and more",
    "videoSpeedImageLabel": "View the video speed extension screenshot",
    "videoSpeedImageAlt": "Playback speed settings for the video extension",
    "speakerName": "Speaker Keep Alive",
    "speakerTagline": "Keep your speaker on, even when silent",
    "ferryImageLabel": "View the full Ferry Plus screenshot",
    "ferryImageAlt": "Ferry Plus cloud file browser with folder names and dates redacted",
    "markmapImageLabel": "View the full Markmap Plus screenshot",
    "markmapImageAlt": "A newly created sample document and its mind map showing nested lists",
    "toolGallery": "Open-source tool gallery",
    "toolNavigation": "Choose a tool",
    "previousTool": "Previous tool",
    "nextTool": "Next tool",
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
    renderCarouselControls();
  }

  /** Load the selected tool's original assets only as the workshop approaches view. */
  function loadToolImages() {
    if (!toolsInView) return;
    const slide = document.querySelectorAll("#tool-track > article")[activeTool];
    const images = [...document.querySelectorAll(".carousel-dot img[data-src]"), ...slide.querySelectorAll("img[data-src]")];
    images.forEach((image) => {
      image.src = image.dataset.src;
      image.removeAttribute("data-src");
    });
  }

  /** Keep tool navigation, translated announcements and offscreen focus in sync. */
  function renderCarouselControls() {
    loadToolImages();
    const slides = [...document.querySelectorAll("#tool-track > article")];
    const dots = [...document.querySelectorAll(".carousel-dot")];
    slides.forEach((slide, index) => {
      slide.inert = index !== activeTool;
      slide.setAttribute("aria-hidden", String(index !== activeTool));
      const name = slide.querySelector("h3").textContent;
      dots[index].querySelector(".station-name").textContent = name;
      dots[index].setAttribute("aria-label", translate("showTool").replace("{name}", name));
      dots[index].setAttribute("aria-current", String(index === activeTool));
    });
    document.getElementById("tool-status").textContent = translate("toolStatus")
      .replace("{name}", slides[activeTool].querySelector("h3").textContent)
      .replace("{current}", String(activeTool + 1))
      .replace("{total}", String(slides.length));
  }

  /** Navigate tools by name, arrows or touch without interrupting reading. */
  function initializeCarousel() {
    const track = document.getElementById("tool-track");
    const slides = [...track.querySelectorAll(":scope > article")];
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let cardTransition;

    /** Switch directly to the chosen card, then fade it in without traversing other tools. */
    function showTool(index) {
      const nextTool = ((index % slides.length) + slides.length) % slides.length;
      if (nextTool === activeTool) return;
      if (cardTransition) cardTransition.finish();
      activeTool = nextTool;
      track.scrollTo({ left: slides[activeTool].offsetLeft, behavior: "instant" });
      renderCarouselControls();
      if (!reducedMotion.matches) {
        cardTransition = slides[activeTool].animate(
          [{ opacity: 0.45 }, { opacity: 1 }],
          { duration: 160, easing: "ease-out" }
        );
      }
    }
    document.getElementById("tool-prev").addEventListener("click", () => showTool(activeTool - 1));
    document.getElementById("tool-next").addEventListener("click", () => showTool(activeTool + 1));
    document.querySelectorAll(".carousel-dot").forEach((dot, index) => {
      dot.addEventListener("click", () => showTool(index));
    });
    track.addEventListener("keydown", (event) => {
      if (event.target !== track) return;
      const targets = { ArrowLeft: activeTool - 1, ArrowRight: activeTool + 1, Home: 0, End: slides.length - 1 };
      if (!(event.key in targets)) return;
      event.preventDefault();
      showTool(targets[event.key]);
    });
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.find((entry) => entry.isIntersecting && entry.intersectionRatio >= 0.6);
      if (!visible) return;
      activeTool = slides.indexOf(visible.target);
      renderCarouselControls();
    }, { root: track, threshold: 0.6 });
    slides.forEach((slide) => observer.observe(slide));
    new ResizeObserver(() => {
      track.scrollTo({ left: slides[activeTool].offsetLeft, behavior: "instant" });
    }).observe(track);
    document.querySelector(".carousel-controls").hidden = false;
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
    initializeCarousel();
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
