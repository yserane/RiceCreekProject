import {Component, Input, OnInit} from '@angular/core';
import {CardTextImageModel} from '../../model/CardTextImage.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card: CardTextImageModel;
  constructor() { }

  ngOnInit(): void {}

}
