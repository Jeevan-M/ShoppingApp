import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppinglistService } from './shoppinglist.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Array<Ingredient>
  constructor(private ingredientService: ShoppinglistService) { }

  ngOnInit(): void {
    this.ingredients = this.ingredientService.getIngredients()
    this.ingredientService.ingredientChanged.subscribe(
      (ingredient: Ingredient[]) => {
        this.ingredients = ingredient
      }
    )
  }



}
