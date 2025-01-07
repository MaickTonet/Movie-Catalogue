import { formatDateByYear } from '@/helpers/data-format'
import { Movie } from '@/types/movieTypes'
import { Play } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function TrendingMovies({ trendingMovies }: { trendingMovies: Movie[] }) {
  return (
    <article className={'lg:mx-auto lg:max-w-screen-md'}>
      <Carousel>
        <CarouselContent>
          {trendingMovies.map((movie) => (
            <CarouselItem
              key={movie.id}
              className={'flex w-full flex-col items-center justify-center gap-2 lg:flex-row lg:gap-6'}>
              <div>
                <LazyLoadImage
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt={movie.title}
                  className={'h-[300px] rounded-md object-cover sm:h-[350px]'}
                />
              </div>
              <div className={'flex h-full max-w-[80%] flex-col items-center lg:items-start lg:py-2'}>
                <h2 className={'w-full truncate text-center text-xl font-bold lg:text-left lg:text-2xl'}>
                  {movie.title}
                </h2>
                <p className={'text-semibold text-lg text-muted-foreground'}>{formatDateByYear(movie.release_date)}</p>
                <div className={'hidden h-[200px] rounded-md pt-1 lg:flex'}>
                  <p className={'size-48 select-none truncate text-wrap'}>{movie.overview}</p>
                </div>
                <Link to={`/movie/${movie.id}`} className='mt-3 lg:mt-auto'>
                  <Button className={'text-md font-semibold'}>
                    <Play /> Ver mais
                  </Button>
                </Link>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className={'left-0 hidden border-none border-border xl:flex'} />
        <CarouselNext className={'right-0 hidden border-none border-border xl:flex'} />
      </Carousel>
    </article>
  )
}
