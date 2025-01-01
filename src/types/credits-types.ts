export interface CastMember {
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number; // 1 para feminino, 2 para masculino, 0 para não especificado
  id: number;
  name: string; // Nome do ator/atriz
  order: number; // A ordem de exibição no elenco
  profile_path: string | null;
}

export interface CrewMember {
  credit_id: string;
  department: string; // Ex: "Direction", "Production", etc.
  gender: number; // 1 para feminino, 2 para masculino, 0 para não especificado
  id: number;
  job: string;
  name: string;
  profile_path: string | null;
}

export interface CreditsResponse {
  id: number;
  cast: CastMember[];
  crew: CrewMember[];
}
