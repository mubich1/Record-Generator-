import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignUpForm } from 'src/app/services/model';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signUpFormModel:SignUpForm = new SignUpForm()
  constructor(private dataService:DataService,
              private route:Router) { }

  ngOnInit(): void {
  }

  createAccout(form:any){
    if(form.name && form.email && form.phone && (form.password == form.confirmPassword) ){
      this.dataService.createNewAccount(this.creatAccObject()).subscribe((res:any) =>{
        this.route.navigate(['login/loginForm'])
      })
    }
  }

  creatAccObject(){
    return {
      name : this.signUpFormModel.name,
      email: this.signUpFormModel.email,
      phone: this.signUpFormModel.phone,
      password: this.signUpFormModel.password
    }
  }
}
