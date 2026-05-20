import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class AppFooterComponent {

  company = 'Universidad Politécnica Salesiana';

  today = new Date();

  price = 1500;

  percentage = 0.85;

  student = 'Denisse Paredes';

}

