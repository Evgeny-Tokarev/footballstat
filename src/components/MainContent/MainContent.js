import React from "react";

import Team from "./Team/Team";
import Teams from "./Teams/Teams";
import Matches from "./Matches/Matches";
import Competitions from "./Competitions/Competitions";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function MainContent(props) {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Competitions />
          </Route>
          <Route path="/teams">
            <Teams />
          </Route>
          <Route path="/matches/:id">
            <Matches />
          </Route>
          <Route path="/team/:id">
            <Team />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default MainContent;
