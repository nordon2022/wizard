import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '..//auth/users/user.entity';
import { AuthModule } from '../auth/auth.module';
import { UserModule } from '../auth/users/user.module';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      // Настройка ConfigModule
      isGlobal: true, // Делает конфигурацию доступной во всем приложении
      envFilePath: '.env', // Указывает путь к файлу .env
    }),
    AuthModule,
    UserModule,
    // Конфигурация подключения к базе данных PostgreSQL
    TypeOrmModule.forRoot({
      type: 'postgres', // Тип базы данных (PostgreSQL)
      host: process.env.DB_HOST, // Адрес базы данных (обычно localhost)
      port: +process.env.DB_PORT, // Порт PostgreSQL
      username: process.env.DB_USERNAME, // Имя пользователя базы данных
      password: process.env.DB_PASSWORD, // Пароль базы данных
      database: process.env.DB_DATABASE, // Имя базы данных
      entities: [__dirname + '/**/*.entity{.ts,.js}', User], // Путь до сущностей
      synchronize: true, // Если true, то TypeORM будет синхронизировать схему базы данных с кодом. ОСТОРОЖНО на продакшене!
    }),
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
