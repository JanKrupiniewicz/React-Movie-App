import { comment } from "postcss";
import { createContext, useReducer } from "react";

const RatedMoviesContext = createContext({
    reatedMovies: [],
    addMovie: (movie, rating, comment) => {},
    removeMovie: (movieId) => {}
});

function movieReducer(state, action) {
    let updatedMovies = [...state];
    
    switch (action.type) {
        case "ADD":
            let existingMovieIndex = state.findIndex(movie => movie.id === action.movie.id);
            const existingMovie = state[existingMovieIndex];
            if (existingMovie) {
                const updatedMovie = {
                    ...existingMovie,
                    rating: action.rating,
                    comment: action.comment
                };
                updatedMovies[existingMovieIndex] = updatedMovie;
            } else {
                updatedMovies = state.concat({
                    movie: action.movie,
                    rating: action.rating,
                    comment: action.comment
                });
            }
            break;
        case "REMOVE":
            existingMovieIndex = state.findIndex(movie => movie.id === action.id);
            updatedMovies.splice(existingMovieIndex, 1);
            break;
        default:
            break;
    }

    console.log(updatedMovies);
    return updatedMovies;
}

export function RatedMoviesContextProvider({children}) {
    const [ratedMovies, dispatchRatedMoviesAction] = useReducer(movieReducer, []);

    function addMovieHandler(movie, rating, comment) {
        dispatchRatedMoviesAction({type: "ADD", movie: movie, rating: rating, comment: comment});
    }

    function removeMovieHandler(movieId) {
        dispatchRatedMoviesAction({type: "REMOVE", id: movieId});
    }

    const context = {
        ratedMovies: ratedMovies,
        addMovie: addMovieHandler,
        removeMovie: removeMovieHandler
    };

    return (
        <RatedMoviesContext.Provider value={context}>
            {children}
        </RatedMoviesContext.Provider>
    );
}

export default RatedMoviesContext;