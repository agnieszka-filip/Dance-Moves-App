import { Injectable } from '@angular/core'
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router'

import { DanceMove } from './dance-moves-list/dance-move.model'
import { DataStorageService } from './data-storage.service'
import { DanceMovesService } from './dance-moves.service'

@Injectable()
export class DanceMovesResolverService implements Resolve<DanceMove[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private danceMovesService: DanceMovesService,
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const danceMoves = this.danceMovesService.getDanceMoves()

    if (danceMoves.length === 0) {
      return this.dataStorageService.fetchDanceMoves()
    } else {
      return danceMoves
    }
  }
}
