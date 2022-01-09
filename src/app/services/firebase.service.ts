import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  isLoggedin: boolean = false;
  constructor(public _firebaseAuth: AngularFireAuth) { }
  async signIn(email: string, password: string) {
    await this._firebaseAuth.signInWithEmailAndPassword(email, password).then(res => {
      this.isLoggedin = true;
      localStorage.setItem('user',JSON.stringify(res.user));
    });
  }
  async signUp(email: string, password: string) {
    await this._firebaseAuth.createUserWithEmailAndPassword(email, password).then(res => {
      this.isLoggedin = true;
      localStorage.setItem('user',JSON.stringify(res.user));
    });
  }
  logout() {
    this._firebaseAuth.signOut();
    localStorage.removeItem('user');
  }
}
