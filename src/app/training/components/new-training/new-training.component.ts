import { Component, OnInit } from "@angular/core";
import { TrainingService } from "../training.service";
import { Exercise } from "../exercise.model";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import * as fromTraining from "../training.reducer";
import * as fromRoot from "../../../app.reducer";

@Component({
  selector: "app-new-training",
  templateUrl: "./new-training.component.html",
  styleUrls: ["./new-training.component.scss"]
})
export class NewTrainingComponent implements OnInit {
  form: FormGroup;
  isLoading$: Observable<boolean>;
  exercises$: Observable<Exercise[]>;

  constructor(
    private trainingService: TrainingService,
    private fb: FormBuilder,
    private store: Store<fromTraining.State>
  ) {}

  ngOnInit(): void {
    this.isLoading$ = this.store.select(fromRoot.getIsLoading);
    this.exercises$ = this.store.select(fromTraining.getAvailableExercises);
    this.fetchExercises();
    this.initForm();
  }

  fetchExercises() {
    this.trainingService.fetchAvailableExercises();
  }

  onStartTraining() {
    this.trainingService.startExercise(this.form.value.exercise);
  }

  private initForm() {
    this.form = this.fb.group({
      exercise: ["", Validators.required]
    });
  }
}
