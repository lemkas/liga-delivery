import { MEALTYPES } from './filter';

export interface IMeal {
  id: string;
  type: MEALTYPES;
  title: string;
  subtitle: string;
  price: string;
  size: string[];
  pictureUrl: string;
}
