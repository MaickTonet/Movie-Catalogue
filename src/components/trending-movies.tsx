import { formatDateByYear } from "@/helpers/data-format";
import { Movie } from "@/types/movieTypes";
import { Play } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

// TODO: Ajust carousel itens width
export default function TrendingMovies({
  trendingMovies,
}: {
  trendingMovies: Movie[];
}) {
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
                  {formatDateByYear(movie.release_date)}
                </p>
                <div className="hidden lg:flex h-[200px] rounded-md pt-1">
                  <p className="size-48 text-wrap truncate select-none">
                    {movie.overview}
                  </p>
                </div>
                <Link to={`/movie/${movie.id}`} className="mt-3 lg:mt-auto">
                  <Button className="flex gap-2 items-center justify-center font-semibold text-md">
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
