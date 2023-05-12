export class MovieDto {
  readonly Title: string;
  readonly Poster: string;
  readonly Actors: string;

  constructor(title: string, poster: string, actors: string) {
    this.Title = title;
    this.Poster = poster;
    this.Actors = actors;
  }
}

export interface OmdbMovieResponse {
  Title: string;
  Poster: string;
  Actors: string;
}
