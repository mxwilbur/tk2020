import { Component, Inject, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})


export class AppComponent {
  title = 'Turtle Krawl 5K Virtual Race';
  isAuthenticated: boolean;
  
  constructor(public oktaAuth: OktaAuthService, public router: Router) {
    // Subscribe to authentication state changes
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean)  => this.isAuthenticated = isAuthenticated
    );
  }  

  ngOnInit() {
      // Get the authentication state for immediate use
    this.oktaAuth.isAuthenticated().then((auth) => {this.isAuthenticated = auth});
  }

  logout() {
    // Terminates the session with Okta and removes current tokens.
    this.oktaAuth.logout('/');
  }
}
