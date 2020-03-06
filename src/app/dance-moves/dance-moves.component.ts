import { Component, OnInit } from '@angular/core';
import { DanceMove } from './dance-moves-list/dance-move.model';
import { DanceMovesService } from './dance-moves.service';

@Component({
  selector: 'app-dance-moves',
  templateUrl: './dance-moves.component.html',
  styleUrls: ['./dance-moves.component.scss'],
  providers: [DanceMovesService]
})
export class DanceMovesComponent implements OnInit {
  clickedDanceMove: DanceMove;
  
  constructor(private danceMovesService: DanceMovesService) {
  }

  ngOnInit() {
    this.danceMovesService.danceMoveClicked
    .subscribe(
      (danceMove: DanceMove) => {
        this.clickedDanceMove = danceMove;
      }
    );
  }

}
