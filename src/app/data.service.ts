import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { MediaDetails } from './home/media-details.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  IMDB_API = environment.apiUrl;

  constructor(private readonly httpClient: HttpClient) { }

  getMediaDetails(id: string): Observable<MediaDetails> {
    const params = new HttpParams().set('tconst', id);
    // test data
    if (id === 'tt0416694') {
      return of({
        "@type": "imdb.api.title.title",
        "id": "/title/tt0416694/",
        "image": {
          "height": 826,
          "id": "/title/tt0416694/images/rm2294944256",
          "url": "https://m.media-amazon.com/images/M/MV5BMjg1ZDU4ZDMtZWQxNi00OTFlLTkwMDItZDJmYzYzMGEwOTcyXkEyXkFqcGdeQXVyMzM2NzgzNjM@._V1_.jpg",
          "width": 583
        },
        "runningTimeInMinutes": 146,
        "title": "Don Bosco",
        "titleType": "tvMovie",
        "year": 2004
      });
    } else if (id === 'tt0095051') {
      return of({
        "@type": "imdb.api.title.title",
        "id": "/title/tt0095051/",
        "image": {
          "height": 500,
          "id": "/title/tt0095051/images/rm483010816",
          "url": "https://m.media-amazon.com/images/M/MV5BMWVjZTdlMWUtYzE2OC00MTE1LTlmMTMtMDQyNTA1M2IyZGM2XkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_.jpg",
          "width": 375
        },
        "runningTimeInMinutes": 108,
        "title": "Don Bosco",
        "titleType": "movie",
        "year": 1988
      });
    } else {
      return of(
        {
          "@type": "imdb.api.title.title",
          "id": "/title/tt0026286/",
          "image": {
            "height": 2511,
            "id": "/title/tt0026286/images/rm243758848",
            "url": "https://m.media-amazon.com/images/M/MV5BOTM3NDZhNWEtY2VlYy00ZTQyLTk2MTMtMTk1YWNmN2ZmNDNmXkEyXkFqcGdeQXVyMzg1ODEwNQ@@._V1_.jpg",
            "width": 1757
          },
          "runningTimeInMinutes": 90,
          "title": "Don Bosco",
          "titleType": "movie",
          "year": 1936
        }).pipe(delay(2000));
    }
    return this.httpClient.get<MediaDetails>(`${this.IMDB_API}/title/get-details`, { params });
  }
}
