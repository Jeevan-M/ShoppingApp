import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ShoppingApp';
  recipeOrShoppingValue: boolean;
  constructor() { }

  recipeOrShoppingButton(buttonValue: { recipeOrShoppingButtonValue: boolean }) {
    this.recipeOrShoppingValue = buttonValue.recipeOrShoppingButtonValue;
  }
}
