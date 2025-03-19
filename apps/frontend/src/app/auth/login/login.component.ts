import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    MessagesModule,
  ],
  providers: [MessageService],
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);
  public messageService = inject(MessageService);

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required]], // Validators.email
    password: ['', [Validators.required]], // Validators.minLength(6)
  });

  loading = signal(false);

  passwordVisible = false;

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  async onSubmit() {
    if (this.loginForm.invalid) return;

    this.loading.set(true);
    try {
      await this.authService.login(this.loginForm.value);
      this.router.navigate(['/main']);
    } catch (error) {
      this.messageService.add({
        severity: 'error',
        summary: 'Ошибка',
        detail: 'Неверный email или пароль',
      });
    } finally {
      this.loading.set(false);
    }
  }
}
