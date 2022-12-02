import { CSSProperties } from "react";
import { isNumber } from "../calc/number";

export interface StyleProperties extends CSSProperties {}

export interface ConvertInputOptions {
  showIcon?: boolean;
}

export class StyleObjectToString {
  private convertedHtml: string;
  private strStyle: string;
  private strInputWrapperStyle = `position: relative;`;
  private strSearchIcon = `<svg width="20" height="20" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg>`;
  private strSearchIconWrapperStyle = `width: 20px;height: 20px;position: absolute;top: 50%;left: 5px;color: black;transform: translate3d(0, -50%, 0);`;
  private strSelectIcon = `<svg width="20" height="20" stroke="currentColor" fill="#000" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 10.828l-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z"></path></g></svg>`;
  private strSelectIconWrapperStyle = `display: flex;justify-content: center;align-items: center;transform: rotate(180deg);`;

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

  convertSelect(label: string, labelStyle: StyleProperties) {
    const strLabelStyle = this.normalize(labelStyle);

    this.convertedHtml = `
    <style>
      .generate-select {
        ${this.strStyle}
      }
      .generate-select__label {
        width: 100%;
        ${strLabelStyle}
      }
      .generate-select__icon {
        ${this.strSelectIconWrapperStyle}
      }
    </style>
    <div class="generate-select" id="generateSelect">
      <div class="generate-select__label">${label}</div>
      <div class="generate-select__icon">${this.strSelectIcon}</div>
    </div>
    `;

    return this.convertedHtml;
  }

  convertOption(labelStyle: StyleProperties) {
    const strLabelStyle = this.normalize(labelStyle);

    this.convertedHtml = `
    <style>
      .generate-option {
        display: none;
        width: 100%;
        ${this.strStyle}
      }
      .generate-option__label {
        ${strLabelStyle}
      }
    </style>
    <div class="generate-option" id="generateOption">
      <div class="generate-option__label">Example Option 1...</div>
    </div>
    `;

    return this.convertedHtml;
  }

  combineSelect(convertedSelect: string, convertedOption: string) {
    return `
    <div style="position: relative;">
      ${convertedSelect}
      ${convertedOption}
      <script>
        window.addEventListener("click", function(evt) {
          if(evt.target.id == "generateSelect") {
            var option = document.getElementById("generateOption");

            if(option.style.display == "none") {
              option.style.display = "block";
            } else {
              option.style.display = "none";
            }
          }
        })
      </script>
    </div>
    `;
  }

  convertInput(type: string, options: ConvertInputOptions = {}) {
    const { showIcon } = options;

    this.convertedHtml = `
    <style>
      .generate-input__container {
        ${this.strInputWrapperStyle}
      }
      .generate-input {
        ${this.strStyle}
      }
      ${
        showIcon
          ? `
      .generate-input__icon {
        ${this.strSearchIconWrapperStyle}
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
}
