import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router'
import { TranslateService } from '@ngx-translate/core';
import { OwnMealComponent } from './own-meal/own-meal.component';
import { BabyMealComponent } from './baby-meal/baby-meal.component';
import { MatDialog } from '@angular/material/dialog';
import { FoodService } from './food.service';
import { Food } from './food';
import { AuthService } from '@auth0/auth0-angular';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title= "Meal Planner";
  [x: string]: any;
  constructor(public translate: TranslateService, private foodService: FoodService, private router:Router , public dialog: MatDialog, public auth: AuthService) {
    /*
    translate.addLangs(['en', 'fi', 'es', 'bg' ]);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    //it will check for language match and if it doesn't find then it will translate to the default lang ('en')
    translate.use(browserLang.match(/en|fi|es|bg/) ? browserLang : 'en');
    //translate.use('fi');
    //selectLang
    */
    //console.log('LANGO',translate.getTransLanguage());
  } 
  foods: Food[] = [];

  goToPage(pageName:string):void {
   this.router.navigate([`$(pageName)`]);
  }
  
  goToBaby(pageName:string):void{
    this.router.navigate([`$(pageName)`]);
  }
  
  goToInfo(pageName:string):void{
    this.router.navigate([`$(pageName)`]);
  }
  
  openDialog() {
    this.dialog.open(OwnMealComponent);
  }
  
}

