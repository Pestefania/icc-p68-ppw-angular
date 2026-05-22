import { Component, input } from '@angular/core';

@Component({
  selector: 'app-glass-stat-card',
  standalone: true,
  imports: [],
  templateUrl: './glass-stat-card.html',
  styleUrl: './glass-stat-card.css',
})
export class GlassStatCard {

  label = input.required<string>();
  value = input.required<string>();
  helper = input<string>('Actualizado recientemente');

}