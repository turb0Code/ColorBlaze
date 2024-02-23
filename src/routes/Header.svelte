<script>
  import { Button } from "flowbite-svelte";
  import { SunSolid, MoonSolid } from "flowbite-svelte-icons";
  import { darkMode } from "$lib/scripts/theme-preferences.js";
  import {
    Navbar,
    NavBrand,
    NavHamburger,
    NavUl,
    NavLi,
    ButtonGroup
  } from "flowbite-svelte";
  import PalletePreview from "../lib/components/pallete-preview.svelte";
  import { saveJson } from "$lib/scripts/exporting.js";
  import { ArrowDownToBraketSolid, ArrowUpFromBracketSolid } from "flowbite-svelte-icons";
  import { colors } from "$lib/scripts/color-stores.js";
  import { h, s, l, distance, complement, harmony, callUpdatePosition } from "$lib/scripts/stores.js";
  import { onMount } from "svelte";

  let isMobile = false;
  let files;

  onMount(() => {
    const userAgent = window.navigator.userAgent;
    isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  });

  const readJson = (file) => {
    if (!file) return;
    const reader = new FileReader();

    reader.onload = (event) => {
      const content = event.target.result;

      try {
        const jsonData = JSON.parse(content);
        $colors = jsonData.colors;
        h.set(jsonData.main.h);
        s.set(jsonData.main.s);
        l.set(jsonData.main.l);
        harmony.set(jsonData.harmony);
        complement.set(jsonData.complement);
        distance.set(jsonData.distance);
        callUpdatePosition.set(!$callUpdatePosition);
      }
      catch (error) { console.error('Error while reading JSON:', error); }
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

<Navbar let:hidden let:toggle class="opacity-75 rounded-b-xl bg-accent2/70 dark:bg-accent3/40">
  <NavBrand href="/">
    <div class="w-14 h-14">
      <img src="src/lib/images/logo.svg" alt="ColorBlaze logo"/>
    </div>
    <span class="self-center whitespace-nowrap text-2xl font-semibold dark:text-main">ColorBlaze</span>
  </NavBrand>
  <NavHamburger on:click={toggle} />
  <NavUl {hidden} >
    <NavLi href="/">Home</NavLi>
    <NavLi href="/example" >Website</NavLi>
    <NavLi href="/presentation">Presentation</NavLi>
    <NavLi href="/images">Images</NavLi>
    <div class="flex flex-row w-[20.5rem] lg:w-[14.5rem] justify-between opacity-100">
        {#if !isMobile}
        <PalletePreview></PalletePreview>
        {/if}
        <Button class="w-[100%] lg:w-auto h-10"  on:click={() => darkMode.set(!$darkMode)}>
            {#if $darkMode}
              <SunSolid />
            {:else}
              <MoonSolid />
            {/if}
        </Button>
    </div>

    {#if isMobile}
      <ButtonGroup class="w-[20.5rem] space-x-px mt-3">
        <Button on:click={saveJson($colors)} class="ml-0 mr-1 w-[100%]">
          <ArrowDownToBraketSolid class=""/>
        </Button>

        <Button class="ml-1 mr-2 w-[100%]" on:click={() => document.getElementById("file-picker").click()}>
          <ArrowUpFromBracketSolid class=""/>
        </Button>
      </ButtonGroup>

      <input type="file" style="display: none;" id="file-picker" bind:files/>
    {/if}
  </NavUl>
</Navbar>