import React, { useEffect, useState } from 'react'
import StarRating from './StarRating/StarRating'
import Loader from './Loader'
import { useRef } from 'react';
import useKey from '../hooks/useKey';


/**
 * Movie details component
 * 
 * @param {string} selectedId - The ID of the selected movie.
 * @param {function} onCloseMovie - A function to close the selected movie.
 * @param {function} onAddWatched - A function to add a movie to the watched movies list.
 * @param {array} watched - The list of watched movies.
 * 
 * @returns {JSX.Element} - The JSX element to render.
 */
function MovieDetails({selectedId, onCloseMovie, onAddWatched, watched
}) {
    const [movie, setMovie] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [ userRating, setUserRating ] = useState('');

    const countRef = useRef(0);

    //pentru a numara de cate ori ai dat click pe rating
    useEffect(function(){
      userRating && countRef.current++;
      },[userRating]
    );

    const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);
    const watchedUserRating = watched.find((movie) => movie.imdbID === selectedId)?.userRating;

    const {
      Title:title, 
      Year:year, 
      Poster:poster, 
      Runtime:runtime, 
      imdbRating, 
      Plot:plot, 
      Released:released, 
      Actors:actors, 
      Director: director, 
      Genre: genre
    } = movie




    /**
     * Handles the addition of a movie to the watched movies list.
     * 
     * It creates a new movie object with the selected movie ID, title, year, poster, IMDB rating, runtime, user rating, and the count of rating decisions.
     * The function then calls the onAddWatched function with the new movie object as an argument, and closes the selected movie.
     */
    function handleAdd(){
      // create a new movie object with the selected movie ID, title, year, poster, IMDB rating, runtime, user rating, and the count of rating decisions
      const newMovie = {
        imdbID: selectedId,
        title,
        year,
        poster,
        imdbRating: Number(imdbRating),
        runtime: Number(runtime.split(" ").at(0)),
        userRating,
        countRatingDecisions: countRef.current
      }
      
      // call the onAddWatched function with the new movie object as an argument
      onAddWatched(newMovie);
      // close the selected movie
      onCloseMovie();
    }


    useKey("Escape", onCloseMovie);
    

    useEffect(() => {
/**
 * Fetches detailed information about a movie from the OMDB API using the selected movie ID.
 * 
 * Sets the loading state to true before the request, and updates the movie state with the 
 * fetched data upon success. Finally, sets the loading state to false after the request.
 * 
 * @throws {Error} If the request fails.
 */
async function getMovieDetails() {
  try {
    // Set loading state to true before making the request
    setIsLoading(true);
    
    // Fetch movie details from OMDB API using the selected movie ID
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${selectedId}`
    );

    // Parse the response as JSON
    const data = await res.json();

    // Update the movie state with the fetched data
    setMovie(data);
  } catch (error) {
    // Handle any errors that occurred during the fetch
    console.error("Failed to fetch movie details:", error);
  } finally {
    // Set loading state to false after the request is completed
    setIsLoading(false);
  }
}
      getMovieDetails();
    }, [selectedId]);


    // Updates the page title with the movie title
    useEffect(() => {
      if (!title) return; // no movie selected, return
      document.title = `Movie | ${title}`; // sets the page title to "Movie | <movie title>"
      return function cleanup() {
        document.title = "usePopcorn"; // resets the page title to "usePopcorn" when the component is unmounted
      };
    }, [title]);


  return (
    <div className="details">
        {isLoading ? <Loader /> :
            <>
            <header>
                <button className="btn-back" onClick={onCloseMovie}> 
                    &larr;
                </button>
                <img src={poster} alt={`Poster of ${title} movie`} />
                <div className="details-overview">
                    <h2>{title}</h2>
                    <p>{released} &bull; {runtime}</p>
                    <p>{genre}</p>
                    <p><span>⭐</span>{imdbRating} IMDB rating</p>
                </div>
            </header>

            <section>
            <div className="rating">
                {!isWatched 
                ?
                  <>
                    <StarRating key={imdbRating} maxRating={10} size="24" defaultRating={Number(imdbRating || 0)}  onSetRating={setUserRating}/>
                    {userRating>0 && (<button className='btn-add' onClick={handleAdd}>+ Add to list</button>)}
                  </>
                :
                  <p>You rated this movie with {watchedUserRating} <span>⭐</span></p>
                }
            </div>
            <p>{plot}</p>
            <p><span>⭐</span>{imdbRating} IMDB rating</p>
            <p><span>👦</span>Starring {actors}</p>
            <p><span>👨‍💼</span>Directed by {director}</p>
        
            <button className="btn-back" onClick={onCloseMovie}> 
                &larr;
            </button>
            </section>
            </>
        }
    </div>
  )
}

export default MovieDetails
