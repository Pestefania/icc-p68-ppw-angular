import { Component, signal } from '@angular/core';
import {
  RouterLink,
  RouterLinkActive,
} from '@angular/router';

import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    RouterLinkActive,
    UpperCasePipe,
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class AppHeaderComponent {

  readonly brand = signal('PPW Angular 21');

}
