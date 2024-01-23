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

  let menu = [
    { name: "About us", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact us", href: "/contact" },
    { name: "Library", href: "/library" },
    { name: "Newsletter", href: "/news" },
    { name: "Support Center", href: "/support" },
    { name: "Resources", href: "/resource" },
    { name: "Playground", href: "/play" },
    { name: "Terms", href: "/terms" },
    { name: "Pro Version", href: "/pro" },
    { name: "License", href: "/license" },
  ];
</script>

<Navbar let:hidden let:toggle>
  <NavBrand href="/">
    <img
      src="/images/flowbite-svelte-icon-logo.svg"
      class="me-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    />
    <span
      class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
      >Flowbite</span
    >
  </NavBrand>
  <NavHamburger on:click={toggle} />
  <NavUl {hidden}>
    <NavLi href="/">Home</NavLi>
    <NavLi class="cursor-pointer"
      >More Examples<ChevronDownOutline
        class="w-3 h-3 ms-2 text-primary-800 dark:text-white inline"
      /></NavLi
    >
    <MegaMenu items={menu} let:item>
      <a
        href={item.href}
        class="hover:text-primary-600 dark:hover:text-primary-500"
        >{item.name}</a
      >
    </MegaMenu>
    <NavLi href="/services">Contact</NavLi>
    <Button on:click={() => darkMode.set(!$darkMode)}>
      {#if $darkMode}
        <SunSolid />
      {:else}
        <MoonSolid />
      {/if}
    </Button>
  </NavUl>
</Navbar>
