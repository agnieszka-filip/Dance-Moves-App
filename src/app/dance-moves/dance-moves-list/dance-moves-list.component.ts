import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DanceMove } from './dance-move.model';
import { DanceMovesService } from '../dance-moves.service';

@Component({
  selector: 'app-dance-moves-list',
  templateUrl: './dance-moves-list.component.html',
  styleUrls: ['./dance-moves-list.component.scss']
})
export class DanceMovesListComponent implements OnInit {
  @Output() danceMoveWasClicked = new EventEmitter<DanceMove>();
  danceMoves: DanceMove[];
  
  constructor(private danceMovesService: DanceMovesService) {
  } 

  ngOnInit() {
    this.danceMoves = this.danceMovesService.getDanceMoves();
  }

  onDanceMoveClicked(danceMove: DanceMove): void {
    this.danceMoveWasClicked.emit(danceMove);
  }

}
