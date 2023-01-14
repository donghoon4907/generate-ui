import type { CSSProperties } from "react";

import type { IModalButton, IModalLayout } from "../../model/modal";
import { styleToString } from "./to-string";
import { ConvertElement } from "./core";
import { InputTypeOption } from "../../types/select-option";
import { makeLayoutStyle, makeButtonStyle } from "./modal-extension";

export interface ConverModalOption {
  container: CSSProperties;
  header: CSSProperties | null;
  headerTitle: CSSProperties | null;
  headerIcon: CSSProperties | null;
  body: CSSProperties;
  footer: CSSProperties | null;
}

interface GenerateModalOption {
  title: string;
  layouts: IModalLayout[];
  buttons: IModalButton[];
}

export class ConvertModal extends ConvertElement {
  private strContainerStyle: string;
  private strHeaderStyle: string | null = null;
  private strHeaderTitleStyle: string | null = null;
  private strHeaderIconStyle: string | null = null;
  private strBodyStyle: string;
  private strFooterStyle: string | null = null;
  private additionalClass: string[] = [];

  constructor(option: ConverModalOption) {
    super();

    this.strContainerStyle = styleToString(option.container);

    if (option.header) {
      this.strHeaderStyle = styleToString(option.header);
    }

    if (option.headerTitle) {
      this.strHeaderTitleStyle = styleToString(option.headerTitle);
    }

    if (option.headerIcon) {
      this.strHeaderIconStyle = styleToString(option.headerIcon);
    }

    this.strBodyStyle = styleToString(option.body);

    if (option.footer) {
      this.strFooterStyle = styleToString(option.footer);
    }
  }

  private generateClass() {
    let headerClass = "";
    if (this.strHeaderStyle) {
      headerClass = `.modal-header { ${this.strHeaderStyle} }`;
    }

    let headerTitleClass = "";
    if (this.strHeaderTitleStyle) {
      headerTitleClass = `.modal-header__title { ${this.strHeaderTitleStyle} }`;
    }

    let headerIconClass = "";
    if (this.strHeaderIconStyle) {
      headerIconClass = `.modal-header__icon { ${this.strHeaderIconStyle} }`;
    }

    let footerClass = "";
    if (this.strFooterStyle) {
      footerClass = `.modal-footer { ${this.strFooterStyle} }`;
    }

    let addtionalClass = "";
    if (this.additionalClass.length > 0) {
      addtionalClass = this.additionalClass.reduce((acc, cur) => acc + cur, "");
    }

    return `
    <style>
      * {
        box-sizing: border-box;
      }

      .generate-modal {
        position: fixed;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
      }

      .generate-modal.generate-modal--hide {
        display: none;
      }

      .modal-layer {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(0, 0, 0, 0.5);
        overflow: hidden;
        padding: 20px;
      }

      .modal-container {
        position: relative;
        ${this.strContainerStyle}
      }

      .modal-body {
        ${this.strBodyStyle}
      }

      ${headerClass}
      ${headerTitleClass}
      ${headerIconClass}
      ${footerClass}
      ${addtionalClass}
    </style>
    `;
  }

  private generateEvent() {
    return `
    <script>
      var $container = document.querySelector(".generate-modal");
      var $icon = document.querySelector(".modal-header__icon");
      
      $icon.onclick = function(evt) {
        $container.classList.add("generate-modal--hide");
      }
      </script>
    `;
  }

  private generateLayouts(layouts: IModalLayout[]) {
    return layouts.reduce((acc, layout, index) => {
      const containerClassName = `modal-layout${index + 1}`;

      const { containerStyle, labelStyle, inputWrapperStyle, inputStyle } =
        makeLayoutStyle(layout);

      this.additionalClass.push(`
      .${containerClassName} { ${styleToString(containerStyle)} }

      .${containerClassName}__label { ${styleToString(labelStyle)} }

      .${containerClassName}__input { ${styleToString(inputWrapperStyle)} }

      .${containerClassName}__input > * { ${styleToString(inputStyle)} }
      `);

      let input;
      if (layout.inputType.value === InputTypeOption.TEXTAREA) {
        input = `<textarea placeholder="${layout.inputPlaceholder}" />`;
      } else {
        input = `<input type="${layout.inputType.value}" placeholder="${layout.inputPlaceholder}" />`;
      }

      return (
        acc +
        `
      <div class="${containerClassName}">
        <label class="${containerClassName}__label">
          ${layout.label}
        </label>
        <div class="${containerClassName}__input">
          ${input}
        </div>
      </div>
      `
      );
    }, "");
  }

  private generateButtons(buttons: IModalButton[]) {
    return buttons.reduce((acc, button, index) => {
      const btnClassName = `modal-button${index + 1}`;

      const { btnStyle } = makeButtonStyle(button);

      this.additionalClass.push(`
      .${btnClassName} { ${styleToString(btnStyle)} }
      `);

      return (
        acc +
        `
      <button type="button" class="${btnClassName}">
        <span>${button.label}</span>
      </button>
      `
      );
    }, "");
  }

  public generateModal(option: GenerateModalOption) {
    const layouts = this.generateLayouts(option.layouts);

    const buttons = this.generateButtons(option.buttons);

    let closeIcon = "";
    if (this.strHeaderIconStyle) {
      closeIcon = `
      <div class="modal-header__icon">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
          <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z">
          </path>
        </svg>
      </div>
      `;
    }

    let header = "";
    if (this.strHeaderTitleStyle) {
      header = `
      <div class="modal-header">
        <div class="modal-header__title">
        ${option.title}
        </div>
        ${closeIcon}
      </div>
        `;
    }

    let footer = "";
    if (this.strFooterStyle) {
      footer = `
      <div class="modal-footer">
        ${buttons}
      </div>
      `;
    }

    this.convertedHtml = `
    ${this.generateClass()}
    <div class="generate-modal">
      <div class="modal-layer">
        <div class="modal-container">
          ${header}
          <div class="modal-body">
            ${layouts}
          </div>
          ${footer}
        </div>
      </div>
    </div>
    ${this.generateEvent()}
    `;

    return this.convertedHtml;
  }
}
