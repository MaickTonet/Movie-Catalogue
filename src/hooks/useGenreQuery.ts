import { useQuery } from "@tanstack/react-query";
import { GenresResponse } from "../types/genreTypes";
import { api } from "@/lib/api";
import { MoviesResponse } from "@/types/movieTypes";

export const useGenreQuery = (genreId?: number) => {
  const genresQuery = useQuery<GenresResponse>({
    queryKey: ["movieGenresList"],
    queryFn: async () => {
      const response = await api.get("/genre/movie/list");
      console.log(response.data);
      return response.data;
    },
    staleTime: Infinity,
  });

  const moviesByGenreQuery = useQuery<MoviesResponse, Error>({
    queryKey: ["moviesByGenre", genreId],
    queryFn: async ({ queryKey: [, genreId] }) => {
      const response = await api.get<MoviesResponse>(
        `/discover/movie?with_genres=${genreId}`
      );
      return response.data;
    },
    staleTime: 1000 * 60 * 15,
    enabled: !!genreId,
  });

  return {
    moviesByGenre: moviesByGenreQuery.data?.results || [],
    genres: genresQuery.data?.genres || [],
    isLoading: genresQuery.isLoading || moviesByGenreQuery.isLoading,
    isError: genresQuery.isError || moviesByGenreQuery.isError,
    error: genresQuery.error || moviesByGenreQuery.error,
  };
};
