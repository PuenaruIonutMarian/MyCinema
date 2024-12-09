

/**
 * A component that displays the number of movies found based on the search query.
 * 
 * @param {object} movies - The list of movies found.
 * @returns {JSX.Element} - A JSX element that displays the number of movies found.
 */
const Numresults = ({movies}) => {
  return (
            <p className="num-results">
          Found <strong>{movies.length}</strong> results
        </p>
  )
}


export default Numresults