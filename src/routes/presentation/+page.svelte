<script>
  // Import all the components for the slides
  import Version1Chart from "../../lib/components/presentation/version1-chart.svelte";
    import Version1Images from "../../lib/components/presentation/version1-images.svelte";
    import Version1Table from "../../lib/components/presentation/version1-table.svelte";
    import Version1Title from "../../lib/components/presentation/version1-title.svelte";
    import Version2Chart from "../../lib/components/presentation/version2-chart.svelte";
    import Version2Images from "../../lib/components/presentation/version2-images.svelte";
    import Version2Table from "../../lib/components/presentation/version2-table.svelte";
    import Version2Title from "../../lib/components/presentation/version2-title.svelte";
    import Version3Chart from "../../lib/components/presentation/version3-chart.svelte";
    import Version3Images from "../../lib/components/presentation/version3-images.svelte";
    import Version3Table from "../../lib/components/presentation/version3-table.svelte";
    import Version3Title from "../../lib/components/presentation/version3-title.svelte";
    import Version4Chart from "../../lib/components/presentation/version4-chart.svelte";
    import Version4Images from "../../lib/components/presentation/version4-images.svelte";
    import Version4Table from "../../lib/components/presentation/version4-table.svelte";
    import Version4Title from "../../lib/components/presentation/version4-title.svelte";

    import { slide, fade } from 'svelte/transition';
    import { elasticInOut } from 'svelte/easing';

    import {ArrowKeyRight, ArrowKeyLeft } from 'flowbite-svelte';

  let currentIndex1 =  0;
  let currentIndex2 =  0;
  let currentIndex3 =  0;
  let currentIndex4 =  0;

  function showSlide1(index1) {
    currentIndex1 = index1;
  }
  function showSlide2(index2) {
    currentIndex2 = index2;
  }
  function showSlide3(index3) {
    currentIndex3 = index3;
  }
  function showSlide4(index4) {
    currentIndex4 = index4;
  }

  function nextSlide1() {
    const nextIndex1 = (currentIndex1 +  1) %  4;
    showSlide1(nextIndex1);
  }
  function nextSlide2() {
    const nextIndex2 = (currentIndex2 +  1) %  4;
    showSlide2(nextIndex2);
  }
  function nextSlide3() {
    const nextIndex3 = (currentIndex3 +  1) %  4;
    showSlide3(nextIndex3);
  }
  function nextSlide4() {
    const nextIndex4 = (currentIndex4 +  1) %  4;
    showSlide4(nextIndex4);
  }



  function prevSlide1() {
    const prevIndex1 = (currentIndex1 -  1 +  4) %  4;
    showSlide1(prevIndex1);
  }
  function prevSlide2() {
    const prevIndex2 = (currentIndex2 -  1 +  4) %  4;
    showSlide2(prevIndex2);
  }

  function prevSlide3() {
    const prevIndex3 = (currentIndex3 -  1 +  4) %  4;
    showSlide3(prevIndex3);
  }

  function prevSlide4() {
    const prevIndex4 = (currentIndex4 -  1 +  4) %  4;
    showSlide4(prevIndex4);
  }


  const slides1 = [
    Version1Title,
    Version1Images,
    Version1Table,
    Version1Chart,
  ];

  const slides2 = [
    Version2Title,
    Version2Images,
    Version2Table,
    Version2Chart,
  ];

  const slides3 = [
    Version3Title,
    Version3Images,
    Version3Table,
    Version3Chart,
  ];

  const slides4 = [
    Version4Title,
    Version4Images,
    Version4Table,
    Version4Chart,
  ];
</script>

<div class=" absolute left-0 min-[370px]:left-4 min-[380px]:left-8 lg:none lg:left-1/4 lg:right-1/4">

  <div class=" grid grid-rows-1 grid-cols-1 lg:grid-rows-2 lg:grid-cols-2 gap-20">

    <div class="flex">


      <div class="carousel">

        <div class="z-0 h-56 absolute">
          <button id="nextButton" class="bg-gray-200 w-8 h-56 flex right-0 ml-[20rem] lg:ml-[22rem] opacity-5 hover:opacity-30" on:click={nextSlide1}><ArrowKeyRight class="h-24 mt-16"></ArrowKeyRight></button>
        </div>

        <div class="z-0 h-56 absolute">
          <button id="nextButton" class="bg-gray-200 w-8 h-56 flex right-0 opacity-5 hover:opacity-30" on:click={prevSlide1}><ArrowKeyLeft class="h-24 mt-16"></ArrowKeyLeft></button>
        </div>

        {#each slides1 as SlideComponent, index1 (index1)}
          {#if currentIndex1 === index1}
            <div class="slide">
              <SlideComponent />
            </div>
          {/if}
        {/each}

      </div>

    </div>

    <div class="flex">


      <div class="carousel">

        <div class="z-0 h-56 absolute">
          <button id="nextButton" class="bg-gray-200 w-8 h-56 flex right-0 ml-[20rem] lg:ml-[22rem] opacity-5 hover:opacity-30" on:click={nextSlide2}><ArrowKeyRight class="h-24 mt-16"></ArrowKeyRight></button>
        </div>

        <div class="z-0 h-56 absolute">
          <button id="prevButton" class="bg-gray-200 w-8 h-56 flex right-0 opacity-5 hover:opacity-30" on:click={prevSlide2}><ArrowKeyLeft class="h-24 mt-16"></ArrowKeyLeft></button>
        </div>

        {#each slides2 as SlideComponent, index2 (index2)}
          {#if currentIndex2 === index2}
            <div class="slide">
              <SlideComponent />
            </div>
          {/if}
        {/each}

      </div>

    </div>

    <div class="flex">


      <div class="carousel">

        <div class="z-0 h-56 absolute">
          <button id="nextButton" class="bg-gray-200 w-8 h-56 flex right-0 ml-[20rem] lg:ml-[22rem] opacity-5 hover:opacity-30" on:click={nextSlide3}><ArrowKeyRight class="h-24 mt-16"></ArrowKeyRight></button>
        </div>

        <div class="z-0 h-56 absolute">
          <button id="prevButton" class="bg-gray-200 w-8 h-56 flex right-0 opacity-5 hover:opacity-30" on:click={prevSlide3}><ArrowKeyLeft class="h-24 mt-16"></ArrowKeyLeft></button>
        </div>

        {#each slides3 as SlideComponent, index3 (index3)}
          {#if currentIndex3 === index3}
            <div class="slide">
              <SlideComponent />
            </div>
          {/if}
        {/each}

      </div>

    </div>

    <div class="flex">


      <div class="carousel">

        <div class="z-0 h-56 absolute">
          <button id="nextButton" class="bg-gray-200 w-8 h-56 flex right-0 ml-[20rem] lg:ml-[22rem] opacity-5 hover:opacity-30" on:click={nextSlide4}><ArrowKeyRight class="h-24 mt-16"></ArrowKeyRight></button>
        </div>

        <div class="z-0 h-56 absolute">
          <button id="prevButton" class="bg-gray-200 w-8 h-56 flex right-0 opacity-5 hover:opacity-30" on:click={prevSlide4}><ArrowKeyLeft class="h-24 mt-16"></ArrowKeyLeft></button>
        </div>

        {#each slides4 as SlideComponent, index4 (index4)}
          {#if currentIndex4 === index4}
            <div class="slide">
              <SlideComponent />
            </div>
          {/if}
        {/each}

      </div>

    </div>

  </div>

</div>


<style>
  .carousel {
    position: relative;
    width:  100%;
  }
</style>
