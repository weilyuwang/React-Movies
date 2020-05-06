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

const Home = () => {
    const [state, setState] = useState({ movies: [] });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchMovies = async (endpoint) => {
        setError(false);
        setLoading(true);

        try {
            // fetch() is async, json() is also async function
            const result = await (await fetch(endpoint)).json();
            console.log(result);
            /*
            result = {
                page: 1,
                results: [],
                total_pages: 500,
                total_results: 10000
            }
            */

            setState((prev) => ({
                ...prev,
                movies: [...result.results],
                heroImage: prev.heroImage || result.results[0], // take the previous state's heroImage if exists, otherwise take the first result image
                currentPage: result.page,
                totalPages: result.total_pages,
            }));
        } catch (error) {
            setError(true);
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMovies(`${API_URL}movie/popular?api_key=${API_KEY}`);
    }, []);

    return (
        <>
            <HeroImage />
            <SearchBar />
            <Grid />
            <MovieThumb />
            <Spinner />
            <LoadMoreBtn />
        </>
    );
};

export default Home;
