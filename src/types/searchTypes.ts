import type { Movie } from './movieTypes'
import type { Person } from './personTypes'
import type { TVShow } from './tvTypes'

export type SearchResults = Movie | TVShow | Person

export interface SearchResponse {
  page: number
  results: SearchResults[]
  total_results: number
  total_pages: number
}
