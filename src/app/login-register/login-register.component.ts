import { Component, OnInit } from '@angular/core';
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
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faStackOverflow,
      faGithub,
      faFacebook,
      faGoogle,
      faLinkedin
    );
  }

  ngOnInit(): void {}
  status: boolean = true;
  clickEvent() {
    this.status = !this.status;
  }
}
