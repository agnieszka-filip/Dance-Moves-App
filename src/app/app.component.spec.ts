import { TestBed, async, inject, fakeAsync, tick } from "@angular/core/testing";
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
});
