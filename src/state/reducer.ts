import { AppState, Data } from "../models";
import { ActionTypes, AppAction } from "./actions";

export const reducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case ActionTypes.LOADING_START: {
      return {
        ...state,
        error: false,
        errorMessage: "",
        isLoading: true,
        term: action.payload as string,
      };
    }
    case ActionTypes.LOADING_END: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case ActionTypes.FETCH_ERROR: {
      return {
        ...state,
        term: "",
        data: null,
        isLoading: false,
        error: true,
        errorMessage: action.payload as string,
      };
    }
    case ActionTypes.FETCH_SUCCESS: {
      return {
        ...state,
        error: false,
        errorMessage: "",
        isLoading: false,
        term: state.term,
        data: action?.payload as Data,
      };
    }
    default:
      return state;
  }
};
