import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  loginForm: FormGroup;
  signupForm: FormGroup;
  showSignUpForm: boolean = false;
  showAlert: boolean = false;
  alertMessage: string = '';

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.signupForm = this.fb.group({
      signupUsername: ['', Validators.required],
      signupPassword: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!*_])[A-Za-z\d@#$%^&+=!*_]{8,}$/
          ),
        ],
      ],
    });
  }
  login() {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username').value;
      const password = this.loginForm.get('password').value;
      if (password === 'Tahmina123@') {
        this.router.navigate(['/product-demo']);
        } else {
        this.alertMessage = 'Wrong Password! Please try again';
         this.showAlert = true;
      }

    }
  }
  signup() {
    this.router.navigate(['/product-demo']);
  }
  switchToSignupForm() {
    this.showSignUpForm = true;
  }
  switchTologinForm() {
    this.showSignUpForm = false;
  }
  closeAlert() {
    this.showAlert = false;
  }
}
