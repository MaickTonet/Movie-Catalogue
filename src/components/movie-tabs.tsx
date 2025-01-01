import { Genre } from "@/types/genreTypes";
import MovieCarousel from "./movie-carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export default function MovieTabs({
  movieGenres,
  seriesGenres,
}: {
  movieGenres: Genre[];
  seriesGenres: Genre[];
}) {
  return (
    <article>
      <Tabs defaultValue="movie" className="space-y-6">
        <TabsList className={"ml-[5%] bg-transparent"}>
          <TabsTrigger
            value="movie"
            className={"data-[state=active]:bg-primary"}
          >
            Filmes
          </TabsTrigger>
          <TabsTrigger
            value="serie"
            className={"data-[state=active]:bg-primary"}
          >
            Series
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="movie"
          className={"flex flex-col justify-center items-center"}
        >
          {movieGenres.map((genre) => (
            <MovieCarousel key={genre.id} genre={genre} type={"movie"} />
          ))}
        </TabsContent>
        <TabsContent
          value="serie"
          className={"flex flex-col justify-center items-center"}
        >
          {seriesGenres.map((genre) => (
            <MovieCarousel key={genre.id} genre={genre} type={"serie"} />
          ))}
        </TabsContent>
      </Tabs>
    </article>
  );
}
