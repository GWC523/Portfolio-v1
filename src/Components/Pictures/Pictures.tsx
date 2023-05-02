import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

/* Images */
import PicturesImg from '../../Assets/Images/Room/room_pictures.svg';

/* CSS */
import './Pictures.scss';

function Pictures() {
  let navigate = useNavigate();

  return (
    <>
        <img src={PicturesImg} alt='about Me' title='About me' className='pictures' onClick={() => navigate('/aboutMe')}/>
    </>
  )
}

export default Pictures