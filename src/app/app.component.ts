import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from "@angular/core";

import { AuthService } from "./auth/auth.service";
import { WcagService } from "./dance-moves/wcag.service";
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild("modeSwitch") modeSwitch: ElementRef<HTMLElement>;
  cookieValue = this.wcagService.cookieValue;

  constructor(
    private authService: AuthService,
    private wcagService: WcagService,
    private cookieService: CookieService
  ) {
    this.cookieValue = this.cookieService.get("Mode");
  }

  ngOnInit(): void {
    this.authService.autoLogin();
  }

  ngAfterViewInit() {
    if (this.cookieValue === "dark") {
      this.triggerClick();
    }
  }

  onSwitchContrast() {
    this.wcagService.onSetConstrast();
  }

  triggerClick() {
    let el: HTMLElement = this.modeSwitch.nativeElement;
    el.click();
  }
}
