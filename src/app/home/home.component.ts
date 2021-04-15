import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {CardTextImageModel} from '../model/CardTextImage.model';
import { DragScrollComponent } from "ngx-drag-scroll";
import {ViewportScroller} from '@angular/common';

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('textAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1000ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('5000ms', style({ opacity: 0 }))
      ])
    ]),
  ],
})
export class HomeComponent implements OnInit {
  @ViewChild("nav", { read: DragScrollComponent }) ds: DragScrollComponent;
  imageMapHashMap = new Map<number, CardTextImageModel>();
  imageMapModel: CardTextImageModel;
  showImageTextConainter: boolean = false;
  cards: CardTextImageModel[] = [
    {
      image: '../assets/bottom-image/IMG2.png',
      imageName: ' ',
      customStyle: "img-custom-size"
    },
    {
      image: '../assets/bottom-image/IMG3.png',
      imageName: ' ',
      customStyle: "img-custom-size"

    },
    {
      image: '../assets/bottom-image/IMG4.png',
      imageName: ' ',
      customStyle: "img-custom-size"
    },
    {
      image: '../assets/bottom-image/IMG5.png',
      imageName: ' ',
      customStyle: "img-custom-size"
    },
    {
      image: '../assets/bottom-image/IMG6.png',
      imageName: ' ',
      customStyle: "img-custom-size"

    },
    {
      image: '../assets/bottom-image/IMG7.png',
      imageName: ' ',
      customStyle: "img-custom-size"
    },
    {
      image: '../assets/bottom-image/IMG8.png',
      imageName: ' ',
      customStyle: "img-custom-size"
    },
    {
      image: '../assets/bottom-image/IMG9.png',
      imageName: ' ',
      customStyle: "img-custom-size"
    },
    {
      image: '../assets/bottom-image/IMG1.png',
      imageName: ' ',
      customStyle: "img-custom-size"
    }];


  constructor(private vpScroller: ViewportScroller) { }

  ngOnInit(): void {
    this.imageMapHashMap.set(1, {
      image: '../assets/map-images/Map_1.png',
      imageName: 'Black-capped Chickadee | SUNY Oswego Student',
      customStyle: "img-custom-size-smaller"
    },
      );
    this.imageMapHashMap.set(2, {
        image: '../assets/map-images/Map_2.png',
        imageName: 'Great-Blue Heron | SUNY Oswego Student',
        customStyle: "img-custom-size-smaller"
      },
    );
    this.imageMapHashMap.set(3, {
        image: '../assets/map-images/Map_3.png',
        imageName: 'Kingfisher | SUNY Oswego Student',
          customStyle: "img-custom-size-smaller"
      },
    );
    this.imageMapHashMap.set(4, {
      image: '../assets/map-images/Map_4.png',
      imageName:'Meadow Scene | SUNY Oswego Student',
        customStyle: "img-custom-size-smaller"
      },
    );
    this.imageMapHashMap.set(5, {
      image: '../assets/map-images/Map_5.png',
        imageName: 'Woodpecker | SUNY Oswego Student',
        customStyle: "img-custom-size-smaller"
      },
    );
    this.imageMapHashMap.set(6, {
      image: '../assets/map-images/Map_6.png',
        imageName: 'Meadow Scene | SUNY Oswego Student',
        customStyle: "img-custom-size-smaller"
      },
    );
    this.imageMapHashMap.set(7, {
      image: '../assets/map-images/Map_7.png',
        imageName: 'Flower Study | SUNY Oswego Student',
        customStyle: "img-custom-size-smaller"
      },
    );
    this.imageMapHashMap.set(8, {
      image: '../assets/map-images/Map_8.png',

        imageName: 'Nuthatch | SUNY Oswego Student',
        customStyle: "img-custom-size-smaller"
      },
    );
    this.imageMapModel = this.imageMapHashMap.get(1);


  }

  moveLeft() {
    this.ds.moveLeft();
  }

  moveRight() {
    this.ds.moveRight();
  }

  onScroll(component) {
    this.vpScroller.scrollToAnchor(component);
  }

  showCardInfo(clickId){
    this.showImageTextConainter = true;
    this.imageMapModel = this.imageMapHashMap.get(clickId);
  }

  naviagateToUrl(){
    window.open("https://www.google.com/maps/dir//rice+creek/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x89d763673106f9d9:0x55fc8d59a9a6e794?sa=X&ved=2ahUKEwihv5Hkq__vAhXwEVkFHTWKB-YQ9RcwHHoECCYQBA",  '_blank')
  }

}
