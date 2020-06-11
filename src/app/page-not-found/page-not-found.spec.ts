import { TestBed } from "@angular/core/testing";
import { PageNotFoundComponent } from "./page-not-found.component";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("Component: Page Not Found", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [PageNotFoundComponent],
    });
  });

  it("should render a header", () => {
    const fixture = TestBed.createComponent(PageNotFoundComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("h2").textContent).toContain(
      "Page not found!"
    );
  });
});
