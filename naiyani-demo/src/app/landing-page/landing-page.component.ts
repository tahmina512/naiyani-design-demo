import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  logoUrl: string = 'assets/images/naiyani-logo.png';
  constructor() {}
  ngOnInit(): void {}
}
