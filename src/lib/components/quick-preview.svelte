<!--
  @component

  This component is used to display preview of generated palette on main page.
-->

<script>
  import { onMount } from "svelte";
  import { colors } from "$lib/scripts/color-stores.js";
  import { Button, Spinner, Label, Input, Checkbox, Dropdown, Popover } from 'flowbite-svelte';
  import {ChevronDownSolid } from 'flowbite-svelte-icons';
  import {ArrowKeyRight, ArrowKeyLeft } from 'flowbite-svelte';
  import autoAnimate from '@formkit/auto-animate';
  import Version3Chart from "$lib/components/presentation/version3-chart.svelte";
  import Version3Images from "$lib/components/presentation/version3-images.svelte";
  import Version3Table from "$lib/components/presentation/version3-table.svelte";
  import Version3Title from "$lib/components/presentation/version3-title.svelte";

  let mainColor = "#000000";
  let accentColor = "#000000";
  let accent2Color = "#000000";
  let accent3Color = "#000000";
  let currentIndex3 =  0;
  let isMobile = false;

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

  onMount(() => {
    const userAgent = window.navigator.userAgent;
    isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  });


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

<Label for="countries" class="w-96">Examples</Label>

<div class="mt-0 w-[29rem]">

  <div class="flex flex-row mb-3" >
    <Button id="hover" class="mr-2 h-[4.75rem] text-lg flex-1 p-4" style={`background-color: ${accent3Color};`}>Hover popover</Button>
    <Popover class="w-64 text-sm font-light" title="Popover title" triggeredBy="#hover" trigger="hover">And here's some amazing content. It's very engaging. Right?</Popover>
    <Button class="w-48 flex-1 text-l" style={`background-color: ${accent2Color};`}>Dropdown checkbox<ChevronDownSolid class="w-3 h-3 ms-2 text-white dark:text-white" /></Button>
    <Dropdown class="w-46 p-3 space-y-1 text-sm flex-1">
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

  <div class="grid grid-cols-2 mb-3">
    <Button style={`background-color: ${mainColor};`} class="flex-1 mr-2 h-[4.75rem] w-46 text-xl">Button</Button>
    <Button style={`background-color: ${accentColor};`} class="flex-1 h-[4.75rem] w-46 text-xl">Button</Button>
  </div>

  <div class="grid grid-cols-2 mb-3">
    <Button style={`background: linear-gradient(45deg, ${mainColor}, ${accent3Color});`} class="flex-1 mr-2 w-46 h-[4.75rem] text-xl">Button</Button>
    <Button style={`background: linear-gradient(45deg, ${accent2Color}, ${accentColor});`} class="flex-1 w-46 h-[4.75rem] text-xl">Button</Button>
  </div>

  <div class="flex flex-row mb-[0.6rem] w-[29rem]">
    <Input style={`background-color: ${mainColor}; color: ${accentColor};`} placeholder="Default input" class=" h-[4.75rem] text-l flex-1 mr-2 p-0"/>
    <Button class="flex-1 h-[4.75rem] text-xl p-1" style={`background-color: ${accentColor};`}>
      <Spinner class="me-3" size="4" color="white" />Loading ...
    </Button>
  </div>

</div>


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

<style>
  .carousel {
    position: relative;
    width:  100%;
  }
</style>
