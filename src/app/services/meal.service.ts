import { Injectable } from '@angular/core';
import { IMeal } from '../interfaces/meal';
import { HttpClient } from '@angular/common/http';
import { Observable, map, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MealService {
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
