import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    trigger('fadeOut', [
      state('void', style({ opacity: 1 })),
      transition(':leave', [animate('1s', style({ opacity: 0 }))]),
    ]),
  ],
})
export class LandingPageComponent implements OnInit {
  logoUrl: string = 'assets/images/6.gif';
  moveLogo: boolean = false;
  fadeLogo: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.moveLogo = true;

      // Pause for a brief moment before fading out
      setTimeout(() => {
        this.fadeLogo = true;

        // Pause after fading out before navigating
        setTimeout(() => {
          // Navigate to the sign-in page using Angular's router
          this.router.navigate(['/siginImg']);
        }, 2400); // fadeout and
      }, 3450); // move and fade start
    }, 1000); // delay before the animation starts
  }
}
