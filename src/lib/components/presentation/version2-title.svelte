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

<div class="flex flex-col w-[22rem] lg:w-96 h-56 justify-center items-center rounded-md" style={`background: linear-gradient(90deg, ${accentColor} 5%, ${accent3Color} 35%, ${accent2Color} 90%)`}>

    <div class="text-5xl p-1 rounded-lg mb-1 border-2" style={`color: ${mainColor}; border-color: ${accentColor};`}>TITLE</div>

    <div class="flex px-1 rounded-lg border-2" style={`color: ${accent3Color}; border-color: ${accentColor};`}>Subtitle</div>

</div>