import { MoviesResponse } from "@/types/movieTypes";
import { GenresResponse } from "../types/genreTypes";
import { api } from "./api";

export const getMovieGenresList = async (): Promise<GenresResponse> => {
  const response = await api.get("/genre/movie/list");
  console.log(response.data);
  return response.data;
};

export const getTrendingMovies = async (): Promise<MoviesResponse> => {
  const response = await api.get("/trending/movie/week");
  console.log(response.data);
  return response.data;
};

export const getMoviesByGenre = async (genreId: number): Promise<MoviesResponse> => {
  const response = await api.get(`/discover/movie?with_genres=${genreId}`);
  console.log(response.data);
  return response.data;
};