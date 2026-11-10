import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Loginservice } from '../../loginservice/loginservice';

@Component({
  imports: [FormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  //loginobj: LoginModel = new LoginModel();
  loginobj: LoginModelAPI = new LoginModelAPI();

  private readonly router = inject(Router);
  loginsrv = inject(Loginservice)

  onLogin() {
    this.loginsrv.loginUser(this.loginobj).subscribe({
      next:(res:any)=>{
        localStorage.setItem("newuser", res.data.emailId)
        void this.router.navigateByUrl('/home');
      },
      error:(err:any) => {
        alert("Wrong Credentials")
      },
    })
    // if (this.loginobj.email, this.loginobj.password) {
    //   localStorage.setItem("newuser", this.loginobj.email)
    //   void this.router.navigateByUrl('/home');
    // } else {
    //   alert('Wrong credentials');
    // }
  }
  
}

// class LoginModel {
//   email: string;
//   password: string;

//   constructor() {
//     this.email = '';
//     this.password = '';
//   }
// }

export class LoginModelAPI {
  [key: string]: string;
  EmailId: string;
  Password: string;

  constructor(){
    this.EmailId = '';
    this.Password = '';
  }
}
