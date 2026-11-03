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
    "switchDark": "切换到深色外观",
    "switchLight": "切换到浅色外观",
    "introLabel": "个人简介",
    "toolsLabel": "开源工具",
    "greeting": "Hi，我是 yjcdon",
    "employment": "目前就职于制造业龙头企业",
    "background": "Java 后端出身，向产品经理与 AI 全栈开发方向发展",
    "contactLabel": "联系方式：",
    "toolsHeading": "开源工具",
    "toolsIntroduction": "为自己的日常需求而做，也分享给有需要的人",
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
    "ferryMotto": "拒绝臃肿客户端，从我做起"
  },
  "en": {
    "pageTitle": "yjcdon · Personal Website",
    "pageDescription": "Hi, I'm yjcdon. From Java backend development toward product management and AI-assisted full-stack development. Explore the open-source tools I use every day.",
    "skip": "Skip to content",
    "homeLabel": "yjcdon, back to introduction",
    "navigation": "Main navigation",
    "preferences": "Display preferences",
    "switchLanguage": "切换到中文",
    "switchDark": "Switch to dark appearance",
    "switchLight": "Switch to light appearance",
    "introLabel": "About me",
    "toolsLabel": "Open-source tools",
    "greeting": "Hi, I'm yjcdon",
    "employment": "Currently at a leading manufacturing company",
    "background": "From Java backend development toward product management and AI-assisted full-stack development",
    "contactLabel": "Contact: ",
    "toolsHeading": "Open-source tools",
    "toolsIntroduction": "Built for my everyday needs, shared with anyone who needs them",
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
    "ferryMotto": "Saying no to bloated clients starts with me"
  }
};

  const root = document.documentElement;
  const systemAppearance = window.matchMedia("(prefers-color-scheme: dark)");
  let language = readChoice("language", ["zh", "en"])
    ?? (navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en");
  let themeChoice = readChoice("theme", ["light", "dark"]);
  let theme = themeChoice ?? (systemAppearance.matches ? "dark" : "light");
  let activeTool = 0;

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

  /** Apply appearance before the stylesheet loads to avoid a saved-theme flash. */
  function renderTheme() {
    root.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]').content = theme === "dark" ? "#000000" : "#ffffff";
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
    const themeToggle = document.getElementById("theme-toggle");
    const themeLabel = translate(theme === "dark" ? "switchLight" : "switchDark");
    themeToggle.setAttribute("aria-label", themeLabel);
    themeToggle.setAttribute("aria-pressed", String(theme === "dark"));
    themeToggle.title = themeLabel;
    renderCarouselControls();
  }

  /** Keep tool navigation, translated announcements and offscreen focus in sync. */
  function renderCarouselControls() {
    const slides = [...document.querySelectorAll("#tool-track > article")];
    const dots = [...document.querySelectorAll(".carousel-dot")];
    slides.forEach((slide, index) => {
      slide.inert = index !== activeTool;
      slide.setAttribute("aria-hidden", String(index !== activeTool));
      const name = slide.querySelector("h3").textContent;
      dots[index].textContent = name;
      dots[index].setAttribute("aria-label", translate("showTool").replace("{name}", name));
      dots[index].setAttribute("aria-current", String(index === activeTool));
    });
    document.getElementById("tool-prev").disabled = activeTool === 0;
    document.getElementById("tool-next").disabled = activeTool === slides.length - 1;
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
    function showTool(index) {
      activeTool = Math.max(0, Math.min(index, slides.length - 1));
      track.scrollTo({ left: slides[activeTool].offsetLeft, behavior: reducedMotion.matches ? "instant" : "smooth" });
      renderCarouselControls();
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

  /** Bind language and appearance controls once the static page is ready. */
  function initialize() {
    initializeCarousel();
    initializeImagePreview();
    renderLanguage();
    document.querySelector(".preferences").hidden = false;
    document.getElementById("language-toggle").addEventListener("click", () => {
      language = language === "zh" ? "en" : "zh";
      saveChoice("language", language);
      renderLanguage();
    });
    document.getElementById("theme-toggle").addEventListener("click", () => {
      themeChoice = theme === "dark" ? "light" : "dark";
      theme = themeChoice;
      saveChoice("theme", themeChoice);
      renderTheme();
      renderControls();
    });
    systemAppearance.addEventListener("change", (event) => {
      if (themeChoice !== null) return;
      theme = event.matches ? "dark" : "light";
      renderTheme();
      renderControls();
    });
  }

  root.lang = language === "zh" ? "zh-CN" : "en";
  renderTheme();
  document.addEventListener("DOMContentLoaded", initialize, { once: true });
})();
