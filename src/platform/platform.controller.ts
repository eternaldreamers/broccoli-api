import { Controller, Get } from '@nestjs/common';
import { Platform } from './platform.entity';
import { PlatformService } from './platform.service';

@Controller('platforms')
export class PlatformController {
  constructor(private readonly platformService: PlatformService) {}

  @Get()
  findAll(): Promise<Platform[]> {
    return this.platformService.findAll();
  }
}
