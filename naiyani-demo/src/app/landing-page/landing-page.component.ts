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

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Delay the animation
    setTimeout(() => {
      // Add the 'move-up' class to trigger the CSS animation
      this.moveLogo = true;

      // Navigate to the second page after a delay
      setTimeout(() => {
        this.router.navigate(['/signin-demo']);
      }, 2500); // Adjust the delay as needed (1 second in this example)
    }, 1000); // Adjust the delay as needed (2 seconds in this example)
  }
}
