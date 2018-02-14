import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A test recipe1','This is simple test recipe1','./assets/recipe-icon-6.png'), 
    new Recipe('A test recipe2','This is simple test recipe2','./assets/recipe-icon-6.png')
  ];
  constructor() { }

  ngOnInit() {
  }

  onSelectOfRecipe(recipe : Recipe){
  this.recipeWasSelected.emit(recipe);
  }
}
