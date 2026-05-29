import { Component, signal } from '@angular/core';
import {
  RouterLink,
  RouterLinkActive,
} from '@angular/router';

import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { UpperCasePipe } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    UpperCasePipe,
    UpperCasePipe
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class AppHeaderComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  readonly brand = signal('PPW Angular 21');

  // Mantenemos el usuario reactivo para pintar el correo en el HTML
  currentUser = this.authService.currentUser;

  // NUEVO: Mapeamos el signal de rol de la guía 09-B
  userRole = this.authService.role;

  logout() {
    this.authService.logout().subscribe({
      next: () => {
        this.router.navigate(['/auth']);
      }
    });
  }
}