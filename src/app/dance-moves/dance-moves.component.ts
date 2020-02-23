import { Component, OnInit } from '@angular/core';
import { DanceMove } from './dance-moves-list/dance-move.model';

@Component({
  selector: 'app-dance-moves',
  templateUrl: './dance-moves.component.html',
  styleUrls: ['./dance-moves.component.scss']
})
export class DanceMovesComponent implements OnInit {
  clickedDanceMove: DanceMove;
  constructor() { }

  ngOnInit() {
  }

}
