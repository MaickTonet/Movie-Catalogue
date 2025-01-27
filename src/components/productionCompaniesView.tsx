import type { Movie } from '@/types/movieTypes'
import { Fragment } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export default function ProductionCompaniesView({ movie }: { movie: Movie }) {
  return (
    <Fragment>
      {movie.production_companies ? (
        <aside className='mx-auto max-w-sm space-y-2'>
          <h2 className='text-center text-xl font-bold'>Produção</h2>
          <div className='flex w-full flex-wrap items-center justify-center gap-4'>
            {movie.production_companies.map((company) => (
              <div key={company.id} className='max-w-24'>
                {company.logo_path && (
                  <LazyLoadImage
                    src={`https://image.tmdb.org/t/p/original/${company.logo_path}`}
                    alt={company.name}
                    className='transition-all duration-300 ease-in-out hover:scale-95'
                  />
                )}
              </div>
            ))}
          </div>
        </aside>
      ) : null}
    </Fragment>
  )
}
