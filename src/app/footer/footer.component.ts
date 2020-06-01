import { Component, AfterViewInit, ViewChild, ElementRef } from "@angular/core";
import { WcagService } from "../dance-moves/wcag.service";
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements AfterViewInit {
  @ViewChild("modeSwitch") modeSwitch: ElementRef<HTMLElement>;
  cookieValue = this.wcagService.cookieValue;

  constructor(
    private wcagService: WcagService,
    private cookieService: CookieService
  ) {
    this.cookieValue = this.cookieService.get("Mode");
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
