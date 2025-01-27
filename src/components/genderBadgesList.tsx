import type { Movie } from '@/types/movieTypes'
import { Link } from 'react-router-dom'
import { Badge } from './ui/badge'

export default function GenderBadgesList({ movie }: { movie: Movie }) {
  return (
    <div className={'flex flex-wrap justify-center gap-2'}>
      <Badge>{movie.status}</Badge>
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
  )
}
