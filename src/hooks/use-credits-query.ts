import { api } from "@/lib/api";
import { MovieCredits } from "@/types/credits-types";
import { useQuery } from "@tanstack/react-query";

export const useCreditsQuery = (movieId: number) => {
  const creditsQuery = useQuery<MovieCredits>({
    queryKey: ["movieCredits", movieId],
    queryFn: async () => {
      const response = await api.get(`/movie/${movieId}/credits`);
      return response.data;
    },
    staleTime: Infinity,
  });

  return creditsQuery;
};
