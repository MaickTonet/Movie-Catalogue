import { GenresResponse } from "../types/genreTypes";
import { PopularMoviesResponse } from "../types/movieTypes";
import { api } from "./api";

export const getMovieGenresList = async (): Promise<GenresResponse> => {
  const response = await api.get("/genre/movie/list");
  console.log(response.data);
  return response.data;
};

export const getTrendingMovies = async (): Promise<PopularMoviesResponse> => {
  const response = await api.get("/trending/movie/week");
  console.log(response.data);
  return response.data;
};
