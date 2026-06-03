import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Auth, authState } from '@angular/fire/auth';
import { map, take } from 'rxjs';

export const adminGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const auth = inject(Auth);
  const router = inject(Router);

  // Usamos authState reactivo con RxJS tal como exige la guía 09-B
  return authState(auth).pipe(
    take(1),
    map(user => {
      // Si no hay sesión iniciada, lo mandamos a loguearse
      if (!user) return router.createUrlTree(['/auth']);

      // Usamos la lógica de simulación por correo de la guía:
      const isAdmin = user.email === 'admin@ups.edu.ec';
      
      // Si es el administrador pasa, si es un usuario común lo regresa al inicio
      return isAdmin ? true : router.createUrlTree(['/']);
    })
  );
};