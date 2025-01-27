import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import type { Movie } from '@/types/movieTypes'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog'

export default function MovieImagesDialog({ movie }: { movie: Movie }) {
  return (
    <Dialog>
      <DialogTrigger>
        <LazyLoadImage
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt={movie.title}
          className='mx-auto w-[80%] max-w-sm cursor-pointer rounded shadow-md transition-all duration-300 ease-in-out hover:scale-95'
        />
      </DialogTrigger>
      {movie.videos && window.innerWidth >= 1024 && (
        <DialogContent className='flex border-transparent bg-transparent outline-none'>
          <Carousel className='max-w-xl'>
            <CarouselContent>
              {movie.videos &&
                movie.videos.results.map((video) => (
                  <CarouselItem key={video.id}>
                    <iframe
                      width='560'
                      height='315'
                      src={`https://www.youtube.com/embed/${video.key}`}
                      allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                      allowFullScreen
                      title='Trailer'
                      className='rounded-md shadow-md'></iframe>
                  </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </DialogContent>
      )}
    </Dialog>
  )
}
