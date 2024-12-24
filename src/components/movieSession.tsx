import { useGenreQuery } from "@/hooks/useGenreQuery";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";
import { Skeleton } from "./ui/skeleton";
import { Badge } from "./ui/badge";

interface MovieSessionProps {
  genreId: number;
  genreName: string;
  type: "movies" | "series";
}

export default function MovieSession(props: MovieSessionProps) {
  const { genreId, genreName, type } = props;
  const { moviesByGenre, seriesByGenre, isLoading } = useGenreQuery(genreId);

  if (isLoading) {
    return (
      <section className="flex flex-col gap-4 w-[90%]">
        <Skeleton className="h-4 w-[250px]" />
        <Carousel>
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="basis max-w-[200px] sm:basis-1/3 md:basis-1/4"
              >
                <Skeleton className="h-[250px] w-[170px]" />
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
        <div className="flex space-x-3 items-center">
          <h2 className="text-2xl font-bold">{genreName}</h2>
          <Badge className="hidden sm:flex mt-1" variant={"secondary"}>
            {type === "movies" ? "Filmes" : "Series"}
          </Badge>
        </div>
        <p className="text-muted-foreground hover:underline cursor-pointer">
          Ver mais
        </p>
      </div>
      <Carousel
        opts={{
          slidesToScroll: 4,
          dragFree: true,
          dragThreshold: 80,
        }}
      >
        <CarouselContent>
          {type === "movies" &&
            moviesByGenre?.map((movie) => (
              <CarouselItem
                key={movie.id}
                className="basis-1/2 max-w-[200px]  sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-full object-cover rounded-md shadow-lg cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
                />
              </CarouselItem>
            ))}

          {type === "series" &&
            seriesByGenre?.map((serie) => (
              <CarouselItem
                key={serie.id}
                className="basis-1/2 max-w-[200px]  sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                  alt={serie.title}
                  className="w-full h-full object-cover rounded-md shadow-lg cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
                />
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious className="hidden lg:flex outline-none border-border" />
        <CarouselNext className="hidden lg:flex outline-none border-border" />
      </Carousel>
    </section>
  );
}
