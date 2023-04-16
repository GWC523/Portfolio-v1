import React, {useState} from 'react';

/* Images */
import laptop from "../Assets/Images/Room/room_laptop.svg"

/* CSS */
import "./Room.css"

function Room() {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div className='background'>
        <div 
            className='laptop-cont'
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            <img src={laptop} className='laptop-object'/>
        </div>
        {isHovering && (
          <div className='portfolio-screen'>
                <h2 className="title">
                <span className="title-word title-word-1">Por</span>
                <span className="title-word title-word-2">tf</span>
                <span className="title-word title-word-3">ol</span>
                <span className="title-word title-word-4">io</span>
            </h2>
          </div>
        )}
    </div>
  )
}

export default Room