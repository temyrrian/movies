import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {StorageService} from '../../services/storage/storage.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent implements OnInit {
  public movies: any;
  public savedMovies: any;

  constructor(private route: ActivatedRoute, private storageService: StorageService) {
  }

  ngOnInit() {
    this.route.data.subscribe((data: any) => {
      this.movies = data['popularMovies'].json().results;
    });

    this.savedMovies = this.storageService.getSavedMovies();
  }

  public saveToWatchList(item: any) {
    this.storageService.saveMovies(item);
  }

  public deleteFromWatchList(movieId: number) {
    this.storageService.deleteMovies(movieId);
  }
}
