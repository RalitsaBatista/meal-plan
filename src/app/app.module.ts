import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { OwnMealComponent } from './own-meal/own-meal.component';
import { BabyMealComponent } from './baby-meal/baby-meal.component';
import { InfoComponent } from './info/info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FooterComponent } from './footer/footer.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FoodSearchComponent } from './food-search/food-search.component';
import { FoodsComponent } from './foods/foods.component';
import { FrontpageComponent } from './frontpage/frontpage.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { AuthModule, AuthHttpInterceptor } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';
import { ProfileComponent } from './profile/profile.component';
import { LogoutButtonComponent } from './logout-button/logout-button.component';
import { LoadingComponent } from './loading/loading.component';
import { LoginButtonComponent } from './login-button/login-button.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
@NgModule({
  declarations: [
    AppComponent,
    OwnMealComponent,
    BabyMealComponent,
    InfoComponent,
    FooterComponent,
    FoodSearchComponent,
    FoodsComponent,
    FrontpageComponent,
    LoginButtonComponent,
    LogoutButtonComponent,
    ProfileComponent,
    LoadingComponent,
    NavBarComponent,
    HomeComponent,
    ScrollToTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    HttpClientModule,
    AuthModule.forRoot({
      ...env.auth,
      httpInterceptor: {
        //List of URLs to work with and to tell auth0 to add the token only if it matches this url above.
        allowedList: [`${env.dev.apiUrl}/api/messages/protected-message`],
      }
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    MatDialogModule,
    MatDatepickerModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {  dataEncapsulation: false, passThruUnknownUrl: true }
    )

  ],

  entryComponents: [
    OwnMealComponent,
    BabyMealComponent,
    InfoComponent,
  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export const environment = {
  production: true,
  appRootPrefix: '/<>'
  };
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  //return new TranslateHttpLoader(http);

  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
  //return new TranslateHttpLoader(http, environment.I18N_FOLDER, ".json");
}
