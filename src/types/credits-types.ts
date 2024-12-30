export interface CastMember {
  cast_id: number;
  character: string; // Nome do personagem
  credit_id: string;
  gender: number; // 1 para feminino, 2 para masculino, 0 para não especificado
  id: number; // ID do ator/atriz
  name: string; // Nome do ator/atriz
  order: number; // A ordem de exibição no elenco
  profile_path: string | null; // Caminho para a imagem do ator/atriz
}

export interface CrewMember {
  credit_id: string;
  department: string; // Ex: "Direction", "Production", etc.
  gender: number; // 1 para feminino, 2 para masculino, 0 para não especificado
  id: number; // ID do membro da equipe
  job: string; // Cargo do membro da equipe (ex: Diretor, Produtor, etc.)
  name: string; // Nome do membro da equipe
  profile_path: string | null; // Caminho para a imagem do membro da equipe
}

export interface MovieCredits {
  id: number; 
  cast: CastMember[]; // Lista de membros do elenco
  crew: CrewMember[]; // Lista de membros da equipe
}
