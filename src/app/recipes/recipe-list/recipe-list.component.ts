import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Rose Milk',
      'Rose and Milk',
      'https://potatokitchen.files.wordpress.com/2019/05/rose-milk-100.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
