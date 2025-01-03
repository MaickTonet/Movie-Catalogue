import { formatDateByYear } from '@/helpers/data-format'
import { useCreditsQuery } from '@/hooks/use-credits-query'
import { Movie } from '@/types/movieTypes'
import { Link } from 'react-router-dom'
import { Badge } from './ui/badge'
import { Separator } from './ui/separator'

export default function MovieOverview({ movie }: { movie: Movie }) {
  const { data: credits } = useCreditsQuery(movie.id)

  return (
    <section className={'flex flex-col items-center justify-center gap-3 md:flex-row md:items-stretch'}>
      <div className={'flex justify-center'}>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt={movie.title}
          className={'w-[80%] max-w-sm rounded shadow'}
        />
      </div>
      <article className={'max-w-md space-y-4'}>
        <aside className={'flex flex-col items-center'}>
          <h2 className={'w-full text-center text-2xl font-bold md:text-left'}>{movie.title}</h2>
          <p className={'font-semibold text-muted-foreground md:mr-auto'}>{formatDateByYear(movie.release_date)}</p>
        </aside>
        <aside className={'space-y-3'}>
          <div className={'flex w-full flex-wrap items-start gap-2'}>
            {movie.adult && (
              <Badge variant={'destructive'} className='w-fit'>
                Filme Adulto
              </Badge>
            )}
            {movie.genres.map((genre) => (
              <Link to={'/'} key={genre.id}>
                <Badge variant={'secondary'}>{genre.name}</Badge>
              </Link>
            ))}
          </div>
          <div className={'space-y-2'}>
            <h2 className={'text-xl font-bold'}>Informações Gerais</h2>
            <p>Data de lancamento: {formatDateByYear(movie.release_date)}</p>
            <p>Dirigido por: {credits?.crew.find((member) => member.job === 'Director')?.name}</p>
          </div>
          <Separator className={'w-full bg-muted/20'} />
          <div className={'space-y-2'}>
            <h2 className={'text-xl font-bold'}>Sinopse</h2>
            <p className={''}>{movie.overview || 'Nenhuma sinopse disponível'}</p>
          </div>
        </aside>
      </article>
    </section>
  )
}
