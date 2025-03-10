import type { Person } from '@/types/creditsTypes'
import type { Movie } from '@/types/movieTypes'
import type { TVShow } from '@/types/tvTypes'
import { formatDateByYear } from '@/utils/dataFormat'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'

interface MoviePreviewProps {
  item: Movie | TVShow | Person
  showTitle: boolean
}

export default function MoviePreview({ item, showTitle }: MoviePreviewProps) {
  const imagePath = item.media_type === 'person' ? item.profile_path : item.poster_path
  const imageUrl = imagePath ? `https://image.tmdb.org/t/p/original/${imagePath}` : null

  if (!imageUrl) return null

  return (
    <Link to={`/${item.media_type}/${item.id}`} className='flex flex-col items-center justify-center'>
      <LazyLoadImage
        src={imageUrl}
        alt={item.media_type === 'movie' ? item.title : item.name}
        className='h-full rounded-md object-cover shadow-lg transition-all duration-300 ease-in-out hover:scale-95'
      />
      {showTitle && (
        <div className='mx-auto flex max-w-48 flex-col items-center justify-center'>
          <h2 className='line-clamp-2 w-full truncate text-wrap text-center text-xl font-bold'>
            {item.media_type === 'movie' ? item.title : item.name}
          </h2>
          {item.media_type !== 'person' && (
            <p className={'text-semibold text-lg text-muted-foreground'}>
              {formatDateByYear(item.media_type === 'movie' ? item.release_date : item.first_air_date)}
            </p>
          )}
        </div>
      )}
    </Link>
  )
}
