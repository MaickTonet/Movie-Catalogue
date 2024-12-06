import { useQuery } from "@tanstack/react-query";
import { getTrendingMovies } from "../lib/queries";
import { PopularMoviesResponse } from "../types/movieTypes";

export const useMovieQueries = () => {
  const trendingMoviesQuery = useQuery<PopularMoviesResponse>({
    queryKey: ["trendingMovies"],
    queryFn: getTrendingMovies,
    staleTime: 1000 * 60 * 15,
  });

  return {
    trendingMovies: trendingMoviesQuery.data?.results || [],
    isLoading: trendingMoviesQuery.isLoading,
    isError: trendingMoviesQuery.isError,
    error: trendingMoviesQuery.error,
  };
};
