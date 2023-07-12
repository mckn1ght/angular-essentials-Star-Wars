import { Component, OnInit, Input } from '@angular/core';
import { StarWarsService } from '../star-wars.service';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() character: any;
  swService: StarWarsService;

  constructor(swService: StarWarsService) {
    this.swService = swService;
  }

  ngOnInit(): void {}

  onAssign(side: any) {
    // this.character.side = side;
    // this.sideAssigned.emit({ name: this.character.name, side: side });
    this.swService.onSideChosen({ name: this.character.name, side: side });
  }
}
