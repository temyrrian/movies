import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PopularComponent} from './pages/popular/popular.component';
import {SearchComponent} from './pages/search/search.component';
import {WatchlistComponent} from './pages/watchlist/watchlist.component';
import {PopularResolve} from './pages/popular/popular.resolver';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/popular',
    pathMatch: 'full'
  },
  {
    path: 'popular',
    component: PopularComponent,
    resolve: {
      popularMovies: PopularResolve
    }
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'watchlist',
    component: WatchlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
