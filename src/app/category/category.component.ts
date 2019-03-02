import {Component, OnInit} from '@angular/core';
import {Category} from './Category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() {
  }

  title = 'Kategoriler';
  categories: Category[] = [
    {id: 1, name: 'macera'},
    {id: 2, name: 'aile'}
  ];

  ngOnInit() {
  }

}
