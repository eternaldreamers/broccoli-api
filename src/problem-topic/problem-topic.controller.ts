import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  CreateProblemTopicDto,
  UpdateProblemTopicDto,
} from './dto/create-problem-topic.dto';
import { ProblemTopic } from './problem-topic.entity';
import { ProblemTopicService } from './problem-topic.service';

@Controller('problem-topics')
export class ProblemTopicController {
  constructor(private readonly problemTopicService: ProblemTopicService) {}

  @Get()
  findAll(): Promise<ProblemTopic[]> {
    return this.problemTopicService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ProblemTopic> {
    return this.problemTopicService.findOne(id);
  }

  @Post()
  create(@Body() createUserDto: CreateProblemTopicDto) {
    return this.problemTopicService.create(createUserDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateProblemTopicDto) {
    return this.problemTopicService.update(id, payload);
  }

  @Delete(':id')
  DeleteById(@Param('id') id: string) {
    return this.problemTopicService.deleteById(id);
  }
}
