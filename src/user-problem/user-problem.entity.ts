import { Problem } from 'src/problem/problem.entity';
import { State } from 'src/state/state.entity';
import { User } from 'src/user/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({
  name: 'user_problems',
})
export class UserProblem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'id_user',
    nullable: false,
  })
  idUser: string;

  @Column({
    name: 'id_problem',
    nullable: false,
  })
  idProblem: string;

  @Column({
    name: 'id_state',
    nullable: false,
  })
  idState: string;

  @ManyToOne(() => User, (user: User) => user.userProblem, {
    nullable: false,
  })
  @JoinColumn({ name: 'id_user' })
  user: User;

  @ManyToOne(() => Problem, (problem: Problem) => problem.userProblem, {
    nullable: false,
  })
  @JoinColumn({ name: 'id_problem' })
  problem: User;

  @ManyToOne(() => State, (state: State) => state.userProblem, {
    nullable: false,
  })
  @JoinColumn({ name: 'id_state' })
  state: User;
}
