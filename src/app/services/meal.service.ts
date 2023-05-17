import { Injectable } from '@angular/core';
import { IMeal } from '../interfaces/meal';
import { HttpClient } from '@angular/common/http';
import { Observable, map, pipe } from 'rxjs';
import { MEALTYPES } from '../interfaces/filter';

@Injectable({
  providedIn: 'root',
})
export class MealService {
  public meals: IMeal[] = [
    {
      id: '1',
      type: MEALTYPES.BURGERS,
      title: 'Маминькин Сынок',
      subtitle: 'Вегетарианский бургер на растительном мясе',
      price: '600',
      size: ['s', 'm', 'l'],
      pictureUrl: '',
    },
    {
      id: '2',
      type: MEALTYPES.PIZZA,
      title: 'Ушлепок',
      subtitle: 'хуита',
      price: '600',
      size: ['s', 'm', 'l'],
      pictureUrl: '',
    },
    {
      id: '3',
      type: MEALTYPES.PIZZA,
      title: 'Козлик',
      subtitle: 'хуита мясная',
      price: '600',
      size: ['s', 'm', 'l'],
      pictureUrl: '',
    },
    {
      id: '4',
      type: MEALTYPES.PASTA,
      title: 'Маминькин Сынок',
      subtitle: 'Вегетарианский бургер на растительном мясе',
      price: '600',
      size: ['s', 'm', 'l'],
      pictureUrl: '',
    },
  ];
  private baseUrl: string =
    'https://248971fd-9235-4bbf-a2a4-27294a9a2a7f.mock.pstmn.io/meal';
  constructor(private http: HttpClient) {}

  getAll(): Observable<IMeal[]> {
    return this.http.get<IMeal[]>(this.baseUrl);
  }

  getOne(): Observable<IMeal> {
    return this.http.get<IMeal>(this.baseUrl);
  }

  get(): Observable<any> {
    return this.http.get<any>('https://swapi.dev/api/people');
  }
}
