import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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
}
