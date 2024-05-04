import { useContext } from "react";

import Modal from "./UI/Modal";
import Button from "./UI/Button";
import MoviesModalContext from "../store/MoviesModalContext";
import RatedMoviesContext from "../store/RatedMoviesContext";

export default function RatedMoviesCard() {
    const ratedMoviesCtx = useContext(RatedMoviesContext);
    const moviesModalCtx = useContext(MoviesModalContext);

    return (
        <Modal
            open={moviesModalCtx.modalAction === 'ratedMovies'}
            onClose={moviesModalCtx.modalAction === 'ratedMovies' ? moviesModalCtx.hideRatedModal : undefined}
        >
            <div className="border-2 p-5 rounded-lg">
                <h3 className="text-2xl text-center font-bold">Rated Movies</h3>
                {
                    ratedMoviesCtx.ratedMovies.length > 0 && (
                        <div className="text-sm py-3 space-y-3 text-justify">
                            {
                                ratedMoviesCtx.ratedMovies.map((movieData) => {
                                    return (
                                        <div key={movieData.movie.id} className="bg-gray-100 border-2 p-5 rounded-lg">
                                            <h3 className="text-xl font-bold">{movieData.movie.title}</h3>
                                            <p className="text-sm text-gray-500">
                                                {movieData.movie.genre} | {movieData.movie.releaseDate}
                                            </p>
                                            <p className="text-sm pt-5 text-justify">
                                                {movieData.movie.description}
                                            </p>
                                            <p className="text-sm pt-5 text-justify">
                                                Your rating: {movieData.rating}
                                            </p>
                                            <p className="text-sm pt-1 text-justify">
                                                Your comment: {movieData.comment}
                                            </p>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    )
                }
                {
                    ratedMoviesCtx.ratedMovies.length === 0 && (
                        <p className="text-sm text-gray-500 text-center my-4">
                            Your rated movies will be displayed here
                        </p>
                    )
                
                }
                <Button
                    className="bg-gray-300 w-full hover:bg-gray-400 text-white py-2 px-4 rounded-md"
                    onClick={moviesModalCtx.hideRatedModal}
                >
                    Close
                </Button> 
            </div>
        </Modal>
    );
}