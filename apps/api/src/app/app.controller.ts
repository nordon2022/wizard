import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('wizard')
@Controller('data')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Get all12 cats' }) // Описание операции
  @ApiResponse({ status: 200, description: 'Successfully fetched all cats' }) // Описание успешного ответа
  @ApiResponse({ status: 400, description: 'Bad Request' }) // Описание возможной ошибки
  getData() {
    return this.appService.getData();
  }
}
