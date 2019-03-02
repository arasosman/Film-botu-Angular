import {Component, OnInit} from '@angular/core';
import {Movie} from './Movie';
import {AlertifyService} from '../services/alertify.service';
import {MovieService} from '../services/movie.service';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

declare let alertify: any;

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  providers: [MovieService]
})
export class MovieComponent implements OnInit {

  constructor(private alertifyService: AlertifyService,
              private http: HttpClient,
              private movieService: MovieService,
              private activatedRoute: ActivatedRoute) {
  }

  title = 'Filmler';
  filterText: string;
  movies: Movie[];

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.movieService.getMovies(params.categoryId).subscribe((data) => {
        this.movies = data;
      });
    });

  }

  show(movie: Movie) {
    this.alertifyService.success(movie.title);
  }
}
