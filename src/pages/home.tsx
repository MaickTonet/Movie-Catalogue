import Loading from '@/components/loading'
import MovieTabs from '@/components/movie-tabs'
import SearchField from '@/components/search-field'
import TrendingMovies from '@/components/trending-movies'
import { useGenreQuery } from '@/hooks/use-genre-query'
import { useTrendingMovies } from '@/hooks/use-movie'

export default function Home() {
  const { data: trendingMovies, isLoading } = useTrendingMovies()
  const { movieGenres, seriesGenres } = useGenreQuery()

  if (isLoading) {
    return <Loading />
  }

  //TODO: ajust search field
  //TODO: helmet it is not updating correctly when switching pages.

  return (
    <main className={'flex w-full flex-col space-y-8 py-4'}>
      {trendingMovies && <TrendingMovies trendingMovies={trendingMovies} />}
      <SearchField />
      <MovieTabs movieGenres={movieGenres} seriesGenres={seriesGenres} />
    </main>
  )
}
