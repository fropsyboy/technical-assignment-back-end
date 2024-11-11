import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getVenues(@Query('limit') limit: number): Promise<any> {
    const venues = await this.appService.getVenues(limit || 10); // Default limit of 10 if not specified
    return venues;
  }
}
