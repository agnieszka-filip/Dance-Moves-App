import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

import { DanceMovesService } from '../dance-moves.service';

@Component({
  selector: 'app-dance-move-edit',
  templateUrl: './dance-move-edit.component.html',
  styleUrls: ['./dance-move-edit.component.scss']
})
export class DanceMoveEditComponent implements OnInit {
  id: number;
  editMode = false;
  danceMoveForm: FormGroup;

  constructor(private route: ActivatedRoute,
  private danceMoveService: DanceMovesService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  private initForm() {
    let danceMoveName = '';
    let imageVideoPath = '';
    let description = '';

    if (this.editMode) {
      const danceMove = this.danceMoveService.getDanceMove(this.id);
      danceMoveName = danceMove.name;
      imageVideoPath = danceMove.imageVideoPath;
      description = danceMove.description;
    }
    this.danceMoveForm = new FormGroup({
      'name': new FormControl(danceMoveName),
      'imageVideoPath': new FormControl(imageVideoPath),
      'description': new FormControl(description)
    });
  }
}
