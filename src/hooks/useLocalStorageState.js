import { useState, useEffect } from "react";


/**
 * Custom React hook to manage state synchronized with localStorage.
 *
 * @param {any} initialState - The initial state value to use if no value is found in localStorage.
 * @param {string} key - The key under which the state is stored in localStorage.
 * @returns {[any, Function]} - Returns the current state value and a function to update it.
 *
 * The hook initializes the state with a value from localStorage if available,
 * or with the provided initial state. It updates the localStorage whenever
 * the state changes.
 */
const useLocalStorageState = (initialState, key) => {
  const [value, setValue] = useState(() => JSON.parse(localStorage.getItem(key)) || initialState);

    useEffect(function(){
    localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);

  return [value, setValue];
}

export default useLocalStorageState