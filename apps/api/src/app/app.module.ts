import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '..//auth/users/user.entity';
import { AuthModule } from '../auth/auth.module';
import { UserModule } from '../auth/users/user.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    AuthModule,
    UserModule,
    // Конфигурация подключения к базе данных PostgreSQL
    TypeOrmModule.forRoot({
      type: 'postgres', // Тип базы данных (PostgreSQL)
      host: 'localhost', // Адрес базы данных (обычно localhost)
      port: 5432, // Порт PostgreSQL
      username: 'postgres', // Имя пользователя базы данных
      password: 'postgres', // Пароль базы данных
      database: 'postgres', // Имя базы данных
      entities: [__dirname + '/**/*.entity{.ts,.js}', User], // Путь до сущностей
      synchronize: true, // Если true, то TypeORM будет синхронизировать схему базы данных с кодом. ОСТОРОЖНО на продакшене!
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
