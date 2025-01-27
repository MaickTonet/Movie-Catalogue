export interface Person {
  id: number
  name: string
  media_type: 'person'
  profile_path?: string
  known_for_department?: string
}

interface Cast {
  adult: boolean
  gender: number
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: string
  character: string
  credit_id: string
  order: number
}

interface Crew {
  adult: boolean
  gender: number
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: string
  credit_id: string
  department: string
  job: string
}

export interface Credits {
  cast: Cast[]
  crew: Crew[]
}
