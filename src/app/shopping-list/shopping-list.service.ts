import { EventEmitter } from "@angular/core/";

import { Ingredient } from "../Shared/ingredient.model";

export class ShoppingListService{
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[]=[
        new Ingredient('Apples',3),new Ingredient('Tomatos',5)
      ];
   
      getIngredients(){
          return this.ingredients.slice();
      }

      addIngredients(ingredient:Ingredient){
          this.ingredients.push(ingredient);
          this.ingredientsChanged.emit(this.ingredients.slice());
      }
}