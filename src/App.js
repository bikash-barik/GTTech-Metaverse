import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { light } from "./styles/Themes";
import Navigation from "./componenets/Navigation";
import About from "./componenets/sections/About";
import Roadmap from "./componenets/sections/Roadmap";
import Faq from "./componenets/sections/Faq";
import Footer from "./componenets/Footer";
// import Home from "./componenets/sections/Home";
import Showcase from "./componenets/sections/Showcase";
import Landing from "./componenets/sections/Landing";
import ScrollToTop from "./componenets/ScrollToTop";
import Team from "./componenets/sections/Team";

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Teams from "./Pages/Teams";

function App() {
  return (
    <>
      <GlobalStyles />
      {/* <ThemeProvider theme={light}>
        <Navigation />
        <Landing />
        <Home />
        <About />
        <Roadmap/>
        <Team />
        <Showcase />
        <Faq />
        <Footer />
        <ScrollToTop />
      </ThemeProvider> */}
     
      <ThemeProvider theme={light}>
      <Router >
      <Switch>
      
      <Route exact path="/" component={Home} />
      <Route path="/team" component={Teams} />
   

      </Switch>
    </Router>
    </ThemeProvider>
    </>
  );
}

export default App;
