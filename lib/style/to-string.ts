import { CSSProperties } from "react";
import { hexToRgb } from "../calc/rgb";

export interface StyleProperties extends CSSProperties {
  backgroundColorAlpha: number;
}

export class StyleObjectToString {
  private convertedHtml: string;
  private strStyle: string;

  constructor(style: StyleProperties) {
    this.convertedHtml = "";

    this.strStyle = this.normalize(style);
  }

  get getHtml() {
    return this.convertedHtml;
  }

  normalize({
    width,
    height,
    backgroundColor,
    backgroundColorAlpha,
    borderRadius,
    color,
    borderWidth,
    borderStyle,
    borderColor,
    fontSize
  }: StyleProperties) {
    let result = "";

    if (width) {
      result += `width: ${width}px;`;
    }

    if (height) {
      result += `height: ${height}px;`;
    }

    if (backgroundColor) {
      const rgb = hexToRgb(backgroundColor);

      if (rgb) {
        if (backgroundColorAlpha) {
          result += `background-color: rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${backgroundColorAlpha});`;
        } else {
          result += `background-color: rgb(${rgb.r}, ${rgb.g}, ${rgb.b});`;
        }
      }
    }

    if (borderRadius) {
      result += `border-radius: ${borderRadius}px;`;
    }

    if (color) {
      result += `color: ${color};`;
    }

    if (borderWidth) {
      result += `border-width: ${borderWidth}px;`;
    }

    if (borderStyle) {
      result += `border-style: ${borderStyle};`;
    }

    if (borderColor) {
      result += `border-color: ${borderColor};`;
    }

    if (fontSize) {
      result += `font-size: ${fontSize}px;`;
    }

    return result;
  }

  convertInput(type: string) {
    this.convertedHtml = `<input type="${type}" style="${this.strStyle}" />`;

    return this.convertedHtml;
  }

  convertInputWithClass(type: string) {
    this.convertedHtml = `
    <style>
      .generate-input {
        ${this.strStyle}
      }
    </style>
    <input type="${type}" class="generate-input" />
    `;

    return this.convertedHtml;
  }

  convertButton(label: string) {
    this.convertedHtml = `<button type="button" style="${this.strStyle}">${label}</button>`;

    return this.convertedHtml;
  }

  convertButtonWithClass(label: string) {
    this.convertedHtml = `
    <style>
      .generate-button {
        ${this.strStyle}
      }
    </style>
    <button type="button" class="generate-button">
      ${label}
    </button>
    `;

    return this.convertedHtml;
  }

  addTemplate() {
    this.convertedHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        ${this.convertedHtml}
      </body>
    </html>
    `;

    return this.convertedHtml;
  }

  async saveInClipboard() {
    return navigator.clipboard
      .writeText(this.convertedHtml)
      .then(() => alert("Copied!"))
      .catch(err => alert("해당 브라우저에서는 지원하지 않는 기능입니다."));
  }
}
