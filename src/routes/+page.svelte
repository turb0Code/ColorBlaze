<!--
  @component

  Main page which connects every other component.
-->

<script>
  import autoAnimate from '@formkit/auto-animate';
  import ColorPicker from "../lib/components/color-picker.svelte";
  import ColorHarmony from "../lib/components/color-harmony.svelte";
  import FileExport from "$lib/components/file-export.svelte";
  import ColorPreview from "../lib/components/color-preview.svelte";
  import ImagesPreview from "../lib/components/images-preview.svelte";
  import QuickPreview from '../lib/components/quick-preview.svelte';
  import { onMount } from 'svelte';

  let isMobile = false;

  onMount(() => {
    const userAgent = window.navigator.userAgent;
    isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  });
</script>

<svelte:head>
  <title>Color Blaze</title>
  <meta name="description" content="Color Blaze app." />
</svelte:head>

<!-- main -->
<div class="grid-box grid grid-cols-1 grid-rows-1">

  <!-- lewa strona -->
  <div use:autoAnimate>
    <ColorPicker></ColorPicker>
  </div>

  <!-- srodek -->
  <div class="flex flex-col items-center">
    <div>


      <div class="grid grid-cols-1">
        <div>
        <ColorHarmony></ColorHarmony>
        {#if !isMobile}
        <FileExport></FileExport>
        {:else}
          <div class="clear-left"></div>
        {/if}
        </div>
        <ColorPreview></ColorPreview>
      </div>

      {#if !isMobile}
        <ImagesPreview></ImagesPreview>
      {/if}

    </div>
  </div>

  {#if !isMobile}

  <!-- prawa strona-->
  <div class="right-0 grid grid-cols-1 ml-5">

    <QuickPreview></QuickPreview>

  </div>

  {/if}

</div>

<style>
  .grid-box {
    display: grid;
    grid-template-columns: 1fr 2fr 2fr;
    grid-template-rows: 1fr;
    align-self: center;
  }

  @media (max-width: 779px) {
    .grid-box {
      grid-template-columns: 1fr;
    }
  }
</style>
