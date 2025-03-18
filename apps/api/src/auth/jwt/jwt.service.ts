import { Injectable } from '@nestjs/common';
import { JwtService as JwtLibService } from '@nestjs/jwt'; // Импортируем JwtService из @nestjs/jwt

export interface JwtPayload {
  email: string; // Email пользователя
  sub: number; // ID пользователя (например)
}

@Injectable()
export class JwtService {
  constructor(private readonly jwtService: JwtLibService) {}

  // Генерация JWT
  generateToken(payload: JwtPayload): string {
    return this.jwtService.sign(payload); // Создание токена
  }

  // Валидация JWT
  validateToken(token: string): JwtPayload {
    try {
      return this.jwtService.verify(token); // Проверка токена
    } catch (error) {
      throw new Error('Invalid token'); // Ошибка, если токен недействителен
    }
  }
}
