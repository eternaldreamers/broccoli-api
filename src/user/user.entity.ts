import { UserProblem } from 'src/user-problem/user-problem.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'users',
})
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: false,
  })
  username: string;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 100,
  })
  email: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  password: string;

  @Column({
    nullable: true,
  })
  level: number;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  picture: string;

  @OneToMany(
    () => UserProblem,
    (userProblem: UserProblem) => userProblem.user,
    {
      nullable: true,
      cascade: true,
    },
  )
  userProblem: UserProblem[];
}
