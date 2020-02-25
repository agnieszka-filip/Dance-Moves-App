import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DanceMove } from './dance-move.model';

@Component({
  selector: 'app-dance-moves-list',
  templateUrl: './dance-moves-list.component.html',
  styleUrls: ['./dance-moves-list.component.scss']
})
export class DanceMovesListComponent implements OnInit {
  @Output() danceMoveWasClicked = new EventEmitter<DanceMove>();
  danceMoves: DanceMove[] = [
    new DanceMove('Iron X', 'This is just a test',
    'https://i.pinimg.com/originals/ce/18/62/ce1862200473d486cb0ee319399730e6.jpg'),
    new DanceMove('Titanic', 'This is just a test',
    'https://i.pinimg.com/originals/49/2b/51/492b515fd3421f1580a6e44e5ae82c6d.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

  onDanceMoveClicked(danceMove: DanceMove): void {
    this.danceMoveWasClicked.emit(danceMove);
  }

}
