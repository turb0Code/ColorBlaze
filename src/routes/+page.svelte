<script lang="js">
  import ColorPicker from "../lib/components/color-picker.svelte";
  import ColorHarmony from "../lib/components/color-harmony.svelte";
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="grid-box">
  <div>
    <ColorPicker></ColorPicker>
  </div>

  <div>
    <ColorHarmony></ColorHarmony>
  </div>
</div>

<style>
  .grid-box {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1fr;
  }
</style>
