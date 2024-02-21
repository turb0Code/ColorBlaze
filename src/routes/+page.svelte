<script lang="js">
import ColorPicker from "../lib/components/color-picker.svelte";
import ColorHarmony from "../lib/components/color-harmony.svelte";
import FileExport from "$lib/components/file-export.svelte";
import ColorPreview from "../lib/components/color-preview.svelte";
import ImagesPreview from "../lib/components/images-preview.svelte";
import { onMount } from "svelte";

let isMobile = false;

onMount(() => {
  const userAgent = window.navigator.userAgent;
  isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
});

</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<!-- main -->
<div class="grid-box grid grid-cols-1 grid-rows-1">

  <!-- lewa strona -->
  <div>
    <ColorPicker></ColorPicker>
  </div>

  <!-- prawa strona -->
  <div class="">
    <ColorHarmony></ColorHarmony>

    {#if !isMobile}
      <FileExport></FileExport>
    {:else}
      <div class="clear-left"></div>
    {/if}

    <ColorPreview class=""></ColorPreview>

    {#if !isMobile}
      <ImagesPreview></ImagesPreview>
    {/if}
  </div>

</div>

<style>
  .grid-box {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1fr;
  }

  @media (max-width: 779px) {
    .grid-box {
      grid-template-columns: 1fr;
    }
  }
</style>
