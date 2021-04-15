import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'; // CLI imports router
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { DragScrollModule } from 'ngx-drag-scroll';
import { GoogleMapsModule } from '@angular/google-maps'


import { CardComponent } from './components/card/card.component';
const routes: Routes = [
  {
    path: 'about', component: AboutComponent
  }, {
    path: '', redirectTo: '/home', pathMatch: 'full'
  }, {
  path: 'home', component: HomeComponent
  }, {
    path: 'contact', component: ContactComponent

  }
]; // sets up routes constant where you define your routes

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    NavbarComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled'
    }),
    MatTabsModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    MatCardModule,
    MatGridListModule,
    DragScrollModule,
    GoogleMapsModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
