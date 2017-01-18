import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Angular Recipie Box</h1>
    <h3>{{currentFocus}}</h3>
    <ul>
      <li *ngFor="let currentRecipe of recipies">{{currentRecipe.title}}
      <p>{{currentRecipe.ingredients}}</p>
      <p>{{currentRecipe.directions}}</p>
      </li>
      <hr>
    </ul>
  </div>
  `
})

export class AppComponent{
  recipies: Recipe[] = [
    new Recipe('Cake', 'Box of Cake mix, egg, water', 'Add all shit together and bake' ),
    new Recipe('Baked apple', 'apple', 'cut up apple and bake')
  ]
}
export class Recipe {

  constructor(public title :string, public ingredients: string, public directions: string)
  {

  }
}
