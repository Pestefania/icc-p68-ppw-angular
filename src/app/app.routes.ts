import { Routes } from '@angular/router';

import { HomePage } from './features/home/pages/home-page';
import { StudentsPage } from './features/students/pages/students-page';
import { StudentDetailPage } from './features/students/pages/student-detail-page';
import { LayoutsPage } from './features/layouts/pages/layouts-page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'students',
    component: StudentsPage,
  },
  {
    path: 'students/:id',
    component: StudentDetailPage,
  },
  {
    path:'layouts',
    component:LayoutsPage
  },
  {
    path: '**',
    redirectTo: '',
  },
];