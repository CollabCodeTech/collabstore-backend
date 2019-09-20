import { Controller, Get } from '@nestjs/common';
import { Game } from './game.interface';

@Controller('game')
export class GameController {
  @Get('overview')
  getAllOverview(): Game[] {
    return [
      {
        id: 123,
        src: '/img/game.png',
        alt: 'Imagem do Game',
        title: 'Moonlighter',
        price: 599.9,
        stars: 3,
      },
      {
        id: 123,
        src: '/img/game.png',
        alt: 'Imagem do Game',
        title: 'Moonlighter',
        price: 599.9,
        stars: 3,
      },
      {
        id: 123,
        src: '/img/game.png',
        alt: 'Imagem do Game',
        title: 'Moonlighter',
        price: 599.9,
        stars: 3,
      },
    ];
  }
}
