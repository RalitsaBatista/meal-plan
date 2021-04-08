import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  
})
export class LoginButtonComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }
  //This connection is using Auth0 development keys. Auth0 development keys are intended for testing and are not recommended for Production environments. This connection should be configured with your own keys to enable SSO, federated logout, and other features. More information about Social Connection developer keys.
  
  loginWithRedirect(): void {
    this.auth.loginWithRedirect();
  }

}
