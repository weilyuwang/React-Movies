import { useState, useEffect } from "react";
// config
import { API_URL, API_KEY } from "../../config";

export const useHomeFetch = () => {
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
        fetchMovies(`${API_URL}movie/popular?api_key=${API_KEY}`);
    }, []);

    return [{ state, loading, error }, fetchMovies];
};
