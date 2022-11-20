import GlobalStyles from "./styles/GlobalStyles";


import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Teams from "./Pages/Teams";

import AccectView from "./Routers/AssectView"
import LandingPage from "./Routers/Home";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Switch>
          {/* <Route path="/" component={Home} /> */}
          <Route exact path="/team" component={Teams} />
          <Route path="/3dview" component={AccectView} />
          <LandingPage/>

        </Switch>
      </Router>
    </>
  );
}

export default App;
