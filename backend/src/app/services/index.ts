import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { MovieDto, OmdbMovieResponse } from '../dto/index';

@Injectable()
export class MoviesService {
  async searchMovie(search: string): Promise<MovieDto> {
    const response = await axios.get<OmdbMovieResponse>(
      `http://www.omdbapi.com/?t=${search}&plot=short&apikey=f95eb1c7`,
    );
    const movie = response.data;
    return new MovieDto(movie.Title, movie.Poster, movie.Actor);
  }
}
