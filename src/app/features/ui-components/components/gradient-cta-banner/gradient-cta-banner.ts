import { Component, input } from '@angular/core';

@Component({
  selector: 'app-gradient-cta-banner',
  standalone: true,
  imports: [],
  templateUrl: './gradient-cta-banner.html',
  styleUrl: './gradient-cta-banner.css',
})
export class GradientCtaBanner {

  eyebrow = input<string>('Componente destacado');
  title = input.required<string>();
  description = input.required<string>();
  actionLabel = input<string>('Ver mas');

}