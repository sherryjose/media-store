import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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
    return this.httpClient.get<TitleSuggestions>(`${this.IMDB_API}/auto-complete`, { params });
    // test data
    return of({
      "d": [
        {
          "i": {
            "height": 1500,
            "imageUrl": "https://m.media-amazon.com/images/M/MV5BMDYzZTRlNGEtZDc2Mi00ZGNjLTlmZDAtMmVjMDZkOThiODEwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
            "width": 1013
          },
          "id": "tt183749",
          "l": "13 Reasons Why",
          "q": "TV series",
          "rank": 556,
          "s": "Dylan Minnette, Katherine Langford",
          "v": [],
          "vt": 39,
          "y": 2017,
          "yr": "2017-2020"
        },
        {
          "i": {
            "height": 1500,
            "imageUrl": "https://m.media-amazon.com/images/M/MV5BMDYzZTRlNGEtZDc2Mi00ZGNjLTlmZDAtMmVjMDZkOThiODEwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
            "width": 1013
          },
          "id": "tt1837492",
          "l": "13 Reasons Why",
          "q": "TV series",
          "rank": 556,
          "s": "Dylan Minnette, Katherine Langford",
          "v": [],
          "vt": 39,
          "y": 2017,
          "yr": "2017-2020"
        },
        {
          "i": {
            "height": 1500,
            "imageUrl": "https://m.media-amazon.com/images/M/MV5BMDYzZTRlNGEtZDc2Mi00ZGNjLTlmZDAtMmVjMDZkOThiODEwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
            "width": 1013
          },
          "id": "tt1837492",
          "l": "13 Reasons Why",
          "q": "TV series",
          "rank": 556,
          "s": "Dylan Minnette, Katherine Langford",
          "v": [
            {
              "i": {
                "height": 1804,
                "imageUrl": "https://m.media-amazon.com/images/M/MV5BMDQ3MGJlNzQtNDFmYi00Y2U1LWE4MTktYTgzOGFjYzhhZjhkXkEyXkFqcGdeQWFybm8@._V1_.jpg",
                "width": 3425
              },
              "id": "vi63356441",
              "l": "Final Trailer",
              "s": "2:08"
            }
          ],
          "vt": 39,
          "y": 2017,
          "yr": "2017-2020"
        }],
      "q": 'qqq',
      "v": 1
    });
  }
}
