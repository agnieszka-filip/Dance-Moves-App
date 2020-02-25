import { Component, OnInit, Input } from '@angular/core';
import { DanceMove } from '../dance-moves-list/dance-move.model';

@Component({
  selector: 'app-dance-moves-details',
  templateUrl: './dance-moves-details.component.html',
  styleUrls: ['./dance-moves-details.component.scss']
})
export class DanceMovesDetailsComponent implements OnInit {
  @Input() danceMove: DanceMove;

  ngOnInit() {
  }

}
