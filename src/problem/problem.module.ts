import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProblemController } from './problem.controller';
import { Problem } from './problem.entity';
import { ProblemService } from './problem.service';

@Module({
  imports: [TypeOrmModule.forFeature([Problem])],
  providers: [ProblemService],
  controllers: [ProblemController],
  exports: [ProblemService],
})
export class ProblemModule {}
