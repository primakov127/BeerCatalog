import { ActionType, SET_BEER_CATALOG } from "./action";
import { AppState } from "./types";

const initialState: AppState = {
  beerCatalog: [],
};

const reducer = (state: AppState = initialState, action: ActionType) => {
  switch (action.type) {
    case SET_BEER_CATALOG:
      return { ...state, beerCatalog: [...action.payload] };
    default:
      return state;
  }
};

export default reducer;
