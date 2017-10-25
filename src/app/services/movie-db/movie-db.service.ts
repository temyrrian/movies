import {Injectable} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';

import {Observable} from "rxjs/Observable";

import {appConfig} from './movie-db.config';

@Injectable()
export class MovieDbService {
  constructor(private http: Http) {
  }

  public searchMovies(searchString: string): Observable<any> {
    const params: URLSearchParams = new URLSearchParams();

    params.set('api_key', appConfig.MDBApiKey);
    params.set('query', searchString);

    return this.http.get(`${appConfig.MDBApiUrl}/search/movie`, {params: params});
  }

  public getPopularMovies(): Observable<any> {
    const params: URLSearchParams = new URLSearchParams();

    params.set('api_key', appConfig.MDBApiKey);

    return this.http.get(`${appConfig.MDBApiUrl}/movie/popular`, {params: params});
  }

  public getPosterUrl(url: string): string {
    return `${appConfig.MDBAImageApiUrl}${url}?api_key=${appConfig.MDBApiKey}`;
  }
}

