import React, {useState} from 'react'

/* Images */
import PicturesImg from '../../Assets/Images/Room/room_pictures.svg';

/* CSS */
import './Pictures.scss';

function Pictures() {
  return (
    <>
        <img src={PicturesImg} alt="about Me" title='About me' className='pictures'/>
    </>
  )
}

export default Pictures