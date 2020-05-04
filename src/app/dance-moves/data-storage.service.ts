import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { map, tap, take, exhaustMap } from "rxjs/operators";

import { DanceMovesService } from "./dance-moves.service";
import { DanceMove } from "./dance-moves-list/dance-move.model";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private danceMovesService: DanceMovesService,
    private authService: AuthService
  ) {}

  storeDanceMoves() {
    const danceMoves = this.danceMovesService.getDanceMoves();
    this.http
      .put(
        "https://dance-moves-5afda.firebaseio.com/dance-moves.json",
        danceMoves
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  fetchDanceMoves() {
    return this.http
      .get<DanceMove[]>(
        "https://dance-moves-5afda.firebaseio.com/dance-moves.json"
      )
      .pipe(
        map((danceMoves) => {
          return danceMoves.map((danceMove) => {
            return {
              ...danceMove,
              requiredSkills: danceMove.requiredSkills
                ? danceMove.requiredSkills
                : [],
            };
          });
        }),
        tap((danceMoves) => {
          this.danceMovesService.setDanceMoves(danceMoves);
        })
      );
  }
}
