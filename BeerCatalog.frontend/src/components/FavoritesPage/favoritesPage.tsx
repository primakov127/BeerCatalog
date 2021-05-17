import { useCallback, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

import FavoriteBeerCard from "../FavoriteBeerCard/favoriteBeerCard";
import PaginationBar from "../PaginationBar/paginationBar";
import Wrapper from "../Wrapper/wrapper";

import { BeerItem } from "../../store/models/BeerItem";
import { AppState } from "../../store/state";

import { FAVORITE_API_QUERY_SEPARATOR, FAVORITE_PAGE_SIZE } from "../../constants/beerCatalogConstants";

import "./favoritesPage.scss";

const FavoritesPage = () => {
  const { page = "1" } = useParams<{ page: string }>();
  const favoriteBeerIDs = useSelector((state: AppState) => state.favoriteBeerIDs);
  const [beers, setBeers] = useState<BeerItem[] | null>(null);

  const pageCount = useMemo(() => Math.ceil(favoriteBeerIDs.length / FAVORITE_PAGE_SIZE), [favoriteBeerIDs]);

  const makeUrl = useCallback((pageNum: number) => {
    return `/favorites/${pageNum}`;
  }, []);

  const separatedBeerIDs = favoriteBeerIDs.join(FAVORITE_API_QUERY_SEPARATOR);

  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers?ids=${separatedBeerIDs}&per_page=${FAVORITE_PAGE_SIZE}&page=${page}`)
      .then((res) => res.json())
      .then((data) => setBeers(data));
  }, [page, favoriteBeerIDs, separatedBeerIDs]);

  return favoriteBeerIDs.length === 0 ? (
    <h1 className="favorites__banner">There are no items in your favorites list :(</h1>
  ) : (
    <Wrapper>
      {beers?.map((beer) => (
        <div className="favorites__card" key={beer.id}>
          <FavoriteBeerCard id={beer.id} name={beer.name} tagline={beer.tagline} description={beer.description} image_url={beer.image_url} />
        </div>
      ))}
      <div className="favorites__pagination-bar">
        <PaginationBar currentPage={parseInt(page)} pageCount={pageCount} makeUrl={makeUrl} />
      </div>
    </Wrapper>
  );
};

export default FavoritesPage;
