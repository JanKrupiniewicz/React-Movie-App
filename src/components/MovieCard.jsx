import { useContext } from "react";

import MoviesModalContext from "../store/MoviesModalContext";
import RateMovieForm from "./RateMovieForm";
import Button from "./UI/Button";
import Modal from "./UI/Modal";

export default function MovieCard() {
    const moviesModalCtx = useContext(MoviesModalContext);
    const movie = moviesModalCtx.currentMovie;

    if(movie === null) {
        return;
    }
    
    return (
        <Modal
            open={moviesModalCtx.modalAction === 'movie'}
            onClose={moviesModalCtx.modalAction === 'movie' && moviesModalCtx.hideMovieModal}
        >
            <div key={movie.id} className="border-2 p-5 rounded-lg">
                <h3 className="text-xl font-bold">{movie.title}</h3>
                <p className="text-sm text-gray-500">
                    {movie.genre} | {movie.releaseDate} | Critics rating: {movie.rating}
                </p>
                <p className="text-sm py-3 text-justify">
                    {movie.description}
                </p>
                <RateMovieForm movie={movie}/>
                <Button
                    className="bg-gray-300 w-full hover:bg-gray-400 text-white py-2 px-4 rounded-md"
                    onClick={moviesModalCtx.hideMovieModal}
                >
                    Close
                </Button>
            </div>
        </Modal>
    );
}