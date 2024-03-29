import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger/dist';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @ApiTags('API')
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
