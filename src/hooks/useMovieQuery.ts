import { api } from '@/lib/api'
import type { SearchResponse, SearchResults } from '@/types/searchTypes'
import { useQuery } from '@tanstack/react-query'
import { Movie } from '../types/movieTypes'

export const useMovieQuery = (movieId: number) => {
  return useQuery<Movie, Error>({
    queryKey: ['movie', movieId],
    queryFn: async ({ queryKey: [, movieId] }) => {
      const { data } = await api.get<Movie>(`/movie/${movieId}`, {
        params: {
          append_to_response: 'videos,credits,images,recommendations',
        },
      })
      return data
    },
    enabled: !!movieId,
  })
}

export const useTrendingMoviesQuery = () => {
  return useQuery<SearchResults[]>({
    queryKey: ['trendingMovies'],
    queryFn: async () => {
      const { data } = await api.get<SearchResponse>('/trending/all/week')
      return data.results
    },
  })
}
