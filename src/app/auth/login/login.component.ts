import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent  {
  GetUserName(username) {
    console.log(username);
  }
  submit(form: NgForm) {
    if (form.valid) {
      console.log('form.value');
    }
  }
}
