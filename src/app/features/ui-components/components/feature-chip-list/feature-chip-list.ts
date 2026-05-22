import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-feature-chip-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-chip-list.html',
  styleUrls: ['./feature-chip-list.css'],
})
export class FeatureChipList {

  readonly title = input<string>('Características');

  readonly chips = input<string[]>([]);

}