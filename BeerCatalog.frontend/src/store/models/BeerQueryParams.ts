import { BeerFilter } from "./BeerFilter";

export interface BeerQueryParams {
  pageSize: number;
  currentPage: number;
  beerName: string | null;
  filter: BeerFilter;
}
