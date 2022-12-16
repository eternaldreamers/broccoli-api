import { Controller, Get } from '@nestjs/common';
import { UserProblem } from './user-problem.entity';
import { UserProblemService } from './user-problem.service';

@Controller('user-problems')
export class UserProblemController {
  constructor(private readonly userProblemService: UserProblemService) {}

  @Get()
  findAll(): Promise<UserProblem[]> {
    return this.userProblemService.findAll();
  }
}
