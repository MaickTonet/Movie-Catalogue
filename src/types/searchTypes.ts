import type { Movie } from './movieTypes'
import type { Person } from './personTypes'
import type { TVShow } from './tvTypes'

export type SearchResult = Movie | TVShow | Person

export interface SearchResponse {
  page: number
  results: SearchResult[]
  total_results: number
  total_pages: number
}
