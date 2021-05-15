import { useDispatch } from "react-redux";

import BeerCatalog from "../BeerCatalog/beerCatalog";
import Filters from "../Filters/filters";
import Search from "../Search/search";
import Wrapper from "../Wrapper/wrapper";

import { resetSearchCurrentPage, setBeerCatalog, setSearchBeerName } from "../../store/action";

const BeerCatalogPage = () => {
  const dispatch = useDispatch();

  const handleSearch = (input: string) => {
    dispatch(resetSearchCurrentPage());
    dispatch(setBeerCatalog([]));
    dispatch(setSearchBeerName(input));
  };

  const nandleFilter = () => {
    dispatch(resetSearchCurrentPage());
    dispatch(setBeerCatalog([]));
  };

  return (
    <>
      <Wrapper>
        <Search placeholder="Search beers..." onSearch={handleSearch} />
        <Filters onAnyChange={nandleFilter} />
        <BeerCatalog />
      </Wrapper>
    </>
  );
};

export default BeerCatalogPage;
