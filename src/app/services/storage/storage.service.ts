import {Injectable} from '@angular/core';

import * as _ from 'lodash';

@Injectable()
export class StorageService {
  constructor() {
  }

  public saveMovies(movie: any) {
    let savedMovies = this.getSavedMovies();

    if (!_.find(savedMovies, {id: movie.id})) {
      savedMovies.push(movie);

      localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
    }
  }

  public getSavedMovies() {
    return JSON.parse(localStorage.getItem('savedMovies')) || [];
  }

  public isMoviesSaved(id: number) {
    return !!_.find(this.getSavedMovies(), {id: id});
  }

  public deleteMovies(id: number) {
    let savedMovies = this.getSavedMovies();

    _.remove(savedMovies, {id: id});

    localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
  }
}

