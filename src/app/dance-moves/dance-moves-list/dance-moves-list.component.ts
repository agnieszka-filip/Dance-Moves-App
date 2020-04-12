import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DanceMove } from './dance-move.model';
import { DanceMovesService } from '../dance-moves.service';


@Component({
  selector: 'app-dance-moves-list',
  templateUrl: './dance-moves-list.component.html',
  styleUrls: ['./dance-moves-list.component.scss']
})
export class DanceMovesListComponent implements OnInit {
  danceMoves: DanceMove[];
  
  constructor(private danceMovesService: DanceMovesService,
              private router: Router,
              private route: ActivatedRoute) {
  } 

  ngOnInit() {
    this.danceMoves = this.danceMovesService.getDanceMoves();
    this.danceMovesService.danceMovesChanged
      .subscribe(
        (danceMoves: DanceMove[]) => {
          this.danceMoves = danceMoves;
        }
      );
  }

  onNewDanceMove() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
