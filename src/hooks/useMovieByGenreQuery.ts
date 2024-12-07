import { getMoviesByGenre } from "../lib/queries";
import { MoviesResponse } from "../types/movieTypes";
import { useQuery } from "@tanstack/react-query";

export const useMoviesByGenreQuery = (genreId: number) => {
  const moviesByGenreQuery = useQuery<MoviesResponse>({
    queryKey: ["moviesByGenre", genreId],
    queryFn: () => getMoviesByGenre(genreId),
    staleTime: 1000 * 60 * 15,
  });

  return {
    movies: moviesByGenreQuery.data?.results || [],
    isLoading: moviesByGenreQuery.isLoading,
    isError: moviesByGenreQuery.isError,
    error: moviesByGenreQuery.error,
  };
};
