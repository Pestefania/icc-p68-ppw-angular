import { Injectable, computed, inject } from '@angular/core';
import { Auth, authState, User, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { toSignal } from '@angular/core/rxjs-interop';
import { from } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private auth = inject(Auth);

  // 1. EL CAMBIO DE LA GUÍA 09-B: Tres estados (undefined = cargando, null = visitante, User = autenticado)
  user = toSignal<User | null | undefined>(authState(this.auth), {
    initialValue: undefined, // Evita decisiones prematuras en los guards
  });

  // 2. COMPATIBILIDAD: Mantenemos 'currentUser' como un computed para no romper tus componentes previos
  currentUser = computed(() => {
    const u = this.user();
    return u ? u : null;
  });

  // 3. ROL DE PRUEBA EN CLASE: Si ingresas con admin@ups.edu.ec eres admin, sino user
  role = computed<'admin' | 'user' | null>(() => {
    const u = this.user();
    if (!u) return null;
    return u.email === 'admin@ups.edu.ec' ? 'admin' : 'user';
  });

  // Métodos de autenticación usando observables
  login(email: string, password: string) {
    return from(signInWithEmailAndPassword(this.auth, email, password));
  }

  register(email: string, password: string) {
    return from(createUserWithEmailAndPassword(this.auth, email, password));
  }

  logout() {
    return from(signOut(this.auth));
  }

  // Acceso rápido al uid del usuario actual
  get uid(): string | null {
    return this.user()?.uid ?? null;
  }
}