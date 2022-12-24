// import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GoogleModule } from './auth/google.module';
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
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DATABASE_HOST'),
        port: parseInt(configService.get<string>('DATABASE_PORT')),
        username: configService.get<string>('DATABASE_USER'),
        password: configService.get<string>('DATABASE_PASSWORD'),
        database: configService.get<string>('DATABASE_NAME'),
        synchronize: true,
        autoLoadEntities: true,
      }),
      inject: [ConfigService],
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
    GoogleModule,
  ],
})
export class AppModule {}
