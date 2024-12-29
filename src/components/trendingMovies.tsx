import { useMovieQueries } from "@/hooks/useMovieQuery";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";
import { Skeleton } from "./ui/skeleton";
import { Play } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

// TODO: Ajust carousel itens width
export default function TrendingMovies() {
  const { trendingMovies, isLoading } = useMovieQueries();

  if (isLoading) {
    return (
      <article className="lg:max-w-screen-lg lg:mx-auto flex flex-col gap-3 mx-auto lg:flex-row ">
        <Skeleton className="h-[300px] w-[200px] rounded-md" />
        <div className="flex flex-col gap-2 items-center lg:my-auto lg:items-start">
          <Skeleton className="h-4 w-[200px] rounded-md" />
          <Skeleton className="h-4 w-[150px] rounded-md" />
          <Skeleton className="hidden lg:block h-[40px] w-[200px] rounded-md mt-auto" />
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
                <p className="text-semibold text-lg text-muted-foreground">
                  {new Intl.DateTimeFormat("pt-BR", { year: "numeric" }).format(
                    new Date(movie.release_date)
                  )}
                </p>
                <div className="hidden lg:flex h-[200px] rounded-md pt-1">
                  <p className="size-48 text-wrap truncate select-none">
                    {movie.overview}
                  </p>
                </div>
                <Link to={`/movie/${movie.id}`} className="mt-3 lg:mt-auto">
                  <Button className=" flex gap-2 items-center justify-center font-semibold text-md ">
                    <Play /> Ver mais
                  </Button>
                </Link>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden xl:flex left-0 border-border" />
        <CarouselNext className="hidden xl:flex right-0 border-border" />
      </Carousel>
    </article>
  );
}
