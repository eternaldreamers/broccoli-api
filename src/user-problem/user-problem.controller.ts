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
  CreateUserProblemDto,
  UpdateUserProblemDto,
} from './dto/create-user-problem.dto';
import { UserProblem } from './user-problem.entity';
import { UserProblemService } from './user-problem.service';

@Controller('user-problems')
export class UserProblemController {
  constructor(private readonly userProblemService: UserProblemService) {}

  @Get()
  findAll(): Promise<UserProblem[]> {
    return this.userProblemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<UserProblem> {
    return this.userProblemService.findOne(id);
  }

  @Post()
  create(@Body() createUserDto: CreateUserProblemDto) {
    return this.userProblemService.create(createUserDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateUserProblemDto) {
    return this.userProblemService.update(id, payload);
  }

  @Delete(':id')
  DeleteById(@Param('id') id: string) {
    return this.userProblemService.deleteById(id);
  }
}
