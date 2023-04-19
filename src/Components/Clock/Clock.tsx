import React, {useState, useEffect} from 'react';

/* Images */
import ClockImg from '../../Assets/Images/Room/room_clock.svg';

/* CSS */
import './Clock.scss';

function Clock() {
  const [date, setDate] = useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }

  useEffect(() => {
    const intervalId = setInterval(refreshClock, 1000);
    return function cleanUp () {
        clearInterval(intervalId);
    }
  }, [])

  return (
    <>
        <div className='time'>
            <span className='time-text'>{date.toLocaleTimeString().replace("AM","").replace("PM","")}</span>
        </div>
    </>
  )
}

export default Clock