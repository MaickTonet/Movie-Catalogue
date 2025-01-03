import Loading from '@/components/loading';
import MovieTabs from '@/components/movie-tabs';
import TrendingMovies from '@/components/trending-movies';
import { useGenreQuery } from '@/hooks/use-genre-query';
import { useTrendingMovies } from '@/hooks/use-movie';

export default function Home() {
	const { data: trendingMovies, isLoading } = useTrendingMovies();
	const { movieGenres, seriesGenres } = useGenreQuery();

	if (isLoading) {
		return <Loading />;
	}

	return (
		<main className={'w-full flex flex-col space-y-8 py-4'}>
			{trendingMovies && <TrendingMovies trendingMovies={trendingMovies} />}
			<MovieTabs movieGenres={movieGenres} seriesGenres={seriesGenres} />
		</main>
	);
}
