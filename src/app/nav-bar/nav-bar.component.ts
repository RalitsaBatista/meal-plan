import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { TranslateService } from '@ngx-translate/core';
import { OwnMealComponent } from '../own-meal/own-meal.component';
import { MatDialog } from '@angular/material/dialog';
import { FoodService } from '../food.service';
import { Food } from '../food';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  selectLang:string="en";
  constructor(public auth: AuthService,public translate: TranslateService,private foodService: FoodService, private router:Router , public dialog: MatDialog, private cookieService: CookieService ) {
    translate.addLangs(['en', 'fi', 'es', 'bg' ]);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();

    //it will check for language match and if it doesn't find then it will translate to the default lang ('en')
    let currLang = browserLang.match(/en|fi|es|bg/) ? browserLang : 'en';
    if (this.cookieService.check('userLang')){
      let uLang = this.cookieService.get('userLang');
      currLang = uLang.match(/en|fi|es|bg/) ? uLang : currLang;
    }
    translate.use(currLang);
    this.selectLang = currLang;
    //console.log(browserLang);
  }
  foods: Food[] = [];

  setLanguage(lang: string):void {
    this.cookieService.set('userLang',lang,{expires: 365});
    console.log('SET userLang:',lang);
    this.translate.use(lang);
    this.selectLang = lang;
  }

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


  ngOnInit(): void {
  }

}

