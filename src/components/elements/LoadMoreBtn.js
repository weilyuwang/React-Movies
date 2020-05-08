import React from "react";

import styled from "styled-components";

import PropTypes from "prop-types";

const StyledLoadMoreBtn = styled.button`
    background: #000;
    width: 25%;
    min-width: 200px;
    height: 70px;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s;
    border-radius: 40px;
    font-family: "Abel", sans-serif;
    font-size: 28px;
    max-width: 1280px;
    display: block;
    margin: 20px auto;
    padding: 0 20px;
    outline: none;

    :hover {
        opacity: 0.8;
    }
`;

const LoadMoreBtn = ({ text, callback }) => (
    <StyledLoadMoreBtn type="button" onClick={callback}>
        {text}
    </StyledLoadMoreBtn>
);

LoadMoreBtn.propTypes = {
    text: PropTypes.string,
    callback: PropTypes.func,
};

export default LoadMoreBtn;
