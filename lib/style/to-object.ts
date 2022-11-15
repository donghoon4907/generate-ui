import { rgbToHex } from "../calc/rgb";

export class StyleStringToObject {
  private objStyle: Record<string, string>;

  constructor(strStyle: string) {
    this.objStyle = this.normalize(strStyle);
  }

  get getObject() {
    return this.objStyle;
  }

  normalize(strStyles: string) {
    const result: Record<string, string> = {};

    const splitStrStyles = strStyles.split(";");

    for (let i = 0; i < splitStrStyles.length; i++) {
      if (splitStrStyles[i]) {
        const strStyle = splitStrStyles[i].replace(/\n/g, "").trim();

        const splitStrStyle = strStyle.split(":");
        // kebab-case => camel case
        const styleKey = splitStrStyle[0]
          .trim()
          .replace(/-[a-z]/g, char => char.slice(1).toUpperCase());

        const styleVal = splitStrStyle[1].trim();
        // rgba => hex + alpha
        if (styleVal.includes("rgba")) {
          const openingParenthesisIndex = styleVal.lastIndexOf("(");

          const closingParenthesisIndex = styleVal.lastIndexOf(")");

          const strRgba = styleVal.substring(
            openingParenthesisIndex + 1,
            closingParenthesisIndex
          );

          const splitStrRgba = strRgba.split(",");

          const color = rgbToHex(
            +splitStrRgba[0].trim(),
            +splitStrRgba[1].trim(),
            +splitStrRgba[2].trim()
          );

          const alpha = splitStrRgba[3].trim();

          result[styleKey] = color;

          result[`${styleKey}Alpha`] = alpha;
        } else {
          result[styleKey] = styleVal;
        }
      } else {
        splitStrStyles.splice(i, 1);
      }
    }

    return result;
  }

  isPixel(strStyle: string) {
    let valid = false;

    if (strStyle.lastIndexOf("px") !== -1) {
      valid = true;
    }

    return valid;
  }

  convertPixelToNumber(strStyle: string) {
    return +strStyle.replaceAll("px", "");
  }
}
