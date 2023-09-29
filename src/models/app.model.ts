export interface AppState {
  term: string;
  data: null | Data;
  error: boolean;
  errorMessage: string;
  isLoading: boolean;
}

export interface Data {
  id: number;
  name: string;
  height: number;
  weight: number;
  abilities: Ability[];
  types: Type[];
  stats: Stats[];
  sprites: any;
}

export interface Stats {
  base_stat: number;
  stat: {
    name: string;
    url?: string;
  };
}

export interface Type {
  slot: number;
  type: {
    name: string;
    url?: string;
  };
}

export interface Ability {
  slot: number;
  ability: {
    name: string;
    url?: string;
  };
}
