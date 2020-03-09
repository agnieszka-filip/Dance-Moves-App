import { Component, OnInit, Input, } from '@angular/core';
import { DanceMove } from '../dance-move.model';
import { DanceMovesService } from '../../dance-moves.service';

@Component({
  selector: 'app-dance-move-item',
  templateUrl: './dance-move-item.component.html',
  styleUrls: ['./dance-move-item.component.scss']
})
export class DanceMoveItemComponent implements OnInit {
  @Input() danceMove: DanceMove;
  
  constructor (private danceMovesService: DanceMovesService) {
  }

  ngOnInit() {
  }

  onClicked() {
    this.danceMovesService.danceMoveClicked.emit(this.danceMove);
  }

}
