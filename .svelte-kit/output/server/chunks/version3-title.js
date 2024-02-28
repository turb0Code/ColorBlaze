import { c as create_ssr_component, b as compute_rest_props, e as spread, g as escape_object, f as escape_attribute_value, d as subscribe, a as add_attribute } from "./ssr.js";
import { twMerge } from "tailwind-merge";
import { c as colors } from "./color-stores.js";
const ArrowKeyLeft = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["svgClass"]);
  let { svgClass = "w-4 h-4" } = $$props;
  if ($$props.svgClass === void 0 && $$bindings.svgClass && svgClass !== void 0)
    $$bindings.svgClass(svgClass);
  return `<svg${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(svgClass, $$props.class))
      },
      { "aria-hidden": "true" },
      { fill: "currentColor" },
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 320 512" }
    ],
    {}
  )}><path d="M137.4 406.6l-128-127.1C3.125 272.4 0 264.2 0 255.1s3.125-16.38 9.375-22.63l128-127.1c9.156-9.156 22.91-11.9 34.88-6.943S192 115.1 192 128v255.1c0 12.94-7.781 24.62-19.75 29.58S146.5 415.8 137.4 406.6z"></path></svg> `;
});
const ArrowKeyRight = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["svgClass"]);
  let { svgClass = "w-4 h-4" } = $$props;
  if ($$props.svgClass === void 0 && $$bindings.svgClass && svgClass !== void 0)
    $$bindings.svgClass(svgClass);
  return `<svg${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(svgClass, $$props.class))
      },
      { "aria-hidden": "true" },
      { fill: "currentColor" },
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 320 512" }
    ],
    {}
  )}><path d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z"></path></svg> `;
});
const version3Chart_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: `#tlo.svelte-ymoxsn{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 40' width='80' height='40'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M0 40a19.96 19.96 0 0 1 5.9-14.11 20.17 20.17 0 0 1 19.44-5.2A20 20 0 0 1 20.2 40H0zM65.32.75A20.02 20.02 0 0 1 40.8 25.26 20.02 20.02 0 0 1 65.32.76zM.07 0h20.1l-.08.07A20.02 20.02 0 0 1 .75 5.25 20.08 20.08 0 0 1 .07 0zm1.94 40h2.53l4.26-4.24v-9.78A17.96 17.96 0 0 0 2 40zm5.38 0h9.8a17.98 17.98 0 0 0 6.67-16.42L7.4 40zm3.43-15.42v9.17l11.62-11.59c-3.97-.5-8.08.3-11.62 2.42zm32.86-.78A18 18 0 0 0 63.85 3.63L43.68 23.8zm7.2-19.17v9.15L62.43 2.22c-3.96-.5-8.05.3-11.57 2.4zm-3.49 2.72c-4.1 4.1-5.81 9.69-5.13 15.03l6.61-6.6V6.02c-.51.41-1 .85-1.48 1.33zM17.18 0H7.42L3.64 3.78A18 18 0 0 0 17.18 0zM2.08 0c-.01.8.04 1.58.14 2.37L4.59 0H2.07z'%3E%3C/path%3E%3C/svg%3E");background-size:100px;background-position:center}.pie.svelte-ymoxsn{border-radius:50%\r
}`,
  map: null
};
const Version3_chart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_colors;
  $$unsubscribe_colors = subscribe(colors, (value) => value);
  let mainColor = "#000000";
  let accentColor = "#000000";
  let accent2Color = "#000000";
  let accent3Color = "#000000";
  $$result.css.add(css$3);
  $$unsubscribe_colors();
  return `<div id="tlo" class="flex w-[22rem] lg:w-96 h-56 rounded-md svelte-ymoxsn"${add_attribute("style", `background-color: ${accent3Color};`, 0)}><div class="absolute w-56 ml-16 lg:ml-20 text-center text-3xl mt-2 bg-white"${add_attribute("style", `border-bottom: solid 4px ${accentColor}; border-left: solid 4px ${accent2Color}; color: ${mainColor};`, 0)}>TITLE</div> <div class="pie w-40 h-40 ml-24 lg:ml-28 mt-14 svelte-ymoxsn"${add_attribute("style", `background-image: conic-gradient(${mainColor} 64%, ${accentColor} 64%, ${accentColor} 81%, ${accent2Color} 81%); border-bottom: solid 4px ${accentColor}; border-left: solid 4px ${accent2Color};`, 0)}></div> </div>`;
});
const version3Images_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: `#tlo.svelte-fpjicf{background-color:#DCC7E9;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 40' width='80' height='40'%3E%3Cpath fill='%23000000' fill-opacity='0.12  ' d='M0 40a19.96 19.96 0 0 1 5.9-14.11 20.17 20.17 0 0 1 19.44-5.2A20 20 0 0 1 20.2 40H0zM65.32.75A20.02 20.02 0 0 1 40.8 25.26 20.02 20.02 0 0 1 65.32.76zM.07 0h20.1l-.08.07A20.02 20.02 0 0 1 .75 5.25 20.08 20.08 0 0 1 .07 0zm1.94 40h2.53l4.26-4.24v-9.78A17.96 17.96 0 0 0 2 40zm5.38 0h9.8a17.98 17.98 0 0 0 6.67-16.42L7.4 40zm3.43-15.42v9.17l11.62-11.59c-3.97-.5-8.08.3-11.62 2.42zm32.86-.78A18 18 0 0 0 63.85 3.63L43.68 23.8zm7.2-19.17v9.15L62.43 2.22c-3.96-.5-8.05.3-11.57 2.4zm-3.49 2.72c-4.1 4.1-5.81 9.69-5.13 15.03l6.61-6.6V6.02c-.51.41-1 .85-1.48 1.33zM17.18 0H7.42L3.64 3.78A18 18 0 0 0 17.18 0zM2.08 0c-.01.8.04 1.58.14 2.37L4.59 0H2.07z'%3E%3C/path%3E%3C/svg%3E");background-size:100px;background-position:center}`,
  map: null
};
const Version3_images = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $colors, $$unsubscribe_colors;
  $$unsubscribe_colors = subscribe(colors, (value) => $colors = value);
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
    } else if (!$colors[2]) {
      accentColor = $colors[1];
      accent2Color = mainColor;
      accent3Color = $colors[1];
    } else if (!$colors[3]) {
      accentColor = $colors[1];
      accent2Color = $colors[2];
      accent3Color = $colors[1];
    } else {
      accentColor = $colors[1];
      accent2Color = $colors[2];
      accent3Color = $colors[3];
    }
  });
  $$result.css.add(css$2);
  $$unsubscribe_colors();
  return `<div id="tlo" class="flex w-[22rem] lg:w-96 h-56 rounded-md svelte-fpjicf"${add_attribute("style", `background-color: ${accent3Color};`, 0)}><div class="absolute w-56 ml-16 lg:ml-20 text-center text-3xl mt-2 bg-white border-l-4 border-b-4 border-b-pres4 border-l-pres3"${add_attribute("style", `border-bottom: solid 4px ${accentColor}; border-left: solid 4px ${accent2Color}; color: ${mainColor};`, 0)}>TITLE</div> <div class="h-56 w-96 ml-2 mt-20 "><img src="/phone1.jpg" alt="" class="bg-white border-l-4 border-b-4 border-b-pres4 border-l-pres3"${add_attribute("style", `border-bottom: solid 4px ${accentColor}; border-left: solid 4px ${accent2Color};`, 0)}></div> <div class="text-xs text-center mx-2 mt-14 mb-12 bg-white border-l-4 border-b-4 border-b-pres4 border-l-pres3"${add_attribute("style", `border-bottom: solid 4px ${accentColor}; border-left: solid 4px ${accent2Color}; color: ${accentColor};`, 0)}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fames ac turpis egestas sed tempus urna et pharetra. Ridiculus mus mauris vitae ultricies leo integer malesuada.</div> <div class="h-56 w-96 mr-2 lg:mt-8 mt-12 "><img src="/image2.jpg" alt="" class="mb-4 bg-white border-l-4 border-b-4 border-b-pres4 border-l-pres3"${add_attribute("style", `border-bottom: solid 4px ${accentColor}; border-left: solid 4px ${accent2Color};`, 0)}> <img src="/phone3.jpg" alt="" class="bg-white border-l-4 border-b-4 border-b-pres4 border-l-pres3"${add_attribute("style", `border-bottom: solid 4px ${accentColor}; border-left: solid 4px ${accent2Color};`, 0)}></div> </div>`;
});
const version3Table_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: `#tlo.svelte-yyvlma{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 40' width='80' height='40'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M0 40a19.96 19.96 0 0 1 5.9-14.11 20.17 20.17 0 0 1 19.44-5.2A20 20 0 0 1 20.2 40H0zM65.32.75A20.02 20.02 0 0 1 40.8 25.26 20.02 20.02 0 0 1 65.32.76zM.07 0h20.1l-.08.07A20.02 20.02 0 0 1 .75 5.25 20.08 20.08 0 0 1 .07 0zm1.94 40h2.53l4.26-4.24v-9.78A17.96 17.96 0 0 0 2 40zm5.38 0h9.8a17.98 17.98 0 0 0 6.67-16.42L7.4 40zm3.43-15.42v9.17l11.62-11.59c-3.97-.5-8.08.3-11.62 2.42zm32.86-.78A18 18 0 0 0 63.85 3.63L43.68 23.8zm7.2-19.17v9.15L62.43 2.22c-3.96-.5-8.05.3-11.57 2.4zm-3.49 2.72c-4.1 4.1-5.81 9.69-5.13 15.03l6.61-6.6V6.02c-.51.41-1 .85-1.48 1.33zM17.18 0H7.42L3.64 3.78A18 18 0 0 0 17.18 0zM2.08 0c-.01.8.04 1.58.14 2.37L4.59 0H2.07z'%3E%3C/path%3E%3C/svg%3E");background-size:100px;background-position:center}`,
  map: null
};
const Version3_table = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $colors, $$unsubscribe_colors;
  $$unsubscribe_colors = subscribe(colors, (value) => $colors = value);
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
    } else if (!$colors[2]) {
      accentColor = $colors[1];
      accent2Color = mainColor;
      accent3Color = $colors[1];
    } else if (!$colors[3]) {
      accentColor = $colors[1];
      accent2Color = $colors[2];
      accent3Color = $colors[1];
    } else {
      accentColor = $colors[1];
      accent2Color = $colors[2];
      accent3Color = $colors[3];
    }
  });
  $$result.css.add(css$1);
  $$unsubscribe_colors();
  return `<div id="tlo" class="flex w-[22rem] lg:w-96 h-56 rounded-md svelte-yyvlma"${add_attribute("style", `background-color: ${accent3Color};`, 0)}><div class="absolute w-56 ml-16 lg:ml-20 text-center text-3xl mt-2 bg-white border-l-4 border-b-4 border-b-pres4 border-l-pres3"${add_attribute("style", `border-bottom: solid 4px ${accentColor}; border-left: solid 4px ${accent2Color}; color: ${mainColor};`, 0)}>TITLE</div> <table class="w-72 h-36 lg:ml-12 ml-8 mt-14 text-sm text-center"${add_attribute("style", `border-bottom: solid 4px ${accentColor}; border-left: solid 4px ${accent2Color};`, 0)}><tr${add_attribute("style", `background-color: ${accentColor}; color: ${mainColor};`, 0)}><th data-svelte-h="svelte-1knv3n8">Header 1</th> <th data-svelte-h="svelte-142pedt">Header 2</th> <th data-svelte-h="svelte-1nv1z9e">Header 3</th></tr> <tr${add_attribute("style", `background-color: ${accent3Color}; color: ${accentColor};`, 0)}><td data-svelte-h="svelte-9dyfav">Lorem ipsum</td> <td class="" data-svelte-h="svelte-xszqhq">Lorem ipsum</td> <td data-svelte-h="svelte-9dyfav">Lorem ipsum</td></tr> <tr${add_attribute("style", `background-color: ${mainColor}; color: ${accentColor};`, 0)}><td data-svelte-h="svelte-9dyfav">Lorem ipsum</td> <td data-svelte-h="svelte-9dyfav">Lorem ipsum</td> <td data-svelte-h="svelte-9dyfav">Lorem ipsum</td></tr> <tr${add_attribute("style", `background-color: ${accent3Color}; color: ${accentColor};`, 0)}><td data-svelte-h="svelte-9dyfav">Lorem ipsum</td> <td data-svelte-h="svelte-9dyfav">Lorem ipsum</td> <td data-svelte-h="svelte-9dyfav">Lorem ipsum</td></tr></table> </div>`;
});
const version3Title_svelte_svelte_type_style_lang = "";
const css = {
  code: `#tlo.svelte-pf6vj3{background-color:#8441C7;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 40' width='80' height='40'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M0 40a19.96 19.96 0 0 1 5.9-14.11 20.17 20.17 0 0 1 19.44-5.2A20 20 0 0 1 20.2 40H0zM65.32.75A20.02 20.02 0 0 1 40.8 25.26 20.02 20.02 0 0 1 65.32.76zM.07 0h20.1l-.08.07A20.02 20.02 0 0 1 .75 5.25 20.08 20.08 0 0 1 .07 0zm1.94 40h2.53l4.26-4.24v-9.78A17.96 17.96 0 0 0 2 40zm5.38 0h9.8a17.98 17.98 0 0 0 6.67-16.42L7.4 40zm3.43-15.42v9.17l11.62-11.59c-3.97-.5-8.08.3-11.62 2.42zm32.86-.78A18 18 0 0 0 63.85 3.63L43.68 23.8zm7.2-19.17v9.15L62.43 2.22c-3.96-.5-8.05.3-11.57 2.4zm-3.49 2.72c-4.1 4.1-5.81 9.69-5.13 15.03l6.61-6.6V6.02c-.51.41-1 .85-1.48 1.33zM17.18 0H7.42L3.64 3.78A18 18 0 0 0 17.18 0zM2.08 0c-.01.8.04 1.58.14 2.37L4.59 0H2.07z'%3E%3C/path%3E%3C/svg%3E");background-size:100px;background-position:center}`,
  map: null
};
const Version3_title = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $colors, $$unsubscribe_colors;
  $$unsubscribe_colors = subscribe(colors, (value) => $colors = value);
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
    } else if (!$colors[2]) {
      accentColor = $colors[1];
      accent2Color = mainColor;
      accent3Color = $colors[1];
    } else if (!$colors[3]) {
      accentColor = $colors[1];
      accent2Color = $colors[2];
      accent3Color = $colors[1];
    } else {
      accentColor = $colors[1];
      accent2Color = $colors[2];
      accent3Color = $colors[3];
    }
  });
  $$result.css.add(css);
  $$unsubscribe_colors();
  return `<div id="tlo" class="flex flex-col w-[22rem] lg:w-96 h-56 justify-center items-center rounded-md svelte-pf6vj3"${add_attribute("style", `background-color: ${accent3Color};`, 0)}><div class="text-5xl bg-white border-l-8 border-b-8 border-pres4"${add_attribute("style", `border-bottom: solid 4px ${accentColor}; border-left: solid 4px ${accent2Color}; color: ${mainColor};`, 0)}>TITLE</div> <div class="flex bg-white px-1 border-l-4 border-b-4 mt-2 border-pres4"${add_attribute("style", `border-bottom: solid 4px ${accentColor}; border-left: solid 4px ${accent2Color}; color: ${accentColor};`, 0)}>Subtitle</div> </div>`;
});
export {
  ArrowKeyRight as A,
  Version3_title as V,
  ArrowKeyLeft as a,
  Version3_images as b,
  Version3_table as c,
  Version3_chart as d
};
