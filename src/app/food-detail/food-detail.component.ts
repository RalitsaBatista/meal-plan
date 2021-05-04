import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Food } from '../food';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.css']
})
export class FoodDetailComponent implements OnInit {
food!: Food;

  constructor(
    private route: ActivatedRoute,
    private foodService: FoodService,
  ) {}

  ngOnInit(): void {
    this.getFood();
  }

  getFood(): void {
    const id = +!this.route.snapshot.paramMap.get('id');
    this.foodService.getFood(id)
      .subscribe(food => this.food = food);
  }
}
