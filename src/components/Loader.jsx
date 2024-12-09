import React from 'react'

/**
 * A simple loader component that displays a "Loading..." message.
 *
 * @function
 * @returns {JSX.Element} - A JSX element representing the loader.
 */
function Loader() {
  return (
    <div className="loader">
      <span>Loading...</span>
    </div>
  );
}

/**
 * PropTypes
 *
 * @type {object}
 */
Loader.propTypes = {};

export default Loader