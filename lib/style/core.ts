import { v4 as uuidv4 } from "uuid";

export class ConvertElement {
  protected id: string;
  protected convertedHtml: string = "";

  constructor() {
    this.id = uuidv4();
  }

  public get getHtml() {
    return this.convertedHtml;
  }

  public addTemplate() {
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
