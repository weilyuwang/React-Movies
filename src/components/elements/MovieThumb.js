import React from "react";

import { Link } from "@reach/router";

import styled from "styled-components";

import PropTypes from "prop-types";

export const StyledMovieThumb = styled.div`
    img {
        width: 100%;
        height: auto;
        /* max-height: 350px; */
        transition: all 0.3s;
        object-fit: cover;
        border-radius: 20px;

        :hover {
            opacity: 0.8;
        }

        @media screen and (max-width: 1024px) {
            height: 300px;
        }

        @media screen and (max-width: 768px) {
            height: 350px;
        }

        @media screen and (max-width: 600px) {
            max-height: 300px;
        }

        @media screen and (max-width: 375px) {
            max-height: 450px;
        }

        .clickable {
            cursor: pointer;
        }
    }
`;

const MovieThumb = ({ image, clickable, movieId }) => (
    <StyledMovieThumb>
        {clickable ? (
            <Link to={`/${movieId}`}>
                <img className="clickable" src={image} alt="moviethumb" />
            </Link>
        ) : (
            <img src={image} alt="moviethumb" />
        )}
    </StyledMovieThumb>
);

MovieThumb.propTypes = {
    image: PropTypes.string,
    clickable: PropTypes.bool,
    movieId: PropTypes.number,
};

export default MovieThumb;
