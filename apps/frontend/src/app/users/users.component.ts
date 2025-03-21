import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PanelModule } from 'primeng/panel'; // Импортируем компонент Panel
import { TableModule } from 'primeng/table';
import { User, UsersService } from './users.service';

@Component({
  selector: 'app-users',
  standalone: true,
  providers: [UsersService],
  imports: [CommonModule, TableModule, PanelModule], // Импортируем PrimeNG Table
  templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  loading = true;
  error = '';

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Ошибка загрузки пользователей';
        this.loading = false;
        console.error(err);
      },
    });
  }
}
