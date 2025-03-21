import { Route } from '@angular/router';

export const usersRoutes: Route[] = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  {
    path: 'users',
    loadComponent: () =>
      import('./users.component').then((c) => c.UsersComponent),
  },
];
