import { useCallback, useContext } from "react";
import { AVAILABLE_MOVIES } from "../available-movies";
import MoviesModalContext from "../store/MoviesModalContext";
import Button from "./UI/Button";

export default function Movies() {
    const moviesModalCtx = useContext(MoviesModalContext);

    function handleShowMovieModal(movie) {
        moviesModalCtx.showMovieModal(movie);
    }

    return (
        <section className="text-black">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 p-5">
                {AVAILABLE_MOVIES.map((movie) => (
                    <div key={movie.id} className="bg-gray-100 border-2 p-5 rounded-lg">
                        <h3 className="text-xl font-bold">{movie.title}</h3>
                        <p className="text-sm text-gray-500">
                            {movie.genre} | {movie.releaseDate}
                        </p>
                        <Button 
                            onClick={() => handleShowMovieModal(movie)}
                            className="bg-red-500 hover:bg-red-700 text-white text-sm mt-2 px-2 rounded-sm"
                        >
                            Rate Movie
                        </Button>
                        <p className="text-sm pt-5 text-justify">
                            {movie.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}