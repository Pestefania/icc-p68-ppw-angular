import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth, authState } from '@angular/fire/auth';
import { map, take } from 'rxjs';

export const authGuard: CanActivateFn = () => {
  const auth = inject(Auth);
  const router = inject(Router);

  // Consume el stream directo de Firebase, espera el primer valor real y decide
  return authState(auth).pipe(
    take(1),
    map(user => (user ? true : router.createUrlTree(['/auth'])))
  );
};