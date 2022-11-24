import { CSSProperties } from "react";
import { isNumber } from "../calc/number";

export interface StyleProperties extends CSSProperties {}

export interface ConvertInputOptions {
  showIcon?: boolean;
}

export class StyleObjectToString {
  private convertedHtml: string;
  private strStyle: string;
  private strSearchIcon = `<svg width="20" height="20" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg>`;
  private strSearchIconWrapper = `width: 20px;height: 20px;position: absolute;top: 50%;left: 5px;color: black;transform: translate3d(0, -50%, 0);`;

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

  convertInput(type: string, options: ConvertInputOptions = {}) {
    const { showIcon } = options;

    this.convertedHtml = `
    <div style="position:relative;">
      <input type="${type}" style="${this.strStyle}" />
    ${
      showIcon
        ? `
    <div style="${this.strSearchIconWrapper}">
      ${this.strSearchIcon}
    </div>
    `
        : ""
    }
    </div>
    `;

    return this.convertedHtml;
  }

  convertInputWithClass(type: string, options: ConvertInputOptions = {}) {
    const { showIcon } = options;

    this.convertedHtml = `
    <style>
      .generate-input__container {
        position: relative;
      }
      .generate-input {
        ${this.strStyle}
      }
      ${
        showIcon
          ? `
      .generate-input__icon {
        ${this.strSearchIconWrapper}
      }
      `
          : ""
      }
      
    </style>
    <div class="generate-input__container">
      <input type="${type}" class="generate-input" />
      ${
        showIcon
          ? `
        <div class="generate-input__icon">
          ${this.strSearchIcon}
        </div>
        `
          : ""
      }
      
    </div>
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
