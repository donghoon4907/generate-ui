import { CSSProperties } from "react";

import { styleToString } from "./to-string";
import { ConvertElement } from "./core";

export interface SelectButtonOption {
  wrapperStyle: CSSProperties;
  labelStyle: CSSProperties;
}

export interface SelectListOption {
  wrapperStyle: CSSProperties;
  labelStyle: CSSProperties;
}

export class ConvertSelect extends ConvertElement {
  private selectId: string;
  private optionId: string;
  private width: number;
  private strSelectStyle: string;
  private strSelectLabelStyle: string;
  private strOptionStyle: string;
  private strOptionLabelStyle: string;

  constructor(
    width: number,
    buttonOption: SelectButtonOption,
    listOption: SelectListOption
  ) {
    super();

    this.selectId = `select${this.id}`;

    this.optionId = `option${this.id}`;

    this.width = width;

    this.strSelectStyle = styleToString(buttonOption.wrapperStyle);

    this.strSelectLabelStyle = styleToString(buttonOption.labelStyle);

    this.strOptionStyle = styleToString(listOption.wrapperStyle);

    this.strOptionLabelStyle = styleToString(listOption.labelStyle);
  }

  private generateClass() {
    return `
    <style>
      * {
        box-sizing: border-box;
      }

      .generate-select__container {
        position: relative;
        width: ${this.width}px;
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

      .generate-option[data-active=true] {
        display: block;
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
      var $select = document.querySelector("#${this.selectId}");

      var $option = document.querySelector("#${this.optionId}");
      
      $select.onclick = function(evt) {
        if($option.dataset.active == "true") {
          toggleSelect(false);
        } else {
          toggleSelect(true);
        }
      }

      $option.onclick = function(evt) {
        var $selectedItem = evt.target;

        var selectedItemValue = $selectedItem.dataset.value;

        if(typeof selectedItemValue == "string") {
          var $selectBtn = $select.querySelector(".generate-select__label");

          if(selectedItemValue == "") {
            $selectBtn.innerText = $select.dataset.label;
          } else {
            $selectBtn.innerText = selectedItemValue;
          }

          toggleSelect(false);
        } 
      }

      function toggleSelect(active) {
        $option.dataset.active = active;
      }
      </script>
    `;
  }

  private generateButton(label: string) {
    return `
    <button type="button" class="generate-select" data-label="${label}" id="${this.selectId}">
      <span class="generate-select__label">${label}</span>
    </button>
    `;
  }

  private generateList() {
    return `
    <ul class="generate-option" data-active="false" id="${this.optionId}">
      <li class="generate-option__label" data-value="">선택안함</li>
      <li class="generate-option__label" data-value="example">Example Option 1...</li>
    </ul>
    `;
  }

  public generateSelect(label: string) {
    this.convertedHtml = `
    ${this.generateClass()}
    <div class="generate-select__container">
      ${this.generateButton(label)}
      ${this.generateList()}
    </div>
    ${this.generateEvent()}
    `;

    return this.convertedHtml;
  }
}
