import { Component } from '@angular/core';

@Component({
  selector: 'app-button-signin',
  templateUrl: './button-signin.component.html',
  styleUrls: ['./button-signin.component.scss'],
})
export class ButtonSigninComponent {
  // Initially hide the buttons
  showUsernameButton = false;
  showPasswordButton = false;
  moveLogo: boolean = false;

  constructor() {
    setTimeout(() => {
      this.showUsernameButton = true;
    }, 3000);

    setTimeout(() => {
      this.showPasswordButton = true;
    }, 3500);
     setTimeout(() => {
       this.moveLogo = true;
     }, 3200);
  }
}
