import React, {useState} from 'react';

/* Images */
import LettersImg from "../../Assets/Images/Room/room_letters.svg";

/* CSS */
import './Letters.scss';

function Letters() {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  
  return (
    <>
        <img 
            src={LettersImg} 
            alt='letters' 
            className='letters'
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        />
        {isHovering && (
        <div className='sparkle-wrap'>
            <div className='sparkle-1'></div>
            <div className='sparkle-2'></div>
            <div className='sparkle-3'></div>
            <div className='sparkle-4'></div>
            <div className='sparkle-5'></div>
        </div>
        )}
    </>
  )
}

export default Letters