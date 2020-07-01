import { TestBed, ComponentFixture } from "@angular/core/testing";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { of, from } from "rxjs";

import { DanceMovesDetailsComponent } from "./dance-moves-details.component";
import { DanceMovesService } from "../dance-moves.service";
import { DropdownDirective } from "./.././../dropdown.directive";
import { DanceMove } from "../dance-moves-list/dance-move.model";

describe("Dance Moves Details Component", () => {
  let fixture: ComponentFixture<DanceMovesDetailsComponent>;
  let router: Router;
  let mockDanceMovesService;
  let danceMove: DanceMove;

  beforeEach(() => {
    mockDanceMovesService = jasmine.createSpyObj(["getDanceMove"]);

    TestBed.configureTestingModule({
      declarations: [DropdownDirective, DanceMovesDetailsComponent],
      imports: [RouterTestingModule.withRoutes([])],
      providers: [
        { provide: ActivatedRoute, useValue: { params: from([{ id: "1" }]) } },
        { provide: DanceMovesService, useValue: mockDanceMovesService },
      ],
    });
    fixture = TestBed.createComponent(DanceMovesDetailsComponent);
    router = TestBed.get(Router);
    danceMove = {
      name: "Seahorse",
      description: "A very pretty move",
      imageVideoPath: "",
      requiredSkills: [],
    };

    mockDanceMovesService.getDanceMove.and.returnValue(danceMove);
  });

  it("should render the name of the dance move in the h2 tag", (done) => {
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector("h1").textContent).toContain(
      "Seahorse"
    );
    done();
  });
});
