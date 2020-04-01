import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AcctFormComponent } from './acct-form';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home';
import { VirtualinfoComponent } from './virtualinfo';
import { LoginComponent } from './login';
import { ProtectedComponent } from './protected';
import { Routes, RouterModule, Router } from '@angular/router';
import { OktaAuthModule } from '@okta/okta-angular';
import { MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatTableModule,
  MatDividerModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VirtualinfoComponent,
    LoginComponent,
    ProtectedComponent,
    AcctFormComponent
  ],
  imports: [BrowserModule, 
    FormsModule,  
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatDividerModule,
    AppRoutingModule,
    OktaAuthModule.initAuth({
      issuer: 'https://dev-166677.okta.com/oauth2/default',
      redirectUri: 'http://localhost:4200/implicit/callback',
      clientId: '0oa33xee4pdQaEkYi4x6'
    })
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
