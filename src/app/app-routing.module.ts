import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsLoggedInGuard } from './guards/is-logged-in.guard';
import { HomeComponent } from './home/home.component';
import { LoginRegisterComponent } from './login-register/login-register.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate:[IsLoggedInGuard]
  },
  {
    path: 'login-register',
    component: LoginRegisterComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
