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
    new DanceMove('Elbow Aysha', 'This is just a test',
    'https://www.stockvault.net/data/2017/02/12/222400/preview16.jpg'),
    new DanceMove('Twisted Grip Hangman', 'This is just a test',
    'https://www.stockvault.net/data/2017/02/12/222401/preview16.jpg')
  ];
  

  ngOnInit() {
  }

  onDanceMoveClicked(danceMove: DanceMove): void {
    this.danceMoveWasClicked.emit(danceMove);
  }

}
