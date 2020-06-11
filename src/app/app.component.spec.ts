import { TestBed, async, inject } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { AppComponent } from "./app.component";
import { AuthService } from "./auth/auth.service";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { DataStorageService } from "./dance-moves/data-storage.service";
import { DanceMovesService } from "./dance-moves/dance-moves.service";
import { WcagService } from "./dance-moves/wcag.service";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [AppComponent, FooterComponent, HeaderComponent],
      providers: [
        AuthService,
        DataStorageService,
        DanceMovesService,
        WcagService,
      ],
    }).compileComponents();
  }));

  it("should create the app", async(
    inject([AuthService], (authService: AuthService) => {
      let fixture = TestBed.createComponent(AppComponent);
      let app = fixture.debugElement.componentInstance;

      expect(app).toBeTruthy();
    })
  ));

  it("should display a dropdown icon if a user is logged in", () => {
    let fixture = TestBed.createComponent(HeaderComponent);
    let component = fixture.debugElement.componentInstance;
    let compiled = fixture.debugElement.nativeElement;
    component.isAuthenticated = true;
    fixture.detectChanges();
    expect(compiled.querySelector(".app-dropdown")).toBeTruthy;
  });

  it("shouldn't display a dropdown icon if a user is not logged in", () => {
    let fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector(".app-dropdown")).not.toBeTruthy;
  });
});
