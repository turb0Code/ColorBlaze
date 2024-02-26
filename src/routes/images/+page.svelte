<script>
  import Abstract from "$lib/components/editable-svg/abstract.svelte";
  import MilkSmile from "$lib/components/editable-svg/smile1.svelte";
  import Smile from "$lib/components/editable-svg/smile2.svelte";
  import Food from "$lib/components/editable-svg/food.svelte";
  import Logo from "$lib/components/editable-svg/logo.svelte";
  import Taxi from "$lib/components/editable-svg/taxi.svelte";
  import Anchor from "$lib/components/editable-svg/anchor.svelte";
  import { colors } from "$lib/scripts/color-stores.js";

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
</script>

<div class="w-[23rem] grid lg:grid-cols-4 lg:grid-rows-2 h-[34.5rem]">
    <div class="w-[23rem] lg:w-[32rem] h-60 border-2 rounded-md border-gray-300 dark:border-gray-600 glass col-span-2 pl-[0.5rem] lg:pl-20 lg:mr-[2rem]">
        <Taxi mainColor={mainColor} accentColor={accentColor} accent2Color={accent2Color} accent3Color={accent3Color}></Taxi>
    </div>

    <div class="w-[11.5rem] lg:w-60 h-60 border-2 rounded-md border-gray-300 dark:border-gray-600 glass items-center">
      <Logo mainColor={mainColor} accentColor={accentColor} accent2Color={accent2Color} viewBox="0 0 325 320" class=""></Logo>
    </div>

    <div class="w-[11.5rem] lg:w-60 h-60 flex border-2 rounded-md border-gray-300 dark:border-gray-600 glass justify-center align-middle items-center">
      <Abstract mainColor={mainColor} accentColor={accentColor} accent2Color={accent2Color} accent3Color={accent3Color} viewBox="0 0 170 170"></Abstract>
    </div>

    <div class="w-[11.5rem] lg:w-60 flex justify-center h-60 border-2 rounded-md border-gray-300 dark:border-gray-600 glass align-middle items-center">
      <MilkSmile mainColor={mainColor} accentColor={accentColor} accent2Color={accent2Color} accent3Color={accent3Color} viewBox="0 0 180 180"></MilkSmile>
    </div>

    <div class="lg:w-60 w-[11.5rem] flex justify-center h-60 border-2 rounded-md border-gray-300 dark:border-gray-600 glass align-middle items-center">
      <Smile mainColor={mainColor} accentColor={accentColor} viewBox="15 11 150 180" class="w-20"></Smile>
    </div>

    <div class="lg:w-60 w-[11.5rem] flex justify-center h-60 border-2 rounded-md border-gray-300 dark:border-gray-600 glass align-middle items-center">
      <Food mainColor={mainColor} width="240" height="240" class="w-20"></Food>
    </div>

    <div class="lg:w-60 w-[11.5rem] flex justify-center h-60 border-2 rounded-md border-gray-300 dark:border-gray-600 glass items-center">
      <Anchor mainColor={accentColor} width="240" height="240" class="w-20"></Anchor>
    </div>
</div>
