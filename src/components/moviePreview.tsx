import { formatDateByYear } from '@/helpers/data-format'
import type { Movie } from '@/types/movieTypes'
import type { Person } from '@/types/personTypes'
import type { TVShow } from '@/types/tvTypes'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'

interface MoviePreviewProps {
  item: Movie | TVShow | Person
}

export default function MoviePreview({ item }: MoviePreviewProps) {
  const getItemDetails = () => {
    const imagePath = item.media_type === 'person' ? item.profile_path : item.poster_path

    if (!imagePath) return null

    const details = {
      image: `https://image.tmdb.org/t/p/original/${imagePath}`,
      title: item.media_type === 'movie' ? (item as Movie).title : (item as TVShow | Person).name,
      date:
        item.media_type === 'movie'
          ? formatDateByYear((item as Movie).release_date)
          : item.media_type === 'tv'
            ? formatDateByYear((item as TVShow).first_air_date)
            : item.known_for_department || null,
    }

    return (
      <Link to={`/movie/${item.id}`}>
        <LazyLoadImage
          src={details.image}
          alt={details.title}
          className='h-[300px] rounded-md object-cover shadow-lg transition-all duration-300 ease-in-out hover:scale-95'
        />
        <div className='mx-auto flex max-w-48 flex-col items-center justify-center'>
          <h2 className='line-clamp-2 w-full truncate text-wrap text-center text-xl font-bold'>{details.title}</h2>
          <p className='text-semibold text-lg text-muted-foreground'>{details.date}</p>
        </div>
      </Link>
    )
  }

  return getItemDetails()
}
