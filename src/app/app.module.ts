import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AngularFireModule} from '@angular/fire/compat';
import { FirebaseService } from './services/firebase.service';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [AppComponent, LoginRegisterComponent, HomeComponent, NavBarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule, FormsModule, ReactiveFormsModule, AngularFireModule.initializeApp({
      apiKey: "AIzaSyBtnTVIzlljXpK9ZFSRy6P3BmOr0BEC7P0",
      authDomain: "learningsystem-42599.firebaseapp.com",
      projectId: "learningsystem-42599",
      storageBucket: "learningsystem-42599.appspot.com",
      messagingSenderId: "835586390276",
      appId: "1:835586390276:web:e1f86061b7e21fb4edb851",
      measurementId: "G-43NTN9R41Q"
    })
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent],
})
export class AppModule { }
