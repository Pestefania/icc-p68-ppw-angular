import { Component, signal } from '@angular/core';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-students-page',
  imports: [RouterLink],
  templateUrl: './students-page.html',
  styleUrl: './students-page.css',
})
export class StudentsPage {

  readonly students = signal([
    {
      id: 1,
      name: 'Juan Perez',
    },
    {
      id: 2,
      name: 'Diego Perez',
    },
    {
      id: 3,
      name: 'Maria Perez',
    },
    {
      id: 4,
      name: 'Jose Perez',
    },
    {
      id: 5,
      name: 'Ana Perez',
    },
  ]);

}