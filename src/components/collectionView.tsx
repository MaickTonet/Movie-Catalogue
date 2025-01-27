import type { Movie } from '@/types/movieTypes'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'
import { Fragment } from 'react/jsx-runtime'

export default function CollectionView({ movie }: { movie: Movie }) {
  return (
    <Fragment>
      {movie.belongs_to_collection ? (
        <aside className='flex w-full flex-col items-center space-y-2'>
          <h2 className='max-w-sm text-xl font-bold'>{movie.belongs_to_collection.name} </h2>
          <LazyLoadImage
            src={`https://image.tmdb.org/t/p/original/${movie.belongs_to_collection.backdrop_path}`}
            alt={movie.title}
            className='v w-full max-w-sm rounded shadow-md transition-all duration-300 ease-in-out hover:scale-95'
          />
          <Link to={'/'} className='flex justify-center font-semibold text-muted-foreground hover:underline'>
            Ver mais
          </Link>
        </aside>
      ) : null}
    </Fragment>
  )
}
