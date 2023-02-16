import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user = {
    "name" : "",
    "pass": ""
  }

  ngOnInit() {
  }

  login() {
    this.user.name = this.user.name;
    this.user.pass = this.user.pass;

  }
}
