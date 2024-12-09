import React from 'react'
import WatchedMovie from './WatchedMovie'

/**
 * A component that displays a list of watched movies.
 * 
 * @param {array} watched - An array of objects representing the watched movies.
 * Each object should include the following properties: Title, Year, Poster, imdbRating, userRating, runtime.
 * @param {function} onDeleteWatched - A function to call when a movie is to be deleted from the watched list.
 * @returns {JSX.Element} - The JSX element to render.
 */
const WatchedMovieList = ({watched, onDeleteWatched}) => {
  return (
    <ul className="list">
      {/* Map over the watched movies and render each one as a WatchedMovie component. */}
      {watched.map((movie) => (
        <WatchedMovie key={movie.imdbID} movie={movie} onDeleteWatched={onDeleteWatched} />
      ))}
    </ul>
  )
}


export default WatchedMovieList