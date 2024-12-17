import { useGenreQuery } from "@/hooks/useGenreQuery";
import MovieSession from "./movieSession";

export default function MovieCorridorList({
  numberOfCategories,
}: {
  numberOfCategories: number;
}) {
  const { movieGenres } = useGenreQuery();
  const { seriesGenres } = useGenreQuery();

  return (
    <article className="flex flex-col space-y-12 justify-center items-center">
      {movieGenres.slice(0, numberOfCategories).map((genre) => (
        <MovieSession
          type="movies"
          key={genre.id}
          genreId={genre.id}
          genreName={genre.name}
        />
      ))}
      {seriesGenres.slice(0, numberOfCategories).map((genre) => (
        <MovieSession
          type="series"
          key={genre.id}
          genreId={genre.id}
          genreName={genre.name}
        />
      ))}
    </article>
  );
}
