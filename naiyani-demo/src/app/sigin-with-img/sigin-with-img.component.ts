import { Component } from '@angular/core';

@Component({
  selector: 'app-sigin-with-img',
  templateUrl: './sigin-with-img.component.html',
  styleUrls: ['./sigin-with-img.component.scss'],
})
export class SiginWithImgComponent {
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
