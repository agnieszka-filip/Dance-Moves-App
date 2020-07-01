import {
  TestBed,
  ComponentFixture,
  fakeAsync,
  tick,
} from "@angular/core/testing";
import { DanceMovesDetailsComponent } from "./dance-moves-details.component";
import { DanceMovesService } from "../dance-moves.service";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { of, from } from "rxjs";
import { DropdownDirective } from "./.././../dropdown.directive";
import { RouterTestingModule } from "@angular/router/testing";
import { By } from "@angular/platform-browser";

describe("Dance Moves Details Component", () => {
  let fixture: ComponentFixture<DanceMovesDetailsComponent>;
  let router: Router;
  let mockActivatedRoute, mockDanceMovesService, mockRouter;

  beforeEach(() => {
    mockDanceMovesService = jasmine.createSpyObj(["getDanceMove"]);

    TestBed.configureTestingModule({
      declarations: [DropdownDirective, DanceMovesDetailsComponent],
      imports: [RouterTestingModule.withRoutes([])],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: DanceMovesService, useValue: mockDanceMovesService },
        {
          provide: ActivatedRoute,
          useValue: { params: from([{ id: 1 }]) },
        },
      ],
    });
    fixture = TestBed.createComponent(DanceMovesDetailsComponent);
    router = TestBed.get(Router);

    mockDanceMovesService.getDanceMove.and.returnValue(
      of({
        id: 1,
        name: "Seahorse",
        description: "A very pretty move",
        requiredSkills: [],
      })
    );
  });

  it("should render the name of the dance move in the h2 tag", () => {
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector("h1").textContent).toContain(
      "Seahorse"
    );
  });
});
