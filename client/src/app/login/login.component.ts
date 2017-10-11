import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bicycle } from './../bicycle';
import { User } from './../user';
import { BicycleService } from './../bicycle.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginuser: User = new User();
  reguser: User = new User();
  loginError: String;
  regError: String;
  sample: Bicycle = new Bicycle();
  constructor(private _api: BicycleService, private _router: Router) {
    _api.getRandomBike()
    .then((bike) => { this.sample = bike; console.log(this.sample)})
    .catch((err) => { console.log(err);})
  }

  validateLogin() {
    this._api.loginUser(this.loginuser)
    .then((user) => { this._router.navigate(['/dashboard']); })
    .catch((err) => {
      if (err.status == '401') {
        this.loginError = "No user registered with that email.";
      }
      else if (err.status == '402') {
        this.loginError = "Password is incorrect.";
      }
    })
  }

  validateReg() {
    this._api.registerUser(this.reguser)
    .then(() => {this._router.navigate(['/dashboard']); })
    .catch((err) => { this.regError = "A user with that email already exists." });
  }

}


