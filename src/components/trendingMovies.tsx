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
import { ScrollArea } from "@radix-ui/react-scroll-area";

// TODO: Ajust width, ScrollArea, and add genres badges
export default function TrendingMovies() {
  const { trendingMovies } = useMovieQueries();

  return (
    <article className="">
      <Carousel className="">
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
                <ScrollArea className="hidden text-zinc-300 lg:block h-[200px] w-[350px] rounded-md p-4 overflow-auto break-words">
                  {movie.overview}
                </ScrollArea>
                <Button className="mt-3 flex gap-2 items-center justify-center font-semibold text-md lg:mt-auto">
                  <Play /> Ver mais
                </Button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden lg:flex outline-none border-zinc-400 hover:text-white" />
        <CarouselNext className="hidden lg:flex outline-none border-zinc-400 hover:text-white" />
      </Carousel>
    </article>
  );
}
