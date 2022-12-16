// import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlatformModule } from './platform/platform.module';
import { ProblemTopicModule } from './problem-topic/problem-topic.module';
import { ProblemModule } from './problem/problem.module';
import { StateModule } from './state/state.module';
import { TopicModule } from './topic/topic.module';
import { UserProblemModule } from './user-problem/user-problem.module';
import { UserModule } from './user/user.module';
// import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '192.168.1.2',
      port: 5432,
      username: 'root',
      password: 'root',
      database: 'test',
      synchronize: true,
      autoLoadEntities: true,
    }),
    // GraphQLModule.forRoot<ApolloDriverConfig>({
    //   driver: ApolloDriver,
    //   autoSchemaFile: 'schema.gql',
    // }),
    UserModule,
    ProblemModule,
    PlatformModule,
    TopicModule,
    StateModule,
    UserProblemModule,
    ProblemTopicModule,
  ],
})
export class AppModule {}
