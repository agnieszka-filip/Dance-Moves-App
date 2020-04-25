import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DanceMovesService } from './dance-moves.service';

@Injectable()
export class DataStorageService {
    constructor(private http: HttpClient,
        private danceMovesService: DanceMovesService) {}
    
    storeDanceMoves() {
        const danceMoves = this.danceMovesService.getDanceMoves();
        this.http
            .put('https://dance-moves-5afda.firebaseio.com/dance-moves.json', danceMoves)
            .subscribe(response => {
                console.log(response);
            });
    }
}