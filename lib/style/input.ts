import { CSSProperties } from "react";

import { styleToString } from "./to-string";
import { ConvertElement } from "./core";

export class ConvertInput extends ConvertElement {
  private strWrapperStyle: string;
  private strInputStyle: string;

  constructor(wrapperStyle: CSSProperties, inputStyle: CSSProperties) {
    super();

    this.strWrapperStyle = styleToString(wrapperStyle);

    this.strInputStyle = styleToString(inputStyle);
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

      .generate-input__container {
        ${this.strWrapperStyle}
      }
      .generate-input {
        ${this.strInputStyle}
      }
    </style>
    `;
  }

  generateEvent() {
    return "<script></script>";
  }

  generateInput(type: string, placeholder: string) {
    this.convertedHtml = `
    ${this.generateClass()}
    <div class="generate-input__container">
      <input type="${type}" class="generate-input" placeholder="${placeholder}" />
    </div>
    ${this.generateEvent()}
    `;

    return this.convertedHtml;
  }
}
