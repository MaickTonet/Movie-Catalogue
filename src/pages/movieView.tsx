import BreadcrumbPath from "@/components/breadcrumbPath";
import { useMovieQueries } from "@/hooks/useMovieQuery";
import { useParams } from "react-router-dom";
import AccordionList from "@/components/accordionList";

export default function MovieView() {
  const { id } = useParams();

  const { movie } = useMovieQueries(parseInt(id!));

  // TODO: ajust width

  return (
    <main className="px-4">
      <nav className="w-full p-4 mb-3">
        {movie && <BreadcrumbPath movie={movie} />}
      </nav>
      {movie && (
        <section className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.title}
            className="w-[70%] max-w-[300px] mx-auto shadow rounded"
          />
          <article className="w-[90%] max-w-md md:mb-auto md:mt-6 ">
            <h2 className="font-bold text-xl text-center truncate w-full md:text-start md:text-3xl md:text-wrap">
              {movie.title}
            </h2>
            <p className="text-semibold text-lg text-muted-foreground">
              {new Intl.DateTimeFormat("pt-BR", { year: "numeric" }).format(
                new Date(movie.release_date)
              )}
            </p>
            <div>
              <AccordionList movie={movie} />
            </div>
          </article>
        </section>
      )}
    </main>
  );
}
