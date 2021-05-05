import { Action } from "redux";
import { ThunkAction } from "redux-thunk";

import { AppState, BeerItem } from "./types";

export const SET_BEER_CATALOG = "SET_BEER_CATALOG";
export const ADD_BEER_FAVORITES = "ADD_BEER_FAVORITES";
export const SET_IS_CATALOG_LOADING = "SET_IS_CATALOG_LOADING";

export type ActionType =
  | { type: typeof SET_BEER_CATALOG; payload: BeerItem[] }
  | { type: typeof ADD_BEER_FAVORITES; payload: number }
  | { type: typeof SET_IS_CATALOG_LOADING; payload: boolean };

// Action creators
export const setBeerCatalog = (beerCatalog: BeerItem[]): ActionType => ({
  type: SET_BEER_CATALOG,
  payload: beerCatalog,
});

export const addBeerFavorites = (id: number) => ({
  type: ADD_BEER_FAVORITES,
  payload: id,
});

export const setIsCatalogLoading = (isLoading: boolean) => ({
  type: SET_IS_CATALOG_LOADING,
  payload: isLoading,
});

export const loadBeerCatalog = (page: number, pageSize: number): ThunkAction<void, AppState, unknown, Action> => async (dispatch) => {
  dispatch(setIsCatalogLoading(true));
  const response = await fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=${pageSize}`);
  const beerCatalog: BeerItem[] = await response.json();
  dispatch(setIsCatalogLoading(false));

  return dispatch(setBeerCatalog(beerCatalog));
};
