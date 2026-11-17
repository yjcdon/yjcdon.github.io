<script lang="ts">
  import { onMount, tick } from 'svelte';
  import { messages, tools, type Language, type Tool, type ToolImage } from '$lib/content';
  import IntroArt from '$lib/IntroArt.svelte';
  import ToolGallery from '$lib/components/ToolGallery.svelte';
  import ImagePreview from '$lib/components/ImagePreview.svelte';
  import pixelFont from '$lib/assets/pixel-ui.woff2?url';

  let language = $state<Language>('zh');
  let ready = $state(false);
  let activeId = $state(tools[0].id);
  let pickerOpen = $state(false);
  let extensionsOpen = $state(false);
  let loadedTools = $state(new Set<string>());
  let inView = false;
  let previewImage = $state<ToolImage | null>(null);
  let previewTrigger = $state<HTMLAnchorElement | null>(null);
  let section: HTMLElement;
  let browser: HTMLDivElement;
  let controls: HTMLDivElement;
  let list: HTMLDivElement;
  let picker: HTMLButtonElement;
  let header: HTMLDivElement;

  const activeTool = $derived(tools.find((tool) => tool.id === activeId)!);
  const text = $derived(messages[language]);
  const status = $derived(text.toolStatus
    .replace('{name}', activeTool.name[language])
    .replace('{current}', String(tools.indexOf(activeTool) + 1))
    .replace('{total}', String(tools.length)));

  onMount(() => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem('yjcdon:language');
    } catch (error) {
      if (!(error instanceof DOMException) || !['SecurityError', 'QuotaExceededError'].includes(error.name)) throw error;
    }
    language = saved === 'zh' || saved === 'en' ? saved
      : navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en';
    ready = true;
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      if (inView) loadedTools = new Set([...loadedTools, activeId]);
    }, { rootMargin: '160px' });
    observer.observe(section);
    return () => observer.disconnect();
  });

  $effect(() => {
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  });

  /** Persist the language choice while allowing browsers that restrict storage. */
  function toggleLanguage() {
    language = language === 'zh' ? 'en' : 'zh';
    try {
      localStorage.setItem('yjcdon:language', language);
    } catch (error) {
      if (!(error instanceof DOMException) || !['SecurityError', 'QuotaExceededError'].includes(error.name)) throw error;
    }
  }

  /** Select one tool and keep its entry and heading visible at either screen size. */
  async function selectTool(tool: Tool, button: HTMLButtonElement) {
    activeId = tool.id;
    if (tool.extension) extensionsOpen = true;
    if (inView) loadedTools = new Set([...loadedTools, tool.id]);
    const narrow = matchMedia('(max-width: 760px)').matches;
    if (narrow) pickerOpen = false;
    await tick();
    if (narrow) {
      picker.focus({ preventScroll: true });
    } else {
      const overflow = button.getBoundingClientRect().bottom - controls.getBoundingClientRect().bottom;
      if (overflow > 0) controls.scrollTop += overflow;
    }
    if (browser.getBoundingClientRect().top < header.getBoundingClientRect().bottom) {
      browser.scrollIntoView({ block: 'start', behavior: 'instant' });
    }
  }

  /** Reveal the current entry when opening a long mobile directory. */
  async function togglePicker() {
    pickerOpen = !pickerOpen;
    if (!pickerOpen) return;
    if (activeTool.extension) extensionsOpen = true;
    await tick();
    const button = list.querySelector<HTMLButtonElement>('[aria-current="true"]')!;
    const item = button.getBoundingClientRect();
    const viewport = list.getBoundingClientRect();
    if (item.top < viewport.top + 6) list.scrollTop += item.top - viewport.top - 6;
    else if (item.bottom > viewport.bottom - 6) list.scrollTop += item.bottom - viewport.bottom + 6;
  }

  /** Escape closes the mobile directory and returns focus to its trigger. */
  function closePicker(event: KeyboardEvent) {
    if (event.key !== 'Escape' || !pickerOpen || !matchMedia('(max-width: 760px)').matches) return;
    event.preventDefault();
    pickerOpen = false;
    picker.focus();
  }

  /** Remember the original link so dismissing the preview restores keyboard focus. */
  function showPreview(image: ToolImage, trigger: HTMLAnchorElement) {
    previewTrigger = trigger;
    previewImage = image;
  }
</script>

<svelte:head>
  <title>{text.pageTitle}</title>
  <meta name="description" content={text.pageDescription} />
  <meta property="og:title" content={text.pageTitle} />
  <meta property="og:description" content={text.pageDescription} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://yjcdon.github.io/" />
  <link rel="canonical" href="https://yjcdon.github.io/" />
  <link rel="preload" href={pixelFont} as="font" type="font/woff2" crossorigin="anonymous" />
</svelte:head>

