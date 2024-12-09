import { useEffect } from "react";

const useKey = (key, action) => {



        useEffect(function(){
    /**
     * Handles Escape key press event
     * @function
     * @param {KeyboardEvent} event - event object
     * @listens document#keydown
     * @returns {void}
     */
      function callback (event) {
        if (event.code.toLowerCase() === key.toLowerCase()) {
          /**
           * Calls the action function when the key is pressed
           * @function
           * @returns {void}
           */
            action();
          }
      }
      
      document.addEventListener("keydown", callback);
      
      return function cleanup() {
          document.removeEventListener("keydown", callback);
        }
    
    }, [action, key]);
  return (
    <div>useKey</div>
  )
}

export default useKey