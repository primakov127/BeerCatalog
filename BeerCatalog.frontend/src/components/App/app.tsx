import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import Header from "../Header/header";
import Favorites from "../../pages/Favorites";
import Home from "../../pages/Home";

const App = () => {
  const history = createBrowserHistory();

  return (
    <>
      <Router history={history}>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/favorites" component={Favorites} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
