import { AbstractControl, ValidationErrors } from '@angular/forms';
import { of, delay, map } from 'rxjs';

export function emailUniqueValidator() {
  return (control: AbstractControl) => {

    const takenEmails = ['test@gmail.com', 'admin@gmail.com'];

    return of(control.value).pipe(
      delay(800),
      map(email => {
        return takenEmails.includes(email)
          ? { emailTaken: true }
          : null;
      })
    );
  };
}