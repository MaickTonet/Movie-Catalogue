import BreadcrumbPath from '@/components/breadcrumb-path'
import Loading from '@/components/loading'
import MovieOverview from '@/components/movie-overview'
import { useMovie } from '@/hooks/use-movie'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'

export default function MovieView() {
  const { id } = useParams()
  const { data: movie, isLoading } = useMovie(parseInt(id as string))

  if (isLoading) return <Loading />

  return (
    <main>
      <Helmet>
        <title>{movie?.title} - Movie Catalogue</title>
      </Helmet>
      {movie && <BreadcrumbPath path={movie.title} search={false} />}
      {movie && <MovieOverview movie={movie} />}
    </main>
  )
}
