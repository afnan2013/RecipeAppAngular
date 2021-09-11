import { Component, OnInit } from '@angular/core';
import { Ingrediant } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingrediant[] = [
    new Ingrediant("Apples", 5),
    new Ingrediant("Tomatos", 10)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
