import React from "react";
import { createGlobalStyle } from "styled-components";

import Header from "./elements/Header";

import Movie from "./Movie";
import NotFound from "./NotFound";
import Home from "./Home";

import { Router } from "@reach/router";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box
    }
`;

const App = () => (
    <>
        <Header />
        <Router>
            <Home path="/" />
            <Movie path="/:movieId" />
            <NotFound default />
        </Router>

        <GlobalStyle />
    </>
);

export default App;
