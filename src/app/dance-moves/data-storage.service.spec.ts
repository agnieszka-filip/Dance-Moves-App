import { TestBed } from "@angular/core/testing";

import { DataStorageService } from "./data-storage.service";
import { HttpClientModule } from "@angular/common/http";
import { MockApiService } from "../mock-api.service";
import { DanceMove } from "./dance-moves-list/dance-move.model";
import { DanceMovesService } from "./dance-moves.service";

describe("DataStorageService", () => {
  let service: DataStorageService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [DataStorageService, DanceMovesService, MockApiService],
    });
    service = TestBed.get(DataStorageService);
  });

  it("should be created", () => {
    const service: DataStorageService = TestBed.get(DataStorageService);
    expect(service).toBeTruthy();
  });

  it("should retrieve dance moves via GET", () => {
    const mockApiService: MockApiService = TestBed.get(MockApiService);
    const dummyMoves: DanceMove[] = [
      {
        name: "Allegra",
        description: "Test",
        imageVideoPath: "http://test.pl",
        requiredSkills: [],
      },
    ];

    mockApiService.fetchMockDanceMoves().subscribe((dummyMoves) => {
      expect(dummyMoves.length).toBe(1);
      expect(dummyMoves).toEqual(dummyMoves);
    });
  });
});
