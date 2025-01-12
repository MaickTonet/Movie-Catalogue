import Loading from '@/components/loading'
import MovieTabs from '@/components/movie-tabs'
import SearchField from '@/components/search-field'
import TrendingCarouse from '@/components/trendingCarousel'
import { useGenreQuery } from '@/hooks/use-genre-query'
import { useTrendingMoviesQuery } from '@/hooks/useMovieQuery'

export default function Home() {
  const { data: trendingMovies, isLoading } = useTrendingMoviesQuery()
  const { movieGenres, seriesGenres } = useGenreQuery()

  if (isLoading) return <Loading />

  return (
    <main className={'flex w-full flex-col space-y-8 py-4'}>
      {trendingMovies && <TrendingCarouse trending={trendingMovies} />}
      <SearchField />
      <MovieTabs movieGenres={movieGenres} seriesGenres={seriesGenres} />
    </main>
  )
}
