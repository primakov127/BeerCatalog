import { BeerItem } from "./models/BeerItem";
import { BeerQueryParams } from "./models/BeerQueryParams";

export interface AppState {
  beerCatalog: BeerItem[];
  isCatalogLoading: boolean;
  favoriteBeerIDs: number[];
  searchParams: BeerQueryParams;
}
