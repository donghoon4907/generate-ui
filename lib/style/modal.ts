import type { CSSProperties } from "react";

import type { IModalButton, IModalLayout } from "../../model/modal";
import { styleToString } from "./to-string";
import { ConvertElement } from "./core";
import { InputTypeOption } from "../../types/select-option";
import { makeLayoutStyle } from "./modal-layout";
import { makeButtonStyle } from "./modal-button";

export interface ConverModalOption {
  container: CSSProperties;
  header: CSSProperties;
  headerTitle: CSSProperties;
  headerIcon: CSSProperties;
  body: CSSProperties;
  footer: CSSProperties;
}

interface GenerateModalOption {
  title: string;
  layouts: IModalLayout[];
  buttons: IModalButton[];
}

export class ConvertModal extends ConvertElement {
  private strContainerStyle: string;
  private strHeaderStyle: string;
  private strHeaderTitleStyle: string;
  private strHeaderIconStyle: string;
  private strBodyStyle: string;
  private strFooterStyle: string;

  constructor(option: ConverModalOption) {
    super();

    this.strContainerStyle = styleToString(option.container);

    this.strHeaderStyle = styleToString(option.header);

    this.strHeaderTitleStyle = styleToString(option.headerTitle);

    this.strHeaderIconStyle = styleToString(option.headerIcon);

    this.strBodyStyle = styleToString(option.body);

    this.strFooterStyle = styleToString(option.footer);
  }

  private generateClass() {
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

      .modal-header {
        ${this.strHeaderStyle}
      }

      .modal-header__title {
        ${this.strHeaderTitleStyle}
      }

      .modal-header__icon {
        ${this.strHeaderIconStyle}
      }

      .modal-body {
        ${this.strBodyStyle}
      }

      .modal-footer {
        ${this.strFooterStyle}
      }
    </style>
    `;
  }

  private generateEvent() {
    return `
    <script>
      var $icon = document.querySelector(".modal-header__icon");
      
      $icon.onclick = function(evt) {
        
      }
      </script>
    `;
  }

  private generateLayouts(layouts: IModalLayout[]) {
    return layouts.map(layout => {
      const { containerStyle, labelStyle, inputWrapperStyle, inputStyle } =
        makeLayoutStyle(layout);

      let input;
      if (layout.inputType.value === InputTypeOption.TEXTAREA) {
        input = `
        <textarea placeholder="${
          layout.inputPlaceholder
        }" style="${styleToString(inputStyle)}" />
        `;
      } else {
        input = `
        <input type="${layout.inputType.value}" placeholder="${
          layout.inputPlaceholder
        }" style="${styleToString(inputStyle)}" />
        `;
      }

      return `
      <div style="${styleToString(containerStyle)}">
        <label style="${styleToString(labelStyle)}">
          ${layout.label}
        </label>
        <div style="${styleToString(inputWrapperStyle)}">
          ${input}
        </div>
      </div>
      `;
    });
  }

  private generateButtons(buttons: IModalButton[]) {
    return buttons.map(button => {
      const { btnStyle } = makeButtonStyle(button);

      return `
      <button type="button" style="${styleToString(btnStyle)}">
        <span>${button.label}</span>
      </button>
      `;
    });
  }

  public generateModal(option: GenerateModalOption) {
    this.convertedHtml = `
    ${this.generateClass()}
    <div class="generate-modal">
      <div class="modal-layer">
        <div class="modal-container">
          <div class="modal-header">
            <div class="modal-header__title">
              ${option.title}
            </div>
            <button type="button" class="modal-header__icon">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z">
                </path>
              </svg>
            </button>
          </div>
          <div class="modal-body">
            ${this.generateLayouts(option.layouts)}
          </div>
          <div class="modal-footer">
            ${this.generateButtons(option.buttons)}
          </div>
        </div>
      </div>
    </div>
    ${this.generateEvent()}
    `;

    return this.convertedHtml;
  }
}
