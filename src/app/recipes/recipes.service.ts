import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppinglistService } from '../shopping-list/shoppinglist.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    new Recipe('Rose Milk',
      'Rose and Milk',
      'https://potatokitchen.files.wordpress.com/2019/05/rose-milk-100.jpg',
      [new Ingredient('rose', 10),
      new Ingredient('milk', 10)]),
    new Recipe('cake',
      'coco Cake',
      'https://preppykitchen.com/wp-content/uploads/2020/04/carrot-cake-Recipe-new.jpg',
      [new Ingredient('flour', 10),
      new Ingredient('milk', 10)])
  ];
  constructor(private shoppingListService: ShoppinglistService) { }

  recipeSelected = new EventEmitter<Recipe>();

  getRecipes() {
    return this.recipes.slice()
  }

  addToShoppingListService(ingredient: Ingredient[]) {

    this.shoppingListService.addIngredients(ingredient)
  }
}
