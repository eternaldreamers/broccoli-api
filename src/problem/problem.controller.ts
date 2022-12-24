import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateProblemDto, UpdateProblemDto } from './dto/create-problem.dto';
import { Problem } from './problem.entity';
import { ProblemService } from './problem.service';

@Controller('problems')
export class ProblemController {
  constructor(private readonly problemService: ProblemService) {}

  @Get()
  findAll(): Promise<Problem[]> {
    return this.problemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Problem> {
    return this.problemService.findOne(id);
  }

  @Post()
  create(@Body() createUserDto: CreateProblemDto) {
    return this.problemService.create(createUserDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateProblemDto) {
    return this.problemService.update(id, payload);
  }

  @Delete(':id')
  DeleteById(@Param('id') id: string) {
    return this.problemService.deleteById(id);
  }
}
