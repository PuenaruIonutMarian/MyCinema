  import Star from "./Star"
  import { useState } from "react"
  import PropTypes from 'prop-types';


/**
 * A StarRating component that displays a rating of up to 5 stars. It 
 * accepts the following props: maxRating, color, size, className, messages, defaultRating, onSetRating
 * 
 * @param {object} props - Props object with the following properties:
 *  - maxRating (number): The number of stars in the rating. Default is 3.
 *  - color (string): The color of the stars. Default is '#fcc419'.
 *  - size (string): The size of the stars. Default is '48px'.
 *  - className (string): The class name for the component. Default is ''.
 *  - messages (array): An array of messages to be displayed based on the rating. Default is an empty array.
 *  - defaultRating (number): The default rating. Default is 0.
 *  - onSetRating (function): A function to call when the rating changes.
 * 
 * @returns {JSX.Element} - The JSX element to render.
 */
const StarRating = ({
    maxRating=3,
    color='#fcc419',
    size='48',
    className='',
    messages=[],
    defaultRating=0,
    onSetRating
  }) => {
  const [rating, setRating] = useState(defaultRating)
  const [tempRating, setTempRating] = useState(0);

  /**
   * The style for the text element.
   * @type {object}
   */
  const textStyle = {
  lineHeight: '0',
  margin: '0',
  color: color,
  fontSize: `${size/1.5}px`,
}

  /**
   * The function to handle the rating. It sets the rating and calls the onSetRating function.
   * @param {number} newRating - The new rating.
   */
  const handleRating = (newRating) => {
    setRating(newRating);
    onSetRating(newRating);
  }

  return (
    <div style={containerStyle} className={className}>
      <div style={starContainerStyle}>
        {Array.from({length:maxRating}, (_,i) => (
          <Star 
            key={i} 
            onRate={() => handleRating(i+1)}
            full={tempRating ? tempRating >= i+1 : rating >= i+1}
            onHoverIn={() => setTempRating(i+1)}
            onHOverOut={() => setTempRating(0)}
            color={color}
            size={size}
            />
          ))}
      </div>
      <p style={textStyle}>{messages.length === maxRating ? messages[tempRating ? tempRating-1 : rating-1] : tempRating || rating || ''}</p>
    </div>
  )
}


 StarRating.propTypes ={
  maxRating: PropTypes.number,
  color: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
  messages: PropTypes.array,
  defaultRating: PropTypes.number,
  onSetRating: PropTypes.func
}
 
const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap:'16px',
  }

const starContainerStyle = {
    display: 'flex',
}


export default StarRating