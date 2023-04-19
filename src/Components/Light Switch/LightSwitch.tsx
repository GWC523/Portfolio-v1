import React, {useState} from 'react';

/* CSS */
import './LightSwitch.scss';

interface LightSwitchProps {
  func: Function,
  state: Boolean
}


function LightSwitch({func, state}: LightSwitchProps) {
  return (
    <>
    <div 
        className={state ? "cube-switch active" : "cube-switch"}
        onClick={() => func()}
    >
    <span className="switch">
        <span className="switch-state off"></span>
        <span className="switch-state on"></span>
    </span>
    </div>

    </>
  )
}

export default LightSwitch