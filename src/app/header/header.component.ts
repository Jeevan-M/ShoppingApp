import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() recipeOrShopping = new EventEmitter<{ recipeOrShoppingButtonValue: boolean }>();

  constructor() { }

  ngOnInit(): void {
  }
  recipeOrShoppingButton: boolean;

  buttonClicked(value) {

    this.recipeOrShopping.emit({
      recipeOrShoppingButtonValue: value
    });
  }

}
