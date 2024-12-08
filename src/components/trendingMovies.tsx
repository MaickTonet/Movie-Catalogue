import { useMovieQueries } from "@/hooks/useMovieQuery";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";
import { Button } from "./ui/button";
import { Play } from "lucide-react";
import { Skeleton } from "./ui/skeleton";

// TODO: Ajust first carousel item width
export default function TrendingMovies() {
  const { trendingMovies, isLoading } = useMovieQueries();

  if (isLoading) {
    return (
      <article className="lg:max-w-screen-lg lg:mx-auto flex flex-col gap-3 mx-auto lg:flex-row ">
        <Skeleton className="h-[300px] w-[200px] rounded-md  bg-zinc-600" />
        <div className="flex flex-col gap-2 items-center lg:my-auto lg:items-start">
          <Skeleton className="h-4 w-[200px] rounded-md bg-zinc-600" />
          <Skeleton className="h-4 w-[150px] rounded-md bg-zinc-600" />
          <Skeleton className="hidden lg:block h-[40px] w-[200px] rounded-md bg-zinc-600 mt-auto" />
        </div>
      </article>
    );
  }

  return (
    <article className="lg:max-w-screen-md lg:mx-auto">
      <Carousel>
        <CarouselContent>
          {trendingMovies.map((movie) => (
            <CarouselItem
              key={movie.id}
              className="flex flex-col gap-2 items-center justify-center w-full lg:flex-row lg:max-w-[80%] lg:gap-6 "
            >
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt={movie.title}
                  className="h-[300px] object-cover rounded-md sm:h-[350px]"
                />
              </div>
              <div className="flex flex-col items-center max-w-[80%] lg:items-start h-full lg:py-2">
                <h2 className="font-bold text-xl text-center truncate w-full lg:text-left lg:text-2xl">
                  {movie.title}
                </h2>
                <p className="text-semibold text-lg text-zinc-500">
                  {new Intl.DateTimeFormat("pt-BR", { year: "numeric" }).format(
                    new Date(movie.release_date)
                  )}
                </p>
                <div className="hidden text-zinc-300 lg:flex h-[200px] rounded-md pt-1">
                  <p className="size-48 text-wrap truncate">{movie.overview}</p>
                </div>
                <Button className="mt-3 flex gap-2 items-center justify-center font-semibold text-md lg:mt-auto">
                  <Play /> Ver mais
                </Button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden xl:flex left-0  outline-none border-zinc-400 hover:text-white" />
        <CarouselNext className="hidden xl:flex right-0   outline-none border-zinc-400 hover:text-white" />
      </Carousel>
    </article>
  );
}
