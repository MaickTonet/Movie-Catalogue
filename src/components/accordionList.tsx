import { Movie } from "@/types/movieTypes";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Badge } from "./ui/badge";

export default function AccordionList({ movie }: { movie: Movie }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1" className="border-zinc-600">
        <AccordionTrigger>Sinopse</AccordionTrigger>
        <AccordionContent>
          <p>{movie.overview}</p>
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
  );
}
