import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  imports: [FormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  loginobj: LoginModel = new LoginModel();
  private readonly router = inject(Router);


  onLogin() {
    if (this.loginobj.email, this.loginobj.password) {
      localStorage.setItem("newuser", this.loginobj.email)
      void this.router.navigateByUrl('/home');
    } else {
      alert('Wrong credentials');
    }
  }
  
}

class LoginModel {
  email: string;
  password: string;

  constructor() {
    this.email = '';
    this.password = '';
  }
}
