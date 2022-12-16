import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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
}
