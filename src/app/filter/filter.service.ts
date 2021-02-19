import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { TitleSuggestions } from './title-suggestions.model';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  IMDB_API = environment.apiUrl;

  constructor(private readonly httpClient: HttpClient) { }

  getTitleSuggestions(titleQuery: string): Observable<TitleSuggestions> {
    const params = new HttpParams().set('q', titleQuery);
    // test data
    return of({
      "d": [
        {
          "i": {
            "height": 826,
            "imageUrl": "https://m.media-amazon.com/images/M/MV5BMjg1ZDU4ZDMtZWQxNi00OTFlLTkwMDItZDJmYzYzMGEwOTcyXkEyXkFqcGdeQXVyMzM2NzgzNjM@._V1_.jpg",
            "width": 583
          },
          "id": "tt0416694",
          "l": "Don Bosco",
          "q": "TV movie",
          "rank": 101257,
          "s": "Flavio Insinna, Lina Sastri",
          "y": 2004
        },
        {
          "i": {
            "height": 500,
            "imageUrl": "https://m.media-amazon.com/images/M/MV5BMWVjZTdlMWUtYzE2OC00MTE1LTlmMTMtMDQyNTA1M2IyZGM2XkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_.jpg",
            "width": 375
          },
          "id": "tt0095051",
          "l": "Don Bosco",
          "q": "feature",
          "rank": 119668,
          "s": "Ben Gazzara, Patsy Kensit",
          "y": 1988
        },
        {
          "i": {
            "height": 2511,
            "imageUrl": "https://m.media-amazon.com/images/M/MV5BOTM3NDZhNWEtY2VlYy00ZTQyLTk2MTMtMTk1YWNmN2ZmNDNmXkEyXkFqcGdeQXVyMzg1ODEwNQ@@._V1_.jpg",
            "width": 1757
          },
          "id": "tt0026286",
          "l": "Don Bosco",
          "q": "feature",
          "rank": 410672,
          "s": "Gian Paolo Rosmino, Ferdinando Mayer",
          "y": 1936
        }
      ],
      "q": "Don Bosco",
      "v": 1
    }).pipe(delay(1500));
    return this.httpClient.get<TitleSuggestions>(`${this.IMDB_API}/auto-complete`, { params });
  }
}
