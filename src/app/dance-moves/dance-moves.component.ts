import { Component } from "@angular/core";
import { DataStorageService } from "./data-storage.service";

@Component({
  selector: "app-dance-moves",
  templateUrl: "./dance-moves.component.html",
  styleUrls: ["./dance-moves.component.scss"],
})
export class DanceMovesComponent {
  constructor(private dataStorageService: DataStorageService) {
    this.dataStorageService.fetchDanceMoves().subscribe();
  }
}
