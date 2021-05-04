import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadBeerCatalog } from "../store/action";
import { AppState } from "../store/types";

const Home = () => {
  const beerList = useSelector((state: AppState) => state.beerCatalog);
  const dispatch = useDispatch();
  console.log(beerList);

  useEffect(() => {
    dispatch(loadBeerCatalog());
  }, [dispatch]);

  return (
    <>
      {beerList.map((item: { id: number; name: string }) => (
        <h2 key={item.id}>{item.name}</h2>
      ))}
    </>
  );
};

export default Home;
