import { useContext } from "react";

import Button from "./UI/Button";
import RatedMoviesContext from "../store/RatedMoviesContext";
import MoviesModalContext from "../store/MoviesModalContext";

export default function Header() {
    const ratedMoviesCtx = useContext(RatedMoviesContext);
    const moviesModalCtx = useContext(MoviesModalContext);

    return (
        <header className="flex text-white justify-between p-5 bg-red-400">
            <div className="flex flex-row items-center space-x-2">
                <img className="h-12" src="logo.png" alt="Movie Logo" />
                <p className="text-2xl font-bold uppercase">
                    Rate Movies App
                </p>
            </div>
            <Button
                className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-full"
                onClick={moviesModalCtx.showRatedModal}
            >
                Rated by You {
                    ratedMoviesCtx.ratedMovies.length > 0 && `(${ratedMoviesCtx.ratedMovies.length})`
                }
            </Button>
        </header>
    );
}