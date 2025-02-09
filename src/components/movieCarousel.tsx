import { Movie } from '@/types/movieTypes'
import type { TVShow } from '@/types/tvTypes'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'

interface MovieCarouselProps {
  title: string
  items: Movie[] | TVShow[]
  mediaType: 'movie' | 'tv'
}

export default function MovieCarousel({ title, items, mediaType }: MovieCarouselProps) {
  return (
    <section className={'flex w-[90%] flex-col gap-4'}>
      <aside className={'flex w-full items-center justify-between'}>
        <div className={'flex items-center space-x-3'}>
          <h2 className={'text-2xl font-bold'}>{title}</h2>
        </div>
        <p className={'cursor-pointer text-muted-foreground hover:underline'}>Ver mais</p>
      </aside>
      <Carousel
        opts={{ breakpoints: { '(min-width: 768px)': { slidesToScroll: 4 } }, dragFree: false, slidesToScroll: 2 }}>
        <CarouselContent>
          {items?.map((item) => (
            <CarouselItem key={item.id} className={'max-w-[200px] basis-1/2 sm:basis-1/4 md:basis-1/5 lg:basis-1/6'}>
              <Link to={`/${mediaType}/${item.id}`}>
                <LazyLoadImage
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  alt={item.media_type === 'movie' ? item.title : item.name}
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
