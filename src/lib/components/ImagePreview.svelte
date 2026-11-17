<script lang="ts">
  import { messages, type Language, type ToolImage } from '$lib/content';

  let { image = $bindable(null), language, trigger }: {
    image: ToolImage | null;
    language: Language;
    trigger: HTMLAnchorElement | null;
  } = $props();

  let dialog = $state<HTMLDialogElement>();
  let closeButton: HTMLButtonElement;

  $effect(() => {
    if (!dialog) return;
    if (image && !dialog.open) {
      dialog.showModal();
      closeButton.focus();
    }
    else if (!image && dialog.open) dialog.close();
  });

  /** Restore the opening screenshot's keyboard focus after every native close path. */
  function closePreview() {
    image = null;
    trigger?.focus({ preventScroll: true });
  }

  /** A click beyond the dialog's bounds closes the preview through its native close event. */
  function closeOnBackdrop(event: MouseEvent) {
    if (!dialog || event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) {
      dialog.close();
    }
  }
</script>

<dialog
  bind:this={dialog}
  id="image-dialog"
  aria-label={messages[language].imagePreview}
  onclose={closePreview}
  onclick={closeOnBackdrop}
>
  <div class="image-toolbar">
    <a
      id="image-original"
      class="text-link"
      href={image?.src}
      target="_blank"
      rel="noopener noreferrer"
    >{messages[language].viewOriginal}</a>
    <button bind:this={closeButton} id="image-close" type="button" onclick={() => dialog?.close()}>
      {messages[language].closeImage}
    </button>
  </div>
  {#if image}
    <img id="image-full" src={image.src} alt={image.alt[language]}>
  {/if}
</dialog>
