import { Inject, Injectable, Renderer2, RendererFactory2 } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { CookieService } from "ngx-cookie-service";

@Injectable()
export class WcagService {
  private static readonly DARK: string = "dark";
  isDarkMode = false;
  renderer2: Renderer2;
  cookieValue = "UNKNOWN";

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private rendererFactory: RendererFactory2,
    private cookieService: CookieService
  ) {
    this.renderer2 = rendererFactory.createRenderer(null, null);
  }

  onSetConstrast() {
    if (this.isDarkMode) {
      this.renderer2.removeClass(this.document.body, WcagService.DARK);
      this.cookieService.set("Mode", "UNKNOWN");
      this.cookieValue = this.cookieService.get("Mode");
    } else {
      this.renderer2.addClass(this.document.body, WcagService.DARK);
      this.cookieService.set("Mode", "dark");
      this.cookieValue = this.cookieService.get("Mode");
    }
    this.isDarkMode = !this.isDarkMode;
  }
}
