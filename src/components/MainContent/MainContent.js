import React from "react";
import request from "../request";
import Team from "./Team/Team";
import Teams from "./Teams/Teams";
import Matches from "./Matches/Matches";
import Competitions from "./Competitions/Competitions";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function MainContent(props) {
  request();
  return (
    <Router>
      <div>
        <h3>Main content</h3>
        <Switch>
          <Route exact path="/">
            <Competitions />
          </Route>
          <Route path="/teams">
            <Teams />
          </Route>
          <Route path="/matches">
            <Matches />
          </Route>
          <Route path="/team">
            <Team />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default MainContent;
