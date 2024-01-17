<script lang="js">
  import ColorPicker from "../lib/components/color-picker.svelte";
  import { DarkMode } from "flowbite-svelte";
  import ColorHarmony from "../lib/components/color-harmony.svelte";
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="grid grid-cols-2 grid-rows-1">
  <div>
    <ColorPicker></ColorPicker>
  </div>

  <div>
    <ColorHarmony></ColorHarmony>
  </div>
</div>
