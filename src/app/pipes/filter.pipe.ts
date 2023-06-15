import { Pipe, PipeTransform } from '@angular/core';
import { IMeal } from '../interfaces/meal';
import { IFilter } from '../interfaces/filter';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: IMeal[], filterOptions: IFilter): IMeal[] {
    if (!filterOptions) {
      return value;
    }

    let filteredMeal: IMeal[] = value;

    if (filterOptions.searchSpec) {
      filteredMeal = filteredMeal.filter(
        (meal: IMeal) => meal.type === filterOptions.searchSpec
      );
    }

    if (filterOptions.searchText) {
      filteredMeal = filteredMeal.filter((meal: IMeal) =>
        meal.title
          .toLocaleLowerCase()
          .includes(filterOptions?.searchText?.toLocaleLowerCase() ?? '')
      );
    }

    return filteredMeal;
  }
}
