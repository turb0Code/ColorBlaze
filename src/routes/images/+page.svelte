<script>
  import Abstract from "$lib/components/editable-svg/abstract.svelte";
  import MilkSmile from "$lib/components/editable-svg/smile1.svelte";
  import Smile from "$lib/components/editable-svg/smile2.svelte";
  import Food from "$lib/components/editable-svg/food.svelte";
  import Logo from "$lib/components/editable-svg/logo.svelte";
  import Taxi from "$lib/components/editable-svg/taxi.svelte";
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

<div class="grid grid-cols-4 grid-rows-2">
    <div class="w-[30rem] h-60 border-2 rounded-md border-gray-300 dark:border-gray-600 glass col-span-2">
      <Taxi mainColor={mainColor} accentColor={accentColor} accent2Color={accent2Color} accent3Color={accent3Color}></Taxi>
    </div>

    <div class="w-60 h-60 border-2 rounded-md border-gray-300 dark:border-gray-600 glass">
      <Logo mainColor={mainColor} accentColor={accentColor} accent2Color={accent2Color} accent3Color={accent3Color}></Logo>
    </div>

    <div class="w-60 h-60 border-2 rounded-md border-gray-300 dark:border-gray-600 glass">
      <Abstract mainColor={mainColor} accentColor={accentColor} accent2Color={accent2Color} accent3Color={accent3Color}></Abstract>
    </div>

    <div class="w-60 flex justify-center h-60 border-2 rounded-md border-gray-300 dark:border-gray-600 glass">
      <MilkSmile mainColor={mainColor} accentColor={accentColor} accent2Color={accent2Color} accent3Color={accent3Color}></MilkSmile>
    </div>

    <div class="w-60 flex justify-center h-60 border-2 rounded-md border-gray-300 dark:border-gray-600 glass">
      <Smile mainColor={mainColor} accentColor={accentColor} class="w-20"></Smile>
    </div>

    <div class="w-60 flex justify-center h-60 border-2 rounded-md border-gray-300 dark:border-gray-600 glass">
      <Food mainColor={mainColor} class="w-20"></Food>
    </div>

    <div class="w-60 flex justify-center h-60 border-2 rounded-md border-gray-300 dark:border-gray-600 glass">
      <Food mainColor={mainColor} class="w-20"></Food>
    </div>
</div>
