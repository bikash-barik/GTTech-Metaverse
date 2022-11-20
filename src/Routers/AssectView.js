import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Menu from "../componenets/components/Menu";
import Navbar from "../componenets/components/Navbar";
import { darkTheme, lightTheme } from "../utils/Theme";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/pages/Home";
import Video from "../Pages/pages/Video";
import SignIn from "../Pages/pages/SignIn";

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
`;
const Wrapper = styled.div`
  padding: 22px 96px;
`;

function AssectView() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <Router>
          <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Navbar />
            <Wrapper>
              <Switch>
                <Route exact path="/3dview/assest" index component={Home} />
                <Route exact path="/3dview/signin" component={SignIn} />
                <Route exact path="/3dview/video/:id" component={Video} />
              </Switch>
            </Wrapper>
          </Main>
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default AssectView;
