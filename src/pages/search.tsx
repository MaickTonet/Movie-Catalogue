import BreadcrumbPath from '@/components/breadcrumb-path'
import Loading from '@/components/loading'
import MovieList from '@/components/movie-list'
import { useSearchMovie } from '@/hooks/use-movie'
import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'

export default function Search() {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const searchQuery = queryParams.get('search')
  const { data: movies, isLoading } = useSearchMovie(searchQuery)

  if (isLoading) return <Loading />

  return (
    <main>
      <Helmet>
        <title>Busca por {searchQuery} - Movie Catalogue</title>
      </Helmet>
      <BreadcrumbPath search={true} path={searchQuery} />
      {movies?.results && <MovieList movies={movies} search={searchQuery} />}
    </main>
  )
}
