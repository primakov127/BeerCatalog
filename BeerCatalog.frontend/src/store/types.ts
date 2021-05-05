export interface BeerItem {
  id: number;
  name: string;
  tagline: string;
  image_url: string;
}

export interface AppState {
  beerCatalog: BeerItem[];
  isCatalogLoading: boolean;
  favoriteBeerIDs: number[];
}
