import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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
    return this.httpClient.get<MediaDetails>(`${this.IMDB_API}/title/get-details`, { params });
    // test data
    if (id === 'tt183749') {
      return of({
        "@type": "imdb.api.title.title",
        "id": "/title/tt1837492/",
        "image": {
          "height": 1500,
          "id": "/title/tt1837492/images/rm1593488385",
          "url": "https://m.media-amazon.com/images/M/MV5BMDYzZTRlNGEtZDc2Mi00ZGNjLTlmZDAtMmVjMDZkOThiODEwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
          "width": 1013
        },
        "runningTimeInMinutes": 60,
        "nextEpisode": "/title/tt5174246/",
        "numberOfEpisodes": 49,
        "seriesEndYear": 2020,
        "seriesStartYear": 2017,
        "title": "13 Reasons Why",
        "titleType": "tvSeries",
        "year": 2017
      });
    } else {
      return of({
        "@type": "imdb.api.title.title",
        "id": "/title/tt1837492/",
        "image": {
          "height": 1500,
          "id": "/title/tt1837492/images/rm1593488385",
          "url": "https://m.media-amazon.com/images/M/MV5BMDYzZTRlNGEtZDc2Mi00ZGNjLTlmZDAtMmVjMDZkOThiODEwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
          "width": 1013
        },
        "runningTimeInMinutes": 70,
        "nextEpisode": "/title/tt5174246/",
        "numberOfEpisodes": 49,
        "seriesEndYear": 2020,
        "seriesStartYear": 2017,
        "title": "13 Reasons Why",
        "titleType": "tvSeries",
        "year": 2017
      });
    }
  }
}
