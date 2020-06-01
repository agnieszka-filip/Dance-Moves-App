import { Component, OnInit } from "@angular/core";
import { SideNavService } from "../side-nav.service";

@Component({
  selector: "app-side-navbar",
  templateUrl: "./side-navbar.component.html",
  styleUrls: ["./side-navbar.component.scss"],
})
export class SideNavbarComponent implements OnInit {
  constructor(public sideNavService: SideNavService) {}

  ngOnInit(): void {}
}
