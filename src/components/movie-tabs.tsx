import { useGenreQuery, useMovieByGenreListQuery, useSerieByGenreListQuery } from '@/hooks/useGenreQuery'
import MovieCarousel from './movieCarousel'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'

export default function MovieTabs() {
  const { movieGenres, seriesGenres } = useGenreQuery()
  const { moviesByGenre } = useMovieByGenreListQuery(movieGenres)
  const { seriesByGenre } = useSerieByGenreListQuery(seriesGenres)

  return (
    <article>
      <Tabs defaultValue='movie' className='space-y-6'>
        <TabsList className={'ml-[5%] space-x-2 bg-transparent'}>
          <TabsTrigger value='movie' className={'hover:text-foreground data-[state=active]:bg-primary'}>
            Filmes
          </TabsTrigger>
          <TabsTrigger value='serie' className={'hover:text-foreground data-[state=active]:bg-primary'}>
            Series
          </TabsTrigger>
        </TabsList>
        <TabsContent value='movie' className={'flex flex-col items-center justify-center space-y-12'}>
          {movieGenres?.map((genre) => {
            const movies = moviesByGenre.find((query) => query.data?.genreId === genre.id)?.data?.movies || []

            if (!movies) return null
            return <MovieCarousel key={genre.id} title={genre.name} items={movies} mediaType='movie' />
          })}
        </TabsContent>
        <TabsContent value='serie' className={'flex flex-col items-center justify-center space-y-12'}>
          {seriesGenres?.map((genre) => {
            const series = seriesByGenre.find((query) => query.data?.genreId === genre.id)?.data?.series || []

            if (!series) return null
            return <MovieCarousel key={genre.id} title={genre.name} items={series} mediaType='movie' />
          })}
        </TabsContent>
      </Tabs>
    </article>
  )
}
