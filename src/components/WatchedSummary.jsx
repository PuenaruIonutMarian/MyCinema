import React from 'react'
import {average} from "../utils/Average";

/**
 * Component that displays a summary of the movies watched by the user.
 *
 * The summary includes the number of movies watched, the average IMDB rating, the average user rating, and the average runtime of the movies watched.
 *
 * @param {array} watched - An array of objects representing the movies watched by the user. Each object should include the following properties: imdbID, Title, Year, Poster, runtime, imdbRating, userRating.
 * @returns {JSX.Element} - A JSX element representing the summary of the movies watched.
 */
const WatchedSummary = ({watched}) => {
  const avgImdbRating = Math.round((average(watched.map((movie) => movie.imdbRating)) + Number.EPSILON) * 10) / 10;
  const avgUserRating = Math.round((average(watched.map((movie) => movie.userRating)) + Number.EPSILON) * 10) / 10;
  const totalRuntime = watched.reduce((acc, cur) => acc + cur.runtime, 0);

  return (
    <div className="summary">
    <h2>My list of movies</h2>
    <div>
        <p>
        <span>#️⃣</span>
        <span>{watched.length} movies</span>
        </p>
        <p>
        <span>⭐️</span>
        <span>{avgImdbRating}</span>
        </p>
        <p>
        <span>🌟</span>
        <span>{avgUserRating}</span>
        </p>
        <p>
        <span>⏳</span>
        <span>{totalRuntime} min</span>
        </p>
    </div>
    </div>

  )
}

export default WatchedSummary