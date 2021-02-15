import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Get()
  default(): string {
    const num = Math.floor(Math.random() * (100 - 1) + 1);
    return `Here's a number: ${num}`;
  }

  @Get("double")
  double(@Query("number") num: number): number {
    return num * 2;
  }

  @Get("triple")
  triple(@Query("number") num: number): number {
    return num * 3;
  }
}
