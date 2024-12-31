import BreadcrumbPath from "@/components/breadcrumb-path";
import Loading from "@/components/loading";
import MovieOverview from "@/components/movie-overview";
import { useMovieQueries } from "@/hooks/use-movie-query";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

export default function MovieView() {
  const { id } = useParams();
  const { movie, isLoading } = useMovieQueries(parseInt(id!));

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main>
      <Helmet>
        <title>{movie?.title} - Movie Catalogue</title>
      </Helmet>
      {movie && <BreadcrumbPath movie={movie} />}
      {movie && <MovieOverview movie={movie} />}
    </main>
  );
}
