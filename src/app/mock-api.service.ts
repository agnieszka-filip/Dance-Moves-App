import { Injectable } from "@angular/core";
import { DanceMove } from "./dance-moves/dance-moves-list/dance-move.model";
import { of } from "rxjs";

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
    return of(this.mockDanceMoves);
  }
}
