import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import PulseLoader from "react-spinners/PulseLoader";

import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { loadBeerCatalog } from "../../store/action";
import { AppState } from "../../store/types";
import BeerCatalogCard from "../BeerCatalogCard/beerCatalogCard";

import "./beerCatalog.scss";

const BeerCatalog = () => {
  const beerList = useSelector((state: AppState) => state.beerCatalog);
  const isLoading = useSelector((state: AppState) => state.isCatalogLoading);
  const dispatch = useDispatch();
  const lastElement = useRef(null);
  const [page, setPage] = useState(1);
  const pageSize = 9;

  const handleObserver = (entities: IntersectionObserverEntry[]) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setPage((page) => page + 1);
    }
  };

  useIntersectionObserver(lastElement, handleObserver);

  useEffect(() => {
    dispatch(loadBeerCatalog(page, pageSize));
  }, [page, dispatch]);

  return (
    <>
      <div className="beer-catalog">
        {beerList.map((beer) => (
          <BeerCatalogCard key={beer.id} {...beer} />
        ))}
        <div ref={lastElement}>{isLoading ? <PulseLoader color="#eb331b" /> : null}</div>
      </div>
    </>
  );
};

export default BeerCatalog;
