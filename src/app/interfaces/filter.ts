export interface IFilter {
  searchText?: string;
  searchSpec?: MEALTYPES;
}

export enum MEALTYPES {
  BURGERS = 'burgers',
  PIZZA = 'pizza',
  PASTA = 'pasta',
}
