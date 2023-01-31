import { Schema as MongooseSchema } from 'mongoose';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateMusicDto {
  @Field(() => String)
  title: string;

  @Field(() => String)
  artist: {
    type: string;
    reaqired: true;
  };

  @Field(() => String)
  album: string;

  @Field(() => Number)
  year: number;
}

@InputType()
export class MusicDto {
  _id: MongooseSchema.Types.ObjectId;
  @Field(() => String)
  title: string;

  @Field(() => String)
  artist: string;

  @Field(() => String)
  album: string;

  @Field(() => Number)
  year: number;
}

@InputType()
export class UpdateMusicDto {
  _id: MongooseSchema.Types.ObjectId;
  @Field(() => String)
  title: string;

  @Field(() => String)
  artist: string;

  @Field(() => String)
  album: string;

  @Field(() => Number)
  year: number;
}
