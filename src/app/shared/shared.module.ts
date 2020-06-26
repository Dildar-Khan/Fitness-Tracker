import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from "./material.module";

const exportedModules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  MaterialModule,
  FlexLayoutModule
];

@NgModule({
  imports: [...exportedModules],
  exports: [...exportedModules]
})
export class SharedModule {}
