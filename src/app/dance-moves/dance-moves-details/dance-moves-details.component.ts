import { Component, OnInit } from '@angular/core';
import { DanceMove } from '../dance-moves-list/dance-move.model';
import { ActivatedRoute, Params } from '@angular/router';
import { DanceMovesService } from '../dance-moves.service';

@Component({
  selector: 'app-dance-moves-details',
  templateUrl: './dance-moves-details.component.html',
  styleUrls: ['./dance-moves-details.component.scss']
})
export class DanceMovesDetailsComponent implements OnInit {
  danceMove: DanceMove;
  id: number;

  constructor (private danceMovesService: DanceMovesService,
               private route: ActivatedRoute) { 
               }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.danceMove = this.danceMovesService.getDanceMove(this.id);
      }
    );
  }
}
