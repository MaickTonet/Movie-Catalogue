import { useQuery } from "@tanstack/react-query";
import { Movie, MoviesResponse } from "../types/movieTypes";
import { api } from "@/lib/api";

export const useMovieQueries = (movieId?: number) => {
  const movieQuery = useQuery<Movie, Error>({
    queryKey: ["movie", movieId],
    queryFn: async ({ queryKey: [, movieId] }) => {
      const response = await api.get<Movie>(`/movie/${movieId}`);
      return response.data;
    },
    staleTime: 1000 * 60 * 15,
    enabled: !!movieId,
  });

  const trendingMoviesQuery = useQuery<MoviesResponse>({
    queryKey: ["trendingMovies"],
    queryFn: async () => {
      const response = await api.get("/trending/movie/week");
      return response.data;
    },
    staleTime: 1000 * 60 * 15,
  });

  return {
    movie: movieQuery.data,
    trendingMovies: trendingMoviesQuery.data?.results || [],
    isLoading: trendingMoviesQuery.isLoading || movieQuery.isLoading,
    isError: trendingMoviesQuery.isError || movieQuery.isError,
    error: trendingMoviesQuery.error || movieQuery.error,
  };
};
