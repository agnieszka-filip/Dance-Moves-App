import { TestBed, getTestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { DataStorageService } from "./data-storage.service";
import { DanceMovesService } from "./dance-moves.service";

describe("DataStorageService", () => {
  let injector: TestBed;
  let service: DataStorageService;
  let httpTestingCont: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataStorageService, DanceMovesService],
    });
    injector = getTestBed();
    service = injector.get(DataStorageService);
    httpTestingCont = injector.get(HttpTestingController);
  });

  /*afterEach(() => {
    httpTestingCont.verify();
  });

  it("should return an Observable<DanceMove[]>", () => {
    const dummyMove = [
      {
        requiredSkills: "Invert",
        name: "Gemini",
        description: "A dance move",
        imageVideoPath: "http://ddd",
      },
    ];

    service.fetchDanceMoves().subscribe((danceMoves) => {
      expect(danceMoves.length).toBe(1);
      expect(danceMoves).toEqual(this.dummyMove);
    });

    const req = httpTestingCont.expectOne(
      `${service["https://dance-moves-5afda.firebaseio.com/dance-moves.json"]}/dance-moves`
    );
    expect(req.request.method).toBe("GET");
    req.flush(dummyMove);
  });*/
});
