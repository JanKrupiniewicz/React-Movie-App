import { useContext } from "react";

import MoviesModalContext from "../store/MoviesModalContext";
import Modal from "./UI/Modal";

export default function MovieCard() {
    const moviesModalCtx = useContext(MoviesModalContext);

    return (
        <Modal
            open={moviesModalCtx.modalAction === 'movie'}
        >
            Hello
            {/* <div key={movie.id} className="bg-gray-100 border-2 p-5 rounded-lg">
                <h3 className="text-xl font-bold">{movie.title}</h3>
                <p className="text-sm text-gray-500">
                    {movie.genre} | {movie.releaseDate}
                </p>
                <p className="text-sm pt-5 text-justify">
                    {movie.description}
                </p>
            </div> */}
        </Modal>
    );
}