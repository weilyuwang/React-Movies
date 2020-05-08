import React from "react";

import PropTypes from "prop-types";

import NoImage from "../images/no_image.jpg";

import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";

import styled from "styled-components";

const StyledActor = styled.div`
    font-family: "Abel", sans-serif;
    color: #fff;
    background: #1c1c1c;
    border-radius: 20px;
    padding: 5px;
    text-align: center;

    img {
        display: block;
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 15px;
    }

    .actor-name {
        display: block;
        font-size: 18px;
        margin: 10px 0 0 0;
    }

    .actor-character {
        display: block;
        font-size: 16px;
        margin: 0 0 10px 0;
    }
`;

const Actor = ({ actor }) => (
    <StyledActor>
        <img
            src={
                actor.profile_path
                    ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                    : NoImage
            }
            alt="actorthumb"
        />
        <span className="actor-name">{actor.name}</span>
        <span className="actor-character">{actor.character}</span>
    </StyledActor>
);

Actor.propTypes = {
    actor: PropTypes.object,
};

export default Actor;
