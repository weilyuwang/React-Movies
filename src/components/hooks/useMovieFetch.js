import { useState, useEffect, useCallback } from "react";

import { API_URL, API_KEY } from "../../config";

export const useMovieFetch = (movieId) => {
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    // this function will only change when movieId changes
    const fetchData = useCallback(async () => {
        setError(false);
        setLoading(true);

        try {
            const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
            // json() is also async
            const result = await (await fetch(endpoint)).json();
            // console.log(result);
            const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
            const creditsResult = await (await fetch(creditsEndpoint)).json();
            // console.log(creditsResult);

            const directors = creditsResult.crew.filter(
                (member) => member.job === "Director"
            );

            // console.log(directors);

            setState({
                ...result,
                actors: creditsResult.cast,
                directors,
            });
        } catch (error) {
            console.log(error);
            setError(true);
        }

        setLoading(false);
    }, [movieId]);

    useEffect(() => {
        // dynamically update movieId -> localStorage[movieId]
        if (localStorage[movieId]) {
            // console.log("Grabbing from local storage");
            setState(JSON.parse(localStorage[movieId]));
            setLoading(false);
        } else {
            // console.log("Grabbing from API");
            fetchData();
        }
    }, [fetchData, movieId]);

    useEffect(() => {
        // console.log(state);
        localStorage.setItem(movieId, JSON.stringify(state));
    }, [movieId, state]);

    return [state, loading, error];
};
