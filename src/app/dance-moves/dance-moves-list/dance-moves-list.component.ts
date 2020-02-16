import { Component, OnInit } from '@angular/core';
import { DanceMove } from './dance-move.model';

@Component({
  selector: 'app-dance-moves-list',
  templateUrl: './dance-moves-list.component.html',
  styleUrls: ['./dance-moves-list.component.scss']
})
export class DanceMovesListComponent implements OnInit {
  danceMoves: DanceMove[] = [
    new DanceMove('A Test Dance Move', 'This is just a test', 'https://i.pinimg.com/originals/ce/18/62/ce1862200473d486cb0ee319399730e6.jpg'),
    new DanceMove('A Test Dance Move', 'This is just a test', 'https://i.pinimg.com/originals/ce/18/62/ce1862200473d486cb0ee319399730e6.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
