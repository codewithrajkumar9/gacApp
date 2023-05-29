import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth: AngularFireAuth, private router: Router) { }

  login(email: any, password: any){
    this.fireAuth.signInWithEmailAndPassword(email,password).then(()=>{
      localStorage.setItem('token','true');
      this.router.navigate(['activity'])
    }, err=>{
        alert("Something went wrong");
        this.router.navigate(['/login']);
    })

  }

  register(email: any, password:any){
    this.fireAuth.createUserWithEmailAndPassword(email,password).then(()=>{
      alert("user Register Suceesfully");
      this.router.navigate(['/login']);
    }, err=>{
      alert("Inavlid Details");
      this.router.navigate(['/login'])
    })
  }

  logOut(){
    this.fireAuth.signOut().then(()=>{
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }, err=>{
      alert("Something went wrong");
    })
  }
}
