import { useState } from "react";

import MovieCard from "./components/MovieCard";
import RatedMoviesCard from "./components/RatedMoviesCard";
import Header from "./components/Header";
import Movies from "./components/Movies";
import { RatedMoviesContextProvider } from "./store/RatedMoviesContext";
import { MoviesModalContextProvider } from "./store/MoviesModalContext";

function App() {
  return (
    <MoviesModalContextProvider>
      <RatedMoviesContextProvider>
        <Header />
        <Movies />
        <MovieCard />
        <RatedMoviesCard />
      </RatedMoviesContextProvider>
    </MoviesModalContextProvider>
  );
}

export default App;
