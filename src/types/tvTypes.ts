export interface TVShow {
  id: number
  name: string
  media_type: 'tv'
  first_air_date?: string
  poster_path?: string
  overview: string
}

export interface TVShowResponse {
  page: number
  results: TVShow[]
  total_pages: number
  total_results: number
}
