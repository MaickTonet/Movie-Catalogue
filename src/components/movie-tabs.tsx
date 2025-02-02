import { Genre } from '@/types/genreTypes'
import MovieCarousel from './movie-carousel'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'

export default function MovieTabs({ movieGenres, seriesGenres }: { movieGenres: Genre[]; seriesGenres: Genre[] }) {
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
          {movieGenres.map((genre) => (
            <MovieCarousel key={genre.id} genre={genre} type={'movie'} />
          ))}
        </TabsContent>
        <TabsContent value='serie' className={'flex flex-col items-center justify-center space-y-12'}>
          {seriesGenres.map((genre) => (
            <MovieCarousel key={genre.id} genre={genre} type={'serie'} />
          ))}
        </TabsContent>
      </Tabs>
    </article>
  )
}
