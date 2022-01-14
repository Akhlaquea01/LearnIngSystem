import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faStackOverflow,
  faGithub,
  faFacebook,
  faGoogle,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss'],
})
export class LoginRegisterComponent implements OnInit {
  loginForm!: FormGroup;
  singUpForm!: FormGroup;
  status: boolean = false;
  isSignedIn = false;
  constructor(library: FaIconLibrary,
    private formBuilder: FormBuilder,
    public _firebaseService: FirebaseService,
    public _router: Router) {
    library.addIcons(
      faStackOverflow,
      faGithub,
      faFacebook,
      faGoogle,
      faLinkedin
    );
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      signInEmail: new FormControl('akhlaquea01@gmail.com', [Validators.email]),
      signInPassword: new FormControl('Pass@123', [Validators.required])
    });
    this.singUpForm = new FormGroup({
      name: new FormControl('Akhlaque', [Validators.required]),
      signUpEmail: new FormControl('akhlaquea01@gmail.com',[Validators.email]),
      signUpPassword: new FormControl('Pass@123', [Validators.required])
    });

    if(localStorage.getItem('user')!==null) {
      this.isSignedIn = true;
    } else {
      this.isSignedIn = false;
    }

  }

  login() {
    console.log(this.loginForm.value);
    this.onSignIn(this.loginForm.value.signInEmail, this.loginForm.value.signInPassword);
    this._router.navigate(['/home']);
  }
  signUp() {
    console.log(this.singUpForm.value);
    this.onSignUp(this.singUpForm.value.signUpEmail, this.singUpForm.value.signUpPassword);
  }
  clickEvent() {
    this.status = !this.status;
  }
  async onSignUp(email: string, password: string) { 
    await this._firebaseService.signUp(email, password);
    if(this._firebaseService.isLoggedin) {
      this.isSignedIn = true;
      this._router.navigate(['/home']);
    }
  }
  async onSignIn(email: string, password: string) { 
    await this._firebaseService.signIn(email, password);
    if(this._firebaseService.isLoggedin) {
      this.isSignedIn = true;
      this._router.navigate(['/home']);
    }
  }
}
