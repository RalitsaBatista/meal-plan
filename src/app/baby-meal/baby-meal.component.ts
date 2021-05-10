import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import { Food } from '../food';

@Component({
  selector: 'app-baby-meal',
  templateUrl: './baby-meal.component.html',
  styleUrls: ['./baby-meal.component.css']
})


export class BabyMealComponent implements OnInit {
title = 'Baby Meal';
id: number = 0;
name = [];
//itemStatus: string = "already given to the baby";
foods!: Food[];


constructor(private foodService: FoodService) { }

ngOnInit() {}

/*getFoods(): void {
  this.foodService.getFoods()
  .subscribe((foods: string | any[]) => foods = foods.slice(1, 5));
}

add(name: string): void {
  name = name.trim();
  if (!name) { return; }
  this.foodService.addFood({ name } as Food)
    .subscribe((food: Food) => {
      this.foods.push(food);
    });
}

delete(food: Food): void {
  this.foods = this.foods.filter((f: Food) => f !== food);
  this.foodService.deleteFood(food).subscribe();
}

  /*newItem(): void {
  this.added = false;
  this.item = new ITEMS();
}
  save() {
  this.item(this.item)
  .subscribe((data: any) => console.log(data), (error: any) => console.log(error));
  this.item = new this.item();

}
  onSubmit(){
  this.added = true;
  this.save();
}
gotoList() {
  this.router.navigate(['/baby-meal']);
}*/
}
