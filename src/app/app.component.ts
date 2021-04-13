import {Component, HostListener} from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @HostListener('window:scroll', ['$event'])
  scrollHandler(event) {
    let element = document.querySelector('.navbar');
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('on-scroll-nav');
    } else {
      element.classList.remove('on-scroll-nav');
    }
  }


}
