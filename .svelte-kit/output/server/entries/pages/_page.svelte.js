import { c as create_ssr_component, b as compute_rest_props, e as spread, g as escape_object, f as escape_attribute_value, i as escape, j as each, a as add_attribute, h as getContext, d as subscribe, v as validate_component, k as set_store_value } from "../../chunks/ssr.js";
import "@formkit/auto-animate";
import { d as derived, w as writable } from "../../chunks/index.js";
import { B as Button } from "../../chunks/Button.js";
import { I as Input, L as Label, C as Checkbox, P as Popover, a as ChevronDownSolid, D as Dropdown, S as Spinner } from "../../chunks/ChevronDownSolid.js";
import { twMerge } from "tailwind-merge";
import { a as HslToRgb, b as HslToCmy, c as HslToYuv, d as HslToLuv, e as HslToLab, f as HslToXyz, g as HslToYiq, h as HslToHex } from "../../chunks/color-conversion.js";
import { a as space, l, s, h, f as firstVisit, d as distance, b as harmony, e as complement, c as callUpdatePosition } from "../../chunks/stores.js";
import ColorConverter from "simple-color-converter";
import { c as colors } from "../../chunks/color-stores.js";
import { A as Abstract, S as Smile1, a as Smile2, F as Food } from "../../chunks/food.js";
import { A as ArrowKeyRight, a as ArrowKeyLeft, V as Version3_title, b as Version3_images, c as Version3_table, d as Version3_chart } from "../../chunks/version3-title.js";
const common = "block w-full";
const Select = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "items",
    "value",
    "placeholder",
    "underline",
    "size",
    "defaultClass",
    "underlineClass"
  ]);
  let { items = [] } = $$props;
  let { value = void 0 } = $$props;
  let { placeholder = "Choose option ..." } = $$props;
  let { underline = false } = $$props;
  let { size = "md" } = $$props;
  let { defaultClass = "text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" } = $$props;
  let { underlineClass = "text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer" } = $$props;
  const sizes = {
    sm: "text-sm p-2",
    md: "text-sm p-2.5",
    lg: "text-base py-3 px-4"
  };
  let selectClass;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.underline === void 0 && $$bindings.underline && underline !== void 0)
    $$bindings.underline(underline);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  if ($$props.underlineClass === void 0 && $$bindings.underlineClass && underlineClass !== void 0)
    $$bindings.underlineClass(underlineClass);
  selectClass = twMerge(common, underline ? underlineClass : defaultClass, sizes[size], underline && "!px-0", $$props.class);
  return `<select${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(selectClass)
      }
    ],
    {}
  )}>${placeholder ? `<option disabled selected value="">${escape(placeholder)}</option>` : ``}${items.length ? each(items, ({ value: value2, name }) => {
    return `<option${add_attribute("value", value2, 0)}>${escape(name)}</option>`;
  }) : `${slots.default ? slots.default({}) : ``}`}</select> `;
});
const ArrowDownToBraketSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "arrow down to braket solid" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "currentColor" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { viewBox: "0 0 16 18" }
    ],
    {}
  )}><g fill="currentColor"><path d="M7.292 12.706a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-1.414-1.414L9 9.586V1a1 1 0 0 0-2 0v8.586L4.707 7.293a1 1 0 1 0-1.414 1.414l3.999 3.999Z"></path><path d="M15 11a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-3a1 1 0 1 0-2 0v3a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-3a1 1 0 0 0-1-1Z"></path></g></svg> `;
});
const ArrowUpFromBracketSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "strokeLinecap", "strokeLinejoin", "strokeWidth", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { strokeLinecap = ctx.strokeLinecap || "round" } = $$props;
  let { strokeLinejoin = ctx.strokeLinejoin || "round" } = $$props;
  let { strokeWidth = ctx.strokeWidth || "2" } = $$props;
  let { ariaLabel = "arrow up from bracket solid" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.strokeLinecap === void 0 && $$bindings.strokeLinecap && strokeLinecap !== void 0)
    $$bindings.strokeLinecap(strokeLinecap);
  if ($$props.strokeLinejoin === void 0 && $$bindings.strokeLinejoin && strokeLinejoin !== void 0)
    $$bindings.strokeLinejoin(strokeLinejoin);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "currentColor" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { viewBox: "0 0 16 16" }
    ],
    {}
  )}><path stroke="currentColor"${add_attribute("stroke-linecap", strokeLinecap, 0)}${add_attribute("stroke-linejoin", strokeLinejoin, 0)}${add_attribute("stroke-width", strokeWidth, 0)} d="M8 12V1m0 0L4 5m4-4 4 4m3 5v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"></path></svg> `;
});
const callHslToNcs = async (h2, s2, l2) => {
  const response = await fetch("/api/ncs", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ h: h2, s: s2, l: l2 })
  });
  if (response.ok) {
    const data = await response.json();
    return data.color;
  } else {
    console.error("Error calling the function");
    return "FAILED";
  }
};
const Color_space = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $space, $$unsubscribe_space;
  let $l, $$unsubscribe_l;
  let $s, $$unsubscribe_s;
  let $h, $$unsubscribe_h;
  let $rgb, $$unsubscribe_rgb;
  let $cmy, $$unsubscribe_cmy;
  let $result, $$unsubscribe_result;
  $$unsubscribe_space = subscribe(space, (value) => $space = value);
  $$unsubscribe_l = subscribe(l, (value) => $l = value);
  $$unsubscribe_s = subscribe(s, (value) => $s = value);
  $$unsubscribe_h = subscribe(h, (value) => $h = value);
  let rgb = writable({});
  $$unsubscribe_rgb = subscribe(rgb, (value) => $rgb = value);
  let cmy = writable({});
  $$unsubscribe_cmy = subscribe(cmy, (value) => $cmy = value);
  let yuv = writable({});
  let result = writable({ A: 0, B: 0, C: 0 });
  $$unsubscribe_result = subscribe(result, (value) => $result = value);
  let ral, ralCode, ralName, tmp;
  let ncs = "NCS COLOR";
  let currentDate = /* @__PURE__ */ new Date();
  let time = currentDate.getTime();
  let options = [
    { value: "yuv", name: "YUV" },
    { value: "yiq", name: "YIQ" },
    { value: "xyz", name: "XYZ" },
    { value: "lab", name: "LAB" },
    { value: "luv", name: "LUV" },
    { value: "ral", name: "RAL" },
    { value: "ncs", name: "NCS" }
  ];
  let hsl = derived([h, s, l], ([$h2, $s2, $l2]) => {
    return { h: $h2, s: $s2, l: $l2 };
  });
  const checkDelay = (h2, s2, l2) => {
    currentDate = /* @__PURE__ */ new Date();
    let diff = currentDate.getTime() - time;
    time = currentDate.getTime();
    if (diff >= 700) {
      updateColorSpaces(h2, s2, l2, true);
    } else {
      updateColorSpaces(h2, s2, l2, false);
    }
  };
  const updateColorSpaces = async (h2, s2, l2, calcNcs) => {
    switch ($space) {
      case "yuv":
        tmp = HslToYuv(h2, s2, l2);
        result.set({ A: tmp["Y"], B: tmp["U"], C: tmp["V"] });
        break;
      case "yiq":
        tmp = HslToYiq(h2, s2, l2);
        result.set({ A: tmp["Y"], B: tmp["I"], C: tmp["Q"] });
        break;
      case "xyz":
        tmp = HslToXyz(h2, s2, l2);
        result.set({ A: tmp["X"], B: tmp["Y"], C: tmp["Z"] });
        break;
      case "lab":
        tmp = HslToLab(h2, s2, l2);
        result.set({ A: tmp["L"], B: tmp["A"], C: tmp["B"] });
        break;
      case "luv":
        tmp = HslToLuv(h2, s2, l2);
        result.set({ A: tmp["L"], B: tmp["U"], C: tmp["V"] });
        break;
      case "ral":
        ral = new ColorConverter({ hsl: { h: h2, s: s2, l: l2 }, to: "ral" });
        ralCode = ral.color.ral;
        ralName = ral.color.name;
        break;
      case "hsl":
        tmp = HslToCmy(h2, s2, l2);
        result.set({ A: tmp["C"], B: tmp["M"], C: tmp["Y"] });
        break;
      case "cmy":
        result.set({ A: h2, B: s2, C: l2 });
        break;
      case "ncs":
        if (calcNcs) {
          ncs = await callHslToNcs(h2, s2, l2);
        }
        break;
    }
  };
  hsl.subscribe(({ h: h2, s: s2, l: l2 }) => {
    rgb.set(HslToRgb(h2, s2, l2));
    cmy.set(HslToCmy(h2, s2, l2));
    yuv.set(HslToYuv(h2, s2, l2));
    checkDelay(h2, s2, l2);
  });
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `  <div class="w-[21.3rem] lg:w-[14.5rem] flex flex-row mt-[12.3rem] lg:mt-[12.3rem] justify-evenly glass rounded-md pb-1"><div class="text-center p-1"><div class="text-[0.8rem] font-bold" data-svelte-h="svelte-1dc157g">R</div> ${validate_component(Input, "Input").$$render(
      $$result,
      {
        type: "text",
        class: "w-16 dark:bg-transparent border-gray-600 dark:border-gray-400 text-center",
        value: $rgb["R"]
      },
      {
        value: ($$value) => {
          $rgb["R"] = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <div class="text-center p-1"><div class="text-[0.8rem] font-bold" data-svelte-h="svelte-xupm4r">G</div> ${validate_component(Input, "Input").$$render(
      $$result,
      {
        type: "text",
        class: "w-16 dark:bg-transparent border-gray-600 dark:border-gray-400 text-center",
        value: $rgb["G"]
      },
      {
        value: ($$value) => {
          $rgb["G"] = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <div class="text-center p-1"><div class="text-[0.8rem] font-bold" data-svelte-h="svelte-1tt95e4">B</div> ${validate_component(Input, "Input").$$render(
      $$result,
      {
        type: "text",
        class: "w-16 dark:bg-transparent border-gray-600 dark:border-gray-400 text-center",
        value: $rgb["B"]
      },
      {
        value: ($$value) => {
          $rgb["B"] = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div> ${`<div class="w-[14.5rem] flex flex-row mt-4 justify-evenly glass rounded-md pb-1"><div class="text-center p-1"><div class="text-[0.8rem] font-bold" data-svelte-h="svelte-4hme1u">H</div> ${validate_component(Button, "Button").$$render($$result, { color: "alternative", class: "w-16" }, {}, {
      default: () => {
        return `${escape($h)}`;
      }
    })}</div> <div class="text-center p-1"><div class="text-[0.8rem] font-bold" data-svelte-h="svelte-107zm3b">S</div> ${validate_component(Button, "Button").$$render($$result, { color: "alternative", class: "w-16" }, {}, {
      default: () => {
        return `${escape($s)}`;
      }
    })}</div> <div class="text-center p-1"><div class="text-[0.8rem] font-bold" data-svelte-h="svelte-13v49qe">L</div> ${validate_component(Button, "Button").$$render($$result, { color: "alternative", class: "w-16" }, {}, {
      default: () => {
        return `${escape($l)}`;
      }
    })}</div></div> <div class="w-[14.5rem] flex flex-row mt-4 justify-evenly glass rounded-md pb-1"><div class="text-center p-1"><div class="text-[0.8rem] font-bold" data-svelte-h="svelte-1hrsjd3">C</div> ${validate_component(Button, "Button").$$render($$result, { color: "alternative", class: "w-16" }, {}, {
      default: () => {
        return `${escape($cmy["C"])}`;
      }
    })}</div> <div class="text-center p-1"><div class="text-[0.8rem] font-bold" data-svelte-h="svelte-1te8glt">M</div> ${validate_component(Button, "Button").$$render($$result, { color: "alternative", class: "w-16" }, {}, {
      default: () => {
        return `${escape($cmy["M"])}`;
      }
    })}</div> <div class="text-center p-1"><div class="text-[0.8rem] font-bold" data-svelte-h="svelte-cvzifh">Y</div> ${validate_component(Button, "Button").$$render($$result, { color: "alternative", class: "w-16" }, {}, {
      default: () => {
        return `${escape($cmy["Y"])}`;
      }
    })}</div></div>`} ${validate_component(Label, "Label").$$render(
      $$result,
      {
        for: "countries",
        class: "w-[21.3rem] lg:w-[14.5rem] mt-4"
      },
      {},
      {
        default: () => {
          return `Color space`;
        }
      }
    )} ${validate_component(Select, "Select").$$render(
      $$result,
      {
        id: "countries",
        class: "mt-2 w-[21.3rem] lg:w-[14.5rem] glass",
        placeholder: "",
        value: $space
      },
      {
        value: ($$value) => {
          $space = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${each(options, ({ value, name }) => {
            return `<option${add_attribute("value", value, 0)} class="h-8 bg-light dark:bg-dark">${escape(name)} </option>`;
          })}`;
        }
      }
    )} ${$space != "ral" && $space != "ncs" ? `<div class="w-[21.3rem] lg:w-[14.5rem] flex flex-row mt-4 justify-evenly">${validate_component(Button, "Button").$$render(
      $$result,
      {
        color: "alternative",
        class: "w-16 glass"
      },
      {},
      {
        default: () => {
          return `${escape($result["A"])}`;
        }
      }
    )} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        color: "alternative",
        class: "w-16 glass"
      },
      {},
      {
        default: () => {
          return `${escape($result["B"])}`;
        }
      }
    )} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        color: "alternative",
        class: "w-16 glass"
      },
      {},
      {
        default: () => {
          return `${escape($result["C"])}`;
        }
      }
    )}</div>` : `${$space == "ral" ? `<div class="w-[21.3rem] lg:w-[14.5rem] flex flex-row mt-4 justify-evenly glass h-10 items-center rounded-md"><div>${escape(ralCode)}</div> <div>${escape(ralName)}</div></div>` : `${$space == "ncs" ? `<div class="w-[21.3rem] lg:w-[14.5rem] flex flex-row mt-4 justify-evenly glass h-10 items-center rounded-md"><div>${escape(ncs)}</div></div>` : ``}`}`}`;
  } while (!$$settled);
  $$unsubscribe_space();
  $$unsubscribe_l();
  $$unsubscribe_s();
  $$unsubscribe_h();
  $$unsubscribe_rgb();
  $$unsubscribe_cmy();
  $$unsubscribe_result();
  return $$rendered;
});
(() => {
  var Mt = Object.defineProperty;
  var kt = (o, e, t) => e in o ? Mt(o, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: t
  }) : o[e] = t;
  var h2 = (o, e, t) => (kt(o, typeof e != "symbol" ? e + "" : e, t), t);
  var ot = ":root{--tool-cool-color-picker-btn-bg:#fff;--tool-cool-color-picker-btn-border-color:#cecece;--tool-cool-color-picker-btn-border-color-inner:#626262;--tool-cool-color-picker-btn-border-radius:.25rem;--tool-cool-color-picker-btn-border-radius-inner:0}.color-picker{position:relative}.button{width:3rem;height:1.5rem;padding:.25rem;background:var(--tool-cool-color-picker-btn-bg,#fff);border-radius:var(--tool-cool-color-picker-btn-border-radius,0.25rem);border-width:1px;border-style:solid;border-color:var(--tool-cool-color-picker-btn-border-color,#cecece);cursor:pointer;box-sizing:border-box}.button-color{display:block;width:100%;height:100%;border-width:1px;border-style:solid;border-color:var(--tool-cool-color-picker-btn-border-color-inner,#626262);background:#000;box-sizing:border-box;border-radius:var(--tool-cool-color-picker-btn-border-radius-inner,0)}";
  var it = ":root{--tool-cool-color-picker-popup-bg:#fff;--tool-cool-color-picker-popup-border-color:#cecece;--tool-cool-color-picker-popup-width:214px}.popup{position:absolute;left:0;top:calc(100% - 1px);z-index:50;width:var(--tool-cool-color-picker-popup-width,214px);padding:.5rem;background:var(--tool-cool-color-picker-popup-bg,#fff);border-width:1px;border-style:solid;border-color:var(--tool-cool-color-picker-popup-border-color,#cecece);border-radius:.25rem}.popup.right{right:0;left:auto}";
  var rt = ".saturation{touch-action:none;overflow:hidden;width:100%;height:9rem;position:relative;border-radius:6px;}.box{width:100%;height:100%;position:absolute;border-radius: 6px;}.white{background:linear-gradient(90deg,#fff,hsla(0,0%,100%,0));border-radius: 6px;}.black{background:linear-gradient(0,#000,transparent);border-radius: 6px;}.pointer{top:34.902%;left:18.6747%;cursor:pointer;position:absolute;outline:0}.handler{box-shadow:0 0 0 1.5px #fff,inset 0 0 1px 1px rgb(0,0,0,0.3),0 0 1px 2px rgb(0,0,0,0.4);-webkit-transform:translate(-2px,-2px);transform:translate(-2px,-2px);border-radius:100%;width:.25rem;height:.25rem;outline:0}";
  var p = "tc-hsv-changed", f = "tc-hue-changed", m = "tc-alpha-changed", D = "tc-button-clicked", M = (o, e) => {
    !o || document.dispatchEvent(new CustomEvent(m, {
      detail: {
        a: e,
        cid: o
      }
    }));
  }, b = (o, e, t, i) => {
    !o || document.dispatchEvent(new CustomEvent(p, {
      detail: {
        h: e,
        s: t,
        v: i,
        cid: o
      }
    }));
  }, st = (o, e) => {
    !o || document.dispatchEvent(new CustomEvent(f, {
      detail: {
        h: e,
        cid: o
      }
    }));
  };
  function u(o, e) {
    St(o) && (o = "100%");
    var t = Tt(o);
    return o = e === 360 ? o : Math.min(e, Math.max(0, parseFloat(o))), t && (o = parseInt(String(o * e), 10) / 100), Math.abs(o - e) < 1e-6 ? 1 : (e === 360 ? o = (o < 0 ? o % e + e : o % e) / parseFloat(String(e)) : o = o % e / parseFloat(String(e)), o);
  }
  function k(o) {
    return Math.min(1, Math.max(0, o));
  }
  function St(o) {
    return typeof o == "string" && o.indexOf(".") !== -1 && parseFloat(o) === 1;
  }
  function Tt(o) {
    return typeof o == "string" && o.indexOf("%") !== -1;
  }
  function _(o) {
    return o = parseFloat(o), (isNaN(o) || o < 0 || o > 1) && (o = 1), o;
  }
  function L(o) {
    return o <= 1 ? "".concat(Number(o) * 100, "%") : o;
  }
  function C(o) {
    return o.length === 1 ? "0" + o : String(o);
  }
  function at(o, e, t) {
    return {
      r: u(o, 255) * 255,
      g: u(e, 255) * 255,
      b: u(t, 255) * 255
    };
  }
  function U(o, e, t) {
    o = u(o, 255), e = u(e, 255), t = u(t, 255);
    var i = Math.max(o, e, t), r = Math.min(o, e, t), n = 0, s2 = 0, a = (i + r) / 2;
    if (i === r)
      s2 = 0, n = 0;
    else {
      var d = i - r;
      switch (s2 = a > 0.5 ? d / (2 - i - r) : d / (i + r), i) {
        case o:
          n = (e - t) / d + (e < t ? 6 : 0);
          break;
        case e:
          n = (t - o) / d + 2;
          break;
        case t:
          n = (o - e) / d + 4;
          break;
      }
      n /= 6;
    }
    return {
      h: n,
      s: s2,
      l: a
    };
  }
  function O(o, e, t) {
    return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? o + (e - o) * (6 * t) : t < 1 / 2 ? e : t < 2 / 3 ? o + (e - o) * (2 / 3 - t) * 6 : o;
  }
  function ht(o, e, t) {
    var i, r, n;
    if (o = u(o, 360), e = u(e, 100), t = u(t, 100), e === 0)
      r = t, n = t, i = t;
    else {
      var s2 = t < 0.5 ? t * (1 + e) : t + e - t * e, a = 2 * t - s2;
      i = O(a, s2, o + 1 / 3), r = O(a, s2, o), n = O(a, s2, o - 1 / 3);
    }
    return {
      r: i * 255,
      g: r * 255,
      b: n * 255
    };
  }
  function N(o, e, t) {
    o = u(o, 255), e = u(e, 255), t = u(t, 255);
    var i = Math.max(o, e, t), r = Math.min(o, e, t), n = 0, s2 = i, a = i - r, d = i === 0 ? 0 : a / i;
    if (i === r)
      n = 0;
    else {
      switch (i) {
        case o:
          n = (e - t) / a + (e < t ? 6 : 0);
          break;
        case e:
          n = (t - o) / a + 2;
          break;
        case t:
          n = (o - e) / a + 4;
          break;
      }
      n /= 6;
    }
    return {
      h: n,
      s: d,
      v: s2
    };
  }
  function lt(o, e, t) {
    o = u(o, 360) * 6, e = u(e, 100), t = u(t, 100);
    var i = Math.floor(o), r = o - i, n = t * (1 - e), s2 = t * (1 - r * e), a = t * (1 - (1 - r) * e), d = i % 6, w = [t, s2, n, n, a, t][d], x = [a, t, t, s2, n, n][d], R = [n, n, a, t, t, s2][d];
    return {
      r: w * 255,
      g: x * 255,
      b: R * 255
    };
  }
  function K(o, e, t, i) {
    var r = [C(Math.round(o).toString(16)), C(Math.round(e).toString(16)), C(Math.round(t).toString(16))];
    return i && r[0].startsWith(r[0].charAt(1)) && r[1].startsWith(r[1].charAt(1)) && r[2].startsWith(r[2].charAt(1)) ? r[0].charAt(0) + r[1].charAt(0) + r[2].charAt(0) : r.join("");
  }
  function dt(o, e, t, i, r) {
    var n = [C(Math.round(o).toString(16)), C(Math.round(e).toString(16)), C(Math.round(t).toString(16)), C(Rt(i))];
    return r && n[0].startsWith(n[0].charAt(1)) && n[1].startsWith(n[1].charAt(1)) && n[2].startsWith(n[2].charAt(1)) && n[3].startsWith(n[3].charAt(1)) ? n[0].charAt(0) + n[1].charAt(0) + n[2].charAt(0) + n[3].charAt(0) : n.join("");
  }
  function Rt(o) {
    return Math.round(parseFloat(o) * 255).toString(16);
  }
  function V(o) {
    return g(o) / 255;
  }
  function g(o) {
    return parseInt(o, 16);
  }
  function ut(o) {
    return {
      r: o >> 16,
      g: (o & 65280) >> 8,
      b: o & 255
    };
  }
  var A = {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    goldenrod: "#daa520",
    gold: "#ffd700",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavenderblush: "#fff0f5",
    lavender: "#e6e6fa",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    rebeccapurple: "#663399",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
  };
  function ct(o) {
    var e = {
      r: 0,
      g: 0,
      b: 0
    }, t = 1, i = null, r = null, n = null, s2 = false, a = false;
    return typeof o == "string" && (o = Pt(o)), typeof o == "object" && (E(o.r) && E(o.g) && E(o.b) ? (e = at(o.r, o.g, o.b), s2 = true, a = String(o.r).substr(-1) === "%" ? "prgb" : "rgb") : E(o.h) && E(o.s) && E(o.v) ? (i = L(o.s), r = L(o.v), e = lt(o.h, i, r), s2 = true, a = "hsv") : E(o.h) && E(o.s) && E(o.l) && (i = L(o.s), n = L(o.l), e = ht(o.h, i, n), s2 = true, a = "hsl"), Object.prototype.hasOwnProperty.call(o, "a") && (t = o.a)), t = _(t), {
      ok: s2,
      format: o.format || a,
      r: Math.min(255, Math.max(e.r, 0)),
      g: Math.min(255, Math.max(e.g, 0)),
      b: Math.min(255, Math.max(e.b, 0)),
      a: t
    };
  }
  var Dt = "[-\\+]?\\d+%?", _t = "[-\\+]?\\d*\\.\\d+%?", y = "(?:".concat(_t, ")|(?:").concat(Dt, ")"), G = "[\\s|\\(]+(".concat(y, ")[,|\\s]+(").concat(y, ")[,|\\s]+(").concat(y, ")\\s*\\)?"), F = "[\\s|\\(]+(".concat(y, ")[,|\\s]+(").concat(y, ")[,|\\s]+(").concat(y, ")[,|\\s]+(").concat(y, ")\\s*\\)?"), v = {
    CSS_UNIT: new RegExp(y),
    rgb: new RegExp("rgb" + G),
    rgba: new RegExp("rgba" + F),
    hsl: new RegExp("hsl" + G),
    hsla: new RegExp("hsla" + F),
    hsv: new RegExp("hsv" + G),
    hsva: new RegExp("hsva" + F),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
  };
  function Pt(o) {
    if (o = o.trim().toLowerCase(), o.length === 0)
      return false;
    var e = false;
    if (A[o])
      o = A[o], e = true;
    else if (o === "transparent")
      return {
        r: 0,
        g: 0,
        b: 0,
        a: 0,
        format: "name"
      };
    var t = v.rgb.exec(o);
    return t ? {
      r: t[1],
      g: t[2],
      b: t[3]
    } : (t = v.rgba.exec(o), t ? {
      r: t[1],
      g: t[2],
      b: t[3],
      a: t[4]
    } : (t = v.hsl.exec(o), t ? {
      h: t[1],
      s: t[2],
      l: t[3]
    } : (t = v.hsla.exec(o), t ? {
      h: t[1],
      s: t[2],
      l: t[3],
      a: t[4]
    } : (t = v.hsv.exec(o), t ? {
      h: t[1],
      s: t[2],
      v: t[3]
    } : (t = v.hsva.exec(o), t ? {
      h: t[1],
      s: t[2],
      v: t[3],
      a: t[4]
    } : (t = v.hex8.exec(o), t ? {
      r: g(t[1]),
      g: g(t[2]),
      b: g(t[3]),
      a: V(t[4]),
      format: e ? "name" : "hex8"
    } : (t = v.hex6.exec(o), t ? {
      r: g(t[1]),
      g: g(t[2]),
      b: g(t[3]),
      format: e ? "name" : "hex"
    } : (t = v.hex4.exec(o), t ? {
      r: g(t[1] + t[1]),
      g: g(t[2] + t[2]),
      b: g(t[3] + t[3]),
      a: V(t[4] + t[4]),
      format: e ? "name" : "hex8"
    } : (t = v.hex3.exec(o), t ? {
      r: g(t[1] + t[1]),
      g: g(t[2] + t[2]),
      b: g(t[3] + t[3]),
      format: e ? "name" : "hex"
    } : false)))))))));
  }
  function E(o) {
    return Boolean(v.CSS_UNIT.exec(String(o)));
  }
  var l2 = function() {
    function o(e, t) {
      e === void 0 && (e = ""), t === void 0 && (t = {});
      var i;
      if (e instanceof o)
        return e;
      typeof e == "number" && (e = ut(e)), this.originalInput = e;
      var r = ct(e);
      this.originalInput = e, this.r = r.r, this.g = r.g, this.b = r.b, this.a = r.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (i = t.format) !== null && i !== void 0 ? i : r.format, this.gradientType = t.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = r.ok;
    }
    return o.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, o.prototype.isLight = function() {
      return !this.isDark();
    }, o.prototype.getBrightness = function() {
      var e = this.toRgb();
      return (e.r * 299 + e.g * 587 + e.b * 114) / 1e3;
    }, o.prototype.getLuminance = function() {
      var e = this.toRgb(), t, i, r, n = e.r / 255, s2 = e.g / 255, a = e.b / 255;
      return n <= 0.03928 ? t = n / 12.92 : t = Math.pow((n + 0.055) / 1.055, 2.4), s2 <= 0.03928 ? i = s2 / 12.92 : i = Math.pow((s2 + 0.055) / 1.055, 2.4), a <= 0.03928 ? r = a / 12.92 : r = Math.pow((a + 0.055) / 1.055, 2.4), 0.2126 * t + 0.7152 * i + 0.0722 * r;
    }, o.prototype.getAlpha = function() {
      return this.a;
    }, o.prototype.setAlpha = function(e) {
      return this.a = _(e), this.roundA = Math.round(100 * this.a) / 100, this;
    }, o.prototype.toHsv = function() {
      var e = N(this.r, this.g, this.b);
      return {
        h: e.h * 360,
        s: e.s,
        v: e.v,
        a: this.a
      };
    }, o.prototype.toHsvString = function() {
      var e = N(this.r, this.g, this.b), t = Math.round(e.h * 360), i = Math.round(e.s * 100), r = Math.round(e.v * 100);
      return this.a === 1 ? "hsv(".concat(t, ", ").concat(i, "%, ").concat(r, "%)") : "hsva(".concat(t, ", ").concat(i, "%, ").concat(r, "%, ").concat(this.roundA, ")");
    }, o.prototype.toHsl = function() {
      var e = U(this.r, this.g, this.b);
      return {
        h: e.h * 360,
        s: e.s,
        l: e.l,
        a: this.a
      };
    }, o.prototype.toHslString = function() {
      var e = U(this.r, this.g, this.b), t = Math.round(e.h * 360), i = Math.round(e.s * 100), r = Math.round(e.l * 100);
      return this.a === 1 ? "hsl(".concat(t, ", ").concat(i, "%, ").concat(r, "%)") : "hsla(".concat(t, ", ").concat(i, "%, ").concat(r, "%, ").concat(this.roundA, ")");
    }, o.prototype.toHex = function(e) {
      return e === void 0 && (e = false), K(this.r, this.g, this.b, e);
    }, o.prototype.toHexString = function(e) {
      return e === void 0 && (e = false), "#" + this.toHex(e);
    }, o.prototype.toHex8 = function(e) {
      return e === void 0 && (e = false), dt(this.r, this.g, this.b, this.a, e);
    }, o.prototype.toHex8String = function(e) {
      return e === void 0 && (e = false), "#" + this.toHex8(e);
    }, o.prototype.toRgb = function() {
      return {
        r: Math.round(this.r),
        g: Math.round(this.g),
        b: Math.round(this.b),
        a: this.a
      };
    }, o.prototype.toRgbString = function() {
      var e = Math.round(this.r), t = Math.round(this.g), i = Math.round(this.b);
      return this.a === 1 ? "rgb(".concat(e, ", ").concat(t, ", ").concat(i, ")") : "rgba(".concat(e, ", ").concat(t, ", ").concat(i, ", ").concat(this.roundA, ")");
    }, o.prototype.toPercentageRgb = function() {
      var e = function(t) {
        return "".concat(Math.round(u(t, 255) * 100), "%");
      };
      return {
        r: e(this.r),
        g: e(this.g),
        b: e(this.b),
        a: this.a
      };
    }, o.prototype.toPercentageRgbString = function() {
      var e = function(t) {
        return Math.round(u(t, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(e(this.r), "%, ").concat(e(this.g), "%, ").concat(e(this.b), "%)") : "rgba(".concat(e(this.r), "%, ").concat(e(this.g), "%, ").concat(e(this.b), "%, ").concat(this.roundA, ")");
    }, o.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return false;
      for (var e = "#" + K(this.r, this.g, this.b, false), t = 0, i = Object.entries(A); t < i.length; t++) {
        var r = i[t], n = r[0], s2 = r[1];
        if (e === s2)
          return n;
      }
      return false;
    }, o.prototype.toString = function(e) {
      var t = Boolean(e);
      e = e != null ? e : this.format;
      var i = false, r = this.a < 1 && this.a >= 0, n = !t && r && (e.startsWith("hex") || e === "name");
      return n ? e === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (e === "rgb" && (i = this.toRgbString()), e === "prgb" && (i = this.toPercentageRgbString()), (e === "hex" || e === "hex6") && (i = this.toHexString()), e === "hex3" && (i = this.toHexString(true)), e === "hex4" && (i = this.toHex8String(true)), e === "hex8" && (i = this.toHex8String()), e === "name" && (i = this.toName()), e === "hsl" && (i = this.toHslString()), e === "hsv" && (i = this.toHsvString()), i || this.toHexString());
    }, o.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, o.prototype.clone = function() {
      return new o(this.toString());
    }, o.prototype.lighten = function(e) {
      e === void 0 && (e = 10);
      var t = this.toHsl();
      return t.l += e / 100, t.l = k(t.l), new o(t);
    }, o.prototype.brighten = function(e) {
      e === void 0 && (e = 10);
      var t = this.toRgb();
      return t.r = Math.max(0, Math.min(255, t.r - Math.round(255 * -(e / 100)))), t.g = Math.max(0, Math.min(255, t.g - Math.round(255 * -(e / 100)))), t.b = Math.max(0, Math.min(255, t.b - Math.round(255 * -(e / 100)))), new o(t);
    }, o.prototype.darken = function(e) {
      e === void 0 && (e = 10);
      var t = this.toHsl();
      return t.l -= e / 100, t.l = k(t.l), new o(t);
    }, o.prototype.tint = function(e) {
      return e === void 0 && (e = 10), this.mix("white", e);
    }, o.prototype.shade = function(e) {
      return e === void 0 && (e = 10), this.mix("black", e);
    }, o.prototype.desaturate = function(e) {
      e === void 0 && (e = 10);
      var t = this.toHsl();
      return t.s -= e / 100, t.s = k(t.s), new o(t);
    }, o.prototype.saturate = function(e) {
      e === void 0 && (e = 10);
      var t = this.toHsl();
      return t.s += e / 100, t.s = k(t.s), new o(t);
    }, o.prototype.greyscale = function() {
      return this.desaturate(100);
    }, o.prototype.spin = function(e) {
      var t = this.toHsl(), i = (t.h + e) % 360;
      return t.h = i < 0 ? 360 + i : i, new o(t);
    }, o.prototype.mix = function(e, t) {
      t === void 0 && (t = 50);
      var i = this.toRgb(), r = new o(e).toRgb(), n = t / 100, s2 = {
        r: (r.r - i.r) * n + i.r,
        g: (r.g - i.g) * n + i.g,
        b: (r.b - i.b) * n + i.b,
        a: (r.a - i.a) * n + i.a
      };
      return new o(s2);
    }, o.prototype.analogous = function(e, t) {
      e === void 0 && (e = 6), t === void 0 && (t = 30);
      var i = this.toHsl(), r = 360 / t, n = [this];
      for (i.h = (i.h - (r * e >> 1) + 720) % 360; --e; )
        i.h = (i.h + r) % 360, n.push(new o(i));
      return n;
    }, o.prototype.complement = function() {
      var e = this.toHsl();
      return e.h = (e.h + 180) % 360, new o(e);
    }, o.prototype.monochromatic = function(e) {
      e === void 0 && (e = 6);
      for (var t = this.toHsv(), i = t.h, r = t.s, n = t.v, s2 = [], a = 1 / e; e--; )
        s2.push(new o({
          h: i,
          s: r,
          v: n
        })), n = (n + a) % 1;
      return s2;
    }, o.prototype.splitcomplement = function() {
      var e = this.toHsl(), t = e.h;
      return [this, new o({
        h: (t + 72) % 360,
        s: e.s,
        l: e.l
      }), new o({
        h: (t + 216) % 360,
        s: e.s,
        l: e.l
      })];
    }, o.prototype.onBackground = function(e) {
      var t = this.toRgb(), i = new o(e).toRgb();
      return new o({
        r: i.r + (t.r - i.r) * t.a,
        g: i.g + (t.g - i.g) * t.a,
        b: i.b + (t.b - i.b) * t.a
      });
    }, o.prototype.triad = function() {
      return this.polyad(3);
    }, o.prototype.tetrad = function() {
      return this.polyad(4);
    }, o.prototype.polyad = function(e) {
      for (var t = this.toHsl(), i = t.h, r = [this], n = 360 / e, s2 = 1; s2 < e; s2++)
        r.push(new o({
          h: (i + s2 * n) % 360,
          s: t.s,
          l: t.l
        }));
      return r;
    }, o.prototype.equals = function(e) {
      return this.toRgbString() === new o(e).toRgbString();
    }, o;
  }();
  var $ = () => Math.random().toString(16).slice(2), P = (o) => Math.round((o + Number.EPSILON) * 100) / 100;
  var H = 0.01, q = (o) => (o < 0 && (o = 0), o > 360 && (o = 360), `hsl(${Math.round(o)}, 100%, 50%)`), z = (o) => {
    let e = o.toRgb();
    return `linear-gradient(to right, rgba(${e.r},${e.g},${e.b}, 0) 0%, rgba(${e.r},${e.g},${e.b}, 1) 100%)`;
  }, S = (o) => {
    let e = o.toRgb();
    return `rgba(${e.r}, ${e.g}, ${e.b}, ${P(e.a)})`;
  }, pt = (o) => {
    let e = o.toHsl();
    return `hsla(${Math.round(e.h)}, ${Math.round(e.s * 100)}%, ${Math.round(e.l * 100)}%, ${P(e.a)})`;
  }, gt = (o) => {
    let e = o.toHsv();
    return `hsva(${Math.round(e.h)}, ${Math.round(e.s * 100)}%, ${Math.round(e.v * 100)}%, ${P(e.a)})`;
  }, W = (o) => (o < 0 && (o = 0), o > 1 && (o = 1), `${(-(o * 100) + 100).toFixed(2)}%`), X = (o) => (o < 0 && (o = 0), o > 1 && (o = 1), `${(o * 100).toFixed(2)}%`), T = (o) => {
    o < 0 && (o = 0), o > 360 && (o = 360);
    let e = o * 100 / 360, t = Math.round(e * 100) / 100;
    return t < 0 && (t = 0), t > 100 && (t = 100), t;
  }, B = (o) => 360 * o / 100, I = (o) => {
    let e = Number(o) || 0;
    return e = Math.round(e), e = Math.max(0, e), e = Math.min(255, e), e;
  }, ft = (o) => {
    let e = Number(o) || 100;
    return e = Math.round(e), e = Math.max(0, e), e = Math.min(100, e), e;
  }, c = (o) => {
    let e = new l2(o || "#000");
    return e.setAlpha(e.getAlpha()), e;
  };
  var j = class extends HTMLElement {
    constructor() {
      super();
      h2(this, "cid");
      h2(this, "$saturation");
      h2(this, "$color");
      h2(this, "$pointer");
      h2(this, "hue", 0);
      h2(this, "saturation", 0);
      h2(this, "value", 0);
      this.attachShadow({
        mode: "open"
      }), this.onMouseDown = this.onMouseDown.bind(this), this.onMouseUp = this.onMouseUp.bind(this), this.onChange = this.onChange.bind(this), this.onPointerKeyDown = this.onPointerKeyDown.bind(this), this.hsvChanged = this.hsvChanged.bind(this), this.hueChanged = this.hueChanged.bind(this);
    }
    static get observedAttributes() {
      return ["color"];
    }
    render(t = true) {
      this.$pointer && (this.$pointer.style.left = X(this.saturation), this.$pointer.style.top = W(this.value)), this.$color && this.$color.setAttribute("style", `background: ${q(this.hue)}`), t && b(this.cid, this.hue, this.saturation, this.value);
    }
    onChange(t) {
      if (!this.$saturation)
        return;
      let {
        width: i,
        height: r,
        left: n,
        top: s2
      } = this.$saturation.getBoundingClientRect();
      if (i === 0 || r === 0)
        return;
      let a = typeof t.clientX == "number" ? t.clientX : t.touches[0].clientX, d = typeof t.clientY == "number" ? t.clientY : t.touches[0].clientY, w = Math.min(Math.max(0, a - n), i), x = Math.min(Math.max(0, d - s2), r);
      this.saturation = w / i, this.value = 1 - x / r, this.render();
    }
    onPointerKeyDown(t) {
      switch (t.key) {
        case "ArrowLeft": {
          this.saturation = Math.max(0, this.saturation - H), this.render();
          break;
        }
        case "ArrowRight": {
          this.saturation = Math.min(1, this.saturation + H), this.render();
          break;
        }
        case "ArrowUp": {
          this.value = Math.min(1, this.value + H), this.render();
          break;
        }
        case "ArrowDown": {
          t.preventDefault(), this.value = Math.max(0, this.value - H), this.render();
          break;
        }
      }
    }
    onMouseDown(t) {
      t.preventDefault && t.preventDefault(), this.onChange(t), window.addEventListener("mousemove", this.onChange), window.addEventListener("mouseup", this.onMouseUp), window.setTimeout(() => {
        var i;
        (i = this.$pointer) == null || i.focus();
      }, 0);
    }
    onMouseUp() {
      window.removeEventListener("mousemove", this.onChange), window.removeEventListener("mouseup", this.onChange);
    }
    hsvChanged(t) {
      if (!t || !t.detail || !t.detail.cid || t.detail.cid !== this.cid)
        return;
      let i = false;
      this.hue !== t.detail.h && (this.hue = t.detail.h, i = true), this.saturation !== t.detail.s && (this.saturation = t.detail.s, i = true), this.value !== t.detail.v && (this.value = t.detail.v, i = true), i && this.render(false);
    }
    hueChanged(t) {
      !t || !t.detail || !t.detail.cid || t.detail.cid === this.cid && (this.hue = t.detail.h, this.render());
    }
    connectedCallback() {
      var s2, a, d, w, x;
      if (!this.shadowRoot)
        return;
      this.cid = this.getAttribute("cid") || "";
      let i = c(this.getAttribute("color")).toHsv();
      this.hue = i.h, this.saturation = i.s, this.value = i.v;
      let r = W(this.value), n = X(this.saturation);
      this.shadowRoot.innerHTML = `
           <style>${rt}</style>
           <div class="saturation">
                <div class="box" style="background: ${q(this.hue)}">
                    <div class="white box">
                        <div class="black box"></div>

                        <div class="pointer" tabindex="0" style="top: ${r}; left: ${n};">
                            <div class="handler"></div>
                        </div>
                    </div>
                </div>
           </div>
        `, this.$saturation = this.shadowRoot.querySelector(".saturation"), this.$color = this.shadowRoot.querySelector(".box"), this.$pointer = this.shadowRoot.querySelector(".pointer"), (s2 = this.$pointer) == null || s2.addEventListener("keydown", this.onPointerKeyDown), (a = this.$saturation) == null || a.addEventListener("mousedown", this.onMouseDown), (d = this.$saturation) == null || d.addEventListener("mouseup", this.onMouseUp), (w = this.$saturation) == null || w.addEventListener("touchmove", this.onChange), (x = this.$saturation) == null || x.addEventListener("touchstart", this.onChange), document.addEventListener(p, this.hsvChanged), document.addEventListener(f, this.hueChanged);
    }
    disconnectedCallback() {
      var t, i, r, n, s2;
      (t = this.$saturation) == null || t.removeEventListener("mousedown", this.onMouseDown), (i = this.$saturation) == null || i.removeEventListener("mouseup", this.onMouseUp), (r = this.$saturation) == null || r.removeEventListener("touchmove", this.onChange), (n = this.$saturation) == null || n.removeEventListener("touchstart", this.onChange), (s2 = this.$pointer) == null || s2.removeEventListener("keydown", this.onPointerKeyDown), document.removeEventListener(p, this.hsvChanged), document.removeEventListener(f, this.hueChanged);
    }
    attributeChangedCallback(t, i, r) {
      let s2 = c(r).toHsv();
      this.hue = s2.h, this.saturation = s2.s, this.value = s2.v, this.render(false);
    }
  }, bt = j;
  var vt = ".hue{overflow:hidden;height:.625rem;margin-bottom:.25rem;margin-top:.5rem;position:relative;border-radius: 4px;}.box{width:100%;height:100%;position:absolute}.hue-v{background:linear-gradient(0,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.hue-h{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red);width:100%;height:100%;position:relative}.pointer-box{left:87%;position:absolute;outline:0;border-radius: 45px;}.handler{background:#fff;box-shadow:0 0 2px rgb(0 0 0 / 60%);box-sizing:border-box;border:1px solid hsla(0,0%,88%,.5);height:8px;margin-top:1px;-webkit-transform:translateX(-4px);transform:translateX(-4px);width:8px;cursor:pointer;outline:0;border-radius:45px;}.pointer-box:focus .handler{border:2px solid hsla(0,0%,88%,1);border-radius: 45px;}";
  var Y = class extends HTMLElement {
    constructor() {
      super();
      h2(this, "cid");
      h2(this, "$hue");
      h2(this, "$pointer");
      h2(this, "hue", 0);
      this.attachShadow({
        mode: "open"
      }), this.onMouseDown = this.onMouseDown.bind(this), this.onMouseUp = this.onMouseUp.bind(this), this.onChange = this.onChange.bind(this), this.onKeyDown = this.onKeyDown.bind(this), this.hsvChanged = this.hsvChanged.bind(this);
    }
    static get observedAttributes() {
      return ["color"];
    }
    render() {
      this.$pointer && (this.$pointer.style.left = `${T(this.hue)}%`), st(this.cid, this.hue);
    }
    hsvChanged(t) {
      !t || !t.detail || !t.detail.cid || t.detail.cid === this.cid && this.hue !== t.detail.h && (this.hue = t.detail.h, this.render());
    }
    onChange(t) {
      if (!this.$hue)
        return;
      t.preventDefault && t.preventDefault();
      let {
        width: i,
        left: r
      } = this.$hue.getBoundingClientRect();
      if (i === 0)
        return;
      let n = typeof t.clientX == "number" ? t.clientX : t.touches[0].clientX, s2 = Math.min(Math.max(0, n - r), i), a = Math.min(Math.max(0, Math.round(s2 * 100 / i)), 100);
      this.hue = B(a), this.render();
    }
    onKeyDown(t) {
      var i;
      switch ((i = this.$pointer) == null || i.focus(), t.key) {
        case "ArrowLeft": {
          let r = T(this.hue);
          r = Math.max(0, r - 1), this.hue = B(r), this.render();
          break;
        }
        case "ArrowRight": {
          let r = T(this.hue);
          r = Math.min(100, r + 1), this.hue = B(r), this.render();
          break;
        }
      }
    }
    onMouseDown(t) {
      t.preventDefault && t.preventDefault(), this.onChange(t), window.addEventListener("mousemove", this.onChange), window.addEventListener("mouseup", this.onMouseUp), window.setTimeout(() => {
        var i;
        (i = this.$pointer) == null || i.focus();
      }, 0);
    }
    onMouseUp() {
      window.removeEventListener("mousemove", this.onChange), window.removeEventListener("mouseup", this.onChange);
    }
    connectedCallback() {
      var i, r, n, s2, a;
      if (!this.shadowRoot)
        return;
      this.cid = this.getAttribute("cid") || "";
      let t = c(this.getAttribute("color"));
      this.hue = t.toHsv().h, this.shadowRoot.innerHTML = `
           <style>${vt}</style>
           <div class="hue">
                <div class="box">
                    <div class="hue-v box">
                        <div class="hue-h"></div>
                    </div>

                    <div class="pointer box">
                        <div class="pointer-box" tabindex="0" style="left: ${T(this.hue)}%">
                            <div class="handler"></div>
                        </div>
                    </div>
                </div>
           </div>
        `, this.$hue = this.shadowRoot.querySelector(".hue"), this.$pointer = this.shadowRoot.querySelector(".pointer-box"), (i = this.$hue) == null || i.addEventListener("mousedown", this.onMouseDown), (r = this.$hue) == null || r.addEventListener("mouseup", this.onMouseUp), (n = this.$hue) == null || n.addEventListener("touchmove", this.onChange), (s2 = this.$hue) == null || s2.addEventListener("touchstart", this.onChange), (a = this.$pointer) == null || a.addEventListener("keydown", this.onKeyDown), document.addEventListener(p, this.hsvChanged);
    }
    disconnectedCallback() {
      var t, i, r, n, s2;
      (t = this.$hue) == null || t.removeEventListener("mousedown", this.onMouseDown), (i = this.$hue) == null || i.removeEventListener("mouseup", this.onMouseUp), (r = this.$hue) == null || r.removeEventListener("touchmove", this.onChange), (n = this.$hue) == null || n.removeEventListener("touchstart", this.onChange), (s2 = this.$pointer) == null || s2.removeEventListener("keydown", this.onKeyDown), document.removeEventListener(p, this.hsvChanged);
    }
    attributeChangedCallback(t, i, r) {
      let s2 = c(r).toHsv();
      this.hue = s2.h, this.render();
    }
  }, mt = Y;
  var wt = ".alpha{overflow:hidden;height:.625rem;position:relative;background:#fff}.box{width:100%;height:100%;position:absolute}.transparent-bg{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADFJREFUOE9jZGBgEGHAD97gk2YcNYBhmIQBgWSAP52AwoAQwJvQRg1gACckQoC2gQgAIF8IscwEtKYAAAAASUVORK5CYII=);overflow:hidden}.pointer-box{left:100%;position:absolute;outline:0}.handler{background:#fff;box-shadow:0 0 2px rgb(0 0 0 / 60%);box-sizing:border-box;border:1px solid hsla(0,0%,88%,.5);height:8px;margin-top:1px;-webkit-transform:translateX(-4px);transform:translateX(-4px);width:8px;cursor:pointer;outline:0}.alpha-pointer-box:focus .alpha-pointer-handler{border:2px solid hsla(0,0%,88%,1)}";
  var Q = class extends HTMLElement {
    constructor() {
      super();
      h2(this, "cid");
      h2(this, "$alpha");
      h2(this, "$color");
      h2(this, "$pointer");
      h2(this, "alpha", 1);
      h2(this, "hue", 0);
      h2(this, "saturation", 0);
      h2(this, "value", 0);
      this.attachShadow({
        mode: "open"
      }), this.onMouseDown = this.onMouseDown.bind(this), this.onMouseUp = this.onMouseUp.bind(this), this.onChange = this.onChange.bind(this), this.onKeyDown = this.onKeyDown.bind(this), this.hsvChanged = this.hsvChanged.bind(this), this.hueChanged = this.hueChanged.bind(this), this.alphaChanged = this.alphaChanged.bind(this);
    }
    static get observedAttributes() {
      return ["color"];
    }
    render(t = true) {
      if (this.$pointer && (this.$pointer.style.left = `${this.alpha * 100}%`), this.$color) {
        let i = new l2({
          h: this.hue,
          s: this.saturation,
          v: this.value,
          a: this.alpha
        });
        this.$color.style.background = z(i);
      }
      t && M(this.cid, this.alpha);
    }
    onChange(t) {
      if (!this.$alpha)
        return;
      t.preventDefault && t.preventDefault();
      let {
        width: i,
        left: r
      } = this.$alpha.getBoundingClientRect();
      if (i === 0)
        return;
      let n = typeof t.clientX == "number" ? t.clientX : t.touches[0].clientX, s2 = Math.min(Math.max(0, n - r), i), a = Math.min(Math.max(0, s2 * 100 / i), 100);
      this.alpha = a / 100, this.render();
    }
    onKeyDown(t) {
      var i;
      switch ((i = this.$pointer) == null || i.focus(), t.key) {
        case "ArrowLeft": {
          let r = this.alpha * 100;
          r = Math.max(0, r - 1), this.alpha = r / 100, this.render();
          break;
        }
        case "ArrowRight": {
          let r = this.alpha * 100;
          r = Math.min(100, r + 1), this.alpha = r / 100, this.render();
          break;
        }
      }
    }
    hsvChanged(t) {
      !t || !t.detail || !t.detail.cid || t.detail.cid === this.cid && (this.saturation = t.detail.h, this.hue = t.detail.s, this.value = t.detail.v, this.render(false));
    }
    hueChanged(t) {
      !t || !t.detail || !t.detail.cid || t.detail.cid === this.cid && (this.hue = t.detail.h, this.render(false));
    }
    alphaChanged(t) {
      !t || !t.detail || !t.detail.cid || t.detail.cid === this.cid && this.alpha !== t.detail.a && (this.alpha = t.detail.a, this.render());
    }
    onMouseDown(t) {
      t.preventDefault && t.preventDefault(), this.onChange(t), window.addEventListener("mousemove", this.onChange), window.addEventListener("mouseup", this.onMouseUp), window.setTimeout(() => {
        var i;
        (i = this.$pointer) == null || i.focus();
      }, 0);
    }
    onMouseUp() {
      window.removeEventListener("mousemove", this.onChange), window.removeEventListener("mouseup", this.onChange);
    }
    connectedCallback() {
      var r, n, s2, a, d;
      if (!this.shadowRoot)
        return;
      this.cid = this.getAttribute("cid") || "";
      let t = c(this.getAttribute("color")), i = t.toHsv();
      this.alpha = i.a, this.hue = i.h, this.saturation = i.s, this.value = i.v, this.shadowRoot.innerHTML = `
           <style>${wt}</style>`, this.$alpha = this.shadowRoot.querySelector(".alpha"), this.$color = this.shadowRoot.querySelector(".color-bg"), this.$pointer = this.shadowRoot.querySelector(".pointer-box"), (r = this.$alpha) == null || r.addEventListener("mousedown", this.onMouseDown), (n = this.$alpha) == null || n.addEventListener("mouseup", this.onMouseUp), (s2 = this.$alpha) == null || s2.addEventListener("touchmove", this.onChange), (a = this.$alpha) == null || a.addEventListener("touchstart", this.onChange), (d = this.$pointer) == null || d.addEventListener("keydown", this.onKeyDown), document.addEventListener(p, this.hsvChanged), document.addEventListener(f, this.hueChanged), document.addEventListener(m, this.alphaChanged);
    }
    disconnectedCallback() {
      var t, i, r, n, s2;
      (t = this.$alpha) == null || t.removeEventListener("mousedown", this.onMouseDown), (i = this.$alpha) == null || i.removeEventListener("mouseup", this.onMouseUp), (r = this.$alpha) == null || r.removeEventListener("touchmove", this.onChange), (n = this.$alpha) == null || n.removeEventListener("touchstart", this.onChange), (s2 = this.$pointer) == null || s2.removeEventListener("keydown", this.onKeyDown), document.removeEventListener(p, this.hsvChanged), document.removeEventListener(f, this.hueChanged), document.removeEventListener(m, this.alphaChanged);
    }
    attributeChangedCallback(t, i, r) {
      let s2 = c(r).toHsv();
      this.alpha = s2.a, this.hue = s2.h, this.saturation = s2.s, this.value = s2.v, this.render();
    }
  }, xt = Q;
  var Et = ":root{--tool-cool-color-picker-field-border-color:#cecece;--tool-cool-color-picker-field-label-color:#000}.fields{font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica Neue,Noto Sans,Liberation Sans,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-size:11px;grid-template-columns:60px 35px 35px 35px 34px;text-align:center;display:grid;gap:.25rem;margin-top:.25rem;color:var(--tool-cool-color-picker-field-label-color,#000)}.fields input{background:#fff;border-width:1px;border-style:solid;border-color:var(--tool-cool-color-picker-field-border-color,#cecece);padding:1px 3px;border-radius:2px;color:#000;font-family:inherit;font-size:100%;line-height:inherit;margin:0;box-sizing:border-box}";
  var J = class extends HTMLElement {
    constructor() {
      super();
      h2(this, "cid");
      h2(this, "color", new l2("#000"));
      h2(this, "$hex");
      h2(this, "$r");
      h2(this, "$g");
      h2(this, "$b");
      h2(this, "$a");
      h2(this, "hex", "");
      h2(this, "r", 0);
      h2(this, "g", 0);
      h2(this, "b", 0);
      h2(this, "a", 1);
      this.attachShadow({
        mode: "open"
      }), this.hsvChanged = this.hsvChanged.bind(this), this.hueChanged = this.hueChanged.bind(this), this.alphaChanged = this.alphaChanged.bind(this), this.onHexChange = this.onHexChange.bind(this), this.render = this.render.bind(this), this.onRedChange = this.onRedChange.bind(this), this.onGreenChange = this.onGreenChange.bind(this), this.onBlueChange = this.onBlueChange.bind(this), this.onAlphaChange = this.onAlphaChange.bind(this), this.onRedKeyDown = this.onRedKeyDown.bind(this), this.onBlueKeyDown = this.onBlueKeyDown.bind(this), this.onGreenKeyDown = this.onGreenKeyDown.bind(this), this.onAlphaKeyDown = this.onAlphaKeyDown.bind(this);
    }
    static get observedAttributes() {
      return ["color"];
    }
    hueChanged(t) {
      if (!t || !t.detail || !t.detail.cid || t.detail.cid !== this.cid)
        return;
      let i = this.color.toHsv();
      this.color = new l2({
        h: Number(t.detail.h),
        s: i.s,
        v: i.v,
        a: i.a
      }), this.render();
    }
    alphaChanged(t) {
      if (!t || !t.detail || !t.detail.cid || t.detail.cid !== this.cid)
        return;
      let i = this.color.toRgb();
      i.a = t.detail.a, this.color = new l2(i), this.render();
    }
    hsvChanged(t) {
      !t || !t.detail || !t.detail.cid || t.detail.cid === this.cid && (this.color = new l2({
        h: t.detail.h,
        s: t.detail.s,
        v: t.detail.v,
        a: this.color.toHsv().a
      }), this.render());
    }
    render() {
      var i, r, n, s2, a;
      let t = this.color.toRgb();
      this.r = t.r, this.g = t.g, this.b = t.b, this.a = t.a, this.hex = this.color.toHex(), this.$hex && ((i = this.shadowRoot) == null ? void 0 : i.activeElement) !== this.$hex && (this.$hex.value = this.hex.toUpperCase()), this.$r && ((r = this.shadowRoot) == null ? void 0 : r.activeElement) !== this.$r && (this.$r.value = this.r.toString()), this.$g && ((n = this.shadowRoot) == null ? void 0 : n.activeElement) !== this.$g && (this.$g.value = this.g.toString()), this.$b && ((s2 = this.shadowRoot) == null ? void 0 : s2.activeElement) !== this.$b && (this.$b.value = this.b.toString()), this.$a && ((a = this.shadowRoot) == null ? void 0 : a.activeElement) !== this.$a && (this.$a.value = Math.round(this.a * 100).toString());
    }
    onFieldKeyDown(t, i) {
      var n, s2;
      let r = this.color.toRgb();
      switch (t.key) {
        case "ArrowUp": {
          if (i === "r") {
            this.r = Math.min(255, r.r + 1), r.r = this.r;
            let a = new l2(r).toHsv();
            b(this.cid, a.h, a.s, a.v), this.$r.value = this.r.toString(), this.render();
          }
          if (i === "g") {
            this.g = Math.min(255, r.g + 1), r.g = this.g;
            let a = new l2(r).toHsv();
            b(this.cid, a.h, a.s, a.v), this.$g.value = this.g.toString(), this.render();
          }
          if (i === "b") {
            this.b = Math.min(255, r.b + 1), r.b = this.b;
            let a = new l2(r).toHsv();
            b(this.cid, a.h, a.s, a.v), this.$b.value = this.b.toString(), this.render();
          }
          if (i === "a") {
            this.a = Math.max(0, Math.min(this.a + 0.01, 1)), this.$a.value = Math.round(this.a * 100).toString();
            let a = this.color.toRgb();
            a.a = this.a, this.color = new l2(a), this.render(), M(this.cid, this.a);
          }
          break;
        }
        case "ArrowDown": {
          if (i === "r") {
            this.r = Math.max(0, r.r - 1), r.r = this.r;
            let a = new l2(r).toHsv();
            b(this.cid, a.h, a.s, a.v), this.$r.value = this.r.toString(), this.render();
          }
          if (i === "g") {
            this.g = Math.max(0, r.g - 1), r.g = this.g;
            let a = new l2(r).toHsv();
            b(this.cid, a.h, a.s, a.v), this.$g.value = this.g.toString(), this.render();
          }
          if (i === "b") {
            this.b = Math.max(0, r.b - 1), r.b = this.b;
            let a = new l2(r).toHsv();
            b(this.cid, a.h, a.s, a.v), this.$b.value = this.b.toString(), this.render();
          }
          if (i === "a") {
            this.a = Math.max(0, this.a - 0.01), this.$a.value = Math.round(this.a * 100).toString();
            let a = this.color.toRgb();
            a.a = this.a, this.color = new l2(a), this.render(), M(this.cid, this.a);
          }
          break;
        }
        case "Escape": {
          (n = this.shadowRoot) != null && n.activeElement && this.shadowRoot.activeElement.blur(), this.render();
          break;
        }
        case "Enter": {
          (s2 = this.shadowRoot) != null && s2.activeElement && this.shadowRoot.activeElement.blur(), this.render();
          break;
        }
      }
    }
    onRedKeyDown(t) {
      this.onFieldKeyDown(t, "r");
    }
    onGreenKeyDown(t) {
      this.onFieldKeyDown(t, "g");
    }
    onBlueKeyDown(t) {
      this.onFieldKeyDown(t, "b");
    }
    onAlphaKeyDown(t) {
      this.onFieldKeyDown(t, "a");
    }
    onHexChange(t) {
      let i = t.target;
      if (i.value.length !== 6)
        return;
      let r = new l2(`#${i.value}`);
      if (r.isValid) {
        this.color = r;
        let n = this.color.toHsv();
        b(this.cid, n.h, n.s, n.v);
      }
    }
    onRedChange(t) {
      let i = t.target, r = I(i.value);
      if (r.toString() === i.value) {
        let n = this.color.toRgb();
        n.r = r;
        let s2 = new l2(n).toHsv();
        b(this.cid, s2.h, s2.s, s2.v);
      }
    }
    onGreenChange(t) {
      let i = t.target, r = I(i.value);
      if (r.toString() === i.value) {
        let n = this.color.toRgb();
        n.g = r;
        let s2 = new l2(n).toHsv();
        b(this.cid, s2.h, s2.s, s2.v);
      }
    }
    onBlueChange(t) {
      let i = t.target, r = I(i.value);
      if (r.toString() === i.value) {
        let n = this.color.toRgb();
        n.b = r;
        let s2 = new l2(n).toHsv();
        b(this.cid, s2.h, s2.s, s2.v);
      }
    }
    onAlphaChange(t) {
      let i = t.target, r = ft(i.value);
      r.toString() === i.value && M(this.cid, r / 100);
    }
    connectedCallback() {
      if (!this.shadowRoot)
        return;
      this.cid = this.getAttribute("cid") || "", this.color = c(this.getAttribute("color"));
      let t = this.color.toRgb();
      this.r = t.r, this.g = t.g, this.b = t.b, this.a = t.a, this.hex = this.color.toHex();
      let i = $(), r = $(), n = $(), s2 = $(), a = $();
      this.shadowRoot.innerHTML = `
           <style>${Et}</style>
           <div class="fields">

           </div>
        `, this.$hex = this.shadowRoot.getElementById(`hex-${i}`), this.$r = this.shadowRoot.getElementById(`r-${r}`), this.$g = this.shadowRoot.getElementById(`g-${n}`), this.$b = this.shadowRoot.getElementById(`b-${s2}`), this.$a = this.shadowRoot.getElementById(`a-${a}`), document.addEventListener(p, this.hsvChanged), document.addEventListener(f, this.hueChanged), document.addEventListener(m, this.alphaChanged);
    }
    disconnectedCallback() {
      document.removeEventListener(p, this.hsvChanged), document.removeEventListener(f, this.hueChanged), document.removeEventListener(m, this.alphaChanged);
    }
    attributeChangedCallback(t, i, r) {
      this.color = c(r), this.render();
    }
  }, Ct = J;
  var Z = class extends HTMLElement {
    constructor() {
      super();
      h2(this, "cid");
      h2(this, "popupPosition", "left");
      h2(this, "$popup");
      h2(this, "color", "#fff");
      h2(this, "myColor", "#eee");
      customElements.get("toolcool-color-picker-saturation") || customElements.define("toolcool-color-picker-saturation", bt), customElements.get("toolcool-color-picker-hue") || customElements.define("toolcool-color-picker-hue", mt), customElements.get("toolcool-color-picker-alpha") || customElements.define("toolcool-color-picker-alpha", xt), customElements.get("toolcool-color-picker-fields") || customElements.define("toolcool-color-picker-fields", Ct), this.cid = this.getAttribute("cid") || "", this.prevent = this.prevent.bind(this), this.attachShadow({
        mode: "open"
      });
    }
    static get observedAttributes() {
      return ["color", "popup-position", "myColor"];
    }
    prevent(t) {
      t.stopPropagation();
    }
    connectedCallback() {
      var t, i;
      !this.shadowRoot || (this.color = this.getAttribute("color") || "#fff", this.popupPosition = this.getAttribute("popup-position") || "left", this.shadowRoot.innerHTML = `
           <style>${it}</style>
           <div class="popup">
                <toolcool-color-picker-saturation color="${this.color}" cid="${this.cid}"></toolcool-color-picker-saturation>
                <toolcool-color-picker-hue color="${this.color}" cid="${this.cid}"></toolcool-color-picker-hue>
                <toolcool-color-picker-alpha color="${this.color}" cid="${this.cid}"></toolcool-color-picker-alpha>
                <toolcool-color-picker-fields color="${this.color}" cid="${this.cid}"></toolcool-color-picker-fields>
           </div>
                `, this.$popup = this.shadowRoot.querySelector(".popup"), (t = this.$popup) == null || t.addEventListener("mousedown", this.prevent), (i = this.$popup) == null || i.classList.toggle("right", this.popupPosition === "right"));
    }
    disconnectedCallback() {
      var t;
      (t = this.$popup) == null || t.removeEventListener("mousedown", this.prevent);
    }
    attributeChangedCallback(t, i, r) {
      var n, s2, a, d;
      if (t === "popup-position" && (this.popupPosition = r, this.$popup && this.$popup.classList.toggle("right", this.popupPosition === "right")), t === "color") {
        this.color = r;
        let w = (n = this.shadowRoot) == null ? void 0 : n.querySelector("toolcool-color-picker-saturation"), x = (s2 = this.shadowRoot) == null ? void 0 : s2.querySelector("toolcool-color-picker-hue"), R = (a = this.shadowRoot) == null ? void 0 : a.querySelector("toolcool-color-picker-alpha"), et = (d = this.shadowRoot) == null ? void 0 : d.querySelector("toolcool-color-picker-fields");
        w && w.setAttribute("color", this.color), x && x.setAttribute("color", this.color), R && R.setAttribute("color", this.color), et && et.setAttribute("color", this.color);
      }
    }
  }, yt = Z;
  var Ut = {
    sm: "0.875rem",
    md: "1.2rem",
    lg: "1.5rem",
    xl: "2.25rem",
    "2xl": "3rem",
    "3xl": "3.75rem",
    "4xl": "4.5rem"
  }, tt = class extends HTMLElement {
    constructor() {
      super();
      h2(this, "cid");
      h2(this, "$button");
      h2(this, "$buttonColor");
      h2(this, "$popupBox");
      h2(this, "stateDefaults", {
        isPopupVisible: false,
        popupPosition: "left",
        initialColor: new l2("#000"),
        color: new l2("#000"),
        buttonWidth: null,
        buttonHeight: null,
        buttonPadding: null
      });
      h2(this, "state");
      this.cid = $(), customElements.get("toolcool-color-picker-popup") || customElements.define("toolcool-color-picker-popup", yt), this.attachShadow({
        mode: "open"
      }), this.toggle = this.toggle.bind(this), this.onKeyDown = this.onKeyDown.bind(this), this.clickedOutside = this.clickedOutside.bind(this), this.stopPropagation = this.stopPropagation.bind(this), this.hsvChanged = this.hsvChanged.bind(this), this.hueChanged = this.hueChanged.bind(this), this.alphaChanged = this.alphaChanged.bind(this), this.buttonClicked = this.buttonClicked.bind(this), this.formatButtonSize = this.formatButtonSize.bind(this), this.initState();
    }
    static get observedAttributes() {
      return ["color", "popup-position", "button-width", "button-height", "button-padding"];
    }
    set color(t) {
      this.state.color = new l2(t);
    }
    get color() {
      return this.state.color;
    }
    get hex() {
      return this.state.color.toHexString().toUpperCase();
    }
    get hex8() {
      return this.state.color.toHex8String().toUpperCase();
    }
    get rgb() {
      return this.state.color.toRgbString();
    }
    get rgba() {
      return S(this.state.color);
    }
    get hsl() {
      return this.state.color.toHslString();
    }
    get hsla() {
      return pt(this.state.color);
    }
    get hsv() {
      return this.state.color.toHsvString();
    }
    get hsva() {
      return gt(this.state.color);
    }
    get opened() {
      return this.state.isPopupVisible;
    }
    set opened(t) {
      this.state.isPopupVisible = t;
    }
    initState() {
      let t = this;
      this.state = new Proxy(t.stateDefaults, {
        set(i, r, n, s2) {
          return i[r] = n, r === "isPopupVisible" && t.onPopupVisibilityChange(), r === "popupPosition" && t.onPopupPosChange(), r === "initialColor" && t.onInitialColorChange(), r === "color" && t.onColorChange(), (r === "buttonWidth" || r === "buttonHeight" || r === "buttonPadding") && t.setButtonSize(), true;
        }
      });
    }
    onPopupVisibilityChange() {
      !this.$popupBox || (this.$popupBox.innerHTML = this.state.isPopupVisible ? `<toolcool-color-picker-popup color="${this.state.color.toRgbString()}" cid="${this.cid}" popup-position="${this.state.popupPosition}" />` : "");
    }
    onPopupPosChange() {
      if (!this.$popupBox)
        return;
      let t = this.$popupBox.querySelector("toolcool-color-picker-popup");
      !t || t.setAttribute("popup-position", this.state.popupPosition);
    }
    onInitialColorChange() {
      var r;
      let t = S(this.state.color);
      this.$buttonColor && (this.$buttonColor.style.backgroundColor = t);
      let i = (r = this.shadowRoot) == null ? void 0 : r.querySelector("toolcool-color-picker-popup");
      i && i.setAttribute("color", t);
    }
    setButtonSize() {
      !this.$button || (this.state.buttonWidth && (this.$button.style.width = this.formatButtonSize(this.state.buttonWidth)), this.state.buttonHeight && (this.$button.style.height = this.formatButtonSize(this.state.buttonHeight)), this.state.buttonPadding && (this.$button.style.padding = this.state.buttonPadding));
    }
    onColorChange() {
      this.$buttonColor && (this.$buttonColor.style.backgroundColor = S(this.state.color)), this.dispatchEvent(new CustomEvent("change", {
        detail: {
          hex: this.hex,
          hex8: this.hex8,
          rgb: this.rgb,
          rgba: this.rgba,
          hsl: this.hsl,
          hsla: this.hsla,
          hsv: this.hsv,
          hsva: this.hsva,
          color: this.color
        }
      }));
    }
    hsvChanged(t) {
      !t || !t.detail || !t.detail.cid || t.detail.cid === this.cid && (this.state.color = new l2({
        h: t.detail.h,
        s: t.detail.s,
        v: t.detail.v,
        a: this.state.color.toHsv().a
      }));
    }
    hueChanged(t) {
      if (!t || !t.detail || !t.detail.cid || t.detail.cid !== this.cid)
        return;
      let i = this.state.color.toHsv();
      this.state.color = new l2({
        h: t.detail.h,
        s: i.s,
        v: i.v,
        a: i.a
      });
    }
    alphaChanged(t) {
      if (!t || !t.detail || !t.detail.cid || t.detail.cid !== this.cid)
        return;
      let i = this.state.color.toRgb();
      i.a = t.detail.a, this.state.color = new l2(i);
    }
    buttonClicked(t) {
      return;
    }
    clickedOutside() {
      return;
    }
    toggle() {
      this.state.isPopupVisible;
      return;
    }
    onKeyDown(t) {
      return;
    }
    stopPropagation(t) {
      t.stopPropagation();
    }
    formatButtonSize(t) {
      var i;
      return (i = Ut[t]) != null ? i : t;
    }
    connectedCallback() {
      var t, i, r;
      !this.shadowRoot || (this.state.initialColor = c(this.getAttribute("color")), this.state.color = c(this.getAttribute("color")), this.state.popupPosition = this.getAttribute("popup-position") || "left", this.state.buttonWidth = this.getAttribute("button-width"), this.state.buttonHeight = this.getAttribute("button-height"), this.state.buttonPadding = this.getAttribute("button-padding"), this.shadowRoot.innerHTML = `
            <style>
                ${ot}
            </style>
            <div class="color-picker" >
                <div data-popup-box></div>
            </div>
        `, this.$button = this.shadowRoot.querySelector(".button"), this.$buttonColor = this.shadowRoot.querySelector(".button-color"), (t = this.$button) == null || t.addEventListener("click", this.toggle), (i = this.$button) == null || i.addEventListener("keydown", this.onKeyDown), (r = this.$button) == null || r.addEventListener("mousedown", this.stopPropagation), this.$popupBox = this.shadowRoot.querySelector("[data-popup-box]"), this.setButtonSize(), document.addEventListener("mousedown", this.clickedOutside), document.addEventListener(p, this.hsvChanged), document.addEventListener(f, this.hueChanged), document.addEventListener(m, this.alphaChanged), document.addEventListener(D, this.buttonClicked));
    }
    disconnectedCallback() {
      var t, i, r;
      (t = this.$button) == null || t.removeEventListener("click", this.toggle), (i = this.$button) == null || i.removeEventListener("keydown", this.onKeyDown), (r = this.$button) == null || r.removeEventListener("mousedown", this.stopPropagation), document.removeEventListener("mousedown", this.clickedOutside), document.removeEventListener(p, this.hsvChanged), document.removeEventListener(f, this.hueChanged), document.removeEventListener(m, this.alphaChanged), document.removeEventListener(D, this.buttonClicked);
    }
    attributeChangedCallback(t) {
      switch (t) {
        case "color": {
          this.state.initialColor = c(this.getAttribute("color")), this.state.color = c(this.getAttribute("color")), this.onInitialColorChange();
          break;
        }
        case "popup-position": {
          this.state.popupPosition = this.getAttribute("popup-position") || "left", this.onPopupPosChange();
          break;
        }
        case "button-width": {
          this.state.buttonWidth = this.getAttribute("button-width"), this.setButtonSize();
          break;
        }
        case "button-height": {
          this.state.buttonHeight = this.getAttribute("button-height"), this.setButtonSize();
          break;
        }
        case "button-padding": {
          this.state.buttonPadding = this.getAttribute("button-padding"), this.setButtonSize();
          break;
        }
      }
    }
  }, $t = tt;
  customElements.get("toolcool-color-picker") || customElements.define("toolcool-color-picker", $t);
})();
const colorPicker_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "#color-picker-1.svelte-1ujgsfs{--tool-cool-color-picker-popup-width:14rem}@media(max-width: 779px){#color-picker-1.svelte-1ujgsfs{--tool-cool-color-picker-popup-width:20.3rem}}",
  map: null
};
const Color_picker = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_l;
  let $$unsubscribe_s;
  let $$unsubscribe_h;
  let $$unsubscribe_firstVisit;
  let $$unsubscribe_distance;
  let $$unsubscribe_harmony;
  $$unsubscribe_l = subscribe(l, (value) => value);
  $$unsubscribe_s = subscribe(s, (value) => value);
  $$unsubscribe_h = subscribe(h, (value) => value);
  $$unsubscribe_firstVisit = subscribe(firstVisit, (value) => value);
  $$unsubscribe_distance = subscribe(distance, (value) => value);
  $$unsubscribe_harmony = subscribe(harmony, (value) => value);
  $$result.css.add(css$2);
  $$unsubscribe_l();
  $$unsubscribe_s();
  $$unsubscribe_h();
  $$unsubscribe_firstVisit();
  $$unsubscribe_distance();
  $$unsubscribe_harmony();
  return `  <toolcool-color-picker id="color-picker-1" button-width="0rem" button-height="0rem" class="z-1 svelte-1ujgsfs"></toolcool-color-picker> ${validate_component(Color_space, "ColorSpace").$$render($$result, {}, {}, {})}`;
});
const Color_harmony = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $harmony, $$unsubscribe_harmony;
  let $$unsubscribe_h;
  let $distance, $$unsubscribe_distance;
  let $complement, $$unsubscribe_complement;
  $$unsubscribe_harmony = subscribe(harmony, (value) => $harmony = value);
  $$unsubscribe_h = subscribe(h, (value) => value);
  $$unsubscribe_distance = subscribe(distance, (value) => $distance = value);
  $$unsubscribe_complement = subscribe(complement, (value) => $complement = value);
  let opened = false;
  let colorTypes = [
    { value: "mono", name: "Monochromatic" },
    { value: "cont", name: "Contrast" },
    { value: "soft", name: "Soft Contrast" },
    { value: "dbct", name: "Double Contrast" },
    { value: "anlg", name: "Analogous" }
  ];
  const updateColorHarmony = () => {
    if ($harmony == "soft" || $harmony == "dbct" || $harmony == "anlg")
      opened = true;
    else
      opened = false;
  };
  distance.subscribe(() => updateColorHarmony());
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `  <div class="flex felx-row float-left ml-3"><div class="mr-0">${validate_component(Label, "Label").$$render(
      $$result,
      {
        for: "countries",
        class: "w-[12rem] lg:w-[11.75rem]"
      },
      {},
      {
        default: () => {
          return `Select color harmony`;
        }
      }
    )} ${validate_component(Select, "Select").$$render(
      $$result,
      {
        class: "w-[12rem] lg:w-[11rem] glass",
        placeholder: "",
        value: $harmony
      },
      {
        value: ($$value) => {
          $harmony = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${each(colorTypes, ({ value, name }) => {
            return `<option${add_attribute("value", value, 0)} class="h-8 bg-light hover:bg-main dark:bg-dark">${escape(name)} </option>`;
          })}`;
        }
      }
    )}</div> ${opened ? `<div class="ml-0">${validate_component(Label, "Label").$$render($$result, { class: "space-y-2 w-24" }, {}, {
      default: () => {
        return `<span data-svelte-h="svelte-1tom45">Distance</span>`;
      }
    })} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        type: "number",
        placeholder: "Distance",
        size: "md",
        class: "w-24 glass",
        max: "360",
        value: $distance
      },
      {
        value: ($$value) => {
          $distance = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>` : `<div class="ml-0">${validate_component(Label, "Label").$$render($$result, { class: "space-y-2 w-24 text-slate-500" }, {}, {
      default: () => {
        return `<span data-svelte-h="svelte-1tom45">Distance</span>`;
      }
    })} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        disabled: true,
        type: "number",
        placeholder: "Distance",
        size: "md",
        class: "w-24"
      },
      {},
      {}
    )}</div>`} ${$harmony == "anlg" ? `${validate_component(Checkbox, "Checkbox").$$render(
      $$result,
      {
        class: "h-9 w-9 mt-[0.9rem] ml-1 mr-1",
        checked: $complement
      },
      {
        checked: ($$value) => {
          $complement = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}</div>`;
  } while (!$$settled);
  $$unsubscribe_harmony();
  $$unsubscribe_h();
  $$unsubscribe_distance();
  $$unsubscribe_complement();
  return $$rendered;
});
const File_export = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_callUpdatePosition;
  let $$unsubscribe_colors;
  $$unsubscribe_callUpdatePosition = subscribe(callUpdatePosition, (value) => value);
  $$unsubscribe_colors = subscribe(colors, (value) => value);
  const assignValues = (H, S, L) => {
    h.set(H);
    s.set(S);
    l.set(L);
  };
  if ($$props.assignValues === void 0 && $$bindings.assignValues && assignValues !== void 0)
    $$bindings.assignValues(assignValues);
  $$unsubscribe_callUpdatePosition();
  $$unsubscribe_colors();
  return `  ${validate_component(Button, "Button").$$render(
    $$result,
    {
      class: "clear-left mt-[1.25rem] ml-2 mr-0"
    },
    {},
    {
      default: () => {
        return `${validate_component(ArrowDownToBraketSolid, "ArrowDownToBraketSolid").$$render($$result, {}, {}, {})}`;
      }
    }
  )} ${validate_component(Button, "Button").$$render(
    $$result,
    {
      class: "clear-left mt-[1.25rem] ml-1 w-[4rem] h-[2.5rem] p-0"
    },
    {},
    {
      default: () => {
        return `${validate_component(ArrowUpFromBracketSolid, "ArrowUpFromBracketSolid").$$render($$result, {}, {}, {})}`;
      }
    }
  )} <input type="file" style="display: none;" id="file-picker">`;
});
const Color_field = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $l, $$unsubscribe_l;
  $$unsubscribe_l = subscribe(l, (value) => $l = value);
  let { hex = "#000000" } = $$props;
  let textColor = "#efefef";
  l.subscribe(() => {
    textColor = $l >= 50 ? "#0e0e0f" : "#efefef";
  });
  if ($$props.hex === void 0 && $$bindings.hex && hex !== void 0)
    $$bindings.hex(hex);
  $$unsubscribe_l();
  return `  <div class="border-2 border-gray-200 dark:border-gray-600 text-center text-xs h-[4.8rem] w-[4.8rem] lg:text-base lg:h-[7.1rem] lg:w-[7.1rem] rounded-md flex align-middle items-center justify-center clear-left mt-1" style="${"background-color: " + escape(hex, true) + ";"}"><button class="p-0" style="${"color: " + escape(textColor, true)}">${escape(hex)}</button></div>`;
});
const HslContrast = (h2, s2, l2) => {
  let hue = (h2 + 180) % 360;
  return { "H": hue, "S": s2, "L": l2 };
};
const HslSoftContrast = (h2, s2, l2, distance2) => {
  let contrast = HslContrast(h2, s2, l2);
  let hue1 = (contrast["H"] + distance2 / 2) % 360;
  let hue2 = (contrast["H"] - distance2 / 2) % 360;
  return [{ "H": Math.round(hue1), "S": Math.round(s2), "L": Math.round(l2) }, { "H": Math.round(hue2), "S": Math.round(s2), "L": Math.round(l2) }];
};
const HslDoubleContrast = (h2, s2, l2, distance2) => {
  let hue1 = (h2 + distance2) % 360;
  let secondColor = { "H": hue1, "S": s2, "L": l2 };
  let mainContrast = HslContrast(h2, s2, l2);
  let secondContrast = HslContrast(secondColor["H"], s2, l2);
  return [mainContrast, secondColor, secondContrast];
};
const HslAnalogous = (h2, s2, l2, distance2, contrast) => {
  let hue1 = (h2 + distance2) % 360;
  let hue2 = (h2 - distance2) % 360;
  let secondColor = { "H": hue1, "S": s2, "L": l2 };
  let thirdColor = { "H": hue2, "S": s2, "L": l2 };
  if (contrast) {
    let mainContrast = HslContrast(h2, s2, l2);
    return [secondColor, thirdColor, mainContrast];
  }
  return [secondColor, thirdColor];
};
const Color_preview = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $hex4, $$unsubscribe_hex4;
  let $hex3, $$unsubscribe_hex3;
  let $hex2, $$unsubscribe_hex2;
  let $hex1, $$unsubscribe_hex1;
  let $colors, $$unsubscribe_colors;
  let $complement, $$unsubscribe_complement;
  let $l, $$unsubscribe_l;
  let $s, $$unsubscribe_s;
  let $h, $$unsubscribe_h;
  let $distance, $$unsubscribe_distance;
  let $harmony, $$unsubscribe_harmony;
  $$unsubscribe_colors = subscribe(colors, (value) => $colors = value);
  $$unsubscribe_complement = subscribe(complement, (value) => $complement = value);
  $$unsubscribe_l = subscribe(l, (value) => $l = value);
  $$unsubscribe_s = subscribe(s, (value) => $s = value);
  $$unsubscribe_h = subscribe(h, (value) => $h = value);
  $$unsubscribe_distance = subscribe(distance, (value) => $distance = value);
  $$unsubscribe_harmony = subscribe(harmony, (value) => $harmony = value);
  let hsl;
  let hex1 = writable("#000000");
  $$unsubscribe_hex1 = subscribe(hex1, (value) => $hex1 = value);
  let hex2 = writable("#000000");
  $$unsubscribe_hex2 = subscribe(hex2, (value) => $hex2 = value);
  let hex3 = writable("#000000");
  $$unsubscribe_hex3 = subscribe(hex3, (value) => $hex3 = value);
  let hex4 = writable("#000000");
  $$unsubscribe_hex4 = subscribe(hex4, (value) => $hex4 = value);
  const generateColors = () => {
    switch ($harmony) {
      case "mono":
        set_store_value(hex1, $hex1 = HslToHex($h, $s, $l), $hex1);
        set_store_value(colors, $colors = [$hex1], $colors);
        break;
      case "cont":
        hsl = HslContrast($h, $s, $l);
        set_store_value(hex1, $hex1 = HslToHex($h, $s, $l), $hex1);
        set_store_value(hex2, $hex2 = HslToHex(hsl["H"], hsl["S"], hsl["L"]), $hex2);
        set_store_value(colors, $colors = [$hex1, $hex2], $colors);
        break;
      case "soft":
        hsl = HslSoftContrast($h, $s, $l, $distance);
        set_store_value(hex1, $hex1 = HslToHex($h, $s, $l), $hex1);
        set_store_value(hex2, $hex2 = HslToHex(hsl[0]["H"], hsl[0]["S"], hsl[0]["L"]), $hex2);
        set_store_value(hex3, $hex3 = HslToHex(hsl[1]["H"], hsl[1]["S"], hsl[1]["L"]), $hex3);
        set_store_value(colors, $colors = [$hex1, $hex2, $hex3], $colors);
        break;
      case "dbct":
        hsl = HslDoubleContrast($h, $s, $l, $distance);
        set_store_value(hex1, $hex1 = HslToHex($h, $s, $l), $hex1);
        set_store_value(hex2, $hex2 = HslToHex(hsl[0]["H"], hsl[0]["S"], hsl[0]["L"]), $hex2);
        set_store_value(hex3, $hex3 = HslToHex(hsl[1]["H"], hsl[1]["S"], hsl[1]["L"]), $hex3);
        set_store_value(hex4, $hex4 = HslToHex(hsl[2]["H"], hsl[2]["S"], hsl[2]["L"]), $hex4);
        set_store_value(colors, $colors = [$hex1, $hex2, $hex3, $hex4], $colors);
        break;
      case "anlg":
        hsl = HslAnalogous($h, $s, $l, $distance, $complement);
        set_store_value(hex1, $hex1 = HslToHex($h, $s, $l), $hex1);
        set_store_value(hex2, $hex2 = HslToHex(hsl[0]["H"], hsl[0]["S"], hsl[0]["L"]), $hex2);
        set_store_value(hex3, $hex3 = HslToHex(hsl[1]["H"], hsl[1]["S"], hsl[1]["L"]), $hex3);
        set_store_value(colors, $colors = [$hex1, $hex2, $hex3], $colors);
        if ($complement) {
          set_store_value(hex4, $hex4 = HslToHex(hsl[2]["H"], hsl[2]["S"], hsl[2]["L"]), $hex4);
          set_store_value(colors, $colors = [$hex1, $hex2, $hex3, $hex4], $colors);
        }
        break;
    }
  };
  h.subscribe(() => {
    generateColors();
  });
  s.subscribe(() => {
    generateColors();
  });
  l.subscribe(() => {
    generateColors();
  });
  harmony.subscribe(() => {
    generateColors();
  });
  distance.subscribe(() => {
    generateColors();
  });
  $$unsubscribe_hex4();
  $$unsubscribe_hex3();
  $$unsubscribe_hex2();
  $$unsubscribe_hex1();
  $$unsubscribe_colors();
  $$unsubscribe_complement();
  $$unsubscribe_l();
  $$unsubscribe_s();
  $$unsubscribe_h();
  $$unsubscribe_distance();
  $$unsubscribe_harmony();
  return `  <div class="flex flex-row mt-2 ml-3"><div class="mr-[0.5rem]">${validate_component(Color_field, "ColorField").$$render($$result, { hex: $hex1 }, {}, {})}</div> ${$harmony == "cont" ? `${validate_component(Color_field, "ColorField").$$render($$result, { hex: $hex2 }, {}, {})}` : `${$harmony == "soft" ? `<div class="mr-[0.5rem]">${validate_component(Color_field, "ColorField").$$render($$result, { hex: $hex2 }, {}, {})}</div> ${validate_component(Color_field, "ColorField").$$render($$result, { hex: $hex3 }, {}, {})}` : `${$harmony == "dbct" ? `<div class="mr-[0.5rem]">${validate_component(Color_field, "ColorField").$$render($$result, { hex: $hex2 }, {}, {})}</div> <div class="mr-[0.5rem]">${validate_component(Color_field, "ColorField").$$render($$result, { hex: $hex3 }, {}, {})}</div> ${validate_component(Color_field, "ColorField").$$render($$result, { hex: $hex4 }, {}, {})}` : `${$harmony == "anlg" ? `<div class="mr-[0.5rem]">${validate_component(Color_field, "ColorField").$$render($$result, { hex: $hex2 }, {}, {})}</div> <div class="mr-[0.5rem]">${validate_component(Color_field, "ColorField").$$render($$result, { hex: $hex3 }, {}, {})}</div> ${$complement ? `${validate_component(Color_field, "ColorField").$$render($$result, { hex: $hex4 }, {}, {})}` : ``}` : ``}`}`}`}</div>`;
});
const Images_preview = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  return `  <div class="grid grid-rows-2 grid-cols-2 w-[30rem] h-[25rem] items-center justify-items-center justify-end ml-3 mt-[0.6rem]"><div class="w-[12rem] h-[12rem] border-2 rounded-md border-gray-300 dark:border-gray-600 glass justify-self-start">${validate_component(Abstract, "Abstract").$$render(
    $$result,
    {
      mainColor,
      accentColor,
      accent2Color,
      accent3Color
    },
    {},
    {}
  )}</div> <div class="w-[12rem] flex justify-center h-[12rem] border-2 rounded-md border-gray-300 dark:border-gray-600 glass justify-self-end">${validate_component(Smile1, "MilkSmile").$$render(
    $$result,
    {
      mainColor,
      accentColor,
      accent2Color,
      accent3Color
    },
    {},
    {}
  )}</div> <div class="w-[12rem] flex justify-center h-[12rem] border-2 rounded-md border-gray-300 dark:border-gray-600 glass justify-self-start">${validate_component(Smile2, "Smile").$$render($$result, { mainColor, accentColor, class: "w-20" }, {}, {})}</div> <div class="w-[12rem] flex justify-center h-[12rem] border-2 rounded-md border-gray-300 dark:border-gray-600 glass justify-self-end">${validate_component(Food, "Food").$$render($$result, { mainColor }, {}, {})}</div></div>`;
});
const quickPreview_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".carousel.svelte-kx7ns8{position:relative;width:100%}",
  map: null
};
const Quick_preview = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $colors, $$unsubscribe_colors;
  $$unsubscribe_colors = subscribe(colors, (value) => $colors = value);
  let mainColor = "#000000";
  let accentColor = "#000000";
  let accent2Color = "#000000";
  let accent3Color = "#000000";
  let currentIndex3 = 0;
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
  const slides3 = [Version3_title, Version3_images, Version3_table, Version3_chart];
  $$result.css.add(css$1);
  $$unsubscribe_colors();
  return `  ${validate_component(Label, "Label").$$render($$result, { for: "countries", class: "w-96" }, {}, {
    default: () => {
      return `Examples`;
    }
  })} <div class="mt-0 w-[29rem]"><div class="flex flex-row mb-3">${validate_component(Button, "Button").$$render(
    $$result,
    {
      id: "hover",
      class: "mr-2 h-[4.75rem] text-lg flex-1 p-4",
      style: `background-color: ${accent3Color};`
    },
    {},
    {
      default: () => {
        return `Hover popover`;
      }
    }
  )} ${validate_component(Popover, "Popover").$$render(
    $$result,
    {
      class: "w-64 text-sm font-light",
      title: "Popover title",
      triggeredBy: "#hover",
      trigger: "hover"
    },
    {},
    {
      default: () => {
        return `And here&#39;s some amazing content. It&#39;s very engaging. Right?`;
      }
    }
  )} ${validate_component(Button, "Button").$$render(
    $$result,
    {
      class: "w-48 flex-1 text-l",
      style: `background-color: ${accent2Color};`
    },
    {},
    {
      default: () => {
        return `Dropdown checkbox${validate_component(ChevronDownSolid, "ChevronDownSolid").$$render(
          $$result,
          {
            class: "w-3 h-3 ms-2 text-white dark:text-white"
          },
          {},
          {}
        )}`;
      }
    }
  )} ${validate_component(Dropdown, "Dropdown").$$render(
    $$result,
    {
      class: "w-46 p-3 space-y-1 text-sm flex-1"
    },
    {},
    {
      default: () => {
        return `<li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">${validate_component(Checkbox, "Checkbox").$$render($$result, {}, {}, {
          default: () => {
            return `Default checkbox`;
          }
        })}</li> <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">${validate_component(Checkbox, "Checkbox").$$render($$result, { checked: true }, {}, {
          default: () => {
            return `Checked state`;
          }
        })}</li> <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">${validate_component(Checkbox, "Checkbox").$$render($$result, {}, {}, {
          default: () => {
            return `Default checkbox`;
          }
        })}</li>`;
      }
    }
  )}</div> <div class="grid grid-cols-2 mb-3">${validate_component(Button, "Button").$$render(
    $$result,
    {
      style: `background-color: ${mainColor};`,
      class: "flex-1 mr-2 h-[4.75rem] w-46 text-xl"
    },
    {},
    {
      default: () => {
        return `Button`;
      }
    }
  )} ${validate_component(Button, "Button").$$render(
    $$result,
    {
      style: `background-color: ${accentColor};`,
      class: "flex-1 h-[4.75rem] w-46 text-xl"
    },
    {},
    {
      default: () => {
        return `Button`;
      }
    }
  )}</div> <div class="grid grid-cols-2 mb-3">${validate_component(Button, "Button").$$render(
    $$result,
    {
      style: `background: linear-gradient(45deg, ${mainColor}, ${accent3Color});`,
      class: "flex-1 mr-2 w-46 h-[4.75rem] text-xl"
    },
    {},
    {
      default: () => {
        return `Button`;
      }
    }
  )} ${validate_component(Button, "Button").$$render(
    $$result,
    {
      style: `background: linear-gradient(45deg, ${accent2Color}, ${accentColor});`,
      class: "flex-1 w-46 h-[4.75rem] text-xl"
    },
    {},
    {
      default: () => {
        return `Button`;
      }
    }
  )}</div> <div class="flex flex-row mb-[0.6rem] w-[29rem]">${validate_component(Input, "Input").$$render(
    $$result,
    {
      style: `background-color: ${mainColor}; color: ${accentColor};`,
      placeholder: "Default input",
      class: " h-[4.75rem] text-l flex-1 mr-2 p-0"
    },
    {},
    {}
  )} ${validate_component(Button, "Button").$$render(
    $$result,
    {
      class: "flex-1 h-[4.75rem] text-xl p-1",
      style: `background-color: ${accentColor};`
    },
    {},
    {
      default: () => {
        return `${validate_component(Spinner, "Spinner").$$render($$result, { class: "me-3", size: "4", color: "white" }, {}, {})}Loading ...`;
      }
    }
  )}</div></div> <div class="carousel mb-0 svelte-kx7ns8"><div class="z-0 h-56 absolute mb-0"><button id="nextButton" class="bg-gray-200 w-[2rem] h-56 flex ml-[22rem] opacity-0 lg:opacity-5 lg:hover:opacity-30">${validate_component(ArrowKeyRight, "ArrowKeyRight").$$render($$result, { class: "h-0 ml-4 lg:h-24 lg:mt-16" }, {}, {})}</button></div> ${`<div class="z-0 h-56 absolute"><button id="prevButton" class="bg-gray-200 w-8 h-56 flex right-0 opacity-5 hover:opacity-30">${validate_component(ArrowKeyLeft, "ArrowKeyLeft").$$render($$result, { class: "h-24 mt-16" }, {}, {})}</button></div>`} ${each(slides3, (SlideComponent, index3) => {
    return `${currentIndex3 === index3 ? `<div class="slide">${validate_component(SlideComponent, "SlideComponent").$$render($$result, {}, {}, {})} </div>` : ``}`;
  })} </div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".grid-box.svelte-1gb2ouc{display:grid;grid-template-columns:1fr 2fr 2fr;grid-template-rows:1fr;align-self:center}@media(max-width: 779px){.grid-box.svelte-1gb2ouc{grid-template-columns:1fr}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `  ${$$result.head += `<!-- HEAD_svelte-ho5e56_START -->${$$result.title = `<title>Color Blaze</title>`, ""}<meta name="description" content="Color Blaze app."><!-- HEAD_svelte-ho5e56_END -->`, ""}  <div class="grid-box grid grid-cols-1 grid-rows-1 svelte-1gb2ouc"> <div>${validate_component(Color_picker, "ColorPicker").$$render($$result, {}, {}, {})}</div>  <div class="flex flex-col items-center"><div><div class="grid grid-cols-1"><div>${validate_component(Color_harmony, "ColorHarmony").$$render($$result, {}, {}, {})} ${`${validate_component(File_export, "FileExport").$$render($$result, {}, {}, {})}`}</div> ${validate_component(Color_preview, "ColorPreview").$$render($$result, {}, {}, {})}</div> ${`${validate_component(Images_preview, "ImagesPreview").$$render($$result, {}, {}, {})}`}</div></div> ${` <div class="right-0 grid grid-cols-1 ml-5">${validate_component(Quick_preview, "QuickPreview").$$render($$result, {}, {}, {})}</div>`} </div>`;
});
export {
  Page as default
};
