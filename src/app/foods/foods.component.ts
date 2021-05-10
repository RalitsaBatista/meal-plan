import { Component, OnInit } from '@angular/core';
import { Food } from '../food';
import { FoodService } from '../food.service';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable,of,from } from 'rxjs';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent implements OnInit {

 foods! : Food[] ;
  foods2!: Observable<Food[]>;
  foodsList = [];

  foods3!: Observable<Food[]>;
 submitted= false;

  constructor(private foodService: FoodService) {}

  ngOnInit() {

    this.getFoods();

    /*this.foods2.subscribe((foodsData: Food[]) => {
      this.foodsList = [];
      foodsData.forEach((food: Food) => {
        console.log('Food id:',food.id);
        console.log('Food name:',food.name);

          //this.foodsList.push(food);
      });
    });
    this.foodService.getUsages();*/

  }
  getFoods(): void {
    this.foodService.getFoods()
    .subscribe(foods => this.foods = foods);
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
    this.foods = this.foods.filter(f => f !== food);
    this.foodService.deleteFood(food).subscribe();
  }

  edit(food: Food): void {
    this.foods = this.foods.filter(f => f !== food);
    //this.foodService.editFood(food).subscribe();
  }
}














/* Database Firebase
  ngOnInit():void{}

  saveFood():void
  {
    this.foodService.create(this.food).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
    })
  }
  newFood():void{
    this.submitted = false;
    //this.food = new Food();  }

}
}*/
