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

<Navbar let:hidden let:toggle class="opacity-100 rounded-b-xl bg-accent2/70 dark:bg-accent3/40">
  <NavBrand href="/">
    <div class="w-16 h-16">
      <img src="/logo.svg" alt="ColorBlaze logo"/>
    </div>
    <span class="self-center whitespace-nowrap text-[1.7rem] font-bold bg-gradient-to-r from-accent/100 via-main to-accent4 inline-block text-transparent bg-clip-text">ColorBlaze</span>
  </NavBrand>
  <NavHamburger on:click={toggle} />
  <NavUl {hidden} class="flex items-center h-16 mb-0" style="align-items:center margin-bottom:0px">
    <div class="flex flex-row w-64 justify-evenly items-center mr-8 space-x-5">
    <NavLi href="/" class="text-[0.96rem] mb-0" style="margin-bottom:0px"><p>Home</p></NavLi>
    <NavLi href="/example" class="text-[0.96rem]"><p>Website</p></NavLi>
    <NavLi href="/presentation" class="text-[0.96rem]"><p>Presentations</p></NavLi>
    <NavLi href="/images" class="text-[0.96rem]"><p>Images</p></NavLi>
    </div>
    <div class="flex flex-row w-[20.5rem] lg:w-[14.5rem] justify-between opacity-100">
        {#if !isMobile}
        <PalletePreview class="opacity-100"></PalletePreview>
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