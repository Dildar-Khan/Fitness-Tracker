import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { AuthService } from "../auth.service";
import { Observable } from "rxjs";
import * as fromRoot from "../../app.reducer";
import { Store } from "@ngrx/store";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"]
})
export class SignupComponent implements OnInit {
  form: FormGroup;
  maxDate;
  isLoading$: Observable<boolean>;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private store: Store<fromRoot.State>
  ) {}

  ngOnInit(): void {
    this.isLoading$ = this.store.select(fromRoot.getIsLoading);
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
    this.initForm();
  }

  onSubmit() {
    this.authService.registerUser({
      email: this.form.value.email,
      password: this.form.value.password
    });
  }

  private initForm() {
    this.form = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
      birthdate: "",
      agree: ""
    });
  }
}
