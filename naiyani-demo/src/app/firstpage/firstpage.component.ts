import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.scss'],
})
export class FirstpageComponent implements OnInit {
  moveLogo: boolean = false;
  constructor(private router: Router) {}
  ngOnInit(): void {
    setTimeout(() => {
      this.moveLogo = true;

      // Pause after fading out before navigating
      setTimeout(() => {
        // Navigate to the sign-in page using Angular's router
        this.router.navigate(['/signin-demo']);
      }, 4185);
    }, 1500); // delay before the animation starts
  }
}
