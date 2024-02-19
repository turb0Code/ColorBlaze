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
    MegaMenu,
  } from "flowbite-svelte";
  import { ChevronDownOutline } from "flowbite-svelte-icons";
  import FileExport from "$lib/components/file-export.svelte";
  import PalletePreview from "../lib/components/pallete-preview.svelte";

  let src = "$lib/images/logo.svg";
  let menu = [
    { name: "Website", href: "/example" },
    { name: "Presentation", href: "/presentation" },
    { name: "Images", href: "/images" },
  ];

  import { saveJson } from "$lib/scripts/exporting.js";
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

<Navbar let:hidden let:toggle class="opacity-75 rounded-b-xl bg-accent2/70 dark:bg-accent3/40">
  <NavBrand href="/">
    <div class="w-14 h-14">
      <img src="src/lib/images/logo.svg" alt="ColorBlaze logo"/>
    </div>
    <span class="self-center whitespace-nowrap text-2xl font-semibold dark:text-main">ColorBlaze</span>
  </NavBrand>
  <NavHamburger on:click={toggle} />
  <NavUl {hidden}>
    <NavLi href="/">Home</NavLi>
    <NavLi href="/example">Website</NavLi>
    <NavLi href="/presentation">Presentation</NavLi>
    <NavLi href="/images">Images</NavLi>
    <NavLi href="/services">Contact</NavLi>
    <div class="grid grid-cols-3">
      <div class="flex flex-row w-[14.5rem] justify-between opacity-100">
      <PalletePreview></PalletePreview>
      <Button class="lg:w-auto h-10"  on:click={() => darkMode.set(!$darkMode)}>
          {#if $darkMode}
            <SunSolid />
          {:else}
            <MoonSolid />
          {/if}
        </Button>

      <Button on:click={saveJson($colors)} class="clear-left ml-2 mr-0 lg:m-0 lg:w-0 lg:h-0 lg:p-0">
        <ArrowDownToBraketSolid class="lg:w-0 lg:h-0"/>
      </Button>
    
      <Button class="clear-left ml-2 mr-0 lg:m-0 lg:w-0 lg:h-0 lg:p-0" on:click={() => document.getElementById("file-picker").click()}>
        <ArrowUpFromBracketSolid class="lg:w-0 lg:h-0"/>
      </Button>
    </div>

    <input type="file" style="display: none;" id="file-picker" bind:files/>
    </div>
  </NavUl>
</Navbar>