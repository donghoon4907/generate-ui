/* tip - #포함 여부 상관 없는 경우 /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/ */
export function hexToRgb(hex: string) {
  const result = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      }
    : null;
}

export function rgbToHex(r: number, g: number, b: number) {
  const hex = (1 << 24) | (r << 16) | (g << 8) | b;

  return `#${hex.toString(16).slice(1)}`;
}
