import { Component,OnInit, Output } from '@angular/core';
import { async } from '@firebase/util';
// import * as EventEmitter from 'events';
import { FirebaseService } from './services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'LearningSystem';
  // isSignedIn = false;
  // @Output() isLogout=new EventEmitter<void>()
  constructor(public _firebaseService:FirebaseService ) { }
  ngOnInit() { 
    // if(localStorage.getItem('user')!==null) {
    //   this.isSignedIn = true;
    // } else {
    //   this.isSignedIn = false;
    // }
    
  }

  // async onSignUp(email: string, password: string) { 
  //   await this._firebaseService.signUp(email, password);
  //   if(this._firebaseService.isLoggedin) {
  //     this.isSignedIn = true;
  //   }
  // }
  // async onSignIn(email: string, password: string) { 
  //   await this._firebaseService.signUp(email, password);
  //   if(this._firebaseService.isLoggedin) {
  //     this.isSignedIn = true;
  //   }
  // }

  logout() {
    this._firebaseService.logout();
    // this.isLogout.emit()
  }
}
