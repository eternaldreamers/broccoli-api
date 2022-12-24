import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import {
  CreateUserProblemDto,
  UpdateUserProblemDto,
} from './dto/create-user-problem.dto';
import { UserProblem } from './user-problem.entity';

@Injectable()
export class UserProblemService {
  constructor(
    @InjectRepository(UserProblem)
    private readonly userProblemRepository: Repository<UserProblem>,
  ) {}

  findAll(): Promise<UserProblem[]> {
    return this.userProblemRepository.find();
  }

  findOne(id: string): Promise<UserProblem> {
    const plat = this.userProblemRepository.findOne({ where: { id } });
    if (!plat) {
      throw new NotFoundException(`Platform #${id} not found`);
    }
    return plat;
  }

  create(data: CreateUserProblemDto): Promise<UserProblem> {
    const newUser = this.userProblemRepository.create(data);
    return this.userProblemRepository.save(newUser);
  }

  async update(
    id: string,
    changes: UpdateUserProblemDto,
  ): Promise<UserProblem> {
    const user = await this.findOne(id);
    this.userProblemRepository.merge(user, changes);
    return this.userProblemRepository.save(user);
  }

  deleteById(id: string): Promise<DeleteResult> {
    return this.userProblemRepository.delete(id);
  }
}
