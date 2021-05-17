import { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import PulseLoader from "react-spinners/PulseLoader";

import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { incSearchCurrentPage, loadBeerCatalog, resetSearchCurrentPage, setBeerCatalog } from "../../store/action";
import { AppState } from "../../store/state";
import BeerCatalogCard from "../BeerCatalogCard/beerCatalogCard";

import "./beerCatalog.scss";

const BeerCatalog = () => {
  const beerList = useSelector((state: AppState) => state.beerCatalog);
  const isLoading = useSelector((state: AppState) => state.isCatalogLoading);
  const searchParams = useSelector((state: AppState) => state.searchParams);
  const dispatch = useDispatch();
  const lastElement = useRef(null);

  const handleObserver = useCallback(
    (entities: IntersectionObserverEntry[]) => {
      const target = entities[0];
      if (target.isIntersecting) {
        dispatch(incSearchCurrentPage());
      }
    },
    [dispatch]
  );

  useIntersectionObserver(lastElement, handleObserver);

  useEffect(() => {
    dispatch(resetSearchCurrentPage());
    dispatch(setBeerCatalog([]));
  }, [dispatch]);

  useEffect(() => {
    const loadTimeout = setTimeout(() => {
      dispatch(loadBeerCatalog());
    }, 200);
    return () => clearTimeout(loadTimeout);
  }, [dispatch, searchParams]);

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
