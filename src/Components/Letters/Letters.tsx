import React, {useState} from 'react';

/* Images */
import LettersImg from "../../Assets/Images/Room/room_letters.svg";

/* CSS */
import './Letters.scss';

interface LettersProps {
  isDay: Boolean
}

function Letters({isDay} : LettersProps) {
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
            className={isDay ? 'letters' : 'letters night'}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            title="Contact Me"
        />
        {isHovering && (
        <div className='sparkle-wrap'>
            <div className={isDay ? 'sparkle-1' : 'sparkle-1 sparkle-glow'}></div>
            <div className={isDay ? 'sparkle-2' : 'sparkle-2 sparkle-glow'}></div>
            <div className={isDay ? 'sparkle-3' : 'sparkle-3 sparkle-glow'}></div>
            <div className={isDay ? 'sparkle-4' : 'sparkle-4 sparkle-glow'}></div>
            <div className={isDay ? 'sparkle-5' : 'sparkle-5 sparkle-glow'}></div>
        </div>
        )}
    </>
  )
}

export default Letters