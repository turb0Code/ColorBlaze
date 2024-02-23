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

<div class="flex w-[22rem] lg:w-96 h-56 bg-white">

    <div class="absolute w-[22rem] lg:w-96 text-center text-3xl mt-2" style={`color: ${mainColor};`}>TITLE</div>

    <div class="h-56 w-96 ml-2 mt-20">
        <img src="src/lib/images/phone1.jpg" alt="phone" class="">
    </div>

    <div class="text-xs text-center mx-2 mt-14" style={`color: ${accentColor};`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fames ac turpis egestas sed tempus urna et pharetra. Ridiculus mus mauris vitae ultricies leo integer malesuada.
    </div>
 
    <div class="h-56 w-96 mr-2 mt-8">
        <img src="src/lib/images/image2.jpg" alt="" class="mb-4">
        <img src="src/lib/images/phone3.jpg" alt="" class="">
    </div>

</div>