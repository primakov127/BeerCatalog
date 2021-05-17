import { useDispatch } from "react-redux";

import BeerCatalog from "../BeerCatalog/beerCatalog";
import Filters from "../Filters/filters";
import Search from "../Search/search";
import Wrapper from "../Wrapper/wrapper";

import { resetSearchCurrentPage, setBeerCatalog, setSearchBeerName } from "../../store/action";
import { useCallback } from "react";

const BeerCatalogPage = () => {
  const dispatch = useDispatch();

  const handleSearch = useCallback(
    (input: string) => {
      dispatch(resetSearchCurrentPage());
      dispatch(setBeerCatalog([]));
      dispatch(setSearchBeerName(input));
    },
    [dispatch]
  );

  const handleFilter = useCallback(() => {
    dispatch(resetSearchCurrentPage());
    dispatch(setBeerCatalog([]));
  }, [dispatch]);

  return (
    <Wrapper>
      <Search placeholder="Search beers..." onSearch={handleSearch} />
      <Filters onAnyChange={handleFilter} />
      <BeerCatalog />
    </Wrapper>
  );
};

export default BeerCatalogPage;
