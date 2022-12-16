import { UserProblem } from 'src/user-problem/user-problem.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'states',
})
export class State {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 30,
    nullable: false,
  })
  name: string;

  @OneToMany(
    () => UserProblem,
    (userProblem: UserProblem) => userProblem.state,
    {
      nullable: false,
      cascade: true,
    },
  )
  userProblem: UserProblem[];
}
