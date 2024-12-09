
import Movie from "./Movie";

/**
 * MovieList component
 * 
 * @param {object} movies - list of movies as an object with the following shape:
 * {
 *     imdbID: string,
 *     Title: string,
 *     Year: string,
 *     Poster: string,
 *     runtime: number,
 *     imdbRating: number,
 *     userRating: number,
 * }
 * @returns {JSX.Element} - an unordered list with each movie as a Movie component
 */
const MovieList = ({movies, onSelectMovie}) => {

  return (
    <ul className="list list-movies">
        {movies?.map((movie) => (
            <Movie key={movie.imdbID} onSelectMovie={onSelectMovie} movie={movie} />
        ))}
    </ul>
  )
}

export default MovieList