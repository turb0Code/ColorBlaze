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

<div class="flex w-[22rem] lg:w-96 h-56 rounded-md" style={`background: linear-gradient(90deg, ${accentColor} 5%, ${accent3Color} 35%, ${accent2Color} 90%)`}>

    <div class="absolute w-56 ml-16 lg:ml-20 text-center text-3xl mt-2 px-1 rounded-lg border-2 border-accent" style={`color: ${mainColor};`}>TITLE</div>

    <div class="pie w-40 h-40 ml-24 lg:ml-28 mt-14 border-2 border-accent rounded-lg" style={`background-image: conic-gradient(${mainColor} 64%, ${accentColor} 64%, ${accentColor} 81%, ${accent2Color} 81%)`}></div>

</div>

<style>
  .pie {
      border-radius: 50%
    }

</style>