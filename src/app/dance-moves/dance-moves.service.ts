import { DanceMove } from './dance-moves-list/dance-move.model';

export class DanceMovesService {
    private danceMoves: DanceMove[] = [
        new DanceMove('Elbow Aysha', 'This is just a test',
        'https://www.stockvault.net/data/2017/02/12/222400/preview16.jpg'),
        new DanceMove('Twisted Grip Hangman', 'This is just a test',
        'https://www.stockvault.net/data/2017/02/12/222401/preview16.jpg')
      ];

      getDanceMoves() {
          return this.danceMoves.slice();
      }
}