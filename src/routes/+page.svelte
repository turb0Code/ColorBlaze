<script lang="js">

import { colors } from "$lib/scripts/color-stores.js";

import { Alert, Button, Breadcrumb, BreadcrumbItem, Spinner, Card, Toggle, Label, Input, Checkbox, Drawer, CloseButton, Sidebar, SidebarDropdownItem, SidebarDropdownWrapper, SidebarGroup, SidebarItem, SidebarWrapper, Dropdown, DropdownItem, Popover, Radio, Range } from 'flowbite-svelte';

import { InfoCircleSolid, HomeOutline, ChevronDoubleRightOutline, ArrowRightOutline, CheckCircleSolid, ChartPieSolid, ShoppingCartSolid, GridSolid, MailBoxSolid, UsersSolid, BagSolid, ArrowRightToBracketSolid, FileEditSolid, ChevronDownSolid, ChevronRightSolid, DatabaseSolid, ChevronRightOutline } from 'flowbite-svelte-icons';

let mainColor = "#000000";
  let accentColor = "#000000";
  let accent2Color = "#000000";
  let accent3Color = "#000000";

  colors.subscribe(() => {
    mainColor = $colors[0];
    if (!$colors[1]) {
      accentColor = mainColor;
      accent2Color = mainColor;
      accent3Color = mainColor;
    }
    else if (!$colors[2]) {
      accentColor = $colors[1];
      accent2Color = mainColor;
      accent3Color = $colors[1];
    }
    else if (!$colors[3]) {
      accentColor = $colors[1];
      accent2Color = $colors[2];
      accent3Color = $colors[1];
    }
    else {
      accentColor = $colors[1];
      accent2Color = $colors[2];
      accent3Color = $colors[3];
    }
  });

import autoAnimate from '@formkit/auto-animate';
import ColorPicker from "../lib/components/color-picker.svelte";
import ColorHarmony from "../lib/components/color-harmony.svelte";
import FileExport from "$lib/components/file-export.svelte";
import ColorPreview from "../lib/components/color-preview.svelte";
import ImagesPreview from "../lib/components/images-preview.svelte";
import { onMount } from "svelte";

import Version3Chart from "../lib/components/presentation/version3-chart.svelte";
import Version3Images from "../lib/components/presentation/version3-images.svelte";
import Version3Table from "../lib/components/presentation/version3-table.svelte";
import Version3Title from "../lib/components/presentation/version3-title.svelte";

import {ArrowKeyRight, ArrowKeyLeft } from 'flowbite-svelte';

let isMobile = false;

onMount(() => {
  const userAgent = window.navigator.userAgent;
  isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
});

  let currentIndex3 =  0;

  function showSlide3(index3) {
    currentIndex3 = index3;
  }

  function nextSlide3() {
    const nextIndex3 = (currentIndex3 +  1) %  4;
    showSlide3(nextIndex3);
  }

  function prevSlide3() {
    const prevIndex3 = (currentIndex3 -  1 +  4) %  4;
    showSlide3(prevIndex3);
  }

  const slides3 = [
    Version3Title,
    Version3Images,
    Version3Table,
    Version3Chart,
  ];

</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<!-- main -->
<div class="grid-box grid grid-cols-1 grid-rows-1">

  <!-- lewa strona -->
  <div use:autoAnimate>
    <ColorPicker></ColorPicker>
  </div>

  <!-- prawa strona -->
  <div class="" use:autoAnimate>
    <ColorHarmony></ColorHarmony>

    {#if !isMobile}
      <FileExport></FileExport>
    {:else}
      <div class="clear-left"></div>
    {/if}

    <ColorPreview class="" ></ColorPreview>

    {#if !isMobile}
      <ImagesPreview></ImagesPreview>
    {/if}
  </div>

  {#if !isMobile}

  <div class="right-0 mt-20 grid grid-cols-1">

      <div class="carousel mb-0" use:autoAnimate>

        <div class="z-0 h-56 absolute mb-0">
          <button id="nextButton" class="bg-gray-200 w-[2rem] h-56 flex ml-[22rem] opacity-0 lg:opacity-5 lg:hover:opacity-30" on:click={nextSlide3}><ArrowKeyRight class="h-0 ml-4 lg:h-24 lg:mt-16"></ArrowKeyRight></button>
        </div>

        {#if !isMobile}
        <div class="z-0 h-56 absolute">
          <button id="prevButton" class="bg-gray-200 w-8 h-56 flex right-0 opacity-5 hover:opacity-30" on:click={prevSlide3}><ArrowKeyLeft class="h-24 mt-16"></ArrowKeyLeft></button>
        </div>
        {/if}

        {#each slides3 as SlideComponent, index3 (index3)}
          {#if currentIndex3 === index3}
            <div class="slide">
              <SlideComponent />
            </div>
          {/if}
        {/each}

      </div>

      <div class="ml-12 mt-0">
        <Button style={`background-color: ${mainColor};`} class="flex-1 mr-2 h-10 w-48">Button</Button>
        <Button style={`background-color: ${accentColor};`} class="flex-1 h-10 w-48">Button</Button>
        <Button style={`background: linear-gradient(45deg, ${mainColor}, ${accent3Color});`} class="flex-1 mr-2 w-48">Button</Button>
        <Button style={`background: linear-gradient(45deg, ${accent2Color}, ${accentColor});`} class="flex-1 w-48">Button</Button>
        <Input style={`background-color: ${mainColor}; color: ${accentColor};`} placeholder="Default input" class="mr-2 h-10 w-48"/>
        <Button class="flex-1 mr-2 h-10 w-48" style={`background-color: ${accentColor};`}>
          <Spinner class="me-3" size="4" color="white" />Loading ...
        </Button>
        <Button id="hover" class="mr-2 flex-1 h-10 w-48" style={`background-color: ${accent3Color};`}>Hover popover</Button>
        <Button class="w-48 flex-1" style={`background-color: ${accent2Color};`}>Dropdown checkbox<ChevronDownSolid class="w-3 h-3 ms-2 text-white dark:text-white" /></Button>
        <Dropdown class="w-48 p-3 space-y-1 text-sm">
          <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
            <Checkbox>Default checkbox</Checkbox>
          </li>
          <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
            <Checkbox checked>Checked state</Checkbox>
          </li>
          <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
            <Checkbox>Default checkbox</Checkbox>
          </li>
        </Dropdown> 
      </div>

  </div>

  {/if}

</div>

<style>


  .grid-box {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 1fr;
  }

  @media (max-width: 779px) {
    .grid-box {
      grid-template-columns: 1fr;
    }
  }

  .carousel {
    position: relative;
    width:  100%;
  }
</style>
