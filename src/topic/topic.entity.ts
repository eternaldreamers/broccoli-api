import { ProblemTopic } from 'src/problem-topic/problem-topic.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity({
  name: 'topics',
})
export class Topic {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: false,
  })
  name: string;

  @OneToMany(
    () => ProblemTopic,
    (problemTopic: ProblemTopic) => problemTopic.topic,
    {
      nullable: true,
      cascade: true,
    },
  )
  problemTopic: ProblemTopic;
}
