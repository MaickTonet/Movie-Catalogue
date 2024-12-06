import { useQuery } from "@tanstack/react-query";
import { getMovieGenresList } from "../lib/queries";
import { GenresResponse } from "../types/genreTypes";

export const useGenreQuery = () => {
  const genresQuery = useQuery<GenresResponse>({
    queryKey: ["movieGenres"],
    queryFn: getMovieGenresList,
    staleTime: 1000 * 60 * 60,
  });

  return {
    genres: genresQuery.data?.genres || [],
    isLoading: genresQuery.isLoading,
    isError: genresQuery.isError,
    error: genresQuery.error,
  };
};
