import { CSSProperties } from "react";

import { styleToString } from "./to-string";
import { ConvertElement } from "./core";

export class ConvertCheckbox extends ConvertElement {
  private strCheckboxStyle: string;
  private strLabelStyle: string;

  constructor(checkboxStyle: CSSProperties, labelStyle: CSSProperties) {
    super();

    this.strCheckboxStyle = styleToString(checkboxStyle);

    this.strLabelStyle = styleToString(labelStyle);
  }

  generateClass() {
    return `
    <style>
      * {
        box-sizing: border-box;
      }

      input {
        outline: none;
      }

      .generate-checkbox__container {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 5px;
      }

      .generate-checkbox {
        ${this.strCheckboxStyle}
        margin: 0;
      }

      .generate-label {
        ${this.strLabelStyle}
      }
    </style>
    `;
  }

  generateEvent() {
    return "<script></script>";
  }

  generateCheckbox(label: string) {
    this.convertedHtml = `
    ${this.generateClass()}
    <div class="generate-checkbox__container">
      <input type="checkbox" class="generate-checkbox" id="${this.id}" />
      <label class="generate-label" for="${this.id}">${label}</label>
    </div>
    ${this.generateEvent()}
    `;

    return this.convertedHtml;
  }
}
