import { ActionType, ADD_BEER_FAVORITES, SET_BEER_CATALOG, SET_IS_CATALOG_LOADING } from "./action";
import { AppState } from "./types";

const initialState: AppState = {
  beerCatalog: [],
  isCatalogLoading: false,
  favoriteBeerIDs: [],
};

const reducer = (state: AppState = initialState, action: ActionType) => {
  switch (action.type) {
    case SET_BEER_CATALOG:
      return { ...state, beerCatalog: [...state.beerCatalog, ...action.payload] };
    case ADD_BEER_FAVORITES:
      return { ...state, favoriteBeerIDs: [...state.favoriteBeerIDs, action.payload] };
    case SET_IS_CATALOG_LOADING:
      return { ...state, isCatalogLoading: action.payload };
    default:
      return state;
  }
};

export default reducer;
