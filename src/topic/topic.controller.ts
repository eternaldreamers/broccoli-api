import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTopicDto, UpdateTopicDto } from './dto/create-topic.dto';
import { Topic } from './topic.entity';
import { TopicService } from './topic.service';

@Controller('topics')
export class TopicController {
  constructor(private readonly topicService: TopicService) {}

  @Get()
  findAll(): Promise<Topic[]> {
    return this.topicService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Topic> {
    return this.topicService.findOne(id);
  }

  @Post()
  create(@Body() createUserDto: CreateTopicDto) {
    return this.topicService.create(createUserDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateTopicDto) {
    return this.topicService.update(id, payload);
  }

  @Delete(':id')
  DeleteById(@Param('id') id: string) {
    return this.topicService.deleteById(id);
  }
}
