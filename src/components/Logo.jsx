import React from 'react'

/**
 * A logo component that displays a popcorn emoji and the text "usePopcorn".
 *
 * @returns {React.ReactElement} A JSX element representing the logo.
 */
const Logo = () => {
  return (
    <div className="logo">
 
      {/* The text "usePopcorn" is displayed next to the logo. */}
      <h1>My Cinema</h1>
           {/* The popcorn emoji is used as the logo for the application. */}
      <span role="img">📽️</span>
    </div>
  );
}


export default Logo