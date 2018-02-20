import { EventEmitter } from "@angular/core/";
import { Recipe } from "./recipe.model";

export class RecipeService{

    recipeSelectedEvent = new EventEmitter<Recipe>();
   private recipes: Recipe[] = [
        new Recipe('A test recipe1','This is simple test recipe1','./assets/recipe-icon-6.png'), 
        new Recipe('A test recipe2','This is simple test recipe2','./assets/recipe-icon-6.png')
      ];
getRecipes(){
    return this.recipes.slice();
}

// onRecipeSelected(recipe){
// this.recipeSelectedEvent.emit(recipe);
// }
}