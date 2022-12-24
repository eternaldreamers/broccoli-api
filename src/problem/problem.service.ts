import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateProblemDto, UpdateProblemDto } from './dto/create-problem.dto';
import { Problem } from './problem.entity';

@Injectable()
export class ProblemService {
  constructor(
    @InjectRepository(Problem)
    private readonly problemRepository: Repository<Problem>,
  ) {}

  findAll(): Promise<Problem[]> {
    return this.problemRepository.find();
  }

  findOne(id: string): Promise<Problem> {
    const plat = this.problemRepository.findOne({ where: { id } });
    if (!plat) {
      throw new NotFoundException(`Platform #${id} not found`);
    }
    return plat;
  }

  create(data: CreateProblemDto): Promise<Problem> {
    const newUser = this.problemRepository.create(data);
    return this.problemRepository.save(newUser);
  }

  async update(id: string, changes: UpdateProblemDto): Promise<Problem> {
    const user = await this.findOne(id);
    this.problemRepository.merge(user, changes);
    return this.problemRepository.save(user);
  }

  deleteById(id: string): Promise<DeleteResult> {
    return this.problemRepository.delete(id);
  }
}
