import { Controller, Get } from '@nestjs/common';
import { Topic } from './topic.entity';
import { TopicService } from './topic.service';

@Controller('topics')
export class TopicController {
  constructor(private readonly topicService: TopicService) {}

  @Get()
  findAll(): Promise<Topic[]> {
    return this.topicService.findAll();
  }
}
