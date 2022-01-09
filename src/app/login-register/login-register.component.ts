import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faStackOverflow,
  faGithub,
  faFacebook,
  faGoogle,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss'],
})
export class LoginRegisterComponent implements OnInit {
  loginForm!: FormGroup;
  singUpForm!: FormGroup;
  status: boolean = false;
  constructor(library: FaIconLibrary, private formBuilder: FormBuilder,) {
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

  }

  login() {
    console.log(this.loginForm.value);
  }
  signUp() {
    console.log(this.singUpForm.value);
  }
  clickEvent() {
    this.status = !this.status;
  }
}
