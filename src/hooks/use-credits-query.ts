import { api } from "@/lib/api";
import { CreditsResponse } from "@/types/credits-types";
import { useQuery } from "@tanstack/react-query";

export const useCreditsQuery = (movieId: number) => {
  const creditsQuery = useQuery<CreditsResponse>({
    queryKey: ["movieCredits", movieId],
    queryFn: async () => {
      const response = await api.get(`/movie/${movieId}/credits`);
      return response.data;
    },
    staleTime: Infinity,
  });

  return creditsQuery;
};
