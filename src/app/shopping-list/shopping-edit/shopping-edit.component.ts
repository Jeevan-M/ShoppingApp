import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppinglistService } from '../shoppinglist.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') name: ElementRef;
  @ViewChild('amountInput') amount: ElementRef;
  constructor(private ingredientService: ShoppinglistService) { }

  ngOnInit(): void {
  }

  onaddIngredients() {
    this.ingredientService.addNewIngredients(new Ingredient(this.name.nativeElement.value, this.amount.nativeElement.value))

  }

}
