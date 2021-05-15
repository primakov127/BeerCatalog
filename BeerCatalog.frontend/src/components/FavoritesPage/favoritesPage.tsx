import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

import FavoriteBeerCard from "../FavoriteBeerCard/favoriteBeerCard";
import PaginationBar from "../PaginationBar/paginationBar";
import Wrapper from "../Wrapper/wrapper";

import { BeerItem } from "../../store/models/BeerItem";
import { AppState } from "../../store/state";

import "./favoritesPage.scss";

const FavoritesPage = () => {
  const { page = "1" } = useParams<{ page: string }>();
  const favoriteBeerIDs = useSelector((state: AppState) => state.favoriteBeerIDs);
  const [beers, setBeers] = useState<BeerItem[] | null>(null);

  const pageSize = 5;
  const pageCount = Math.ceil(favoriteBeerIDs.length / pageSize);

  const makeUrl = (pageNum: number) => {
    return `/favorites/${pageNum}`;
  };

  const beerIDs = favoriteBeerIDs.join("|");

  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers?ids=${beerIDs}&per_page=${pageSize}&page=${page}`)
      .then((res) => res.json())
      .then((data) => setBeers(data));
  }, [page, favoriteBeerIDs, beerIDs]);

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
