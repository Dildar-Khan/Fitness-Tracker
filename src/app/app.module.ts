import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { WelcomeComponent } from "./welcome/welcome.component";
import { RouterModule } from "@angular/router";
import { SidenavComponent } from "./shared/sidenav/sidenav.component";
import { ToolbarComponent } from "./shared/toolbar/toolbar.component";
import { SidenavListComponent } from "./shared/sidenav-list/sidenav-list.component";
import { StopTrainingComponent } from "./training/components/current-training/stop-training.component";
import { AuthService } from "./auth/auth.service";
import { TrainingService } from "./training/components/training.service";
import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { UIService } from "./shared/ui.service";
import { AuthModule } from "./auth/auth.module";
import { SharedModule } from "./shared/shared.module";
import { StoreModule } from "@ngrx/store";
import { reducers } from "./app.reducer";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SidenavComponent,
    ToolbarComponent,
    SidenavListComponent,
    StopTrainingComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    SharedModule,
    AuthModule,
    AppRoutingModule,
    RouterModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [AuthService, TrainingService, UIService],
  bootstrap: [AppComponent],
  entryComponents: [StopTrainingComponent]
})
export class AppModule {}
