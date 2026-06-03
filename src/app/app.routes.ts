import { Routes } from '@angular/router';

import { HomePage } from './features/home/pages/home-page';
import { StudentsPage } from './features/students/pages/students-page';
import { StudentDetailPage } from './features/students/pages/student-detail-page';
import { LayoutsPage } from './features/layouts/pages/layouts-page';
import { ProfilePage } from './features/profile/pages/profile-page';
import { ProjectConfigPage } from './features/project/pages/project-config-page';
import { SignupPage } from './features/signup-page/signup-page';
import { UiComponentsPage } from './features/ui-components/pages/ui-components-page/ui-components-page';
/* SIMPSONS */
import { SimpsonsPageComponent } from './features/simpsons/pages/simpsons-page/simpsons-page';
import { SimpsonDetailPageComponent } from './features/simpsons/pages/simpson-detail-page/simpson-detail-page';

/* AUTH */
import { AuthPageComponent } from './features/auth/pages/auth-page/auth-page.component';

/* NUEVOS GUARDS ASYNC Y POR ROL */
import { authGuard } from './core/guards/auth.guard';
import { guestGuard } from './core/guards/guest.guard';
import { adminGuard } from './core/guards/admin.guards';

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
    path: 'layouts',
    component: LayoutsPage,
  },
  {
    path: 'ui-components',
    component: UiComponentsPage,
  },
  {
    path: 'signup',
    component: SignupPage,
  },
  {
    path: 'profile',
    component: ProfilePage,
    canActivate: [authGuard], // Protegida general
  },
  {
    path: 'project-config',
    component: ProjectConfigPage,
    canActivate: [authGuard], // Protegida general
  },

  /* SIMPSONS - AMBAS RUTAS AHORA REQUIEREN ROL ADMIN */
  {
    path: 'simpsons',
    component: SimpsonsPageComponent,
    canActivate: [adminGuard],
  },
  {
    path: 'simpsons/:id',
    component: SimpsonDetailPageComponent,
    canActivate: [adminGuard],
  },

  /* AUTH */
  {
    path: 'auth',
    component: AuthPageComponent,
    canActivate: [guestGuard],
  },

  {
    path: '**',
    redirectTo: '',
  },
];