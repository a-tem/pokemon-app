export enum ActionTypes {
  LOADING_START = "LOADING_START",
  LOADING_END = "LOADING_END",
  FETCH_SUCCESS = "FETCH_SUCCESS",
  FETCH_ERROR = "FETCH_ERROR",
}

export interface AppAction {
  type: ActionTypes;
  payload?: unknown;
}

export interface LoadingStartAction {
  type: ActionTypes.LOADING_START;
  payload: string;
}

export interface LoadingEndAction {
  type: ActionTypes.LOADING_END;
}

export interface FetchErrorAction {
  type: ActionTypes.FETCH_ERROR;
  payload: string;
}
export interface FetchSuccessAction {
  type: ActionTypes.FETCH_SUCCESS;
  payload: string;
}
