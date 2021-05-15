import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";

import Header from "../Header/header";
import Favorites from "../../pages/Favorites";
import Home from "../../pages/Home";

import store from "../../store/store";
import BeerDetails from "../../pages/BeerDetails";

const App = () => {
  const history = createBrowserHistory();

  return (
    <>
      <Provider store={store}>
        <Router history={history}>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/favorites/:page?" component={Favorites} />
            <Route path="/beers/:id" component={BeerDetails} />
          </Switch>
        </Router>
      </Provider>
    </>
  );
};

export default App;
