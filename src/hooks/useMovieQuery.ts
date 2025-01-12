import { api } from '@/lib/api'
import type { SearchResponse, SearchResults } from '@/types/searchTypes'
import { useQuery } from '@tanstack/react-query'
import { Movie, type MovieResponse } from '../types/movieTypes'

export const useMovieQuery = (movieId: number) => {
  return useQuery<Movie, Error>({
    queryKey: ['movie', movieId],
    queryFn: async ({ queryKey: [, movieId] }) => {
      const response = await api.get<Movie>(`/movie/${movieId}`)
      return response.data
    },
    enabled: !!movieId,
  })
}

export const useTrendingMoviesQuery = () => {
  return useQuery<SearchResults[]>({
    queryKey: ['trendingMovies'],
    queryFn: async () => {
      const { data } = await api.get<SearchResponse>('/trending/all/week')
      console.log(data.results)
      return data.results
    },
  })
}

export const useSearchMovieQuery = (search: string | null) => {
  return useQuery<MovieResponse>({
    queryKey: ['searchMovie', search],
    queryFn: async ({ queryKey: [, search] }) => {
      const response = await api.get<MovieResponse>(`/search/movie?query=${search}`)
      return response.data
    },
    enabled: !!search,
  })
}
