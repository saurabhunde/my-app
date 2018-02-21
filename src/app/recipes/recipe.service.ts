import { EventEmitter } from "@angular/core/";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../Shared/ingredient.model";

export class RecipeService{

    recipeSelectedEvent = new EventEmitter<Recipe>();
   private recipes: Recipe[] = [
        new Recipe('Chicken Fry',
        'This is recipe for  Chicken fry',
        './assets/chicken.jpeg',
        [new Ingredient('chicken',1),new Ingredient('Chicken Masala',1)]), 
        new Recipe('Burger',
        'This is recipe for burger',
        './assets/burger.jpg',
        [new Ingredient('buns',2),new Ingredient('wada',1)])
      ];
getRecipes(){
    return this.recipes.slice();
}

// onRecipeSelected(recipe){
// this.recipeSelectedEvent.emit(recipe);
// }
}