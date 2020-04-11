import { Component, OnInit } from '@angular/core';

import { DanceMovesService } from './dance-moves.service';

@Component({
  selector: 'app-dance-moves',
  templateUrl: './dance-moves.component.html',
  styleUrls: ['./dance-moves.component.scss'],
  providers: [DanceMovesService]
})
export class DanceMovesComponent implements OnInit {
  
  constructor() {
  }

  ngOnInit() {
  }
}
