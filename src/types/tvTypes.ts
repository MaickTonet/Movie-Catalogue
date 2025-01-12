export interface TVShow {
  id: number
  name: string
  media_type: 'tv'
  first_air_date?: string | null
  poster_path?: string
  overview: string
}
