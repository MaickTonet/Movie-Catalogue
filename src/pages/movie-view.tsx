import BreadcrumbPath from "@/components/breadcrumb-path";
import Loading from "@/components/loading";
import MovieOverview from "@/components/movie-overview";
import { useMovieQueries } from "@/hooks/use-movie-query";
import { useParams } from "react-router-dom";

export default function MovieView() {
  const { id } = useParams();
  const { movie, isLoading } = useMovieQueries(parseInt(id!));

  if (isLoading) {
    return <Loading />;
  }

  // TODO: Add breadcrumb in app layout

  return (
    <main className="px-6 py-4">
      <nav className="w-full p-4 mb-3">
        {movie && <BreadcrumbPath movie={movie} />}
      </nav>
      {movie && (
        <section>
          <MovieOverview movie={movie} />
        </section>
      )}
    </main>
  );
}
