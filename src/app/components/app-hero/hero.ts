import { Component, computed, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class AppHeroComponent {

  private router = inject(Router);

  readonly title = signal('Cristina Loja');

  readonly topics = signal([
    'Angular',
    'Tailwind',
    'TypeScript',
    'Responsive Design',
    'Standalone Components',
    'DaisyUI'
  ]);

  readonly subtitle = computed(() =>
    `Temas activos: ${this.topics().length}`
  );

  goToStudentsPage(): void {
    this.router.navigate(['/students']);
  }

}