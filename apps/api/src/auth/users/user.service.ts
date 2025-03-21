import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'; // если используешь TypeORM
import { Repository } from 'typeorm';
import { User } from './user.entity'; // или модель данных

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  async findByEmail(email: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { email } });
  }

  async createUser(createUserDto: any): Promise<User[]> {
    const user = this.userRepository.create(createUserDto);
    return this.userRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }
}
