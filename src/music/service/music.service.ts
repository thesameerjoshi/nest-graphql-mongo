import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema as MongooseSchema } from 'mongoose';
import { Music, MusicDocument } from '../model/music.model';
import { MusicDto, CreateMusicDto, UpdateMusicDto } from '../dto/music.dto';

@Injectable()
export class MusicService {
  constructor(
    @InjectModel(Music.name) private musicModel: Model<MusicDocument>,
  ) {}

  async create(createMusicDto: CreateMusicDto): Promise<MusicDto> {
    const createdMusic = new this.musicModel(createMusicDto);
    return createdMusic.save();
  }

  async findAll({ limit }): Promise<MusicDto[]> {
    return this.musicModel.find().limit(limit).exec();
  }

  async findOne(id: MongooseSchema.Types.ObjectId): Promise<MusicDto> {
    const music = await this.musicModel.findById(id);
    if (!music) {
      throw new Error(`Music with ${id} not found`);
    }
    return music;
    // return this.musicModel.findById(id).exec();
  }

  async update(
    id: MongooseSchema.Types.ObjectId,
    updateMusicDto: UpdateMusicDto,
  ): Promise<MusicDto> {
    return this.musicModel
      .findByIdAndUpdate(id, updateMusicDto, { new: true })
      .exec();
  }

  async remove(id: MongooseSchema.Types.ObjectId): Promise<MusicDto> {
    return this.musicModel.findByIdAndRemove(id).exec();
  }
}
