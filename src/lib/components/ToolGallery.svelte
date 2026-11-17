<script lang="ts">
  import { messages, type Language, type ToolImage } from '$lib/content';

  let { images, language, enabled, onpreview }: {
    images: ToolImage[];
    language: Language;
    enabled: boolean;
    onpreview: (image: ToolImage, trigger: HTMLAnchorElement) => void;
  } = $props();

  let frame = $state<HTMLDivElement>();
  let activeImage = $state(0);
  let requestedImage: number | undefined;
  let loaded = $state(false);
  let dragging = $state(false);
  let dragStart: { id: number; x: number; y: number; index: number } | undefined;
  let suppressClick = false;
  const placeholder = 'data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27/%3E';

  $effect(() => {
    if (enabled) loaded = true;
  });

  $effect(() => {
    if (!frame) return;
    const element = frame;
    const observer = new ResizeObserver(() => {
      if (!element.clientWidth) return;
      element.scrollTo({
        left: (requestedImage ?? activeImage) * element.clientWidth,
        behavior: 'instant',
      });
    });
    observer.observe(element);
    return () => observer.disconnect();
  });

  /** Buttons wrap between screenshots; native scrolling and dragging stop at the ends. */
  function showImage(index: number) {
    if (!frame) return;
    requestedImage = (index + images.length) % images.length;
    frame.scrollTo({
      left: requestedImage * frame.clientWidth,
      behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
    });
  }

  /** Track the visible screenshot while native wheel and touch scrolling settle. */
  function trackScroll() {
    if (!frame?.clientWidth) return;
    activeImage = Math.max(0, Math.min(images.length - 1, Math.round(frame.scrollLeft / frame.clientWidth)));
  }

  /** Start mouse dragging only; touch gestures stay with the browser. */
  function startDrag(event: PointerEvent) {
    suppressClick = false;
    requestedImage = undefined;
    if (!event.isPrimary || event.button !== 0 || event.pointerType !== 'mouse') return;
    dragStart = { id: event.pointerId, x: event.clientX, y: event.clientY, index: activeImage };
  }

  /** Capture a deliberate horizontal drag while allowing vertical page gestures. */
  function moveDrag(event: PointerEvent) {
    if (!frame || dragStart?.id !== event.pointerId) return;
    const dx = event.clientX - dragStart.x;
    const dy = event.clientY - dragStart.y;
    if (!frame.hasPointerCapture(event.pointerId)) {
      if (Math.abs(dx) < 10 || Math.abs(dx) <= Math.abs(dy)) return;
      frame.setPointerCapture(event.pointerId);
      dragging = true;
      suppressClick = true;
    }
    frame.scrollLeft = dragStart.index * frame.clientWidth - dx;
  }

  /** Snap a completed drag to its neighboring screenshot, preserving the endpoint limits. */
  function finishDrag(event: PointerEvent) {
    if (!frame || dragStart?.id !== event.pointerId) return;
    const start = dragStart;
    dragStart = undefined;
    if (!frame.hasPointerCapture(event.pointerId)) return;
    frame.releasePointerCapture(event.pointerId);
    dragging = false;
    const dx = event.clientX - start.x;
    const step = Math.abs(dx) >= 36 ? -Math.sign(dx) : 0;
    showImage(Math.max(0, Math.min(images.length - 1, start.index + step)));
  }

  /** Release drag state when the browser cancels or transfers pointer capture. */
  function cancelDrag() {
    dragStart = undefined;
    dragging = false;
  }

  /** Open the original image preview on ordinary clicks, preserving modified link clicks. */
  function preview(event: MouseEvent, image: ToolImage) {
    if (suppressClick && event.detail !== 0) {
      event.preventDefault();
      suppressClick = false;
      return;
    }
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    onpreview(image, event.currentTarget as HTMLAnchorElement);
  }
</script>

{#snippet screenshot(image: ToolImage, index: number)}
  <figure class="tool-preview">
    <a
      class="image-link"
      href={image.src}
      aria-label={image.label[language]}
      tabindex={index === activeImage ? 0 : -1}
      data-sveltekit-reload
      onclick={(event) => preview(event, image)}
      ondragstart={(event) => event.preventDefault()}
    >
      <img
        src={loaded ? image.src : placeholder}
        alt={image.alt[language]}
        width={image.width}
        height={image.height}
        loading={images.length > 1 ? 'eager' : 'lazy'}
        decoding="async"
      >
    </a>
  </figure>
{/snippet}

{#if images.length > 1}
  <div
    bind:this={frame}
    class="tool-gallery-frame"
    class:is-dragging={dragging}
    role="region"
    aria-label={messages[language].imagePreview}
    style:aspect-ratio={`${images[0].width} / ${images[0].height}`}
    onscroll={trackScroll}
    onscrollend={() => { requestedImage = undefined; }}
    onwheel={() => { requestedImage = undefined; }}
    onpointerdown={startDrag}
    onpointermove={moveDrag}
    onpointerup={finishDrag}
    onlostpointercapture={cancelDrag}
    onpointercancel={cancelDrag}
  >
    {#each images as image, index (image.src)}
      {@render screenshot(image, index)}
    {/each}
  </div>
  <div class="tool-gallery-controls">
    <button
      class="carousel-arrow"
      type="button"
      aria-label={messages[language].previousImage}
      onclick={() => showImage((requestedImage ?? activeImage) - 1)}
    >&lt;</button>
    <span role="status">{activeImage + 1} / {images.length}</span>
    <button
      class="carousel-arrow"
      type="button"
      aria-label={messages[language].nextImage}
      onclick={() => showImage((requestedImage ?? activeImage) + 1)}
    >&gt;</button>
  </div>
{:else if images.length === 1}
  {@render screenshot(images[0], 0)}
{/if}
