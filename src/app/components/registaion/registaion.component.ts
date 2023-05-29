import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-registaion',
  templateUrl: './registaion.component.html',
  styleUrls: ['./registaion.component.css']
})
export class RegistaionComponent {
  email = '';
  password= '';
  
  constructor(private auth: AuthService){}

  register(){
    this.auth.register(this.email,this.password);
    this.email = '';
    this.password = '';
    console.log("register",this.register)
  }
}
