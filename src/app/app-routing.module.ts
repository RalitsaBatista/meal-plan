import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BabyMealComponent } from './baby-meal/baby-meal.component';
import{ AboutComponent } from './about/about.component';
import { FoodSearchComponent } from './food-search/food-search.component';
import { FoodsComponent } from './foods/foods.component';
import { OwnMealComponent } from './own-meal/own-meal.component';
import { InfoComponent } from './info/info.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { ProfileComponent } from './profile/profile.component'
//The following import is to prevent people to see the profile data unless they are logged in, provided by Angular SDK
import { AuthGuard } from '@auth0/auth0-angular';


const routes: Routes = [
  { path: '', redirectTo: 'frontpage', pathMatch: 'full'
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]

  },
  { path: 'about', component: AboutComponent },
  { path: 'frontpage', component: FrontpageComponent },
  { path: 'own-meal', component: OwnMealComponent },
  { path: 'baby-meal', component: BabyMealComponent},
  { path: 'foods', component: FoodsComponent},
  { path: 'food-search', component: FoodSearchComponent},
  { path: 'info', component: InfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
