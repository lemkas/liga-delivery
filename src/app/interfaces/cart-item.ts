import { MEALSIZE } from './meal';

export interface ICartItem {
  id: string;
  mealId: string;
  mealPrice: number;
  size: MEALSIZE;
  count: number;
}
