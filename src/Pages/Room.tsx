import React, {useState, useEffect, useRef} from 'react';
import Laptop from '../Components/Laptop/Laptop';

/* Assets (Audio and Fonts)*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import morningLofiMusic from '../Assets/Audio/Morning-Lofi-Music.mp3';


/* CSS */
import './Room.scss'

/* Components and Images */
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
import Logo from '../Assets/Images/logo.svg';
import Modal from '../Components/Modal/Modal';
import RoomTitle from '../Assets/Images/Room/room_title.svg';
import RoomTagline from '../Assets/Images/Room/room_tagline.svg';



function Room(): JSX.Element {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isOn, setIsOn] = useState<boolean>(false);
  const [isMobileOn, setIsMobileOn] = useState<boolean>(true);
  const [isDay, setIsDay] = useState<boolean>(true);
  const [showModal, setShowModal] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const copyRef = useRef<HTMLInputElement>(null);

  const togglePlay: Function = () => {
    //Lofi Music
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
    //For Lights
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

  const handleCopyToClipboard = (str: any) => {
    if(copyRef.current) {
      copyRef.current.select();
      navigator.clipboard.writeText(str)
    }
  }

  const copyToClipboardInput = () => {
    return (
      <div className='copy-modal-container'>
      <div className='copy-text'>
        <input type='text' className='copy-text-input' ref={copyRef} value='gwchiu@up.edu.ph' />
        <button onClick={() => handleCopyToClipboard('gwchiu@up.edu.ph')}>
          <FontAwesomeIcon
            icon={'clone'}
            title={'copy to clipboard'}
            aria-hidden='true'
            className='copy-icon'
          />
        </button>
      </div>
      </div>
    )
  }


  useEffect(() => {
    //Handle day or night mode
    const hours = new Date().getHours()
    const isDayTime = hours > 6 && hours < 18

    if(isDayTime) {
      setIsDay(true);
    } else {
      setIsDay(false);
    }

    //Handle Screen Size
    const handleMobile = () => {
      setIsMobile(window.innerWidth < 980);
    };

    handleMobile();

    window.addEventListener('resize', handleMobile);

    return () => {
      window.removeEventListener('resize', handleMobile);
    };
  }, []);


  return (
    <>
        {(!isMobile)? (
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
              <div className='room-title-cont'>
                <img src={RoomTitle} className={isDay ? 'room-title' : 'room-title night'}/>
              </div>
              <div className='room-tagline-cont'>
                <img src={RoomTagline} className={isDay ? 'room-tagline' : 'room-tagline night'}/>
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
              <div className='cassette-cont'>
                <Cassette 
                    func={togglePlay}
                    isPlaying={isPlaying}
                    isDay={isDay}
                />
              </div>
                <Modal
                  title='Contact Me'
                  subTitle='via email'
                  showModal={showModal}
                  setShowModal={setShowModal}
                  children={copyToClipboardInput()}
                />
              <div className='table-cont'>
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
                    <Letters isDay={isDay} setShowModal={setShowModal}/>
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
                <img src={Logo} alt='gwc.' className='logo'/>
                <div className='lamp-2 js-turnoff-btn' onClick={() => setIsMobileOn(!isMobileOn)}>
                  <div className='lamp-2-item lamp-2-top'></div>
                  <div className='lamp-2-item lamp-2-middle'></div>
                  <div className='lamp-2-item lamp-2-bottom'></div>
                  <div className={isMobileOn ? 'lamp-2-item lamp-2-light open-2' : 'lamp-2-item'}></div>
                </div>
                  <LaptopMobile/>
                  <div className='tagline-cont'>
                    <h1 className='big-text'>
                    <ConsoleText
                      text='Crafting code with a passion'
                      speed={70}
                      cursor={true}
                      cursorChar='_'
                      delay={1}
                    />
                    </h1>
                    <div className='tagline-cont-2'>
                      <span className='delay-appear-1'>for </span>
                      <span className='delay-appear-2'>
                          <span className='title-word-mobile title-word-1-mobile'>c</span>
                          <span className='title-word-mobile title-word-2-mobile'>r</span>
                          <span className='title-word-mobile title-word-3-mobile'>e</span>
                          <span className='title-word-mobile title-word-4-mobile'>a</span>
                          <span className='title-word-mobile title-word-2-mobile'>t</span>
                          <span className='title-word-mobile title-word-3-mobile'>i</span>
                          <span className='title-word-mobile title-word-1-mobile'>v</span>
                          <span className='title-word-mobile title-word-4-mobile'>i</span>
                          <span className='title-word-mobile title-word-2-mobile'>t</span>
                          <span className='title-word-mobile title-word-4-mobile'>y</span>
                      </span>
                      <span className='delay-appear-3'> and </span>
                      <span className='delay-appear-4'>innovation.</span>
                    </div>
                    <div className='tabs-cont'>
                        <ul className='tabs'>
                          <li>
                            <button type='button' className='tab-btn'>INDEX</button>
                          </li>
                          <li>
                            <button type='button' className='tab-btn inactive'>ABOUT</button>
                          </li>
                          <li>
                            <button type='button' className='tab-btn inactive'>WORKS</button>
                          </li>
                          <li>
                            <button type='button' className='tab-btn inactive'>CONTACT</button>
                          </li>
                        </ul>
                    </div>
                  </div>
              </div>
            </>
        )}
    </>
)
}

export default Room