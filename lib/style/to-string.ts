import { CSSProperties } from "react";
import { isNumber } from "../calc/number";

export interface StyleProperties extends CSSProperties {}

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

  normalize(style: StyleProperties) {
    let result = "";

    for (const [key, value] of Object.entries(style)) {
      // 대문자 -> 소문자
      let cssKey = key.replace(/[A-Z]/g, char => `-${char.toLowerCase()}`);

      if (isNumber(value)) {
        result += `${cssKey}: ${value}px;`;
      } else {
        result += `${cssKey}: ${value};`;
      }
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
