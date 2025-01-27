import { formatMoneyValues } from '@/helpers/dataFormat'
import type { Movie } from '@/types/movieTypes'
import { CircleDollarSign, Clapperboard, DollarSign } from 'lucide-react'
import { Fragment } from 'react'

export default function MovieGeneralInfo({ movie }: { movie: Movie }) {
  const movieDirector = movie.credits.crew.filter((crew) => crew.job === 'Director')
  return (
    <Fragment>
      {movie.overview && (
        <div className='space-y-2'>
          <h2 className='text-xl font-bold'>Sinopse:</h2>
          <p>{movie.overview}</p>
        </div>
      )}
      <h2 className='flex items-center gap-1 rounded-md bg-purple-500/20 p-1 text-xl font-bold'>
        <Clapperboard className='text-purple-600' />
        Diretor: <strong className='text-md font-normal'> {movieDirector[0].name}</strong>
      </h2>
      {movie.budget !== 0 && (
        <h2 className='flex items-center gap-1 rounded-md bg-blue-500/20 p-1 text-xl font-bold'>
          <DollarSign className='text-blue-600' />
          Orçamento: <strong className='text-md font-normal'>{formatMoneyValues(movie.budget)}</strong>
        </h2>
      )}
      {movie.revenue !== 0 && (
        <h2 className='flex items-center gap-1 rounded-md bg-emerald-500/20 p-1 text-xl font-bold'>
          <CircleDollarSign className='text-emerald-600' />
          Receita: <strong className='text-md font-normal'>{formatMoneyValues(movie.revenue)}</strong>
        </h2>
      )}
    </Fragment>
  )
}
