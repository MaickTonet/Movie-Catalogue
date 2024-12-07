import { useMovieQueries } from "@/hooks/useMovieQuery";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";
import { Skeleton } from "./ui/skeleton";

export default function MovieSession() {
  const { trendingMovies, isLoading } = useMovieQueries();

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
      <div>
        <h2 className="text-2xl font-bold">Novos filmes</h2>
      </div>
      <Carousel
        opts={{
          slidesToScroll: 4,
          dragFree: true,
          dragThreshold: 80,
        }}
      >
        <CarouselContent>
          {trendingMovies.map((movie) => (
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
        <CarouselPrevious className="hidden lg:flex" />
        <CarouselNext className="hidden lg:flex" />
      </Carousel>
    </section>
  );
}
