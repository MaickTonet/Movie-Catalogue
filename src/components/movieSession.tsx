import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";
import { Skeleton } from "./ui/skeleton";
import { useMoviesByGenreQuery } from "@/hooks/useMovieByGenreQuery";

interface MovieSessionProps {
  genreId: number;
  genreName: string;
}

export default function MovieSession(props: MovieSessionProps) {
  const { genreId, genreName } = props;
  const { movies, isLoading } = useMoviesByGenreQuery(genreId);

  if (isLoading) {
    return (
      <section className="flex flex-col gap-4 w-[90%]">
        <Skeleton className="h-4 w-[250px] bg-zinc-600" />
        <Carousel>
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="basis max-w-[200px] sm:basis-1/3 md:basis-1/4"
              >
                <Skeleton className="h-[250px] w-[170px] bg-zinc-600" />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>
    );
  }

  return (
    <section className="flex flex-col gap-4 w-[90%]">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">{genreName}</h2>
        <p className="text-zinc-400 hover:underline cursor-pointer">Ver mais</p>
      </div>
      <Carousel
        opts={{
          slidesToScroll: 4,
          dragFree: true,
          dragThreshold: 80,
        }}
      >
        <CarouselContent>
          {movies?.map((movie) => (
            <CarouselItem
              key={movie.id}
              className="basis-1/2 max-w-[200px]  sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-full object-cover rounded-md shadow-lg"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden lg:flex outline-none border-zinc-400 hover:text-white" />
        <CarouselNext className="hidden lg:flex outline-none border-zinc-400 hover:text-white" />
      </Carousel>
    </section>
  );
}
