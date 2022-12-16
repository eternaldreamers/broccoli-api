import { Problem } from 'src/problem/problem.entity';
import { Topic } from 'src/topic/topic.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity({
  name: 'problem_topics',
})
export class ProblemTopic {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'id_problem',
    nullable: false,
  })
  idProblem: string;

  @Column({
    name: 'id_topic',
    nullable: false,
  })
  idTopic: string;

  @ManyToOne(() => Problem, (problem: Problem) => problem.problemTopic, {
    nullable: false,
  })
  @JoinColumn({ name: 'id_problem' })
  problem: Problem;

  @ManyToOne(() => Topic, (topic: Topic) => topic.problemTopic, {
    nullable: false,
  })
  @JoinColumn({ name: 'id_topic' })
  topic: Problem;
}
