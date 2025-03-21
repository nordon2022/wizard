import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity'; // Импортируем сущность User
import { UserService } from './user.service'; // Импортируем сервис UserService
import { UserController } from './users.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Подключаем сущность User к модулю TypeORM
  providers: [UserService], // Регистрируем UserService как провайдер
  exports: [UserService], // Экспортируем UserService, чтобы его можно было использовать в других модулях
  controllers: [UserController],
})
export class UserModule {}
