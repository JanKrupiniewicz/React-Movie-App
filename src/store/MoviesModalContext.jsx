import { createContext, useState } from "react";

const MoviesModalContext = createContext({
    modalAction: '',
    showMovieModal: (movie) => {},
    hideMovieModal: () => {},
    showRatedModal: () => {},
    hideRatedModal: () => {}
});

export function MoviesModalContextProvider({children}) {
    const [modalAction, setModalAction] = useState('');
    const [currentMovie, setCurrentMovie] = useState(null);

    function showMovieModal(movie) {
        setModalAction('movie');
        setCurrentMovie(movie);
    }

    function hideMovieModal() {
        setModalAction('');
        setCurrentMovie(null);
    }
    
    function showRatedModal() {
        setModalAction('ratedMovies');
    }

    function hideRatedModal() {
        setModalAction('');
    }
    
    const MoviesModalCtx = {
        modalAction: modalAction,
        currentMovie: currentMovie,
        showMovieModal,
        hideMovieModal,
        showRatedModal,
        hideRatedModal
    };

    return (
        <MoviesModalContext.Provider value={MoviesModalCtx}>
            {children}
        </MoviesModalContext.Provider>
    );
}

export default MoviesModalContext;