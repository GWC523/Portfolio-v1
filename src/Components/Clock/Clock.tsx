import React, {useState, useEffect} from 'react';

/* Images */
import ClockImg from '../../Assets/Images/Room/room_clock.svg';

/* CSS */
import './Clock.scss';

interface ClockProps {
  func: Function,
  isDay: Boolean,
}

function Clock({func, isDay} : ClockProps) {
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
        <div className={isDay ? 'time' : 'time clock-night'} onClick={() => func()}>
            <span className={isDay ? 'time-text' : 'time-text time-light'}>{date.toLocaleTimeString().replace('AM','').replace('PM','')}</span>
        </div>
    </>
  )
}

export default Clock