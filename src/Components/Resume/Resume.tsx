import React, {useState} from 'react'

/* Images */
import ResumeImg from '../../Assets/Images/Room/room_resume.svg';

/* CSS */
import './Resume.scss';

interface ResumeProps {
  isDay: Boolean,
}

function Resume({isDay} : ResumeProps) {

  let resume_file = 'https://drive.google.com/file/d/1Lyq_uwmoPdXafS9Qw-wqgz2C3nCHD1h4/view?usp=sharing';

  return (
    <>
        <img 
            src={ResumeImg} alt='resume' 
            title='resume' 
            className={isDay ? 'resume' : 'resume night'}
            onClick={() => { window.open(resume_file, '_blank', 'noreferrer') }}
        />
    </>
  )
}

export default Resume