import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
@Controller('basePath')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('TestApi')
  getHello(): string {
    return this.appService.getHello();
  }
}
