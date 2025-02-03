import { formatDateByYear } from '@/helpers/dataFormat'
import type { SearchResults } from '@/types/searchTypes'
import Autoplay from 'embla-carousel-autoplay'
import { Play } from 'lucide-react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'

export default function TrendingCarouse({ trending }: { trending: SearchResults[] }) {
  return (
    <article className={'mt-6 lg:mx-auto lg:max-w-screen-md'}>
      <Carousel
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            delay: 8000,
          }),
        ]}>
        <CarouselContent>
          {trending.map((item) => (
            <CarouselItem
              key={item.id}
              className={'flex w-full flex-col items-center justify-center gap-2 lg:flex-row lg:gap-6'}>
              <div>
                <LazyLoadImage
                  src={`https://image.tmdb.org/t/p/original/${item.media_type !== 'person' ? item.poster_path : item.profile_path}`}
                  alt={item.media_type === 'movie' ? item.title : item.name}
                  className={'h-[300px] rounded-md object-cover sm:h-[350px] lg:h-[400px] xl:h-[450px]'}
                />
              </div>
              <div className={'flex h-full max-w-[80%] flex-col items-center lg:items-start lg:py-2'}>
                <h2 className='line-clamp-2 w-full max-w-72 truncate text-wrap text-center text-xl font-bold lg:text-left lg:text-2xl'>
                  {item.media_type === 'movie' ? item.title : item.name}
                </h2>
                {item.media_type !== 'person' && (
                  <p className={'text-semibold text-lg text-muted-foreground'}>
                    {formatDateByYear(item.media_type === 'movie' ? item.release_date : item.first_air_date)}
                  </p>
                )}
                <div className={'hidden h-[200px] rounded-md pt-1 lg:flex'}>
                  <p className={'size-48 select-none truncate text-wrap'}>
                    {item.media_type !== 'person' ? item.overview : item.known_for_department}
                  </p>
                </div>
                <Link to={`/movie/${item.id}`} className='mt-3 lg:mt-auto'>
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
