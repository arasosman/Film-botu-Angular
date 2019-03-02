import {Component, OnInit} from '@angular/core';
import {Movie} from '../Movie';
import {Category} from '../../category/Category';
import {CategoryService} from '../../services/category.service';
import {NgForm} from '@angular/forms';
import {MovieService} from '../../services/movie.service';
import {AlertifyService} from '../../services/alertify.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [CategoryService, MovieService]
})
export class AddComponent implements OnInit {

  constructor(private categoryService: CategoryService,
              private movieService: MovieService,
              private alertifyService: AlertifyService) {
  }

  model: Movie = new Movie();
  categories: Category[];


  ngOnInit() {
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  add(form: NgForm) {
    this.movieService.addMovies(this.model).subscribe((data) => {
      console.log(data);
      this.alertifyService.success('add movie success' + data.title);
    });
  }

}
