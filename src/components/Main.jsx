/**
 * The main application component that renders the main content.
 * 
 * This component is a container component that renders the main content
 * of the application, including the search bar, movie list, and movie
 * details.
 * 
 * @param {object} props - The props object.
 * @param {node} props.children - The child elements to render.
 * @returns {ReactElement} The main application component.
 */
const Main = ({children}) => {

  return (
    <main className="main">
        {/* Render the child elements. */}
        {children}  
      </main>
  )
}


export default Main