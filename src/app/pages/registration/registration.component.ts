import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent{
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password1: new FormControl('', [Validators.minLength(6), Validators.required]),
    password2: new FormControl('', [Validators.minLength(6), Validators.required]),
  });

  error = false;

  constructor(private router: Router, private authService: AuthService) { }

  registration(): void {
    this.error = false;
    if (this.form.valid) {
      if (this.form.value.password1 === this.form.value.password2) {
        this.authService.createUser(this.form.value.email, this.form.value.password1);
        this.router.navigateByUrl('/login');
        return;
      }
    }
    this.error = true;
  }
  /*registration(): void(){

  }*/

  /*form: FormGroup;
  error = false;
  errorMessage = '';

constructor(private fb: FormBuilder, private authService: AuthService) {}
ngOnInit() {
this.form = this.fb.group({
          email: ['', Validators.compose([
              Validators.required,
              this.isEmail
          ])],
          password: ['', Validators.required],
          confirmPassword: ['', Validators.compose([
              Validators.required,
              this.isEqualPassword.bind(this)
          ])],
      });
}
isEmail(control: FormControl): {[s: string]: boolean} {
      if (!control.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
          return {noEmail: true};
      }
  }

  isEqualPassword(control: FormControl): {[s: string]: boolean} {
      if (!this.form) {
          return {passwordsNotMatch: true};

      }
      if (control.value !== this.form.controls['password'].value) {
          return {passwordsNotMatch: true};
      }
  }
registration() {
    this.authService.createUser(this.form.value);
  }*/
}
