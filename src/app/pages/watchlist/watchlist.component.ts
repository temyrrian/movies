import {Component, OnInit} from '@angular/core';

import {StorageService} from '../../services/storage/storage.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss']
})
export class WatchlistComponent implements OnInit {
  public savedMovies;

  constructor(private storageService: StorageService) {
  }

  ngOnInit() {
    this.savedMovies = this.storageService.getSavedMovies();
  }

  deleteFromWatchList(movieId: number) {
    this.storageService.deleteMovies(movieId);

    this.savedMovies = this.storageService.getSavedMovies();
  }
}
