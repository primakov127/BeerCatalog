export interface BeerItem {
  id: number;
  name: string;
  tagline: string;
  image_url: string;
}

export interface BeerSearchingParams {
  pageSize: number;
  currentPage: number;
  beerName: string | null;
}

export interface AppState {
  beerCatalog: BeerItem[];
  isCatalogLoading: boolean;
  favoriteBeerIDs: number[];
  searchParams: BeerSearchingParams;
}
