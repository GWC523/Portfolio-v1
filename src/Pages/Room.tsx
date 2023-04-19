import React, {useState, useEffect, useRef} from 'react';
import Laptop from '../Components/Laptop/Laptop';

/* eslint-disable no-restricted-globals */
/* Assets */
import morningLofiMusic from "../Assets/Audio/Morning-Lofi-Music.mp3";


/* CSS */
import "./Room.scss"

/* Images */
import Cassette from '../Components/Cassette/Cassette';
import Cup from '../Components/Cup/Cup';
import PencilCase from '../Assets/Images/Room/room_pencilcase.svg';
import Vase from '../Assets/Images/Room/room_vase.svg';
import Letters from '../Components/Letters/Letters';
import Clock from '../Components/Clock/Clock';
import Lamp from '../Components/Lamp/Lamp';
import Window from '../Assets/Images/Room/room_windows.svg';
import Shelf from '../Assets/Images/Room/room_shelf.svg';
import Light from '../Components/Light/Light';
import LightSwitch from '../Components/Light Switch/LightSwitch';



function Room(): JSX.Element {
  const [isLandscape, setIsLandscape] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isOn, setIsOn] = useState<boolean>(false);

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

  const toggleOn: Function = () => {
    setIsOn(!isOn);
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

    console.log(window.innerWidth < 980)

    const handleMobile = () => {
      setIsMobile(window.innerWidth < 980);
    };

    handleResize(); // Call it initially
    handleMobile();

    window.addEventListener('resize', handleResize);
    window.addEventListener('resize', handleMobile);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
        {(isLandscape && !isMobile)? (
            <div className='background' >
              <img src={Shelf} className='shelf'/>
              <div className='light-switch'>
                <LightSwitch
                  func={toggleOn}
                  state={isOn}
                />
              </div>
              <div className='string-light-cont'>
                <Light
                  isOn={isOn}
                />
              </div>
              <img src={Window} className='window'/>
              <div className='table-cont'>
                <div className='laptop-cont'>
                <Laptop/>
                </div>
                <div className='cassette-cont'>
                <Cassette 
                    func={togglePlay}
                    isPlaying={isPlaying}
                />
                </div>
                <div className='cup-cont'>
                  <Cup/>
                </div>
                <div className='pencilcase-cont'>
                    <img src={PencilCase} className='pencilcase'/>
                </div>
                <div className='vase-cont'>
                    <img src={Vase} className='vase'/>
                </div>
                <div className='letters-cont'>
                    <Letters/>
                </div>
                <div className='time-cont'>
                  <Clock/>
                </div>
                <div className='lamp-cont'>
                  <Lamp/>
                </div>
              

                <div className='table-wrapper'>
                  <div className='table-object'>
                  </div>
                </div>
                  <audio ref={audioRef} src={morningLofiMusic} loop/>
              </div>
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