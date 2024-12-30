import { useQuery } from "@tanstack/react-query";
import { GenresResponse } from "../types/genreTypes";
import { api } from "@/lib/api";
import { MoviesResponse } from "@/types/movieTypes";

export const useGenreQuery = (genreId?: number) => {
  const movieGenreQuery = useQuery<GenresResponse>({
    queryKey: ["movieGenresList"],
    queryFn: async () => {
      const response = await api.get("/genre/movie/list");
      return response.data;
    },
    staleTime: Infinity,
  });

  const seriesGenreQuery = useQuery<GenresResponse>({
    queryKey: ["seriesGenresList"],
    queryFn: async () => {
      const response = await api.get("/genre/tv/list");
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

  const seriesByGenreQuery = useQuery<MoviesResponse, Error>({
    queryKey: ["seriesByGenre", genreId],
    queryFn: async ({ queryKey: [, genreId] }) => {
      const response = await api.get<MoviesResponse>(
        `/discover/tv?with_genres=${genreId}`
      );
      console.log(response.data);
      
      return response.data;
    },
    staleTime: 1000 * 60 * 15,
    enabled: !!genreId,
  });

  return {
    movieGenres: movieGenreQuery.data?.genres || [],
    seriesGenres: seriesGenreQuery.data?.genres || [],
    moviesByGenre: moviesByGenreQuery.data?.results || [],
    seriesByGenre: seriesByGenreQuery.data?.results || [],
    isLoading:
      movieGenreQuery.isLoading ||
      moviesByGenreQuery.isLoading ||
      seriesGenreQuery.isLoading ||
      seriesByGenreQuery.isLoading,
    isError:
      movieGenreQuery.isError ||
      moviesByGenreQuery.isError ||
      seriesGenreQuery.isError ||
      seriesByGenreQuery.isError,
    error:
      movieGenreQuery.error ||
      moviesByGenreQuery.error ||
      seriesGenreQuery.error ||
      seriesByGenreQuery.error,
  };
};
