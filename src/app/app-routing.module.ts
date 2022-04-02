import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BiographyComponent } from './components/biography/biography.component';
import { FavoriteSeriesComponent } from './components/favorite-series/favorite-series.component';

const routes: Routes = [
  {path: 'series-list', component: FavoriteSeriesComponent},
  {path: 'biography', component: BiographyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
