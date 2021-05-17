import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { getBeers } from "../api/punkAPI";

import { BeerItem } from "./models/BeerItem";
import { AppState } from "./state";

export const SET_BEER_CATALOG = "SET_BEER_CATALOG";
export const ADD_BEER_CATALOG = "ADD_BEER_CATALOG";
export const SET_IS_CATALOG_LOADING = "SET_IS_CATALOG_LOADING";

export const ADD_BEER_FAVORITES = "ADD_BEER_FAVORITES";
export const REMOVE_BEER_FAVORITES = "REMOVE_BEER_FAVORITES";

export const INC_SEARCH_CURRENT_PAGE = "INC_SEARCH_CURRENT_PAGE";
export const RESET_SEARCH_CURRENT_PAGE = "SET_SEARCH_CURRENT_PAGE";
export const SET_SEARCH_BEER_NAME = "SET_SEARCH_BEER_NAME";
export const RESET_SEARCH_BEER_NAME = "RESET_SEARCH_BEAR_NAME";
export const SET_FILTER_ABV = "SET_FILTER_ABV";
export const SET_FILTER_IBU = "SET_FILTER_IBU";
export const SET_FILTER_EBC = "SET_FILTER_EBC";

export type ActionType =
  | { type: typeof SET_BEER_CATALOG; payload: BeerItem[] }
  | { type: typeof ADD_BEER_CATALOG; payload: BeerItem[] }
  | { type: typeof SET_IS_CATALOG_LOADING; payload: boolean }
  | { type: typeof ADD_BEER_FAVORITES; payload: number }
  | { type: typeof REMOVE_BEER_FAVORITES; payload: number }
  | { type: typeof INC_SEARCH_CURRENT_PAGE }
  | { type: typeof RESET_SEARCH_CURRENT_PAGE }
  | { type: typeof SET_SEARCH_BEER_NAME; payload: string }
  | { type: typeof RESET_SEARCH_BEER_NAME }
  | { type: typeof SET_FILTER_ABV; payload: number[] }
  | { type: typeof SET_FILTER_IBU; payload: number[] }
  | { type: typeof SET_FILTER_EBC; payload: number[] };

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

export const removeBeerFavorites = (id: number): ActionType => ({
  type: REMOVE_BEER_FAVORITES,
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

export const setFilterABV = (value: number[]): ActionType => ({
  type: SET_FILTER_ABV,
  payload: value,
});

export const setFilterIBU = (value: number[]): ActionType => ({
  type: SET_FILTER_IBU,
  payload: value,
});

export const setFilterEBC = (value: number[]): ActionType => ({
  type: SET_FILTER_EBC,
  payload: value,
});

export const loadBeerCatalog = (): ThunkAction<void, AppState, unknown, Action> => async (dispatch, getState) => {
  const searchParams = getState().searchParams;

  dispatch(setIsCatalogLoading(true));
  const beerCatalog = await getBeers(searchParams);
  dispatch(setIsCatalogLoading(false));

  return dispatch(addBeerCatalog(beerCatalog));
};
