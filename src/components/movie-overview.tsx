import { useCreditsQuery } from "@/hooks/use-credits-query";
import { Movie } from "@/types/movieTypes";
import { Fragment } from "react/jsx-runtime";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Badge } from "./ui/badge";

// TODO: simplify component

export default function MovieOverview({ movie }: { movie: Movie }) {
  const { data: credits } = useCreditsQuery(movie.id);

  return (
    <Fragment>
      <aside className={"md:hidden pb-8"}>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-zinc-600">
            <AccordionTrigger>Sinopse</AccordionTrigger>
            <AccordionContent>
              <p>{movie.overview || "Nenhuma sinopse disponível"}</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border-zinc-600">
            <AccordionTrigger>Informações Gerais</AccordionTrigger>
            <AccordionContent>
              <section className="flex flex-col gap-3 text-zinc-400">
                <div className="flex flex-wrap gap-2">
                  {movie.adult && (
                    <Badge variant={"destructive"} className="w-fit">
                      Filme Adulto
                    </Badge>
                  )}
                  {movie.genres.map((genre) => (
                    <Badge
                      key={genre.id}
                      variant={"secondary"}
                      className="w-fit"
                    >
                      {genre.name}
                    </Badge>
                  ))}
                </div>
                <p>
                  Data de lancamento:{" "}
                  {new Intl.DateTimeFormat("pt-BR").format(
                    new Date(movie.release_date)
                  )}
                </p>
                <p>
                  Dirigido por:{" "}
                  {
                    credits?.crew.find((member) => member.job === "Director")
                      ?.name
                  }
                </p>
              </section>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border-zinc-600">
            <AccordionTrigger>Elenco</AccordionTrigger>
            <AccordionContent>
              <div className={"flex gap-5 flex-wrap justify-center"}>
                {credits?.cast.slice(0, 12).map((member) => (
                  <div
                    key={member.id}
                    className="flex flex-col gap-1 max-w-24 items-center mb-auto"
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/w500${member.profile_path}`}
                      alt={member.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <p>{member.name}</p>
                    <p className={"text-muted"}>{member.character}</p>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </aside>
      <aside className={"hidden md:block"}>
        <section className="flex flex-col gap-3 text-zinc-400 mt-4">
          <div className="flex flex-wrap gap-2">
            {movie.adult && (
              <Badge variant={"destructive"} className="w-fit">
                Filme Adulto
              </Badge>
            )}
            {movie.genres.map((genre) => (
              <Badge key={genre.id} variant={"secondary"} className="w-fit">
                {genre.name}
              </Badge>
            ))}
          </div>
          <p>
            Data de lancamento:{" "}
            {new Intl.DateTimeFormat("pt-BR").format(
              new Date(movie.release_date)
            )}
          </p>
          <p>
            Dirigido por:{" "}
            {credits?.crew.find((member) => member.job === "Director")?.name}
          </p>
          <p>{movie.overview || "Nenhuma sinopse disponível"}</p>
        </section>
      </aside>
    </Fragment>
  );
}
