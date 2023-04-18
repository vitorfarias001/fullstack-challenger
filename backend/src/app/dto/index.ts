export class MovieDto {
  readonly Title: string;
  readonly Poster: string;
  readonly Actor: string;

  constructor(title: string, poster: string, actor: string) {
    this.Title = title;
    this.Poster = poster;
    this.Actor = actor;
  }
}

export interface OmdbMovieResponse {
  Title: string;
  Poster: string;
  Actor: string;
}
