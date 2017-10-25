import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

import 'rxjs/add/operator/debounceTime';

import {MovieDbService} from '../../services/movie-db/movie-db.service';
import {StorageService} from '../../services/storage/storage.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public control: FormControl;
  public movies: any;

  private minLengthsOfSearchString = 2;

  constructor(public movieDbService: MovieDbService, private storageService: StorageService) {
    this.control = new FormControl('');

    this.movies = [];
  }

  ngOnInit() {
    this.control.valueChanges.debounceTime(500).subscribe((value: string) => {
      if (value.length > this.minLengthsOfSearchString) {
        this.movieDbService.searchMovies(value).subscribe((response) => {
          this.movies = response.json().results;
        });
      }
    });
  }

  public saveToWatchList(item: any) {
    this.storageService.saveMovies(item);
  }

  public deleteFromWatchList(movieId: number) {
    this.storageService.deleteMovies(movieId);
  }
}
