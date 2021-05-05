import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import PulseLoader from "react-spinners/PulseLoader";

import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { incSearchCurrentPage, loadBeerCatalog } from "../../store/action";
import { AppState } from "../../store/types";
import BeerCatalogCard from "../BeerCatalogCard/beerCatalogCard";

import "./beerCatalog.scss";

const BeerCatalog = () => {
  const beerList = useSelector((state: AppState) => state.beerCatalog);
  const isLoading = useSelector((state: AppState) => state.isCatalogLoading);
  const { currentPage, beerName } = useSelector((state: AppState) => state.searchParams);
  const dispatch = useDispatch();
  const lastElement = useRef(null);

  const handleObserver = (entities: IntersectionObserverEntry[]) => {
    const target = entities[0];
    if (target.isIntersecting) {
      dispatch(incSearchCurrentPage());
    }
  };

  useIntersectionObserver(lastElement, handleObserver);

  useEffect(() => {
    dispatch(loadBeerCatalog());
  }, [dispatch, currentPage, beerName]);

  return (
    <>
      <div className="beer-catalog">
        {beerList.map((beer) => (
          <BeerCatalogCard key={beer.id} {...beer} />
        ))}
      </div>
      <div className="spinner" ref={lastElement}>
        {isLoading ? <PulseLoader color="#eb331b" /> : null}
      </div>
    </>
  );
};

export default BeerCatalog;
