import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Router } from '@angular/router';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  // animations: [
  //   trigger('fadeInOut', [
  //     state('in', style({ opacity: 1 })),
  //     transition(':enter', [
  //       style({ opacity: 0 }),
  //       animate('3000ms ease-in-out'), // Adjust the duration here (500ms)
  //     ]),
  //     transition(':leave', [
  //       animate('3000ms ease-in-out', style({ opacity: 0 })), // Adjust the duration here (500ms)
  //     ]),
  //   ]),
  // ],
})
export class LandingPageComponent {
  logoUrl: string = 'assets/images/image001.gif';
  // logoState = 'in'; // Initial state
  constructor(private router: Router) {}
  ngOnInit(): void {
  //   if (this.router.url !== '/signin') {
  //     setTimeout(() => {
  //       // Navigate to the second page
  //       this.router.navigate(['/signin']);
  //     }, 7000);
  //   }
   }
}
