import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path:'loginForm',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: 'loginForm',
    pathMatch: 'full'
  },
  {
    path: 'signUpForm',
    component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
