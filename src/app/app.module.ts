import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {
MatButtonModule, MatIconModule, MatCardModule, MatRippleModule,
MatNativeDateModule, MatInputModule
} from '@angular/material';

import {AppComponent} from './app.component';

import {AppRoutingModule} from './app-routing.module';
import {MovieDbService} from './services/movie-db/movie-db.service';
import {MoviesContainerComponent} from './layout/movies-container/movies-container.component';
import {SidebarComponent} from './layout/sidebar/sidebar.component';
import {MovieItemComponent} from './layout/movies-container/movie-item/movie-item.component';
import {PopularComponent} from './pages/popular/popular.component';
import {SearchComponent} from './pages/search/search.component';
import {WatchlistComponent} from './pages/watchlist/watchlist.component';
import {PopularResolve} from './pages/popular/popular.resolver';
import {StorageService} from './services/storage/storage.service';

const MATERIAL_MODULES = [MatIconModule, MatCardModule, MatButtonModule, MatRippleModule, MatInputModule];

@NgModule({
  declarations: [
    AppComponent,
    MoviesContainerComponent,
    SidebarComponent,
    MovieItemComponent,
    PopularComponent,
    SearchComponent,
    WatchlistComponent
  ],
  imports: [
    ...MATERIAL_MODULES,
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    MovieDbService,
    StorageService,
    PopularResolve
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
