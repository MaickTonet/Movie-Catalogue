import { formatDateByYear } from '@/helpers/data-format'
import type { MoviesResponse } from '@/types/movieTypes'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'
import { Fragment } from 'react/jsx-runtime'
import { Button } from './ui/button'

export default function MovieList({ movies, search }: { movies: MoviesResponse; search: string | null }) {
  if (!movies.results.length)
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
      <h2 className={'mb-8 hidden pl-[10%] text-xl font-semibold md:block'}>Resultados da busca por: "{search}"</h2>
      <aside className={'flex flex-wrap justify-center gap-4 px-2'}>
        {movies.results.map((movie) => (
          <div key={movie.id} className={'w-fit space-y-2 transition-all duration-300 ease-in-out hover:scale-95'}>
            {movie.poster_path != null && (
              <Fragment>
                <LazyLoadImage
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt={movie.title}
                  className={'h-[300px] rounded-md object-cover'}
                />
                <div className={'mx-auto flex max-w-48 flex-col items-center justify-center'}>
                  <h2 className={'line-clamp-2 w-full truncate text-wrap text-center text-xl font-bold'}>
                    {movie.title}
                  </h2>
                  <p className={'text-semibold text-lg text-muted-foreground'}>
                    {formatDateByYear(movie.release_date)}
                  </p>
                </div>
              </Fragment>
            )}
          </div>
        ))}
      </aside>
    </Fragment>
  )
}
