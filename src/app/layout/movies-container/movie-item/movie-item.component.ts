import {Component, EventEmitter, Input, Output} from '@angular/core';

import {MovieDbService} from '../../../services/movie-db/movie-db.service';
import {StorageService} from '../../../services/storage/storage.service';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent {
  @Input() movie;

  @Output() saveToWatchList: EventEmitter<any> = new EventEmitter();
  @Output() delete: EventEmitter<number> = new EventEmitter();

  constructor(public movieDbService: MovieDbService, private storageService: StorageService) {
  }

  public saveMovieIntoToDo() {
    this.saveToWatchList.emit(this.movie);
  }

  public deleteMovieFromToDo() {
    this.delete.emit(this.movie.id);
  }

  public isSaved() {
    return this.storageService.isMoviesSaved(this.movie.id);
  }
}
