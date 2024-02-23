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

<div class="flex w-[22rem] lg:w-96 h-56" style={`background: linear-gradient(90deg, ${accentColor} 5%, ${accent3Color} 35%, ${accent2Color} 90%)`}>

    <div class="absolute w-56 ml-16 lg:ml-20 text-center text-3xl mt-2 px-1 rounded-lg border-2" style={`color: ${mainColor}; border-color: ${accentColor};`}>TITLE</div>

    <div class="h-56 w-96 ml-2 mt-20">
        <img src="src/lib/images/phone1.jpg" alt="" class="border-2 rounded-lg" style={`border-color: ${accentColor};`}>
    </div>

    <div class="text-xs text-center mx-2 mt-14  bg-white px-1 rounded-lg mb-8 lg:mb-12 border-2 border-accent"  style={`color: ${accentColor}; border-color: ${accentColor};`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fames ac turpis egestas sed tempus urna et pharetra. Ridiculus mus mauris vitae ultricies leo integer malesuada.
    </div>

    <div class="h-56 w-96 mr-2 lg:mt-8 mt-12 ">
        <img src="src/lib/images/image2.jpg" alt="" class="mb-4 border-2 rounded-lg" style={`border-color: ${accentColor}`}>
        <img src="src/lib/images/phone3.jpg" alt="" class="border-2 rounded-lg" style={`border-color: ${accentColor}`}>
    </div>

</div>