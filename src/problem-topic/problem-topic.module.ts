import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProblemTopicController } from './problem-topic.controller';
import { ProblemTopic } from './problem-topic.entity';
import { ProblemTopicService } from './problem-topic.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProblemTopic])],
  providers: [ProblemTopicService],
  exports: [ProblemTopicService],
  controllers: [ProblemTopicController],
})
export class ProblemTopicModule {}
