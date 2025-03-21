import { Controller, Get, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { User } from '../../auth/users/user.entity';
import { UserService } from '../../auth/users/user.service';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth() // Указывает, что этот маршрут требует JWT токен
  @ApiOperation({ summary: 'Return All users' })
  @ApiResponse({
    status: 200,
    description: 'List of users successfully retrieved',
  })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  async getAllUsers(): Promise<User[]> {
    return this.userService.findAll();
  }
}
