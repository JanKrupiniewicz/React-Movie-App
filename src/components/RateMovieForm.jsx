import { useContext } from "react";

import RatedMoviesContext from "../store/RatedMoviesContext";

export default function RateMovieForm({ movie }) {
    const ratedMoviesCtx = useContext(RatedMoviesContext);

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const comment = formData.get('comment');
        const rating = formData.get('rating');

        ratedMoviesCtx.addMovie(movie, rating, comment);
    }

    return (
        <div className="my-3">
            <h2 className="text-center text-lg font-bold">
                Rate the movie
            </h2>
            <form onSubmit={handleSubmit}  className="flex flex-col mx-auto">
                <div className="flex flex-col mb-4">
                    <label htmlFor="comment" className="mb-2 text-sm">Add Comment: </label>
                    <textarea
                        id="comment"
                        name="comment"
                        required
                        className="border p-2 rounded-md"
                    ></textarea>
                </div>
                <div className="flex flex-row justify-between items-center mb-4">
                    <label htmlFor="rating" className="text-sm">Your Rating: </label>
                    <input
                        type="number"
                        id="rating"
                        name="rating"
                        min="1"
                        max="5"
                        required
                        className="border p-1 px-7 rounded-md"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-md"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}