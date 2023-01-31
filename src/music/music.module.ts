import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
// import { MusicSchema } from './model/music.model';
import { MusicSchema, Music } from './model/music.model';
import { MusicService } from './service/music.service';
import { MusicResolver } from './resolver/music.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Music.name, schema: MusicSchema }]),
  ],
  providers: [MusicService, MusicResolver],
})
export class MusicModule {}
