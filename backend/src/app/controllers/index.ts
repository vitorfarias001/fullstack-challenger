import { Controller, Get, Query } from '@nestjs/common';
import { MoviesService } from '../services/index';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  async searchMovie(@Query('title') title: string) {
    const result = await this.moviesService.searchMovie(title);
    return {
      title: result.Title,
      poster: result.Poster,
      actors: result.Actors,
    };
  }
}
