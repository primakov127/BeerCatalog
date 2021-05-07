import {
  ActionType,
  ADD_BEER_CATALOG,
  ADD_BEER_FAVORITES,
  INC_SEARCH_CURRENT_PAGE,
  REMOVE_BEER_FAVORITES,
  RESET_SEARCH_BEER_NAME,
  RESET_SEARCH_CURRENT_PAGE,
  SET_BEER_CATALOG,
  SET_FILTER_ABV,
  SET_FILTER_EBC,
  SET_FILTER_IBU,
  SET_IS_CATALOG_LOADING,
  SET_SEARCH_BEER_NAME,
} from "./action";
import { AppState } from "./state";

const initialState: AppState = {
  beerCatalog: [],
  isCatalogLoading: false,
  favoriteBeerIDs: [],
  searchParams: {
    pageSize: 9,
    currentPage: 1,
    beerName: null,
    filter: {
      abv: [0, 56],
      ibu: [0, 251],
      ebc: [0, 601],
    },
  },
};

const reducer = (state: AppState = initialState, action: ActionType) => {
  switch (action.type) {
    case SET_BEER_CATALOG:
      return { ...state, beerCatalog: action.payload };
    case ADD_BEER_CATALOG:
      return { ...state, beerCatalog: [...state.beerCatalog, ...action.payload] };
    case SET_IS_CATALOG_LOADING:
      return { ...state, isCatalogLoading: action.payload };
    case ADD_BEER_FAVORITES:
      return { ...state, favoriteBeerIDs: [...state.favoriteBeerIDs, action.payload] };
    case REMOVE_BEER_FAVORITES:
      return { ...state, favoriteBeerIDs: state.favoriteBeerIDs.filter((id) => id !== action.payload) };
    case INC_SEARCH_CURRENT_PAGE:
      if (state.beerCatalog.length === 0) return state;
      return { ...state, searchParams: { ...state.searchParams, currentPage: state.searchParams.currentPage + 1 } };
    case RESET_SEARCH_CURRENT_PAGE:
      return { ...state, searchParams: { ...state.searchParams, currentPage: 1 } };
    case SET_SEARCH_BEER_NAME:
      return { ...state, searchParams: { ...state.searchParams, beerName: action.payload } };
    case RESET_SEARCH_BEER_NAME:
      return { ...state, searchParams: { ...state.searchParams, beerName: null } };
    case SET_FILTER_ABV:
      return { ...state, searchParams: { ...state.searchParams, filter: { ...state.searchParams.filter, abv: action.payload } } };
    case SET_FILTER_IBU:
      return { ...state, searchParams: { ...state.searchParams, filter: { ...state.searchParams.filter, ibu: action.payload } } };
    case SET_FILTER_EBC:
      return { ...state, searchParams: { ...state.searchParams, filter: { ...state.searchParams.filter, ebc: action.payload } } };
    default:
      return state;
  }
};

export default reducer;
