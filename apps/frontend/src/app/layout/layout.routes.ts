import { Routes } from '@angular/router';
import { usersRoutes } from '../users/users.routes';
import { LayoutComponent } from './layout.component';

export const layoutRoutes: Routes = [
  { path: '', component: LayoutComponent, children: [...usersRoutes] },
];
