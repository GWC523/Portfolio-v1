import React, {useState, useEffect} from 'react'

/* Images */
import LampImg from "../../Assets/Images/Room/room_lamp.svg";

/* CSS */
import "./Lamp.scss";

interface Lamprops {
  isDay: Boolean
}

function Lamp({isDay} : Lamprops) {
  const [isOn, setOn] = useState<boolean>(false);

  const toggleLamp = () => {
    setOn(!isOn);
  }

  useEffect(() => {
    if(!isDay) {
      setOn(true)
    }
  }, [isDay])

  

  return (
    <>
      <input id='light' type='checkbox' checked={isOn}/>
      <label className={isDay ? isOn ? 'light' : 'light off': isOn ? 'light night-switch' : 'light night-switch off'} htmlFor='light' onClick={() => toggleLamp()}></label>
      <div className={isDay ? "lamp-base" : "lamp-base night"}></div>
      <div className={isDay ? "tube" : "tube night"}></div>
      <div className={isDay ? "lamp-shade" : "lamp-shade night"}></div>
    </>
  )
}

export default Lamp