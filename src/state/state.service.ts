import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateStateDto, UpdateStateDto } from './dto/create-state.dto';
import { State } from './state.entity';

@Injectable()
export class StateService {
  constructor(
    @InjectRepository(State)
    private readonly stateRepository: Repository<State>,
  ) {}

  findAll(): Promise<State[]> {
    return this.stateRepository.find();
  }

  findOne(id: string): Promise<State> {
    const plat = this.stateRepository.findOne({ where: { id } });
    if (!plat) {
      throw new NotFoundException(`Platform #${id} not found`);
    }
    return plat;
  }

  create(data: CreateStateDto): Promise<State> {
    const newUser = this.stateRepository.create(data);
    return this.stateRepository.save(newUser);
  }

  async update(id: string, changes: UpdateStateDto): Promise<State> {
    const user = await this.findOne(id);
    this.stateRepository.merge(user, changes);
    return this.stateRepository.save(user);
  }

  deleteById(id: string): Promise<DeleteResult> {
    return this.stateRepository.delete(id);
  }
}
