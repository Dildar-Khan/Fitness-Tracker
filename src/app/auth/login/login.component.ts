import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import * as fromRoot from "../../app.reducer";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  isLoading$: Observable<boolean>;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private store: Store<fromRoot.State>
  ) {}

  ngOnInit(): void {
    this.isLoading$ = this.store.select(fromRoot.getIsLoading);
    this.initForm();
  }

  onSubmit() {
    this.authService.login({
      email: this.form.value.email,
      password: this.form.value.password
    });
  }

  private initForm() {
    this.form = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }
}
