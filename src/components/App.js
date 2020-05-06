import React from "react";
import { createGlobalStyle } from "styled-components";

import Header from "./elements/Header";

import Home from "./Home";

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
        <Home />
        <GlobalStyle />
    </>
);

export default App;
