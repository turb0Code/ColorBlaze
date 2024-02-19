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

  let src = "$lib/images/logo.svg";
  let menu = [
    { name: "Website", href: "/example" },
    { name: "Presentation", href: "/presentation" },
    { name: "Images", href: "/images" },
  ];
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
    <Button class="w-1/3 lg:w-auto"  on:click={() => darkMode.set(!$darkMode)}>
      {#if $darkMode}
        <SunSolid />
      {:else}
        <MoonSolid />
      {/if}
    </Button>
  </NavUl>
</Navbar>