import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Game } from './game.interface';
import { CreateGameDto } from './game.dto';

@Injectable()
export class GameService {
  constructor(@InjectModel('Game') private readonly gameModel: Model<Game>) {}

  async create(createGameDto: CreateGameDto): Promise<Game> {
    const createGame = new this.gameModel(createGameDto);
    return await createGame.save();
  }

  async findAll(): Promise<Game[]> {
    return await this.gameModel.find().exec();
  }
}
