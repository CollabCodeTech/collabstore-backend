import { Controller, Get, Body, Post } from '@nestjs/common';
import { Game } from './game.interface';
import { GameService } from './game.service';
import { CreateGameDto } from './game.dto';

@Controller('game')
export class GameController {
  constructor(private readonly service: GameService) {}

  @Get('overview')
  async getAllOverview(): Promise<Game[]> {
    return await this.service.findAll();
  }

  @Post()
  async create(@Body() createGameDto: CreateGameDto) {
    return await this.service.create(createGameDto);
  }
}
