import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginForm } from 'src/app/services/model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginModel = new LoginForm
  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  login(form:any){
    console.log(form.value);
    // this.route.navigate(['/dashBoard'])

  }
}
