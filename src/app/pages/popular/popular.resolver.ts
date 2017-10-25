import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';

import {MovieDbService} from '../../services/movie-db/movie-db.service';


@Injectable()
export class PopularResolve implements Resolve<any> {

  constructor(private movieDbService: MovieDbService) {
  }

  resolve() {
    return this.movieDbService.getPopularMovies();
  }
}
