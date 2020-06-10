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

  /*it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    //const app = TestBed.inject(AppComponent);
    const authService = TestBed.inject(AuthService);
    const router = TestBed.inject(Router);
    const httpClient = TestBed.inject(HttpClient);
    //fixture.detectChanges();
    expect(app).toBeTruthy();*/
  it("should create the app", async(
    inject([AuthService], (authService: AuthService) => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;

      expect(app).toBeTruthy();
    })
  ));
});
