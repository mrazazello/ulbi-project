// <Адрес страницы, позиция скрола>
export type ScrollDictionaryType = Record<string, number>;

export interface IScrollRestoreSchema {
  scroll: ScrollDictionaryType;
}
