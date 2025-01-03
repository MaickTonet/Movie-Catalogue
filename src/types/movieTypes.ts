import { Genre } from './genreTypes';

export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  adult: boolean;
  genres: Genre[];
  popularity: number;
  release_date: string;
  vote_average: number;
  vote_count: number;
}

export interface MoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
