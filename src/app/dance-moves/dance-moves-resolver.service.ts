import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { DanceMove } from './dance-moves-list/dance-move.model';
import { DataStorageService } from './data-storage.service';

@Injectable()
export class DanceMovesResolverService implements Resolve<DanceMove[]> {
    constructor(private dataStorageService: DataStorageService) { }
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.dataStorageService.fetchDanceMoves();
    }
}