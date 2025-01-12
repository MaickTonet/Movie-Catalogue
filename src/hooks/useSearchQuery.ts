import { api } from '@/lib/api'
import type { SearchResponse } from '@/types/searchTypes'
import { useQuery } from '@tanstack/react-query'

export const useSearchQuery = (query: string | null, currentPage: number) => {
  return useQuery({
    queryKey: ['search', query, currentPage],
    queryFn: async (): Promise<SearchResponse> => {
      const { data } = await api.get<SearchResponse>('/search/multi', {
        params: {
          query: query,
          page: currentPage,
        },
      })
      return data
    },
    enabled: Boolean(query?.trim()),
  })
}
