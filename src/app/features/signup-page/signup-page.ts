import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { passwordMatchValidator } from '../signup-page/validators/password-match.validator';
import { emailUniqueValidator } from '../signup-page/validators/email-unique.validator';

@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup-page.html',
})
export class SignupPage {

  private fb = inject(FormBuilder);
  private router = inject(Router);

  form = this.fb.group(
    {
      email: [
        '',
        [Validators.required, Validators.email],
        [emailUniqueValidator()]
      ],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
    },
    { validators: passwordMatchValidator }
  );

  get email() {
    return this.form.get('email')!;
  }

  get password() {
    return this.form.get('password')!;
  }

  get confirmPassword() {
    return this.form.get('confirmPassword')!;
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    console.log('FORM DATA:', this.form.value);

    this.router.navigate(['/']);
  }
}