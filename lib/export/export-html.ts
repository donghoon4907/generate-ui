import { hexToRgb } from "../calc/rgb";

export class ExportToHtml {
  private convertedHtml: string;

  constructor(style: Record<string, string | number>) {
    this.convertedHtml = "";
  }

  get getHtml() {
    return this.convertedHtml;
  }

  normalizeStyle(style: Record<string, string | number>) {
    let result = "";

    if (style.width) {
      result += `width: ${style.width}px;`;
    }

    if (style.height) {
      result += `height: ${style.height}px;`;
    }

    if (style.backgroundColor) {
      const rgb = hexToRgb(style.backgroundColor as string);

      if (rgb) {
        if (style.backgroundColorAlpha) {
          result += `background-color: rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${style.backgroundColorAlpha});`;
        } else {
          result += `background-color: rgb(${rgb.r}, ${rgb.g}, ${rgb.b});`;
        }
      }
    }

    if (style.borderRadius) {
      result += `border-radius: ${style.borderRadius}px;`;
    }

    if (style.color) {
      result += `color: ${style.color};`;
    }

    if (style.borderWidth) {
      result += `border-width: ${style.borderWidth}px;`;
    }

    if (style.borderStyle) {
      result += `border-style: ${style.borderStyle};`;
    }

    if (style.borderStyle) {
      result += `border-style: ${style.borderStyle};`;
    }

    return `
      width: ${style.width}px;
      height: ${height}px;
      background-color: ${hexToRgba};
      color: ${color};
      border-radius: ${borderRadius};
      border: ${borderWidth}px ${borderStyle} ${borderColor};
      font-size: ${fontSize}px;
      `;
  }

  convertButton(label: string) {
    this.convertedHtml = `<button type="button" style="${this.style}">${label}</button>`;

    return this.convertedHtml;
  }

  convertButtonWithClass(label: string) {
    this.convertedHtml = `
    <style>
      .generate-button {
        ${this.style}
      }
    </style>
    <button type="button" class="generate-button">
      ${label}
    </button>
    `;

    return this.convertedHtml;
  }

  addTemplate() {
    return `
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
  }
}
