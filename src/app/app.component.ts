import { Component, OnInit } from "@angular/core";

import { AuthService } from "./auth/auth.service";
import { WcagService } from "./dance-moves/wcag.service";
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  cookieValue = "UNKNOWN";

  constructor(
    private authService: AuthService,
    private wcagService: WcagService,
    private cookieService: CookieService
  ) {
    this.cookieValue = this.cookieService.get("Mode");
    if (this.cookieValue == "dark") {
      this.wcagService.onSetConstrast();
    }
  }

  ngOnInit(): void {
    this.authService.autoLogin();
  }

  onSwitchContrast() {
    this.wcagService.onSetConstrast();
    this.cookieService.set("Mode", "dark");
  }
}
