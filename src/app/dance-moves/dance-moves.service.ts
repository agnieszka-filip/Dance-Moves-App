import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { DanceMove } from './dance-moves-list/dance-move.model';
import { RequiredSkill } from './required-skill.model';

@Injectable()
export class DanceMovesService {
    danceMovesChanged = new Subject<DanceMove[]>();

    /*private danceMoves: DanceMove[] = [
        new DanceMove(
            'Elbow Aysha',
            'This is just a test',
            'https://www.stockvault.net/data/2017/02/12/222400/preview16.jpg',
            [
                new RequiredSkill('Invert'),
                new RequiredSkill('Handspring')
            ]),
        new DanceMove(
            'Twisted Grip Hangman',
            'This is just a test',
            'https://www.stockvault.net/data/2017/02/12/222401/preview16.jpg',
            [
                new RequiredSkill('Handspring')
            ])
      ];*/
    
    private danceMoves: DanceMove[] = [];
      
    setDanceMoves(danceMoves: DanceMove[]) {
        this.danceMoves = danceMoves;
        this.danceMovesChanged.next(this.danceMoves.slice());
      }

      getDanceMoves() {
          return this.danceMoves.slice();
      }

      getDanceMove(index: number) {
          return this.danceMoves[index];
      }

      addDanceMove(danceMove: DanceMove) {
        this.danceMoves.push(danceMove);
        this.danceMovesChanged.next(this.danceMoves.slice());
      }

      updateDanceMove(index: number, newDanceMove: DanceMove) {
        this.danceMoves[index] = newDanceMove;
        this.danceMovesChanged.next(this.danceMoves.slice());        
     }
    
    deleteDanceMove(index: number) {
        this.danceMoves.splice(index, 1);
        this.danceMovesChanged.next(this.danceMoves.slice());
     }
}
