import { api } from '@/lib/api'
import { useQuery } from '@tanstack/react-query'
import { GenresResponse } from '../types/genreTypes'

export const useGenreQuery = () => {
  const movieGenreQuery = useQuery<GenresResponse>({
    queryKey: ['movieGenresList'],
    queryFn: async () => {
      const { data } = await api.get('/genre/movie/list')
      return data
    },
    staleTime: Infinity,
  })

  const seriesGenreQuery = useQuery<GenresResponse>({
    queryKey: ['seriesGenresList'],
    queryFn: async () => {
      const { data } = await api.get('/genre/tv/list')
      return data
    },
    staleTime: Infinity,
  })

  return {
    movieGenres: movieGenreQuery.data?.genres || [],
    seriesGenres: seriesGenreQuery.data?.genres || [],

    isLoading: movieGenreQuery.isLoading || seriesGenreQuery.isLoading,
    isError: movieGenreQuery.isError || seriesGenreQuery.isError,
  }
}
