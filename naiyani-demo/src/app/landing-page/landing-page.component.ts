import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in-out'), // Adjust the duration here (500ms)
      ]),
      transition(':leave', [
        animate('500ms ease-in-out', style({ opacity: 0 })), // Adjust the duration here (500ms)
      ]),
    ]),
  ],
})
export class LandingPageComponent {
  logoUrl: string = 'assets/images/naiyani-logo.png';
  logoState = 'in'; // Initial state
  constructor() {}
  ngOnInit(): void {}
}
