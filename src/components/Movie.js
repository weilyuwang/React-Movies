import React from "react";

// Components
import Navigation from "./elements/Navigation";
import MovieInfo from "./elements/MovieInfo";
import MovieInfoBar from "./elements/MovieInfoBar";
import Actor from "./elements/Actor";
import Grid from "./elements/Grid";
import Spinner from "./elements/Spinner";

// custom hook
import { useMovieFetch } from "./hooks/useMovieFetch";

const Movie = ({ movieId }) => {
    const [state, loading, error] = useMovieFetch(movieId);

    console.log(state);

    if (error) return <div>Something went wrong!</div>;
    if (loading) return <Spinner />;

    return (
        <>
            <Navigation movie={state.original_title} />
            <MovieInfo movie={state} />
            <MovieInfoBar />
            <Grid>
                <Actor />
            </Grid>
        </>
    );
};

export default Movie;
