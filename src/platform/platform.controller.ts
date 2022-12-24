import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  CreatePlatformDto,
  UpdatePlatformDto,
} from './dto/create-platform.dto';
import { Platform } from './platform.entity';
import { PlatformService } from './platform.service';

@Controller('platforms')
export class PlatformController {
  constructor(private readonly platformService: PlatformService) {}

  @Get()
  findAll(): Promise<Platform[]> {
    return this.platformService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Platform> {
    return this.platformService.findOne(id);
  }

  @Post()
  create(@Body() createUserDto: CreatePlatformDto) {
    return this.platformService.create(createUserDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdatePlatformDto) {
    return this.platformService.update(id, payload);
  }

  @Delete(':id')
  DeleteById(@Param('id') id: string) {
    return this.platformService.deleteById(id);
  }
}
