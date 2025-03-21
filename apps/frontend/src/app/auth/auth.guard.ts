import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const token = localStorage.getItem('token'); // или можно использовать cookies
    if (token) {
      return true; // Если токен есть, разрешаем доступ
    } else {
      // Если нет токена, перенаправляем на страницу логина
      this.router.navigate(['/login']);
      return false;
    }
  }
}
