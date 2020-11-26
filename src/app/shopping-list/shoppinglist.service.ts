import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppinglistService {
  ingredientChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Array<Ingredient> = [
    new Ingredient('apple', 100)
  ];
  constructor() { }

  addNewIngredients(ingredient: Ingredient) {
    this.ingredients.push(ingredient)
    this.ingredientChanged.emit(this.ingredients.slice())
  }

  getIngredients() {
    return this.ingredients.slice()
  }

  addIngredients(ingredient: Ingredient[]) {
    this.ingredients.push(...ingredient)
    this.ingredientChanged.emit(this.ingredients.slice())
  }
}
