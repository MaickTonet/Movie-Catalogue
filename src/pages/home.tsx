import Loading from "@/components/loading";
import MovieTabs from "@/components/movie-tabs";
import TrendingMovies from "@/components/trending-movies";
import { useGenreQuery } from "@/hooks/use-genre-query";
import { useMovieQueries } from "@/hooks/use-movie-query";

export default function Home() {
  const { trendingMovies, isLoading } = useMovieQueries();
  const { movieGenres, seriesGenres } = useGenreQuery();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main className="w-full flex flex-col space-y-8 py-4">
      <TrendingMovies trendingMovies={trendingMovies} />
      <MovieTabs movieGenres={movieGenres} seriesGenres={seriesGenres} />
    </main>
  );
}
