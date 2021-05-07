import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  ngOnInit(): void {
  }

  constructor(public translate: TranslateService,private cookieService: CookieService) {translate.addLangs(['en', 'fi', 'es', 'bg' ]);
  translate.setDefaultLang('en');
  const browserLang = translate.getBrowserLang();


  //it will check for language match and if it doesn't find then it will translate to the default lang ('en')
  let currLang = browserLang.match(/en|fi|es|bg/) ? browserLang : 'en';
  if (this.cookieService.check('userLang')){
    let uLang = this.cookieService.get('userLang');
    currLang = uLang.match(/en|fi|es|bg/) ? uLang : currLang;
  }


}
}
