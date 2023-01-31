import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

@ObjectType()
@Schema()
export class Music {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String)
  @Prop()
  title: string;

  @Field(() => String)
  @Prop()
  artist: string;

  @Field(() => String)
  @Prop()
  album: string;

  @Field(() => Number)
  @Prop()
  year: number;
}

export type MusicDocument = Music & Document;

export const MusicSchema = SchemaFactory.createForClass(Music);
