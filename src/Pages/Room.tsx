import React, {useState, useEffect, useRef} from 'react';
import Laptop from '../Components/Laptop/Laptop';

/* eslint-disable no-restricted-globals */
/* Assets */
import morningLofiMusic from "../Assets/Audio/Morning-Lofi-Music.mp3";


/* CSS */
import "./Room.scss"
import Cassette from '../Components/Cassette/Cassette';



function Room(): JSX.Element {
  const [isLandscape, setIsLandscape] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const togglePlay: Function = () => {
    const audio = audioRef.current;

    if (audio && isPlaying) {
      audio.pause();
    } 
    else if (audio && !isPlaying) {
      audio.play();
    }

    setIsPlaying(!isPlaying);

  }

  useEffect(() => {
    // Lock screen orientation to landscape mode
    const lockOrientation = () => {
      if (screen.orientation) {
        screen.orientation.lock('landscape');
      }
    };
    lockOrientation();
    // Unlock screen orientation on component unmount
    return () => {
      if (screen.orientation) {
        screen.orientation.unlock();
      }
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsLandscape(window.innerWidth > window.innerHeight);
    };

    handleResize(); // Call it initially

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
        {isLandscape ? (
            <div className='background'>
                <div className='laptop-cont'>
                <Laptop/>
                </div>
                <Cassette 
                    func={togglePlay}
                    isPlaying={isPlaying}
                />
                <audio ref={audioRef} src={morningLofiMusic} loop/>
            </div>
        ) : (
            <>
                Is Portrait
            </>
        )}
    </>
)
}

export default Room