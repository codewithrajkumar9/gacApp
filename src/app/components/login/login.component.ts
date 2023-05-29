import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email = '';
  password= '';
  
  loginForm: any = new FormGroup({
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  })
  get form(){
    return this.loginForm.controls;
  }

  constructor(private auth: AuthService){}

  login(){
    if(this.email== ''){
      alert("please enter email");
      return;
    }
    else if(this.password== ''){
      alert("please enter password");
      return;
    }

    this.auth.login(this.email,this.password);
    this.email = '';
    this.password = '';
  }
}
