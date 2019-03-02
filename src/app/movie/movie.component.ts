import {Component, OnInit} from '@angular/core';
import {Movie} from './Movie';
import {AlertifyService} from '../services/alertify.service';
import {HttpClient} from '@angular/common/http';

declare let alertify: any;

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(private alertifyService: AlertifyService, private http: HttpClient) {
  }

  title = 'Filmler';
  filterText: string;
  movies: Movie[];

  ngOnInit() {
    this.http.get<Movie[]>('http://localhost:3000/api/movies').subscribe((data) => {
      this.movies = data;
    });
  }

  show(movie: Movie) {
    this.alertifyService.success(movie.title);
  }
}
