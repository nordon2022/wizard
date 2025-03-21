import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number; // ID пользователя, автоматически генерируется

  @Column({ unique: true })
  email: string; // Email пользователя, который должен быть уникальным

  @Column()
  password: string; // Хешированный пароль пользователя
}
