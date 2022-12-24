import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import {
  CreatePlatformDto,
  UpdatePlatformDto,
} from './dto/create-platform.dto';
import { Platform } from './platform.entity';

@Injectable()
export class PlatformService {
  constructor(
    @InjectRepository(Platform)
    private readonly platformRepository: Repository<Platform>,
  ) {}

  findAll(): Promise<Platform[]> {
    return this.platformRepository.find();
  }

  findOne(id: string): Promise<Platform> {
    const plat = this.platformRepository.findOne({ where: { id } });
    if (!plat) {
      throw new NotFoundException(`Platform #${id} not found`);
    }
    return plat;
  }

  create(data: CreatePlatformDto): Promise<Platform> {
    const newUser = this.platformRepository.create(data);
    return this.platformRepository.save(newUser);
  }

  async update(id: string, changes: UpdatePlatformDto): Promise<Platform> {
    const user = await this.findOne(id);
    this.platformRepository.merge(user, changes);
    return this.platformRepository.save(user);
  }

  deleteById(id: string): Promise<DeleteResult> {
    return this.platformRepository.delete(id);
  }
}
