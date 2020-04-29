import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {Hero} from '../models/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private url = 'api/heroes';

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getList(): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(this.url)
      .pipe(
        tap(data => console.log(`fetched data: ${data.length}`)),
        catchError(err => {
          console.log(err);
          return of([]);
        })
      );
  }
}
