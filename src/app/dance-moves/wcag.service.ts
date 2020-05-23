import { Inject, Injectable, Renderer2, RendererFactory2 } from "@angular/core";
import { DOCUMENT } from "@angular/common";

@Injectable()
export class WcagService {
  private static readonly DARK: string = "dark";
  isDarkMode = false;
  renderer2: Renderer2;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private rendererFactory: RendererFactory2
  ) {
    this.renderer2 = rendererFactory.createRenderer(null, null);
  }

  onSetConstrast() {
    if (this.isDarkMode) {
      this.renderer2.removeClass(this.document.body, WcagService.DARK);
    } else {
      this.renderer2.addClass(this.document.body, WcagService.DARK);
    }
    this.isDarkMode = !this.isDarkMode;
  }
}
