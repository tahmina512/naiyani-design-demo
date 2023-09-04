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

  constructor() {
    setTimeout(() => {
      this.showUsernameButton = true;
    }, 1000); 

    setTimeout(() => {
      this.showPasswordButton = true;
    }, 1500); 
  }
  
}
