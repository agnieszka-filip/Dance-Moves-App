import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Observable } from "rxjs";

import { AuthService } from "./auth.service";
import { AuthResponseData } from "./auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"],
})
export class AuthComponent {
  constructor(private authService: AuthService, private router: Router) {}

  isLoginMode = true;
  isLoading = false;
  error: string = null;
  isEmailInputClicked = false;

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onShowEmailAlert() {
    this.isEmailInputClicked = true;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    let authObs: Observable<AuthResponseData>;

    this.isLoading = true;
    if (this.isLoginMode) {
      authObs = this.authService.login(email, password);
    } else {
      authObs = this.authService.signup(email, password);
    }

    authObs.subscribe(
      (responseData) => {
        this.isLoading = false;
        this.router.navigate(["/dance-moves"]);
      },
      (errorMessage) => {
        this.error = errorMessage;
        this.isLoading = false;
      }
    );

    form.reset();
  }
}
