export interface Person {
  id: number
  name: string
  media_type: 'person'
  profile_path?: string | null
  known_for_department?: string
}
