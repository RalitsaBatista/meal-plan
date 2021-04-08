import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Food } from './food';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let foods = [
      { id: 1, name: 'Potato' },
      { id: 2, name: 'Banana' },
      { id: 3, name: 'Cucumber' },
      { id: 4, name: 'Carrot' },
      { id: 5, name: 'Sweet potato' },
      { id: 6, name: 'Apple' },
      { id: 7, name: 'Orange' },
      { id: 8, name: 'Avocado' },
      { id: 9, name: 'Mango' },
      { id: 10, name: 'Oatmeal' }
    ];
    return {foods};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(foods: Food[]): number {
    return foods.length > 0 ? Math.max(...foods.map(food => food.id)) + 1 : 1;
  }
}