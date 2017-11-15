import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MoviesContainerComponent } from './layout/movies-container/movies-container.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';

import { MovieDbService } from './services/movie-db/movie-db.service';

@NgModule({
  declarations: [
    AppComponent,
    MoviesContainerComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [MovieDbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
