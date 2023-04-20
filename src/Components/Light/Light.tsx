import React, {useState} from 'react';

/* Images */
import StringLightImg from '../../Assets/Images/Room/room_light.svg';

/* CSS */
import './Light.scss';

interface LightProps {
  isOn: Boolean,
  isDay: Boolean
}

function Light({isOn, isDay}: LightProps) {
  return (
    <>
        <img src={StringLightImg} alt='string light' className={isDay ? 'string-light' : 'string-light night'}/>
        {isOn && (
            <>
            <div className='bulb-light-1 glow'></div>
            <div className='bulb-light-2 glow'></div>
            <div className='bulb-light-3 glow'></div>
            <div className='bulb-light-4 glow'></div>
            <div className='bulb-light-5 glow'></div>
            <div className='bulb-light-6 glow'></div>
            <div className='bulb-light-7 glow'></div>
            <div className='bulb-light-8 glow'></div>
            <div className='bulb-light-9 glow'></div>
            </>
        )}
    </>
  )
}

export default Light