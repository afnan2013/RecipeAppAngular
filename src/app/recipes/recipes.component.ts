import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipeListSelected = false;
  recipeDisplay: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeDetails(recipe: Recipe){
    this.recipeListSelected = true;
    this.recipeDisplay = recipe;
  }
}
