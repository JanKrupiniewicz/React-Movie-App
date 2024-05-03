import { createContext, useReducer } from "react";

const RatedMoviesContext = createContext({
    reatedMovies: [],
    addMovie: (movie, rating) => {},
    removeMovie: (movieId) => {}
});

function movieReducer(state, action) {
    const existingMovieIndex = state.findIndex(movie => movie.id === action.id);
    let updatedMovies = [...state];
    
    switch (action.type) {
        case "ADD":
            const existingMovie = state[existingMovieIndex];
            if (existingMovie) {
                const updatedMovie = {
                    ...existingMovie,
                    rating: action.rating
                };
                updatedMovies[existingMovieIndex] = updatedMovie;
            } else {
                updatedMovies = state.concat({
                    id: action.id,
                    rating: action.rating
                });
            }
            break;
        case "REMOVE":
            updatedMovies.splice(existingMovieIndex, 1);
            break;
        default:
            break;
    }

    return updatedMovies;
}

export function RatedMoviesContextProvider({children}) {
    const [ratedMovies, dispatchRatedMoviesAction] = useReducer(movieReducer, []);

    function addMovieHandler(movieId, rating) {
        dispatchRatedMoviesAction({type: "ADD", id: movieId, rating: rating});
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