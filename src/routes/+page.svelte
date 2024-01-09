<script lang="js">
  import ColorPicker from "../lib/components/color-picker.svelte";
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="grid grid-cols-2 grid-rows-1">
  <div>
    <ColorPicker></ColorPicker>
  </div>

  <div></div>
</div>

<style>
  :root {
    --tool-cool-color-picker-btn-bg: rgba(0, 0, 0, 0);
    --tool-cool-color-picker-btn-border-color: rgba(0, 0, 0, 0);
    --tool-cool-color-picker-btn-border-color-inner: rgba(0, 0, 0, 0);
    --tool-cool-color-picker-btn-border-radius: 0rem;
    --tool-cool-color-picker-btn-border-radius-inner: 0rem;
  }
</style>
