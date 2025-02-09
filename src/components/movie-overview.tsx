import { formatDateByYear, formatMovieRunTime } from '@/helpers/dataFormat'
import { Movie } from '@/types/movieTypes'
import CastCarousel from './castCarousel'
import CollectionView from './collectionView'
import GenderBadgesList from './genderBadgesList'
import MovieGeneralInfo from './movieGeneralInfo'
import MovieImagesDialog from './movieImagesDialog'
import ProductionCompaniesView from './productionCompaniesView'
import MovieCarousel from './movieCarousel'

export default function MovieOverview({ movie }: { movie: Movie }) {
  return (
    <section className={`relative flex flex-col flex-wrap items-center justify-center space-y-3 md:flex-row md:items-start pb-12`}>
      <aside className='flex flex-col items-center space-y-3 pb-3'>
        <MovieImagesDialog movie={movie} />
        <div className='flex w-[80%] flex-col items-center justify-center space-y-2'>
          <h2 className='text-center text-2xl font-bold'>{movie.title}</h2>
          {movie.tagline && <h3 className='max-w-md text-wrap text-center text-muted'>{movie.tagline} </h3>}
          <p className='font-bold text-muted-foreground'>{formatDateByYear(movie.release_date)}</p>
          <p className='font-bold text-muted'>{formatMovieRunTime(movie.runtime)}</p>
          <GenderBadgesList movie={movie} />
        </div>
      </aside>
      <aside className='flex w-[80%] max-w-lg flex-col items-start gap-6 pb-8'>
        <MovieGeneralInfo movie={movie} />
        <CastCarousel movie={movie} />
        <CollectionView movie={movie} />
        <ProductionCompaniesView movie={movie} />
      </aside>
      <MovieCarousel items={movie.recommendations.results} title={'Recomendados'} mediaType={'movie'}  />
    </section>
  )
}
