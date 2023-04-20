import React, {useState} from 'react';

/* CSS */
import './LightSwitch.scss';

interface LightSwitchProps {
  func: Function,
  isDay: Boolean,
  state: Boolean
}

function LightSwitch({func, isDay, state}: LightSwitchProps) {
  return (
    <>
    <div 
        className={state ? isDay ? "cube-switch active" : "cube-switch active night"  : isDay ? "cube-switch" : "cube-switch night"}
        onClick={() => func()}
    >
    <span className="switch ">
        <span className="switch-state off"></span>
        <span className="switch-state on"></span>
    </span>
    </div>

    </>
  )
}

export default LightSwitch