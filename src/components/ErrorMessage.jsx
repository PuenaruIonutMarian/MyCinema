import React from 'react'

/**
 * A component that displays an error message.
 *
 * @param {{ message: string }} props
 * @prop {string} message - The error message to be displayed.
 * @returns {JSX.Element} - A JSX element representing the error message.
 */
function ErrorMessage({ message }) {
  return (
    <p className="error">
      <span>  </span>{message}
    </p>
  );
}

export default ErrorMessage