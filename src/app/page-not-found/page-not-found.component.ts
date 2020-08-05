import { Component } from "@angular/core";
import { Router, Event, NavigationEnd } from "@angular/router";

@Component({
  selector: "app-page-not-found",
  templateUrl: "./page-not-found.component.html",
  styleUrls: ["./page-not-found.component.scss"],
})
export class PageNotFoundComponent {
  timeLeft = 10;

  constructor(private router: Router) {
    router.events.subscribe((routerEvent: Event) => {
      this.checkRouterEvent(routerEvent);
    });
  }

  checkRouterEvent(routerEvent: Event): void {
    if (routerEvent instanceof NavigationEnd) {
      const countdown = setInterval(() => {
        if (this.timeLeft > 0) {
          this.timeLeft--;
        } else if (this.timeLeft === 0) {
          this.router.navigate(["/dance-moves"]);
          clearInterval(countdown);
        }
      }, 1000);
    }
  }
}
