import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";

import Header from "../Header/header";
import Favorites from "../../pages/Favorites";
import Home from "../../pages/Home";

import store from "../../store/store";

const App = () => {
  const history = createBrowserHistory();

  return (
    <>
      <Provider store={store}>
        <Router history={history}>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/favorites" component={Favorites} />
          </Switch>
        </Router>
      </Provider>
    </>
  );
};

export default App;
