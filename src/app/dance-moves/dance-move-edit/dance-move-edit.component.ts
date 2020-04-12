import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { DanceMovesService } from '../dance-moves.service';
import { DanceMove } from '../dance-moves-list/dance-move.model';

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
              private danceMoveService: DanceMovesService,
              private router: Router) { }

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

  onSubmit() {
    const newDanceMove = new DanceMove(
      this.danceMoveForm.value['name'],
      this.danceMoveForm.value['description'],
      this.danceMoveForm.value['imageVideoPath'],
      this.danceMoveForm.value['requiredSkills']);

    if (this.editMode) {
      this.danceMoveService.updateDanceMove(this.id, newDanceMove)
    } else {
      this.danceMoveService.addDanceMove(newDanceMove);
    }
    this.onCancel();
  }

  onAddSkill() {
    (<FormArray>this.danceMoveForm.get('requiredSkills')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required)
      })
    );
  }

  private initForm() {
    let danceMoveName = '';
    let imageVideoPath = '';
    let description = '';
    let requiredSkills = new FormArray([]);

    if (this.editMode) {
      const danceMove = this.danceMoveService.getDanceMove(this.id);
      danceMoveName = danceMove.name;
      imageVideoPath = danceMove.imageVideoPath;
      description = danceMove.description;
      if (danceMove['requiredSkills']) {
        for (let requiredSkill of danceMove.requiredSkills) {
          requiredSkills.push(
            new FormGroup({
              'name': new FormControl(requiredSkill.name),
           }) 
          )
        }
      }
    }
    this.danceMoveForm = new FormGroup({
      'name': new FormControl(danceMoveName, Validators.required),
      'imageVideoPath': new FormControl(imageVideoPath, Validators.required),
      'description': new FormControl(description),
      'requiredSkills': requiredSkills
    });
  }

  get controls() { 
    return (<FormArray>this.danceMoveForm.get('requiredSkills')).controls;
  }
  
  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

}
