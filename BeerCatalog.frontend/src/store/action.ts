import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { AppState, BeerCatalogItem } from "./types";

export const SET_BEER_CATALOG = "SET_BEER_CATALOG";

export type ActionType = { type: typeof SET_BEER_CATALOG; payload: BeerCatalogItem[] };

// Action creators
export const setBeerCatalog = (beerCatalog: BeerCatalogItem[]): ActionType => ({
  type: SET_BEER_CATALOG,
  payload: beerCatalog,
});

export const loadBeerCatalog = (): ThunkAction<void, AppState, unknown, Action> => async (dispatch) => {
  const response = await fetch("https://api.punkapi.com/v2/beers");
  const beerCatalog: BeerCatalogItem[] = await response.json();

  return dispatch(setBeerCatalog(beerCatalog));
};
