import GlobalStyles from "./styles/GlobalStyles"
import { ThemeProvider } from "styled-components"
import {light} from './styles/Themes';
import Navigation from "./componenets/Navigation";
import About from "./componenets/sections/About";
import Roadmap from "./componenets/sections/Roadmap";
import Faq from "./componenets/sections/Faq";
import Footer from "./componenets/Footer";
import Home from "./componenets/sections/Home";
import Showcase from "./componenets/sections/Showcase";



function App() {
  return (
    <>
     <GlobalStyles />
     <ThemeProvider theme={light}>
      <Navigation/>
      <Home/>
      <About/>
      {/* <Roadmap/> */}
      <Showcase/>
      <Faq/>
      <Footer/>
     </ThemeProvider>
    </>
  );
}

export default App;
