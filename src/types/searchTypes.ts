import type { Person } from './creditsTypes'
import type { Movie } from './movieTypes'
import type { TVShow } from './tvTypes'

export type SearchResults = Movie | TVShow | Person

export interface SearchResponse {
  page: number
  results: SearchResults[]
  total_results: number
  total_pages: number
}
