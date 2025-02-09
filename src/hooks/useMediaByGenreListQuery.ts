import { api } from '@/lib/api'
import type { Genre } from '@/types/genreTypes'
import type { MovieResponse } from '@/types/movieTypes'
import type { TVShowResponse } from '@/types/tvTypes'
import { useQueries } from '@tanstack/react-query'

export const useMovieByGenreListQuery = (genres: Genre[]) => {
  const movieQueries = useQueries({
    queries: (genres ?? []).map((genre) => ({
      queryKey: ['movies', genre.id],
      queryFn: async () => {
        const { data } = await api.get<MovieResponse>('/discover/movie', {
          params: {
            with_genres: genre.id,
            sort_by: 'popularity.desc',
            page: 1,
          },
        })
        return {
          genreId: genre.id,
          genreName: genre.name,
          movies: data.results,
        }
      },
      enabled: !!genres,
    })),
  })

  return {
    moviesByGenre: movieQueries,
  }
}

export const useSerieByGenreListQuery = (genres: Genre[]) => {
  const serieQueries = useQueries({
    queries: (genres ?? []).map((genre) => ({
      queryKey: ['series', genre.id],
      queryFn: async () => {
        const { data } = await api.get<TVShowResponse>('/discover/tv', {
          params: {
            with_genres: genre.id,
            sort_by: 'popularity.desc',
            page: 1,
          },
        })
        return {
          genreId: genre.id,
          genreName: genre.name,
          series: data.results,
        }
      },
      enabled: !!genres,
    })),
  })

  return {
    seriesByGenre: serieQueries,
  }
}
