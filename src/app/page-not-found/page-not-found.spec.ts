import { TestBed } from "@angular/core/testing";
import { PageNotFoundComponent } from "./page-not-found.component";

describe("Component: Page Not Found", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageNotFoundComponent],
    });
  });

  it("should create the app", () => {
    let fixture = TestBed.createComponent(PageNotFoundComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it("should render title", () => {
    const fixture = TestBed.createComponent(PageNotFoundComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("h2").textContent).toContain(
      "Page not found!"
    );
  });
});
