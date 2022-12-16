import { Controller, Get } from '@nestjs/common';
import { ProblemTopic } from './problem-topic.entity';
import { ProblemTopicService } from './problem-topic.service';

@Controller('problem-topics')
export class ProblemTopicController {
  constructor(private readonly problemTopicService: ProblemTopicService) {}

  @Get()
  findAll(): Promise<ProblemTopic[]> {
    return this.problemTopicService.findAll();
  }
}
