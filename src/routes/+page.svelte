<script lang="js">
  import ColorPicker from "../lib/components/color-picker.svelte";
  import ColorHarmony from "../lib/components/color-harmony.svelte";
  import FileExport from "$lib/components/file-export.svelte";
  import ColorPreview from "../lib/components/color-preview.svelte";
  import ColorConverter from 'simple-color-converter';
  import ImagesPreview from "../lib/components/images-preview.svelte";
  import { onMount } from "svelte";

  let isMobile = false;

  onMount(() => {
    const userAgent = window.navigator.userAgent;
    isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  });

  import { saveJson } from "$lib/scripts/exporting.js";
    import { Button } from "flowbite-svelte";
    import { ArrowDownToBraketSolid, ArrowUpFromBracketSolid } from "flowbite-svelte-icons";
    import { colors } from "$lib/scripts/color-stores.js";
    import { h, s, l, distance, complement, harmony, callUpdatePosition } from "$lib/scripts/stores.js";

    let files;

    const readJson = (file) => {
        if (!file) return;
        const reader = new FileReader();

        reader.onload = (event) => {
            const content = event.target.result;

            try {
                const jsonData = JSON.parse(content);
                $colors = jsonData.colors;
                console.log($colors);
                h.set(jsonData.main.h);
                s.set(jsonData.main.s);
                l.set(jsonData.main.l);
                harmony.set(jsonData.harmony);
                complement.set(jsonData.complement);
                distance.set(jsonData.distance);
                callUpdatePosition.set(!$callUpdatePosition);
            } catch (error) { console.error('Error while reading JSON:', error); }
        };
        reader.readAsText(file);
    }

    $: if(files) {
        for (const file of files) {
            console.log(file);
            readJson(file);
        }
        files = null;
    }

    export const assignValues = (H, S, L) => {
        h.set(H);
        s.set(S);
        l.set(L);
    }

    
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
    <Button on:click={saveJson($colors)} class="lg:clear-left lg:mt-[1.25rem] lg:w-[4rem] lg:ml-2 lg:mr-0 lg:opacity-100">
      <ArrowDownToBraketSolid class=""/>
    </Button>
  
    <Button class="lg:clear-left lg:mt-[1.25rem] lg:ml-1 lg:w-[4rem] lg:h-[2.5rem] lg:p-0 lg:opacity-100" on:click={() => document.getElementById("file-picker").click()}>
      <ArrowUpFromBracketSolid class=""/>
    </Button>

    {:else}
    <div class="clear-left"></div>

    {/if}

    <ColorPreview class=""></ColorPreview>

    {#if !isMobile}
      <ImagesPreview></ImagesPreview>
    {/if}
  </div>

  <input type="file" style="display: none;" id="file-picker" bind:files/>

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
