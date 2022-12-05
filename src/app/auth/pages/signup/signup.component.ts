import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { matchValidator } from '../../../core/utils/form-validators';
import { AuthService } from 'src/app/core';
import { StorageService } from '../../../core/services/storage.service';
import { Router } from '@angular/router';
import { ErrorCode } from 'src/app/core/constants/error-code';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.maxLength(50),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(40),
      matchValidator('confirmPassword', true),
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      matchValidator('password'),
    ]),
  });
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = 'Cannot signup';

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.router.navigate(['/dashboard']);
    }
  }

  get username() {
    return this.signupForm.get('username');
  }

  get password() {
    return this.signupForm.get('password');
  }

  get email() {
    return this.signupForm.get('email');
  }

  get confirmPassword() {
    return this.signupForm.get('confirmPassword');
  }

  signup() {
    if (this.signupForm.valid) {
      const { username, email, password } = this.signupForm.value;

      this.authService.register(username, email, password).subscribe({
        next: (data) => {
          console.log(data);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
        },
        error: (err) => {
          this.errorMessage =
            ErrorCode[err.error.message as keyof typeof ErrorCode];
          this.isSignUpFailed = true;
        },
      });
    }
  }
}
