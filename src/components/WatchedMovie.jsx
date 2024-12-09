

/**
 * A component that displays a movie in the watched list.
 * 
 * @param {object} movie - A movie object with the following properties:
 *  - Title (string): The title of the movie.
 *  - Year (string): The year the movie was released.
 *  - Poster (string): The URL of the movie poster.
 *  - imdbRating (number): The IMDB rating of the movie.
 *  - userRating (number): The user rating of the movie.
 *  - runtime (number): The runtime of the movie.
 * @param {function} onDeleteWatched - A function to call when the delete button is clicked.
 * @returns {JSX.Element} - The JSX element to render.
 */
const WatchedMovie = ({movie, onDeleteWatched}) => {
  return (
                  <li>
                    {/* Display the movie title and poster */}
                    <img src={movie.poster} alt={`${movie.title} poster`} />
                    <h3>{movie.Title}</h3>

                    {/* Display the IMDB rating, user rating, and runtime */}
                    <div>
                      <p>
                        <span>⭐️</span>
                        <span>{movie.imdbRating}</span>
                      </p>
                      <p>
                        <span>🌟</span>
                        <span>{movie.userRating}</span>
                      </p>
                      <p>
                        <span>⏳</span>
                        <span>{movie.runtime} min</span>
                      </p>

                      {/* Display the delete button */}
                      <button className="btn-delete" onClick={() => onDeleteWatched(movie.imdbID)}>X</button>
                    </div>
                  </li>
  )
}

export default WatchedMovie