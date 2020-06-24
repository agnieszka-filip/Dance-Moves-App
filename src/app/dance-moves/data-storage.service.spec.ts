import { TestBed } from "@angular/core/testing";

import { DataStorageService } from "./data-storage.service";
import { HttpClientModule } from "@angular/common/http";
import { DanceMovesService } from "./dance-moves.service";
import { DanceMove } from "./dance-moves-list/dance-move.model";

describe("DataStorageService", () => {
  let service: DataStorageService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [DataStorageService, DanceMovesService],
    });
    service = TestBed.get(DataStorageService);
  });

  it("should be created", () => {
    const service: DataStorageService = TestBed.get(DataStorageService);
    expect(service).toBeTruthy();
  });
});

it("should retrieve dance moves from Firebase via GET", () => {
  TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [DataStorageService, DanceMovesService],
  });
  const service: DataStorageService = TestBed.get(DataStorageService);
  const dummyMoves: DanceMove[] = [
    {
      name: "Allegra",
      description: "Test",
      imageVideoPath: "http://test.pl",
      requiredSkills: [],
    },
  ];
  service.fetchDanceMoves().subscribe((dummyMoves) => {
    expect(dummyMoves.length).toBe(1);
    expect(dummyMoves).toEqual(dummyMoves);
  });
});
