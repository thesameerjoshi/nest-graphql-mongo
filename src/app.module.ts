import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MongooseModule } from '@nestjs/mongoose';
import { MusicModule } from './music/music.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: true,
    }),
    MongooseModule.forRoot('mongodb://localhost/nest-graphql', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    MusicModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
