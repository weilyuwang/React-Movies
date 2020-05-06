import React, { useState, useEffect } from "react";

// config
import {
    API_URL,
    API_KEY,
    IMAGE_BASE_URL,
    POSTER_SIZE,
    BACKDROP_SIZE,
} from "../config";

// import components
import HeroImage from "./elements/HeroImage";
import SearchBar from "./elements/SearchBar";
import Grid from "./elements/Grid";
import MovieThumb from "./elements/MovieThumb";
import Spinner from "./elements/Spinner";
import LoadMoreBtn from "./elements/LoadMoreBtn";

// custom hook
import { useHomeFetch } from "./hooks/useHomeFetch";

const Home = () => {
    const [{ state, loading, error }, fetchMovies] = useHomeFetch();

    console.log(state);

    if (error) return <div>Something went wrong</div>;
    if (!state.movies[0]) return <Spinner />;

    const { backdrop_path, original_title, overview } = state.heroImage;
    console.log(`${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop_path}`);
    return (
        <>
            <HeroImage
                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop_path}`}
                title={original_title}
                text={overview}
            />
            <SearchBar />
            <Grid />
            <MovieThumb />
            <Spinner />
            <LoadMoreBtn />
        </>
    );
};

export default Home;
