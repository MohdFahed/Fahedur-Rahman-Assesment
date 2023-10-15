import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginGroup!: FormGroup;
  formSubmit: boolean = false;
  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private route: Router
  ) {
    this.loginGroup = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
    });
  }

  get formStatus() {
    return this.loginGroup.controls;
  }

  loginForm() {
    this.formSubmit = true;
    let email = this.loginGroup.get('email').value;
    let password = this.loginGroup.get('password').value;
    let storeEmail = this.loginService.loginDetails.email;
    let storePassword = this.loginService.loginDetails.password;
    if (this.formSubmit && !this.loginGroup.valid) {
      return;
    }
    if (email === storeEmail && password === storePassword) {
      this.route.navigate(['/dashboard']);
    } else {
      alert('Invalid User Name and Password..');
    }
  }
}
