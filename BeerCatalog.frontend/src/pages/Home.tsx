import { useDispatch } from "react-redux";
import BeerCatalog from "../components/BeerCatalog/beerCatalog";
import Search from "../components/Search/search";
import Wrapper from "../components/Wrapper/wrapper";
import { resetSearchCurrentPage, setBeerCatalog, setSearchBeerName } from "../store/action";

const Home = () => {
  const dispatch = useDispatch();

  const onSearch = (input: string) => {
    dispatch(resetSearchCurrentPage());
    dispatch(setBeerCatalog([]));
    dispatch(setSearchBeerName(input));
  };

  return (
    <>
      <Wrapper>
        <Search placeholder="Search.." onSearch={onSearch} />
        <BeerCatalog />
      </Wrapper>
    </>
  );
};

export default Home;
