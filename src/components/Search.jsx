import { useRef } from "react"
import useKey from "../hooks/useKey";

/**
 * A search bar component that allows users to search for movies.
 *
 * @param {string} query - The current search query.
 * @param {function} setQuery - A function to update the search query.
 * @returns {JSX.Element} - A search input element.
 */
const Search = ({query, setQuery}) => {
  const inputEl = useRef(null);

  // Focus the search input whenever the user presses Enter
  useKey('Enter', () => {
    if (document.activeElement === inputEl.current) return; 
    inputEl.current.focus();
    setQuery("");
  })

  return (
            <input
              className="search"
              type="text"
              placeholder="Search for movies..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              ref={inputEl}
            />
  )
}

export default Search