{#snippet toolButton(tool: Tool)}
  <button class="carousel-dot" type="button" aria-controls="tool-track"
    aria-label={text.showTool.replace('{name}', tool.name[language])}
    aria-current={activeId === tool.id ? 'true' : 'false'} title={tool.name[language]}
    onclick={(event) => selectTool(tool, event.currentTarget)} onkeydown={closePicker}>
    <img src={loadedTools.size ? tool.icon : undefined} width="64" height="64" alt="" decoding="async" />
    <span class="station-name">{tool.navName[language]}</span>
  </button>
{/snippet}

<a class="skip-link" href="#main">{text.skip}</a>
<div class="header-shell" bind:this={header}>
  <header class="site-header wrap">
    <a class="wordmark" href="#intro" aria-label={text.homeLabel}>yjcdon</a>
    <div class="header-actions">
      <nav aria-label={text.navigation}>
        <a href="#intro">{text.introLabel}</a>
        <a href="#tools">{text.toolsLabel}</a>
        <a class="github-link" href="https://github.com/yjcdon" target="_blank" rel="noopener noreferrer">GitHub</a>
      </nav>
      <div class="preferences" role="group" aria-label={text.preferences} hidden={!ready}>
        <button id="language-toggle" class="preference-button language-toggle" type="button"
          aria-label={text.switchLanguage} title={text.switchLanguage} onclick={toggleLanguage}>
          <span id="language-label">{language === 'zh' ? 'EN' : '中'}</span>
        </button>
      </div>
    </div>
  </header>
</div>
<main id="main">
  <section id="intro" class="intro" aria-labelledby="intro-title">
    <IntroArt />
    <div class="intro-inner wrap">
      <div class="intro-copy">
        <h1 id="intro-title">{text.greeting}</h1>
        <p class="intro-lead">{text.employment}</p>
        <p class="intro-body">{text.background}</p>
        <p class="contact"><span>{text.contactLabel}</span><a href="mailto:yjcdon@gmail.com">yjcdon@gmail.com</a></p>
      </div>
    </div>
  </section>
  <section id="tools" class="tools" aria-labelledby="tools-title" bind:this={section}>
    <div class="wrap">
      <div class="section-heading"><h2 id="tools-title">{text.toolsHeading}</h2></div>
      <div id="tool-carousel" class="tool-carousel" class:tool-browser={ready} bind:this={browser}>
        <div class="carousel-controls" hidden={!ready} bind:this={controls}>
          <button id="tool-picker" class="tool-picker" type="button" bind:this={picker}
            aria-expanded={pickerOpen} aria-controls="tool-list" aria-labelledby="tool-picker-label tool-picker-name"
            onclick={togglePicker} onkeydown={closePicker}>
            <span id="tool-picker-label" class="visually-hidden">{text.toolNavigation}</span>
            <img src={loadedTools.size ? activeTool.icon : undefined} width="26" height="26" alt="" hidden={!loadedTools.size} />
            <span id="tool-picker-name">{activeTool.name[language]}</span>
          </button>
          <div id="tool-list" class="carousel-dots" role="group" aria-label={text.toolNavigation}
            bind:this={list}>
            {#each tools.filter((tool) => !tool.extension) as tool (tool.id)}
              {@render toolButton(tool)}
            {/each}
            <details class="extension-group" bind:open={extensionsOpen}>
              <summary onkeydown={closePicker} class="carousel-dot extension-summary" class:contains-current={activeTool.extension}>
                <img src={loadedTools.size ? '/assets/chrome-pixel.svg?v=2' : undefined} width="64" height="64" alt="" decoding="async" />
                <span class="station-name">{text.browserExtensions}</span>
              </summary>
              <div class="extension-options">
                {#each tools.filter((tool) => tool.extension) as tool (tool.id)}
                  {@render toolButton(tool)}
                {/each}
              </div>
            </details>
          </div>
          <p id="tool-status" class="visually-hidden" role="status" aria-live="polite" aria-atomic="true">{status}</p>
        </div>
        <div id="tool-track" class="tool-track" role="region" aria-label={text.toolGallery}>
          {#each tools as tool (tool.id)}
            <article class="tool-card" aria-labelledby={tool.id + '-title'} hidden={ready && activeId !== tool.id}>
              <div class="featured-copy">
                <h3 id={tool.id + '-title'}>{tool.name[language]}</h3>
                {#if tool.platform}<div class="card-top"><span class="platform">{tool.platform[language]}</span></div>{/if}
                {#each tool.paragraphs as paragraph}
                  <p class={paragraph.kind === 'tagline' ? 'tool-tagline' : 'tool-description'}>
                    {#each paragraph.lines as line, index}{#if index > 0}<br />{/if}{line[language]}{/each}
                  </p>
                {/each}
                <div class="card-links">
                  {#each tool.links as link}
                    <a class={link.primary ? 'button small' : 'text-link'} href={link.href}
                      target="_blank" rel="noopener noreferrer">{link.label[language]}</a>
                  {/each}
                </div>
              </div>
              <ToolGallery images={tool.images} {language} enabled={loadedTools.has(tool.id)} onpreview={showPreview} />
            </article>
          {/each}
        </div>
      </div>
    </div>
  </section>
</main>
<footer class="world-footer"><span aria-hidden="true">+</span> {text.worldFooter} <span aria-hidden="true">+</span></footer>
<ImagePreview bind:image={previewImage} {language} trigger={previewTrigger} />
