import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../Shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
 @ViewChild('nameInput') name : ElementRef;
 @ViewChild('amountInput') amount : ElementRef;
 @Output() addItem = new EventEmitter<Ingredient>();
 //ItemIngredient : Ingredient
 
  constructor() { }

  ngOnInit() {
  }

  AddItems(){
  let itemToBeAdded = {
    name:this.name.nativeElement.value,
    amount:parseInt(this.amount.nativeElement.value)
  };
  console.log('item---',itemToBeAdded);
    this.addItem.emit(itemToBeAdded);
  }
}
