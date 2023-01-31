import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { MusicDto, CreateMusicDto, UpdateMusicDto } from '../dto/music.dto';
import { Schema as MongooseSchema } from 'mongoose';
import { MusicService } from '../service/music.service';
import { Music } from '../model/music.model';

@Resolver(() => Music)
export class MusicResolver {
  constructor(private readonly musicService: MusicService) {}

  @Query(() => Music)
  async music(
    @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.musicService.findOne(_id);
  }

  @Query(() => [Music])
  async musics(@Args('limit', { type: () => Number }) limit?: number) {
    return this.musicService.findAll({ limit });
  }

  @Mutation(() => Music)
  async createMusic(@Args('createMusic') createMusicInput: CreateMusicDto) {
    return this.musicService.create(createMusicInput);
  }

  @Mutation(() => Music)
  async updateMusic(
    @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
    @Args('updateMusic') updateMusicInput: UpdateMusicDto,
  ) {
    return this.musicService.update(_id, updateMusicInput);
  }

  @Mutation(() => Music)
  async removeMusic(
    @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.musicService.remove(_id);
  }
}
