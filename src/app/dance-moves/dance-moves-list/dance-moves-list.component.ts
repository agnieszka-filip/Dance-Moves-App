import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { DanceMove } from './dance-move.model';
import { DanceMovesService } from '../dance-moves.service';


@Component({
  selector: 'app-dance-moves-list',
  templateUrl: './dance-moves-list.component.html',
  styleUrls: ['./dance-moves-list.component.scss']
})
export class DanceMovesListComponent implements OnInit, OnDestroy {
  danceMoves: DanceMove[];
  subscription: Subscription;
  
  constructor(private danceMovesService: DanceMovesService,
              private router: Router,
              private route: ActivatedRoute) {
  } 

  ngOnInit() {
    this.danceMoves = this.danceMovesService.getDanceMoves();
    this.subscription = this.danceMovesService.danceMovesChanged
      .subscribe(
        (danceMoves: DanceMove[]) => {
          this.danceMoves = danceMoves;
        }
      );
  }

  onNewDanceMove() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
