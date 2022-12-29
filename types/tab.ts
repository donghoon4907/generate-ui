export enum InputSearchTabType {
  DEFAULT = "default",
  ICON = "icon"
}

export enum SelectTabType {
  COMMON = "common",
  SELECT = "select",
  OPTION = "option"
}

export enum ModalTabType {
  MODAL = "modal",
  HEADER = "header",
  BODY = "body",
  FOOTER = "footer"
}

export enum ModalBodyLayoutTabType {
  LABEL = "label",
  INPUT = "input"
}

export type TabType =
  | InputSearchTabType
  | SelectTabType
  | ModalTabType
  | ModalBodyLayoutTabType;
