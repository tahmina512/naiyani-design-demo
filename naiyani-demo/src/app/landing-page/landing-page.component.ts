import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  logoUrl: string = 'assets/images/image001.gif';
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
          this.router.navigate(['/signin-demo']);
        }, 2800); // Adjust the pause duration as needed (1 second in this example)
      }, 3450); // Adjust the pause duration as needed (1 second in this example)
    }, 1000); //delay before the animation starts 
  }
}
