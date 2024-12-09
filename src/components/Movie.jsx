import React from 'react'

/**
 * A component that displays a movie in a list.
 * 
 * @param {object} movie - A movie object with the following properties:
 *  - Title (string): The title of the movie.
 *  - Year (string): The year the movie was released.
 *  - Poster (string): The URL of the movie poster.
 * @param {function} onSelectMovie - A function to call when the movie is selected.
 * @returns {JSX.Element} - The JSX element to render.
 */
const Movie = ({movie, onSelectMovie}) => {
  return (
                <li
                  onClick={() => onSelectMovie(movie.imdbID)}
                >
                  <img src={movie.Poster} alt={`${movie.Title} poster`} />
                  <h3>{movie.Title}</h3>
                  <div>
                    <p>
                      <span>🗓</span>
                      <span>{movie.Year}</span>
                    </p>
                  </div>
                </li>
  )
}

export default Movie