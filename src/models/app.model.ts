export interface AppState {
  term: string;
  data: null | any; // todo: specify data type
  error: boolean;
  errorMessage: string;
  isLoading: boolean;
}
