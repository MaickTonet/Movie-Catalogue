import type { Movie } from '@/types/movieTypes'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'

export default function CastCarousel({ movie }: { movie: Movie }) {
  return (
    <Carousel className='mt-8 w-full max-w-md lg:ml-12' opts={{ dragFree: false, slidesToScroll: 2 }}>
      <CarouselContent>
        {movie.credits.cast.map(
          (cast) =>
            cast.profile_path && (
              <CarouselItem key={cast.id} className='basis-1/3 select-none sm:basis-1/4 md:basis-1/4 2xl:basis-1/5'>
                <Link to={'/'}>
                  <LazyLoadImage
                    src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`}
                    alt={cast.name}
                    className='w-16 rounded-sm shadow-md transition-all duration-300 ease-in-out hover:scale-95'
                  />
                </Link>
                <p className='text-wrap'>{cast.character}</p>
                <p className='text-wrap text-muted'>{cast.name}</p>
              </CarouselItem>
            ),
        )}
      </CarouselContent>
      <CarouselPrevious className='hidden border-none xl:flex' />
      <CarouselNext className='hidden border-none xl:flex' />
    </Carousel>
  )
}
