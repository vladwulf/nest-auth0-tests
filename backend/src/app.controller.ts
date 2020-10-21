import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './strategies/JwtAuth.guard';

@Controller()
export class AppController {
  @UseGuards(JwtAuthGuard)
  @Get('/auth0/test')
  getHello(): string {
    return 'auth0 test works';
  }
}
