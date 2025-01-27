import type { Collection } from './colllecttionTypes'
import type { Company } from './companiesTypes'
import type { Country } from './countriesTypes'
import type { Credits } from './creditsTypes'
import { Genre } from './genreTypes'
import type { Images } from './imagesTypes'
import type { VideoResponse } from './videoTypes'

export interface Movie {
  id: number
  title: string
  overview: string
  media_type: 'movie'
  poster_path: string
  backdrop_path: string
  belongs_to_collection: Collection | null
  budget: number
  production_companies: Company[]
  production_countries: Country[]
  videos: VideoResponse
  credits: Credits
  images: Images
  recommendations: MovieResponse
  original_language: string
  original_title: string
  adult: boolean
  revenue: number
  runtime: number
  status: string
  tagline: string
  video: boolean
  genres: Genre[]
  popularity: number
  release_date: string
  vote_average: number
  vote_count: number
}

export interface MovieResponse {
  page: number
  results: Movie[]
  total_pages: number
  total_results: number
}
