import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-button-signin',
  templateUrl: './button-signin.component.html',
  styleUrls: ['./button-signin.component.scss'],
})
export class ButtonSigninComponent implements OnInit {
  // Initially hide the buttons
  showUsernameButton = false;
  showPasswordButton = false;
  moveLogo: boolean = false;

  constructor(private router: Router) {}
  ngOnInit(): void {
    setTimeout(() => {
      this.showUsernameButton = true;
    }, 3000);

    setTimeout(() => {
      this.showPasswordButton = true;
    }, 3500);
    setTimeout(() => {
      this.moveLogo = true;
      setTimeout(() => {
        this.router.navigate(['/leads']);
      }, 3300);
    }, 3200);
  }
}
