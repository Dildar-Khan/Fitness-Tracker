import { NgModule } from "@angular/core";

import { TrainingRoutingModule } from "./training-routing.module";
import { CurrentTrainingComponent } from "./current-training/current-training.component";
import { NewTrainingComponent } from "./new-training/new-training.component";
import { PastTrainingComponent } from "./past-training/past-training.component";
import { TrainingComponent } from "./training/training.component";
import { SharedModule } from "src/app/shared/shared.module";
import { StoreModule } from "@ngrx/store";
import { trainingReducer } from "./training.reducer";

@NgModule({
  declarations: [
    TrainingComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingComponent
  ],
  imports: [
    SharedModule,
    TrainingRoutingModule,
    StoreModule.forFeature("training", trainingReducer)
  ]
})
export class TrainingModule {}
