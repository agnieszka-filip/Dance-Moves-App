import { Inject, Injectable, Renderer2, RendererFactory2 } from "@angular/core";
import { DOCUMENT } from "@angular/common";
@Injectable({
  providedIn: "root",
})
export class WcagService {
  private static readonly CONTRAST: string = "contrast";
  isHighContrast = false;
  renderer2: Renderer2;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private rendererFactory: RendererFactory2
  ) {
    this.renderer2 = rendererFactory.createRenderer(null, null);
  }
  onSetConstrast() {
    if (this.isHighContrast) {
      this.renderer2.removeClass(this.document.body, WcagService.CONTRAST);
    } else {
      this.renderer2.addClass(this.document.body, WcagService.CONTRAST);
    }
    this.isHighContrast = !this.isHighContrast;
  }
}
