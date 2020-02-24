import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { DanceMove } from '../dance-move.model';

@Component({
  selector: 'app-dance-move-item',
  templateUrl: './dance-move-item.component.html',
  styleUrls: ['./dance-move-item.component.scss']
})
export class DanceMoveItemComponent implements OnInit {
  @Input() danceMove: DanceMove;
  @Output() danceMoveClicked = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  onClicked() {
    this.danceMoveClicked.emit();
  }

}
