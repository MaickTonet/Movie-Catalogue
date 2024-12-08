import BreadcrumbPath from "@/components/breadcrumbPath";
import { useMovieQueries } from "@/hooks/useMovieQuery";
import { useParams } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

export default function MovieView() {
  const { id } = useParams();

  const { movie } = useMovieQueries(parseInt(id!));

  // TODO: move accordion to its own component, get movie genre list in useGenreQuery and finish movie view

  return (
    <main>
      <nav className="w-full p-4 mb-3">
        {movie && <BreadcrumbPath movie={movie} />}
      </nav>
      {movie && (
        <section className="flex flex-col items-center gap-2">
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.title}
            className="w-[70%] mx-auto shadow rounded"
          />
          <h2 className="font-bold text-xl text-center truncate w-full  lg:text-2xl">
            {movie.title}
          </h2>
          <p className="text-semibold text-lg text-zinc-500">
            {new Intl.DateTimeFormat("pt-BR", { year: "numeric" }).format(
              new Date(movie.release_date)
            )}
          </p>
          <article className="w-[90%]">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-zinc-600">
                <AccordionTrigger>Sinopse</AccordionTrigger>
                <AccordionContent>
                  <p className="text-zinc-400">{movie.overview}</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-zinc-600">
                <AccordionTrigger>Informações Gerais</AccordionTrigger>
                <AccordionContent>
                  <section className="flex flex-col gap-3 text-zinc-400">
                    {movie.adult && (
                      <Badge variant={"destructive"} className="w-fit">
                        Filme Adulto
                      </Badge>
                    )}
                    <p>
                      Data de lancamento:{" "}
                      {new Intl.DateTimeFormat("pt-BR").format(
                        new Date(movie.release_date)
                      )}
                    </p>
                  </section>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-zinc-600">
                <AccordionTrigger>Elenco</AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the other
                  components&apos; aesthetic.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </article>
        </section>
      )}
    </main>
  );
}
