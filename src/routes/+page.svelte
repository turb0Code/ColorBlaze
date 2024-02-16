<script lang="js">
  import ColorPicker from "../lib/components/color-picker.svelte";
  import ColorHarmony from "../lib/components/color-harmony.svelte";
  import FileExport from "$lib/components/file-export.svelte";
  import ColorPreview from "../lib/components/color-preview.svelte";
  import ColorConverter from 'simple-color-converter';
  import ImagesPreview from "../lib/components/images-preview.svelte";
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
  <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
</svelte:head>

<!-- main -->
<div class="grid-box grid grid-cols-1 grid-rows-1">

  <!-- lewa strona -->
  <div>
    <ColorPicker></ColorPicker>
  </div>

  <!-- prawa strona -->
  <div>
    <ColorHarmony></ColorHarmony>

    <FileExport></FileExport>

    <ColorPreview></ColorPreview>

    <ImagesPreview></ImagesPreview>
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
