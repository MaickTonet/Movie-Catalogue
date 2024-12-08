import { useQuery } from "@tanstack/react-query";
import { MoviesResponse } from "../types/movieTypes";
import { api } from "@/lib/api";

export const useMovieQueries = () => {
  const trendingMoviesQuery = useQuery<MoviesResponse>({
    queryKey: ["trendingMovies"],
    queryFn: async () => {
      const response = await api.get("/trending/movie/week");
      console.log(response.data);
      return response.data;
    },
    staleTime: 1000 * 60 * 15,
  });

  return {
    trendingMovies: trendingMoviesQuery.data?.results || [],
    isLoading: trendingMoviesQuery.isLoading,
    isError: trendingMoviesQuery.isError,
    error: trendingMoviesQuery.error,
  };
};
