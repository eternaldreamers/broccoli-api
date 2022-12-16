import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Platform } from './platform.entity';

@Injectable()
export class PlatformService {
  constructor(
    @InjectRepository(Platform)
    private readonly platformRepositort: Repository<Platform>,
  ) {}

  findAll(): Promise<Platform[]> {
    return this.platformRepositort.find();
  }
}
