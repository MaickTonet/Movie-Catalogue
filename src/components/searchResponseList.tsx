import type { Person } from '@/types/creditsTypes'
import type { Movie } from '@/types/movieTypes'
import type { TVShow } from '@/types/tvTypes'
import { Link } from 'react-router-dom'
import { Fragment } from 'react/jsx-runtime'
import MoviePreview from './moviePreview'
import { Button } from './ui/button'

interface SearchResponseListProps {
  searchResults: (Movie | TVShow | Person)[]
  search: string | null
  totalRegisters: number
}

export default function SearchResponseList({ search, searchResults, totalRegisters }: SearchResponseListProps) {
  if (!searchResults.length)
    return (
      <article className={'flex flex-col items-center gap-3 pt-[10%]'}>
        <img
          src='https://cdn-icons-png.flaticon.com/512/6134/6134065.png'
          alt='Nenhum resultado encontrado'
          className={'max-w-[200px]'}
        />
        <p className={'text-lg'}>Nenhum resultado encontrado</p>
        <Link to={'/'}>
          <Button>Voltar para o início</Button>
        </Link>
      </article>
    )

  return (
    <Fragment>
      <div className='mb-8 hidden items-center justify-between px-[5%] md:flex'>
        <h2 className={'text-xl font-semibold'}>Resultados da busca por: "{search}"</h2>
        <p className={'text-muted'}>{totalRegisters} Registros encontrados</p>
      </div>
      <aside className={'flex flex-wrap justify-center gap-4 px-2'}>
        {searchResults.map((result) => (
          <MoviePreview key={result.id} item={result} />
        ))}
      </aside>
    </Fragment>
  )
}
