import { RgbToHsl, HslToRgb, HslToCmy, HslToCmyk, HslToYuv, HslToYiq, HslToXyz, HslToLab } from '../src/lib/scripts/color-conversion.js';

describe('Color Conversion Functions', () => {
  it('converts RGB to HSL correctly', () => {
    expect(RgbToHsl(255, 255, 255)).toEqual({ H: 0, S: 0, L: 100 });
    expect(RgbToHsl(0, 0, 0)).toEqual({ H: 0, S: 0, L: 0 });
  });

  it('converts HSL to RGB correctly', () => {
    expect(HslToRgb(0, 0, 100)).toEqual({ R: 255, G: 255, B: 255 });
    expect(HslToRgb(0, 0, 0)).toEqual({ R: 0, G: 0, B: 0 });
  });

  it('converts HSL to CMY correctly', () => {
    expect(HslToCmy(0, 0, 100)).toEqual({ C: 0, M: 0, Y: 0 });
    expect(HslToCmy(0, 0, 0)).toEqual({ C: 100, M: 100, Y: 100 });
  });

  it('converts HSL to CMYK correctly', () => {
    expect(HslToCmyk(0, 0, 100)).toEqual({ C: 0, M: 0, Y: 0, K: 0 });
    expect(HslToCmyk(0, 0, 0)).toEqual({ C: 0, M: 0, Y: 0, K: 100 });
  });

  it('converts HSL to YUV correctly', () => {
    expect(HslToYuv(0, 0, 100)).toEqual({ Y: 255, U: 0, V: 0 });
    expect(HslToYuv(0, 0, 0)).toEqual({ Y: 0, U: 0, V: 0 });
  });

  it('converts HSL to YIQ correctly', () => {
    expect(HslToYiq(0, 0, 100)).toEqual({ Y: 255, I: 0, Q: 0 });
    expect(HslToYiq(0, 0, 0)).toEqual({ Y: 0, I: 0, Q: 0 });
  });

  it('converts HSL to XYZ correctly', () => {
    expect(HslToXyz(0, 0, 100)).toEqual({ X: 95, Y: 100, Z: 109 });
    expect(HslToXyz(0, 0, 0)).toEqual({ X: 0, Y: 0, Z: 0 });
  });

  it('converts HSL to Lab correctly', () => {
    expect(HslToLab(0, 0, 100)).toEqual({ L: 100, A: 0, B: 0 });
    expect(HslToLab(0, 0, 0)).toEqual({ L: 0, A: 0, B: 0 });
  });
});