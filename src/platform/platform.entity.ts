import { Problem } from 'src/problem/problem.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'platforms',
})
export class Platform {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: false,
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: false,
  })
  link: string;

  @OneToMany(() => Problem, (problem: Problem) => problem.platform)
  problems: Problem[];
}
