import {Component, OnInit} from '@angular/core';
import {Movie} from './Movie';
import {AlertifyService} from '../services/alertify.service';

declare let alertify: any;

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(private alertifyService: AlertifyService) {
  }

  title = 'Filmler';
  filterText: string;
  movies: Movie[] = [
    {
      id: 1,
      name: 'test1',
      description: 'chjaschjas',
      img: 'https://iasbh.tmgrup.com.tr/e7ced0/0/0/0/0/0/0?u=https://isbh.tmgrup.com.tr/sb/album/2018/06/01/1527849920125.jpg&mw=752&mh=700&l=1'
    },
    {
      id: 2,
      name: 'test2',
      description: 'sacascascxzcA',
      img: 'https://iasbh.tmgrup.com.tr/e7ced0/0/0/0/0/0/0?u=https://isbh.tmgrup.com.tr/sb/album/2018/06/01/1527849920125.jpg&mw=752&mh=700&l=1'
    }
  ];

  ngOnInit() {
  }

  show(movie: Movie) {
    this.alertifyService.success(movie.name);
  }
}
