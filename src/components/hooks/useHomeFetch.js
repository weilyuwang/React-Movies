import { useState, useEffect } from "react";
// config
import { POPULAR_BASE_URL } from "../../config";

export const useHomeFetch = (searchTerm) => {
    const [state, setState] = useState({ movies: [] });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchMovies = async (endpoint) => {
        setError(false);
        setLoading(true);

        // does the endpoint string contain substr "page" ?
        const isLoadMore = endpoint.search("page");

        try {
            // fetch() is async, json() is also async function
            const result = await (await fetch(endpoint)).json();

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
                movies:
                    isLoadMore !== -1
                        ? [...prev.movies, ...result.results]
                        : [...result.results],
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
        if (sessionStorage.homeState) {
            // console.log("Grabbing from session storage");
            setState(JSON.parse(sessionStorage.homeState));
            setLoading(false);
        } else {
            // console.log("Grabbing from API");
            fetchMovies(POPULAR_BASE_URL);
        }
    }, []);

    useEffect(() => {
        if (!searchTerm) {
            // write to session storage
            // console.log("Writing to session storage");
            sessionStorage.setItem("homeState", JSON.stringify(state));
        }
    }, [searchTerm, state]);

    return [{ state, loading, error }, fetchMovies];
};
