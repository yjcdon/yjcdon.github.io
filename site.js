(() => {
  "use strict";
  const messages = {
    "zh": {
      "pageTitle": "yjcdon · 个人主页",
      "pageDescription": "Hi，我是 yjcdon。目前就职于制造业龙头企业，Java 后端出身，向产品+AI 全栈转型。",
      "skip": "跳到正文",
      "homeLabel": "yjcdon，返回个人简介",
      "navigation": "主导航",
      "preferences": "显示设置",
      "switchLanguage": "Switch to English",
      "switchDark": "切换到深色外观",
      "switchLight": "切换到浅色外观",
      "introLabel": "个人简介",
      "toolsLabel": "定制化开源工具",
      "greeting": "Hi，我是 yjcdon",
      "employment": "目前就职于制造业龙头企业",
      "background": "Java 后端出身，向产品+AI 全栈转型",
      "contactLabel": "联系方式：",
      "toolsHeading": "定制化开源工具。",
      "toolsSubheading": "为实际需求而改进。",
      "toolsIntroduction": "围绕实际需求，定制和改进开源工具。",
      "ferryTagline": "两个网盘，一个传输窗口。",
      "ferryDescription": "在 Mac 上上传、下载百度和夸克网盘文件。管理传输任务，也核对文件内容是否一致。",
      "ferryFeature1": "双网盘上传与下载",
      "ferryFeature2": "暂停续传",
      "ferryFeature3": "内容校验",
      "download": "下载工具",
      "sourceAndGuide": "源码与说明",
      "ferryCaption": "Ferry Plus · 传输任务界面",
      "macrightTagline": "常用操作，放进 Finder 右键。",
      "macrightDescription": "在当前文件夹新建文件、复制完整路径，或打开你常用的终端。几个小操作，少绕一点路。",
      "macrightFeature1": "新建五种文件",
      "macrightFeature2": "多选复制路径",
      "macrightFeature3": "自选终端",
      "connectTagline": "连接内网，简单一点。",
      "connectDescription": "通过原生界面连接 EasyConnect 授权内网。保存常用连接，密码放入系统钥匙串，关闭窗口也能保持连接。",
      "connectFeature1": "一键连接",
      "connectFeature2": "原生界面",
      "connectFeature3": "钥匙串存储",
      "typoraPlatform": "Typora 插件",
      "markmapTagline": "换个视角，读懂长文档。",
      "markmapDescription": "把 Markdown 标题与正文变成思维导图。边看结构，边跳转阅读，也能把导图导出分享。",
      "markmapFeature1": "导图导航",
      "markmapFeature2": "正文节点",
      "markmapFeature3": "多格式导出",
      "install": "安装说明",
      "source": "查看源码",
      "preview": "看看导图阅读界面",
      "markmapCaption": "仓库中的插件预览图",
      "speakerName": "音箱静音保活",
      "speakerTagline": "给闲置音箱留一条静音流。",
      "speakerDescription": "在托盘中运行，向选定音箱持续发送静音数据，尝试避免闲置自动关机。断线后等待重连，不改变系统音量。",
      "speakerFeature1": "指定音箱",
      "speakerFeature2": "托盘运行",
      "speakerFeature3": "开机自启",
      "speakerCredit": "保活效果取决于音箱固件，需在自己的设备上验证。",
      "toolsNote": "安装要求、使用说明和更新记录见各工具的 GitHub 页面。遇到问题，欢迎在对应仓库提交 Issue。",
      "ferryCreditBefore": "基于 ",
      "ferryCreditAfter": " 持续改进。",
      "macrightCreditBefore": "参考并复用 ",
      "macrightCreditAfter": " 的部分资源。",
      "connectCreditBefore": "连接核心基于 ",
      "connectCreditAfter": "。",
      "markmapCreditBefore": "基于 ",
      "markmapCreditAfter": " 改进；需安装 Typora Community Plugin。",
      "ferryImageLabel": "查看 Ferry Plus 界面原图",
      "ferryImageAlt": "Ferry Plus 主窗口：左侧为任务状态，顶部切换上传与下载。",
      "markmapImageLabel": "查看 Markmap Plus 界面原图",
      "markmapImageAlt": "Typora 左侧嵌入思维导图，右侧显示文档正文。",
      "toolGallery": "定制化开源工具轮播",
      "toolNavigation": "切换工具",
      "previousTool": "上一个工具",
      "nextTool": "下一个工具",
      "showTool": "查看 {name}",
      "toolStatus": "正在展示：{name}，第 {current} 个，共 {total} 个。"
    },
    "en": {
      "pageTitle": "yjcdon · Personal Website",
      "pageDescription": "Hi, I'm yjcdon. I work at a leading manufacturing company and am moving from Java backend development toward product and AI-powered full-stack development.",
      "skip": "Skip to content",
      "homeLabel": "yjcdon, back to introduction",
      "navigation": "Main navigation",
      "preferences": "Display preferences",
      "switchLanguage": "切换到中文",
      "switchDark": "Switch to dark appearance",
      "switchLight": "Switch to light appearance",
      "introLabel": "About me",
      "toolsLabel": "Custom open-source",
      "greeting": "Hi, I'm yjcdon",
      "employment": "Currently at a leading manufacturing company",
      "background": "From Java backend development to product + AI-powered full-stack development",
      "contactLabel": "Contact: ",
      "toolsHeading": "Customized open-source tools.",
      "toolsSubheading": "Adapted to real needs.",
      "toolsIntroduction": "Open-source tools customized and improved for real-world needs.",
      "ferryTagline": "Two cloud drives. One transfer window.",
      "ferryDescription": "Upload and download files from Baidu and Quark on your Mac. Manage transfers and verify file integrity.",
      "ferryFeature1": "Baidu & Quark transfers",
      "ferryFeature2": "Pause & resume",
      "ferryFeature3": "Integrity verification",
      "download": "Download",
      "sourceAndGuide": "Source & guide",
      "ferryCaption": "Ferry Plus · Transfer window",
      "macrightTagline": "Your everyday actions. A right-click away.",
      "macrightDescription": "Create files, copy full paths, or open your preferred terminal in the current folder. Fewer steps for everyday tasks.",
      "macrightFeature1": "Five file types",
      "macrightFeature2": "Copy multiple paths",
      "macrightFeature3": "Your preferred terminal",
      "connectTagline": "A simpler way to connect.",
      "connectDescription": "Connect to authorized EasyConnect networks with a native interface. Save connections, keep passwords in Keychain, and stay connected with the window closed.",
      "connectFeature1": "One-click connection",
      "connectFeature2": "Native interface",
      "connectFeature3": "Keychain storage",
      "typoraPlatform": "Typora plugin",
      "markmapTagline": "See the structure. Find your place.",
      "markmapDescription": "Turn Markdown headings and content into an interactive mind map. Navigate long documents and export maps to share.",
      "markmapFeature1": "Mind-map navigation",
      "markmapFeature2": "Content nodes",
      "markmapFeature3": "Multiple export formats",
      "install": "Installation",
      "source": "View source",
      "preview": "Preview the reading interface",
      "markmapCaption": "Plugin preview from the repository",
      "speakerName": "Speaker Keep Alive",
      "speakerTagline": "A silent stream for an idle speaker.",
      "speakerDescription": "A tray utility that sends silent audio to a selected speaker to help prevent idle shutdown. Waits for reconnection without changing system volume.",
      "speakerFeature1": "Choose a speaker",
      "speakerFeature2": "Runs in the tray",
      "speakerFeature3": "Start at login",
      "speakerCredit": "Effectiveness depends on the speaker firmware. Verify it on your own device.",
      "toolsNote": "Find requirements, instructions, and release notes on each tool's GitHub page. To report a problem, open an issue in its repository.",
      "ferryCreditBefore": "Built on ",
      "ferryCreditAfter": ", with continued improvements.",
      "macrightCreditBefore": "Inspired by ",
      "macrightCreditAfter": ", with some resources reused.",
      "connectCreditBefore": "Connection core based on ",
      "connectCreditAfter": ".",
      "markmapCreditBefore": "Adapted from ",
      "markmapCreditAfter": ". Requires Typora Community Plugin.",
      "ferryImageLabel": "View the full Ferry Plus screenshot",
      "ferryImageAlt": "Ferry Plus window with task states on the left and upload and download tabs at the top.",
      "markmapImageLabel": "View the full Markmap Plus screenshot",
      "markmapImageAlt": "Typora with an embedded mind map on the left and document content on the right.",
      "toolGallery": "Customized open-source tool carousel",
      "toolNavigation": "Choose a tool",
      "previousTool": "Previous tool",
      "nextTool": "Next tool",
      "showTool": "View {name}",
      "toolStatus": "Showing {name}, tool {current} of {total}."
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
      dots[index].setAttribute("aria-label", translate("showTool").replace("{name}", name));
      dots[index].setAttribute("aria-current", String(index === activeTool));
    });
    document.getElementById("tool-prev").disabled = activeTool === 0;
    document.getElementById("tool-next").disabled = activeTool === slides.length - 1;
    document.getElementById("tool-position").textContent = (activeTool + 1) + " / " + slides.length;
    document.getElementById("tool-status").textContent = translate("toolStatus")
      .replace("{name}", slides[activeTool].querySelector("h3").textContent)
      .replace("{current}", String(activeTool + 1))
      .replace("{total}", String(slides.length));
  }

  /** Enable native swipe navigation plus bounded buttons, dots and keyboard controls. */
  function initializeCarousel() {
    const track = document.getElementById("tool-track");
    const slides = [...track.querySelectorAll(":scope > article")];
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    /** Scroll to a tool within the available range, respecting motion preferences. */
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
    document.querySelector(".carousel-controls").hidden = false;
  }

  /** Bind language and appearance controls once the static page is ready. */
  function initialize() {
    initializeCarousel();
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
