import { useGenreQuery } from '@/hooks/use-genre-query'
import { Genre } from '@/types/genreTypes'
import { Movie } from '@/types/movieTypes'
import { Link } from 'react-router-dom'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'

export default function MovieCarousel({ genre, type }: { genre: Genre; type: 'movie' | 'serie' }) {
  const { moviesByGenre, seriesByGenre, isLoading } = useGenreQuery(genre.id)

  let movies: Movie[] = []
  if (type === 'movie') movies = moviesByGenre
  if (type === 'serie') movies = seriesByGenre

  const options = {
    slidesToScroll: 4,
    dragFree: false,
    dragThreshold: 80,
  }

  if (isLoading) return null

  return (
    <section className={'flex w-[90%] flex-col gap-4'}>
      <aside className={'flex w-full items-center justify-between'}>
        <div className={'flex items-center space-x-3'}>
          <h2 className={'text-2xl font-bold'}>{genre.name}</h2>
        </div>
        <p className={'cursor-pointer text-muted-foreground hover:underline'}>Ver mais</p>
      </aside>
      <Carousel opts={options}>
        <CarouselContent>
          {movies?.map((movie) => (
            <CarouselItem key={movie.id} className={'max-w-[200px] basis-1/2 sm:basis-1/4 md:basis-1/5 lg:basis-1/6'}>
              <Link to={`/movie/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className={
                    'h-full w-full cursor-pointer rounded-md object-cover shadow-lg transition-all duration-300 ease-in-out hover:scale-95'
                  }
                />
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className={'hidden border-border outline-none lg:flex'} />
        <CarouselNext className={'hidden border-border outline-none lg:flex'} />
      </Carousel>
    </section>
  )
}
