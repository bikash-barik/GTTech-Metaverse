import React from "react";
import Footer from "../componenets/Footer";
import Navigation from "../componenets/Navigation";
import ScrollToTop from "../componenets/ScrollToTop";
import About from "../componenets/sections/About";
import Faq from "../componenets/sections/Faq";
import Landing from "../componenets/sections/Landing";
import Showcase from "../componenets/sections/Showcase";
import Team from "../componenets/sections/Team";
import Homes from "../componenets/sections/Home";

import { ThemeProvider } from "styled-components";
import { light } from "../styles/Themes";
const Home = () => {
  return (
    <>
    <ThemeProvider theme={light}>
    <Navigation />
    <Landing />
    <Homes />
    <About />
    <Team />
    <Showcase />
    <Faq />
    <Footer />
    {/* <ScrollToTop /> */}
    </ThemeProvider>
  
    </>
  );
};

export default Home;
