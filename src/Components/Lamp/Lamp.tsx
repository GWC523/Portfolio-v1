import React, {useState} from 'react'

/* Images */
import LampImg from "../../Assets/Images/Room/room_lamp.svg";

/* CSS */
import "./Lamp.scss";

function Lamp() {
  const [isOn, setOn] = useState<boolean>(false);

  const toggleLamp = () => {
    setOn(!isOn)
  }

  return (
    <>
        <img 
            src={LampImg} 
            alt="lamp" 
            className='lamp'
            onClick={toggleLamp}
        />
        {(isOn) && (
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