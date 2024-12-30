import BreadcrumbPath from "@/components/breadcrumb-path";
import MovieOverview from "@/components/movie-overview";
import { useMovieQueries } from "@/hooks/use-movie-query";
import { useParams } from "react-router-dom";

export default function MovieView() {
  const { id } = useParams();
  const { movie } = useMovieQueries(parseInt(id!));

  return (
    <main className="px-4">
      <nav className="w-full p-4 mb-3">
        {movie && <BreadcrumbPath movie={movie} />}
      </nav>
      {movie && (
        <section className="flex flex-col items-center justify-center gap-2 md:flex-row md:gap-8">
          <article className={"w-[300px] max-w-sm mb-auto"}>
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.title}
              className="shadow rounded"
            />
          </article>
          <aside className="w-[90%] max-w-md md:mb-auto md:mt-6 ">
            <h2 className="font-bold text-xl text-center truncate w-full md:text-start md:text-3xl md:text-wrap">
              {movie.title}
            </h2>
            <p className="text-semibold text-lg text-muted-foreground text-center md:text-start">
              {new Intl.DateTimeFormat("pt-BR", { year: "numeric" }).format(
                new Date(movie.release_date)
              )}
            </p>
            <div>
              <MovieOverview movie={movie} />
            </div>
          </aside>
        </section>
      )}
    </main>
  );
}
