import { Pipe, PipeTransform } from '@angular/core';
import { IMeal } from '../interfaces/meal';
import { IFilter } from '../interfaces/filter';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: IMeal[], filterOptions: IFilter): IMeal[] {
    if (filterOptions.searchSpec && filterOptions.searchText) {
      return value.filter(
        (meal: IMeal) =>
          meal.type === filterOptions.searchSpec &&
          meal.title
            .toLocaleLowerCase()
            .includes(filterOptions?.searchText ?? '')
      );
    } else if (filterOptions.searchSpec && !filterOptions.searchText) {
      return value.filter(
        (meal: IMeal) => meal.type === filterOptions.searchSpec
      );
    } else if (!filterOptions.searchSpec && filterOptions.searchText) {
      return value.filter((meal: IMeal) =>
        meal.title.toLocaleLowerCase().includes(filterOptions?.searchText ?? '')
      );
    } else {
      return value;
    }
  }
}
