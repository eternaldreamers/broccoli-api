import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import {
  CreateProblemTopicDto,
  UpdateProblemTopicDto,
} from './dto/create-problem-topic.dto';
import { ProblemTopic } from './problem-topic.entity';

@Injectable()
export class ProblemTopicService {
  constructor(
    @InjectRepository(ProblemTopic)
    private readonly problemTopicRepository: Repository<ProblemTopic>,
  ) {}

  findAll(): Promise<ProblemTopic[]> {
    return this.problemTopicRepository.find();
  }

  findOne(id: string): Promise<ProblemTopic> {
    const plat = this.problemTopicRepository.findOne({ where: { id } });
    if (!plat) {
      throw new NotFoundException(`Platform #${id} not found`);
    }
    return plat;
  }

  create(data: CreateProblemTopicDto): Promise<ProblemTopic> {
    const newUser = this.problemTopicRepository.create(data);
    return this.problemTopicRepository.save(newUser);
  }

  async update(
    id: string,
    changes: UpdateProblemTopicDto,
  ): Promise<ProblemTopic> {
    const user = await this.findOne(id);
    this.problemTopicRepository.merge(user, changes);
    return this.problemTopicRepository.save(user);
  }

  deleteById(id: string): Promise<DeleteResult> {
    return this.problemTopicRepository.delete(id);
  }
}
