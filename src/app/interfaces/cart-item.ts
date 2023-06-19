import { MEALSIZE } from './meal';

export interface ICartItem {
  id: string;
  mealId: string;
  size: MEALSIZE;
  count: number;
}
