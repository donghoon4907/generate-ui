import { CSSProperties } from "react";

import { styleToString } from "./to-string";

export interface ParentOption {
  wrapperStyle: CSSProperties;
  labelStyle: CSSProperties;
}

export interface ChildOption {
  wrapperStyle: CSSProperties;
  labelStyle: CSSProperties;
}

export class ConvertSelect {
  private convertedHtml: string = "";
  private strSelectStyle: string;
  private strSelectLabelStyle: string;
  private strOptionStyle: string;
  private strOptionLabelStyle: string;

  private readonly strSelectIcon = `<svg width="20" height="20" stroke="currentColor" fill="#000" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 10.828l-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z"></path></g></svg>`;
  private readonly strSelectIconWrapperStyle = `display: flex;justify-content: center;align-items: center;transform: rotate(180deg);`;

  constructor(parentOption: ParentOption, childOption: ChildOption) {
    this.strSelectStyle = styleToString(parentOption.wrapperStyle);

    this.strSelectLabelStyle = styleToString(parentOption.labelStyle);

    this.strOptionStyle = styleToString(childOption.wrapperStyle);

    this.strOptionLabelStyle = styleToString(childOption.labelStyle);
  }

  get getHtml() {
    return this.convertedHtml;
  }

  generateClass() {
    return `
    <style>
      .generate-select {
        ${this.strSelectStyle}
      }
      .generate-select__label {
        width: 100%;
        ${this.strSelectLabelStyle}
      }
      .generate-select__icon {
        ${this.strSelectIconWrapperStyle}
      }
      .generate-option {
        display: none;
        position: absolute;
        top: calc(100% + 5px);
        width: 100%;
        ${this.strOptionStyle}
      }
      .generate-option__label {
        ${this.strOptionLabelStyle}
      }
    </style>
    `;
  }

  generateEvent() {
    return `
    <script>
        window.addEventListener("click", function (evt) {
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
    `;
  }

  generateParent(label: string) {
    return `
    <div class="generate-select" id="generateSelect">
      <div class="generate-select__label">${label}</div>
      <div class="generate-select__icon">${this.strSelectIcon}</div>
    </div>
    `;
  }

  generateChild() {
    return `
    <div class="generate-option" id="generateOption">
      <div class="generate-option__label">Example Option 1...</div>
    </div>
    `;
  }

  generateSelect(label: string) {
    return `
    ${this.generateClass()}
    <div style="position: relative;">
      ${this.generateParent(label)}
      ${this.generateChild()}
    </div>
    ${this.generateEvent()}
    `;
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
