import { Platform } from 'src/platform/platform.entity';
import { ProblemTopic } from 'src/problem-topic/problem-topic.entity';
import { UserProblem } from 'src/user-problem/user-problem.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({
  name: 'problems',
})
export class Problem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  name: string;

  @Column({
    nullable: false,
  })
  link: string;

  @Column({
    nullable: true,
  })
  rating: number;

  @Column({
    name: 'id_plataform',
    nullable: false,
  })
  idPlataform: string;

  @ManyToOne(() => Platform, (platform: Platform) => platform.problems, {
    nullable: false,
  })
  @JoinColumn({ name: 'id_plataform' })
  platform: Platform;

  @OneToMany(
    () => UserProblem,
    (userProblem: UserProblem) => userProblem.problem,
    {
      nullable: false,
      cascade: true,
    },
  )
  userProblem: UserProblem[];

  @OneToMany(
    () => ProblemTopic,
    (problemTopic: ProblemTopic) => problemTopic.problem,
    {
      nullable: true,
      cascade: true,
    },
  )
  problemTopic: ProblemTopic;
}
