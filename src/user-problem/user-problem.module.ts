import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserProblemController } from './user-problem.controller';
import { UserProblem } from './user-problem.entity';
import { UserProblemService } from './user-problem.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserProblem])],
  providers: [UserProblemService],
  exports: [UserProblemService],
  controllers: [UserProblemController],
})
export class UserProblemModule {}
