import { Routes } from '@angular/router';

import { HomePage } from './features/home/pages/home-page';
import { StudentsPage } from './features/students/pages/students-page';
import { StudentDetailPage } from './features/students/pages/student-detail-page';
import { LayoutsPage } from './features/layouts/pages/layouts-page';
import { ProfilePage } from './features/profile/pages/profile-page';
import { ProjectConfigPage } from './features/project/pages/project-config-page';
import { SignupPage } from './features/signup-page/signup-page';

// IMPORTA TU NUEVA PAGE
import { UiComponentsPage} from './features/ui-components/pages/ui-components-page/ui-components-page';

export const routes: Routes = [

  // HOME
  {
    path: '',
    component: HomePage,
  },

  // STUDENTS
  {
    path: 'students',
    component: StudentsPage,
  },

  // STUDENT DETAIL
  {
    path: 'students/:id',
    component: StudentDetailPage,
  },

  // LAYOUTS
  {
    path: 'layouts',
    component: LayoutsPage,
  },

  // COMPONENTES
  {
    path: 'componentes',
    component: UiComponentsPage,
  },

  // SIGNUP
  {
    path: 'signup',
    component: SignupPage,
  },

  // PROFILE
  {
    path: 'profile',
    component: ProfilePage,
  },

  // PROJECT CONFIG
  {
    path: 'project-config',
    component: ProjectConfigPage,
  },

  // 404
  {
    path: '**',
    redirectTo: '',
  },

];