import React from "react";

// Components
import Navigation from "./elements/Navigation";
import MovieInfo from "./elements/MovieInfo";
import MovieInfoBar from "./elements/MovieInfoBar";
import Actor from "./elements/Actor";
import Grid from "./elements/Grid";
import Spinner from "./elements/Spinner";

import PropTypes from "prop-types";

// custom hook
import { useMovieFetch } from "./hooks/useMovieFetch";

const Movie = ({ movieId }) => {
    const [state, loading, error] = useMovieFetch(movieId);
    if (error) return <div>Something went wrong!</div>;
    if (loading || !state.original_title) return <Spinner />;

    return (
        <>
            <Navigation movie={state.original_title} />
            <MovieInfo movie={state} />
            <MovieInfoBar
                time={state.runtime}
                budget={state.budget}
                revenue={state.revenue}
            />
            <Grid header="Actors">
                {state.actors.map((actor) => (
                    <Actor key={actor.credit_id} actor={actor} />
                ))}
            </Grid>
        </>
    );
};

Movie.propTypes = {
    movieId: PropTypes.string,
};

export default Movie;
