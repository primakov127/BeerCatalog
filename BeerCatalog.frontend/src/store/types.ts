export interface BeerCatalogItem {
  id: number;
  name: string;
  tagLine: string;
  image_url: string;
}

export interface AppState {
  beerCatalog: BeerCatalogItem[];
}
