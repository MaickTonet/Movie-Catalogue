import MovieCorridorList from "@/components/movieCorridorList";
import TrendingMovies from "@/components/trendingMovies";

export default function Home() {
  return (
    <main className="w-full flex flex-col space-y-8 py-4">
      <TrendingMovies />
      <MovieCorridorList numberOfCategories={6} />
    </main>
  );
}
