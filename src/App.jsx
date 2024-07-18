import React from 'react';
import { useState } from 'react';
import styled, { ThemeProvider, createGlobalStyle }from "styled-components";
import Menu from "./Components/Menu";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { darkTheme, lightTheme } from "./utils/Theme"
import Video from './Pages/Video';
import Home from './Pages/Home';
import SignIn from "./Pages/SignIn"
import ChannelPage from './Pages/ChannelPage';

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
}`

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

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <>
    <GlobalStyle/>
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    <Container>
      <BrowserRouter>
      <Menu />
      <Main>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
        <Wrapper>
          <Routes>
            <Route path="/">
              <Route index element={<Home/>}/>
              <Route path="signin" element={<SignIn/>}/>
              <Route path="/channel" element={<ChannelPage/>}/>
              <Route path="video">
                <Route path=":id" element={<Video/>}/>
              </Route>
            </Route>
          </Routes>
        </Wrapper>
      </Main>
      </BrowserRouter>
    </Container>
    </ThemeProvider>
    </>
    );
}
export default App;