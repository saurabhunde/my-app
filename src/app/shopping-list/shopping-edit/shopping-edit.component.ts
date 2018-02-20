import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../Shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
 @ViewChild('nameInput') name : ElementRef;
 @ViewChild('amountInput') amount : ElementRef;
 //ItemIngredient : Ingredient
 
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  AddItems(){
  // let itemToBeAdded = {
  //   name:this.name.nativeElement.value,
  //   amount:parseInt(this.amount.nativeElement.value)
  // };
  const ingredName = this.name.nativeElement.value
  const ingredAmount = this.amount.nativeElement.value
  const newIngred = new Ingredient(ingredName,ingredAmount);

  //   this.addItem.emit(newIngred);
   this.shoppingListService.addIngredients(newIngred);
  }
}
