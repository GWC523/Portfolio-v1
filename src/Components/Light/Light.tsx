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
        <img src={StringLightImg} alt='string light' className={isDay ? 'string-light-2' : 'string-light-2 night'}/>
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
            <div className='bulb-light-10 glow'></div>
            <div className='bulb-light-11 glow'></div>
            <div className='bulb-light-12 glow'></div>
            <div className='bulb-light-13 glow'></div>
            <div className='bulb-light-14 glow'></div>
            <div className='bulb-light-15 glow'></div>
            <div className='bulb-light-16 glow'></div>
            <div className='bulb-light-17 glow'></div>
            <div className='bulb-light-18 glow'></div>
            </>
        )}
    </>
  )
}

export default Light