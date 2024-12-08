import BreadcrumbPath from "@/components/breadcrumbPath";
import { useMovieQueries } from "@/hooks/useMovieQuery";
import { useParams } from "react-router-dom";

export default function MovieView() {
  const { id } = useParams();
  const { movie } = useMovieQueries(parseInt(id!));

  return (
    <main>
      <nav className="w-full p-4">
        {movie && <BreadcrumbPath movie={movie} />}
      </nav>
    </main>
  );
}
