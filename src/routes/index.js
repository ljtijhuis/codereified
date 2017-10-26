import React from "react";
import { HashRouter, Route, Link, Switch } from "react-router-dom";

import homepage from "./homepage";
import outerspace from "./outerspace";

export default () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={homepage} />
      <Route exact path="/outerspace" component={outerspace} />
    </Switch>
  </HashRouter>
);
