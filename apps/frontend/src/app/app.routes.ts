import { Route } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { authRoutes } from './auth/auth.routes';
import { layoutRoutes } from './layout/layout.routes';

export const appRoutes: Route[] = [
  { path: '', children: layoutRoutes, canActivate: [AuthGuard] },
  ...authRoutes,

  { path: '**', redirectTo: '', pathMatch: 'full' },
];
