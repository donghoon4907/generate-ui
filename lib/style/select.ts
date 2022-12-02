import { CSSProperties } from "react";

import { styleToString } from "./to-string";
import { ConvertElement } from "./core";

export interface ParentOption {
  wrapperStyle: CSSProperties;
  labelStyle: CSSProperties;
}

export interface ChildOption {
  wrapperStyle: CSSProperties;
  labelStyle: CSSProperties;
}

export class ConvertSelect extends ConvertElement {
  private strSelectStyle: string;
  private strSelectLabelStyle: string;
  private strOptionStyle: string;
  private strOptionLabelStyle: string;

  constructor(parentOption: ParentOption, childOption: ChildOption) {
    super();

    this.strSelectStyle = styleToString(parentOption.wrapperStyle);

    this.strSelectLabelStyle = styleToString(parentOption.labelStyle);

    this.strOptionStyle = styleToString(childOption.wrapperStyle);

    this.strOptionLabelStyle = styleToString(childOption.labelStyle);
  }

  private generateClass() {
    return `
    <style>
      .generate-select__container {
        position: relative;
      }
      .generate-select {
        ${this.strSelectStyle}
      }
      .generate-select__label {
        ${this.strSelectLabelStyle}
      }
      .generate-option {
        display: none;
        position: absolute;
        top: calc(100% + 2px);
        list-style-type: none;
        padding: 0;
        margin: 0;
        ${this.strOptionStyle}
      }
      .generate-option__label {
        ${this.strOptionLabelStyle}
      }
    </style>
    `;
  }

  private generateEvent() {
    return `
    <script>
      var select = document.querySelector(".generate-select");

      var option = document.querySelector(".generate-option")
      
      select.onclick = function(evt) {
        if(select.classList.contains("active")) {
          option.style.display = "none";
          select.classList.remove("active");
        } else {
          option.style.display = "block";
          select.classList.add("active");
        }
      }
    
      </script>
    `;
  }

  private generateParent(label: string) {
    return `
    <div class="generate-select">
      <button type="button" class="generate-select__label">${label}</button>
    </div>
    `;
  }

  private generateChild() {
    return `
    <ul class="generate-option">
      <li class="generate-option__label">Example Option 1...</li>
    </ul>
    `;
  }

  public generateSelect(label: string) {
    this.convertedHtml = `
    ${this.generateClass()}
    <div class="generate-select__container">
      ${this.generateParent(label)}
      ${this.generateChild()}
    </div>
    ${this.generateEvent()}
    `;

    return this.convertedHtml;
  }
}
