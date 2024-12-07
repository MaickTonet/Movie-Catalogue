import { useGenreQuery } from "@/hooks/useGenreQuery";
import MovieSession from "./movieSession";

export default function MovieCorridorList() {
  const { genres } = useGenreQuery();

  return (
    <article className="flex flex-col space-y-12 justify-center items-center">
      {genres.map((genre) => (
        <MovieSession
          key={genre.id}
          genreId={genre.id}
          genreName={genre.name}
        />
      ))}
    </article>
  );
}
