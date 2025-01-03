import { useGenreQuery } from '@/hooks/use-genre-query';
import { Genre } from '@/types/genreTypes';
import { Movie } from '@/types/movieTypes';
import { Link } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';

export default function MovieCarousel({ genre, type }: { genre: Genre; type: 'movie' | 'serie' }) {
  const { moviesByGenre, seriesByGenre } = useGenreQuery(genre.id);
  const options = {
    slidesToScroll: 4,
    dragFree: false,
    dragThreshold: 80,
  };

  let movies: Movie[] = [];

  if (type === 'movie') movies = moviesByGenre;

  if (type === 'serie') movies = seriesByGenre;

  return (
    <section className={'flex flex-col gap-4 w-[90%]'}>
      <aside className={'flex justify-between items-center w-full'}>
        <div className={'flex space-x-3 items-center'}>
          <h2 className={'text-2xl font-bold'}>{genre.name}</h2>
        </div>
        <p className={'text-muted-foreground hover:underline cursor-pointer'}>Ver mais</p>
      </aside>
      <Carousel opts={options}>
        <CarouselContent>
          {movies?.map((movie) => (
            <CarouselItem key={movie.id} className={'basis-1/2 max-w-[200px] sm:basis-1/4 md:basis-1/5 lg:basis-1/6'}>
              <Link to={`/movie/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className={
                    'w-full h-full object-cover rounded-md shadow-lg cursor-pointer hover:scale-95 transition-all duration-300 ease-in-out'
                  }
                />
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className={'hidden lg:flex outline-none border-border'} />
        <CarouselNext className={'hidden lg:flex outline-none border-border'} />
      </Carousel>
    </section>
  );
}
