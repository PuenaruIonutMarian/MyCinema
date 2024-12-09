import { useState } from "react";

/**
 * Box component
 * 
 * A box component that can be toggled open or closed. Accepts any children as
 * a prop and renders them when the box is open.
 * 
 * @param {JSX.Element} children - The children of the box.
 * 
 * @returns {JSX.Element} - The box component.
 */
const Box = ({children}) => {
  const [isOpen, setIsOpen] = useState(true);

  /**
   * Toggle the box open or closed.
   * 
   * @param {boolean} open - Whether to open or close the box.
   */
  const handleToggle = (open) => {
    setIsOpen(open);
  };
  
  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => handleToggle(!isOpen)}
      >
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && children }
    </div>
  )
}

export default Box