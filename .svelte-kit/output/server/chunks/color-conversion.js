let HslToRgb = (h, s, l) => {
  h /= 360;
  s /= 100;
  l /= 100;
  let r, g, b;
  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = function hue2rgb2(p2, q2, t) {
      if (t < 0)
        t += 1;
      if (t > 1)
        t -= 1;
      if (t < 1 / 6)
        return p2 + (q2 - p2) * 6 * t;
      if (t < 1 / 2)
        return q2;
      if (t < 2 / 3)
        return p2 + (q2 - p2) * (2 / 3 - t) * 6;
      return p2;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  return { "R": Math.round(r * 255), "G": Math.round(g * 255), "B": Math.round(b * 255) };
};
const HslToCmy = (h, s, l) => {
  let rgb = HslToRgb(h, s, l);
  let r = rgb["R"] / 255;
  let g = rgb["G"] / 255;
  let b = rgb["B"] / 255;
  let c = 1 - r;
  let m = 1 - g;
  let y = 1 - b;
  return { "C": Math.round(c * 100), "M": Math.round(m * 100), "Y": Math.round(y * 100) };
};
const HslToCmyk = (h, s, l) => {
  let rgb = HslToRgb(h, s, l);
  let r = rgb["R"] / 255;
  let g = rgb["G"] / 255;
  let b = rgb["B"] / 255;
  let c = 1 - r;
  let m = 1 - g;
  let y = 1 - b;
  let k = Math.min(c, Math.min(m, y));
  c = (c - k) / (1 - k) * 100;
  m = (m - k) / (1 - k) * 100;
  y = (y - k) / (1 - k) * 100;
  k = k * 100;
  return { "C": Math.round(c), "M": Math.round(m), "Y": Math.round(y), "K": Math.round(k) };
};
const HslToYuv = (h, s, l) => {
  const rgb = HslToRgb(h, s, l);
  let r = rgb["R"];
  let g = rgb["G"];
  let b = rgb["B"];
  let y = 0.299 * r + 0.587 * g + 0.114 * b;
  let u = -0.14713 * r + -0.28886 * g + 0.436 * b;
  let v = 0.615 * r + -0.51499 * g + -0.10001 * b;
  return { "Y": Math.round(y), "U": Math.round(u), "V": Math.round(v) };
};
const HslToYiq = (h, s, l) => {
  let rgb = HslToRgb(h, s, l);
  let r = rgb["R"];
  let g = rgb["G"];
  let b = rgb["B"];
  let y = 0.299 * r + 0.587 * g + 0.114 * b;
  let i = 0.596 * r - 0.274 * g - 0.322 * b;
  let q = 0.211 * r - 0.523 * g + 0.312 * b;
  return { "Y": Math.round(y), "I": Math.round(i), "Q": Math.round(q) };
};
const HslToXyz = (h, s, l) => {
  let rgb = HslToRgb(h, s, l);
  let r = rgb["R"] / 255;
  let g = rgb["G"] / 255;
  let b = rgb["B"] / 255;
  if (r > 0.04045) {
    r = Math.pow((r + 0.055) / 1.055, 2.4);
  } else {
    r /= 12.92;
  }
  if (g > 0.04045) {
    g = Math.pow((g + 0.055) / 1.055, 2.4);
  } else {
    g /= 12.92;
  }
  if (b > 0.04045) {
    b = Math.pow((b + 0.055) / 1.055, 2.4);
  } else {
    b /= 12.92;
  }
  r *= 100;
  g *= 100;
  b *= 100;
  return { "X": Math.round(r * 0.4124 + g * 0.3576 + b * 0.1805), "Y": Math.round(r * 0.2126 + g * 0.7152 + b * 0.0722), "Z": Math.round(r * 0.0193 + g * 0.1192 + b * 0.9505) };
};
const HslToLab = (h, s, l) => {
  let xyz = HslToXyz(h, s, l);
  let x = xyz["X"];
  let y = xyz["Y"];
  let z = xyz["Z"];
  const D65 = [95.047, 100, 108.883];
  [x, y, z] = [x, y, z].map((v, i) => v / D65[i]);
  [x, y, z] = [x, y, z].map((v, i) => {
    return v > 8856e-6 ? Math.pow(v, 1 / 3) : v * 7.787 + 16 / 116;
  });
  const L = 116 * y - 16;
  const a = 500 * (x - y);
  const B = 200 * (y - z);
  return { "L": Math.round(L), "A": Math.round(a), "B": Math.round(B) };
};
const HslToLuv = (h, s, l) => {
  let L;
  let xyz = HslToXyz(h, s, l);
  let x = xyz["X"];
  let y = xyz["Y"];
  let z = xyz["Z"];
  let u_prime = 0;
  let v_prime = 0;
  if (x + y + z != 0) {
    u_prime = 4 * x / (x + 15 * y + 3 * z);
    v_prime = 9 * y / (x + 15 * y + 3 * z);
  }
  let Y = y / 100;
  if (Y > 0.0086458791978) {
    L = 116 * Y ** (1 / 3) - 16;
  } else {
    L = 903.2962962963 * Y;
  }
  let U = 13 * L * (u_prime - 0.1978);
  let V = 13 * L * (v_prime - 0.4682);
  return { "L": Math.round(L), "U": Math.round(U), "V": Math.round(V) };
};
const HslToHex = (h, s, l) => {
  let rgb = HslToRgb(h, s, l);
  let r = rgb["R"];
  let g = rgb["G"];
  let b = rgb["B"];
  const toHex = (x) => {
    var hex2 = x.toString(16);
    return hex2.length == 1 ? "0" + hex2 : hex2;
  };
  let hex = "#" + toHex(r) + toHex(g) + toHex(b);
  return hex.toUpperCase();
};
export {
  HslToCmyk as H,
  HslToRgb as a,
  HslToCmy as b,
  HslToYuv as c,
  HslToLuv as d,
  HslToLab as e,
  HslToXyz as f,
  HslToYiq as g,
  HslToHex as h
};
