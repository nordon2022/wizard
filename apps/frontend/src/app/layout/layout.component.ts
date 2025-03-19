import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [SidebarModule, MenubarModule, ButtonModule, RouterModule, NgFor],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {
  sidebarVisible = false;

  menuItems = [
    { label: 'Главная', icon: 'pi pi-home', routerLink: '/home' },
    { label: 'Настройки', icon: 'pi pi-cog', routerLink: '/settings' },
  ];

  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
