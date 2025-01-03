import { api } from '@/lib/api'
import { useQuery } from '@tanstack/react-query'
import { Movie } from '../types/movieTypes'

export const useMovie = (movieId: number) => {
  return useQuery<Movie, Error>({
    queryKey: ['movie', movieId],
    queryFn: async ({ queryKey: [, movieId] }) => {
      const response = await api.get<Movie>(`/movie/${movieId}`)
      return response.data
    },
    staleTime: 1000 * 60 * 15,
    enabled: !!movieId,
  })
}

export const useTrendingMovies = () => {
  return useQuery<Movie[]>({
    queryKey: ['trendingMovies'],
    queryFn: async () => {
      const response = await api.get('/trending/movie/week')
      return response.data.results
    },
    staleTime: 1000 * 60 * 15,
  })
}
