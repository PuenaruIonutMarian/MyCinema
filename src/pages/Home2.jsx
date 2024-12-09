import Navbar from "../components/Navbar";
import Main from "../components/Main";
import {useState } from "react";
import Search from "../components/Search";
import Box from "../components/Box";
import WatchedSummary from "../components/WatchedSummary";
import WatchedMovieList from "../components/WatchedMovieList";
import Numresults from "../components/Numresults";
import MovieList from "../components/MovieList";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import MovieDetails from "../components/MovieDetails";
import useMovies from "../hooks/useMovies";
import useLocalStorageState from "../hooks/useLocalStorageState";


/**
 * Main application component that manages the state and logic for displaying 
 * movies, handling movie selection, and managing a list of watched movies.
 * 
 * This component integrates various subcomponents for the UI, including 
 * a search bar, a list of movies, and details for selected movies. It 
 * utilizes hooks for managing local storage and fetching movie data.
 * 
 * @component
 */
export default function App() {
  // State for the search query
  const [query, setQuery] = useState("");

  // State for the ID of the selected movie
  const [selectedId, setSelectedId] = useState(null);

  // Hook that fetches movies based on the current search query
  const {movies, isLoading, error} = useMovies(query);

  // Hook to store a list of watched movies in local storage
  // The hook initializes the state with a value from localStorage if available,
  // or with an empty array if not. It updates the localStorage whenever
  // the state changes.
  const [watched, setWatched] = useLocalStorageState([], "watched");


  /**
   * Handles the selection of a movie.
   *
   * @param {string} id - The ID of the movie to select.
   */
  function handleSelectMovie(id){
    setSelectedId(selectedId => selectedId === id ? null : id);
  }

  /**
   * Handles the closing of a selected movie.
   */
  function handleCloseMovie(){
    setSelectedId(null);
  }

  /**
   * Handles the addition of a movie to the watched list.
   *
   * @param {object} movie - The movie to add to the watched list.
   */
  function handleAddWatched(movie){
    setWatched(watched => [...watched, movie]);
  }

  /**
   * Handles the deletion of a movie from the watched list.
   *
   * @param {string} id - The ID of the movie to delete from the watched list.
   */
  function handleDeleteWatched(id){
    setWatched(watched => watched.filter((movie) => movie.imdbID !== id));
  }


  return (
    <>
      <Navbar>
        <Search query={query} setQuery={setQuery}/>
        <Numresults movies={movies} />
      </Navbar>
      <Main>
      <Box>
          {  
          selectedId  
          ? 
            <MovieDetails 
              selectedId={selectedId} 
              onCloseMovie={handleCloseMovie} 
              onAddWatched={handleAddWatched} 
              watched={watched}  
              /> 
          :      
            <>
              <WatchedSummary watched={watched} />
              <WatchedMovieList watched={watched} 
                onDeleteWatched={handleDeleteWatched} />
            </>
          }
        </Box>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && <MovieList movies={movies} onSelectMovie={handleSelectMovie}/>}
          {error && <ErrorMessage message={error} />}
        </Box>
        
      </Main>
    </>
  );
}

