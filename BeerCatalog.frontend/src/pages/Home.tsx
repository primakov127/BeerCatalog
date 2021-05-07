import { useDispatch } from "react-redux";

import BeerCatalog from "../components/BeerCatalog/beerCatalog";
import Filters from "../components/Filters/filters";
import Search from "../components/Search/search";
import Wrapper from "../components/Wrapper/wrapper";
import { resetSearchCurrentPage, setBeerCatalog, setSearchBeerName } from "../store/action";

const Home = () => {
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

export default Home;
