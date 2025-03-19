import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);

  async login(credentials: { email: string; password: string }) {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await firstValueFrom(
        this.http.post<{ access_token: string }>(`api/auth/login`, credentials)
      );
      localStorage.setItem('token', response.access_token);
    } catch (error) {
      throw error;
    }
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
