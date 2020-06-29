import { Injectable } from "@angular/core";
import { DanceMove } from "./dance-moves/dance-moves-list/dance-move.model";
import { of } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class MockApiService {
  mockDanceMoves: DanceMove[] = [
    {
      name: "Allegra",
      description: "Test",
      imageVideoPath: "http://test.pl",
      requiredSkills: [],
    },
  ];
  constructor() {}

  fetchMockDanceMoves() {
    return of(this.mockDanceMoves).pipe(
      map((mockDanceMoves) => {
        return mockDanceMoves.map((mockDanceMove) => {
          return {
            ...mockDanceMove,
            requiredSkills: mockDanceMove.requiredSkills
              ? mockDanceMove.requiredSkills
              : [],
          };
        });
      })
    );
  }
}
