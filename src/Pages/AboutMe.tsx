import React, {useState} from 'react';
import useMightyMouse from "react-hook-mighty-mouse";

/* CSS */
import './AboutMe.scss';
import Navbar from '../Components/Navbar/Navbar';
import ContactList from '../Components/ContactList/ContactList';

function AboutMe() {
  const [introStyle, setIntroStyle] = useState('prof');

   const {
    selectedElement: {
      position: { angle: angleLeftEye },
    },
  } = useMightyMouse(true, 'left-eye', { x: 20, y: 20 });
  const {
    selectedElement: {
      position: { angle: angleRightEye },
    },
  } = useMightyMouse(true, 'right-eye', { x: 20, y: 20 });

  let newAngleLeftEye = angleLeftEye! - 180;
  let newAngleRightEye = angleRightEye! -180;

  const rotateLeftEye = `rotate(${-newAngleLeftEye!}deg)`;
  const rotateRightEye = `rotate(${-newAngleRightEye!}deg)`;

  return (
    <div className='background-2'>
    <Navbar path={'/aboutMe'}/>
    <ContactList/>
    <div className='page'>
      <div className='row'>
      <div className='col-sm-6'>
        <h1 className='name'>Gwyneth Chiu</h1>
        <p className='introduction prof'>
          {introStyle === 'prof' ?
          "Are you in need of a junior software developer who can think outside the box and approach problems from multiple angles? Look to me (literally!)→👩🏻‍💻! With a passion in design, a love for learning, and an interest in AI, I bring a well-rounded perspective and a dedication to innovation to every project. Let's work together to create forward-thinking solutions that make a difference in the world."
          :
          'A 4th year computer science student at the University of the Philippines in Philippines (of course) looking for a junior software developer job 🇵🇭  Ever since I was a kid I was interested in web development. I remember making a Wordpress website and being proud of that easy creation. However, I did not cross my mind to learn programming and web development until I got into college. As a noob, I am trying my best to learn as much as I can! I am currently interested in web development with a specialty in ReactJS and Django. By the way, I love lo-fi and coffee!'
          }
        </p>
        <ul className='intro-option'>
          <li className='option'>
            <button className={introStyle === 'prof' ? 'prof-button chosen' : 'prof-button'} onClick={() => setIntroStyle('prof')}>🤵🏻‍♀️ Professional</button>
          </li>
          <li className='option'>
            <button className={introStyle === 'casual' ? 'prof-button chosen' : 'prof-button'} onClick={() => setIntroStyle('casual')}>🙋🏻‍♀️ Casual</button>
          </li>
        </ul>
      </div>
      <div className='col-sm-6'>
        <div className="eyes-follow">
          <div className="eyes">
            <div id="left-eye">
              <div className='left-eyebrow'></div>
              <div className="eye" style={{ transform: rotateLeftEye }}>
              <div className="pupil" />
              </div>
            </div>
            <div className='mouth'></div>
            <div id="right-eye">
              <div className='right-eyebrow'></div>
              <div className="eye" style={{ transform: rotateRightEye }}>
              <div className="pupil" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default AboutMe