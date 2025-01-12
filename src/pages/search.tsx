import BreadcrumbPath from '@/components/breadcrumb-path'
import Loading from '@/components/loading'
import { PaginationResponse } from '@/components/paginationResponse'
import SearchResponseList from '@/components/searchResponseList'
import { useSearchQuery } from '@/hooks/useSearchQuery'
import { Helmet } from 'react-helmet-async'
import { useSearchParams } from 'react-router-dom'

export default function Search() {
  const [searchParams] = useSearchParams()
  const searchQuery = searchParams.get('search')
  const currentPage = Number(searchParams.get('page') ?? 1)

  const { data, isLoading } = useSearchQuery(searchQuery, currentPage)

  if (isLoading) return <Loading />

  return (
    <main className='pb-8'>
      <Helmet>
        <title>Busca por {searchQuery} - Movie Catalogue</title>
      </Helmet>
      <BreadcrumbPath search={true} path={searchQuery} />
      {data && (
        <SearchResponseList search={searchQuery} searchResults={data.results} totalRegisters={data.total_results} />
      )}
      {data && <PaginationResponse totalPages={data.total_pages} />}
    </main>
  )
}
