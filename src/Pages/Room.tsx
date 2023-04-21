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
import Pictures from '../Components/Pictures/Pictures';
import Resume from '../Components/Resume/Resume';
import Note from '../Assets/Images/Room/room_note.svg';
import Plant from '../Assets/Images/Room/room_plant.svg';
import LaptopMobile from '../Components/LaptopMobile/LaptopMobile';
import ConsoleText from '../Components/ConsoleText/ConsoleText';



function Room(): JSX.Element {
  const [isLandscape, setIsLandscape] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isOn, setIsOn] = useState<boolean>(false);
  const [isMobileOn, setIsMobileOn] = useState<boolean>(true);
  const [isDay, setIsDay] = useState<boolean>(true);

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

  const toggleDay: Function = () => {
    setIsDay(!isDay);
   
    if(!isDay) {
      setIsOn(false)
    } else {
      setIsOn(true);
    }
  }

  useEffect(() => {
    //Mobile text
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
            <div className={isDay ? 'background' : 'background-night'}>
              <img src={Shelf} className={isDay ? 'shelf' : 'shelf night'}/>
              <img src={Plant} className={isDay ? 'plant' : 'plant night'}/>
              <div className={'light-switch-cont'}>
                <LightSwitch
                  func={toggleOn}
                  isDay={isDay}
                  state={isOn}
                />
              </div>
              <div className='string-light-cont'>
                <Light
                  isOn={isOn}
                  isDay={isDay}
                />
              </div>
              <div className={isDay ? 'pictures-cont' : 'pictures-cont night'}>
                <Pictures/>
              </div>
              <div className={'resume-cont'}>
                <Resume
                  isDay={isDay}
                />
              </div>
              <div className='note-cont'>
                <img src={Note} alt='note' className={isDay ? 'note' : 'note night'}/>
              </div>
              <div className='window-cont'>
                <img src={Window} className={isDay ? 'window' : 'window night-2'}/>
              </div>
              <div className='table-wrapper'>
                  <div className={isDay ? 'table-object' : 'table-object table-night'}></div>
              </div>
              <div className='laptop-cont'>
                <Laptop
                  isDay={isDay}
                />
              </div>
              <div className='table-cont'>
                <div className='cassette-cont'>
                <Cassette 
                    func={togglePlay}
                    isPlaying={isPlaying}
                    isDay={isDay}
                />
                </div>
                <div className='cup-cont'>
                  <Cup isDay={isDay}/>
                </div>
                <div className={isDay ? 'pencilcase-cont' : 'pencilcase-cont night'}>
                    <img src={PencilCase} className='pencilcase'/>
                </div>
                <div className={isDay ? 'vase-cont' : 'vase-cont night'}>
                    <img src={Vase} className='vase'/>
                </div>
                <div className='letters-cont'>
                    <Letters isDay={isDay}/>
                </div>
                <div className='time-cont'>
                  <Clock func={toggleDay} isDay={isDay}/>
                </div>
                <div className='lamp-cont'>
                  <Lamp isDay={isDay}/>
                </div>
              
                  <audio ref={audioRef} src={morningLofiMusic} loop/>
              </div>
             </div>
        ) : (
            <>
              <div className='background-mobile'>
                <div className="lamp-2 js-turnoff-btn" onClick={() => setIsMobileOn(!isMobileOn)}>
                  <div className="lamp-2-item lamp-2-top"></div>
                  <div className="lamp-2-item lamp-2-middle"></div>
                  <div className="lamp-2-item lamp-2-bottom"></div>
                  <div className={isMobileOn ? "lamp-2-item lamp-2-light open-2" : "lamp-2-item"}></div>
                  <LaptopMobile/>
                  <div className='tagline-cont'>
                    <ConsoleText
                      text="Hello, World!"
                      speed={50}
                      cursor={true}
                      cursorChar="_"
                    />
                  </div>
                </div>
              </div>
            </>
        )}
    </>
)
}

export default Room