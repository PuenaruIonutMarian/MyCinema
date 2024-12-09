import { useEffect, useState } from "react"

/**
 * Fetches movies from OMDB API. If the request is successful, updates the 
 * state with the results. If there is an error, updates the state with the 
 * error message. If the movie is not found, throws an error.
 * 
 * @param {string} query - The search query to fetch movies for.
 * @param {function} callback - Optional callback function to be called after the movies are fetched.
 * @returns {{movies: array, isLoading: boolean, error: string}} - An object containing the movies, isLoading state, and error message.
 * @throws {Error} If the movie is not found.
 */
const useMovies = (query, callback) => {
      const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


useEffect(function(){ 
  //used to cancel unnecessary fetches and race conditions (for example when you start typing the search term)
  const controller = new AbortController();

//   callback?.();

  /**
   * Fetches movies from OMDB API. If the request is successful, updates the 
   * state with the results. If there is an error, updates the state with the 
   * error message. If the movie is not found, throws an error.
   * 
   * @throws {Error} If the movie is not found.
   */
  async function getMovies() {
    // if the request is already ongoing, do not make another request
    if (isLoading) return;

    try {
      // reset the error state
      setError("");
      // set the loading state to true
      setIsLoading(true);
      // make the request to OMDB API
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${query}`, {signal: controller.signal}
      );
      // if the request is not successful, throw an error
      if (!res.ok) throw new Error('Failed to fetch movies');
      // parse the response as JSON
      const data = await res.json();
      // if the response is not valid, throw an error
      if (data.Response === 'False') throw new Error("Movie not found");
      // update the state with the movies
      setMovies(data.Search);
      // reset the error state
      setError("");
    } catch (err) {
      // if the error is not an abort error, update the state with the error message
      if (err.name !== 'AbortError'){
        setError(err.message);
      }
    } finally {
      // set the loading state to false
      setIsLoading(false);
    }
  }

  if(query.length < 3){
    setMovies([]);
    setError("");
    return
  }

//   handleCloseMovie();
  getMovies();

  return function cleanup(){
    controller.abort();
  }
// eslint-disable-next-line react-hooks/exhaustive-deps
},[query]);

  return {movies, isLoading, error};
}

/**
 * Hook that fetches movies from OMDB API based on the search query.
 * 
 * @param {string} query - The search query.
 * @param {function} callback - A function to call after fetching the movies.
 * @returns {object} - An object with the movies, a boolean indicating if the hook is loading, and an error string.
 */
export default useMovies
