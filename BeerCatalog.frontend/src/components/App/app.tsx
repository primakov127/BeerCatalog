import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";

import Header from "../Header/header";
import BeerCatalogPage from "../BeerCatalogPage/beerCatalogPage";
import BeerDetailsPage from "../BeerDetailsPage/beerDetailsPage";
import FavoritesPage from "../FavoritesPage/favoritesPage";

import store from "../../store/store";

const App = () => {
  const history = createBrowserHistory();

  return (
    <>
      <Provider store={store}>
        <Router history={history}>
          <Header />
          <Switch>
            <Route path="/" exact component={BeerCatalogPage} />
            <Route path="/favorites/:page?" component={FavoritesPage} />
            <Route path="/beers/:id" component={BeerDetailsPage} />
          </Switch>
        </Router>
      </Provider>
    </>
  );
};

export default App;
