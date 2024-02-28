import { c as create_ssr_component, d as subscribe, a as add_attribute, v as validate_component, j as each } from "../../../chunks/ssr.js";
import "@formkit/auto-animate";
import { c as colors } from "../../../chunks/color-stores.js";
import { A as ArrowKeyRight, a as ArrowKeyLeft, V as Version3_title, b as Version3_images, c as Version3_table, d as Version3_chart } from "../../../chunks/version3-title.js";
const version1Chart_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".pie.svelte-wjojv2{border-radius:50%\r\n}",
  map: null
};
const Version1_chart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $colors, $$unsubscribe_colors;
  $$unsubscribe_colors = subscribe(colors, (value) => $colors = value);
  let mainColor = "#000000";
  let accentColor = "#000000";
  let accent2Color = "#000000";
  colors.subscribe(() => {
    mainColor = $colors[0];
    if (!$colors[1]) {
      accentColor = mainColor;
      accent2Color = mainColor;
    } else if (!$colors[2]) {
      accentColor = $colors[1];
      accent2Color = mainColor;
      $colors[1];
    } else if (!$colors[3]) {
      accentColor = $colors[1];
      accent2Color = $colors[2];
      $colors[1];
    } else {
      accentColor = $colors[1];
      accent2Color = $colors[2];
      $colors[3];
    }
  });
  $$result.css.add(css$3);
  $$unsubscribe_colors();
  return `<div class="flex w-[22rem] rounded-md lg:w-96 h-56 bg-white"><div class="absolute w-56 ml-16 lg:ml-20 text-center text-3xl mt-2 px-1"${add_attribute("style", `color: ${mainColor};`, 0)}>TITLE</div> <div class="pie w-40 h-40 ml-24 lg:ml-28 mt-14 svelte-wjojv2"${add_attribute("style", `background-image: conic-gradient(${mainColor} 64%, ${accentColor} 64%, ${accentColor} 81%, ${accent2Color} 81%)`, 0)}></div> </div>`;
});
const Version1_images = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $colors, $$unsubscribe_colors;
  $$unsubscribe_colors = subscribe(colors, (value) => $colors = value);
  let mainColor = "#000000";
  let accentColor = "#000000";
  colors.subscribe(() => {
    mainColor = $colors[0];
    if (!$colors[1]) {
      accentColor = mainColor;
    } else if (!$colors[2]) {
      accentColor = $colors[1];
      $colors[1];
    } else if (!$colors[3]) {
      accentColor = $colors[1];
      $colors[2];
      $colors[1];
    } else {
      accentColor = $colors[1];
      $colors[2];
      $colors[3];
    }
  });
  $$unsubscribe_colors();
  return `<div class="flex w-[22rem] lg:w-96 h-56 bg-white rounded-md"><div class="absolute w-[22rem] lg:w-96 text-center text-3xl mt-2"${add_attribute("style", `color: ${mainColor};`, 0)}>TITLE</div> <div class="h-56 w-96 ml-2 mt-20" data-svelte-h="svelte-q12u2a"><img src="/phone1.jpg" alt="phone" class=""></div> <div class="text-xs text-center mx-2 mt-14"${add_attribute("style", `color: ${accentColor};`, 0)}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fames ac turpis egestas sed tempus urna et pharetra. Ridiculus mus mauris vitae ultricies leo integer malesuada.</div> <div class="h-56 w-96 mr-2 mt-8" data-svelte-h="svelte-1xntt9e"><img src="/image2.jpg" alt="" class="mb-4"> <img src="/phone3.jpg" alt="" class=""></div></div>`;
});
const Version1_table = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $colors, $$unsubscribe_colors;
  $$unsubscribe_colors = subscribe(colors, (value) => $colors = value);
  let mainColor = "#000000";
  let accentColor = "#000000";
  let accent2Color = "#000000";
  colors.subscribe(() => {
    mainColor = $colors[0];
    if (!$colors[1]) {
      accentColor = mainColor;
      accent2Color = mainColor;
    } else if (!$colors[2]) {
      accentColor = $colors[1];
      accent2Color = mainColor;
      $colors[1];
    } else if (!$colors[3]) {
      accentColor = $colors[1];
      accent2Color = $colors[2];
      $colors[1];
    } else {
      accentColor = $colors[1];
      accent2Color = $colors[2];
      $colors[3];
    }
  });
  $$unsubscribe_colors();
  return `<div class="flex w-[22rem] lg:w-96 h-56 bg-white rounded-md"><div class="absolute w-[20rem] lg:w-96 text-center text-3xl mt-2"${add_attribute("style", `color: ${mainColor};`, 0)}>TITLE</div> <table class="w-80 h-40 border-2 border-solid border-white ml-4 lg:ml-8 mt-12 text-sm text-center"><tr class="border-2 border-solid border-white bg-gray-400"${add_attribute("style", `color: ${accentColor};`, 0)}><th data-svelte-h="svelte-1knv3n8">Header 1</th> <th class="border-2 border-solid border-white" data-svelte-h="svelte-lwc9np">Header 2</th> <th data-svelte-h="svelte-1nv1z9e">Header 3</th></tr> <tr class="border-2 border-solid border-white bg-gray-200"${add_attribute("style", `color: ${accent2Color};`, 0)}><td data-svelte-h="svelte-9dyfav">Lorem ipsum</td> <td class="border-2 border-solid border-white" data-svelte-h="svelte-1aoq61n">Lorem ipsum</td> <td data-svelte-h="svelte-9dyfav">Lorem ipsum</td></tr> <tr class="bg-gray-300 "${add_attribute("style", `color: ${accent2Color};`, 0)}><td data-svelte-h="svelte-9dyfav">Lorem ipsum</td> <td class="border-2 border-solid border-white" data-svelte-h="svelte-1aoq61n">Lorem ipsum</td> <td data-svelte-h="svelte-9dyfav">Lorem ipsum</td></tr> <tr class="border-2 border-solid border-white bg-gray-200"${add_attribute("style", `color: ${accent2Color};`, 0)}><td data-svelte-h="svelte-9dyfav">Lorem ipsum</td> <td class="border-2 border-solid border-white" data-svelte-h="svelte-1aoq61n">Lorem ipsum</td> <td data-svelte-h="svelte-9dyfav">Lorem ipsum</td></tr></table></div>`;
});
const Version1_title = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $colors, $$unsubscribe_colors;
  $$unsubscribe_colors = subscribe(colors, (value) => $colors = value);
  let mainColor = "#000000";
  let accentColor = "#000000";
  colors.subscribe(() => {
    mainColor = $colors[0];
    if (!$colors[1]) {
      accentColor = mainColor;
    } else if (!$colors[2]) {
      accentColor = $colors[1];
      $colors[1];
    } else if (!$colors[3]) {
      accentColor = $colors[1];
      $colors[2];
      $colors[1];
    } else {
      accentColor = $colors[1];
      $colors[2];
      $colors[3];
    }
  });
  $$unsubscribe_colors();
  return `<div class="flex flex-col w-[22rem] lg:w-96 h-56 justify-center items-center bg-white rounded-md"><div class="text-5xl"${add_attribute("style", `color: ${mainColor};`, 0)}>TITLE</div> <div class="flex"${add_attribute("style", `color: ${accentColor};`, 0)}>Subtitle</div></div>`;
});
const version2Chart_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".pie.svelte-1ablxfg{border-radius:50%\r\n    }",
  map: null
};
const Version2_chart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  return `<div class="flex w-[22rem] lg:w-96 h-56 rounded-md"${add_attribute("style", `background: linear-gradient(90deg, ${accentColor} 5%, ${accent3Color} 35%, ${accent2Color} 90%)`, 0)}><div class="absolute w-56 ml-16 lg:ml-20 text-center text-3xl mt-2 px-1 rounded-lg border-2 border-accent"${add_attribute("style", `color: ${mainColor};`, 0)}>TITLE</div> <div class="pie w-40 h-40 ml-24 lg:ml-28 mt-14 border-2 border-accent rounded-lg svelte-1ablxfg"${add_attribute("style", `background-image: conic-gradient(${mainColor} 64%, ${accentColor} 64%, ${accentColor} 81%, ${accent2Color} 81%)`, 0)}></div> </div>`;
});
const Version2_images = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  $$unsubscribe_colors();
  return `<div class="flex w-[22rem] lg:w-96 h-56 rounded-md"${add_attribute("style", `background: linear-gradient(90deg, ${accentColor} 5%, ${accent3Color} 35%, ${accent2Color} 90%)`, 0)}><div class="absolute w-56 ml-16 lg:ml-20 text-center text-3xl mt-2 px-1 rounded-lg border-2"${add_attribute("style", `color: ${mainColor}; border-color: ${accentColor};`, 0)}>TITLE</div> <div class="h-56 w-96 ml-2 mt-20"><img src="/phone1.jpg" alt="" class="border-2 rounded-lg"${add_attribute("style", `border-color: ${accentColor};`, 0)}></div> <div class="text-xs text-center mx-2 mt-14 bg-white px-1 rounded-lg mb-8 lg:mb-12 border-2 border-accent"${add_attribute("style", `color: ${accentColor}; border-color: ${accentColor};`, 0)}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fames ac turpis egestas sed tempus urna et pharetra. Ridiculus mus mauris vitae ultricies leo integer malesuada.</div> <div class="h-56 w-96 mr-2 lg:mt-8 mt-12 "><img src="/image2.jpg" alt="" class="mb-4 border-2 rounded-lg"${add_attribute("style", `border-color: ${accentColor}`, 0)}> <img src="/phone3.jpg" alt="" class="border-2 rounded-lg"${add_attribute("style", `border-color: ${accentColor}`, 0)}></div></div>`;
});
const Version2_table = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  $$unsubscribe_colors();
  return `<div class="flex w-[22rem] lg:w-96 h-56 rounded-md"${add_attribute("style", `background: linear-gradient(90deg, ${accentColor} 5%, ${accent3Color} 35%, ${accent2Color} 90%)`, 0)}><div class="absolute w-56 ml-16 lg:ml-20 text-center text-3xl mt-2 px-1 rounded-lg border-2"${add_attribute("style", `color: ${mainColor}; border-color: ${accentColor};`, 0)}>TITLE</div> <table class="w-80 h-40 border-2 border-solid border-black ml-4 lg:ml-8 mt-14 text-sm text-center"><tr class="border-2 border-solid border-black"${add_attribute("style", `background-color: ${accentColor}; color: ${mainColor};`, 0)}><th data-svelte-h="svelte-1knv3n8">Header 1</th> <th class="border-2 border-solid border-accent" data-svelte-h="svelte-7o7ytq">Header 2</th> <th data-svelte-h="svelte-1nv1z9e">Header 3</th></tr> <tr class="border-2 border-solid border-black"${add_attribute("style", `background-color: ${accent3Color}; color: ${accentColor};`, 0)}><td data-svelte-h="svelte-9dyfav">Lorem ipsum</td> <td class="border-2 border-solid border-accent" data-svelte-h="svelte-r9b62o">Lorem ipsum</td> <td data-svelte-h="svelte-9dyfav">Lorem ipsum</td></tr> <tr${add_attribute("style", `background-color: ${mainColor}; color: ${accentColor};`, 0)}><td data-svelte-h="svelte-9dyfav">Lorem ipsum</td> <td class="border-2 border-solid border-accent" data-svelte-h="svelte-r9b62o">Lorem ipsum</td> <td data-svelte-h="svelte-9dyfav">Lorem ipsum</td></tr> <tr class="border-2 border-solid border-accent"${add_attribute("style", `background-color: ${accent3Color}; color: ${accentColor};`, 0)}><td data-svelte-h="svelte-9dyfav">Lorem ipsum</td> <td class="border-2 border-solid border-accent" data-svelte-h="svelte-r9b62o">Lorem ipsum</td> <td data-svelte-h="svelte-9dyfav">Lorem ipsum</td></tr></table></div>`;
});
const Version2_title = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  $$unsubscribe_colors();
  return `<div class="flex flex-col w-[22rem] lg:w-96 h-56 justify-center items-center rounded-md"${add_attribute("style", `background: linear-gradient(90deg, ${accentColor} 5%, ${accent3Color} 35%, ${accent2Color} 90%)`, 0)}><div class="text-5xl p-1 rounded-lg mb-1 border-2"${add_attribute("style", `color: ${mainColor}; border-color: ${accentColor};`, 0)}>TITLE</div> <div class="flex px-1 rounded-lg border-2"${add_attribute("style", `color: ${accent3Color}; border-color: ${accentColor};`, 0)}>Subtitle</div></div>`;
});
const version4Chart_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".pie.svelte-1ic3ug0{border-radius:50%\r\n  }",
  map: null
};
const Version4_chart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $colors, $$unsubscribe_colors;
  $$unsubscribe_colors = subscribe(colors, (value) => $colors = value);
  let mainColor = "#000000";
  let accentColor = "#000000";
  let accent2Color = "#000000";
  colors.subscribe(() => {
    mainColor = $colors[0];
    if (!$colors[1]) {
      accentColor = mainColor;
      accent2Color = mainColor;
    } else if (!$colors[2]) {
      accentColor = $colors[1];
      accent2Color = mainColor;
      $colors[1];
    } else if (!$colors[3]) {
      accentColor = $colors[1];
      accent2Color = $colors[2];
      $colors[1];
    } else {
      accentColor = $colors[1];
      accent2Color = $colors[2];
      $colors[3];
    }
  });
  $$result.css.add(css$1);
  $$unsubscribe_colors();
  return `<div class="flex w-[22rem] lg:w-96 h-56 rounded-md"${add_attribute("style", `background-color: ${accentColor}; border: solid 8px ${accent2Color};`, 0)}><div class="absolute w-28 ml-28 lg:ml-32 text-center text-3xl mt-2"${add_attribute("style", `border: solid 4px ${mainColor}; color: ${mainColor};`, 0)}>TITLE</div> <div class="pie w-32 h-32 ml-[6.5rem] lg:ml-32 mt-14 bg-accent2 border-4 border-pres4  svelte-1ic3ug0"${add_attribute("style", `background-image: conic-gradient(${mainColor} 64%, ${accentColor} 64%, ${accentColor} 81%, ${accent2Color} 81%); border: solid 4px ${mainColor};`, 0)}></div> </div>`;
});
const Version4_images = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  $$unsubscribe_colors();
  return `<div class="flex w-[22rem] lg:w-96 h-56 rounded-md"${add_attribute("style", `background-color: ${accentColor}; border: solid 8px ${accent2Color};`, 0)}><div class="absolute w-28 ml-[7rem] lg:ml-32 text-center text-3xl mt-2"${add_attribute("style", `border: solid 4px ${mainColor}; color: ${mainColor};`, 0)}>TITLE</div> <div class="h-56 w-96 ml-2 mt-20 "><img src="/phone1.jpg" alt="" class="border-2"${add_attribute("style", `border: solid 4px ${mainColor};`, 0)}></div> <div class="text-xs text-center mx-2 mt-14 "${add_attribute("style", `border: solid 4px ${mainColor}; color: ${accent3Color};`, 0)}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fames ac turpis egestas sed tempus urna et pharetra. Ridiculus mus mauris vitae ultricies leo integer malesuada.</div> <div class="h-56 w-96 mr-2 lg:mt-8 mt-12 "><img src="/image2.jpg" alt="" class="mb-4 border-4"${add_attribute("style", `border: solid 4px ${mainColor};`, 0)}> <img src="/phone3.jpg" alt="" class="border-4"${add_attribute("style", `border: solid 4px ${mainColor};`, 0)}></div></div>`;
});
const Version4_table = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  $$unsubscribe_colors();
  return `<div class="flex w-[22rem] lg:w-96 h-56 rounded-md"${add_attribute("style", `background-color: ${accentColor}; border: solid 8px ${accent2Color};`, 0)}><div class="absolute w-28 ml-[7rem] lg:ml-32 text-center text-3xl mt-2"${add_attribute("style", `border: solid 4px ${mainColor}; color: ${mainColor};`, 0)}>TITLE</div> <table class="w-72 h-36 border-4 border-accent ml-6 lg:ml-10 mt-14 text-sm text-center "${add_attribute("style", `border: solid 4px ${mainColor};`, 0)}><tr${add_attribute("style", `border: solid 4px ${mainColor}; background-color: ${accentColor}; color: ${mainColor};`, 0)}><th data-svelte-h="svelte-1knv3n8">Header 1</th> <th${add_attribute("style", `border: solid 4px ${mainColor};`, 0)}>Header 2</th> <th data-svelte-h="svelte-1nv1z9e">Header 3</th></tr> <tr class="border-4 border-accent bg-accent2"${add_attribute("style", `border: solid 4px ${mainColor}; background-color: ${accent3Color}; color: ${accentColor};`, 0)}><td data-svelte-h="svelte-9dyfav">Lorem ipsum</td> <td${add_attribute("style", `border: solid 4px ${mainColor};`, 0)}>Lorem ipsum</td> <td data-svelte-h="svelte-9dyfav">Lorem ipsum</td></tr> <tr class="bg-accent4 "${add_attribute("style", `border: solid 4px ${mainColor}; background-color: ${mainColor}; color: ${accentColor};`, 0)}><td data-svelte-h="svelte-9dyfav">Lorem ipsum</td> <td${add_attribute("style", `border: solid 4px ${mainColor};`, 0)}>Lorem ipsum</td> <td data-svelte-h="svelte-9dyfav">Lorem ipsum</td></tr> <tr class="border-4 border-accent bg-accent2"${add_attribute("style", `border: solid 4px ${mainColor}; background-color: ${accent3Color}; color: ${accentColor};`, 0)}><td data-svelte-h="svelte-9dyfav">Lorem ipsum</td> <td${add_attribute("style", `border: solid 4px ${mainColor};`, 0)}>Lorem ipsum</td> <td data-svelte-h="svelte-9dyfav">Lorem ipsum</td></tr></table></div>`;
});
const Version4_title = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $colors, $$unsubscribe_colors;
  $$unsubscribe_colors = subscribe(colors, (value) => $colors = value);
  let mainColor = "#000000";
  let accentColor = "#000000";
  let accent2Color = "#000000";
  colors.subscribe(() => {
    mainColor = $colors[0];
    if (!$colors[1]) {
      accentColor = mainColor;
      accent2Color = mainColor;
    } else if (!$colors[2]) {
      accentColor = $colors[1];
      accent2Color = mainColor;
      $colors[1];
    } else if (!$colors[3]) {
      accentColor = $colors[1];
      accent2Color = $colors[2];
      $colors[1];
    } else {
      accentColor = $colors[1];
      accent2Color = $colors[2];
      $colors[3];
    }
  });
  $$unsubscribe_colors();
  return `<div class="flex flex-col w-[22rem] lg:w-96 h-56 justify-center items-center rounded-md"${add_attribute("style", `background-color: ${accentColor}; border: solid 8px ${accent2Color};`, 0)}><div class="flex w-48 h-24 text-center justify-center items-center flex-col "${add_attribute("style", `border: solid 4px ${mainColor};`, 0)}><div class="text-5xl"${add_attribute("style", `color: ${mainColor};`, 0)}>TITLE</div> <div${add_attribute("style", `color: ${accent2Color};`, 0)}>Subtitle</div></div></div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".carousel.svelte-kx7ns8{position:relative;width:100%}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentIndex1 = 0;
  let currentIndex2 = 0;
  let currentIndex3 = 0;
  let currentIndex4 = 0;
  const slides1 = [Version1_title, Version1_images, Version1_table, Version1_chart];
  const slides2 = [Version2_title, Version2_images, Version2_table, Version2_chart];
  const slides3 = [Version3_title, Version3_images, Version3_table, Version3_chart];
  const slides4 = [Version4_title, Version4_images, Version4_table, Version4_chart];
  $$result.css.add(css);
  return `<div class="absolute left-0 min-[370px]:left-2 min-[380px]:left-4 lg:none lg:left-1/4 lg:right-1/4 flex justify-evenly"><div class="grid grid-rows-1 grid-cols-1 lg:grid-rows-2 lg:grid-cols-2 gap-16"><div class="flex rounded-md"><div class="carousel svelte-kx7ns8"><div class="z-0 h-56 absolute"><button id="nextButton" class="bg-gray-200 w-[22rem] lg:w-8 h-56 flex right-0 lg:ml-[22rem] opacity-5 lg:hover:opacity-30">${validate_component(ArrowKeyRight, "ArrowKeyRight").$$render($$result, { class: "h-0 ml-4 lg:h-24 lg:mt-16" }, {}, {})}</button></div> ${`<div class="lg:z-0 h-56 absolute"><button id="nextButton" class="bg-gray-200 lg:w-8 h-56 flex right-0 lg:opacity-5 lg:hover:opacity-30">${validate_component(ArrowKeyLeft, "ArrowKeyLeft").$$render($$result, { class: "h-24 mt-16" }, {}, {})}</button></div>`} ${each(slides1, (SlideComponent, index1) => {
    return `${currentIndex1 === index1 ? `<div class="slide">${validate_component(SlideComponent, "SlideComponent").$$render($$result, {}, {}, {})} </div>` : ``}`;
  })}</div></div> <div class="flex"><div class="carousel svelte-kx7ns8"><div class="z-0 h-56 absolute"><button id="nextButton" class="bg-gray-200 w-[22rem] lg:w-8 h-56 flex right-0 lg:ml-[22rem] opacity-0 lg:opacity-5 lg:hover:opacity-30">${validate_component(ArrowKeyRight, "ArrowKeyRight").$$render($$result, { class: "h-0 ml-4 lg:h-24 lg:mt-16" }, {}, {})}</button></div> ${`<div class="z-0 h-56 absolute"><button id="prevButton" class="bg-gray-200 w-8 h-56 flex right-0 opacity-5 hover:opacity-30">${validate_component(ArrowKeyLeft, "ArrowKeyLeft").$$render($$result, { class: "h-24 mt-16" }, {}, {})}</button></div>`} ${each(slides2, (SlideComponent, index2) => {
    return `${currentIndex2 === index2 ? `<div class="slide">${validate_component(SlideComponent, "SlideComponent").$$render($$result, {}, {}, {})} </div>` : ``}`;
  })}</div></div> <div class="flex"><div class="carousel svelte-kx7ns8"><div class="z-0 h-56 absolute"><button id="nextButton" class="bg-gray-200 w-[22rem] lg:w-8 h-56 flex right-0 lg:ml-[22rem] opacity-0 lg:opacity-5 lg:hover:opacity-30">${validate_component(ArrowKeyRight, "ArrowKeyRight").$$render($$result, { class: "h-0 ml-4 lg:h-24 lg:mt-16" }, {}, {})}</button></div> ${`<div class="z-0 h-56 absolute"><button id="prevButton" class="bg-gray-200 w-8 h-56 flex right-0 opacity-5 hover:opacity-30">${validate_component(ArrowKeyLeft, "ArrowKeyLeft").$$render($$result, { class: "h-24 mt-16" }, {}, {})}</button></div>`} ${each(slides3, (SlideComponent, index3) => {
    return `${currentIndex3 === index3 ? `<div class="slide">${validate_component(SlideComponent, "SlideComponent").$$render($$result, {}, {}, {})} </div>` : ``}`;
  })}</div></div> <div class="flex"><div class="carousel svelte-kx7ns8"><div class="z-0 h-56 absolute"><button id="nextButton" class="bg-gray-200 w-[22rem] lg:w-8 h-56 flex right lg:ml-[22rem] opacity-0 lg:opacity-5 lg:hover:opacity-30">${validate_component(ArrowKeyRight, "ArrowKeyRight").$$render($$result, { class: "h-0 ml-4 lg:h-24 lg:mt-16" }, {}, {})}</button></div> ${`<div class="z-0 h-56 absolute"><button id="prevButton" class="bg-gray-200 w-8 h-56 flex right-0 opacity-5 hover:opacity-30">${validate_component(ArrowKeyLeft, "ArrowKeyLeft").$$render($$result, { class: "h-24 mt-16" }, {}, {})}</button></div>`} ${each(slides4, (SlideComponent, index4) => {
    return `${currentIndex4 === index4 ? `<div class="slide">${validate_component(SlideComponent, "SlideComponent").$$render($$result, {}, {}, {})} </div>` : ``}`;
  })}</div></div></div> </div>`;
});
export {
  Page as default
};
