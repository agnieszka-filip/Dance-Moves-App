import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SideNavService {
  isSideNavHidden: boolean = true;

  constructor() {}

  toggleSideNav(): void {
    this.isSideNavHidden = !this.isSideNavHidden;
  }
}
