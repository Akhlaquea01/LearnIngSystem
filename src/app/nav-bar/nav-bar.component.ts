import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  userName: any;

  constructor(private _firebaseService: FirebaseService, private _router: Router) { }

  ngOnInit(): void {
    var User = localStorage.getItem('user');
    this.userName=User!==null?JSON.parse(User).providerData[0].email:"User Name";
    console.log(this.userName);
    
  }
 logout() {
   this._firebaseService.logout();
   this._router.navigate(['/login-register']);
 }
}
