import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import {AddComponent} from './movie/add/add.component';

const routes: Routes = [
  {path: 'movies', component: MovieComponent},
  {path: 'movies/category/:categoryId', component: MovieComponent},
  {path: 'movies/add', component: AddComponent},
  {path: '', redirectTo: 'movies', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
