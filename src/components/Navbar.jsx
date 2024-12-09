import Logo from "./Logo";
/**
 * Navbar component
 * 
 * This component represents the navigation bar of the application. It includes
 * a logo and any child components passed to it.
 * 
 * @param {object} props - The props object.
 * @param {node} props.children - The child elements to render inside the navbar.
 * 
 * @returns {JSX.Element} - The JSX element representing the navbar.
 */
const Navbar = ({children}) => {
  
  return (
    <nav className="nav-bar">
      {/* Render the logo component */}
      <Logo />
      {/* Render any child components passed to the Navbar */}
      {children}
    </nav>
  )
}

export default Navbar