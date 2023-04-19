import React, {useState} from 'react';

/* Image */
import CupImg from '../../Assets/Images/Room/room_cup.svg';

/* CSS */
import './Cup.scss';

interface CupProps {
  func?: Function,
}

function Cup({func} : CupProps) {
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
            src={CupImg} 
            className='cup'
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            title="LinkedIn"
        />
        {isHovering && (
            <div id="steam-wrap">
                <div className="steam" id="steam-one"></div>
                <div className="steam" id="steam-two"></div>
                <div className="steam" id="steam-three"></div>
                <div className="steam" id="steam-four"></div>
            </div>
        )}
    </>
  )
}

export default Cup