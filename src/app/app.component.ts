import { Component, OnInit } from "@angular/core";

import { AuthService } from "./auth/auth.service";
import { WcagService } from "./dance-moves/wcag.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private wcagService: WcagService
  ) {}

  ngOnInit() {
    this.authService.autoLogin();
  }

  onSwitchContrast() {
    this.wcagService.onSetConstrast();
  }
}
