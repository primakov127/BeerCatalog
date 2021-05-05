import { Action } from "redux";
import { ThunkAction } from "redux-thunk";

import { AppState, BeerItem } from "./types";

export const SET_BEER_CATALOG = "SET_BEER_CATALOG";
export const ADD_BEER_CATALOG = "ADD_BEER_CATALOG";
export const SET_IS_CATALOG_LOADING = "SET_IS_CATALOG_LOADING";

export const ADD_BEER_FAVORITES = "ADD_BEER_FAVORITES";

export const INC_SEARCH_CURRENT_PAGE = "INC_SEARCH_CURRENT_PAGE";
export const RESET_SEARCH_CURRENT_PAGE = "SET_SEARCH_CURRENT_PAGE";
export const SET_SEARCH_BEER_NAME = "SET_SEARCH_BEER_NAME";
export const RESET_SEARCH_BEER_NAME = "RESET_SEARCH_BEAR_NAME";

export type ActionType =
  | { type: typeof SET_BEER_CATALOG; payload: BeerItem[] }
  | { type: typeof ADD_BEER_CATALOG; payload: BeerItem[] }
  | { type: typeof SET_IS_CATALOG_LOADING; payload: boolean }
  | { type: typeof ADD_BEER_FAVORITES; payload: number }
  | { type: typeof INC_SEARCH_CURRENT_PAGE }
  | { type: typeof RESET_SEARCH_CURRENT_PAGE }
  | { type: typeof SET_SEARCH_BEER_NAME; payload: string }
  | { type: typeof RESET_SEARCH_BEER_NAME };

// Action creators
export const setBeerCatalog = (beerCatalog: BeerItem[]): ActionType => ({
  type: SET_BEER_CATALOG,
  payload: beerCatalog,
});

export const addBeerCatalog = (newBeerCatalogItems: BeerItem[]): ActionType => ({
  type: ADD_BEER_CATALOG,
  payload: newBeerCatalogItems,
});

export const setIsCatalogLoading = (isLoading: boolean): ActionType => ({
  type: SET_IS_CATALOG_LOADING,
  payload: isLoading,
});

export const addBeerFavorites = (id: number): ActionType => ({
  type: ADD_BEER_FAVORITES,
  payload: id,
});

export const incSearchCurrentPage = (): ActionType => ({
  type: INC_SEARCH_CURRENT_PAGE,
});

export const resetSearchCurrentPage = (): ActionType => ({
  type: RESET_SEARCH_CURRENT_PAGE,
});

export const setSearchBeerName = (beerName: string): ActionType => ({
  type: SET_SEARCH_BEER_NAME,
  payload: beerName,
});

export const resetSearchBeerName = (): ActionType => ({ type: RESET_SEARCH_BEER_NAME });

export const loadBeerCatalog = (): ThunkAction<void, AppState, unknown, Action> => async (dispatch, getState) => {
  const { pageSize, currentPage, beerName } = getState().searchParams;
  const queryParams = new URLSearchParams();

  queryParams.set("page", currentPage.toString());
  queryParams.set("per_page", pageSize.toString());
  beerName ? queryParams.set("beer_name", beerName) : null;

  dispatch(setIsCatalogLoading(true));
  const response = await fetch(`https://api.punkapi.com/v2/beers?${queryParams.toString()}`);
  const beerCatalog: BeerItem[] = await response.json();
  dispatch(setIsCatalogLoading(false));

  return dispatch(addBeerCatalog(beerCatalog));
};
