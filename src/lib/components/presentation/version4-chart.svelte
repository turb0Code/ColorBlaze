<script>
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

<div class="flex w-[22rem] lg:w-96 h-56" style={`background-color: ${accentColor}; border: solid 8px ${accent2Color};`}>

    <div class="absolute w-28 ml-28 lg:ml-32 text-center text-3xl mt-2" style={`border: solid 4px ${mainColor}; color: ${mainColor};`}>TITLE</div>

    <div class="pie w-32 h-32 ml-[6.5rem] lg:ml-32 mt-14 bg-accent2 border-4 border-pres4 shadow-2xl shadow-accent" style={`background-image: conic-gradient(${mainColor} 64%, ${accentColor} 64%, ${accentColor} 81%, ${accent2Color} 81%); border: solid 4px ${mainColor};`}></div>

</div>

<style>
  .pie {
    border-radius: 50%
  }
</style>