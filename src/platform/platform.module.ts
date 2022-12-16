import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlatformController } from './platform.controller';
import { Platform } from './platform.entity';
import { PlatformService } from './platform.service';

@Module({
  imports: [TypeOrmModule.forFeature([Platform])],
  providers: [PlatformService],
  exports: [PlatformService],
  controllers: [PlatformController],
})
export class PlatformModule {}
