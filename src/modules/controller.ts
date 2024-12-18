import { Controller, Get } from '@nestjs/common';

@Controller('/')
export class MainController {
  @Get('')
  hi() {
    return 'Hello';
  }
}
