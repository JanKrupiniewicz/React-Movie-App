import { createContext, useState } from "react";

const MoviesModalContext = createContext({
    modalAction: '',
    showMovieModal: () => {},
    hideMovieModal: () => {},
    showRatedModal: () => {},
    hideRatedModal: () => {}
});

export function MoviesModalContextProvider({children}) {
    const [modalAction, setModalAction] = useState('');

    function showMovieModal() {
        setModalAction('movie');
        console.log('Showing movie ...');
    }
    function hideMovieModal() {
        setModalAction('');
    }
    function showRatedModal() {
        setModalAction('ratedMovies');
    }
    function hideRatedModal() {
        setModalAction('');
    }
    
    const MoviesModalCtx = {
        modalAction: modalAction,
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