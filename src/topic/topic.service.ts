import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateTopicDto, UpdateTopicDto } from './dto/create-topic.dto';
import { Topic } from './topic.entity';

@Injectable()
export class TopicService {
  constructor(
    @InjectRepository(Topic)
    private readonly topicRepository: Repository<Topic>,
  ) {}

  findAll(): Promise<Topic[]> {
    return this.topicRepository.find();
  }

  findOne(id: string): Promise<Topic> {
    const plat = this.topicRepository.findOne({ where: { id } });
    if (!plat) {
      throw new NotFoundException(`Platform #${id} not found`);
    }
    return plat;
  }

  create(data: CreateTopicDto): Promise<Topic> {
    const newUser = this.topicRepository.create(data);
    return this.topicRepository.save(newUser);
  }

  async update(id: string, changes: UpdateTopicDto): Promise<Topic> {
    const user = await this.findOne(id);
    this.topicRepository.merge(user, changes);
    return this.topicRepository.save(user);
  }

  deleteById(id: string): Promise<DeleteResult> {
    return this.topicRepository.delete(id);
  }
}
