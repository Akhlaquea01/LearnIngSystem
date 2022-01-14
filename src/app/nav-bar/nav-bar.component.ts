import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private _firebaseService: FirebaseService, private _router: Router) { }

  ngOnInit(): void {
  }
 logout() {
   this._firebaseService.logout();
   this._router.navigate(['/login-register']);
 }
}
