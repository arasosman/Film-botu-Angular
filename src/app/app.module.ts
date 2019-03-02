import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavComponent} from './nav/nav.component';
import {MovieComponent} from './movie/movie.component';
import {CategoryComponent} from './category/category.component';
import {MovieFilterPipe} from './movie/movie-filter.pipe';
import {FormsModule} from '@angular/forms';
import {AlertifyService} from './services/alertify.service';
import {HttpClientModule} from '@angular/common/http';
import { AddComponent } from './movie/add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MovieComponent,
    CategoryComponent,
    MovieFilterPipe,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AlertifyService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
