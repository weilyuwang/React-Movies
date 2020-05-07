import React, { useState, useRef } from "react";
import FontAwesome from "react-fontawesome";
import styled from "styled-components";

const StyledSearchBar = styled.div`
    width: 100%;
    height: 105px;
    background: #1c1c1c;
    padding: 25px 20px 0px 20px;
    box-sizing: border-box;
    color: #fff;
`;

const StyledSearchBarContent = styled.div`
    max-width: 1280px;
    width: 100%;
    height: 55px;
    background: #353535;
    margin: 0 auto;
    border-radius: 40px;
    position: relative;
    color: #fff;

    .fa-search {
        position: absolute;
        left: 20px;
        top: 12px;
        color: #fff;
        z-index: 1000;
    }

    input {
        font-family: "Abel", sans-serif;
        font-size: 28px;
        position: absolute;
        left: 0px;
        margin: 8px 0;
        padding: 0 0 0 60px;
        border: 0;
        width: 95%;
        background: transparent;
        height: 40px;
        color: #fff;
        box-sizing: border-box;

        :focus {
            outline: none;
        }

        @media screen and (max-width: 720px) {
            font-size: 28px;
        }
    }
`;

const SearchBar = ({ callback }) => {
    const [state, setState] = useState("");
    const timeOut = useRef(null);

    console.log(state);

    const doSearch = (event) => {
        const { value } = event.target;

        clearTimeout(timeOut.current);
        setState(value);

        // set a 0.5 second delay
        timeOut.current = setTimeout(() => callback(value), 500);
    };

    return (
        <StyledSearchBar>
            <StyledSearchBarContent>
                <FontAwesome className="fa-search" name="search" size="2x" />
                <input
                    type="text"
                    placeholder="Search Movies"
                    onChange={doSearch}
                    value={state}
                />
            </StyledSearchBarContent>
        </StyledSearchBar>
    );
};

export default SearchBar;
