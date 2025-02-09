import Loading from '@/components/loading'
import MovieTabs from '@/components/movie-tabs'
import TrendingCarouse from '@/components/trendingCarousel'
import { useTrendingMoviesQuery } from '@/hooks/useMovieQuery'

export default function Home() {
  const { data: trending, isLoading } = useTrendingMoviesQuery()

  if (isLoading) return <Loading />

  return (
    <main className={'flex w-full flex-col space-y-8 py-4'}>
      {trending && <TrendingCarouse trending={trending} />}
      <MovieTabs />
    </main>
  )
}
