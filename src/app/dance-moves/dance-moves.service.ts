import { Injectable } from '@angular/core';

import { DanceMove } from './dance-moves-list/dance-move.model';
import { RequiredSkill } from './required-skill.model';


@Injectable()
export class DanceMovesService {

    private danceMoves: DanceMove[] = [
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
      ];

      getDanceMoves() {
          return this.danceMoves.slice();
      }

      getDanceMove(index: number) {
          return this.danceMoves[index];
      }
}
