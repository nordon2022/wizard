import { Route } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { authRoutes } from './auth/auth.routes';
import { LayoutComponent } from './layout/layout.component';

export const appRoutes: Route[] = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'main', component: LayoutComponent, canActivate: [AuthGuard] },
  ...authRoutes,
  { path: '**', redirectTo: '/main', pathMatch: 'full' },
];
