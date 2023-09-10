import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.scss'],
  animations: [
    trigger('moveAndFade', [
      state('initial', style({ transform: 'translateY(0)', opacity: 1 })),
      state('moved', style({ transform: 'translateY(-90px)', opacity: 0 })),
      transition('initial => moved', [animate('5s ease')]),
    ]),
  ],
})
export class FirstpageComponent implements OnInit {
  moveLogo: boolean = false;
  constructor(private router: Router) {}
  ngOnInit(): void {
    setTimeout(() => {
      this.moveLogo = true;
      setTimeout(() => {
        this.router.navigate(['/signin-demo']);
      }, 4100);
    }, 2100); // delay before the animation starts
  }
  navaigateToSignIn() {
    this.router.navigate(['/signin-demo']);
  }
}
