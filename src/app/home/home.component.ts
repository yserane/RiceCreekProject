import {Component, OnInit, ViewChild} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {CardTextImageModel} from '../model/CardTextImage.model';
import {DragScrollComponent} from 'ngx-drag-scroll';
import {ViewportScroller} from '@angular/common';

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('textAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('5000ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('5000ms', style({ opacity: 0 }))
      ])
    ]),
  ],
})
export class HomeComponent implements OnInit {
  @ViewChild('nav', {read: DragScrollComponent}) ds: DragScrollComponent;
  imageMapHashMap = new Map<number, CardTextImageModel>();
  imageMapModel: CardTextImageModel;
  showImageTextConainter: boolean = false;
  cards: CardTextImageModel[] = [
    {
      image: '../assets/card-images/ART_WORK _SPRING.jpeg',
      imageText: 'John Weeks painted a series of scenes accurately portraying views from the original Rice Creek building in the mid-1980’s as they changed throughout the seasons. Each landscape tracks to effects of change on the flora and fauna of Rice Creek. The first of the cycle, spring, depicts the early growth and bloom of the season.',
      imageName: 'Spring | John Weeks',
      customStyle: "img-custom-size"
    },
    {
      image: '../assets/card-images/ART_WORK _SUMMER.jpeg',
      imageText: 'Next in the seasonal cycle, summer starts with a shaded forest floor in which flowers, weeds, and ferns flourish. On the water, a mallard escorts her brood of ducklings while a muskrat forages for algae in the shallows. Summer birds have arrived to make their home.',
      imageName: 'Summer | John Weeks',
      customStyle: "img-custom-size"
    },
    {
      image: '../assets/card-images/ART_WORK _FALL.jpeg',
      imageText: 'The beautiful change in leaf color of the white ash, black cherry, beech, and aspen in the foreground marks the season. The animals are busy planning for winter: a muskrat prepares a new burrow, beaver and muskrat work on their shelters, and a red fox observes a widgeon hoping to catch a meal.',
      imageName: 'Autumn | John Weeks',
      customStyle: "img-custom-size"

    },
    {
      image: '../assets/card-images/ART_WORK _WINTER.jpeg',
      imageText: 'With the fall of leaves and the blanket of snow, most of the plant life is now obscured. While many animals are now in hibernation, the red fox and weasel hunt during daylight hours. The pileated woodpecker to the right looks for insects hidden in the sugar maple.',
      imageName: 'Winter | John Weeks',
      customStyle: "img-custom-size"
    },
    {
      image: '../assets/card-images/Student_Heron.png',
      imageText: 'Stored by Rice Creek Field Station, this ink drawing was made in 1982 by the SUNY Oswego Student PJP.  A common visitor of Rice Creek, the Great-Blue Heron can be found wading in Rice Creek’s wetlands and is characterized by its black crown and head plumes.',
      imageName: 'Great-Blue Heron | SUNY Oswego Student',
      customStyle: "img-custom-size"
    },
    {
      image: '../assets/card-images/Weeks_WoodDuck.jpg',
      imageText: 'The drawing is of a wood duck, a species of perching duck found in woodland ponds. Although not obvious here, the wood duck is an unusually colorful waterfowl, and is known for its stunning iridescent colors and ornate patterned feathers.',
      imageName: 'Wood Duck | John Weeks',
      customStyle: "img-custom-size"

    },
    {
      image: '../assets/card-images/Weeks_Kingfisher.jpg',
      imageText: 'The kingfisher is a brightly colored bird known for its large head, shar bills, and short legs and tails. Despite its name, kingfishers, have a varied diet of fish and small invertebrates.',
      imageName: 'Kingfisher | John Weeks',
      customStyle: "img-custom-size"
    },
    {
      image: '../assets/card-images/Weeks_MidnightMarauder.jpg',
      imageText: 'This “Midnight Marauder” is a great horned owl, a fitting title for the nocturnal hunter. It is colored for camouflage and its “horns” are tufts of feathers called plumicorns.',
      imageName: 'Midnight Marauder | John Weeks',
      customStyle: "img-custom-size"
    },
    {
      image: '../assets/card-images/IMG_0056 (1).JPG',
      imageText: 'The quiet forest scene was drawn by an unknown SUNY Oswego student and depicts the common foliage of Rice Creek.',
      imageName: 'Forest Scene  | SUNY Oswego Student',
      customStyle: "img-custom-size"
    },
    {
      image: '../assets/card-images/art_5_john weeks.jpg',
      imageText: 'This hummingbird can be found at Rice Creek during the summer, when it migrates to breed. Only the males have the distinctive iridescent ruby red throat.',
      imageName: 'Ruby-Throated Hummingbirds | John Weeks',
      customStyle: "img-custom-size"
    },
    {
      image: '../assets/card-images/art_4_john weeks.jpg',
      imageText: 'Red-winged blackbirds are widely found in North America. Its name comes from the bright red shoulder and yellow wing bar of the male, visible when it is flying. It prefers to inhabit wetlands, making Rice Creek a great spot to see one.',
      imageName: 'Red-Winged Blackbird  | John Weeks',
      customStyle: "img-custom-size"
    },
    {
      image: '../assets/card-images/art_3_john weeks.jpg',
      imageText: 'The yellow-bellied sapsucker is a medium-sized woodpecker. You might hear the tapping of the woodpecker before you see it - its chisel-tipped bill is perfect for finding tree sap and insects hidden in a tree.\n',
      imageName: 'Yellow-Bellied Sapsucker | John Weeks',
      customStyle: "img-custom-size"
    },
    {
      image: '../assets/card-images/Weeks_Unknown.jpg',
      imageText: 'The reddish-brown breast of the robin in a common sight in North America. It is a migratory songbird and part of the thrush family.\n',
      imageName: 'American Robins | John Weeks',
      customStyle: "img-custom-size"
    }];


  constructor(private vpScroller: ViewportScroller) { }

  ngOnInit(): void {
    this.imageMapHashMap.set(1, {
      image: '../assets/card-images/Weeks_Unknown.jpg',
      imageText: 'The reddish-brown breast of the robin in a common sight in North America. It is a migratory songbird and part of the thrush family.\n',
      imageName: 'American Robins | John Weeks',
      customStyle: "img-custom-size-smaller"
    });

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


}
