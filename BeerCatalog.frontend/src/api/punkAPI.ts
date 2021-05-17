import { FAVORITE_API_QUERY_SEPARATOR, PUNK_API_URL } from "../constants/beerCatalogConstants";

import { BeerItem } from "../store/models/BeerItem";
import { BeerQueryParams } from "../store/models/BeerQueryParams";

export const getBeers = async (searchParams: BeerQueryParams) => {
  const queryParams = new URLSearchParams();

  queryParams.set("page", searchParams.currentPage.toString());
  queryParams.set("per_page", searchParams.pageSize.toString());
  searchParams.beerName ? queryParams.set("beer_name", searchParams.beerName) : null;
  queryParams.set("abv_gt", searchParams.filter.abv[0].toString());
  queryParams.set("abv_lt", searchParams.filter.abv[1].toString());
  queryParams.set("ibu_gt", searchParams.filter.ibu[0].toString());
  queryParams.set("ibu_lt", searchParams.filter.ibu[1].toString());
  queryParams.set("ebc_gt", searchParams.filter.ebc[0].toString());
  queryParams.set("ebc_lt", searchParams.filter.ebc[1].toString());

  const response = await fetch(`${PUNK_API_URL}/beers?${queryParams.toString()}`);
  const result: BeerItem[] = await response.json();

  return result;
};

export const getBeersByIds = async (ids: number[], page: string, pageSize: number) => {
  const separatedIds = ids.join(FAVORITE_API_QUERY_SEPARATOR);
  const result = fetch(`${PUNK_API_URL}/beers?ids=${separatedIds}&per_page=${pageSize}&page=${page}`).then((res) => res.json());

  return result;
};

export const getBeerById = async (id: string) => {
  const result: BeerItem[] = await fetch(`${PUNK_API_URL}/beers/${id}`).then((res) => res.json());

  return result[0];
};
