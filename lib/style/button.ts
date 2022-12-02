import { CSSProperties } from "react";

import { styleToString } from "./to-string";
import { ConvertElement } from "./core";

export class ConvertButton extends ConvertElement {
  private strBtnStyle: string;

  constructor(btnStyle: CSSProperties) {
    super();

    this.strBtnStyle = styleToString(btnStyle);
  }

  generateClass() {
    return `
    <style>
      .generate-button {
        ${this.strBtnStyle}
      }
    </style>
    `;
  }

  generateEvent() {
    return "<script></script>";
  }

  generateButton(label: string) {
    this.convertedHtml = `
    ${this.generateClass()}
    <button type="button" class="generate-button">
      ${label}
    </button>
    ${this.generateEvent()}
    `;

    return this.convertedHtml;
  }
}
