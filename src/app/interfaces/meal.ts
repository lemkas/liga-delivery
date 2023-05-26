import { MEALTYPES } from './filter';

export interface IMeal {
  id: string;
  type: MEALTYPES;
  title: string;
  subtitle: string;
  price: string;
  size: [MEALSIZE.S, MEALSIZE.M, MEALSIZE.L];
  pictureUrl: string;
}

export enum MEALSIZE {
  S = 'S',
  M = 'M',
  L = 'L',
}
