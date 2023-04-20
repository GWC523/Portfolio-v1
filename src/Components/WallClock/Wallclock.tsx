import React, {useState} from 'react';

/* Images */
import WallClockImg from '../../Assets/Images/Room/room_wallclock.svg';

/* CSS */
import './WallClock.scss';

interface WallClockProps {
  func: Function,
  isDay: Boolean
}

function Wallclock({func, isDay}: WallClockProps) {
  return (
    <>
        <img src={WallClockImg} alt='wallclock' className={isDay ? 'wallclock' : 'wallclock night'} onClick={() => func()}/>
    </>
  )
}

export default Wallclock