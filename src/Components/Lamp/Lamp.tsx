import React, {useState} from 'react'

/* Images */
import LampImg from "../../Assets/Images/Room/room_lamp.svg";

/* CSS */
import "./Lamp.scss";

function Lamp() {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [isOn, setOn] = useState<boolean>(false);

  const toggleLamp = () => {
    setOn(!isOn)
  }

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <>
        <img 
            src={LampImg} 
            alt="lamp" 
            className='lamp'
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onClick={toggleLamp}
        />
        {(isHovering || isOn) && (
            <>
            <div className='light'>
            </div>
            <div className='spot-light'>
            </div>
            </>
        )}
    </>
  )
}

export default Lamp